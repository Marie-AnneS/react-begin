import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

import base from "../base";

class App extends React.Component {
  //2 ways to have a state : 1 est de le mettre dans un constructeur
  // constructor() {
  //   super();
  //   this.state = {}
  // }  ou la 2e facon ci-bas
  state = {
    fishes: {},
    order: {}
  };

  static propTypes = {
    match: PropTypes.object
  }

  componentDidMount() {
    const { params } = this.props.match;
    //first reinstate our localStorage
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish = fish => {
    // creer une copies du state existant
    const fishes = { ...this.state.fishes };
    // ajouter le nouveau fish dans la const fishes
    fishes[`fish${Date.now()}`] = fish;
    //setState
    // fishes: fishes
    this.setState({ fishes });
  };
  updateFish = (key, updateFish) => {
    // 1. take a copy of the current state
    const fishes = { ...this.state.fishes };
    // 2. update that state
    fishes[key] = updateFish;
    // 3. set that to state
    this.setState({ fishes });
  };

  deleteFish = key => {
    //1. take a copy of the state
    const fishes = { ...this.state.fishes };
    /*  si c est un array
    const fishes = this.state.fishes.filter */
    // 2.update the state
    fishes[key] = null;
    // 3.update state
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = key => {
    // 1. prendre une copies du state existant
    const order = { ...this.state.order };
    // 2.ajouter une commande ou update le nombre de commande
    order[key] = order[key] + 1 || 1;
    // 3. call setState et update le state
    this.setState({ order });
  };

  removeToOrder = key => {
    // 1. take copy of the state
    const order = { ...this.state.order };
    // 2. remove the fish in the order
    /* pas besoin de mettre a null car ce n est pas dans firebase
    order[key] = null; */
    delete order[key];
    // 3. update the Order
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          removeToOrder={this.removeToOrder}
        />
        <Inventory
          fishes={this.state.fishes}
          loadSampleFishes={this.loadSampleFishes}
          addFish={this.addFish}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          storeId={this.props.match.params.storeId}
        />
      </div>
    );
  }
}

export default App;

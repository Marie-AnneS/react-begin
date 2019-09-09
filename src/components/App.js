import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

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

  addFish = fish => {
    // creer une copies du state existant
    const fishes = { ...this.state.fishes };
    // ajouter le nouveau fish dans la const fishes
    fishes[`fish${Date.now()}`] = fish;
    //setState
    // fishes: fishes
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = (key) => {
    // 1. prendre une copies du state existant
    const order = { ...this.state.order };
    // 2.ajouter une commande ou update le nombre de commande
    order[key] = order[key] + 1 || 1
    // 3. call setState et update le state
    this.setState({ order });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />
            ))}
          </ul>
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;

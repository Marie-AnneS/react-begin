import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";

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
    alert("Loading Sample");
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
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

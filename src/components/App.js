import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";

class App extends React.Component {

    state = {
        fishes: {},
        order: {}
    }

    addFish = (fish) => {
        //1. Take a cope of the existing state - you don't want to modify it directly
        const fishes = { ...this.state.fishes };
        //2.add new fish to fishes variable
        fishes[`fish${Date.now()}`] = fish;
        //3.set new fishes object to state
        this.setState({
            //can remove one fishes since they both have the same name, but I've left it in for clarity
            fishes: fishes
        });

    }

    loadSampleFishes = () => {
        this.setState({
            fishes: sampleFishes
        })
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline='Fresh Seafood Market' />
                </div>
                <Order />
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
            </div>

        )
    }
}

export default App;

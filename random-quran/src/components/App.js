import React, { Component } from "react";

import unsplash from "../api/unsplash";
import quran from "../api/quran";

import Ayah from './Ayah';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ayah: null,
      image: ""
    };
  }

  async componentDidMount() {
    const ayahResponse = await quran.get(
      `v1/ayah/${Math.floor(Math.random() * 6236 + 1)}`
    );
    console.log(ayahResponse);
    this.setState({ ayah: ayahResponse });

    const response = await unsplash.get("/photos/random", {
      params: { query: "nature" }
    });
    this.setState({ image: response.data.urls.full });
  }

  render() {
    if (!this.state.ayah) return <div>Nope</div>;
    return (
      <div className="body">
        <div className="transbox">
          <Ayah data={this.state.ayah}/>
        </div>
        <div
          style={{
            content: "",
            background: `url(${
              this.state.image
            }) no-repeat center center/cover`,
            // opacity: 0.5,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            zIndex: -1
          }}
        />
      </div>
    );
  }
}

export default App;

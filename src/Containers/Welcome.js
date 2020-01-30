import React from "react";
import lottie from "lottie-web";
import welcome from "../Animation/welcome";
let welcomeAnimObj = null;

class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      speed: 1
    };
  }
  componentDidMount() {
    welcomeAnimObj = lottie.loadAnimation({
      container: this.welcomeAnim,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: welcome
    });
  }

  play = () => {
    welcomeAnimObj.play();
  };

  pause = () => {
    welcomeAnimObj.pause();
  };

  stop = () => {
    welcomeAnimObj.stop();
  };

  changeSpeed = e => {
    const speed = e.target.value;
    this.setState({ speed });
    welcomeAnimObj.setSpeed(speed);
  };

  render() {
    return (
      <div className="container">
        <div className="welcome" ref={ref => (this.welcomeAnim = ref)} />
        <button onClick={this.play}>Play</button>
        <button onClick={this.pause}>Pause</button>
        <button onClick={this.stop}>Stop</button>
        <input
          type="range"
          min="1"
          max="10"
          onChange={this.changeSpeed}
          value={this.state.speed}
        />{" "}
        Speed: {this.state.speed}
      </div>
    );
  }
}

export default Welcome;

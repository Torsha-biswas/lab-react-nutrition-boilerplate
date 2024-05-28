import React, { Component } from "react";
import PropTypes from "prop-types";
import "./FoodBox.css"; // Import CSS file for component styling

export default class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
      totalCalories: 0,
    };
  }

  handleInput = (event) => {
    this.setState({
      quantity: event.target.value,
    });
  };

  handleButton = () => {
    const { foodItem } = this.props;
    const quantity = parseInt(this.state.quantity, 10);
    this.setState({
      totalCalories: quantity * foodItem.cal,
    });
  };

  handleReset = () => {
    this.setState({
      quantity: 0,
      totalCalories: 0,
    });
  };

  render() {
    const { foodItem } = this.props;
    
    return (
      <div className="food-box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={foodItem.img} alt={foodItem.name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{foodItem.name}</strong><br/>
                <small>{foodItem.cal} calories</small>
              </p>
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    value={this.state.quantity}
                    onChange={this.handleInput}
                  />
                </div>
                <div className="control">
                  <button
                    className="button is-info"
                    onClick={this.handleButton}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="result">
                <p>Quantity: {this.state.quantity}</p>
                <p>Total Calories: {this.state.totalCalories}</p>
              </div>
              <button className="button is-danger" onClick={this.handleReset}>
                Reset
              </button>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

FoodBox.propTypes = {
  foodItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    cal: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

// Write your code here
import {Component} from 'react'
import './index.css'
class RandomNumberGenerator extends Component {
  state = {num: 0}
  randomnum = () => {
    let random = Math.ceil(Math.random() * 100)
    this.setState({num: random})
  }
  render() {
    const {num} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="btn" type="button" onClick={this.randomnum}>
            Generate
          </button>
          <p className="number">{num}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator

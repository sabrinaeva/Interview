import React, {Component} from 'react';
import Square from './Square'

class Board extends Component {
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      XIsNext: true
    }
  }

  renderSquare (i){
    return <Square value={this.state.squares[i]} onClick = {() => this.handleClick(i)}/>

  }
  handleClick (i){
    const squares = this.state.squares.slice();
    if(squares[i]){
      return;
    }
    squares[i] = this.state.XIsNext ? 'X':'O';
    this.setState({
      squares:squares,
      XIsNext: !this.state.XIsNext
    })
  }

  render (){
    return (
        <div className="board">
          <label>Next Player is：{this.state.XIsNext ? 'X' : 'O'}</label>
          <div className="rowData">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
          </div>
          <div  className="rowData">
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            {this.renderSquare(6)}
            {this.renderSquare(7)}

          </div>
          <div  className="rowData">
            {this.renderSquare(8)}
            {this.renderSquare(9)}
            {this.renderSquare(10)}
            {this.renderSquare(11)}

          </div>
          <div  className="rowData">
            {this.renderSquare(12)}
            {this.renderSquare(13)}
            {this.renderSquare(14)}
            {this.renderSquare(15)}
          </div>
        </div>
    )
  }
}
export default Board;
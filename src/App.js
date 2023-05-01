import React from "react";

const Square = (props) => {
  return(
   <button className={'square'} onClick={props.onClick}>
       {props.value}
   </button>
  )
}

class Board extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          squares: Array(9).fill(null),
          xIsNext: true,
      }
  }

  handleCLick(i) {
      const squares = this.state.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
          return
      }
      squares[i] = this.state.xIsNext ? 'X' : '0';
      this.setState({
          squares: squares,
          xIsNext: !this.state.xIsNext
      })
  }

    renderSquare(i) {
    return <Square
    value={this.state.squares[i]}
    onClick={() => this.handleCLick(i)}
    />
  }
  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
        status = 'Winner' + winner
    }else {
        status = 'Next player' + (this.state.xIsNext ? 'X' : 'Y')
    }

    return (
      <div>
        <div className='status'>{status}</div>
        <div className='board-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

class Game extends React.Component {
  render() {
    return (
        <div className='game'>
          <div className='game-board'>
            <Board />
          </div>
          <div className='game-info'>
            <div></div>
            <ol></ol>
          </div>
        </div>
    )
  }
}
export default Game;

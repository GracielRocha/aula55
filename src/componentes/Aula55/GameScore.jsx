import React from 'react';
class GameScore extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Points:0
        }
    }
    componentDidMount() {
        alert(JSON.stringify(this.state))
    }
    componentDidUpdate(){
        alert("Pontos: " + JSON.stringify(this.state))
    }

    updatepoints() {
        this.setState({Points:this.state.Points +1})
    }
    render() {
        <div>
              <button onClick={() => this.updatePoints()}>Registrar Ponto</button>
                Pontos: {this.state.points}

        </div>
    }
}
export default GameScore
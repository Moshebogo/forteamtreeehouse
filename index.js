const players = [
    {
        name: "Eli",
        score: 55,
        id: 1 
    },
    {
        name: "Moshe",
        score: 65,
        id: 2
    },
    {
        name: "Jack",
        score: 70,
        id: 3
    },
    {
        name: "Bob",
        score: 75,
        id: 4
    },
]

const Header = (props) => {
    return (
        <header>
            <h1>{ props.title }</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    )
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                { props.name }
            </span>

            <Counter />
        </div>
        
    );
}

class Counter extends React.Component{

   state = {
    score: 0
   }

   incrementScore() {

   }
    render() {
        return (
            <div className="counter">
                    <button className="counter-action decrement"> - </button>
                    <span className="counter-score">{this.props.score}</span>
                    <button className="counter-action increment" onClick={this.incrementScore}></button>
            </div>
       );
    }
   
}

const App = (props) => {
    return (
        <div className="scorebaord">
            <Header 
             title="Scoreboard"
             totalPlayers={props.initialPlayers.length} 
             />
            
            {/* List of players. */}
            {props.initialPlayers.map(player => {
                <Player
                 name={player.name}
                 score={player.score}
                 key={player.id.toString()} />
            })}
        </div>
     
    ); 

}

ReactDOM.render(
    <App initialPlayers={players} />,
    document.getElementById('root')
)
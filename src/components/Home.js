import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Home extends Component{
    render()
    {
        return(
            <div>
            <h1>
                Snake Game
            </h1>
            <p>
                This  is a snake game
            </p>
            <Link to="/game">Play game</Link>
            </div>
            
            

        )
    }
};
export default Home;

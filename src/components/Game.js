import React from 'react';
class Game extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            gameMatrix:[]

        }
    }

    static getDerivedStateFromProps(props,state){
        var temp=[];
        for(var i=0;i<19;i++)
        {
            var temp2=[];
            for(var j=0;j<19;j++)

        }
    }
    render()
    {
        return(
            <div className="game-container">
                {

                }

            </div>
        )
    }
};

export default Game;
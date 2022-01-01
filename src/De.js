import React from 'react';
class De extends React.Component{
    constructor(props){
        super(props);
        this.state={
            De1img : <img src={"./DE1.png"} alt="DE1"/>,
            De2img : <img src={"./DE1.png"} alt="DE2"/>,
            count : 0,
            score : 0,
            onclick: true,
            text : "Let's Play",
        }; 
        this.initialState = {...this.state};
        this.handleClick = this.handleClick.bind(this);
        this.resultat = this.resultat.bind(this);
        this.reset = this.reset.bind(this);
    }
    // cette méthode nous permet de changer l'état des stats
    resultat(){
            this.a = this.props.De1;
            this.b = this.props.De2;
            // si les 2 faces égaux 
            if(this.a === this.b){
                this.setState({
                    text:"YOU WIN !!!",
                    score: (this.state.score)+1,
                    De1img:<img src={"./DE"+this.a+".png"} alt="DE1"/>,
                    De2img:<img src={"./DE"+this.b+".png"} alt="DE2"/>,
                    count: this.state.count+1,
                });
            } else{ // sinon on ne modifie pas score 
                this.setState({
                    text:"Try Again",
                    De1img:<img src={"./DE"+this.a+".png"} alt="DE1"/>,
                    De2img:<img src={"./DE"+this.b+".png"} alt="DE2"/>,
                    count: this.state.count+1,
                });
            }
        }
    // la méthode qui fait appel à la méthode resultat lorsqu'on clique sur le bouton play
    handleClick(e){
        this.props.fun();
        this.resultat();
        if(this.state.count ===9){
            this.setState({
                onclick: false,
                text:"GAME OVER !! Score:"+this.state.score,
        });
        }
    }
    // la méthode qui nous permet de rejouer lorsqu'on clique sur reset
    reset(e){
        e.preventDefault();
        this.setState(this.initialState);
    }
    
    render(){
        
        return(
            <div className="center">
                <h1 id="title">{this.state.text}</h1>
                <h3>{10-this.state.count}</h3>
                {this.state.De1img}
                {this.state.De2img}
                <br/>
                <div className="bouton">
                    <button id="play" onClick={this.state.onclick ? this.handleClick : null}>Play</button>
                    <button id="reset" type="reset" onClick={this.reset}>Reset</button>
                </div>
                
                
            </div>

        )
    }
} 
export default De;

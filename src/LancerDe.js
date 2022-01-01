import React from 'react';
import De from './De';
class LancerDe extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            De1img : <img src={"./DE1.jpeg"} alt="DE1"/>,
            De2img : <img src={"./DE1.jpeg"} alt="DE1"/>,
            De1:Math.floor(Math.random() * 6) + 1,
            De2:Math.floor(Math.random() * 6) + 1,
        };
        this.lancer = this.lancer.bind(this);
    }
    // fonction flèche qui modifie les stats de De1 et De2 avec un nbr aléatoire
    lancer = ()=>{ 
        this.setState({
        De1: Math.floor(Math.random() * 6) + 1,
        De2: Math.floor(Math.random() * 6 ) + 1,   
        })
   };
    render(){
        return(
            <div> 
                //on appel le composant De avec les props fun, De1 et De2
                <De fun={this.lancer} De1={this.state.De1} De2={this.state.De2}/>
            </div>
        )
    }
}
export default LancerDe;

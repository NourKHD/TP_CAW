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
         lancer = ()=>{ 
            this.setState({
            De1: Math.floor(Math.random() * 6) + 1,
            De2: Math.floor(Math.random() * 6 ) + 1,
        
    })};
    
    

    render(){
        return(
            <div> 
                <De fun={this.lancer} De1={this.state.De1} De2={this.state.De2}/>
                {/* <h6>D1: {this.state.De1}</h6>
                <h6>D2: {this.state.De2}</h6>
                <h6>{this.state.De1img}</h6>
                <h6>{this.state.De2img}</h6>
                <h6>{this.props.func}</h6> */}
                {/* <button onClick={this.onclick}>Lancer</button> */}
            </div>

        )
    }
}
export default LancerDe;

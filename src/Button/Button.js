import React , {Component} from 'react';
import './style.css';

class Button extends Component{
    
    render(){
        return(
            <div>
                <center>
                    <button onClick = { () => {this.props.click(this.props.index)}} className = 'button'  style = {{width : '60px' , height : '25px'}}>{this.props.name}</button>
                </center>
            </div>
        )
    }
}

export default Button;

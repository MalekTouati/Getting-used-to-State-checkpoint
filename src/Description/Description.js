import React , {Component} from 'react';

class Description extends Component{
    render(){
        return(
            <div>
                <center>
                    <p>{this.props.text}</p>
                </center>
            </div>
        )
    }
}

export default Description;
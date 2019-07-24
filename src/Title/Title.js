import React , {Component} from 'react';

class Title extends Component{
    render(){
        return(
            <div>
                <center>
                    <h1>{this.props.name}</h1>
                </center>
            </div>
        )
    }
}

export default Title;
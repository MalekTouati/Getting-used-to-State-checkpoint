import React , {Component} from 'react';

class Photo extends Component{
    render(){
        return(
            <div>
                <center>
                    <img src={this.props.src}/>
                </center>
            </div>
        )
    }
}

export default Photo;
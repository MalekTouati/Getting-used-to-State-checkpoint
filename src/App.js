import React , {Component} from 'react';
import Button from './Button/Button';
import Title from './Title/Title';
import Photo from './Photo/Photo';
import Description from './Description/Description'

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      index : 0,
      data : [
        { 
          name : "Sandra",
          photo : "https://ocdn.fleishmanhillard.com/files/employees/65586803f1435736f42a541d3a924595/sandra-radulj-profile.jpg",
          text : "I have been working for IBM for over a week as a trainee and I'm LOVING it! " 
        },
        { 
          name : "John",
          photo : "https://www.hoa.ox.ac.uk/sites/default/files/styles/person_profile_photo/public/hoa/images/person/john_blakinger_3.jpg?itok=vGGCNfsW",
          text : "I am a certified ethical hacker who has over 10 years of practical experience.",
        },
        {
          name : "Mike",
          photo : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1000x400-q90-8d979307d2c6b072d5c133ea9feeac8c-1558014684.jpg?crop=0.401xw:1.00xh;0.283xw,0&resize=480:*",
          text : "I am a kind and hardworking individual with a great passion for the software development industry"
        },
      ]
    }
    this.changePerson=this.changePerson.bind(this)
  }
  render(){
    return (
      <div>
        <Button click = {this.changePerson} index = {0} name = {this.state.data[0].name}></Button>
        <Button click = {this.changePerson} index = {1} name = {this.state.data[1].name}></Button>
        <Button click = {this.changePerson} index = {2} name = {this.state.data[2].name}></Button>
        <Title  name = {this.state.data[this.state.index].name}></Title>
        <Photo src = {this.state.data[this.state.index].photo}></Photo>
        <Description text = {this.state.data[this.state.index].text}></Description>
      </div>
    );
  }
  changePerson(i){
    this.setState({index : i})
  }
  
}

export default App;

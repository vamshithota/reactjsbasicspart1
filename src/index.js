import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay.js';
import Spinner from './Spinner';
class App extends React.Component{

// another way of initializing state object alternative method for using constructor and calling
// super(props) method and using this.state instance
state = {lat: null, errorMessage :''};

//creating and making use of life cycle methods componentDidMount this is alternative of using constructor
//create all methods which will be called only once after page renders
componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
        position => this.setState({lat : position.coords.latitude}),
        err=>  this.setState({errorMessage : err.message})
    );
}

//creating a custom metod to render content

renderContent(){
    if(this.state.lat && !this.state.errorMessage){
        return <SeasonDisplay lat={this.state.lat}></SeasonDisplay>
    }
    if(!this.state.lat && this.state.errorMessage){
        return <div><b>Error:{this.state.errorMessage}</b></div>
    }
    return <Spinner message="Please accept/reject pop up displayed"></Spinner>
}

render(){
   return <div className="border red">{this.renderContent()}</div>;
   
}
 
    // constructor(props){
    //     super(props);

    //     this.state = {lat : null, errorMessage:''};
        
    //     window.navigator.geolocation.getCurrentPosition(
    //         position => {
    //             this.setState({lat : position.coords.latitude});
    //         },
    //         err => {
    //             this.setState( {errorMessage: err.message} );
    //         }
    //     );
    // }
    // render() {
    //     if(this.state.lat && !this.state.errorMessage){
    //         return <div>latitude : {this.state.lat}</div>;
    //     }
    //     if(this.state.errorMessage && !this.state.lat){
    //         return <div>Error : {this.state.errorMessage} </div>;
    //     }
    //     return <div>Loading!</div>
    // }
}

ReactDOM.render(<App/>, document.querySelector('#root'));

import React from "react";
import Titles from "./components/Titles"
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "ccde404ff23089803dafa662fd612570";

class App extends React.Component{
  getWeather = async (e)=>{
    e.preventDefault();

    //get city and country element's value from the form component
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    
    //make call to api
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);

    //wait for the call to complete and store its value in data
    const data = await api_call.json();
    
    console.log(data);
  }


  render(){
    return(

      <div>
        <Titles/>
        <Form getWeather = {this.getWeather}/>
        <Weather/>

      </div>
    );
  }
};

export default App;
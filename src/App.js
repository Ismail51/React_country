import React from "react";
import axios from "axios";
import Button from "./components/Button";
import Card from "./components/Card";




class App extends React.Component {
constructor(){
  super()
  this.state = {
    name:"",
    capital:"",
    flag:"",
    population:"",
    region:"",
  }
}

componentDidMount=()=>{
  axios.get("https://restcountries.com/v3.1/name/France").then((result)=>{
    console.log("axios result:",result);
    console.log("axios Data",result.data[0].population);
    console.log("axios name",result.data);
    this.setState({
      population: result.data[0].population, 
      name: result.data[0].name.common,
      capital: result.data[0].capital,
      flag: result.data[0].flags.png,
      region: result.data[0].region,
    })

  })
  // console.log(result.data[0].flag);
 
}
getCountry=(country)=>{
  axios.get("https://restcountries.com/v3.1/name/"+country).then((result)=>{
    this.setState({
      population: result.data[0].population, 
      name: result.data[0].name.common,
      capital: result.data[0].capital,
      flag: result.data[0].flags.png,
      region: result.data[0].region,
    })
    console.log(this.state);
    }
  )
}




  render(){    
    console.log("render population",this.state.population)
    console.log("render name",this.state.name)
    return(
      <div>
        <h1>{this.state.name}{this.state.capital}{this.state.flag}{this.state.region}{this.state.population}</h1>
        <Button func={this.getCountry}>France</Button>
        <Button func={this.getCountry}>Spain</Button>
        <Button func={this.getCountry}>Croatia</Button>
        <Card name= {this.state.name} capital={this.state.capital} flag={this.state.flag}/>
      </div>
    )
  }
}


export default App;
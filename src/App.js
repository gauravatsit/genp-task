import React, { Component } from 'react';
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";
import './App.css';
import Card from './Card';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      country: [
        { key: "ind", text: "India" },
        { key: "uk", text: "UK" },
        { key: "us", text: "USA" }
      ],
      state: [
        { key: "kar", text: "Karnataka" },
        { key: "del", text: "Delhi" },
        { key: "mh", text: "Maharashtra" }
      ],
      city: [
        { key: "bang", text: "Bangalore" },
        { key: "mang", text: "Mangalore" },
        { key: "mys", text: "Mysore" }
      ],
      area: [
        { key: "btm", text: "BTM" },
        { key: "white", text: "Whitefield" },
        { key: "kor", text: "Kormangala" }
      ],
      card : []
    };
  }

  fetchData = (url)=>{ 
    fetch(url)
    .then(response => {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(data => {
        this.loadInterval && this.setState({ card: data });
    });
  }

  componentDidMount() { 
    const cardUrl = 'https://reqres.in/api/users/2';
    this.loadInterval = setInterval(this.fetchData(cardUrl),100); 
  } 

  componentWillUnmount(){
    this.loadInterval && clearInterval(this.loadInterval);
    this.loadInterval = false;
  }

  render() {
    return (
      <div className="App">
        {this.state.card.length === undefined && <Card cardData={this.state.card}/>}
        <div className="form">
          <Dropdown placeHolder="Select country" id="country" options={this.state.country} />
          <Dropdown placeHolder="Select state" id="state" options={this.state.state} />
          <Dropdown placeHolder="Select city" id="city" options={this.state.city} />
          < Dropdown multiSelect placeHolder="Select area" id="city" options={this.state.area} />
          <input type='button' value='Submit' onClick={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default App;

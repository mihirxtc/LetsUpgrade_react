import React from "react";
import "./App.css";
import Header from "./Header";
import Products from "./Products_List";
import Products_List from "./Products_List";
import { useState } from "react";
import Product from "./Product";

function App() {

    // function doSomething(data) {
    //     console.log("Button is clicked! " + data);
    // }

    // reading values from input
    let [name, setName] = useState();
    let [age, setAge] = useState();

    let countries = [
        {id:1, name: "India", capital: "New Delhi"},
        {id:2, name: "England", capital: "London"},
        {id:3, name: "USA", capital: "Washington"},
        {id:4, name: "Canda", capital: "Ottawa"},
        {id:5, name: "Japan", capital: "Tokyo"}
    ]    

    return (
        <div className="App">

            <Header/>
            <Products_List/>

            {/* {
                countries.map((country) => {
                    return (
                        <div className="data" key={country.id}>
                            <h3>{country.name}</h3>
                            <p>{country.capital}</p>
                        </div>
                    );
                })
            } */}



            {/* Day-3 */}
            
            {/* <div className="form">
                <input type="text" placeholder="Enter name" onChange={(event) => {
                    setName(event.target.value);
                }}></input>
            
                <input type="number" placeholder="Enter Age" onChange={(event) => {
                    setAge(event.target.value);
                }}></input>

                <button className="btn" type="button" onClick={() => {
                    console.log(name, age);
                }}>Submit</button> 
            </div> */} 
             


            {/* Day-2 */}

            {/* <button className="btn" onClick={(event) => {
                console.log(event);
                doSomething("Mihir");
            }}>mihir</button> */}
        </div>
    );
}

export default App;
import { useState, useEffect } from "react";
import "./App.css";
import Product from "./Product";

function App() {

  // let [productVisible, setProductVariable] = useState(false);

  let [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
      return response.json()
    }).then((data) => {
      console.log(data);

      setUsers(data);
    }).catch((err) => {
      console.log(err);
    })
  }, [])



  return (
    <div className="App">

      {
        users.map((user) => {
          return (
            <div className="user" key={user.id}>
              <h1>{user.name}</h1>
              <p>{user.username}</p>
              <p>{user.website}</p>
            </div>
          )
        })
      }

      {/* <h1>App component</h1>

      <button onClick={() => {
        setProductVariable(true);
      }}>Show Product</button>

      <button onClick={() => {
        setProductVariable(false);
      }}>Hide Product</button>

      {
        productVisible == true
        ?(
          <Product/>
        )
        :null
      } */}

    </div>
  );
}

export default App;
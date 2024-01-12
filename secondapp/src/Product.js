import { useEffect, useState } from "react";

function Product() {

    // 1. by default it is called for every render and rerender
    // 2. you can stop it from getting called on rerender by passing a blank array []
    // 3. you can also pass variables in array for which perticular rerender you want to call it

    let [name, setName] = useState("Mihir")

    let [age, setAge] = useState(25)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

      return () => {
        console.log("dummy unmounted");
      }
    }, [age]);

    return (
        <div className="product">
            <h1>Samsung A31</h1>
            <h2>{name}</h2>
            <button onClick={() => {
                setName("Thor");
            }}>Click</button>

            <h2>{age}</h2>
            
            <button onClick={() => {
                setAge(27);
            }}>Click</button>
        </div>
    );

}

export default Product;
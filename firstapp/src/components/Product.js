import { useState } from "react";

function Product(props) {

    let [isAvailable, setIsAvailable] = useState("yes");

    // function makeNotAvailable() {
    //     setIsAvailable("no");
    // }

    console.log(props);
    return (
        <div className="product">
            <img className="img" src={props.url}/>
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <p>{isAvailable}</p>

            {/* <button className="btn" onClick={makeNotAvailable}>Click</button> */}

            {/* using anonymouse function instead of function */}
            <button onClick={() => {
                setIsAvailable("no");
            }} className="btn">Click</button>
        </div>
    );
}

export default Product;
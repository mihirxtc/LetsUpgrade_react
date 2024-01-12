function Item (props) {

    return (
        <div className="item">
            <img className="img" src={props.url}/>
            <h3>{props.name}</h3>
            <p>{props.price}</p>
        </div>
    )

}

export default Item;
import Item from "./Item";

function Items() {
    return (
        <div className="items">
            <Item name="Air Conditioner" price="Rs. 39000" url="https://source.unsplash.com/1600x1000/?air conditioner"/>
            <Item name="Refrigerator" price="Rs. 29000" url="https://source.unsplash.com/1600x1000/?fridge"/>
            <Item name="LED TV" price="Rs. 19000" url="https://source.unsplash.com/1600x1000/?television"/>
        </div>
    )
}

export default Items;
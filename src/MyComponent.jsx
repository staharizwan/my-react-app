import React, {useState} from "react"

function MyComponent(){
let [name, setName] = useState();
let [quantity, setQuantity] = useState(100000);
let [comment, setComment] = useState();
let [payment, setPayment] = useState();
let [shipping, setShipping] = useState();


/*
const updateName = ()=> {
    setName("Mühldorf Freilassing");
}*/
/*
return(<div>
      <p>Name: <span style={{ paddingLeft: '5px' }}>{name}</span></p>
      <button onClick = {updateName}>Set Name</button>
      </div>)*/
function handleNameChange(event){
    setName(event.target.value);
}
function handleQuantityChange(event){
    setQuantity(event.target.value);
}
function handleCommentChange(event){
    setComment(event.target.value);
}
function handlePaymentChange(event){
    setPayment(event.target.value);
}
function handleShippingChange(event){
    setShipping(event.target.value);
}
return(
    <div>
        <input value={name} onChange={handleNameChange} type="text"/>
        <p>Name: {name}</p>
        <br />
        <input value={quantity} type="number" onChange={handleQuantityChange}/>
        <p>Quantity: {quantity}</p>
        <br />
        <textarea value={comment} placeholder="Specific delivery instructions here" onChange={handleCommentChange}></textarea>
        <p>Comment: {comment}</p>
        <br />
        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select and option</option>
            <option value="Visa">Visa</option>
            <option value="MasterCard">Master Card</option>
            <option value="GiftCard">Gift Card</option>
        </select>
        <p>Mode of payment: {payment}</p>
        <br/>
        <label htmlFor="">
            <input type="radio" value="Pick up" checked={shipping === "Pick up"} onChange={handleShippingChange} />
            Pick up
            </label>
            <br />
        <label><input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange} />
            Delivery
            </label>
            <p>Shipping: {shipping}</p>
    </div>
)
}
export default MyComponent
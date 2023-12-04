import { collection, addDoc, updateDoc, doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CartContext } from '../../../context/CartContext';
import "./checkout.css";
import { Link } from 'react-router-dom';



const Checkout = () => {

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [confirmationEmail, setConfirmationEmail] = useState("");
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");

  const {cart, total, clearCart} = useContext(CartContext)


  

  const formManipulator = (event) => {

    event.preventDefault()

    const db = getFirestore();

    const order = {
        items: cart.map( (item) => (
            {
                id: item.producto.id,
                name: item.producto.title,
                quantity: item.quantity,
            })),
            total: total,
            date: new Date(),
            name,
            lastName,
            phone,
            email

    }

   
    Promise.all(
        order.items.map( async ( productOrder ) => {
            const productRef = doc(db,"productos", productOrder.id.toString())
            const productDoc = await getDoc(productRef)
            const actualStock = productDoc.data().stock

            await updateDoc(productRef,{
                stock: actualStock - productOrder.quantity
            })
            
            })
            
    )
    .then( () => {
                addDoc(collection(db,"orders"),order)
                .then( (docRef) =>{
                    setOrderId(docRef.id)
                    clearCart()
                })
                .catch( (error) => {
                    setError("Error submitting order...")
                 })
            })
            .catch( (error) =>{
                setError("Stock cannot be updated")
                console.error(error)
             })
            
  }


  return (
    <div className='main-checkout-container'>
        <Form onSubmit={formManipulator}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your name" />
        
      </Form.Group>

      <Form.Group className="mb-2" >
        <Form.Label>Lastname</Form.Label>
        <Form.Control onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Enter your lastname" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Confirm email</Form.Label>
        <Form.Control onChange={(e) => setConfirmationEmail(e.target.value)} type="email" placeholder="Confirm your email" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Phone number</Form.Label>
        <Form.Control onChange={(e) => setPhone(e.target.value)} type="number" placeholder="Enter your phone number" />
      </Form.Group>
     
      <div className='checkout-button-group'>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Link to={"/Cart"}>  <Button variant="primary">Back to cart</Button>{' '}  </Link>
      </div>
    </Form>

    {error && <p>{error}</p>}
    { orderId && <p> Thank you, your order id is {orderId} </p>}

      
    </div>
  )
}

export default Checkout

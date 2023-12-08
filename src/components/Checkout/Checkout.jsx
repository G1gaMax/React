import {
  collection,
  addDoc,
  updateDoc,
  doc,
  getDoc,
  getFirestore,
} from "firebase/firestore";
import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import { CartContext } from "../../../context/CartContext";
import "./checkout.css";
import { Link } from "react-router-dom";
import ThanYou from "../../assets/ThankYou.png";

const Checkout = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [confirmationEmail, setConfirmationEmail] = useState("");
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    lastName: "",
    email: "",
    confirmationEmail: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const { cart, total, clearCart } = useContext(CartContext);

  const validateForm = () => {
    let valid = true;
    const errors = {
      name: "",
      lastName: "",
      email: "",
      confirmationEmail: "",
      phone: "",
    };

    const isAlpha = (value) => /^[a-zA-Z\s]+$/.test(value);

    if (!name.trim()) {
      errors.name = "Name is required";
      valid = false;
    } else if (!isAlpha(name.trim())) {
      errors.name = "Name should only contain letters";
      valid = false;
    }

    if (!lastName.trim()) {
      errors.lastName = "Last name is required";
      valid = false;
    } else if (!isAlpha(lastName.trim())) {
      errors.lastName = "Last name should only contain letters";
      valid = false;
    }

    if (!email.trim()) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Invalid email format";
      valid = false;
    }

    if (email !== confirmationEmail) {
      errors.confirmationEmail = "Emails do not match";
      valid = false;
    }

    if (!phone.trim()) {
      errors.phone = "Phone number is required";
      valid = false;
    } else if (!/^\d{10}$/.test(phone)) {
      errors.phone = "Invalid phone number format";
      valid = false;
    }

    setValidationErrors(errors);
    return valid;
  };

  const formManipulator = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      const isValid = validateForm();

      if (isValid) {
        const db = getFirestore();

        const order = {
          items: cart.map((item) => ({
            id: item.producto.id,
            name: item.producto.title,
            quantity: item.quantity,
          })),
          total: total,
          date: new Date(),
          name,
          lastName,
          phone,
          email,
        };

        await Promise.all(
          order.items.map(async (productOrder) => {
            const productRef = doc(db, "productos", productOrder.id.toString());
            const productDoc = await getDoc(productRef);
            const actualStock = productDoc.data().stock;

            await updateDoc(productRef, {
              stock: actualStock - productOrder.quantity,
            });
          })
        );

        const docRef = await addDoc(collection(db, "orders"), order);
        setOrderId(docRef.id);
        clearCart();
      }
    } catch (error) {
      console.error(error);
      setError("Error submitting order...");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="main-checkout-container">
        {orderId ? (
          <div className="checkout-data">
            <h1>Thank you for your order!</h1>
            <p> Order Id: {orderId}</p>
            <Link to={"/"}>
              <Button variant="primary"> Buy more </Button>
            </Link>

            <img
              src={ThanYou}
              width="700"
              height="700"
              className="d-inline-block align-top"
              alt=""
            />
          </div>
        ) : (
          <Form onSubmit={formManipulator}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter your name"
                isInvalid={!!validationErrors.name}
              />
              <Form.Control.Feedback type="invalid">
                {validationErrors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-2" controlId="lastName">
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Enter your lastname"
                isInvalid={!!validationErrors.lastName}
              />
              <Form.Control.Feedback type="invalid">
                {validationErrors.lastName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
                isInvalid={!!validationErrors.email}
              />
              <Form.Control.Feedback type="invalid">
                {validationErrors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="confirmationEmail">
              <Form.Label>Confirm email</Form.Label>
              <Form.Control
                onChange={(e) => setConfirmationEmail(e.target.value)}
                type="email"
                placeholder="Confirm your email"
                isInvalid={!!validationErrors.confirmationEmail}
              />
              <Form.Control.Feedback type="invalid">
                {validationErrors.confirmationEmail}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                onChange={(e) => setPhone(e.target.value)}
                type="number"
                placeholder="Enter your phone number"
                isInvalid={!!validationErrors.phone}
              />
              <Form.Control.Feedback type="invalid">
                {validationErrors.phone}
              </Form.Control.Feedback>
            </Form.Group>

            <div className="checkout-button-group">
              {isLoading ? (
                <Button variant="primary" type="submit" disabled>
                  <Spinner animation="border" size="sm" /> Submitting...
                </Button>
              ) : (
                <>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                  <Link to={"/Cart"}>
                    {" "}
                    <Button variant="primary">Back to cart</Button>{" "}
                  </Link>
                </>
              )}
            </div>
          </Form>
        )}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Checkout;

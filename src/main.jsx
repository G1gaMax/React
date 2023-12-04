import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAe3vGUyJxD6xXaJbrv3tOjrKULHF20EZg",
  authDomain: "coder-react-cd0c7.firebaseapp.com",
  projectId: "coder-react-cd0c7",
  storageBucket: "coder-react-cd0c7.appspot.com",
  messagingSenderId: "951108460410",
  appId: "1:951108460410:web:439057e65cf355a2c700c3"
};

const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)




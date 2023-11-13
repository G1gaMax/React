import React from 'react'
import { Navbar } from 'react-bootstrap'
import mainLogo from "../pages/trolley.png"
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <>
            <Navbar />
            <div className='home'>
                <h1>Welcome to ShopSmart!</h1>
                <Link to={"/products"}>
                <img
                    src={mainLogo}
                    width="300"
                    height="300"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                </Link>

            </div>

        </>
    )
}

export default Home
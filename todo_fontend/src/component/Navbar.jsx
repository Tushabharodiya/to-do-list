import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="#">Weekly Planner</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="head-button">
                        <span><i className="fa-regular fa-circle-user"></i></span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar

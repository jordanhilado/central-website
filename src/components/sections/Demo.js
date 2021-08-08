import React, { useState } from "react";
import "./Demo.css";
import Logo from '../layout/partials/Logo'

import axios from "axios"

const Demo = () => {

    const baseURL = "https://central-server-13.herokuapp.com"
    let stackoverflow = []
    let youtube = []
    let google = []

    const [searchText, setSearchText] = useState("how to center a div")

    return (
        <>
            <div className="illustration-section-01">
                <div className="content">
                    <Logo className="headTitle mt-0 mb-16 reveal-from-bottom logo" data-reveal-delay="200"/>
                    <h1 className="headTitle mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">Live Demo</h1>
                    <p className="m-0 mb-32 reveal-from-bottom description" data-reveal-delay="300">Use the search bar below to search for content from Stack Overflow and YouTube.</p>
                    <div className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="600">
                        <form action="" onSubmit={(e) => {
                            e.preventDefault()
                            axios.get(`${baseURL}/?query=${searchText}`).then((res) => {stackoverflow.push(res.data.stackoverflow); youtube.push(res.data.youtube); google.push(res.data.google); console.log(stackoverflow, youtube, google)})
                        }}>
                            <input value={searchText} onChange={(e) => setSearchText(e.target.value)} type="search"/>
                            <button><i class="fa fa-search"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
    }

export default Demo;
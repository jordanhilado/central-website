import React, { useState } from "react";
import "./Demo.css";
import Logo from '../layout/partials/Logo'

import Datatable from "./datatable"
import axios from "axios"

require("es6-promise").polyfill();
require("isomorphic-fetch");

const Demo = () => {
    // define base URL to pull from
    const baseURL = "http://172.105.38.98/"
    // set states for the searchbar and the three respective API's to be used
    const [searchText, setSearchText] = useState("")
    const [stackoverflow, setStackOverflow] = useState([])
    const [youtube, setYoutube] = useState([])
    const [google, setGoogle] = useState([])
    // define a function that will change state depending on the results to be pulled
    const onSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.get(`${baseURL}/?query=${searchText}`)
        const data = res.data
        setStackOverflow(data?.stackoverflow)
        setYoutube(data?.youtube)
        setGoogle(data?.google)
    }
    // display a searchbar with a title and description
    return (
        <>
            <div className="illustration-section-01">
                <div className="content">
                    <Logo className="headTitle mt-0 mb-16 reveal-from-bottom logo" data-reveal-delay="200"/>
                    <h1 className="headTitle mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">Live Demo</h1>
                    <p className="m-0 mb-32 reveal-from-bottom description" data-reveal-delay="300">Use the search bar below to search for content from Stack Overflow, YouTube and Google.<br/>Once you enter a query, press enter/return to complete your search.</p>
                    <div className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="600">
                        <form action="" onSubmit={onSubmit}>
                            <input value={searchText} onChange={(e) => setSearchText(e.target.value)} type="search"/>
                            <button type="button"><i class="fa fa-search search2"></i></button>
                        </form>
                        {/* define data tables for each API to be used */}
                        <Datatable data={stackoverflow}/>
                        <Datatable data={youtube}/>
                        <Datatable data={google}/>
                    </div>
                </div>
            </div>
        </>
    );
    }

export default Demo;
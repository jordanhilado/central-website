import React from "react";
import "./Demo.css";
import Logo from '../layout/partials/Logo'

const Demo = () => {

    return (
        <>
            <div className="illustration-section-01">
                <div className="content">
                    <Logo className="headTitle mt-0 mb-16 reveal-from-bottom logo" data-reveal-delay="200"/>
                    <h1 className="headTitle mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">Live Demo</h1>
                    <p className="m-0 mb-32 reveal-from-bottom description" data-reveal-delay="300">Use the search bar below to search for content from Stack Overflow and YouTube.</p>
                    <div className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="600">
                        <form action="">
                            <input type="search"/>
                            <i class="fa fa-search"></i>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
    }

export default Demo;
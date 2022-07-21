import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
         <div class="ui inverted segment"  style={{marginTop:"-20px"}}>
                       
            <div class="ui inverted secondary menu">
                <a class="active item">
                    <Link to="/">Home</Link>
                </a>
                <a class="item">
                    <Link to="/customer">Customer</Link>
                </a>
                <a class="item">
                    <Link to="/driver">Driver</Link>
                </a>
                <a class="item">
                    <Link to="/admin">Admin</Link>
                </a>
            </div>
        </div>
  );
}

export default Navbar;
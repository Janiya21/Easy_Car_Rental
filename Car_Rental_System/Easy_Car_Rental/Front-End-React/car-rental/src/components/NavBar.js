import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

class NavBar extends Component {

    constructor(props){
        super(props)

        this.state = {
            
        }
    }


    render() {
        return (

                // <nav style = {{marginTop: "40px"}} aria-label="Pagination Navigation" role="navigation" class="ui pagination menu">
                //     <ul aria-current="true" aria-disabled="false" tabindex="0" value="Reg_Customer" type="pageItem" class="active item">
                //         <link to={"./Dashboard"}>
                //             <li>Dashboard</li>
                //         </link>
                //     </ul>
                //     <ul aria-current="true" aria-disabled="false" tabindex="0" value="Reg_Customer" type="pageItem" class="active item">
                //         <link to={"./Dashboard"}>
                //             <li>Dashboard</li>
                //         </link>
                //     </ul>
                //     <ul aria-current="true" aria-disabled="false" tabindex="0" value="Reg_Customer" type="pageItem" class="active item">
                //         <link to={"./Dashboard"}>
                //             <li>Dashboard</li>
                //         </link>
                //     </ul>
                //     <ul aria-current="true" aria-disabled="false" tabindex="0" value="Reg_Customer" type="pageItem" class="active item">
                //         <link to={"./Dashboard"}>
                //             <li>Dashboard</li>
                //         </link>
                //     </ul>
                // </nav>

            <div style = {{marginTop: "40px"}} aria-label="Pagination Navigation" role="navigation" class="ui pagination menu">
                <a aria-current="true" aria-disabled="false" tabindex="0" value="Reg_Customer" type="pageItem" class="active item">
                Customer
                </a>
                <a aria-current="false" aria-disabled="false" tabindex="0" value="Reg_Driver" type="pageItem" class="item">
                Driver
                </a>
                <a aria-current="false" aria-disabled="false" tabindex="0" value="Reg_Admin" type="pageItem" class="item">
                Admin
                </a>
                <a aria-current="false" aria-disabled="false" tabindex="0" value="Reg_Car" type="pageItem" class="item">
                Car
                </a>
                <a aria-current="false" aria-disabled="false" tabindex="0" value="Reg_Order" type="pageItem" class="item">
                Order
                </a>
          </div>
            
        );
    }
}

export default NavBar;
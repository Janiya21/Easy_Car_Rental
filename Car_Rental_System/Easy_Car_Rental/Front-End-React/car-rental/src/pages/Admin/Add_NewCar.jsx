import React, { Component } from 'react';
import { Button, Popup, Grid, Form, Icon, Card, Image, Dropdown, Input  } from 'semantic-ui-react';
import {Link } from "react-router-dom";
import axios from 'axios';
import $ from "jquery";

class New_Car extends Component {
    constructor(props){
        super(props)

        this.state = {
            regNo: '',
            brand: '',
            No_of_passengers:'',
            color:'',
            comfortability:'',
            fuel_type:'',
            loss_damage_amount:'',
            millage_before_Reg:'',
            daily_cost:'',
            monthly_cost:'',
            admin:{
                userName: "Suresh_22",
                password: "sure209",
                email: "Suresh22@gmail.com",
                contactNo: "0768712189"
            }
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name] : e.target.value});
    }

    uploadImage = async () => {
        let promise;
        let id = this.state.regNo;

        const data = new FormData();
        let file = $("#file")[0].files[0];
        let fileName = $("#file")[0].files[0].name;
        data.append("myFile", file, fileName);

        promise = new Promise((resolve, reject) => {
            console.log(id + " reg")
            axios.post("http://localhost:8081/easyRents/api/v1/vehicle/upload/"+id,data)
                .then((res) => {
                    alert("Image Successfully Uploaded")
                });
        });

        return await promise;
    }

    submitHandler = async (e) => {
        e.preventDefault();
        console.log(this.state);

        let res = await this.postDriver(this.state);
        console.log(res);

        if (res.status === 201) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
        } else {
            this.setState({
                alert: true,
                message: res.response.data.message,
                severity: 'error'
            });
        }
    }

    postDriver = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('http://localhost:8081/easyRents/api/v1/vehicle', data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }

    render() {
        const {regNo,brand,No_of_passengers,color,comfortability,fuel_type,loss_damage_amount,millage_before_Reg,daily_cost,monthly_cost} = this.state;
        return (
            <div>
                <div style={{marginTop:"-20px"}} class="ui menu">
                    <a class="item">
                        <Link to="/car_Admin">All Cars</Link>
                    </a>
                    <a class="active item">
                        <Link to="/add_newCar">Add New Vehicle</Link>
                    </a>
                    <a class="item">Under Maintance</a>
                </div>

                <Grid>
                    <Grid.Column width={7}>
                        <form style={{margin:"0 0 0 10vw"}}>
                            <b>Please Attach Photo Here :</b>
                            <Popup content='Add users to your feed' 
                            trigger={
                                <input style={{margin:"10px 0 0 30px"}} id="file" name="myFile" type="file" />} 
                            />
                            {/* <input style={{margin:"10px 0 0 30px"}} id="file" name="myFile" type="file" /> */}
                            <button onClick={this.uploadImage} style={{margin:"14px 0 10px 195px"}} type="button" id="btnUpload" class="ui button primary">Upload File</button>
                        </form>

                        <form style={{width:"30vw", marginLeft:"10vw"}} class="ui form" onSubmit={this.submitHandler}>
                            <Form.Group widths='equal'>
                                <div class="field">
                                    <input name="regNo" value={regNo} onChange={this.changeHandler} placeholder="RegNo"/>
                                </div>
                                <div class="field">
                                    <input name="brand" value={brand} onChange={this.changeHandler} placeholder="Brand"/>
                                </div>
                            </Form.Group>
                            <div class="field">
                                <input name="No_of_passengers" value={No_of_passengers} onChange={this.changeHandler} placeholder="Passengers"/>
                            </div>
                            <div class="field">
                                {/* <input name="color" value={color} onChange={this.changeHandler} placeholder="color"/> */}
                            
                                <select name="color" value={color} onChange={this.changeHandler} class="ui dropdown">
                                    <option value="black" onChange={this.changeHandler}>Black</option>
                                    <option value="white" onChange={this.changeHandler}>White</option>
                                    <option value="red" onChange={this.changeHandler}>Red</option>
                                </select>
                                
                            </div>
                            <div class="field">
                                {/* <input name="comfortability" value={comfortability} onChange={this.changeHandler} placeholder="comfortability"/> */}
                                <select name="comfortability" value={comfortability} onChange={this.changeHandler} class="ui dropdown">
                                    <option value="general" onChange={this.changeHandler}>General</option>
                                    <option value="premium" onChange={this.changeHandler}>Premium</option>
                                    <option value="luxary" onChange={this.changeHandler}>Luxary</option>
                                </select>
                            </div>
                            <div class="field">
                                {/* <input name="fuel_type" value={fuel_type} onChange={this.changeHandler} placeholder="fuel type"/> */}
                                <select name="fuel_type" value={fuel_type} onChange={this.changeHandler} class="ui dropdown">
                                    <option value="petrol" onChange={this.changeHandler}>Petrol</option>
                                    <option value="diesel" onChange={this.changeHandler}>Diesel</option>
                                    <option value="electric" onChange={this.changeHandler}>Eletric</option>
                                </select>
                            </div>
                            <div class="field">
                                <input name="loss_damage_amount" value={loss_damage_amount} onChange={this.changeHandler} placeholder="lost damage"/>
                            </div>
                            <div class="field">
                                <input name="millage_before_Reg" value={millage_before_Reg} onChange={this.changeHandler} placeholder="milege before reg"/>
                            </div>
                            <Form.Group widths='equal'>
                                <div class="field">
                                    <input name="daily_cost" value={daily_cost} onChange={this.changeHandler} placeholder="daily cost"/>
                                </div>
                                <div class="field">
                                    <input name="monthly_cost" value={monthly_cost} onChange={this.changeHandler} placeholder="monthly cost"/>
                                </div>
                            </Form.Group>
                        
                            <button style={{ margin: "20px 0 30px 12vw" }} class="ui primary button">
                                {/* <Link to="/admin_cusView">
                                    <div  type="submit" class="detail"><h4 style={{color:"white"}}>Submit</h4></div>
                                </Link> */}
                                <div type="submit" class="detail"><h4 style={{color:"white"}}>Submit</h4></div>
                            </button>
                        </form>
                    </Grid.Column>
                    <Grid.Column width={7} style={{ margin: "20px 0 30px 3vw" }}>
                        <Image src='https://img-ik.cars.co.za/ik-seo/carsimages/7881627/2015-BMW-5-Series-520d-M-Sport-Auto.jpg?v=1921613738&tr=h-450%2Cw-600' fluid />
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default New_Car;
import React, { Component } from 'react';
import { Button, Popup, Grid, Form, Icon, Card, Image, Label, Header, Segment, Input  } from 'semantic-ui-react';
import {Link } from "react-router-dom";

class New_Car extends Component {

    render() {
    
        return (
            <div>
                <div style={{marginTop:"-20px"}} class="ui menu">
                    <a class="item">
                        <Link to="/car_Admin">All Cars</Link>
                    </a>
                    <a class="active item">
                        <Link to="/add_newCar">Add New Vehicle</Link>
                    </a>
                    <a class="item">Upcoming Events</a>
                </div>

                <Grid>
                    <Grid.Column width={6}>
                        <form style={{margin:"10px 0 0 10px"}}>
                            <b>Please Attach Photo Here :</b>
                            <Popup content='Add users to your feed' 
                            trigger={
                                <input style={{margin:"10px 0 0 30px"}} id="file" name="myFile" type="file" />} 
                            />
                            {/* <input style={{margin:"10px 0 0 30px"}} id="file" name="myFile" type="file" /> */}
                            <button style={{margin:"14px 0 10px 195px"}} type="button" id="btnUpload" class="ui button primary">Upload File</button>
                        </form>

                        <form style={{width:"30vw", marginLeft:"1vw"}} class="ui form">
                            <Form.Group widths='equal'>
                                <div class="field">
                                    <input placeholder="RegNo"/>
                                </div>
                                <div class="field">
                                    <input placeholder="Brand"/>
                                </div>
                            </Form.Group>
                            <div class="field">
                                <input placeholder="Passengers"/>
                            </div>
                            <div class="field">
                                <input placeholder="color"/>
                            </div>
                            <div class="field">
                                <input placeholder="comfortability"/>
                            </div>
                            <div class="field">
                                <input placeholder="fuel type"/>
                            </div>
                            <div class="field">
                                <input placeholder="lost damage"/>
                            </div>
                            <div class="field">
                                <input placeholder="milege before reg"/>
                            </div>
                            <Form.Group widths='equal'>
                                <div class="field">
                                    <input placeholder="daily cost"/>
                                </div>
                                <div class="field">
                                    <input placeholder="monthly cost"/>
                                </div>
                            </Form.Group>
                        
                            <button style={{ margin: "20px 0 30px 12vw" }} class="ui primary button">
                                <Link to="/admin_cusView">
                                    <div class="detail"><h4 style={{color:"white"}}>Submit</h4></div>
                                </Link>
                            </button>
                        </form>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        BBC
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default New_Car;
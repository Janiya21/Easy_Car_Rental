import React, { Component } from 'react';
import {  Grid, Table, Rating, Card, Image, Input, Header, Segment  } from 'semantic-ui-react';
import { Link } from "react-router-dom";
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import {TextField} from '@mui/material';

class Admin_CarView extends Component {

    constructor(props) {
        super(props)

        this.state = {
        }
    }


    render() {
        // const [value, setValue] = React.useState(null);
        return (
            <div>
                <div style={{marginTop:"-20px"}} class="ui menu">
                    <a class="item">All Cars</a>
                    <a class="item">
                        <Link to="add_newCar">Add New Vehicle</Link>
                    </a>
                    <a class="item">Upcoming Events</a>
                </div>
                <Segment raised><b>All Available Cars</b></Segment>

                    {/* <div className='date'>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Pickup Date"
                            value={value}
                            onChange={(newValue) => {
                            setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        </LocalizationProvider>        
                    </div> */}

                    <Input style={{padding:"5px 0 20px 20px"}} icon='search' placeholder='Search Date Here' />

                <Grid>
                    <Grid.Column width={15}>
                        
                    <Table style={{marginLeft:"30px", overflow:"scroll"}} celled padded>
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell singleLine>Model</Table.HeaderCell>
                            <Table.HeaderCell>Reg No</Table.HeaderCell>
                            <Table.HeaderCell>Brand</Table.HeaderCell>
                            <Table.HeaderCell>Fuel Type</Table.HeaderCell>
                            <Table.HeaderCell>Comfortability</Table.HeaderCell>
                            <Table.HeaderCell>Millage_Reg</Table.HeaderCell>
                            <Table.HeaderCell>Loss Damage</Table.HeaderCell>
                            <Table.HeaderCell>Daily Cost</Table.HeaderCell>
                            <Table.HeaderCell>Monthly Cost</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>
                                    {/* <Header as='h2' textAlign='center'></Header> */}
                                    <div class="image">
                                            <img style={{height:"15vh",width:"10vw"}} src="https://www.csojapan.com/stock_images/66103/66103d.jpg" class="ui image" />
                                    </div>
                                </Table.Cell>
                                <Table.Cell singleLine>CBC-2189</Table.Cell>
                                <Table.Cell singleLine>Toyota</Table.Cell>
                                <Table.Cell singleLine>Petrol</Table.Cell>
                                <Table.Cell singleLine>Premium</Table.Cell>
                                <Table.Cell singleLine>12000</Table.Cell>
                                <Table.Cell singleLine>20000.00</Table.Cell>
                                <Table.Cell singleLine>8000.00</Table.Cell>
                                <Table.Cell singleLine>13800.00</Table.Cell>

                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    {/* <Header as='h2' textAlign='center'></Header> */}
                                    <div class="image">
                                            <img style={{height:"15vh",width:"10vw"}} src="https://www.csojapan.com/stock_images/66103/66103d.jpg" class="ui image" />
                                    </div>
                                </Table.Cell>
                                <Table.Cell singleLine>CBC-2189</Table.Cell>
                                <Table.Cell singleLine>Toyota</Table.Cell>
                                <Table.Cell singleLine>Petrol</Table.Cell>
                                <Table.Cell singleLine>Premium</Table.Cell>
                                <Table.Cell singleLine>12000</Table.Cell>
                                <Table.Cell singleLine>20000.00</Table.Cell>
                                <Table.Cell singleLine>8000.00</Table.Cell>
                                <Table.Cell singleLine>13800.00</Table.Cell>
                            
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    {/* <Header as='h2' textAlign='center'></Header> */}
                                    <div class="image">
                                            <img style={{height:"15vh",width:"10vw"}} src="https://www.csojapan.com/stock_images/66103/66103d.jpg" class="ui image" />
                                    </div>
                                </Table.Cell>
                                <Table.Cell singleLine>CBC-2189</Table.Cell>
                                <Table.Cell singleLine>Toyota</Table.Cell>
                                <Table.Cell singleLine>Petrol</Table.Cell>
                                <Table.Cell singleLine>Premium</Table.Cell>
                                <Table.Cell singleLine>12000</Table.Cell>
                                <Table.Cell singleLine>20000.00</Table.Cell>
                                <Table.Cell singleLine>8000.00</Table.Cell>
                                <Table.Cell singleLine>13800.00</Table.Cell>
                            
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    {/* <Header as='h2' textAlign='center'></Header> */}
                                    <div class="image">
                                            <img style={{height:"15vh",width:"10vw"}} src="https://www.csojapan.com/stock_images/66103/66103d.jpg" class="ui image" />
                                    </div>
                                </Table.Cell>
                                <Table.Cell singleLine>CBC-2189</Table.Cell>
                                <Table.Cell singleLine>Toyota</Table.Cell>
                                <Table.Cell singleLine>Petrol</Table.Cell>
                                <Table.Cell singleLine>Premium</Table.Cell>
                                <Table.Cell singleLine>12000</Table.Cell>
                                <Table.Cell singleLine>20000.00</Table.Cell>
                                <Table.Cell singleLine>8000.00</Table.Cell>
                                <Table.Cell singleLine>13800.00</Table.Cell>
                            
                            </Table.Row>
                             <Table.Row>
                                <Table.Cell>
                                    {/* <Header as='h2' textAlign='center'></Header> */}
                                    <div class="image">
                                            <img style={{height:"15vh",width:"10vw"}} src="https://www.csojapan.com/stock_images/66103/66103d.jpg" class="ui image" />
                                    </div>
                                </Table.Cell>
                                <Table.Cell singleLine>CBC-2189</Table.Cell>
                                <Table.Cell singleLine>Toyota</Table.Cell>
                                <Table.Cell singleLine>Petrol</Table.Cell>
                                <Table.Cell singleLine>Premium</Table.Cell>
                                <Table.Cell singleLine>12000</Table.Cell>
                                <Table.Cell singleLine>20000.00</Table.Cell>
                                <Table.Cell singleLine>8000.00</Table.Cell>
                                <Table.Cell singleLine>13800.00</Table.Cell>
                            
                            </Table.Row>
                        </Table.Body>
                    </Table>

                    </Grid.Column>
                </Grid>

            </div>
        );
    }
}

export default Admin_CarView;
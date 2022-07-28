import React, { Component } from 'react';
import { Button, Popup, Grid, Menu, Icon, Card, Image, Label, Header, Segment, Input  } from 'semantic-ui-react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
import Paper from '@mui/material/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from '@devexpress/dx-react-chart-material-ui';

class Admin_All extends Component {

    constructor(props) {
        super(props)

        this.state = {
            activeItem: 'inbox',
        }
    }
    

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state;
        const square = { width: 175, height: 175};
        const data = [
            { argument: 1, value: 10 },
            { argument: 2, value: 20 },
            { argument: 3, value: 30 },
          ];
          
        return (
            <div class="ui equal width grid" style={{width:"106vw"}} >
                <div class="three wide column" style={{marginLeft:"20px"}}>
                    
                    <Menu vertical>
                        <Menu.Item name='inbox' active={activeItem === 'inbox'} onClick={this.handleItemClick}>
                        <Label color='teal'>1</Label>
                            <a class="active item">
                                <Link to="/cus_Admin">Customer</Link>
                            </a>
                        </Menu.Item>

                        <Menu.Item name='spam' active={activeItem === 'spam'} onClick={this.handleItemClick}>
                        <Label>2</Label>
                            <a class="active item">
                                <Link to="/driver_Admin">Driver</Link>
                            </a>
                        </Menu.Item>

                        <Menu.Item name='updates' active={activeItem === 'updates'} onClick={this.handleItemClick}>
                        <Label>1</Label>
                            <a class="active item">
                                <Link to="/car_Admin">Vehicle</Link>
                            </a>
                        </Menu.Item>

                        <Menu.Item name='updates' active={activeItem === 'updates'} onClick={this.handleItemClick}>
                        <Label>1</Label>
                            <a class="active item">
                                <Link to="/order_Admin">Orders</Link>
                            </a>
                        </Menu.Item>

                        {/* <Menu.Item name='updates' active={activeItem === 'updates'} onClick={this.handleItemClick}>
                            <a class="active item">
                                <Link to="/">Home</Link>
                            </a>
                        </Menu.Item> */}

                        <Menu.Item name='updates' active={activeItem === 'updates'} onClick={this.handleItemClick}>
                            <a class="active item">
                                <Link to="/">Log Out</Link>
                            </a>
                        </Menu.Item>
                    </Menu>
                </div>
                <div class="twelve wide column" style={{marginLeft:"-40px"}}>
                    <Segment raised>Pellentesque habitant morbi tristique senectus.</Segment>
                    <div class="ui">
                        <div className="row">
                            <Grid>
                                <Grid.Column width={3}>
                                    <Image style={{ padding: "10px 0 10px 10px" }} src='https://t3.ftcdn.net/jpg/03/58/16/06/360_F_358160626_45fJ6k9AhrZzSyRedvemX3ofxWEUD1r7.jpg' />
                                    </Grid.Column>
                                    <Grid.Column width={11}>
                                    <Grid>
                                        <Grid.Column width={4} style={{margin:"20px"}}>
                                        <Segment circular style={square}>
                                        <Header as='h2'>
                                            Annual Sales
                                            <Header.Subheader>Rs 4203500.99</Header.Subheader>
                                        </Header> 
                                        </Segment>
                                        </Grid.Column>
                                        
                                        <Grid.Column width={4} style={{margin:"20px"}}>
                                        <Segment circular inverted style={square}>
                                        <Header as='h2' inverted>
                                            Daily Sales
                                            <Header.Subheader>Rs 23000.00</Header.Subheader>
                                        </Header> 
                                        </Segment>
                                        </Grid.Column>

                                        <Grid.Column width={4} style={{margin:"20px"}}>
                                        <Segment circular style={square}>
                                        <Header as='h2'>
                                            Month Sales
                                            <Header.Subheader>Rs 124000.00</Header.Subheader>
                                        </Header> 
                                        </Segment>
                                        </Grid.Column>
                                    </Grid>
                                </Grid.Column>
                            </Grid>
    
                        </div>
                    </div>
                    
                    <Segment raised>Daily Summary</Segment>

                    <Segment basic>
                        {/* <Progress progress='value' value={35} indicating inverted>Registered Users </Progress>
                        <Progress progress='value' value={50} indicating inverted>Total bookings </Progress>
                        <Progress progress='value' value={22} indicating inverted>Total bookings </Progress>
                        <Progress progress='value' value={78} indicating inverted>Total bookings </Progress>
                        <Progress progress='value' value={63} indicating inverted>Total bookings </Progress> */}

                        <Grid>
                            <Grid.Column width={4}>
                                <Card
                                    href='#card-example-link-card'
                                    header={<h3 style={{marginLeft:"30px"}}>Total Registered Users</h3>}
                                    meta={<div style={{margin:"20px 0 20px 70px"}}>
                                       <Label size='huge'> <Icon name='mail' /> 23</Label>
                                    </div>}
                                />
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Card
                                    href='#card-example-link-card'
                                    header={<h3 style={{marginLeft:"30px"}}>Total Bookings Today</h3>}
                                    meta={<div style={{margin:"20px 0 20px 70px"}}>
                                       <Label size='huge'> <Icon name='mail' /> 23</Label>
                                    </div>}
                                />
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Card
                                    href='#card-example-link-card'
                                    header={<h3 style={{marginLeft:"30px"}}>Total Available Drivers</h3>}
                                    meta={<div style={{margin:"20px 0 20px 70px"}}>
                                       <Label size='huge'> <Icon name='mail' /> 23</Label>
                                    </div>}
                                />
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Card
                                    href='#card-example-link-card'
                                    header={<h3 style={{marginLeft:"30px"}}>Total Available Cars</h3>}
                                    meta={<div style={{margin:"20px 0 20px 70px"}}>
                                       <Label size='huge'> <Icon name='mail' /> 23</Label>
                                    </div>}
                                />
                            </Grid.Column>
                        </Grid>

                        <Paper>
                            <Chart data={data}>
                                <ArgumentAxis />
                                <ValueAxis />

                                <LineSeries valueField="value" argumentField="argument" />
                            </Chart>
                        </Paper>
                    </Segment>


                </div>
            </div>
        );
    }
}

export default Admin_All;
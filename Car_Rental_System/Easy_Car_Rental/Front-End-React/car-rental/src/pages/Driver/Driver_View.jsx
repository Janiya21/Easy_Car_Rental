import React, { Component } from 'react';
import { Button, Table, Grid, Popup, Icon, Header, Image, Card, Statistic, Form, Input  } from 'semantic-ui-react';

class Driver_View extends Component {

    constructor(props) {
        super(props)

        this.state ={
            posts:[],
        }

        this.callAPI = this.callAPI.bind(this)
        this.callAPI();
    }

    callAPI(){
        let code = localStorage.getItem("driverID");
        console.log(code + " code")
        fetch("http://localhost:8081/easyRents/api/v1/driver/"+code)
        .then(
            (response) => response.json()
        ).then((data)=> {
            console.log(data.data.rides);
            this.setState({
                posts:data.data.rides
            })
        })
        console.log(this.state.posts)
    }

    render() {

        for (let postsKey of this.state.posts) {
            console.log(postsKey.referenceNo);
        }

        let tb_data = this.state.posts.map((item)=>{
            console.log(item.referenceNo);

            return (
                <Table.Row>
                    <Table.Cell singleLine>{item.referenceNo }</Table.Cell>
                    <Table.Cell singleLine>{item.rentalDate}</Table.Cell>
                    <Table.Cell singleLine>{item.rentalTime}</Table.Cell>
                    <Table.Cell singleLine>{item.returnDate}</Table.Cell>
                    <Table.Cell singleLine>{item.vehicle.regNo}</Table.Cell>
                    <Table.Cell singleLine>{item.vehicle.brand}</Table.Cell>
                    <Table.Cell singleLine>{item.customer.nic}</Table.Cell>
                    <Table.Cell singleLine>{item.customer.name}</Table.Cell>
                    <Table.Cell singleLine>{item.customer.tel}</Table.Cell>

                </Table.Row>
            )
        })

        return (
            <Grid celled='internally'>
                <Grid.Row>
                    <Grid.Column width={16}>
                    <div style={{marginLeft:"40px"}}>
                        <Statistic.Group>
                        <Statistic>
                            <Statistic.Value>4.5</Statistic.Value>
                            <Statistic.Label>Ratings</Statistic.Label>
                        </Statistic>
                        <Statistic>
                            <Statistic.Value>11,000</Statistic.Value>
                            <Statistic.Label>Total Customers</Statistic.Label>
                        </Statistic>
                        <Statistic>
                            <Statistic.Value>92%</Statistic.Value>
                            <Statistic.Label>Reviews</Statistic.Label>
                        </Statistic>
                        <Statistic>
                            <Statistic.Value>72</Statistic.Value>
                            <Statistic.Label>Batch Earns</Statistic.Label>
                        </Statistic>
                        </Statistic.Group>
                    </div>
                    <Header as='h3' block>
                        Upcomming Rides For You 
                    </Header>

                    {/* <Input icon='search' placeholder='Search customer by NIC' />  */}
                    <Table celled style={{marginLeft:"0px", width:"96vw"}}>
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Ref No</Table.HeaderCell>
                            <Table.HeaderCell>Ride Date</Table.HeaderCell>
                            <Table.HeaderCell>Time</Table.HeaderCell>
                            <Table.HeaderCell>Return Date</Table.HeaderCell>
                            <Table.HeaderCell>Vehicle No</Table.HeaderCell>
                            <Table.HeaderCell>Vehicle Brand</Table.HeaderCell>
                            <Table.HeaderCell>Customer</Table.HeaderCell>
                            <Table.HeaderCell>Customer Name</Table.HeaderCell>
                            <Table.HeaderCell>Customer tel  </Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {tb_data}
                        </Table.Body>
                    </Table>



                    </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                   
                </Grid.Row>
            </Grid>
        );
    }
}

export default Driver_View;
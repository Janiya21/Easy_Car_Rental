import React, { Component } from 'react';
import { Button, Table, Grid, Popup, Icon, Header, Image, Card, Statistic, Form, Input } from 'semantic-ui-react';
import axios from 'axios';

class Order_Ad extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: [],
        }

        this.callAPI = this.callAPI.bind(this)
        this.callAPI();
    }

    callAPI() {
        fetch("http://localhost:8081/easyRents/api/v1/ride").then(
            (response) => response.json()
        ).then((data) => {
            console.log(data);
            this.setState({
                posts: data.data
            })
        })
    }

    submitHandler = async (refNo) => {

        let clickedObj = null;

        for (let ob of this.state.posts) {
            if(ob.referenceNo === refNo){
               clickedObj = ob;
            }
        }
        console.log(clickedObj);

        let updatedObj = {
            "referenceNo": clickedObj.referenceNo ,
            "downPayment": clickedObj.downPayment ,
            "rentalDate": clickedObj.rentalDate ,
            "rentalTime": clickedObj.rentalTime ,
            "reqStatus": "Approved" ,
            "returnDate": clickedObj.returnDate ,
            customer: clickedObj.customer,
            driver: clickedObj.driver,
            vehicle: clickedObj.vehicle
        }

        console.log(updatedObj);

        let res = await this.updateOrderStatus(updatedObj);
        console.log(res);

        if (res.status === 200) {
            alert("Successfully Approved The Request");
            window.location.reload();
        } else {
            alert("Request Not Approved Correctly")
        }
    }

    updateOrderStatus = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.put('http://localhost:8081/easyRents/api/v1/ride', data)
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
       
        let tb_data = this.state.posts.map((item)=>{
            console.log(item);
            if (item.reqStatus === "Approved"){

                return (
                    <Table.Row>
                    <Table.Cell>{item.referenceNo}</Table.Cell>
                    <Table.Cell>{item.rentalDate}</Table.Cell>
                    <Table.Cell>{item.rentalTime}</Table.Cell>
                    <Table.Cell>{item.returnDate}</Table.Cell>
                    <Table.Cell>{item.downPayment}</Table.Cell>
                    <Table.Cell>
                        <Popup
                            content={
                                <Card>
                                    {/* <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} /> */}
                                    <Card.Content>
                                        <Card.Header>{item.customer.nic}</Card.Header>
                                        <Card.Meta>
                                            <span className='date'>{item.customer.name}</span>
                                        </Card.Meta>
                                        <Card.Description>
                                            {item.customer.tel}
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <a>
                                            <Icon name='user' />
                                            {item.customer.email}
                                        </a>
                                    </Card.Content>
                                </Card>
                            }
                            on='click'
                            trigger={<Button content='Show' />}
                        />
                    </Table.Cell>
                    <Table.Cell>
                        <Popup
                            content={
                                <Card>
                                    <Card.Content>
                                        <Card.Header>{item.vehicle.regNo}</Card.Header>
                                        <Card.Meta>
                                            <span className='date'>{item.vehicle.brand}</span>
                                        </Card.Meta>
                                        <Card.Description>
                                            {item.vehicle.comfortability}
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <a>
                                            <Icon name='user' />
                                            {item.vehicle.no_of_passengers}
                                        </a>
                                    </Card.Content>
                                </Card>
                            }
                            on='click'
                            trigger={<Button content='Show' />}
                        />
                    </Table.Cell>
                    <Table.Cell>
                        <Popup
                            content={
                                <Card>
                                    {/* <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} /> */}
                                    <Card.Content>
                                        <Card.Header>{item.driver.driverId}</Card.Header>
                                        <Card.Meta>
                                            <span className='date'>{item.driver.name}</span>
                                        </Card.Meta>
                                        <Card.Description>
                                            {item.driver.email}
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <a>
                                            <Icon name='tty' />
                                            {item.driver.telNo}
                                        </a>
                                    </Card.Content>
                                </Card>
                            }
                            on='click'
                            trigger={<Button content='Show' />}
                        />
                    </Table.Cell>
                </Table.Row>
                )
            }
                
        })
        
        let pending_table = this.state.posts.map((item) => {
            if (item.reqStatus === "Pending") {
                return (
                    <Table.Row>
                        <Table.Cell>
                            <Header as='h4' image>
                                {/* <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' rounded size='mini' /> */}
                                <Header.Content>
                                    {item.referenceNo}
                                    <Header.Subheader>{item.reqStatus}</Header.Subheader>
                                </Header.Content>
                            </Header>
                        </Table.Cell>
                        <Table.Cell>
                            <Popup
                                content={
                                    <Card>
                                        {/* <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} /> */}
                                        <Card.Content>
                                            <Card.Header>NIC : {item.customer.nic}</Card.Header>
                                            <Card.Meta>
                                                <span className='date'>Name : {item.customer.name}</span>
                                            </Card.Meta>
                                            <Card.Meta>
                                                <span className='date'>Driver : {item.driver.driverId}</span>
                                            </Card.Meta>
                                            <Card.Meta>
                                                <span className='date'>Vehicle : {item.vehicle.regNo}</span>
                                            </Card.Meta>
                                            <Card.Description>
                                                {item.customer.email}
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>
                                }
                                on='click'
                                trigger={<Button content='Show' />}
                            />
                        </Table.Cell>
                        <Table.Cell>
                            <Button onClick={() => this.submitHandler(item.referenceNo)} type="button" basic color='green'>Approve</Button>
                            <Button basic color='red'>Decline </Button>
                        </Table.Cell>
                    </Table.Row>
                )
            }

        })
        return (
            <Grid celled='internally'>
                <Grid.Row>
                    <Grid.Column width={6}>
                        <div style={{ marginLeft: "40px" }}>
                            <Statistic.Group>
                                <Statistic>
                                    <Statistic.Value>4.5</Statistic.Value>
                                    <Statistic.Label>Ratings</Statistic.Label>
                                </Statistic>
                                <Statistic>
                                    <Statistic.Value>005</Statistic.Value>
                                    <Statistic.Label>Total Customers</Statistic.Label>
                                </Statistic>
                                <Statistic>
                                    <Statistic.Value>004</Statistic.Value>
                                    <Statistic.Label>Total Pendings</Statistic.Label>
                                </Statistic>
                            </Statistic.Group>
                        </div>
                        <Header as='h3' block>
                            Rental Requests 
                        </Header>

                        <Table basic='very' celled collapsing style={{ margin: "20px 0 0 50px" }}>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Order_Id</Table.HeaderCell>
                                    <Table.HeaderCell>Other Details</Table.HeaderCell>
                                    <Table.HeaderCell>Status</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {pending_table}
                            </Table.Body>
                        </Table>


                    </Grid.Column>
                    <Grid.Column width={8}>

                        <Input icon='search' placeholder='Search customer by NIC' />
                        <Table celled style={{ marginLeft: "0px", width: "60vw" }}>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Reference No</Table.HeaderCell>
                                    <Table.HeaderCell>Rental Date</Table.HeaderCell>
                                    <Table.HeaderCell>Rental Time</Table.HeaderCell>
                                    <Table.HeaderCell>Return Date</Table.HeaderCell>
                                    <Table.HeaderCell>Downpayment</Table.HeaderCell>
                                    <Table.HeaderCell>Customer Details</Table.HeaderCell>
                                    <Table.HeaderCell>Vehicle Details</Table.HeaderCell>
                                    <Table.HeaderCell>Driver Details</Table.HeaderCell>
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

export default Order_Ad;
import React, { Component } from 'react';
import { Button, Table, Grid, Popup, Icon, Header, Image, Card, Statistic, Form, Input  } from 'semantic-ui-react';
import axios from 'axios';

class Customer_Ad extends Component {

    constructor(props) {
        super(props)

        this.state ={
            posts:[]
        }

        this.callAPI = this.callAPI.bind(this)
        this.callAPI();
    }

    callAPI(){
        fetch("http://localhost:8081/easyRents/api/v1/customer").then(
            (response) => response.json()
        ).then((data)=> {
            console.log(data);
            this.setState({
                posts:data.data
            })
        })
    }

    render() {
        // const {posts} = this.state
        let tb_data = this.state.posts.map((item)=>{
            if(item.status === "Approved"){
                return (
                    <Table.Row>
                        <Table.Cell>{item.nic}</Table.Cell>
                        <Table.Cell>{item.name}</Table.Cell>
                        <Table.Cell>
                            <Popup
                                 content={<img style={{width:"20vw"}} src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />}
                                on='click'           
                                trigger={<Button content='Show' />}
                            />
                        </Table.Cell>
                        <Table.Cell>{item.email}</Table.Cell>
                        <Table.Cell>{item.tel}</Table.Cell>
                        <Table.Cell>{item.status}</Table.Cell>
                        <Table.Cell><Button icon='zip' /></Table.Cell>
                    </Table.Row>
                )
            }
            
        });
        let pending_table = this.state.posts.map((item)=>{
            if(item.status === "Pending"){
                return (
                    <Table.Row>
                         <Table.Cell>
                            <Header as='h4' image>
                                <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' rounded size='mini' />
                                <Header.Content>
                                {item.name}
                                <Header.Subheader>{item.nic}</Header.Subheader>
                                </Header.Content>
                            </Header>
                            </Table.Cell>
                            <Table.Cell>
                                    <Popup
                                        content={
                                            <Card>
                                                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                                                <Card.Content>
                                                <Card.Header>{item.name}</Card.Header>
                                                <Card.Meta>
                                                    <span className='date'>{item.nic}</span>
                                                </Card.Meta>
                                                <Card.Description>
                                                    {item.email}
                                                </Card.Description>
                                                </Card.Content>
                                                <Card.Content extra>
                                                <a>
                                                    <Icon name='user' />
                                                    {item.tel}
                                                </a>
                                                </Card.Content>
                                            </Card>
                                        }
                                        on='click'
                                        trigger={<Button content='Show' />}
                                    />
                                </Table.Cell>
                                <Table.Cell>
                                <Button basic color='green'>Approve</Button>
                                <Button basic color='red'>Decline </Button>
                            </Table.Cell>
                    </Table.Row>
                )
            }
            
        })
        return (
            <Grid celled='internally'>
                <Grid.Row>
                    <Grid.Column width={7}>
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
                        Customer Requests
                    </Header>

                    <Table basic='very' celled collapsing style={{margin:"20px 0 0 50px"}}>
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Employee</Table.HeaderCell>
                            <Table.HeaderCell>Correct Guesses</Table.HeaderCell>
                            <Table.HeaderCell>Show Details</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {pending_table}
                        </Table.Body>
                    </Table>


                    </Grid.Column>
                    <Grid.Column width={7}>
                    
                        <Input icon='search' placeholder='Search customer by NIC' /> 
                    <Table celled style={{marginLeft:"0px", width:"50vw"}}>
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>NIC</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>NIC/License</Table.HeaderCell>
                            <Table.HeaderCell>Email</Table.HeaderCell>
                            <Table.HeaderCell>TelNo</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                            <Table.HeaderCell>Delete</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {tb_data}
                        </Table.Body>
                    </Table>

                    {/* <Form>
                        <Form.Field>
                        <label>NIC No</label>
                        <input placeholder='nic number' />
                        </Form.Field>
                        <Form.Group widths='equal'>
                            <Form.Input fluid label='name' placeholder='name' />
                            <Form.Input fluid label='email' placeholder='email' />
                        </Form.Group>
                        <Form.Field>
                        <Form.Field>
                        <label>Tel No</label>
                        <input placeholder='telephone' />
                        </Form.Field>
                        </Form.Field>
                        <Form.Group widths='equal'>
                            <Button type='submit'>Delete</Button>
                            <Button type='submit'>Update</Button>
                        </Form.Group>
                    </Form> */}

                    </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                   
                </Grid.Row>
            </Grid>
        );
    }
}

export default Customer_Ad;
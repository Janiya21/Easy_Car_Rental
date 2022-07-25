import React, { Component } from 'react';
import { Button, Table, Grid, Popup, Icon, Header, Image, Card, Statistic, Form, Input  } from 'semantic-ui-react';

class Driver_Ad extends Component {

    constructor(props) {
        super(props)

        this.state ={
            posts:[]
        }

        this.callAPI = this.callAPI.bind(this)
        this.callAPI();
    }

    callAPI(){
        fetch("http://localhost:8081/easyRents/api/v1/driver").then(
            (response) => response.json()
        ).then((data)=> {
            console.log(data);
            this.setState({
                posts:data.data
            })
        })
    }

    render() {

        let tb_data = this.state.posts.map((item)=>{
                return (
                    <Table.Row>
                          <Table.Cell singleLine>{item.driverId }</Table.Cell>
                          <Table.Cell singleLine>{item.name}</Table.Cell>
                          <Table.Cell singleLine>{item.email}</Table.Cell>
                          <Table.Cell singleLine>{item.telNo}</Table.Cell>
                          <Table.Cell><Button icon='zip' /></Table.Cell>
                    </Table.Row>
                )
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
                        Driver Requests
                    </Header>

                    <Form>
                        <Form.Field>
                        <label>Driver ID</label>
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
                            <Button type='submit'>Add</Button>
                            <Button type='submit'>Delete</Button>
                            <Button type='submit'>Update</Button>
                        </Form.Group>
                    </Form>


                    </Grid.Column>
                    <Grid.Column width={7}>
                    
                        <Input icon='search' placeholder='Search customer by NIC' /> 
                    <Table celled style={{marginLeft:"0px", width:"50vw"}}>
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>DriverID</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Email</Table.HeaderCell>
                            <Table.HeaderCell>TelNo</Table.HeaderCell>
                            {/* <Table.HeaderCell>Status</Table.HeaderCell> */}
                            <Table.HeaderCell>Delete</Table.HeaderCell>
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

export default Driver_Ad;
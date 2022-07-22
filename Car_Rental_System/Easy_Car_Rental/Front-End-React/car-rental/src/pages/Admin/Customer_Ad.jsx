import React, { Component } from 'react';
import { Button, Table, Grid, Popup, Icon, Header, Image, Card, Progress, Segment, Input  } from 'semantic-ui-react';

class Customer_Ad extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Grid celled='internally'>
                <Grid.Row>
                    <Grid.Column width={7}>
                    <Header as='h3' block>
                        Customer Requests
                    </Header>

                    <Table basic='very' celled collapsing>
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Employee</Table.HeaderCell>
                            <Table.HeaderCell>Correct Guesses</Table.HeaderCell>
                            <Table.HeaderCell>Show Details</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                            <Header as='h4' image>
                                <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' rounded size='mini' />
                                <Header.Content>
                                Lena
                                <Header.Subheader>Human Resources</Header.Subheader>
                                </Header.Content>
                            </Header>
                            </Table.Cell>
                            <Table.Cell>
                                    <Popup
                                        content={
                                            <Card>
                                                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                                                <Card.Content>
                                                <Card.Header>Matthew</Card.Header>
                                                <Card.Meta>
                                                    <span className='date'>Joined in 2015</span>
                                                </Card.Meta>
                                                <Card.Description>
                                                    Matthew is a musician living in Nashville.
                                                </Card.Description>
                                                </Card.Content>
                                                <Card.Content extra>
                                                <a>
                                                    <Icon name='user' />
                                                    22 Friends
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
                        <Table.Row>
                            <Table.Cell>
                            <Header as='h4' image>
                                <Image src='https://react.semantic-ui.com/images/avatar/small/matthew.png' rounded size='mini' />
                                <Header.Content>
                                Matthew
                                <Header.Subheader>Fabric Design</Header.Subheader>
                                </Header.Content>
                            </Header>
                            </Table.Cell>
                            <Table.Cell> 
                                <Popup
                                    content={
                                        <Card>
                                            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                                            <Card.Content>
                                            <Card.Header>Matthew</Card.Header>
                                            <Card.Meta>
                                                <span className='date'>Joined in 2015</span>
                                            </Card.Meta>
                                            <Card.Description>
                                                Matthew is a musician living in Nashville.
                                            </Card.Description>
                                            </Card.Content>
                                            <Card.Content extra>
                                            <a>
                                                <Icon name='user' />
                                                22 Friends
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
                        <Table.Row>
                            <Table.Cell>
                            <Header as='h4' image>
                                <Image src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' rounded size='mini' />
                                <Header.Content>
                                Lindsay
                                <Header.Subheader>Entertainment</Header.Subheader>
                                </Header.Content>
                            </Header>
                            </Table.Cell>
                            <Table.Cell>
                                <Popup
                                    content={
                                        <Card>
                                            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                                            <Card.Content>
                                            <Card.Header>Matthew</Card.Header>
                                            <Card.Meta>
                                                <span className='date'>Joined in 2015</span>
                                            </Card.Meta>
                                            <Card.Description>
                                                Matthew is a musician living in Nashville.
                                            </Card.Description>
                                            </Card.Content>
                                            <Card.Content extra>
                                            <a>
                                                <Icon name='user' />
                                                22 Friends
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
                        <Table.Row>
                            <Table.Cell>
                            <Header as='h4' image>
                                <Image src='https://react.semantic-ui.com/images/avatar/small/mark.png' rounded size='mini' />
                                <Header.Content>
                                Mark
                                <Header.Subheader>Executive</Header.Subheader>
                                </Header.Content>
                            </Header>
                            </Table.Cell>
                            <Table.Cell>
                                <Popup
                                    content={
                                        <Card>
                                            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                                            <Card.Content>
                                            <Card.Header>Matthew</Card.Header>
                                            <Card.Meta>
                                                <span className='date'>Joined in 2015</span>
                                            </Card.Meta>
                                            <Card.Description>
                                                Matthew is a musician living in Nashville.
                                            </Card.Description>
                                            </Card.Content>
                                            <Card.Content extra>
                                            <a>
                                                <Icon name='user' />
                                                22 Friends
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
                            <Table.Row>
                                <Table.Cell>No Name Specified</Table.Cell>
                                <Table.Cell>Unknown</Table.Cell>
                                <Table.Cell>
                                    <Popup
                                        content={<img style={{width:"20vw"}} src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />}
                                        on='click'
                                        
                                        trigger={<Button content='Show' />}
                                    />
                                </Table.Cell>
                                <Table.Cell negative>None</Table.Cell>
                                <Table.Cell>Unknown</Table.Cell>
                                <Table.Cell>Unknown</Table.Cell>
                                <Table.Cell><Button icon='zip' /></Table.Cell>
                            </Table.Row>
                            <Table.Row positive>
                                <Table.Cell>Jimmy</Table.Cell>
                                <Table.Cell><Icon name='checkmark' />Approved</Table.Cell>
                                <Table.Cell> 
                                    <Popup
                                        content={<img style={{width:"20vw"}} src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />}
                                        on='click'
                                        
                                        trigger={<Button content='Show' />}
                                    />
                                </Table.Cell>
                                <Table.Cell>None</Table.Cell>
                                <Table.Cell>Unknown</Table.Cell>
                                <Table.Cell>Unknown</Table.Cell>
                                <Table.Cell><Button icon='zip' /></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Jamie</Table.Cell>
                                <Table.Cell>Unknown</Table.Cell>
                                <Table.Cell>
                                    <Popup
                                        content={<img style={{width:"20vw"}} src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />}
                                        on='click'
                                        
                                        trigger={<Button content='Show' />}
                                    />
                                </Table.Cell>
                                <Table.Cell positive><Icon name='close' />Requires call</Table.Cell>
                                <Table.Cell>Unknown</Table.Cell>
                                <Table.Cell>Unknown</Table.Cell>
                                <Table.Cell><Button icon='zip' /></Table.Cell>
                            </Table.Row>
                            <Table.Row negative>
                                <Table.Cell>Jill</Table.Cell>
                                <Table.Cell>Unknown</Table.Cell>
                                <Table.Cell>
                                    <Popup
                                        content={<img style={{width:"20vw"}} src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />}
                                        on='click'
                                        
                                        trigger={<Button content='Show' />}
                                    />
                                </Table.Cell>
                                <Table.Cell>None</Table.Cell>
                                <Table.Cell>Unknown</Table.Cell>
                                <Table.Cell>Unknown</Table.Cell>
                                <Table.Cell><Button icon='zip' /></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>No Name Specified</Table.Cell>
                                <Table.Cell>Unknown</Table.Cell>
                                <Table.Cell>
                                    <Popup
                                        content={<img style={{width:"20vw"}} src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />}
                                        on='click'
                                        
                                        trigger={<Button content='Show' />}
                                    />
                                </Table.Cell>
                                <Table.Cell negative>None</Table.Cell>
                                <Table.Cell>Unknown</Table.Cell>
                                <Table.Cell>Unknown</Table.Cell>
                                <Table.Cell><Button icon='zip' /></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>No Name Specified</Table.Cell>
                                <Table.Cell>Unknown</Table.Cell>
                                <Table.Cell>
                                    <Popup
                                        content={<img style={{width:"20vw"}} src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />}
                                        on='click'
                                        
                                        trigger={<Button content='Show' />}
                                    />
                                </Table.Cell>
                                <Table.Cell negative>None</Table.Cell>
                                <Table.Cell>Unknown</Table.Cell>
                                <Table.Cell>Unknown</Table.Cell>
                                <Table.Cell><Button icon='zip' /></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>No Name Specified</Table.Cell>
                                <Table.Cell>Unknown</Table.Cell>
                                <Table.Cell>
                                    <Popup
                                        content={<img style={{width:"20vw"}} src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />}
                                        on='click'
                                        
                                        trigger={<Button content='Show' />}
                                    />
                                </Table.Cell>
                                <Table.Cell negative>None</Table.Cell>
                                <Table.Cell>Unknown</Table.Cell>
                                <Table.Cell>Unknown</Table.Cell>
                                <Table.Cell><Button icon='zip' /></Table.Cell>
                            </Table.Row>
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
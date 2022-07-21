import React, { Component } from 'react';
import { Button, Popup, Grid, Menu, Icon, Card, Image, Label, Progress, Segment, Input  } from 'semantic-ui-react';
import { BrowserRouter, Route, Link } from "react-router-dom";

class CustomerView extends Component {

    constructor(props) {
        super(props)

        this.state = {
            activeItem: 'inbox'
        }
    }

    // state = { activeItem: 'inbox' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state;
        return (
            <div class="ui equal width grid">
                <div class="three wide column">
                    
                    <Menu vertical>
                        <Menu.Item name='inbox' active={activeItem === 'inbox'} onClick={this.handleItemClick}>
                        <Label color='teal'>1</Label>
                            <a class="active item">
                                <Link to="/cus_Admin">Customer</Link>
                            </a>
                        </Menu.Item>

                        <Menu.Item name='spam' active={activeItem === 'spam'} onClick={this.handleItemClick}>
                        <Label>51</Label>
                            <a class="active item">
                                <Link to="/">Driver</Link>
                            </a>
                        </Menu.Item>

                        <Menu.Item name='updates' active={activeItem === 'updates'} onClick={this.handleItemClick}>
                        <Label>1</Label>
                            <a class="active item">
                                <Link to="/">Vehicle</Link>
                            </a>
                        </Menu.Item>

                        <Menu.Item name='updates' active={activeItem === 'updates'} onClick={this.handleItemClick}>
                        <Label>1</Label>
                            <a class="active item">
                                <Link to="/">Orders</Link>
                            </a>
                        </Menu.Item>

                        <Menu.Item name='updates' active={activeItem === 'updates'} onClick={this.handleItemClick}>
                            <a class="active item">
                                <Link to="/">Home</Link>
                            </a>
                        </Menu.Item>

                        <Menu.Item name='updates' active={activeItem === 'updates'} onClick={this.handleItemClick}>
                            <a class="active item">
                                <Link to="/">Log Out</Link>
                            </a>
                        </Menu.Item>
                    </Menu>
                </div>
                <div class="twelve wide column">
                <Segment raised>Pellentesque habitant morbi tristique senectus.</Segment>
                    <div class="ui">
                        <div className="row">
                            <Grid>
                                <Grid.Column width={3}>
                                <Image style={{ padding: "0 0 10px 20px" }} src='https://t3.ftcdn.net/jpg/03/58/16/06/360_F_358160626_45fJ6k9AhrZzSyRedvemX3ofxWEUD1r7.jpg' />
                                </Grid.Column>
                                <Grid.Column width={11}>
                                <div class="ui container" style={{ padding: "50px 0 30px 0" }}>
                                    Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                                    vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                                    Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut
                                    metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                                    Curabitur ullamcorper ultricies nisi.Aenean imperdiet. Etiam ultricies nisi vel augue.
                                    Curabitur ullamcorper ultricies nisi.
                                </div>
                                </Grid.Column>
                            </Grid>
                            {/* <Popup trigger={<Button primary >You have <h2> 3 </h2> new Customer Requests</Button>} flowing hoverable>
                                <Grid centered divided columns={3}>
                                    <Card>
                                        <Card.Content>
                                            <Image
                                                floated='right'
                                                size='mini'
                                                src='https://images.assetsdelivery.com/compings_v2/metelsky/metelsky1809/metelsky180900220.jpg'
                                            />
                                            <Card.Header>Steve Sanders</Card.Header>
                                            
                                            <Card.Description>
                                                Steve wants to add you to the group <strong>best friends</strong>
                                            </Card.Description>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <div className='ui two buttons'>
                                                <Button basic color='green'>
                                                    Show
                                                </Button>
                                                <Button basic color='red'>
                                                    Decline
                                                </Button>
                                            </div>
                                        </Card.Content>
                                    </Card>
                                </Grid>
                            </Popup>

                            <Popup trigger={<Button content='Primary' style={{marginLeft:"50px"}}>You have <h2> 3 </h2> new Customer Requests</Button>} flowing hoverable>
                                <Grid centered divided columns={3}>
                                    <Card>
                                        <Card.Content>
                                            <Image
                                                floated='right'
                                                size='mini'
                                                src='https://images.assetsdelivery.com/compings_v2/metelsky/metelsky1809/metelsky180900220.jpg'
                                            />
                                            <Card.Header>Steve Sanders</Card.Header>
                                            <Card.Description>
                                                Steve wants to add you to the group <strong>best friends</strong>
                                            </Card.Description>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <div className='ui two buttons'>
                                                <Button basic color='green'>
                                                    Show
                                                </Button>
                                                <Button basic color='red'>
                                                    Decline
                                                </Button>
                                            </div>
                                        </Card.Content>
                                    </Card>
                                </Grid>
                            </Popup>


                            <Popup trigger={<Button content='Primary' secondary style={{marginLeft:"50px"}}>You have <h2> 3 </h2> new Customer Requests</Button>} flowing hoverable>
                                <Grid centered divided columns={3}>
                                    <Card>
                                        <Card.Content>
                                            <Image
                                                floated='right'
                                                size='mini'
                                                src='https://images.assetsdelivery.com/compings_v2/metelsky/metelsky1809/metelsky180900220.jpg'
                                            />
                                            <Card.Header>Steve Sanders</Card.Header>
                                            <Card.Description>
                                                Steve wants to add you to the group <strong>best friends</strong>
                                            </Card.Description>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <div className='ui two buttons'>
                                                <Button basic color='green'>
                                                    Show
                                                </Button>
                                                <Button basic color='red'>
                                                    Decline
                                                </Button>
                                            </div>
                                        </Card.Content>
                                    </Card>
                                </Grid>
                            </Popup> */}
                        </div>
                    </div>
                    
                    
                    <Segment>
                        <Progress percent={21} inverted indicating progress >Sales</Progress>
                        <Progress percent={78} inverted indicating progress >Sales</Progress>
                        <Progress percent={30} inverted indicating progress >Sales</Progress>
                        <Progress percent={87} inverted indicating progress >Sales</Progress>
                        <Progress percent={57} inverted indicating progress >Sales</Progress>
                    </Segment>


                </div>
            </div>
        );
    }
}

export default CustomerView;
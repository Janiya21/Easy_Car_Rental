import React, { Component } from 'react';
import { Button, Table, Grid, Menu, Icon, Card, Image, Label, Progress, Segment, Input  } from 'semantic-ui-react';

class Customer_Ad extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Grid celled='internally'>
                <Grid.Row>
                    <Grid.Column width={7}>
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                    <Grid.Column width={7}>
                    <Table celled style={{marginLeft:"0px", width:"50vw"}}>
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                            <Table.HeaderCell>Notes</Table.HeaderCell>
                            <Table.HeaderCell>Notes</Table.HeaderCell>
                            <Table.HeaderCell>Notes</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>No Name Specified</Table.Cell>
                                <Table.Cell>Unknown</Table.Cell>
                                <Table.Cell negative>None</Table.Cell>
                                <Table.Cell>Unknown</Table.Cell>
                                <Table.Cell>Unknown</Table.Cell>
                            </Table.Row>
                            <Table.Row positive>
                                <Table.Cell>Jimmy</Table.Cell>
                                <Table.Cell>
                                <Icon name='checkmark' />
                                Approved
                                </Table.Cell>
                                <Table.Cell>None</Table.Cell>
                                <Table.Cell>Unknown</Table.Cell>
                                <Table.Cell>Unknown</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Jamie</Table.Cell>
                                <Table.Cell>Unknown</Table.Cell>
                                <Table.Cell positive>
                                <Icon name='close' />
                                Requires call
                                </Table.Cell>
                                <Table.Cell>Unknown</Table.Cell>
                                <Table.Cell>Unknown</Table.Cell>
                            </Table.Row>
                            <Table.Row negative>
                                <Table.Cell>Jill</Table.Cell>
                                <Table.Cell>Unknown</Table.Cell>
                                <Table.Cell>None</Table.Cell>
                                <Table.Cell>Unknown</Table.Cell>
                                <Table.Cell>Unknown</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                            <Table.Cell>No Name Specified</Table.Cell>
                            <Table.Cell>Unknown</Table.Cell>
                            <Table.Cell negative>None</Table.Cell>
                            <Table.Cell>Unknown</Table.Cell>
                            <Table.Cell>Unknown</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>No Name Specified</Table.Cell>
                                <Table.Cell>Unknown</Table.Cell>
                                <Table.Cell negative>None</Table.Cell>
                                <Table.Cell>Unknown</Table.Cell>
                                <Table.Cell>Unknown</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>No Name Specified</Table.Cell>
                                <Table.Cell>Unknown</Table.Cell>
                                <Table.Cell negative>None</Table.Cell>
                                <Table.Cell>Unknown</Table.Cell>
                                <Table.Cell>Unknown</Table.Cell>
                            </Table.Row>
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

export default Customer_Ad;
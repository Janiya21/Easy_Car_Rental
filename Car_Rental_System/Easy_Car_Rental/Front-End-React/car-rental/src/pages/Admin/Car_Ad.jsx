import React, { Component } from 'react';
import {  Grid, Table, Rating, Card, Image, Label, Header, Segment  } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

class Admin_CarView extends Component {

    constructor(props) {
        super(props)

        this.state = {
        }
    }
    

    render() {
        return (
            <div>
                <div class="ui menu">
                    <a class="item">All Cars</a>
                    <a class="item">Reviews</a>
                    <a class="item">Upcoming Events</a>
                </div>
                <Segment raised><b>All Available Cars</b></Segment>

                <div className='date'>
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
                        </div>

                <Grid>
                    <Grid.Column width={10}>
                        
                    <Table celled padded>
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell singleLine>Evidence Rating</Table.HeaderCell>
                            <Table.HeaderCell>Effect</Table.HeaderCell>
                            <Table.HeaderCell>Efficacy</Table.HeaderCell>
                            <Table.HeaderCell>Consensus</Table.HeaderCell>
                            <Table.HeaderCell>Comments</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                            <Header as='h2' textAlign='center'>
                                A
                            </Header>
                            </Table.Cell>
                            <Table.Cell singleLine>Power Output</Table.Cell>
                            <Table.Cell>
                            <Rating icon='star' defaultRating={3} maxRating={3} />
                            </Table.Cell>
                            <Table.Cell textAlign='right'>
                            80% <br />
                            <a href='#'>18 studies</a>
                            </Table.Cell>
                            <Table.Cell>
                            Creatine supplementation is the reference compound for increasing
                            muscular creatine levels; there is variability in this increase,
                            however, with some nonresponders.
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                            <Header as='h2' textAlign='center'>
                                A
                            </Header>
                            </Table.Cell>
                            <Table.Cell singleLine>Weight</Table.Cell>
                            <Table.Cell>
                            <Rating icon='star' defaultRating={3} maxRating={3} />
                            </Table.Cell>
                            <Table.Cell textAlign='right'>
                            100% <br />
                            <a href='#'>65 studies</a>
                            </Table.Cell>
                            <Table.Cell>
                            Creatine is the reference compound for power improvement, with numbers
                            from one meta-analysis to assess potency
                            </Table.Cell>
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
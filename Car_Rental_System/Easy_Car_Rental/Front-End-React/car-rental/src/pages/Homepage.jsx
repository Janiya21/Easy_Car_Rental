import React, { Component } from 'react';
import {  Link } from "react-router-dom";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import history from '../history';

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'none',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

//==============================================

class Homepage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pickup_date:'',
            return_date:'',
            pickup_location:'',
            vehicle_type:'',
        }
    }

    navigateCustomer = () => {
        localStorage.setItem('pickup', this.state.pickup_date)
        localStorage.setItem('return', this.state.return_date)
        localStorage.setItem('type',this.state.vehicle_type)

        history.push({pathname:'/show_vhicles'});
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name] : e.target.value});
    }

    render() {
        const {pickup_date,return_date,location,vehicle_type} = this.state; 
        const {classes} = this.props;
        return (
            <div>
                <div class="ui internally celled grid">
                    <div class="ui steps">
                        <div class="active step">
                            <i aria-hidden="true" class="calendar times icon"/>
                            <div class="content">
                                <div class="title">Select a Date/Time</div>
                                <div class="description">Enter billing information</div>
                            </div>
                        </div>
                        <div class="step">
                            <i aria-hidden="true" class="icon car"/>
                            <div class="content"><div class="title">Select A Car</div>
                                <div class="description">Choose your shipping options</div>
                            </div>
                        </div>
                        <div class="step">
                            <i aria-hidden="true" class="drivers license icon"/>
                            <div class="content">
                                <div class="title">Pick-up Random Driver</div>
                                <div class="description">Enter billing information</div>
                            </div>
                        </div>
                        <div class="disabled step">
                            <i aria-hidden="true" class="info icon"/>
                            <div class="content">
                                <div class="title">Confirm Order</div>
                            </div>
                        </div>
                    </div>

                    <div class="row" style={{ height: "68vh" }}>
                        <div class="eight wide column">

                            <img src={require('../images/add1.png')} />

                            <div className="row" style={{ margin: "60px 0 0 40px" }}>

                                <div class="ui statistics">
                                    <div class="ui statistic">
                                        <div class="value">22</div>
                                        <div class="label">Saves</div>
                                    </div>
                                    <div class="ui statistic">
                                        <div class="text value">Three<br />Thousand
                                        </div>
                                        <div class="label">Signups</div>
                                    </div>
                                    <div class="ui statistic">
                                        <div class="value">
                                            <i aria-hidden="true" class="plane icon"/>5
                                        </div>
                                        <div class="label">Flights</div>
                                    </div>
                                    <div class="ui statistic">
                                        <div class="value">
                                            <img src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" class="ui circular inline image" />42
                                        </div>
                                        <div class="label">Team Members</div></div>
                                </div>

                            </div>
                        </div>
                        <div class="eight wide column">
                            <div className="row" >
                                <form class="ui form">
                                    <div class="field">
                                        <label>Pick-Up</label>
                                        <TextField name="pickup_date" value={pickup_date} onChange={this.changeHandler} 
                                            id="date"
                                            type="date"
                                            defaultValue="2022-05-24"
                                            className={classes.textField}
                                            InputLabelProps={{
                                            shrink: true,
                                            }}
                                        />
                                    </div>
                                    <div class="field">
                                        <label>Return-date</label>
                                        <TextField name="return_date" value={return_date} onChange={this.changeHandler} 
                                            id="date"
                                            type="date"
                                            defaultValue="2022-05-24"
                                            className={classes.textField}
                                            InputLabelProps={{
                                            shrink: true,
                                            }}
                                        />
                                    </div>
                                    <div className="equal width fields">
                                        <select name="location" className="ui dropdown">
                                            <option value="Colombo" onChange={this.changeHandler}>Colombo</option>
                                            <option value="Piliyandala" onChange={this.changeHandler}>Piliyandala</option>
                                            <option value="Boralesgamuwa" onChange={this.changeHandler}>Boralesgamuwa</option>
                                            <option value="Moratuwa" onChange={this.changeHandler}>Moratuwa</option>
                                            <option value="Kotte" onChange={this.changeHandler}>Kotte</option>
                                            <option value="Panadura" onChange={this.changeHandler}>Panadura</option>
                                            <option value="Maharagama" onChange={this.changeHandler}>Maharagama</option>
                                            <option value="Kottawa" onChange={this.changeHandler}>Kottawa</option>
                                            <option value="Homagama" onChange={this.changeHandler}>Homagama</option>
                                            <option value="Kesbewa" onChange={this.changeHandler}>Kesbewa</option>
                                        </select>
                                    </div>
                                    <div class="equal width fields">
                                        <select name="vehicle_type" value={vehicle_type} onChange={this.changeHandler} class="ui dropdown">
                                            <option value="any" onChange={this.changeHandler}>Any Type</option>
                                            <option value="general" onChange={this.changeHandler}>General</option>
                                            <option value="premium" onChange={this.changeHandler}>Premium</option>
                                            <option value="luxary" onChange={this.changeHandler}>Luxary</option>
                                        </select>
                                    </div>
                                    <button class="ui button" onClick={this.navigateCustomer}>
                                       <Link to={{pathname:'/show_vhicles', query:{test:'test'}}} >
                                            Search Vehicle
                                       </Link>
                                    </button>

                                </form>
                            </div>
                            <div class="ui container" style={{ padding: "30px 0 0 0" }}>
                                Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                                vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut
                                metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                                Curabitur ullamcorper ultricies nisi.Aenean imperdiet. Etiam ultricies nisi vel augue.
                                Curabitur ullamcorper ultricies nisi.
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default  withStyles(useStyles)(Homepage);
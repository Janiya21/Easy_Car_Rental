import React, { Component } from 'react';
import {  Link } from "react-router-dom";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


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

    changeHandler = (e) => {
        this.setState({ [e.target.name] : e.target.value});
    }

    onNavigateCustomer(){

    }

    render() {
        const {pickup_date,return_date,location,vehicle_type} = this.state; 
        const {classes} = this.props;
        return (
                
            <div>
                <div class="ui internally celled grid">
                    <div class="ui steps">
                        <div class="active step">
                            <i aria-hidden="true" class="calendar times icon"></i>
                            <div class="content">
                                <div class="title">Select a Date/Time</div>
                                <div class="description">Enter billing information</div>
                            </div>
                        </div>
                        <div class="step">
                            <i aria-hidden="true" class="icon car"></i>
                            <div class="content"><div class="title">Select A Car</div>
                                <div class="description">Choose your shipping options</div>
                            </div>
                        </div>
                        <div class="step">
                            <i aria-hidden="true" class="drivers license icon"></i>
                            <div class="content">
                                <div class="title">Pick-up Random Driver</div>
                                <div class="description">Enter billing information</div>
                            </div>
                        </div>
                        <div class="disabled step">
                            <i aria-hidden="true" class="info icon"></i>
                            <div class="content">
                                <div class="title">Confirm Order</div>
                            </div>
                        </div>
                    </div>

                    <div class="row" style={{ height: "68vh" }}>
                        <div class="eight wide column">

                            <img src={require('../images/add1.png')} />

                            <div className="row" style={{ margin: "60px 0 0 70px" }}>

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
                                            <i aria-hidden="true" class="plane icon"></i>5
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
                                    <div class="field">
                                        <label>PickUp Location</label>
                                        <input name="location" value={location} onChange={this.changeHandler}  placeholder="your location" />
                                    </div>
                                    <div class="equal width fields">
                                        <select name="vehicle_type" value={vehicle_type} onChange={this.changeHandler} class="ui dropdown">
                                            <option value="general" onChange={this.changeHandler}>General</option>
                                            <option value="premium" onChange={this.changeHandler}>Premium</option>
                                            <option value="luxary" onChange={this.changeHandler}>Luxary</option>
                                        </select>
                                    </div>
                                    <button class="ui button">
                                        <Link to="/customer">  Search Vehicle </Link> 
                                    </button>
                                    {/* npm i history */}
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

                {/* <div class="ui raised segment">
                    <h1 class="ui container center aligned">Most Available Cars Matching For You </h1>
                </div>

                <div class="ui grid" style={{ margin: "20px" }}>

                    <div style={{ margin: "20px 50px 30px 90px" }} class="ui doubling three column grid">
                        <div class="column">
                    
                            <div class="ui card">
                                <div class="image">
                                    <img style={{height:"23vh",width:"18.6vw"}} src="https://neethutravels.com/wp-content/uploads/2018/02/mercedes-benz-s-class.jpg" />
                                </div>
                                <div class="content">
                                    <div class="header">Luxary Vehicles</div>
                                    <div class="meta">
                                        <span class="date">Starting from : rs 8000 - 20000</span>
                                    </div>
                                    <div class="description">Max Comfortable - 5 passengers</div>
                                </div>
                                <div class="extra content">
                                    <a><i aria-hidden="true" class="user icon"></i>920 Buyers</a>
                                </div>
                                <button class="ui button">
                                    <Link to="/luxary_vehicle">
                                        <div class="detail"><h3>Availability : 13</h3></div>
                                    </Link>
                                </button>
                            </div>

                        </div>
                        <div class="column">

                            <div class="ui card">
                                <div class="image">
                                    <img src="https://rental.timescar.jp/price/items/C3212.jpg" />
                                </div>
                                <div class="content">
                                    <div class="header">Luxary Vehicles</div>
                                    <div class="meta">
                                        <span class="date">Starting from : rs 6000 - 17000</span>
                                    </div>
                                    <div class="description">Medium Comfortable - 5 passengers</div>
                                </div>
                                <div class="extra content">
                                    <a><i aria-hidden="true" class="user icon"></i>2.1K Buyers</a>
                                </div>
                                <button class="ui button">
                                    <Link to="/premium_vehicle">
                                        <div class="detail"><h3>Availability : 23</h3></div>
                                    </Link>
                                </button>
                            </div>

                        </div>
                        <div class="column">

                            <div class="ui card">
                                <div class="image">
                                    <img style={{height:"23vh",width:"18.6vw"}} src="http://3.bp.blogspot.com/-QK3rjTIu0zA/UywFlaaeZtI/AAAAAAAAA_4/IaxajFYLAMQ/s1600/Mazda-Carol-10.jpg" />
                                </div>
                                <div class="content">
                                    <div class="header">General</div>
                                    <div class="meta">
                                        <span class="date">Starting from : rs 3000 - 11000</span>
                                    </div>
                                    <div class="description">Medium Comfortable - 5 passengers</div>
                                </div>
                                <div class="extra content">
                                    <a><i aria-hidden="true" class="user icon"></i>5K Buyers</a>
                                </div>
                                <button class="ui button">
                                    <div class="detail"><h3>Availability : 32</h3></div>
                                </button>
                            </div>

                        </div>
                    </div>
                </div> */}

            </div>
        )
    }
}

export default  withStyles(useStyles)(Homepage);
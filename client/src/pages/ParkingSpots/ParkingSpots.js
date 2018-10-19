import React, { Component } from "react";
import './../../App.css';
import API from "./../../utils/API";
import CardParkingSpot from './../../components/CardParkingSpot/ParkingSpot';
import moment from "moment";

class ParkingSpots extends Component {
    state = {
        parkingspots: [],
        events: [],
        game: ""
    };

    componentDidMount() {
        this.loadParkingSpots()
        this.loadEvents()
    }

    loadParkingSpots = () => {
        API.getParkingSpots()
            .then(response => this.setState({ 
                parkingspots: response.data
            }))
            .catch(err => console.log(err));
    };

    loadEvents = () => {
        API.getJayhawkEvents()
            .then(response => this.setState({
                events: response.data
            }))
            .catch(err => console.log(err))
    }

    handleChange = event => {
        this.setState({
            game: event.target.value
        });
    };

    render() {
        return (
            <section className="section-parking">
             {/* <div className="page-transition background-test"></div> */}
<<<<<<< HEAD

            <h1 className="heading-page">
                <span className="heading-page--title">Available spots near Memorial Stadium</span>
            </h1>
                <form>
                    <div className="form__container" id="events">

                    <h1 className="heading-primary">
                        <span className="heading-primary--form left">Which game do you need parking for?</span>
                    </h1>                        
                        {this.state.events.length ? (                    
                            <div className="form__group">
                                <select name="game" className="form__input" value={this.state.event} onChange={this.handleChange}>
                                    <option>
                                        Pick a game to park at!
                                    </option>
                                    {this.state.events.map(game => (
                                        <option
                                            key={game._id}
                                            id="game"
                                            name="event"
                                            placeholder="Game"
                                            value={game._id}>
                                            {moment(game.date).format("MM-DD")} {game.event}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        ) : (
                            <div className="form__group">
                            <select name="game" className="form__input">                                
                                <option>
                                    No Games Available
                                </option>                            
                            </select>
                            </div>
                        )}
                    </div>   
                </form>
              <CardParkingSpot game={this.state.game}/>
=======
              <CardParkingSpot />
>>>>>>> master
            </section>
        );
    }
}

export default ParkingSpots;

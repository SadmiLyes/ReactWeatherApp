import React, {Component} from 'react';
import {connect} from 'react-redux';

import Chart from '../chart';
import GoogleMap from "../google_map";

class WeatherList extends Component {

    constructor(props){
        super(props);
        this.renderWeather = this.renderWeather.bind(this);
    }

    convertKToC (temp) {
        return temp - 273.15;
    }

    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp).map(this.convertKToC);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const {lon, lat} = cityData.city.coord;

        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={temps} color='orange' units="C°"/></td>
                <td><Chart data={pressures} color='green' units="hPa" /></td>
                <td><Chart data={humidities} color='black' units="%" /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead className="thead-inverse">
                    <tr>
                        <th>
                           City
                        </th>
                        <th>
                            Temperature (C°)
                        </th>
                        <th>
                            Preassure (hPa)
                        </th>
                        <th>
                            Humidity (%)
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = ({weather}) => ({weather});
export default connect(mapStateToProps)(WeatherList);
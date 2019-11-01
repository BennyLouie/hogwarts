import React, { Component } from 'react';
import '../App.css';

export default class CardBack extends Component{
    render (){
        return(
            <div className="ui card card-back">
                <div className="description">
                    <h3>Highest Medal Achieved: {this.props['highest medal achieved']}</h3>
                    <h3>Weight: {this.props.weight}</h3>
                    <h3>Specialty: {this.props.specialty}</h3>
                </div>
            </div>
        )
    }
}
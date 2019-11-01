import React, { Component } from 'react';
import '../App.css';

export default class CardFront extends Component{

    findPic = (name) => {
        return name.split(" ").join("_")
    }
    
    render(){
        return (
            <div className="ui card card-front">
                <h1 className="header">{this.props.name}</h1>
                <div className="image">
                    <img src={`/hog-imgs/${this.findPic(this.props.name)}.jpg`} alt={`${this.props.name}`}/>
                </div>
            </div>
        )
    }
}
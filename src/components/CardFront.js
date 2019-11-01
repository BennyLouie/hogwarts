import React, { Component } from 'react';
import '../App.css';

export default class CardFront extends Component{

    findPic = (name) => {
        let newName = name.toLowerCase()
        if (newName.includes(" ")){
            let picName= newName.split(" ").join("_")
            return picName
        }
        return newName
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
import React, { Component } from 'react';
import '../App.css';
import CardFront from './CardFront'
import CardBack from './CardBack'

export default class HogCard extends Component {

    findPic = (name) => {
        let newName = name.toLowerCase()
        if (newName.includes(" ")){
            let picName= newName.split(" ").join("_")
            return picName
        }
        return newName
    }

    render(){
        return( 
            <div className="ui card hog-card" style={{visibility:'visible'}}>
                <CardFront {...this.props}/>
                <CardBack {...this.props}/>
            </div>   
        )
    }
}
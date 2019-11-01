import React, { Component } from 'react';
import '../App.css';
import CardFront from './CardFront'
import CardBack from './CardBack'

export default class HogCard extends Component {
    render(){
        return( 
            <div className="ui card hog-card" style={{visibility:'visible'}}>
                <CardFront {...this.props}/>
                <CardBack {...this.props}/>
            </div>   
        )
    }
}
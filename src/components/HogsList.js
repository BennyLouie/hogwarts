import React, { Component } from 'react';
import '../App.css';
import HogCard from './HogCard'

export default class HogsList extends Component {

    constructor(){
        super()
        this.state={
            sorted_name: false,
            sorted_weight: false
        }
    }
    
    displayDetails = (name) => {
        this.setState({
            selected: name
        })
    }

    handleNameSort = (event) => {
        if (!this.state.sorted_name){
        this.setState({
            sorted_name: true,
            sorted_weight: false
        })}
        else if (this.state.sorted_name){
            this.setState({
                sorted_name: false
            })
        }
    }

    handleWeightSort = (event) => {
        if (!this.state.sorted_weight){
        this.setState({
            sorted_weight: true,
            sorted_name: false
        })}
        else if (this.state.sorted_weight){
            this.setState({
                sorted_weight: false
            })
        }
    }

    listHogs = () => {
        let sortedHogs = [...this.props.hogsList].sort((a, b) => a.name.localeCompare(b.name))
        return this.state.sorted_name ? sortedHogs : this.props.hogsList
    }

    sortHogs = () => {
        let sortedHogs = [...this.props.hogsList].sort((a, b) => a.weight - b.weight)
        return this.state.sorted_weight ? sortedHogs : this.listHogs()
    }

    handleClick = (event) => {
        const target = event.target.previousSibling
        target.style.visibility === 'visible' ? target.style.visibility = 'hidden' : target.style.visibility = 'visible'
        target.style.visibility === 'visible' ? event.target.innerText = 'Hide' : event.target.innerText = 'Show'
    }

    render(){
        // console.log(this.sortHogs())
        return(
            <div>
                <div style={{height: "10vh"}}>
                    <button onClick={this.handleNameSort}>{this.state.sorted_name ? 'Sort by Name: On' : 'Sort by Name: Off'}</button>
                    <button onClick={this.handleWeightSort}>{this.state.sorted_weight ? 'Sort by Weight: On' : 'Sort by Weight: Off'}</button>
                </div>
                <div className="ui grid container">
                    {this.sortHogs().map((hog, idx) => (
                        <div className="ui eight wide column" key={idx}>
                            <HogCard {...hog} />
                            <button onClick={this.handleClick}>Hide</button>
                        </div>
                        )
                    )}
                </div>
            </div>
        )
    }
}
import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {

	const changeFilterStatus = (event) => {
		let a = 'On'
		let b = 'Off'
		props.filterState === 'Off' ? props.filterStatus(a): props.filterStatus(b)
	}

	return (
		<div className="navWrapper">
			<button onClick={changeFilterStatus}>{props.filterState === 'Off' ? 'Filter Greased: Off' : 'Filter Greased: On'}</button>
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
		</div>
	)
}

export default Nav

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class MyList extends Component {
	constructor() {
		super();
		this.state = {
			name: 'JC'
		};
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return (
            <section id="myList">
        <h3>My List of Books</h3>
        <ul>
          <li>Harry Potter <span className="delete-btn">Delete</span></li>
        </ul>
        <div className="close-list">Close List</div>
      </section>
		);
	}
}
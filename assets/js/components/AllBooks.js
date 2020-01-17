import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class AllBooks extends Component {
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
			<section className="all-books">
                <div className="book-container">
                <div className="book"
                    style={{
                        backgroundImage: `url('https://vignette.wikia.nocookie.net/onepiece/images/0/0e/Volume_1.png/revision/latest/top-crop/width/360/height/450?cb=20130115020528')`
                    }}
                    />
                </div>
            </section>    
		);
	}
}
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Modal extends Component {
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
			<section id="modal">
      <div className="modal-container">
        <div className="close-modal">
          <i className="fas fa-window-close"></i>
        </div>
      <div className="modal-grid">
        <div className="images">
          <div className="cover"
                    style={{
                        backgroundImage: `url('https://vignette.wikia.nocookie.net/onepiece/images/0/0e/Volume_1.png/revision/latest/top-crop/width/360/height/450?cb=20130115020528')`
                    }}
                    />
          </div>
        </div>
        <div className="info">
          <h2>Title</h2>
          <div className="info-line">
            <span className="bold">Author:</span>
            Eiichiro Oda
          </div>
          <div className="info-line">
              <span className="bold">Published:</span>
              1997
            </div>
            <p className="review">
                One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha's Weekly Shōnen Jump magazine since July 22, 1997, and has been collected into 95 tankōbon volumes.
            </p>
        </div>
      </div>
    </section>
        );
    }
}
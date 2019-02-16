import React, { Component } from 'react';
import axios from 'axios';

	const divStyle = {
 	display: 'inline-block'
	}

	class HistoryComponent extends Component {
		constructor() {
			super();
			this.state = {
				posts: [],
				hideEnglishWord: true
			}

			this.hideTranslation = this.hideTranslation.bind(this);
	
		}

		componentDidMount () {
		axios.get("http://localhost:3000/posts")
			.then(response => {
				this.setState({posts: response.data})
				console.log(response.data);
			});
		}
  	
  		hideTranslation(event) {
  		//event.preventDefault();
  		this.state.hideEnglishWord ? this.setState({hideEnglishWord: false}) : this.setState({hideEnglishWord: true})
  		//this.props.translate(this.state.word);
  		//do props.map
  		//Use componentDidMount to send request to the server to grab the data and pass it as props
  		//Server will pull it out of database and send it back in response
  		}

  		render () {
  		const style = this.state.hideEnglishWord ? { visibility: 'hidden', display: 'inline-block'} : 
  												   { visibility: 'visible', display: 'inline-block', 'margin-left': '20px'};
  		const newPosts = this.state.posts.map(post => {

  		return <div onClick={this.hideTranslation}>
  		
  		<p style={divStyle}>{post.spanishTR}</p><p style={style}>{post.englishTR}</p>
  		</div>
  		//return <p onClick={this.hideTranslation} style={style}>{`${post.spanishTR} ${post.englishTR}`}</p>
  		//return <div><p id="es" style={styleES}>{post.spanishTR + ' '}</p><p id="en" style={styleEN}>{post.englishTR}</p></div>
  		
  		})
  		return (
  		<div>
  		<p>{newPosts}</p>
		</div>
		)
		}
		}
	


export default HistoryComponent;
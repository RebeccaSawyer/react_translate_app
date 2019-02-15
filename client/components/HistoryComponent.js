import React, { Component } from 'react';
import axios from 'axios';


	const styles = {
		border: '2px solid blue'
	};

	class HistoryComponent extends Component {
		constructor() {
			super();
			this.state = {
				posts: []
			}

			this.insertPairFunction = this.insertPairFunction.bind(this)
		}

		componentDidMount () {
		axios.get("http://localhost:3000/posts")
			.then(response => {
				this.setState({posts: response.data})
				console.log(response.data);
			});
	

		}
  	
  		insertPairFunction() {
  		//this.props.translate(this.state.word);
  		//do props.map
  		//Use componentDidMount to send request to the server to grab the data and pass it as props
  		//Server will pull it out of database and send it back in response
  		}

  		render () {
  		
  		const newPosts = this.state.posts.map(post => {

  			return <p>{`${post.spanishTR} ${post.englishTR}`}</p>
  		})
  		return (
  		<div>
  		<p>{newPosts}</p>
		</div>
		)
		}
		}
	


export default HistoryComponent;
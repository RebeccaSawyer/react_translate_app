import React, { Component } from 'react';
import axios from 'axios';

	
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
  	
  		event.target.children[0].style.visibility = this.state.hideEnglishWord ? 'hidden' : 'visible'
      this.state.hideEnglishWord ? this.setState({hideEnglishWord: false}) : this.setState({hideEnglishWord: true})	
    
  		}

  		render () {
 
      var divstyle = {
      height: '30px',
      display: 'block',
      marginLeft: 250,
      marginRight: 250
      }
      var styleE = {
        display: 'inline-block',
        visibility: 'hidden'
      }
      var styleS = {
      display: 'inline-block'
      }
   

  		var newPosts = this.state.posts.map(post => {

  		return <div style={divstyle} onClick={this.hideTranslation}>
  		
  		<p style={styleS}>{post.spanishTR + ' '}<p style={styleE}>{post.englishTR}</p></p>
  		</div>	
  		})

  		return (<div><p>{newPosts}</p></div>)
		  }
		  }
	

export default HistoryComponent;
import React, { Component } from 'react';
import UserInput from './UserInput.js';
import UserOutput from './UserOutput.js';
import API_KEY from './yandexAPI_KEY.js';


class App extends Component {
constructor () {
	super();
	this.state = {
		translation: "Enter text"

	}

	this.translateFunction = this.translateFunction.bind(this);
	this.insertTranslationFunction = this.insertTranslationFunction.bind(this);
	
}
  	
insertTranslationFunction (word, newword) {
		this.setState({
				translation: `${word} - ${newword}`
			});
//Here send word:newword as an object to the server to store it in the database
		let newPair = {[word]: newword};
  		fetch("http://localhost:3000/posts", {
  		method: 'POST',
  		  headers: {
    	'Accept': 'application/json',
    	'Content-Type': 'application/json',
  		},
     	body: JSON.stringify(newPair)
		})//OR add it to the History component
}

	translateFunction(word) {

		console.log(word);
		//Do HTTP request to yandex API
		//Set state for output to the translation received from HTTP request with setState
		//let input = {input : word};
  		fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${API_KEY}&lang=es&text=${word}`, {
  		method: 'GET',
		}).then(response => response.json())
		.then(response => this.insertTranslationFunction(word, response.text[0]))
		.catch(error => console.error('Error:', error));

	}


	render() {

		return (

		<div>	
		<UserInput translate={this.translateFunction}/>
		<UserOutput translation={this.state.translation} />
		</div>

		);
	}
}

export default App;

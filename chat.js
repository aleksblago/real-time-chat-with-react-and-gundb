var gun = Gun(location.origin + '/gun');
var chat = gun.get('chat');

var Message = React.createClass({
	render: function() {
		
		let {name, text, time} = this.props.message,
			date = new Date(JSON.parse(time));
		
		return (
			<li className="list-group-item">
				<span className="time">{ date.getHours() }:{ date.getMinutes() }</span>
				<span className="author">{ name }</span>
				<span className="message">{ text }</span>
			</li>
		);
	}
});

var Messages = React.createClass({
	
	render: function() {
		
		var messages = this.props.data.map((message, index) => {
			return (
				<Message message={ message } key={ index } />
			);
		});
		
		return (
			<ul className="list-group">{ messages }</ul>
		);
		
	}
});

var App = React.createClass({
	
	getInitialState: function() {
		return {
			name: '',
			input: '',
			messages: []
		}
	},
	
	componentDidMount: function() {
		
		var name = prompt('Please enter your username:'),
			messages = [];
		
		chat.map().val((message, id) => {
			messages.push(message);
		});
		
		this.setState({
			name,
			messages
		});
		
		chat.on(() => {
			this.forceUpdate();
		});
		
	},
	
	shouldComponentUpdate: function() {
		return true;
	},
	
	handleChange: function(event) {
		this.setState({
			input: event.target.value
		});
	},
	
	handleKeyDown: function(event) {
		
		var messages = [];
		
		if (event.key !== 'Enter' || event.target.value === '') {
			return;
		}
		
		chat.path(Gun.text.random()).put({
			text: this.state.input,
			name: this.state.name,
			time: JSON.stringify(new Date())
		});
		
		chat.map().val((message, id) => {
			messages.push(message);
		});
		
		this.setState({
			messages,
			input: ''
		});
		
	},
	
	render: function() {
		
		return (
			<div className="Messages">
				<Messages data={ this.state.messages } />
				<input
					onChange={ this.handleChange }
					onKeyDown={ this.handleKeyDown }
					placeholder="Say something"
					className="form-control"
				/>
			</div>
		);
	}
});

ReactDOM.render((
	<App />
), document.getElementById('App'));
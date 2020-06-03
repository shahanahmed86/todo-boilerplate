import React, { Component, createContext } from 'react';

import { utils } from '../utils';

const { Provider, Consumer } = createContext();

export const withMainContext = (Component) => (props) => (
	<Consumer>{(value) => <Component {...value} {...props} />}</Consumer>
);

class MainProvider extends Component {
	state = {
		message: '',
		id: '',
		editMode: false,
		todo: []
	};
	handleChange = ({ target: { name, value } }) => {
		this.setState({
			[name]: value
		});
	};
	onSubmitHandler = (ev) => {
		ev.preventDefault();
		const { id, message, todo, editMode } = { ...this.state };
		if (!message.trim()) return console.log("Message field can't be left empty");
		if (!editMode) {
			this.setState({
				todo: [ ...todo, { ...utils.genId, message, isDone: false } ],
				message: ''
			});
		} else {
			const ind = utils.getIndex(todo, id);
			todo[ind].message = message;
			this.setState({
				todo: [ ...todo ],
				message: '',
				editMode: false,
				id: ''
			});
		}
	};
	toggleStatus = (id) => {
		const { todo } = { ...this.state };
		const ind = utils.getIndex(todo, id);
		todo[ind] = {
			...todo[ind],
			isDone: !todo[ind].isDone
		};
		this.setState({
			todo: [ ...todo ]
		});
	};
	onEdit = (id) => {
		const { todo } = { ...this.state };
		const ind = utils.getIndex(todo, id);
		this.setState({
			message: todo[ind].message,
			editMode: true,
			id
		});
	};
	onDelete = (id) => {
		const { todo } = { ...this.state };
		const ind = utils.getIndex(todo, id);
		if (id === this.state.id) {
			this.setState({
				message: '',
				editMode: false,
				id: ''
			});
		}
		todo.splice(ind, 1);
		this.setState({
			todo: [ ...todo ]
		});
	};
	render () {
		return (
			<Provider
				value={{
					...this.state,
					handleChange: this.handleChange,
					onSubmitHandler: this.onSubmitHandler,
					toggleStatus: this.toggleStatus,
					onEdit: this.onEdit,
					onDelete: this.onDelete
				}}
			>
				{this.props.children}
			</Provider>
		);
	}
}

export default MainProvider;

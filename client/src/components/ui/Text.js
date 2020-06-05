import React from 'react';

//mui components
import { TextField } from '@material-ui/core';

function Text({ isFocus, label, name, value, handleChange }) {
	return (
		<TextField
			autoComplete="off"
			id="message-field"
			autoFocus={isFocus}
			label={label}
			name={name}
			value={value}
			onChange={handleChange}
		/>
	);
}

export default Text;

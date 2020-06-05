import React from 'react';

import './App.css';

//components
import { Todo } from './components';

//store
import { MainProvider } from './contextapi';

function App () {
	return (
		<MainProvider>
			<Todo />
		</MainProvider>
	);
}

export default App;

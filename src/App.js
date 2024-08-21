// declarative style
import logo from './logo.svg';
import './App.css';
// declarative + imperative style
export const App = () => {
	// declarative style
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload new app
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
				{/* imperative style */}
				<p> Текущий год: {new Date().getFullYear()}</p>
			</header>
		</div>
	);
};

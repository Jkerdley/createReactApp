import React from 'react';
import logo from './logo.svg';
import './App.css';

const elements = [
	{ type: 'img', props: { src: logo, className: 'App-logo', alt: 'logo' } },
	{ type: 'p', props: { children: 'Редактируйте ' } },
	{ type: 'code', props: { children: 'src/App.js' } },
	{ type: 'p', props: { children: ' и сохраните, чтобы перезапустить новое приложение' } },
	{
		type: 'a',
		props: {
			className: 'App-link',
			href: 'https://reactjs.org',
			target: '_blank',
			rel: 'noopener noreferrer',
			children: 'Узнайте о React',
		},
	},
	{ type: 'p', props: { children: `Текущий год: ${new Date().getFullYear()}` } },
];

export const App = () => {
	const header = React.createElement(
		'header',
		{ className: 'App-header' },
		elements.map((element) => React.createElement(element.type, element.props)),
	);
	return React.createElement('div', { className: 'App' }, header);
};

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './view/App';


// 1 nacin: const someElement = React.createElement('p', null, 'neki tekst');
// 2 nacin: const someElement = <p>neki tekst</p>;     (JSX)
// console.log(someElement)

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


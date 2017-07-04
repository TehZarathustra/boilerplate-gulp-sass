import 'normalize.css';
import './index.sass';

function component(array) {
	const element = document.createElement('div');
	const childElement = document.createElement('div');

	childElement.innerHTML = array.join(' ');

	element.className = 'app';
	element.appendChild(childElement);

	setInterval(() => childElement.innerHTML = arguments[0].reverse().join(' '), 2000);

	return element;
}

document.body.appendChild(component(['Hello', 'World']));

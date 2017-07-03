import 'normalize.css';
import './index.sass';

function component() {
	var element = document.createElement('div');

	element.innerHTML = ['Hello', 'world'].join(' ');

	return element;
}

document.body.appendChild(component());

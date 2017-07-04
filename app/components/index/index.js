import 'normalize.css';
import './index.sass';

function component() {
	var element = document.createElement('div');
	element.className = 'app';

	var childElement = document.createElement('div');

	childElement.innerHTML = ['Hello', 'world'].join(' ');

	element.appendChild(childElement);

	return element;
}

document.body.appendChild(component());

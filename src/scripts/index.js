import '../styles/main.scss';
import { inheritObject, inheritPrototype } from './base.js'

let sayHello = function (num) {
    alert('hello: ' + num);
}

export { sayHello, inheritObject, inheritPrototype }
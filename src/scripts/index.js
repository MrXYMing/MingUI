import '../styles/main.scss';
import * as util from './util.js';
import * as tool from './tool.js';

let sayHello = function (num) {
    alert('hello: ' + num);
}

export { sayHello, util, tool }
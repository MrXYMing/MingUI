import * as M from '../../src/scripts/index.js';
import './index.scss';

/****测试 寄生式继承 */
document.write('<h2>测试 寄生式继承</h2><br>');
function SuperClass(name) {
    this.name = name;
    this.colors = ['red'];
}
SuperClass.prototype.getName = function () {
    document.write(this.name + '<br>');
}
function SubClass(name, time) {
    SuperClass.call(this, name);
    this.time = time;
}
M.util.inheritPrototype(SubClass, SuperClass);
SubClass.prototype.getTime = function () {
    document.write(this.time + '<br>');
}

var instance1 = new SubClass('js', 2014);
var instance2 = new SubClass('css', 2013);
instance1.colors.push('black');
document.write(instance1.colors + '<br>');
document.write(instance2.colors + '<br>');
instance2.getName();
instance2.getTime();
/****测试 寄生式继承 END*/
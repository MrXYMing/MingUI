/**
 * 注册事件监听
 * @param {*} dom dom
 * @param {*} type 注册的事件类型
 * @param {*} fn 绑定的事件
 */
let addEvent = function (dom, type, fn) {
    if (dom.addEventListener) {
        dom.addEventListener(type, fn, false);
    } else if (dom.attachEvent) {
        dom.attachEvent('on' + type, fn);
    } else {
        dom['on' + type] = fn;
    }
}
/**
 * 获取事件对象
 * @param {*} event 事件对象
 */
let getEvent = function (event) {
    //标准浏览器返回event，IE下window.event
    return event || window.event;
}
/**
 * 获取元素
 * @param {*} event 事件对象
 */
let getTarget = function (event) {
    let _event = getEvent(event);
    //标准浏览器下event.target，老版IE下event.srcElement
    return _event.target || _event.srcElement;
}
/**
 * 阻止默认行为
 * @param {*} event 事件对象
 */
let preventDefault = function (event) {
    let _event = getEvent(event);
    //标准浏览器
    if (_event.preventDefault) {
        _event.preventDefault();
        //IE浏览器
    } else {
        _event.returnValue = false;
    }
}

export { addEvent, getEvent, getTarget, preventDefault }
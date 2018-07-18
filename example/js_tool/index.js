import * as M from '../../src/scripts/index.js';
import './index.scss';

/****测试 注册事件监听 */
let testAddEventDom = document.getElementById('testAddEvent');
M.tool.addEvent(testAddEventDom,'click',function(){
    console.log('第一次触发');
});
M.tool.addEvent(testAddEventDom,'click',function(){
    console.log('第二次触发');
});
/****测试 注册事件监听 END*/

/****测试 阻止默认行为 */
let testPreventDefaultDom = document.getElementById('testPreventDefault');
M.tool.addEvent(testPreventDefaultDom,'click',function(e){
    //M.tool.preventDefault(e);
});
let testPreventDefaultDom02 = document.getElementById('testPreventDefault02');
M.tool.addEvent(testPreventDefaultDom02,'click',function(e){
    M.tool.preventDefault(e);
});
/****测试 阻止默认行为 END*/
 
/****测试 获取元素 */
let testGetTargetDom = document.getElementById('testGetTarget');
M.tool.addEvent(document,'click',function(e){
    if(M.tool.getTarget(e)===testGetTargetDom){
        console.log("点击了 '测试 获取元素'");
    }
});
/****测试 获取元素 END*/
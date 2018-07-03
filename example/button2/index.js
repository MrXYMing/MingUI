import * as style from '../../src/scripts/index.js';

var btnElements = document.getElementsByClassName('btn');
for(var i =0;i<btnElements.length;i+=1){
    (function(num){
        btnElements[num].addEventListener('click', function () {
            style.sayHello(num + " -- button2");
        });
    })(i);
}
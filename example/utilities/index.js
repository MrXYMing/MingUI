//import * as style from '../../src/scripts/index.js';
import '../../src/styles/main.scss';
import './index.scss';

document.getElementById('js_text_toggle').onclick = function () {
    var dom = document.getElementById('text');
    if (dom.classList == "show") {
        dom.classList.remove("show");
        dom.classList.add("hidden");
    } else {
        dom.classList.remove("hidden");
        dom.classList.add("show");
    }
};
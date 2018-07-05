var btnElements = document.getElementsByClassName('btn');
for (var i = 0; i < btnElements.length; i += 1) {
    (function (num) {
        if (btnElements[num].id == "js_text_toggle") { 
            return; 
        }
        btnElements[num].addEventListener('click', function () {
            M.sayHello(num);
        });
    })(i);
}

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

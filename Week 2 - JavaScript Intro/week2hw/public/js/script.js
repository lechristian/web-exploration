document.onreadystatechange = function () {
    var state = document.readyState;
    if (state == 'complete') {
        document.getElementById("about").onclick = function () {
            window.scroll(0, findPos(document.getElementById("scroll1")));
        };

        document.getElementById("pictures").onclick = function () {
            window.scroll(0, findPos(document.getElementById("scroll2")));
        };

        document.getElementById("members").onclick = function () {
            window.scroll(0, findPos(document.getElementById("scroll3")));
        };
    }
};

// elem is DOM element
function findPos(elem) {
    var top = 0;
    if (elem.offsetParent) {
        do {
            top += elem.offsetTop;
        } while (elem = elem.offsetParent);
        return [top];
    }
}

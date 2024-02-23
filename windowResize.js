/* https://qiita.com/Katumadeyaruhiko/items/9c0a82865c239b95a809 */
var container;
var canvas;
var timer = 0;

//初期化
function init() {
    canvas = document.getElementById('unity-canvas');
    container = document.createElement('div');
    // container = document.getElementById('container');
    container.style.width = window.innerWidth + 'px';
    container.style.height = window.innerHeight + 'px';
    container.style.overflow = 'hidden';
    container.appendChild(canvas);
    document.body.appendChild(container);
    document.body.style.margin = '0px'
    console.log(canvas, container);
}

//サイズ変更処理
function resize() {
    container.style.width = window.innerWidth + 'px';
    container.style.height = window.innerHeight + 'px';
    canvas.style.width = window.innerWidth * window.devicePixelRatio;
    canvas.style.height = window.innerHeight * window.devicePixelRatio;
}

window.onload = function () {
    init();
    resize();
};

//ブラウザの大きさが変わった時に行う処理
(function () {
    var timer = 0;
    window.onresize = function () {
        if (timer > 0) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            resize();
        }, 200);
    };
}());
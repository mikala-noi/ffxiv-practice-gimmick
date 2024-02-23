/* https://qiita.com/Miyakovsky/items/4094040ad45f057728a2 */

var container;
var canvas;

//初期化
function init() {
    canvas = document.getElementById('unity-canvas');
    container = document.createElement('div');
    container.style.width = window.innerWidth + 'px';
    container.style.height = window.innerHeight + 'px';
    container.style.overflow = 'hidden';
    container.appendChild(canvas);
    document.body.appendChild(container);
    document.body.style.margin = '0px'
    console.log(canvas, container);
}

//ウインドウサイズに合わせキャンバスサイズを変更
function fitWindowCanvasSize(){
  var winHeight = window.innerHeight;
  const isViewUnderBar = true;  //falseにすると下部のバーが画面外に表示
  if (isViewUnderBar){
    const barHeight = 18*2;            //下部のバーサイズ
    const barHeightMargin = 10*2;      //下部の追加余白サイズ
    winHeight = winHeight - barHeight - barHeightMargin;
  }
  const winWidth = window.innerWidth;
  const appWidth = "{{{ WIDTH }}}";
  const appHeight = "{{{ HEIGHT }}}";
  const scale = Math.min((winWidth / appWidth), (winHeight / appHeight));
  const fixWidth = (appWidth * scale);
  const fixHeight = (appHeight * scale);

  canvas.style.width = fixWidth + 'px';
  canvas.style.height = fixHeight + 'px';
}

//ウインドウのリサイズ時の処理
function windowResizeEvent(){
  var timeoutId = 0;
  const resizeDelay = 300;  //リサイズが完了したと判断する時間
  window.onresize = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(()=>{
      //リサイズ終了時の処理
      fitWindowCanvasSize();
    }, resizeDelay);
  };
}

window.onload = () => {
  init();
  fitWindowCanvasSize();
  windowResizeEvent();
}
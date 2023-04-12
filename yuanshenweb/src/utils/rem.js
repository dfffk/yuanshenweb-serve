//响应式
function adapter() {
  let dol = document.documentElement;
  let _width = dol.clientWidth;
  dol.style.fontSize = _width / 3.75 + "px";
  //   console.log(dol.style.fontSize);
}

window.onload = function () {
  adapter();
};
window.onresize = function () {
  adapter();
};

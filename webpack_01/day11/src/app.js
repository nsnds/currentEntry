import Layer from "./components/layer/layer.js";

const App = function () {
  var dom = document.querySelector("#app");
  dom.innerHTML = new Layer().tpl;
};

new App();
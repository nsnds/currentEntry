import Layer from "./components/layer/layer.js";

const App = function () {
  var dom = document.querySelector("#app");
  //dom.innerHTML = new Layer().tpl;
  dom.innerHTML = new Layer().tpl({
  	name: "QM",
  	arr: ["l", "s", "s"]
  });
}

new App();
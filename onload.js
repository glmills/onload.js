var onLoad = {
  
  "todos":[],
  
  "newHandler":function(func){
    func = func || function(){throw "onLoad: null function handler specification error";};
    onLoad.todos[onLoad.todos.length+1] = func;
  },
  
  "handleMaster":function(){
    window.onload = function(){
    onLoad.todos[0] = function(){console.log("onLoad Handler Master Init");};
    for (var ctr = 0; ctr < onLoad.todos.length; ctr++){
      onLoad.todos[ctr]();
    }};
  },
};
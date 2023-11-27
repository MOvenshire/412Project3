function toggleStyleSheet(){
  // Task 1
  // Steps
  // 1 (a) Get style element by ID (hint: getElementById)
  var element = document.getElementById('mainStyleSheet');
  // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
  var currStyle = element.getAttribute('href');
  // 1 (c) Determine new stylesheet file name
  if(currStyle == "style.css"){
      var nextStyle = "style2.css";
  }
  else{
      var nextStyle ="style.css";
  }
  // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
  element.setAttribute('href',nextStyle);

  // TASK 2
  // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
  // hint: localStorage.setItem(name, value)
  localStorage.setItem("stylePersist", nextStyle);
}


window.onload = function(){
  // TASK 2
  // TODO: Make the last div color persist even when someone refreshes the page.
  // Steps
  // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
  var styleName = localStorage.getItem("stylePersist");
  // 2 (b) get html style element by ID
  var element = document.getElementById('mainStyleSheet');

  // 2 (c) replace href attribute of html element.
  element.setAttribute('href', "style2.css");
  
}

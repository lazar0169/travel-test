function connect() {

  xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function () {
    
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      dataObject = JSON.parse(xmlhttp.responseText);
      
    }
  }
  xmlhttp.open("GET", "http://localhost:1234", true);
  xmlhttp.setRequestHeader("Access-Control-Allow-Headers", "client");
  xmlhttp.send();
}

// function connect(url, req, method, success) {

// }

// connect('localhost://', { id: 5 }, function(data) {
//   return false;
// });
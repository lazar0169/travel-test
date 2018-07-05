function connect(url, req, method, success) {
  req = new XMLHttpRequest();
  req.onreadystatechange =    function () {
    if (req.readyState == 4 && req.status == 200) {
      dataObject = JSON.parse(req.responseText);
      success(dataObject);
    }
  }
  req.open(method, url, true);
  req.setRequestHeader("Access-Control-Allow-Headers", "client");
  req.send();
}
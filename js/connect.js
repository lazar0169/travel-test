function connect(url, req, method, success) {
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange =    function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      dataObject = JSON.parse(xmlhttp.responseText);
      success(dataObject);
    }
  }
  xmlhttp.open(method, url, true);
  xmlhttp.send(req);
}
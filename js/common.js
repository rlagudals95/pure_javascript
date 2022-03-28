function write() {
  alert("제출!!");
}

function postServer(file) {
  var data = new FormData();
  data.append("user", file);

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "backend", true);
  xhr.onload = function () {
    // do something to response
    console.log(this.responseText);
  };
  xhr.send(data);

  const url = "http://example.com";
  fetch(url, {
    method: "POST",
    body: data,
    // -- or --
    // body : JSON.stringify({
    // user : document.getElementById('user').value,
    // ...
    // })
  })
    .then(
      (response) => response.text() // .json(), etc.
      // same as function(response) {return response.text();}
    )
    .catch((err) => {
      console.log("에러발생 : ", err);
    });
}

window.onload = function () {
  console.log("start-pure-js!!!!");
};

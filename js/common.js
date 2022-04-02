function write() {
  alert("제출!!");
}

function postServer(formData) {
  var data = new FormData();
  data.append("file", "file");

  // var xhr = new XMLHttpRequest();
  // xhr.open("POST", "backend", true);
  // xhr.onload = function () {
  //   // do something to response
  //   console.log(this.responseText);
  // };
  // xhr.send(data);
  console.log("폼데이터 확인 :", formData);
  const url = "http://localhost:8000/canvas/post";
  fetch(url, {
    method: "POST",
    body: formData,
    // -- or --
    // body : JSON.stringify({
    // user : document.getElementById('user').value,
    // ...
    // })
  })
    .then(
      (response) => {
        console.log("response ::", response);
        response.text();
      } // .json(), etc.
      // same as function(response) {return response.text();}
    )
    .catch((err) => {
      console.log("에러발생 : ", err);
    });
}

window.onload = function () {
  console.log("start-pure-js!!!!");
};

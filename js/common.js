function write() {
  alert("제출!!");
}

var result;

function postServer(formData) {
  var data = new FormData();
  data.append("file", "file");

  console.log("폼데이터 확인 :", formData);
  var url = "http://localhost:8000/canvas/post";

  // 서버 연결
  var canvasRes = fetch(url, {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log("에러발생 : ", err);
    });
  // Promise 객체에서 값 읽어오기
  var printRes = () => {
    canvasRes.then((a) => {
      console.log("aaa :", a);
      result = a;
    });
  };

  printRes();
}

window.onload = function () {
  console.log("start-pure-js!!!!");
};

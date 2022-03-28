function write() {
  alert("제출!!");
}

window.onload = function () {
  console.log("start-pure-js!!!!");
  var write_btn = document.getElementById("write-btn");

  write_btn.addEventListener("click", write);
  // canvas

  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");

  //   context.beginPath(); // 4. 출발점 지정
  //   context.moveTo(0, 0); // 5. 도착점 지정
  //   context.lineTo(400, 300); // 6. 선 그리기
  //   context.stroke();

  //   context.fillRect(0, 0, 150, 100);
  //   context.fillText("Hello, HTML5!", 155, 110);
  //   context.beginPath();
  //   context.moveTo(0, 100);
  //   context.lineTo(300, 100);
  //   context.rect(0, 0, 300, 200);
  //   context.stroke();
  //   context.closePath();
};

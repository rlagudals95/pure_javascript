function captureImg() {
  html2canvas(document.querySelector("#canvas")).then((canvas) => {
    console.log("캡처화면 ::", canvas);
    document.body.appendChild(canvas);
  });
}

// canvas.js
var pos = {
  drawable: false,
  x: -1,
  y: -1,
};
var canvas, ctx;

window.onload = function () {
  //
  var captureBtn = document.getElementById("capture-btn");
  // saveImg
  console.log("captureBtn :: ", captureBtn);
  captureBtn.addEventListener("click", captureImg);

  //
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  var saveBtn = document.getElementsByClassName("save-btn");
  // saveImg
  saveBtn[0].addEventListener("click", saveImg);
  canvas.addEventListener("mousedown", listener);
  canvas.addEventListener("mousemove", listener);
  canvas.addEventListener("mouseup", listener);
  canvas.addEventListener("mouseout", listener);
};

function listener(event) {
  switch (event.type) {
    case "mousedown":
      initDraw(event);
      break;

    case "mousemove":
      if (pos.drawable) draw(event);
      break;

    case "mouseout":
    case "mouseup":
      finishDraw();
      break;
  }
}

function initDraw(event) {
  //console.log("initDraw");
  ctx.beginPath();
  pos.drawable = true;
  var coors = getPosition(event);
  pos.X = coors.X;
  pos.Y = coors.Y;
  ctx.moveTo(pos.X, pos.Y);
}

function draw(event) {
  //console.log("draw");
  var coors = getPosition(event);
  ctx.lineTo(coors.X, coors.Y);
  pos.X = coors.X;
  pos.Y = coors.Y;
  ctx.stroke();
}

function finishDraw() {
  //console.log("finishDraw");
  pos.drawable = false;
  pos.X = -1;
  pos.Y = -1;
}

function getPosition(event) {
  //console.log("getPosition :", event);
  var x = event.pageX - canvas.offsetLeft;
  var y = event.pageY - canvas.offsetTop;
  return { X: x, Y: y };
}

// 이미지 저장
function fileReader() {
  var image;
  canvas = document.getElementById("canvas");
  var imgBase64 = canvas.toDataURL("image/jpeg", "image/octet-stream");
  var decodImg = atob(imgBase64.split(",")[1]);

  let array = [];
  for (let i = 0; i < decodImg.length; i++) {
    array.push(decodImg.charCodeAt(i));
  }

  var file = new Blob([new Uint8Array(array)], { type: "image/jpeg" });

  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = (e) => {
    console.log("파일읽기 :", e.target.result);
    postImgServer(e.target.result);
  };
}

// 이미지 저장
function saveImg() {
  canvas = document.getElementById("canvas");
  var imgBase64 = canvas.toDataURL("image/jpeg", "image/octet-stream");
  var decodImg = atob(imgBase64.split(",")[1]);

  let array = [];
  for (let i = 0; i < decodImg.length; i++) {
    array.push(decodImg.charCodeAt(i));
  }

  var file = new Blob([new Uint8Array(array)], { type: "image/jpeg" });

  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = (e) => {
    console.log("파일읽기 :", e.target.result);
  };

  var fileName = "canvas_img_" + new Date().getMilliseconds() + ".jpg";
  var formData = new FormData();
  console.log("파일정보 : ", file, fileName);
  formData.append("file", file);
  console.log("미리확인 : ", formData);
  postServer(formData);
}

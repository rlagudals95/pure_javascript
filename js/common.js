function write() {
    alert('제출!!');
}

window.onload = function () {
    console.log('start-pure-js!!!!');
    const write_btn = document.getElementById('write-btn');

    write_btn.addEventListener('click', write);
}


!function() {
  var duration = 50;
  $(".actions").on("click", "button", function(e) {
    let $button = $(e.currentTarget);
    let speed = $button.attr("data-speed");
    $button
      .addClass("active")
      .siblings(".active")
      .removeClass("active");
    switch (speed) {
      case "slow":
        duration = 100;
        break;
      case "normal":
        duration = 50;
        break;
      case "fast":
        duration = 10;
        break;
    }
  });
  function writeCode(prefix, code, fn) {
    let container = document.querySelector("#code");
    let styleTag = document.querySelector("#styleTag");
    let n = 0;
    let id
    id = setTimeout(function run() {
      n += 1;
      container.innerHTML = code.substring(0, n);
      styleTag.innerHTML = code.substring(0, n);
      container.scrollTop = container.scrollHeight;
      if (n < code.length) {
        id = setTimeout(run, duration);
      } else {
        fn && fn.call();
      }
    }, duration);
  }
  let code = `
  /*
  *首先，需要准备皮卡丘的皮
  */
  .preview{
    height: 100%;
    border: 1px solid green;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffdc40;
  }
  .wrapper{
    width: 100%;
    height: 200px;
    position: relative;
  }
  /*
  *接下来，画皮卡丘的鼻子
  */
  .nose{
    width: 0px;
    height: 0px;
    border-style:solid;
    border-width: 12px;
    border-color: black transparent transparent;
    border-radius: 11px;
    position: absolute;
    left: 50%;
    top: 28px;
    margin-left: -12px;
  }
  /*
  *接下来，画皮卡丘的眼睛
  */
  .eye{
    width: 49px;
    height: 49px;
    background:#2f2f2f;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #000000;
  }
  /*
  *接下来，画皮卡丘的眼瞳
  */
  .eye::before{
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background: white;
    position: absolute;
    border-radius: 50%;
    left: 6px;
    border: 2px solid #000000;
    top: -1px;
  }
  .eye.left{
    right: 50%;
    margin-right: 90px;
  }
  .eye.right{
    left: 50%;
    margin-left: 90px;
  }
  /*
  *接下来，画皮卡丘的晒红（特点）
  */
  .face{
    width: 68px;
    height: 68px;
    background: #ff2519;
    border: 2px solid black;
    border-radius: 50%;
    position: absolute;
    top: 85px;
  }
  .face.left{
    right: 50%;
    margin-right: 116px;
  }
  .face.right{
    left: 50%;
    margin-left: 116px;
  }
  /*
  *接下来，画皮卡丘的嘴唇
  */
  .lips{
    height: 25px;
    width: 88px;
    border: 2px solid black;
    position: absolute;
    top: 50px;
    border-top: none;
    background: #ffdc40;
  }
  .lips.left{
    right: 50%;
    border-bottom-left-radius: 40px 25px;
    border-right: none;
    transform: rotate(-20deg);
  }
  .lips.right{
    left: 50%;
    border-bottom-right-radius: 40px 25px;
    border-left: none;
    transform: rotate(20deg);
  }
  /*
  *然后，画皮卡丘的嘴巴
  */
  .mouch-wrapper{
    bottom: 0;
    position:absolute;
    left: 50%;
    margin-left: -150px;
    height: 140px;
    width: 300px;
    overflow: hidden;
  }
  .mouch{
    width: 300px;
    height: 3500px;
    background: #a31818;
    border-radius: 200px/2000px;
    border: 2px solid #000000;
    position: absolute;
    bottom: 0;
    overflow: hidden;
  }
  /*
  *最后，画皮卡丘的小舌头
  */
  .mouch::before{
    content: '';
    position: absolute;
    bottom: 0;
    width: 100px;
    height: 100px;
    background: #ff5d60;
    left: 50%;
    margin-left: -50px;
    border-radius: 50%;
  }
  /*
  *好了，这只皮卡丘送给你
  */
  `;
  writeCode("", code);
}.call();

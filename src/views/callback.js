
// }
var aaa
// const cube = oneChatCallBackQRScanner(this.qrcode)
// alert(cube)
function oneChatCallBackQRScanner (qrcode) {
  aaa = qrcode
}

// function oneChatCallBackQRScanner (qrcode) {
//   // do some asynchronous work
//   aaa = qrcode
//   // and when the asynchronous stuff is complete
//   qrcode()
// }

// function secondFunction () {
//   // call first function and pass in a callback function which
//   // first function runs when it has completed
//   oneChatCallBackQRScanner(function (qrcode) {
//     // if (qrcode === undefined) {

//     // } else {
//     //   alert(qrcode)
//     // }
//   })
// }
setInterval(function pupan () {
  if (aaa === undefined) {
    console.log('bug')
  }

  if (aaa === 'pupan') {
    alert('pupan jajajajaaj')
  } else {
    alert(aaa)
  }
}, 3000)
const callback = oneChatCallBackQRScanner()

if (callback === undefined) {

} else {
  this.pupan()
}

// setInterval(pupan(){
//   alert(callback)

//  }, 3000);

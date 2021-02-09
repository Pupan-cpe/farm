<template>
  <div>
    <div>
      <a
        href="https://chat-api.one.th/go_api/api/v1/openScanQRcodeWithValue"
        target="_blank"
        >--------Scan QR--------</a
      >
    </div>

    <h1>

    </h1>
         <div id="qrcodecallback">callback:</div>
  </div>

</template>

<script>

// import callback from './callback.js'

export default {
  data () {
    return {

      // callback,
      // pupan: ''

      created () {

      },
      mounted () {

        // this.callback = require('./callback.js')
        // console.log(this.callback)
      },

      methods: {

        // oneChatCallBackQRScanner (qrcode) {
        //   // callback = qrcode
        //   // alert(callback)
        // }

      }

    }
  }

}

</script>

<style lang="scss" scoped>
</style>

<template>
  <div>
    <div id="watch-example">
  <p>

  </p>
  <!-- <p>{{ answer }}</p> -->
</div>
    <!-- <div :callback="oneChatCallBackQRScanner(ScanQRcodevalue)" /> -->
    <div class="col-6 col-s-9">
      <h1>
        <a
          href="https://chat-api.one.th/go_api/api/v1/openScanQRcodeWithValue"
          target="_blank"

          >nn</a
        >

        <!-- <button
@click="getUsers()"
></button> -->
        <!-- <a
          href="https://chat-api.one.th/go_api/api/v1/openScanQRcodeWithValue"
          target="_blank"
          class="button"
          >Scan</a

        > -->
        <!-- {{ScanQRcodevalue}} -->
      </h1>
      {{ this.pupan }}
      <!-- {{ ScanQRcodevalue }} -->
      <!-- <p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city.</p> -->
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  data () {
    return {
      pupan: ''
    }
  },
  // oneChatCallBackQRScanner (ScanQRcodevalue) {
  //   alert(ScanQRcodevalue)
  //   console.log(ScanQRcodevalue)
  // },
  // created () {
  //   this.oneChatCallBackQRScanner(ScanQRcodevalue => console.log(ScanQRcodevalue))

  mounted () {
    // alert(this.pupan)
    if (this.pupan === undefined) {
      // alert('hello')
      console.log(this.pupan)
    } else {

    }
  },

  methods: {

    oneChatCallBackQRScanner (ScanQRcodevalue) {
      this.pupan = ScanQRcodevalue
      alert('start')
      if (ScanQRcodevalue === undefined) {
        console.log('emty')
      } else {
        alert(ScanQRcodevalue)
        console.log(ScanQRcodevalue)
      }
    }

  }
}
</script>

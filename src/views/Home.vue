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

          >--------Scan QR--------</a
        ><br>

<div id="app-5">
  {{"test:"}}
  <br>
{{foo}}
</div>

        <!-- <butt
        on
@click="getUsers()"
></butt> -->
        <!-- <a
          href="https://chat-api.one.th/go_api/api/v1/openScanQRcodeWithValue"
          target="_blank"
          class="button"
          >Scan</a

        > -->
        <!-- {{ScanQRcodevalue}} -->
      </h1>

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

      message: undefined,
      pupan: '',
      foo: ''

    }
  },

  mutations: {
    oneChatCallBackQRScanner (ScanQRcodevalue) {
      this.pupan = ScanQRcodevalue
      alert('pass')
    }

  },

  render: function (createElement) {
    return createElement('h1', this.blogTitle)
  },
  mounted () {
    // this.foo = require('./callback.html')
  },

  methods: {

    doFuncFoo (value) {
      console.log(value)
    },

    oneChatCallBackQRScanner: async function (ScanQRcodevalue) {
      this.message = 'updated'
      console.log(this.$el.textContent) // => 'not updated'
      await this.$nextTick()
      console.log(this.$el.ScanQRcodevalue) // => 'updated'
      alert(ScanQRcodevalue)
    },

    doSomethingAsynchronous () {
      setTimeout(function () {
        // This is wrong! Inside this function,
        // "this" refers to the window object.
        this.foo = 'baz'
      }, 1000)
    }

    // on1eChatCallBackQRScanner: function (ScanQRcodevalu1e) {
    //   // `this` inside methods point to the Vue instance
    //   alert(ScanQRcodevalu1e)
    //   // `event` is the native DOM event
    //   alert(event.target.tagName)
    // }

  //
  }
}

</script>

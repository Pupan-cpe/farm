<template>

<div></div>

</template>

<script>
export default {
  data: () => ({

  }),
  mounted () {
    const recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://www.google.com/recaptcha/api.js')
    document.head.appendChild(recaptchaScript)
  },
  methods: {

  }
}
</script>

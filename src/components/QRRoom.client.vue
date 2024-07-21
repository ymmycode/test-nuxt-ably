<template>
  <div>
    <QRCodeVue3
      :value="`https://live-chat-ably-nuxt-test.vercel.app/chat`"
      :width="300"
      :height="300"
      :qrOptions="{ typeNumber: 0, mode: 'Byte', errorCorrectionLevel: 'H' }"
      :imageOptions="{ hideBackgroundDots: true, imageSize: 0.4, margin: 0 }"
      image="/images/qr-logo.png"
      :dotsOptions="{
        type: 'square',
        color: '#E3E935',
        gradient: {
          type: 'linear',
          rotation: 0,
          colorStops: [
            { offset: 0, color: '#E3E935' },
            { offset: 1, color: '#E3E935' },
          ],
        },
      }"
      :backgroundOptions="{ color: 'black' }"
      :cornersSquareOptions="{ type: 'square', color: '#E3E935' }"
      :cornersDotOptions="{ type: 'square', color: '#E3E935' }"
      myclass="my-qr"
      imgclass="img-qr"
    />
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
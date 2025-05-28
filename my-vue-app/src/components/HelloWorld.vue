<template>
  <iframe
    ref="fullscreenIframe"
    src="/02-geometry1_base.html"
    class="absolute-fullscreen"
  ></iframe>
</template>

<script>
export default {
  mounted() {
    this.forceFullscreen();
    window.addEventListener('resize', this.forceFullscreen);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.forceFullscreen);
  },
  methods: {
    forceFullscreen() {
      const iframe = this.$refs.fullscreenIframe;
      if (!iframe) return;
      
      // Жесткий сброс всех возможных ограничений размеров
      iframe.style = `
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
        border: none !important;
        margin: 0 !important;
        padding: 0 !important;
        overflow: hidden !important;
        z-index: 9999 !important;
        display: block !important;
      `;
      
      // Принудительный рефлоу
      iframe.offsetHeight;
    }
  }
}
</script>

<style>
/* Глобальный жесткий сброс */
html, body {
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  width: 100vw !important;
  height: 100vh !important;
}
</style>
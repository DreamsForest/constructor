<template>
  <div class="container">
    <iframe
      ref="fullscreenIframe"
      src="/Теория вероятности.html"
      class="fullscreen-iframe"
    ></iframe>
    
    <div class="info-overlay">
      С более подробной информацией по 1С Конструктору вы можете ознакомиться тут:
      <a href="https://urok.1c.ru/library/mathematics/" target="_blank">1С Урок</a>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.adjustIframe();
    window.addEventListener('resize', this.adjustIframe);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.adjustIframe);
  },
  methods: {
    adjustIframe() { 
      const iframe = this.$refs.fullscreenIframe;
      if (!iframe) return;
      
      iframe.style.width = '100vw';
      iframe.style.height = '100vh';
    }
  }
}
</script>

<style>
/* Сброс стандартных отступов */
html, body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}

.container {
  position: relative;
  width: 100vw;
  height: 100vh;
}

.fullscreen-iframe {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  border: none;
  z-index: 1; /* iframe под overlay */
}

.info-overlay {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.9);
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 2; /* overlay поверх iframe */
  text-align: center;
  max-width: 80%;
}

.info-overlay a {
  color: #0066cc;
  text-decoration: none;
  font-weight: bold;
}

.info-overlay a:hover {
  text-decoration: underline;
}
</style>
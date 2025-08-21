<template>
  <div class="test-container">
    <div class="content-wrapper">
      <h2>Просмотр занятия</h2>
      
      <div class="lesson-frame">
        <iframe
          ref="lessonIframe"
          src="/Теория вероятности.html"
          class="lesson-iframe"
          @load="onIframeLoad"
        ></iframe>
      </div>
      
      <div class="info-section">
        <p>
          С более подробной информацией по 1С Конструктору вы можете ознакомиться тут:
          <a href="https://urok.1c.ru/library/mathematics/" target="_blank" class="info-link">
            1С Урок
          </a>
        </p>
      </div>
      
      <div class="navigation-buttons">
        <router-link to="/main" class="btn btn-primary">
          ← Назад к списку
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestPage',
  mounted() {
    this.adjustIframe();
    window.addEventListener('resize', this.adjustIframe);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.adjustIframe);
  },
  methods: {
    adjustIframe() {
      const iframe = this.$refs.lessonIframe;
      if (!iframe) return;
      
      // Устанавливаем разумные размеры вместо fullscreen
      iframe.style.width = '100%';
      iframe.style.height = '600px'; // Фиксированная высота или можно сделать адаптивной
    },
    onIframeLoad() {
      console.log('Iframe loaded successfully');
      // Можно добавить дополнительную логику после загрузки iframe
    }
  }
}
</script>

<style>
.test-container {
  padding: 20px;
  margin: 0 auto;
  max-width: 1200px;
}

.content-wrapper {
  background: white;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #2c3e50;
  margin-bottom: 20px;
  text-align: center;
}

.lesson-frame {
  border: 1px solid #ddd;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 20px;
}

.lesson-iframe {
  width: 100%;
  height: 600px;
  border: none;
  display: block;
}

.info-section {
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 6px;
  margin-bottom: 20px;
  text-align: center;
}

.info-link {
  color: #0066cc;
  text-decoration: none;
  font-weight: bold;
}

.info-link:hover {
  text-decoration: underline;
  color: #004499;
}

.navigation-buttons {
  text-align: center;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-primary:hover {
  background-color: #0056b3;
  text-decoration: none;
}

/* Адаптивность для мобильных устройств */
@media (max-width: 768px) {
  .test-container {
    padding: 10px;
  }
  
  .content-wrapper {
    padding: 20px;
  }
  
  .lesson-iframe {
    height: 400px;
  }
}
</style>
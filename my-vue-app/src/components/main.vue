<template>
  <div class="main-container">
    <form>
      <table>
        <thead>
          <tr>
            <th style="padding-right: 20px;">Номер урока</th>
            <th style="padding-right: 20px;">Название занятия</th>
            <th style="padding-right: 20px;">Действия</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(lesson, index) in lessons" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ lesson.name }}</td>
            <td>
              <router-link :to="lesson.route">
                <button type="button" class="btn btn-success">
                  Перейти
                </button>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data() {
    return {
      lessons: [
        { name: 'Теория вероятности', route: '/test' },
        { name: 'Построения сечения', route: '/testTwo' }
        //{ name: 'Линейная алгебра', route: '/testThree' }
        // Добавьте другие занятия здесь с соответствующими маршрутами
      ]
    }
  },
  mounted() {
    this.adjustLayout();
    window.addEventListener('resize', this.adjustLayout);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.adjustLayout);
  },
  methods: {
    adjustLayout() {
      console.log('Adjusting layout...');
      // Добавьте логику调整布局 если нужно
    }
  }
}
</script>

<style>
.main-container {
  padding: 20px;
  margin: 0 auto;
  max-width: 1200px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
  font-weight: bold;
}

tbody tr:hover {
  background-color: #f5f5f5;
}

.btn-success {
  background-color: #28a745;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
}

.btn-success:hover {
  background-color: #218838;
  text-decoration: none;
}

/* Убедитесь, что ссылки не имеют подчеркивания */
a {
  text-decoration: none;
}
</style>
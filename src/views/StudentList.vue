<template>
  <h1>Student List</h1>
  <div class="events">
    <Students v-for="event in events" :key="event.id" :student="event" />
  </div>
</template>

<script>
import Students from '@/components/Students.vue'
import StudentServices from '@/services/StudentServices.js'

export default {
  name: 'StudentsList',
  components: {
    Students
  },
  data() {
    return {
      events: null
    }
  },
  created() {
    StudentServices.getEvents()
      .then((response) => {
        this.events = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h4 {
  font-size: 20px;
}
</style>

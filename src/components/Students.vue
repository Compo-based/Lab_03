<template>
  <div class="event-card">
    <div>Name: {{ student.name }}</div>
    <div>Surname:{{ student.surname }}</div>
    <div>GPA:{{ student.gpa }}</div>
  </div>
</template>

<script>
export default {
  name: 'Students',
  props: {
    student: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.event-card {
  padding: 20px;
  width: 400px;
  height: 60px;
  cursor: pointer;
  border: 1px solid red;
  margin-bottom: 18px;
  background-color: yellowgreen;
  color: blue;
  text-align: start;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>

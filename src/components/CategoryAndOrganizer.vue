<template>
  <div class="event-card">
    <div>Category: {{ categoryAndorganizer.category }}</div>
    <div>Organizer Name:{{ categoryAndorganizer.organizer }}</div>
  </div>
</template>
<script>
export default {
  name: 'CategoryAndOrganizer',
  props: {
    categoryAndorganizer: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  height: 120px;
  cursor: pointer;
  border: 1px solid blue;
  margin-bottom: 18px;
  background-color: green;
  color: rgb(179, 255, 0);
  text-align: end;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>

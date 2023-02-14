<template>
  <div class="hello">
    <h3 v-for="(student, i) in students" :key="i">
      {{ student.name }} - {{ student.age }}
    </h3>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    students: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

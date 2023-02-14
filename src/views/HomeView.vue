<template>
  <div class="home">
    <RegisterStudent @add="addStudent" />

    <Students :students="students" />
  </div>
</template>

<script>
// @ is an alias to /src
import RegisterStudent from "@/components/RegisterStudent.vue";
import Students from "@/components/Students.vue";

export default {
  name: "HomeView",
  components: {
    RegisterStudent,
    Students,
  },
  data() {
    return {
      students: [{ name: "Doe", age: 21 }],
    };
  },
  methods: {
    addStudent(newStudent) {
      this.students.push(newStudent);
    },
  },
};
</script>

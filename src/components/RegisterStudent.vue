<template>
  <div>
    <form>
      <input type="text" placeholder="Name..." v-model="name" />
      <input type="text" placeholder="Age..." v-model="age" />

      <button type="submit" @click.prevent="handleClick">Add Student</button>
    </form>

    <p style="color: red" v-if="error">
      Name must be > 3, and age between 20 and 40
    </p>
  </div>
</template>

<script>
export default {
  name: "RegisterStudent",
  props: {
    addStudent: Function,
  },
  data() {
    return {
      name: "",
      age: "",
      error: false,
    };
  },
  methods: {
    handleClick() {
      if (this.name.length > 3 && this.age > 20 && this.age < 40) {
        this.error = false;

        const newStudent = {
          name: this.name,
          age: this.age,
        };

        this.$emit("add", newStudent);

        this.name = "";
        this.age = "";
      } else {
        this.error = true;
      }
    },
  },
};
</script>

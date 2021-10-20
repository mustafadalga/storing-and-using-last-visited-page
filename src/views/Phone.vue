<template>
  <Form>
    <template #title>Phone Information</template>
    <template #formGroup>
      <div class="btn-group mt-5" role="group">
        <router-link class="m-1 btn btn-primary" to="/email">Prev</router-link>
        <router-link class="m-1 btn btn-primary" to="/certificates">Next</router-link>
      </div>
    </template>
  </Form>
</template>


<script>
import Form from "../components/Form";
export default {
name: "Phone",
  components: { Form }
}
</script>

<style scoped>

</style>

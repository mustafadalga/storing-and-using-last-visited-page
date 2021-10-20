<template>
  <Form>
    <template #title>Certification Information</template>
    <template #formGroup>
      <div class="btn-group mt-5" role="group">
        <router-link class="m-1 btn btn-primary" to="/phone">Prev</router-link>
        <router-link class="m-1 btn btn-primary" to="/projects">Next</router-link>
      </div>
    </template>
  </Form>
</template>

<script>
import Form from "../components/Form";
export default {
name: "Certificates",
  components: { Form }
}
</script>

<style scoped>

</style>

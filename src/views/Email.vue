<template>
  <Form>
    <template #title>Email Information</template>
    <template #formGroup>
      <div class="btn-group mt-5" role="group">
        <router-link class="m-1 btn btn-primary" to="/">Prev</router-link>
        <router-link class="m-1 btn btn-primary" to="/phone">Next</router-link>
      </div>
    </template>
  </Form>
</template>


<script>
import Form from "../components/Form";
export default {
  name: "Email",
  components: { Form }
}
</script>

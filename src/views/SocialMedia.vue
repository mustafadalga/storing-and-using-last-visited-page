<template>
  <Form>
    <template #title>Projects</template>
    <template #formGroup>
      <div class="btn-group mt-5" role="group">
        <router-link class="m-1 btn btn-primary" to="/prjects">Prev</router-link>
        <router-link class="m-1 btn btn-primary" to="/">Finish and Back to Home</router-link>
      </div>
    </template>
  </Form>
</template>

<script>
import Form from "../components/Form";

export default {
  name: "SocialMedia",
  components: { Form }
}
</script>

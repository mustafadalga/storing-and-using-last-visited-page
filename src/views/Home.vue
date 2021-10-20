<template>
  <Form>
    <template #title>Full Name</template>
    <template #formGroup>
      <div class="btn-group mt-5" role="group">
        <router-link class="m-1 btn btn-primary" to="/email">Next</router-link>
      </div>
    </template>
  </Form>
</template>

<script>
import Form from '@/components/Form.vue'

export default {
  name: 'Home',
  components: {
    Form
  },
}
</script>

<template>
  <div class="error-message">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'ErrorMessage',
  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>

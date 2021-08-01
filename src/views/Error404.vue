<template>
  <div>
    <b-container>
      <div class="error-container">
        <div>
          <div style="font-size: 30vh">
            404
          </div>

          <div class="text-h2" style="opacity:.4">
            Oops. Nothing here...
          </div>

          <b-button variant="primary" to="/">Go Home</b-button>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Error404"
}
</script>

<style scoped>
.error-container {
  max-width: 100%;
  margin: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  display: flex;
  justify-items: center;
  align-items: center;
}
</style>
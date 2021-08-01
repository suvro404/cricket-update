<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f6f6f6;
}

.font-regular {
  font-size: 14px;
}
.font-regular-1 {
  font-size: 12px;
}

.font-caption {
  font-size: 20px;
}

.font-bold {
  font-weight: bold;
}

.font-green {
  color: green;
}
.font-orange {
  color: orange;
}

</style>

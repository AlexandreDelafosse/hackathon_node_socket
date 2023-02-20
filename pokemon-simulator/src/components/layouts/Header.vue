<template>

    <h1> Bienvenue sur le simulateur de combat </h1>

    <p>{{ test }} </p>

</template>

<script>
export default {
  name: 'HeaderMain',
  props: {
    test: String,
  }
}
</script>
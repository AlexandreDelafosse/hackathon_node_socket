<template>

    <h2> Bienvenue sur le simulateur de combat </h2>

    <p>{{ test }} </p>

</template>

<script>
export default {
  name: 'FooterMain',
  props: {
    test: String,
  }
}
</script>
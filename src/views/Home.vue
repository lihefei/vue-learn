<template>
  <div class="home">
    <ComponentA />
    <ComponentB />
    <ComponentC />
  </div>
</template>

<script>
import ComponentA from "@/components/ComponentA.vue";
import ComponentB from "@/components/ComponentB.vue";
import ComponentC from "@/components/ComponentC.vue";

export default {
  name: "home",
  components: {
    ComponentA,
    ComponentB,
    ComponentC
  }
};
</script>

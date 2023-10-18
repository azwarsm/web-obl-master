<template>
  <div class="pop-up">
    <h2>{{ document.title }}</h2>
    <p>{{ document.content }}</p>
    <p>{{ document.createdAt }}</p>
  </div>
</template>

<script>
export default {
  props: {
    document: {
      type: Object,
      required: true,
    },
  },
};
</script>

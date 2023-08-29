<template>
  <form method="POST">
    <label>
      Email
      <input name="email" type="email" autocomplete="username" />
    </label>
    <label>
      Password
      <input name="password" type="password" autocomplete="current-password" />
    </label>
    <button>Log in</button>
    <button formaction="login?_register">Register</button>
  </form>
</template>
<script lang="ts" setup>
definePageMeta({
  alias: ['/'],
});
const { data } = await useFormAction();
console.log(data.value);
console.log(data.value.loader);
console.log(data.value.formResponse);
console.log(data.value.actionResponse);
</script>

<template>
  <div>
    <h1>@User - yamada taro</h1>
    <strong>followers:</strong> {{ followers }}
    <button @click="followerCount">follow</button>
  </div>
</template>

<script>
export default {
  name: "hoge",
  data: () => {
    return {
      followers: 0
    };
  },
  computed: {
    hogeComputed() {
      return "";
    }
  },
  methods: {
    followerCount() {
      this.followers++;
    }
  }
};
</script>
<style>
h1 {
  margin: 0;
}
</style>

<template>
  <div>
    <h1>{{ user.userName }} {{ user.firstName }} {{ user.lastName }}</h1>
    <strong>followers:</strong> {{ followers }}
    <button @click="followerCount">follow</button>
  </div>
</template>

<script>
export default {
  name: "Tweet",
  data: () => {
    return {
      followers: 0,
      user: {
        userName: "みわ",
        firstName: "泰平",
        lastName: "三輪"
      }
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

<template>
  <div>
    <h1>@User - yamada taro</h1>
    <strong>followers:</strong> 1 <button>follow</button>
  </div>
</template>

<script>
export default {
  name: "hoge",
  data: () => {
    return {
      hoge: "hoge"
    };
  },
  computed: {
    hogeComputed() {
      return "";
    }
  },
  methods: {
    hogeMethods() {}
  }
};
</script>
<style>
h1 {
  margin: 0;
}
</style>

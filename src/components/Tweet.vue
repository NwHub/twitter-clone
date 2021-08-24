<template>
  <div class="user-profile">
    <div class="user-profile__user-panel">
      <h1>@{{ user.userName }}</h1>
      <div>
        <strong>followers: {{ followers }} </strong>
        <button @click="followerCount">follow</button>
      </div>
      <!-- 入力 -->
      <form class="user-profile__create-tweet-panel">
        <label class="newTweet">
          <strong>New Tweet</strong>
        </label>
        <textarea rows="4"></textarea>
        <div>
          <button>Tweet</button>
        </div>
      </form>
    </div>
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
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 50px;
  padding: 50px 5%;
}
.user-profile__user-panel {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #dfe3e8;
  margin-bottom: auto;
}
h1 {
  margin: 0;
}
button {
  padding: 5px 20px;
  margin: auto 0;
  border-radius: 5px;
  border: none;
  background-color: deeppink;
  color: white;
  font-weight: bold;
}
/* ツイート */
.user-profile__tweets-wrapper {
  display: grid;
  grid-gap: 10px;
  margin-bottom: auto;
}
.user-profile__tweets-wrapper__tweet-item {
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #dfe3e8;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.25s ease;
}
.user-profile__tweets-wrapper__tweet-item:hover {
  transform: scale(1.1, 1.1);
}
</style>

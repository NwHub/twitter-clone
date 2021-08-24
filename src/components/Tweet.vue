<template>
  <div class="user-profile">
    <div class="user-profile__user-panel">
      <h1>@{{ user.userName }}</h1>
      <div>
        <strong>followers: {{ followers }} </strong>
        <button @click="followerCount">follow</button>
      </div>
      <!-- 入力 -->
      <form class="user-profile__create-tweet-panel" @submit.prevent="addTweet">
        <label class="newTweet">
          <strong>New Tweet</strong>
        </label>
        <textarea rows="4" v-model="inputContent"></textarea>
        <div>
          <button>Tweet</button>
        </div>
      </form>
    </div>
    <!-- ツイート -->
    <div class="user-profile__tweets-wrapper">
      <div v-for="tweet in tweets" :key="tweet.id">
        <div class="user-profile__tweets-wrapper__tweet-item">
          <p>{{ tweet.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tweet",
  data: () => {
    return {
      followers: 0,
      inputContent: "",
      user: {
        userName: "みわ",
        firstName: "泰平",
        lastName: "三輪"
      },
      tweets: [
        { id: 1, content: "test1" },
        { id: 2, content: "test2" },
        { id: 3, content: "test3" }
      ]
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
    },
    addTweet() {
      this.tweets = [
        {
          id: this.tweets.length,
          content: this.inputContent
        },
        ...this.tweets
      ];
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
/* インプット */
textarea {
  border: 1px solid #dfe3e8;
  border-radius: 5px;
  margin-bottom: 10px;
}
.user-profile__create-tweet-panel {
  margin-top: 20px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
}
</style>

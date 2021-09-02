<template>
  <div>
    <div class="user-profile">
      <div class="user-profile__user-panel">
        <h1>{{ user.userName }} - {{ user.firstName }} {{ user.lastName }}</h1>
        <div>
          <strong>Followers: </strong> {{ followers }}

          <button @click="followerCount">follow</button>
        </div>

        <form
          class="user-profile__create-tweet-panel"
          @submit.prevent="addTweet"
        >
          <label class="newTweet">
            <strong>New Tweet</strong>
          </label>
          <textarea v-model="inputContent" rows="4"></textarea>
          <div>
            <button>Tweet</button>
          </div>
        </form>
      </div>

      <div class="user-profile__tweets-wrapper">
        <div
          class="user-profile__tweets-wrapper__tweet-item"
          v-for="tweet in user.tweets"
          :key="tweet.id"
        >
          <p>{{ tweet.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hoge",

  data: () => {
    return {
      inputContent: "",
      followers: 0,
      user: {
        userName: "のぐとも",
        firstName: "智也",
        lastName: "野口",
        tweets: [
          { id: 1, content: "いいね！" },
          { id: 2, content: "よくないね" }
        ]
      }
    };
  },
  methods: {
    followerCount() {
      this.followers++;
    },
    addTweet() {
      this.user.tweets = [
        {
          id: this.user.tweets.length,
          content: this.inputContent
        },
        ...this.user.tweets
      ];
    }
  }
};
</script>
<style>
.user-profile {
  display: grid;
  grid-template-columns: 2fr 4fr;
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
</style>

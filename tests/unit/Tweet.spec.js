import { mount } from "@vue/test-utils";
import Tweet from "@/components/Tweet.vue";

describe("Tweet.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = mount(Tweet);
    expect(wrapper).toMatchSnapshot();
  });
  it("button click", async () => {
    const wrapper = mount(Tweet);
    await wrapper.find("button").trigger("click");
    expect(wrapper).toMatchSnapshot();
  });
});

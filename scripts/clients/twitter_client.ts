import TwitterApi from "twitter-api-v2";
import envList from "../utils/env";

type SearchParams = {
  query: string;
};

type TweetParams = {
  text: string;
};

type ReplayParams = {
  tweetId: string;
} & TweetParams;

class TwitterClient {
  private client: TwitterApi;

  constructor() {
    this.client = new TwitterApi({
      appKey: envList.TWITTER_CONSUMER_KEY,
      appSecret: envList.TWITTER_CONSUMER_SECRET,
      accessToken: envList.TWITTER_OAUTH_TOKEN,
      accessSecret: envList.TWITTER_OAUTH_SECRET,
    });
  }

  async getAuthLink() {
    const authLink = await this.client.generateAuthLink("oob", {
      authAccessType: "write",
    });
    return authLink;
  }

  async login(pin: string) {
    return await this.client.login(pin);
  }

  async search(params: SearchParams) {
    const res = await this.client.v2.search(params.query);
    return res;
  }

  async tweet(params: TweetParams) {
    const res = await this.client.v2.tweet(params.text);
    return res;
  }

  async replay(params: ReplayParams) {
    const res = await this.client.v2.reply(params.text, params.tweetId);
  }
}

const twitterClient = new TwitterClient();

export default twitterClient;

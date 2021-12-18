import twitterClient from "./clients/twitter_client";

const main = async () => {
  const res = await twitterClient.search({ query: "ツイッター" });
  console.log(res.data);

  const res2 = await twitterClient.tweet({
    text: `[${Date.now()}] Twitter API v2 test tweet.`,
  });
  console.log(res2);

  await twitterClient.replay({
    tweetId: res2.data.id,
    text: "replay test",
  });
};

main();

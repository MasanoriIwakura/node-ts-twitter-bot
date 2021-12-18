import dotenv from "dotenv";

dotenv.config();

// 必須項目だけstringにキャスト
const envList = {
  TWITTER_CONSUMER_KEY: process.env.TWITTER_CONSUMER_KEY as string,
  TWITTER_CONSUMER_SECRET: process.env.TWITTER_CONSUMER_SECRET as string,
  TWITTER_BEARER_TOKEN: process.env.TWITTER_BEARER_TOKEN as string,
  TWITTER_PIN: process.env.TWITTER_PIN,
  TWITTER_OAUTH_TOKEN: process.env.TWITTER_OAUTH_TOKEN,
  TWITTER_OAUTH_SECRET: process.env.TWITTER_OAUTH_SECRET,
};

const checkEnv = () => {
  const isEmpty = (Object.keys(envList) as (keyof typeof envList)[]).every(
    (key) => {
      if (envList[key] === "") {
        console.error(`${key} is not set.`);
        return true;
      }

      return false;
    }
  );

  if (isEmpty) {
    throw new Error("ERROR: 環境変数の設定不備があります");
  }
};

checkEnv();

export default envList;

import twitterClient from "./clients/twitter_client";
import envList from "./utils/env";

const main = () => {
  switch (process.argv[2]) {
    case "link":
      getAuthLink();
      break;
    case "login":
      login();
      break;
  }
};

const getAuthLink = () => {
  (async () => {
    const authLink = await twitterClient.getAuthLink();
    console.log(authLink);
  })();
};

const login = () => {
  (async () => {
    const ret = await twitterClient.login(envList.TWITTER_PIN as string);
    console.log(ret);
  })();
};

main();

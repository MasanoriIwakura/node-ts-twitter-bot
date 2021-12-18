# node-ts-twitter-bot

Node.js x TypeScriptでTwitter Botを作成する

## Required

- Node.js 16.13.1 or higher
- Yarn

## Getting Started


```sh
cd scripts
yarn install
cp .env.sample .env
```

### ユーザーキーとトークンのセットアップ

Twitter OAuth2を実行してAPIキー、シークレットキーを取得する必要があります。

以下のように `.env` ファイルを編集します。

```
# required
TWITTER_CONSUMER_KEY=<Twitter Developerから取得したキー>
TWITTER_CONSUMER_SECRET=<Twitter Developerから取得したシークレット>
TWITTER_BEARER_TOKEN=<Twitter Developerから取得したBearerトークン>
# 以下は最初は空欄でOK
TWITTER_PIN=
TWITTER_OAUTH_TOKEN=
TWITTER_OAUTH_SECRET=
```

上記設定後、以下のコマンドを実行します。

```sh
yarn run authlink

# 実行結果
{
  url: 'https://api.twitter.com/oauth/authenticate?oauth_token=XXXXXX',
  oauth_token: 'XXXXXXX',
  oauth_token_secret: 'XXXXXX',
  oauth_callback_confirmed: 'true'
}
```

実行結果のURLにアクセスして `連携アプリを認証` ボタンを押下し、画面に表示されたPINをメモしてください。

`yarn run authlink` とPINを `.env` に設定します。

```
TWITTER_PIN=<先程メモしたPIN>
TWITTER_OAUTH_TOKEN=<authlinkコマンド実行結果のoauth_token>
TWITTER_OAUTH_SECRET=<authlinkコマンド実行結果のoauth_callback_confirmed>
```

以下のコマンドを実行します。

```sh
yarn run login

# 実行結果
{
  accessToken: 'XXXXXXXX',
  accessSecret: 'XXXXXXXX',
  userId: '1234567',
  screenName: 'username',
  client: TwitterApi {
    _rateLimits: {},
    _currentUser: null,
    _consumerToken: 'XXXXXXXXXXXXXX',
    _consumerSecret: 'XXXXXXXXXXXXXXXXX',
    _accessToken: 'XXXXXXXXXXXXXXXXXX',
    _accessSecret: 'XXXXXXXXXXXXXXX',
    _oauth: OAuth1Helper { nonceLength: 32, consumerKeys: [Object] }
  }
}
```

上記の実行結果を `.env` に上書きします。

```
TWITTER_OAUTH_TOKEN=<loginコマンド実行結果のaccessToken>
TWITTER_OAUTH_SECRET=<loginコマンド実行結果のaccessSecret>
```

以上で連携したアカウントに対してNode.jsからツイートを行えるようになります！

# error-boy

A node library to push production errors into Google Chat.

### Installation

requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd project
$ npm install error-boy --save
```

### Import Library

index.js

```
const errorBoy = require("error-boy");
const webhookURL = "https://chat.googleapis.com/v1/XXXXXXXXXXXXXXXXXXXXXXX";

errorBoy.init(webhookURL);

try {
  throw new Error("Invalid function");
} catch (err) {
  errorBoy.log(err.message)
}
```

rename `webhookURL` to your google chat webhook.

[what is webhookURL](https://developers.google.com/hangouts/chat/how-tos/webhooks#define_an_incoming_webhook) 


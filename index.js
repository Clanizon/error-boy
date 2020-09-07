const fetch = require("node-fetch");

class ErrorBoy {
  constructor(webHookURL) {
    this.webHookURL = webHookURL;
  }

  init(url) {
    this.webHookURL = url;
  }

  setWebHookURL = (url) => {
    this.webHookURL = url;
  };

  log = (msg) => {
    const data = JSON.stringify({
      text: msg,
    });
    console.warn(this.webHookURL);
    fetch(this.webHookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: data,
    })
      .then((response) => {
        console.log("---ErrorBoy.Sent---");
      })
      .catch((error) => {
        console.error("---ErrorBoy.Failed---", error);
      });
  };
}

module.exports = new ErrorBoy();

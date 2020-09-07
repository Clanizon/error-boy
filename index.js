class ErrorBoy {
  constructor(webHookURL) {
    this.webHookURL = webHookURL;
  }
}

exports.log = (msg) => {
  const data = JSON.stringify({
    text: msg,
  });

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
      console.error("---ErrorBoy.Failed---");
    });
};

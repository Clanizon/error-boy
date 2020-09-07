# error-boy

### working demo

const errorBoy = require("error-boy");<br/>

errorBoy.init(
  "https://chat.googleapis.com/v1/spaces/AAAAbM73Y-8/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=-------------------------------------%3D"
);<br/>

try {<br/>
  throw new Error("Invalid function");<br/>
} catch (err) {<br/>
  errorBoy.log(err.message);<br/>
}<br/>

### rename init parameter as your webhook url

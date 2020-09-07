# error-boy

working demo

const errorBoy = require("error-boy");
errorBoy.init(
"https://chat.googleapis.com/v1/spaces/AAAAbM73Y-8/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=-------------------------------------%3D"
);

try {
throw new Error("Invalid function");
} catch (err) {
errorBoy.log(err.message);
}

#rename init parameter

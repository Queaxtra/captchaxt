const { createCanvas } = require("canvas");
const crypto = require("crypto");

const createCaptcha = function (options = {}) {
    const length = options.length || 0;
    const type = options.type || "string";
    const uppercase = options.uppercase || false;
    const useCanvas = options.canvasOptions || { enabled: false, textColor: "white", backgroundColor: "transparent", width: 500, height: 200 };

    const letters = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const captcha = "";

    const getRandomInt = (min, max) => {
        const bytes = crypto.randomBytes(4);
        const buffer = Buffer.from(bytes);
        const intValue = buffer.readUInt32BE(0);
        return Math.floor(min + (intValue / 0xFFFFFFFF) * (max - min + 1));
    };

    switch (type) {
        case "string":
            if (uppercase) {
                for (let i = 0; i < length; i++) {
                    captcha += uppercaseLetters.charAt(getRandomInt(0, uppercaseLetters.length - 1));
                }
            } else {
                for (let i = 0; i < length; i++) {
                    captcha += letters.charAt(getRandomInt(0, letters.length - 1));
                }
            }
            break;

        case "number":
            for (let i = 0; i < length; i++) {
                captcha += numbers.charAt(getRandomInt(0, numbers.length - 1));
            }
            break;

        default:
            break;
    }

    switch (useCanvas.enabled) {
        case true:
            const canvas = createCanvas(useCanvas.width, useCanvas.height);
            const ctx = canvas.getContext("2d");

            ctx.fillStyle = useCanvas.backgroundColor || "transparent";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = "bold 60px sans-serif";
            ctx.fillStyle = useCanvas.textColor || "white";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            ctx.fillText(captcha, canvas.width / 2, canvas.height / 2);
            const imageBuffer = canvas.toBuffer();
            return imageBuffer;

        case false:
        default:
            return captcha;
    }
};

module.exports = {
    createCaptcha,
};
const { createCanvas, loadImage } = require("canvas");

const createCaptcha = async function (options = {}) {
    const length = options.length || 0;
    const type = options.type || "string";
    const uppercase = options.uppercase || false;
    const useCanvas = options.canvas || { opened: false, color: "white", background: "transparent" };

    const letters = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const captcha = "";

    switch (type) {
        case "string":
            if (uppercase) {
                let i = 0;
                while (i < length) {
                    captcha += uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length));
                    i++;
                }
            } else {
                let i = 0;
                while (i < length) {
                    captcha += letters.charAt(Math.floor(Math.random() * letters.length));
                    i++;
                }
            }
            break;

        case "number":
            let i = 0;
            while (i < length) {
                captcha += numbers.charAt(Math.floor(Math.random() * numbers.length));
                i++;
            }
            break;

        default:
            break;
    }

    switch (useCanvas.opened) {
        case true:
            const canvas = createCanvas(500, 200);
            const ctx = canvas.getContext("2d");

            ctx.fillStyle = useCanvas.background || "transparent";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = "bold 60px sans-serif";
            ctx.fillStyle = useCanvas.color || "white";
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

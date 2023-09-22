module.exports = {
    createCaptcha: async function (options = {}) {
        const length = options.length || 0;
        const type = options.type || "string" || "number";
        const uppercase = options.uppercase || false;
        const letters = "abcdefghijklmnopqrstuvwxyz";
        const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const number = "0123456789";
        let captcha = "";

        if (type == "string") {
            if (uppercase == true) {
                for (let i = 0; i < length; i++) {
                    captcha += uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length));
                }
            } else {
                for (let i = 0; i < length; i++) {
                    captcha += letters.charAt(Math.floor(Math.random() * letters.length));
                }
            }
        } else if (type == "number") {
            for (let i = 0; i < length; i++) {
                captcha += number.charAt(Math.floor(Math.random() * number.length));
            }
        } else {
            throw new Error("Invalid captcha type!");
        }

        return captcha;
    }
}

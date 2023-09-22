const createCaptcha = require("./lib/createCaptcha");
const mathCaptcha = require("./lib/mathCaptcha");
const answerCaptcha = require("./lib/answerCaptcha");

module.exports = {
    createCaptcha: createCaptcha.createCaptcha,
    mathCaptcha: mathCaptcha.mathCaptcha,
    answerCaptcha: answerCaptcha.answerCaptcha
}
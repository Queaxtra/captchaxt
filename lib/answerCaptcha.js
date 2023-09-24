require('dotenv').config();
const fetch = require('cross-fetch');

const answerCaptcha = function () {
    const res = fetch(process.env.API_URL);
    const captcha = res.json();
    const { question, correct_answer, incorrect_answers } = captcha.results[0];

    return {
        question,
        correct_answer,
        incorrect_answers,
    };
}

module.exports = {
    answerCaptcha,
};
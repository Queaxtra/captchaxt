require('dotenv').config();
const fetch = require('cross-fetch');

const answerCaptcha = async function () {
    const res = await fetch(process.env.API_URL);
    const captcha = await res.json();
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
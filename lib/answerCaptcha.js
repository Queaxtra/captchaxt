require('dotenv').config();
const fetch = require('cross-fetch');

module.exports = {
    answerCaptcha: async function () {
        const res = await fetch(process.env.API_URL);
        const captcha = await res.json();
        const question = captcha.results[0].question;
        const correct_answer = captcha.results[0].correct_answer;
        const incorrect_answers = captcha.results[0].incorrect_answers;

        return {
            question: question,
            correct_answer: correct_answer,
            incorrect_answers: incorrect_answers
        }
    }
}
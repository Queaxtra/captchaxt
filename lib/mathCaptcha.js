const crypto = require("crypto");

const mathCaptcha = function (options = {}) {
    const level = options.level || "easy";

    const getRandomNumber = (max) => {
        const bytes = crypto.randomBytes(4);
        const buffer = Buffer.from(bytes);
        const intValue = buffer.readUInt32BE(0);
        return Math.floor((intValue / 0xFFFFFFFF) * max);
    };

    let maxNumber;
    let operators;

    switch (level) {
        case "easy":
            maxNumber = 10;
            operators = ["+", "-"];
            break;

        case "medium":
            maxNumber = 100;
            operators = ["+", "-", "*"];
            break;

        case "hard":
            maxNumber = 1000;
            operators = ["+", "-", "*"];
            break;

        default:
            throw new Error("Invalid captcha level!");
    }

    const firstNumber = getRandomNumber(maxNumber);
    const secondNumber = getRandomNumber(maxNumber);
    const operator = operators[getRandomNumber(operators.length)];
    const expression = `${firstNumber} ${operator} ${secondNumber}`;

    let answer;

    switch (operator) {
        case "+":
            answer = firstNumber + secondNumber;
            break;

        case "-":
            answer = firstNumber - secondNumber;
            break;

        case "*":
            answer = firstNumber * secondNumber;
            break;
    }

    return {
        question: expression,
        answer: answer
    };
};

module.exports = {
    mathCaptcha,
};
const mathCaptcha = async function (options = {}) {
    const level = options.level || "easy";
    const getRandomNumber = (max) => Math.floor(Math.random() * max);

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
    const answer = eval(expression);

    return {
        question: expression,
        answer: answer
    };
};

module.exports = {
    mathCaptcha,
};

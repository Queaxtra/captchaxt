module.exports = {
    mathCaptcha: async function (options = {}) {
        const level = options.level || "easy" || "medium" || "hard";

        if (level == "easy") {
            const firstNumber = Math.floor(Math.random() * 10);
            const secondNumber = Math.floor(Math.random() * 10);
            const operator = ["+", "-"][Math.floor(Math.random() * 2)];
            const answer = eval(firstNumber + operator + secondNumber);
            const question = firstNumber + " " + operator + " " + secondNumber;

            return {
                question: question,
                answer: answer
            }
        } else if (level == "medium") {
            const firstNumber = Math.floor(Math.random() * 100);
            const secondNumber = Math.floor(Math.random() * 100);
            const operator = ["+", "-", "*"][Math.floor(Math.random() * 3)];
            const answer = eval(firstNumber + operator + secondNumber);
            const question = firstNumber + " " + operator + " " + secondNumber;

            return {
                question: question,
                answer: answer
            }
        } else if (level == "hard") {
            const firstNumber = Math.floor(Math.random() * 1000);
            const secondNumber = Math.floor(Math.random() * 1000);
            const operator = ["+", "-", "*"][Math.floor(Math.random() * 3)];
            const answer = eval(firstNumber + operator + secondNumber);
            const question = firstNumber + " " + operator + " " + secondNumber;

            return {
                question: question,
                answer: answer
            }
        } else {
            throw new Error("Invalid captcha level!");
        }
    }
}
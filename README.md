
# captchaxt

A CAPTCHA module made for Discord bot projects.


## 🛠 Installation

You can download the module using NPM or PNPM.

`npm i captchaxt` | `pnpm i captchaxt`
## 📁 Usage
- Creating a simple CAPTCHA;

```js
const captchaxt = require('captchaxt');

captchaxt.createCaptcha({
    length: 5,
    type: "number", // string, number
    uppercase: false
}).then(captcha => {
    console.log(captcha);
})
```

- Creating a simple math CAPTCHA.
```js
const captchaxt = require('captchaxt');

captchaxt.mathCaptcha({
    level: "easy" // easy, medium, hard
}).then(captcha => {
    console.log(captcha);
})
```

- Creating a simple question-answer CAPTCHA.

```js
const captchaxt = require('captchaxt');

captchaxt.answerCaptcha().then(captcha => {
    console.log(captcha);
})
```
## ✨ Note
Please contact us if you have encountered a bug or error.
https://t.me/unoxdevs
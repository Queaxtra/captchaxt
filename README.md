
# captchaxt

A CAPTCHA module made for Discord bot projects.


## ✨ Updates

- Canvas option has been added; with this option, you can turn the CAPTCHA codes you create into a picture and personalize them as you wish.
- Minor bugs fixed.
## 🛠 Installation

You can download the module using NPM or PNPM.

`npm i captchaxt` | `pnpm i captchaxt`
## 📁 Usage
- Creating a simple CAPTCHA;

```js
const captchaxt = require('captchaxt');

captchaxt.createCaptcha({
    length: 6,
    type: 'string', // or number, default: string
    uppercase: false,
    canvas: {
        opened: true, // default: false
        color: 'white', // default: 'white'
        background: 'transparent' // default: 'transparent'
    }
}).then(buffer => {
    console.log(buffer);
});
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
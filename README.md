
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
    length: 10,
    type: 'string', // or number, default: string
    uppercase: true,
    canvasOptions: {
        enabled: true,
        textColor: 'white', // red, black, blue etc.
        backgroundColor: 'transparent', // gray, red, green etc.
        width: 1000,
        height: 500
    }
}).then(buffer => {
    console.log(buffer);
});

```
![Image](https://cdn.discordapp.com/attachments/1136591322208272385/1155471961800061009/brave_SFzZKgtZA0.png)

- Creating a simple math CAPTCHA.
```js
const captchaxt = require('captchaxt');

captchaxt.mathCaptcha({
    level: "easy" // or medium, hard
}).then(captcha => {
    console.log(captcha);
})
```
![Image](https://cdn.discordapp.com/attachments/1136591322208272385/1155472512667361351/brave_JpDgnwTuCq.png)

- Creating a simple question-answer CAPTCHA.

```js
const captchaxt = require('captchaxt');

captchaxt.answerCaptcha().then(captcha => {
    console.log(captcha);
})
```
![Image](https://cdn.discordapp.com/attachments/1136591322208272385/1155473545925754970/brave_7d6MXS3VKE.png)
## ✨ Note
Please contact us if you have encountered a bug or error.
https://t.me/unoxdevs
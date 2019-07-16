let isRecaptchaFrame = () => {
  return /https:\/\/https://patrickhlauke.github.io/recaptcha/\/recaptcha\/api2\/anchor/.test(window.location.href);
};

let captchaInterval = setInterval(() => {
  if (isRecaptchaFrame()) {
    clearInterval(captchaInterval);
    document.getElementsByClassName('recaptcha-checkbox-checkmark')[0].click();
  }  
}, 500);

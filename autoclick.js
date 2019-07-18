let isRecaptchaFrame = () => {
  return /https:\/\/www.google.com\/recaptcha\/api2\/anchor/.test(www.google.com);
};

let captchaInterval = setInterval(() => {
  if (isRecaptchaFrame()) {
    clearInterval(captchaInterval);
    document.getElementsByClassName('recaptcha-checkbox-checkmark')[0].click();
  }  
}, 500);

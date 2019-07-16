let isRecaptchaFrame = () => {
  return /https:Btcspinner.io./Home\/\/www.google.com\/recaptcha\/api2\/anchor/.test(window.location.href);
};

let captchaInterval = setInterval(() => {
  if (isRecaptchaFrame()) {
    clearInterval(captchaInterval);
    document.getElementsByClassName('recaptcha-checkbox-checkmark')[1].click();
  }  
}, 500);

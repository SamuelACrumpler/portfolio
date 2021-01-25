const Bluebird = require('bluebird');
const Recaptcha = require('recaptcha-v2').Recaptcha;

/**
 * Verify ReCaptcha
 * @param {Object} recaptchaData
 * @returns {Promise}
 */
exports.verifyRecaptcha = (recaptchaData) => {
  if (process.env.RECAPTCHA_SKIP_ENABLED === 'true') { // For development purpose only, you need to add SKIP_ENABLED in .env
    return Bluebird.resolve();
  }

  return new Bluebird((resolve, reject) => {
    const recaptcha = new Recaptcha(process.env.RECAPTCHA_SITE_KEY, process.env.RECAPTCHA_SECRET_KEY, recaptchaData);

    recaptcha.verify((success) => {
      if (success) {
        return resolve();
      }

reject(new Error());
    });
  });
};
// Mountain Marketing — script.js

document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('mm-contact-form');
  var successMsg = document.getElementById('mm-form-success');
  var errorMsg = document.getElementById('mm-form-error');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      successMsg.classList.remove('mm-visible');
      errorMsg.classList.remove('mm-visible');

      // NOTE: GitHub Pages serves static files only — there's no backend here
      // to actually receive this submission. Wire this up to a form service
      // (e.g. Formspree, Getform) by setting form.action to your endpoint URL
      // and letting it POST normally, or via fetch() here.

      successMsg.classList.add('mm-visible');
      form.reset();
    });
  }
});

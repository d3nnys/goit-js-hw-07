'use strict';

const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  const userEmail = email.value.trim();
  const userPassword = password.value.trim();

  const user = {
    email: userEmail,
    password: userPassword,
  };

  if (userEmail === '' || userPassword === '') {
    alert('All form fields must be filled in');
    return;
  }

  console.log(user);

  form.reset();
}

// const inputs = document.querySelectorAll('input');
// inputs.forEach(input => {
//   input.addEventListener('focus', function () {
//     input.value = 'Type area';
//   });
// });

// inputs.forEach(input => {
//   input.addEventListener('blur', function () {
//     if (input.value === 'Type area') {
//       input.value = '';
//     }
//   });
// });

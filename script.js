// const { default: JustValidate } = require('just-validate');

// const validator = new JustValidate('#main-form');
const submitBtn = document.querySelector('#submit-btn');
// const agreement = document.querySelector('#agreement');

// // gitRequisito 4 //
submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
});

// Requisito 5 //
agreement.addEventListener('change', () => {
  submitBtn.disabled = false;
});

const btnCondition = () => {
  if (!agreement.onchange) {
    submitBtn.disabled = true;
  }
};

// // Exercício Bônus  //

// validator.addField('#agreement', [
//   {
//     rule: 'required',
//   },
//   {
//     validateBeforeSubmitting: false,
//   },
// ],
// {
//   errorsContainer: '#errorContainer',
// });

// // validator.revalidateField('#agreement').then(!isValid => {submitBtn.disabled = true
// // });

const validate = new JustValidate('#main-form', {
  errorFieldCssClass: 'is-invalid',
  errorFieldStyle: {
    border: '1px solid red',
  },
  errorLabelCssClass: 'is-label-invalid',
  errorLabelStyle: {
    color: 'red',
    textDecoration: 'underlined',
  },
  focusInvalidField: true,
  lockForm: true,
  tooltip: {
    position: 'top',
  },
});

validate
  .addField('#fullName', [
    {
      rule: 'required',
      errorMessage: 'O campo de nome é obrigatório.',
    },
    {
      rule: 'maxLength',
      value: 40,
      errorMessage: 'O limite é de 40 caracteres.',
    },
    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'O mínimo é de 10 caracteres.',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'O campo de email é obrigatório.',
    },
    {
      rule: 'email',
      errorMessage: 'O email digitado não é válido.',
    },
    {
      rule: 'maxLength',
      value: 50,
      errorMessage: 'O limite é de 50 caracteres.',
    },
  ])
  .addField('#question', [
    {
      rule: 'required',
      errorMessage: 'O campo de resposta é obrigatório.',
    },
    {
      rule: 'maxLength',
      value: 500,
      errorMessage: 'O limite é de 500 caracteres',
    },
  ])
  .addField('#date', [
    {
      rule: 'required',
      errorMessage: 'O campo de data é obrigatório.',
    },
  ])
  .addField('#agreement', [
    {
      rule: 'required',
      errorMessage: 'O campo é obrigatório',
    },
  ]);
submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
});
window.onload = function () {
  const clearBtn = document.querySelector('#clear-btn');
  clearBtn.addEventListener('click', clearFields);
  const agreement = document.querySelector('#agreement');
  agreement.addEventListener('change', enableSubmit);
};
btnCondition();

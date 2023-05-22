const submitBtn = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');
// Requisito 4 //
submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
});

// Requisito 5 //
agreement.addEventListener('change', (event) => {
  submitBtn.disabled = false;
  
})
const btnCondition = () => {
  if (!agreement.onchange) {
    submitBtn.disabled = true;
  }
};

btnCondition();

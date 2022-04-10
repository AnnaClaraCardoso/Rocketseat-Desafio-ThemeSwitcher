const checkbox = document.querySelector('.form-check-input');

checkbox.addEventListener('change', () => {
  if(checkbox.checked) {
    document.body.style.backgroundColor = '#292C35'
  } else {
    document.body.style.backgroundColor = '#F1F1F1'
  }
})



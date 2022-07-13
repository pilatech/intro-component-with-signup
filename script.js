const form = document.querySelector('.form')

form.addEventListener('submit', event => {

 const formControls = document.querySelectorAll('.form__control')
 formControls.forEach(formControl => {
  const inputField = formControl.querySelector('.form__input')
  const errorElement = formControl.querySelector('.error-message')
  const isValidEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
  const name = inputField.name
  const value = inputField.value
  
  formControl.classList.remove('invalid')

  if(!value.trim()){
   errorElement.textContent = `${name} cannot be empty!`
   formControl.classList.add('invalid')
   return
  } 
  
  if(name === 'email' && !isValidEmail.test(value)){
   errorElement.textContent = "Email is invalid!"
   formControl.classList.add('invalid')
  }

 })

 event.preventDefault()
})
const form = document.querySelector('form');
// this usecase will give you empty
// const height =  parseInt(document.querySelector('#height').value)
form.addEventListener('submit' , function(e){
    e.preventDefault()

  const height =  parseInt(document.querySelector('#height').value)
  const weight =  parseInt(document.querySelector('#weight').value)
  const result =  (document.querySelector('#result'))

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `plese give a valid height ${height}`
  } else if (weight === '' || height < 0 || isNaN(weight)) {
    result.innerHTML = `plese give a valid height ${weight}`
  }else {
    const BMI = (weight / ((height*height) / 10000)).toFixed(2)
    // show the result
    result.innerHTML = `<span>${BMI}</span>`
  }

});
const rates = document.querySelectorAll('.rates')
const submit = document.querySelector('.submit')
let rated = document.querySelector('.rated')
let rateNumber = ''
let clicked = false

function toggle(){
  rates.forEach((rate) =>
    rate.classList.remove('active'))
  this.classList.add('active')
  rateNumber = this.innerText
  clicked = true
  
  localStorage.setItem('ratte',rateNumber)
  
  if (clicked) {
    submit.addEventListener('click', () => {
      window.location.href = 'thankYou.html'
    })
  }
}
function setRate(){
  const ratte = localStorage.getItem('ratte')
  if(ratte){
    rated.innerText = ratte
  }
}

for (let i = 0; i < rates.length; i++) {
  rates[i].addEventListener('click', toggle)
}
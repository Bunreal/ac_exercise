const formParts = document.querySelectorAll('.part')

const btnControl = document.querySelector('.controlpanel')
const nextBtn = btnControl.querySelector('.btnright')
const prevBtn = btnControl.querySelector('.btnleft')

const stepControl = document.querySelector('.main__display__left__stepper')
const steps = stepControl.querySelectorAll('.main__display__left__stepper__step')

let step = 0;

console.log(steps[step])

function handleBtnControlClicked(e) {
  e.preventDefault()
  const nowStep = steps[step]
  console.log(nowStep)
  console.log(1)

  if (e.target.matches('.btnright') && e.target.innerHTML==='下一步 →') {
    const nextStep = steps[step+1]
    nowStep.classList.remove('active')
    nowStep.classList.add('checked')
    nextStep.classList.add('active')
    formParts[step].classList.toggle('d-none')
    formParts[step+1].classList.toggle('d-none')
    step += 1
  } else if (e.target.matches('.btnleft')) {
    const prevStep = steps[step-1]
    nowStep.classList.remove('active')
    prevStep.classList.remove('checked')
    prevStep.classList.add('active')
    formParts[step].classList.toggle('d-none')
    formParts[step-1].classList.toggle('d-none')
    step -= 1
  }
  setBtnDisabled()
}

function setBtnDisabled () {
  if(step === 0) {
    prevBtn.setAttribute('disabled', 'disabled')
  } else {
    prevBtn.removeAttribute('disabled')
  }

  if(step === 2) {
    nextBtn.innerHTML = ('確認下單')
  } else {
    nextBtn.innerHTML = ('下一步 →')
  }
}



btnControl.addEventListener('click', handleBtnControlClicked)
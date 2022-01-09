const formParts = document.querySelectorAll('.part')

const btnControl = document.querySelector('.controlpanel')
const nextBtn = btnControl.querySelector('.btnright')
const prevBtn = btnControl.querySelector('.btnleft')

const stepControl = document.querySelector('.stepper')
const steps = stepControl.querySelectorAll('.step')

let step = 0;

function handleBtnControlClicked(e) {
  e.preventDefault()
  const nowStep = steps[step]

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
    prevBtn.style.display = 'none'
  } else {
    prevBtn.style.display = 'block'
  }

  if(step === 2) {
    nextBtn.innerHTML = ('確認下單')
  } else {
    nextBtn.innerHTML = ('下一步 →')
  }
}

btnControl.addEventListener('click', handleBtnControlClicked)

// 用於 sm 的 button 
const sm_btnControl = document.querySelector('.sm_controlpanel')
const sm_nextBtn = sm_btnControl.querySelector('.sm_btnright')
const sm_prevBtn = sm_btnControl.querySelector('.sm_btnleft')


function sm_handleBtnControlClicked(e) {
  e.preventDefault()
  const nowStep = steps[step]
  if (e.target.matches('.sm_btnright') && e.target.innerHTML==='下一步 →') {
    const nextStep = steps[step+1]
    nowStep.classList.remove('active')
    nowStep.classList.add('checked')
    nextStep.classList.add('active')
    formParts[step].classList.toggle('d-none')
    formParts[step+1].classList.toggle('d-none')
    step += 1
  } else if (e.target.matches('.sm_btnleft')) {
    const prevStep = steps[step-1]
    nowStep.classList.remove('active')
    prevStep.classList.remove('checked')
    prevStep.classList.add('active')
    formParts[step].classList.toggle('d-none')
    formParts[step-1].classList.toggle('d-none')
    step -= 1
  }
  sm_setBtnDisabled()
}

function sm_setBtnDisabled () {
  if(step === 0) {
    sm_prevBtn.style.display = 'none'
  } else {
    sm_prevBtn.style.display = 'block'
  }

  if(step === 2) {
    sm_nextBtn.innerHTML = ('確認下單')
  } else {
    sm_nextBtn.innerHTML = ('下一步 →')
  }
}

sm_btnControl.addEventListener('click', sm_handleBtnControlClicked)
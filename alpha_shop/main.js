// 處理stepper的變化
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


// 處理右邊購物欄的變化
const deliverFeeDOM = document.querySelector('.shoppingFee .blockprice')
const totalPrice = document.querySelector('.sum .blockprice')
let deliverFee = 0

// 原本預設是免費，如果更換運送方式，會改變運費，同時連動右邊
const deliverPart = document.querySelectorAll('.deliverPart')
deliverPart.forEach(el => {
  el.addEventListener('click', (e)=> {
    const eventTar = e.target
    const eventTarValue = eventTar.value
    if (eventTar.matches('input')){
      deliverFee = Number(eventTarValue)
      deliverFeeDOM.innerHTML = Number(eventTarValue) === 0 ? '免費' : 500
    }
    updatePrice()
  })
})


const buyItems = document.querySelectorAll('.buyItem')
let pricePerItem = []
let numPerItem = []
let allPrice = 0;

const shoppingBlock = document.querySelector('.havebuyItems')
shoppingBlock.addEventListener('click', (e)=>{
  if(e.target.matches('.minus1')){
    e.target.nextElementSibling.textContent = e.target.nextElementSibling.textContent - 1 === 0 ? e.target.nextElementSibling.textContent : e.target.nextElementSibling.textContent - 1
  }
  if(e.target.matches('.plus1')){
    e.target.previousElementSibling.textContent = Number(e.target.previousElementSibling.textContent) + 1
  }
  updatePrice()
})

function updatePrice (){
  pricePerItem = []
  numPerItem = []
  // 製造一個包含所有單價的arr
  let itemPrices = document.querySelectorAll('.itemPrice')
  itemPrices.forEach(el => {
    // 把arr的數字內容轉換成真正的數字
    // let b = el.textContent.split('').splice(1,el.textContent.length)
    let b = el.textContent.split('').filter(letter => letter !== "$" && letter !== ",").join('')
    pricePerItem.push(Number(b))
    //console.log(pricePerItem)
  })
  // 製造一個包含所有的數量的arr
  let itemNumbers = document.querySelectorAll('.itemNum')
  itemNumbers.forEach(el => {
    numPerItem.push(Number(el.textContent))
    //console.log(numPerItem)
  })
  // 計算錢
  allPrice = 0
  for (let i=0;i<pricePerItem.length;i++){
    allPrice += pricePerItem[i]*numPerItem[i]
  }
  // 把錢show出來
  let TotalPriceInitial = allPrice + deliverFee
  // 給格式 4000 -> $4,000
  TotalPriceText = '$'+Math.floor(TotalPriceInitial/1000)+','+TotalPriceInitial%1000
  totalPrice.textContent = TotalPriceText
}
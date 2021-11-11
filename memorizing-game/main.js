// 放在文件最上方
const GAME_STATE = {
  FirstCardAwaits: "FirstCardAwaits",
  SecondCardAwaits: "SecondCardAwaits",
  CardsMatchFailed: "CardsMatchFailed",
  CardsMatched: "CardsMatched",
  GameFinished: "GameFinished",
}

const controller = {
  currentState: GAME_STATE.FirstCardAwaits,
  generateCards () {
    view.displayCards(utility.getRandomNumberArray(52))
  },
  // 依照不同遊戲狀態
  dispatchCardAction (card) {
    if ( !card.classList.contains('back')) {
      return
    }
    switch (this.currentState) {
      case GAME_STATE.FirstCardAwaits:
        view.flipCards(card)
        model.revealedCards.push(card)
        this.currentState = GAME_STATE.SecondCardAwaits
        break
      case GAME_STATE.SecondCardAwaits:
        view.renderTriedTimes((++model.triedTimes))
        view.flipCards(card)
        model.revealedCards.push(card)
        if (model.isRevealedCardsMatched()){
          // 配對正確
          view.renderScore((model.score+=10))
          this.currentState = GAME_STATE.CardsMatched
          view.pairCards(...model.revealedCards)
          model.revealedCards = []
          if (model.score === 260) {
            console.log('showGameFinished')
            this.currentState = GAME_STATE.GameFinished
            view.showGameFinished()  // 加在這裡
            return
          }
          this.currentState = GAME_STATE.FirstCardAwaits
        } else {
          // 配對失敗
          this.currentState = GAME_STATE.CardsMatchFailed
          view.appendWrongAnimation(...model.revealedCards)
          setTimeout(this.resetCards, 1000)
        }
        break
    }
    console.log('this.currentState', this.currentState)
    console.log('revealedCards', model.revealedCards)  
  },
  resetCards () {
    view.flipCards(...model.revealedCards)
    model.revealedCards = []
    controller.currentState = GAME_STATE.FirstCardAwaits
  }
}

const model = {
  revealedCards: [],
  isRevealedCardsMatched () {
    return this.revealedCards[0].dataset.index % 13 === this.revealedCards[1].dataset.index % 13
  },
  score : 0,
  triedTimes: 0
}

const Symbols = [
  //'https://image.flaticon.com/icons/svg/105/105223.svg', // 黑桃
  'https://cdn-icons-png.flaticon.com/512/1/1438.png',
  //'https://image.flaticon.com/icons/svg/105/105220.svg', // 愛心
  'https://cdn-icons-png.flaticon.com/512/138/138533.png',
  //'https://image.flaticon.com/icons/svg/105/105212.svg', // 方塊
  'https://cdn-icons-png.flaticon.com/512/138/138534.png',
  //'https://image.flaticon.com/icons/svg/105/105219.svg' // 梅花
  'https://cdn-icons-png.flaticon.com/512/2869/2869376.png'
]

const utility = {
  getRandomNumberArray (count) {
    const number = Array.from(Array(count).keys())
    for (let index = number.length - 1; index > 0; index--) {
      let randomIndex = Math.floor(Math.random() * (index + 1))
        ;[number[index], number[randomIndex]] = [number[randomIndex], number[index]]
    }
    return number
  }
}

// MVC 的管理
const view = {
  getCardElement (index) {
    return `<div data-index="${index}" class="card back"></div>`
  },
  getCardContent (index) {
    const number = this.transformNumber((index % 13) + 1)
    const symbol = Symbols[Math.floor(index / 13)]
    return `
        <p>${number}</p>
        <img src="${symbol}">
        <p>${number}</p>
    `
  },
  displayCards (indexes) {
    const rootElement = document.querySelector('#cards')
    rootElement.innerHTML = indexes.map(index => this.getCardElement(index)).join('')
  },
  transformNumber (number){
    switch (number) {
      case 1:
        return 'A'
      case 11:
        return 'J'
      case 12:
        return 'Q'
      case 13:
        return 'K'
      default:
        return number
    }
  },
  flipCards (...cards) {
    cards.map(card => {
      if (card.classList.contains('back')) {
        // 回傳正面
        card.classList.remove('back')
        card.innerHTML = this.getCardContent(Number(card.dataset.index))
        return
      }
      // 回傳背面
      card.classList.add('back')
      card.innerHTML = null
    })
  },
  // 配對成功後的樣式變化
  pairCards (...cards) {
    cards.map( card => {
      card.classList.add('paired')
    })
  },
  renderScore (score) {
    document.querySelector('.score').textContent = `score: ${score}`
  },
  renderTriedTimes (times) {
    document.querySelector('.tried').textContent = `You've tried: ${times}`
  },
  appendWrongAnimation (...cards) {
    cards.map(card => {
      card.classList.add('wrong')
      card.addEventListener(
        'animationend', 
        ()=>{
        card.classList.remove('wrong')
        },
        {
          once: true
        }
      )
    })
  },
  // 在 view 中新增
  showGameFinished () {
    const div = document.createElement('div')
    div.classList.add('completed')
    div.innerHTML = `
      <p>Complete!</p>
      <p>Score: ${model.score}</p>
      <p>You've tried: ${model.triedTimes} times</p>
    `
    const header = document.querySelector('#header')
    header.before(div)
  }
}

controller.generateCards()

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', event => {
    controller.dispatchCardAction(card)
  })
})
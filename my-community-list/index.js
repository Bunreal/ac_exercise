// Prepare stage: define variables
const BASE_URL = 'https://lighthouse-user-api.herokuapp.com'
const INDEX_URL = BASE_URL + '/api/v1/users/'
const users = [] // 預計將所有的user丟進這個arr
const dataPanel = document.querySelector('#data-panel')
// search 
const searchBtn = document.querySelector('#searchBtn') // input btn
const searchTxt = document.querySelector('#searchTxt') // input txt
let keyResult = [] // 把符合keyword 的資料丟進這個
// get local storage
const saveList = JSON.parse(localStorage.getItem('saveUsers')) || []
// paginator
const paginator = document.querySelector('#paginator')
const itemPerPage = 16 // 每頁有幾個

// get all users
axios.get(INDEX_URL)
  .then(res => {
    users.push(...res.data.results)
    keyResult.push(...res.data.results)
    renderPaginator(users)
    renderUserListByPage(users,1)
    markThisPage(1)
  })
  .catch(err => {
    console.log('error')
  })

// search function
searchTxt.addEventListener('keyup', function(){
  const keyword = searchTxt.value.trim().toLowerCase()
  keyResult = users.filter(el => (el.name+el.surname).toLowerCase().includes(keyword))
  renderUserListByPage(keyResult,1)
  if(keyResult.length>0){  // 如果搜尋後結果沒東西，就不進入後面，避免錯誤
    renderPaginator(keyResult)
    markThisPage(1)
  }
})

// 把分頁控制秀出來
function renderPaginator(data){
  const pageNum = Math.ceil(data.length/itemPerPage)
  let rawHTML = ''
  for(let i = 1; i < pageNum+1; i++){
    rawHTML += `<div class="pageBarItem" style="list-style-type: none; padding:2px; width: 30px; background-color: #17a2b8; opacity: 0.4; border-radius: 30px;text-align:center "> ${i} </div>`
  }
  paginator.innerHTML = rawHTML;
}

// add event to paginator
paginator.addEventListener('click',(e)=>{
  if(e.target.matches('.pageBarItem')){ // 如果點擊到頁碼，那就換頁
    const page = Number(e.target.innerText.trim())
    renderUserListByPage(keyResult, page)
    // 要把目前這一頁做特別效果，讓我知道現在在第幾頁！
    renderPaginator(keyResult) // 將頁碼區域回到預設，消除掉先前的標示
    markThisPage(page)
  }
})

// 標註目前頁碼
function markThisPage(page){
  const thisPage = document.querySelectorAll('.pageBarItem')[page-1]
  thisPage.style.opacity = 1
  thisPage.style.fontWeight = "900"
}

// 分頁呈現特定內容
function renderUserListByPage(data, page){
  // page 1: 1-18  arr: 0-17
  // page 2: 19-36  arr: 18-35
  const first = (page-1)*itemPerPage
  const last =  first+itemPerPage
  const someUsers = data.slice(first,last)
  renderUserList(someUsers)
}

// render userlist
function renderUserList(data){   // data 為 array
  let rawHTML = ''
  data.forEach(el=>{
    // 以下這步驟，是為了將已經存入的項目與未存入的項目分開，為了一目了然，我要對照每一個id，如果id是符合我的saveList，那就愛心，否則就空心
    let saveListId = []
    if(saveList.length>0){
      saveListId = saveList.map(el2 => el2.id) // 原本的陣列裡面是完整資訊，現在我只要陣列裡面有id即可
    }
    let isSaved='' // 因為空心的愛心跟實心的愛心只有fas,far這個差異，因此這樣設定
    if (saveListId.includes(el.id)){
      isSaved = 'fas' // 實心的愛心
    } else {
      isSaved = 'far' // 空心的愛心
    }
    rawHTML += `
    <div class="col-md-3 col-6">
      <div class="mb-2">
        <div class="card">
          <img src="${el.avatar}" class="card-img-top" alt="user photo" data-id=${el.id}  data-toggle="modal" data-target="#user-modal"/>

          <div class="card-body">
            <h5 class="card-title" style="word-wrap:normal">${el.name} ${el.surname}</h5>
            <div class="saveCard"><i class="${isSaved} fa-heart" data-id=${el.id}></i></div>
          </div>
        </div>
      </div>
    </div>`
  })
  dataPanel.innerHTML = rawHTML
}

// set event listener
dataPanel.addEventListener('click', (e)=>{
  // 如果點到的是卡片中的圖片，就開啟詳細資訊
  if(e.target.matches('.card-img-top')){
    showUserModal(Number(e.target.dataset.id))
  }
  // 如果點到愛心，就要判斷是實心或空心，然後做相對應的動作
  if(e.target.matches('.fa-heart')){
    // 假如裡面還沒有，就新增
    if(!saveList.some(el => el.id === Number(e.target.dataset.id))){
      saveList.push(users.find(el => el.id === Number(e.target.dataset.id)))
      localStorage.setItem('saveUsers',JSON.stringify(saveList))
      e.target.classList.remove("far")
      e.target.classList.add("fas")
    } else { //如果有，就刪掉
      const index = saveList.findIndex(el4 => el4.id === Number(e.target.dataset.id))
      saveList.splice(index, 1)
      localStorage.setItem('saveUsers',JSON.stringify(saveList))
      e.target.classList.remove("fas")
      e.target.classList.add("far")
    }
  }
})

// show user modal
function showUserModal(id){
  const modalTitle = document.querySelector("#user-modal-title")
  const modalName = document.querySelector("#user-modal-fullname")
  const modalGender = document.querySelector("#user-modal-gender")
  const modalAge = document.querySelector("#user-modal-age")
  const modalEmail = document.querySelector("#user-modal-email")
  const modalImage = document.querySelector("#user-modal-image") 
  axios.get(INDEX_URL+id)
    .then(res=>{
      const data = res.data;
      modalTitle.innerHTML = `<b>${data.name} ${data.surname}</b>`
      modalName.innerHTML = `<b>Name:</b> ${data.name} ${data.surname}`
      modalGender.innerHTML = `<b>Gender:</b> ${data.gender}`
      modalAge.innerHTML = `<b>Age:</b> ${data.age}`
      modalEmail.innerHTML = `<b>Email:</b> ${data.email}`
      modalImage.innerHTML = `<img src=${data.avatar} alt="user-photo" class="img-fuid">`
    })
}
// Prepare stage: define variables
const BASE_URL = 'https://lighthouse-user-api.herokuapp.com'
const INDEX_URL = BASE_URL + '/api/v1/users/'
const dataPanel = document.querySelector('#data-panel')

// get local storage
let saveList = JSON.parse(localStorage.getItem('saveUsers')) || []

// 一開始的自動 render
renderUserList(saveList)

// render userlist
function renderUserList(data){   // data 為 array
  let rawHTML = ''
  data.forEach(el=>{
    rawHTML += `
    <div class="col-md-3 col-6">
      <div class="mb-2">
        <div class="card">
          <img src="${el.avatar}" class="card-img-top" alt="user photo" data-id=${el.id}  data-toggle="modal" data-target="#user-modal"/>

          <div class="card-body">
            <h5 class="card-title" style="word-wrap:normal">${el.name} ${el.surname}</h5>
            <div class="saveCard"><i class="fas fa-heart" data-id=${el.id}></i></div>
          </div>
        </div>
      </div>
    </div>`
  })
  dataPanel.innerHTML = rawHTML
}

// set event listener
dataPanel.addEventListener('click', (e)=>{
  if(e.target.matches('.card-img-top')){
    showUserModal(Number(e.target.dataset.id))
  }
  // delete
  if(e.target.matches('.fa-heart')){
    // 假如裡面有，就刪掉
    if(saveList.some(el => el.id === Number(e.target.dataset.id))){
      const index = saveList.findIndex(el4 => el4.id === Number(e.target.dataset.id))
      saveList.splice(index, 1)
      localStorage.setItem('saveUsers',JSON.stringify(saveList))
      e.target.classList.remove("fas")
      e.target.classList.add("far")
      renderUserList(saveList)
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
      modalTitle.innerText = `${data.name} ${data.surname}`
      modalName.innerText = `Name: ${data.name} ${data.surname}`
      modalGender.innerText = 'Gender: '+data.gender
      modalAge.innerText = 'Age: '+data.age
      modalEmail.innerText = 'Email: '+data.email
      modalImage.innerHTML = `<img src=${data.avatar} alt="user-photo" class="img-fuid">`
    })
}
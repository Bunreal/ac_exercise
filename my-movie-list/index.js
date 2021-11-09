// set variables
const BASE_URL = 'https://movie-list.alphacamp.io'
const INDEX_URL = BASE_URL + '/api/v1/movies/'
const POSTER_URL = BASE_URL + '/posters/'
const MOVIES_PER_PAGE = 12

const movies = []
let filteredMovies = []

const dataPanel = document.querySelector('#data-panel')
const searchForm = document.querySelector('#search-form')
const searchInput = document.querySelector('#search-input')
const paginator = document.querySelector('#paginator')

const viewSwitch = document.querySelector('#viewType')
// 以下是為了要在更換展示方式時，標示出來目前的展示方式
const cardView = document.querySelector('#cardView')
const listView = document.querySelector('#listView')
// 目前頁數，一開始預設第一頁
let thePage = 1 

// 因為一開始預設是卡片模式
let htmlelement = `<div class="col-sm-3">
      <div class="mb-2">
        <div class="card">
          <img
            src=${POSTER_URL}ELEMENT_IMAGE
            class="card-img-top" alt="Movie Poster" />
          <div class="card-body">
            <h5 class="card-title">ELEMENT_TITLE</h5>
          </div>
          <div class="card-footer">
            <button class="btn btn-primary btn-show-movie" data-toggle="modal" data-target="#movie-modal" data-id="ELEMENT_ID">More</button>
            <button class="btn btn-info btn-add-favorite" data-id="ELEMENT_ID">+</button>
          </div>
        </div>
      </div>
    </div>`

// 透過點選，來改變要render時的每一個項目的html內容
viewSwitch.addEventListener('click',(e)=>{
  if(e.target.matches('.fa-bars')){ // list
    htmlelement = `
      <table class="table">
        <tbody>
          <tr>
            <td style="width:70%">ELEMENT_TITLE</td>
            <td><button class="btn btn-primary btn-show-movie" data-toggle="modal" data-target="#movie-modal" data-id="ELEMENT_ID">More</button></td>
            <td><button class="btn btn-info btn-add-favorite" data-id="ELEMENT_ID">+</button></td>
          </tr>
        </tbody>
      </table>`
    // 點選時，同時也強調目前是在哪一個展示模式
    listView.style.color = 'black'
    cardView.style.color = 'lightgray'
  }
  if(e.target.matches('.fa-th')){ // card
    htmlelement = `<div class="col-sm-3">
      <div class="mb-2">
        <div class="card">
          <img
            src=${POSTER_URL}ELEMENT_IMAGE
            class="card-img-top" alt="Movie Poster" />
          <div class="card-body">
            <h5 class="card-title">ELEMENT_TITLE</h5>
          </div>
          <div class="card-footer">
            <button class="btn btn-primary btn-show-movie" data-toggle="modal" data-target="#movie-modal" data-id="ELEMENT_ID">More</button>
            <button class="btn btn-info btn-add-favorite" data-id="ELEMENT_ID">+</button>
          </div>
        </div>
      </div>
    </div>`
    // 點選時，同時也強調目前是在哪一個展示模式
    listView.style.color = 'lightgray'
    cardView.style.color = 'black'
  }
  renderMovieList(getMoviesByPage(thePage))  
})

// main function: render
function renderMovieList(data) {
  let rawHTML = ''
  // process data
  data.forEach(el=>{
    newelement = htmlelement
      .replace('ELEMENT_IMAGE', el.image)
      .replace('ELEMENT_TITLE', el.title)
      .replace('ELEMENT_ID', el.id)
      .replace('ELEMENT_ID', el.id)  // 因為有兩個同樣的需要取代
    rawHTML += newelement
  })
  dataPanel.innerHTML = rawHTML
}

// 製作分頁器
function renderPaginator(amount){
  const numberOfPages = Math.ceil(amount / MOVIES_PER_PAGE)
  let rawHTML = ''
  for(let page = 1; page<= numberOfPages; page++){
    rawHTML += `<li class="page-item"><a class="page-link" href="#" data-page="${page}">${page}</a></li>`
  }
  paginator.innerHTML = rawHTML
}

// 分頁，所以每頁只有部分元素
function getMoviesByPage(page){
  // 如果filtered movies 有東西
  const data = filteredMovies.length ? filteredMovies : movies
  const startIndex = (page - 1) * MOVIES_PER_PAGE
  return data.slice(startIndex, startIndex + MOVIES_PER_PAGE)
}

function showMovieModal(id){
  const modalTitle = document.querySelector('#movie-modal-title')
  const modalImage = document.querySelector('#movie-modal-image')
  const modalDate = document.querySelector('#movie-modal-date')
  const modalDescription = document.querySelector('#movie-modal-description')

  axios.get(INDEX_URL+id)
    .then(function(response){
    // handle success
      const data = response.data.results
      modalTitle.innerText = data.title
      modalImage.innerHTML = `<img src="${POSTER_URL+data.image}" alt="movie-poster" class="img-fuid"></img>`
      modalDate.innerText = 'Release date: '+data.release_date
      modalDescription.innerText = data.description
    })
}

// 點選後加到favorite
function addToFavorite(id) {
  const list = JSON.parse(localStorage.getItem('favoriteMovies')) || []
  const movie = movies.find(el=>el.id === id)
  if (list.some(el=>el.id===id)){
    return alert('電影已經在收藏清單')
  }
  list.push(movie);
  localStorage.setItem("favoriteMovies", JSON.stringify(list))
}

// 點選卡片的不同位置，可以啟動addToFavorite或showMovieModel
dataPanel.addEventListener('click',(e)=>{
  const target = e.target;
  if ( target.matches('.btn-show-movie')) {
    showMovieModal(Number(target.dataset.id))  //把str轉成數字
  }
  if ( target.matches('.btn-add-favorite')) {
    // 加入收藏
    addToFavorite(Number(target.dataset.id))
  }
})

// 點選不同頁的號碼，會重新render分頁器，而且標示目前頁面
paginator.addEventListener('click', (e)=>{
  if (e.target.tagName !== 'A') return
  const page = Number(e.target.dataset.page)
  renderMovieList(getMoviesByPage(page))
  // 更新目前頁數
  thePage = page
  markThisPage(thePage)
})

// 標註目前頁碼
function markThisPage(page){
  const data = filteredMovies.length ? filteredMovies : movies
  renderPaginator(data.length)
  const thisPage = document.querySelectorAll('.page-link')[page-1]
  thisPage.style.backgroundColor = "lightgray"
}

searchForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  const keyword = searchInput.value.trim().toLowerCase()
  filteredMovies = movies.filter( movie=> movie.title.toLowerCase().includes(keyword) )
  if(filteredMovies.length === 0) {
    return alert('cannot find anyone')
  }
  renderPaginator(filteredMovies.length)
  renderMovieList(getMoviesByPage(1))
  markThisPage(1)
  // 更新目前頁數
  thePage =1
})

axios.get(INDEX_URL)
  .then(function(response){
    // handle success
    movies.push(... response.data.results)
    //renderMovieList(movies)
    renderPaginator(movies.length)
    renderMovieList(getMoviesByPage(1))
    markThisPage(1)
  })


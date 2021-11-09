const BASE_URL = 'https://movie-list.alphacamp.io'
const INDEX_URL = BASE_URL + '/api/v1/movies/'
const POSTER_URL = BASE_URL + '/posters/'

const movies = []
const dataPanel = document.querySelector('#data-panel')
const searchForm = document.querySelector('#search-form')
const searchInput = document.querySelector('#search-input')

movies.push(... JSON.parse(localStorage.getItem('favoriteMovies')))
renderMovieList(movies)

function renderMovieList(data) {
  let rawHTML = ''
  // process data
  data.forEach(el=>{
    rawHTML += `<div class="col-sm-3">
        <div class="mb-2">
          <div class="card">
            <img
              src=${POSTER_URL+el.image}
              class="card-img-top" alt="Movie Poster" />
            <div class="card-body">
              <h5 class="card-title">${el.title}</h5>
            </div>
            <div class="card-footer">
              <button class="btn btn-primary btn-show-movie" data-toggle="modal" data-target="#movie-modal" data-id="${el.id}">More</button>
              <button class="btn btn-danger btn-remove-favorite" data-id="${el.id}">x</button>
            </div>
          </div>
        </div>
      </div>`
  })
  dataPanel.innerHTML = rawHTML
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

/*
function addToFavorite(id) {
  const list = JSON.parse(localStorage.getItem('favoriteMovies')) || []
  const movie = movies.find(el=>el.id === id)
  if (list.some(el=>el.id===id)){
    return alert('電影已經在收藏清單')
  }
  list.push(movie);
  localStorage.setItem("favoriteMovies", JSON.stringify(list))
}
*/

function removeFromFavorite(id){
  //這裡加上兩個條件控制：一旦收藏清單是空的，或傳入的 id 在收藏清單中不存在，就結束這個函式。
  if (!movies || !movies.length) return 

  //先找到id在陣列的位置
  const index = movies.findIndex(movie => movie.id === id)
  //把原本的清單陣列，刪除掉本來的那個id
  movies.splice(index,1)
  //把新的陣列存進 localStorage
  localStorage.setItem('favoriteMovies', JSON.stringify(movies))
  //render
  renderMovieList(movies)
}

dataPanel.addEventListener('click',(e)=>{
  const target = e.target;
  if ( target.matches('.btn-show-movie')) {
    showMovieModal(Number(target.dataset.id))  //把str轉成數字
  }
  if ( target.matches('.btn-remove-favorite')) {
    //addToFavorite(Number(target.dataset.id))
    removeFromFavorite(Number(target.dataset.id))
  }
})

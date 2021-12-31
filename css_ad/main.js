// target the input element
//const input = document.getElementById("action__input_1");
// click handler
//const toggleMenu = event => {
//  // target the menu element
//  const menu = document.getElementById("action__menu_1");
//  menu.classList.toggle("hidden");
//};
// bind the event
//input.addEventListener("click", toggleMenu);

// dark mode
// target the switch element
const darkModeToggle = document.getElementById("dark__mode__toggle");
// toggle handler
const darkModeToggleHandler = event => {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
};
// bind the event
darkModeToggle.addEventListener("change", darkModeToggleHandler);


// render the complete table
const table = document.querySelector('.table__body')
function renderTable (){
  let htmloftable = '';
  // suppose 15 rows
  for (let i = 1; i<21; i++) {
    htmloftable += `<tr class="table__row">
        <td class="table__cell table__cell--checkbox">
          <input type="checkbox" />
        </td>
        <td class="table__cell table__cell--id">${i}</td>
        <td class="table__cell table__cell--name">Name</td>
        <td class="table__cell table__cell--advertiser">
          <span class="cell__advertiser__line">Advertiser</span>
          <span class="cell__advertiser__line cell__advertiser__line--group">Group</span>
        </td>
        <td class="table__cell table__cell--description">Description</td>
        <td class="table__cell table__cell--price">Price</td>
        <td class="table__cell table__cell--starttime">Start Time</td>
        <td class="table__cell table__cell--endtime">End Time</td>
        <td class="table__cell table__cell--action">
          <img class="cell__action__icon"
            src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/menu.svg"
            id="action__input_${i}" alt="menu" />
          <!-- menu -->
          <div class="action__menu hidden" role="dialog" aria-modal="true" aria-labelledby="action__input_${i}" id="action__menu_${i}">
            <menu class="menu__body">
              <menuitem class="menu__item">
              <img
                src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/duplicate.svg"
                class="menu__item__icon" />
              <span>Duplicate</span>
              </menuitem>
              <menuitem class="menu__item">
              <img
                src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/edit.svg"
                class="menu__item__icon" />
              <span>Edit</span>
              </menuitem>
              <menuitem class="menu__item">
              <img
                src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/delete.svg"
                class="menu__item__icon" />
              <span>Delete</span>
              </menuitem>
            </menu>
          </div>
        </td>
      </tr>`
  }
  table.innerHTML = htmloftable;
}
renderTable()

// target the input element
const inputs = document.querySelectorAll('.cell__action__icon')
// defind toggleMenu
function toggleMenu(e){
  const menu = e.target.nextElementSibling
  menu.classList.toggle('hidden')
}
// bind the event
inputs.forEach( el => {
  el.addEventListener('click', toggleMenu)
})


// 被選擇的row要更換背景
// 取得所有的row的那一格checklist
const checkboxes = document.querySelectorAll('.table__body .table__cell--checkbox')
// define handlers
function toggleCheckbox(e){
  // 取得整條row
  const row = e.target.parentNode.parentNode
  row.classList.toggle('mainColor')
}

// 只要row的checklist改變，就改變整個row的背景
checkboxes.forEach( el => {
  el.addEventListener('change', toggleCheckbox)
})

// 全選的功能設置
let checkall = document.querySelector('#checkall');
checkall.addEventListener('change', () => {
  const inputs = document.querySelectorAll('.table__body input')
  inputs.forEach( el => {
    if (checkall.checked){
      el.checked = true
      el.parentNode.parentNode.classList.add('mainColor')
    } else {
      el.checked = false
      el.parentNode.parentNode.classList.remove('mainColor')
    }
  })
})

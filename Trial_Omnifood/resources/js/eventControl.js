var menuClick = document.querySelector('ul.main-nav');
// var menuClick = document.getElementsByClassName('main-nav');
menuClick.addEventListener('mouseover', function() {
  // this.innerHTML = `
  // <span>MENU</span>
  // <div class="sub-menu-list">
  // <li class="sub-menu"><a href="">Food delivery</a></li>
  // <li class="sub-menu"><a href="">How it works</a></li>
  // <li class="sub-menu"><a href="">Our cities</a></li>
  // <li class="sub-menu"><a href="">Sign up</a></li>
  // </div>`
  // console.dir(this.childNodes[3].className);
  this.childNodes[3].className = 'show-list'
});

// const menuOut = document.querySelector('div.sub-menu-list');
// document.getElementsByClassName('main-nav').addEventListener('mouseout', function() {
//   console.log(this);
//   this.innerHTML = "<span>MENU</span>";
// });

var showList = document.querySelector('li.sub-menu');
menuClick.addEventListener('mouseout', function() {
  // this.parentNode.className = 'sub-menu-list';
  this.childNodes[3].className = 'sub-menu-list'
  console.dir(this.childNodes[3].className);

})
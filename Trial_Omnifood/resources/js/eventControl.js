var menuClick = document.querySelector('ul.main-nav');
// var menuClick = document.getElementsByClassName('main-nav');
menuClick.addEventListener('mouseover', function() {
  this.innerHTML = `<span>MENU</span>
  <div class="sub-menu-list">
  <li class="sub-menu"><a href="">Food delivery</a></li>
  <li class="sub-menu"><a href="">How it works</a></li>
  <li class="sub-menu"><a href="">Our cities</a></li>
  <li class="sub-menu"><a href="">Sign up</a></li>
  </div>`
  console.log(this);
});

// const menuOut = document.querySelector('div.sub-menu-list');
document.getElementsByClassName('main-nav').addEventListener('mouseout', function() {
  console.log(this);
  this.innerHTML = "<span>MENU</span>";
});
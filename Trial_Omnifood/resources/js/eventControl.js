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
  // console.dir(this.childNodes);
  this.childNodes[3].childNodes[1].className = 'show-list'
});

// const menuOut = document.querySelector('div.sub-menu-list');
// document.getElementsByClassName('main-nav').addEventListener('mouseout', function() {
//   console.log(this);
//   this.innerHTML = "<span>MENU</span>";
// });

var showList = document.querySelector('li.sub-menu');
menuClick.addEventListener('mouseout', function() {
  // this.parentNode.className = 'sub-menu-list';
  this.childNodes[3].childNodes[1].className = 'sub-menu-list'
  // console.dir(this.childNodes[3].className);
})

const slideRight = document.querySelector('button.btn-right')
const slideLeft = document.querySelector('button.btn-left')
// bubbling으로 이벤트를 캐치할 수도 있다. 그러면 DOM 선택을 하나만 해도 될 것이다. 수정필요.
let n = 886;

slideRight.addEventListener('click', (e) => {

  if (e.target.parentNode.childNodes[7].childNodes[1].style.transform !== '') {
    n = n + 886;
    e.target.parentNode.childNodes[7].childNodes[1].style.transform = `translateX(-${n}px)`;
    e.target.parentNode.childNodes[7].childNodes[1].style.transition = `transform 1s`
    console.log('not first', n);
    return n
  }
  // 누적되는 이동 px을 전역변수에 재할당하기 위해서 return 한다.. 전역변수를 사용 안 하려면? 계속 이동하기 위해서는 px 값을 계속 저장하고 있어야 함
  //

  if (e.target.parentNode.childNodes[7].childNodes[1].style.transform === '') {
    e.target.parentNode.childNodes[7].childNodes[1].style.transform = `translateX(-${n}px)`;
    e.target.parentNode.childNodes[7].childNodes[1].style.transition = `transform 1s`
    console.log('first', n)
  }
})

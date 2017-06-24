# 패스트캠퍼스 HTML & CSS 캠프 11번째 수업

## TOC
* JavaScript 101 (2 Weeks)
  * Brief history of JavaScript
  * DOM
  * Variables
  * Function
  * Scope
  * Event
* Web A11Y
* 복습
* Wired
  * https://www.wired.com/
  * 과제 (3 Weeks)

## Brief history of JavaScript
* 자바스크립트를 왜 쓸까?
  * Static => Dynamic
  * HTML이라는 언어는 정적 언어
  * HTML은 데이터를 불러오거나, 상태를 저장하거나 하지 않음
* 유저들은 동적인 컨텐츠를 원함
  * A라는 버튼을 눌렀더니 경고창이 뜸 => 자바스크립트
  * button이라는 요소는 JS가 없었으면 존재하지 않았을 요소
* 자바스크립트의 창시자 : 브랜든 아이크 (brendan eich든
  * Netscape (Navigator라는 브라우저를 만들던 회사)
  * 내가 10일 안에 Scheme을 브라우저에서 돌아가게 만들겠다.
    * Scheme이라는 언어는 함수형 프로그래밍 언어
    * Scheme + Perl + C++ (여러 언어들이 섞임) === JavaScript (10일만에 만들어짐)
    * 처음에 나왔을 떄 이름은 Mocha (넷스케이프의 CEO가 지어줌)
    * Mocha => liveScript => (마케팅) JavaScript
    * Java라는 언어와 JS의 연관도는 0
  * JavaScript라는 언어를 만든 곳은 Netscape
    * 특정한 회사에 귀속되어있는 언어
    * ECMA International이라는 곳에서 표준화
    * ECMA Script (ECMA-262 문서가 JS의 표준버전)
    * ECAM Script Version 6 (ECMA-2016)
    * ECAM Script Version 7 (ECMA-2017)
  * HTML을 어디서 만들었을까?
    * CERN (유럽원자핵공동연구소, Tim Berners LEE)
    * 특정한 회사에 언어가 귀속되어서는 안된다.
    * HTML은 IETF라는 곳에서 표준화
  * 플래시는 왜 망했을까?
    * 2006년도까지만 해도 대부분의 웹사이트에서 플래시를 사용함
    * 어도비에 귀속되어 있음.
    * 플래시에 버그가 남. => 누가 해결? (어도비)
    * 버그가 나거나 큰 이슈가 생겼을 때 그 책임을 특정 회사가 지고있고, 
      해당 회사에서 이슈를 해결해주기 전까지는 할 수 있는 일이 X
    * 스티브 잡스가 아이폰에서 플래시를 못쓰게 한 거
    * https://www.youtube.com/watch?v=LkNeKRHro0k
  * 자바스크립트는 최초에 10일만에 만들어진 언어 = 개판
    * 어쩔 수 없이 써야함 = 브라우저에서 지원하는 유일한 스크립트 언어
    * 현재 최신 버전 = ECMA 2017
    * http://kangax.github.io/compat-table/es6/
  * 여러분들이 회사에 돌아가면 아마 ES5를 쓸 가능성이 높음
    * babel을 이용하면 ES6 코드를 ES5로 바꿀 수 있음
    * https://babeljs.io/

## DOM
* DOM (Document Object Model)
  * HTML과 JavaScript는 다른 언어
  * JavaScript와 HTML은 서로 어떻게 상호작용할까?
  * DOM
    * HTML과 JavaScript를 상호작용할 수 있도록 하는 API
    * API라는 건 다른 언어에서 이 언어를 사용할 수 있도록 뚫어주는 것
    * Google MAP API
  * 여러분들이 JS를 이용해서 HTML을 사용하려면 반드시 DOM을 활용해야 함
  * DOM이 개떡같음.............
* 특정 요소를 가져올 때 : `document.querySelector("#header div");`
  * IE9부터 querySelector를 지원 (IE8부터 부분 지원)
  * 예전: document.getElementById("header").getElementsByTagName("div")[1]
* jQuery라는 게 나옴
  * IE대응하려면 정말 힘든데 jQuery를 이용하면 기본적으로는 대응이 돼
* 모든 HTML 요소는 1:1로 DOM과 매칭
  * `<div>` - `HTMLDivElement`
  * `<p>` - `HTMLPElement`
  * 기본적으로 여러분들이 작성한 HTML은 브라우저 해석을 거치면서 다 DOM이 생성됨
  * DOM을 이용한다 = HTML을 조작한다 = 엄청 많이 쓰임
  * 실제로 코드를 짜는 비율, DOM 관련된 코드 비율이 높을 가능성이 높다

## Variables
* 변수
  * 그릇
```
SCRIPT 1:
document.querySelector(".btn").addEventListener("click", e => {
  document.querySelector(".box").setAttribute("style", "translate:transform(5px, 0)");
})

SCRIPT 2:
var btn = document.querySelector(".btn");
var posX = 0;
btn.addEventListener("click", e => {
  var box = document.querySelector(".box");
  posX = posX + 5;
  box.setAttribute("style", "left:" + posX + "px");
})
var btn2 = btn;
```
* 변수라는 건 인간이 코드를 이해하기 쉽도록 특정한 공간(메모리)에 데이터를 넣어두는 것
* 상태를 기억하는 것

* Position:sticky;
  * 스크롤을 내리다가 특정 요소를 마주치면 해당 요소를 상단에 고정
  * 어떤 준비물이 있어야 해당 컴포넌트를 제작할 수 있을까?
  * 20분간 고민
  * 기능명세서를 잘 작성하시면 좋음
* Modal (레이어 팝업)
  1. 버튼을 클릭하면
  2. 바탕에 검은색 배경이 뜨고
  3. 그 위에서 중앙에 흰색 레이어가 뜬다.
  * 준비물
    * 버튼, 검은색 배경,커니 흰색 레이어
  * 로직
    * 어떻게 하면 버튼을 클릭할 수 있을까
    * 어떻게 하면 검은색 배경 위에 흰색 레이어를 띄울 수 있을까
    * 어떻게 하면 중앙에 흰색 레이어를 띄울 수 있을까? 
  * 번외
    * 애니메이션을 주려면 어떻게 해야할까? (FadeIn)

## Function
* 함수, 기능 (function)
  * 특정한 동작을 수행하는 것
  * 기능이 동작하려면?
    * INPUT
    * OUTPUT
    * I/O

```
SCRIPT:

// 덧셈을 하기위한 함수를 생성, 선언
// 함수는 파라미터(매개변수)를 가질 수 있음
function sum(numA, numB) {
  // SUM이라는 함수의 INPUT = numA, numB (파라미터 / 매개변수)
  // OUTPUT
  return numA + numB;
}

function sub(numA, numB) {
  return numA - numB;
}

function division(numA, numB) {
  return numA / numB;
}

function multiple(numA, numB) {
  return numA * numB;
}

// 함수를 호출
sum(2, 4);

var result = sum(2, 4);


1 + 5 * 2 - 10

sub(sum(multiple(5, 2), 1), 10)

```

### 계산기
* inputA, inputB (숫자, type="number");
* 덧셈, 뺄셈, 곱셈, 나눗셈

```
var inputA, inputB;

sum(inputA.value, inputB.value);

var result = inputA.value + inputB.value;
```

## Event
* 유저가 내 웹사이트와 상호작용하는 모든 것

### 인터페이스
* 키보드
* 마우스
* 터치(펜)

### 터치
* 터치를 시작함 (touchstart)
* 터치를 움직임 (touchmove)
* 터치를 끝냄 (touchend)

### 마우스
* 클릭 (click)
* 마우스를 누름 (mousedown)
* 마우스를 움직임 (mousemove)
* 마우스를 뗌 (mouseup)
* 마우스를 특정한 요소 위에 올려둠 (mouseover)

### 키보드
* 키를 누름 (keydown)
* 키를 뗌 (keyup)
* 키를 계속 누름 (keypress)

### 기타등등
* 스크롤할 때 (scroll);
* 특정 요소에 포커스가 갔을때 (focus);
* 포커스가 빠졌을 때 (blur);

* 유저가 어쨌던 어떤 상호작용을 해야할 때 사용을 함

```
// ELEMENT
var box = document.querySelector('.box');
var btn = document.querySelector('.btn');

btn.addEventListner('이벤트명', e => {
  
})

btn.addEventListner('이벤트명', function(e) {

})

```

* Position:sticky;
  * 스크롤을 내리다가 특정 요소를 마주치면 해당 요소를 상단에 고정
  * 어떤 준비물이 있어야 해당 컴포넌트를 제작할 수 있을까?
  * 20분간 고민
  * 기능명세서를 잘 작성하시면 좋음
  * 준비물 :
    * 스크롤이 될 대상 (body, window)
    * 특정한 요소 (sticky될 요소)
    * 스크롤의 상단 값 (pageYOffset)
    * 해당 요소의 스크롤 상단 값 (offsetY)
  * 특정 요소를 마주치면?
    * 스크롤을 하다가 (Event)
    * 상단 스크롤 값과 해당 요소의 스크롤 상단 값이 일치한다면 (로직))
    * 타겟을 조작
  * 만약 Sticky될 요소가 여러개라면?
    * 다음주에 하도록 할게요..
    * jQuery는 이미 대응되어있음....

# 화요일
## Object
## Scope












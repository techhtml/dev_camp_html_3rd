# HTML & CSS 정복캠프 10번째 수업

## 실습
* https://play.google.com
* 오늘부터 JavaScript도 다룹니다.

## play.google.com 구현을 해봅시다
* 대응 브라우저 : 최신버전의 Chrome
  * 보통 기획자나 사업부랑 이야기해서 결정
  * SI나 에이전시라면 사장님 PC 브라우저 버전
* reset.css (쓰면 좋을 거 같다.)
  * 브라우저에 기본으로 깔려있는 CSS를 초기화
  * 브라우저에 기본으로 깔려있는 CSS = 유저 에이전트 CSS
  * https://meyerweb.com/eric/tools/css/reset/
* normalize.css
  * 브라우저에 기본으로 깔려있는 CSS를 초기화
  * 모든 브라우저에서 기본으로 깔려있는 게 최대한 비슷하게 보이도록
  * 크로스 브라우징할 때 유용
* 폰트 : roboto, sans-serif'
  * roboto라는 폰트는 PC에 설치되어있지 않음
  * Roboto 웹폰트를 사용해주면 좋을 거 같다.
    * fonts.google.com (roboto)
  * 폰트 굵기 : 400(Regular), 700(bold)
* 폰트 사이즈 ?
  * 11px, 14px, 18px, 24px
  * 작은 폰트사이즈
  * 보통 폰트사이즈
  * 큰 폰트사이즈
```
SCSS: 변수
$ft-small: 11px;
$ft-medium: 14px;
$ft-large: 18px;
$ft-superlager: 24px;

body {
  font-size: $ft-small;
}
```
* 행간
  * 대부분의 브라우저의 기본 행간은 1.2(120%)
  * 1.5em (자기자신의 폰트사이즈 * 1.5)
* 자주 쓰이는 색상
  * 변수 지정
  * 내가 자주 쓰는 빨강색 - 강조
```
SCSS: 변수
$red-700: #D32F2F;
```

* SASS에는 import라는 기능
```

SCSS (Root):
styles.scss (여기서 쭉 개발)
@import "buttons";
@import "inputs";
@import "common";
@import "resets";

FILES:
buttons.scss : 버튼
inputs.scss : input
common.scss : 공통
resets.scss : 리셋
```

* 여기까지
  * 기본 작업환경 세팅
  * 폰트 관련된 내용 정리 (색상 / 사이즈 / 패밀리)
  * 모듈들을 1차로 분류
  * 개발

```
SCSS: side.scss
.side-nav {
  // wrapper class
  // namespace
  .nav {
    a {
      display: flex;
      background: white;
      &:hover {
        color: white;
      }
      &::before {
        content:'';
        display:block;
      }
    }
    .lnk-apps {
      &:hover {
        background:$green;
      }
      &::before {
        background:url("ICON_URL") center center no-repeat $green;
      }
    }
    .lnk-movies {}
    .lnk-books {}
    .lnk-news {}
    .lnk-devices {}
  }
}

### STATUS 관리
* UI의 형태가 바뀌어야하거나
* UI의 형태를 저장해야하는 경우
* 모든 케이스에 대하여 정리해놓는 것

* MAIN-NAV
* SUB-NAV

* MAIN-NAV-ON
  * 선택한 요소를 제외한 나머지는 어딘가로 사라짐
  * SUB-NAV-ON

UI는 1개만
  MAIN-NAV
  SUB-NAV (대메뉴 / 중메뉴)

if(NAV === "app") {
  sub-nav 조치
}

STATUS : APPS
1. main-nav-on 시켜서 위로 애니메이션 시킨다.
1.1. sub-nav를 display: none 시킨다.
2. main-nav-on 애니메이션이 끝나면 (1s 이후에) sub-nav를 display 시킨다.
2.1. main-nav 내부의 아이템을 바꾼다.

.main-nav {
  position: relative;
  top: 0;
  transition:1s top ease;
}
.main-nav-on {
  position: absolute;
  top: 0;
}

```

### 모듈화
* 모듈(컴포넌트)이란?
  * BassCSS
  * Bootstrap
  * 쪼갤 수 있는 가장 작은 단위 => 모듈
  * 버튼 (buttons)
  * 인풋
  * 탭메뉴
    * 버튼 모듈 + 영역
  * Carousel
    * 리스트 모듈
    * 버튼 모듈

### 모듈화 사례
* Product Module
```
HTML:
<div class="product">
  <div class="product-thumb"> => :hover
    <a href="#">
      <img src="" alt="">
      ::after
    </a>
    <button type="button" class="btn-play">재생</button>
  </div>
  <div class="product-info">
  <dl>
    <dt>Kong: Skull Island</dt>
    <dd>Action & Adventure</dd>
    <dd><div class="starcount"></div></dd>
    <dd><div class="price"></div></dd>
  </dl>
  </div>
</div>

```
* UI를 바라볼 때 꼭 해당 요소에 CSS를 넣으려는 노력
  * a요소에 CSS를 넣을거야 => 반드시 a 내부에서 다 해결
  * a 요소의 부모요소 + a 요소의 형제요소

## 라디오 라디오
* PWA & AMP
  * Google
  * 2016년
    * 올해 Google I/O - PWA, 크롬 MSG
    * Progressive Web App
      * 정말 앱같은 웹
      * 알리 익스프레스, wego
      * 단발성 서비스 (=호텔 예약, 항공권 예약)
    * AMP, Accelerated Mobile Pages
      * 더 빠른 모바일 웹사이트
      * 애매하게 못만들거면 차라리 AMP..
* Web GPU
  * APPLE
  * 머신러닝
* SVG
  * Scalable Vector Graphics
  * 벡터 조작
* Front-End 개발
  * 이제 더이상 논의할 필요는 없다
  * React를 많이 좋아해.
  * cli 도구라는 게 많이 발전했음 


## JavaScript 기초

## 질문
* express 배포를 어떻게 하나요?
* node.js 서버를 한대 사셔야 합니다.
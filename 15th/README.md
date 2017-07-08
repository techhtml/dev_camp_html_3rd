# 웹 접근성 101

## 접근성 (Accessibility, A11y)
* 웹은 누구나 사용할 수 있어야 한다. (Web for all)
* 누구나 웹을 사용할 수 있게 만드는 것 => 접근성

## 웹 콘텐츠 접근성 (Web Content Accessibility, WCA)
* 콘텐츠
  * 텍스트 (plane text)
  * 이미지 (image)
  * 비디오, 오디오 등 미디어 (video, audio)
* 웹 콘텐츠 접근성 가이드라인 2.0 (WCAG 2.0)
* 한국형 웹 콘텐츠 접근성 지침 2.1 (KWCAG 2.1)
  * 최소한 이건 지키자
* 선천적 장애인과 후천적 장애인

## 한국형 웹 콘텐츠 접근성 지침 2.1

### 인식의 용이성
#### 대체 텍스트
(적절한 대체 텍스트 제공) 
텍스트 아닌 콘텐츠는 그 의미나 용도를 인식할 수 있도록 대체 텍스트를 제공해야 한다.
```
EXAMPLE 1:
<img src="dolphin.jpg" alt="돌고래">

EXAMPLE 2:
<img src="dolphin.jpg" alt="돌고래 세마리가 바다 위를 점프하고 있다">

EXAMPLE 3: FIGURE 요소를 사용하는 방법
<figure>
  <img src="dolphin.jpg">
  <!-- 이 경우 img 요소의 alt 속성은 생략이 가능하다. --.
  <figcaption>돌고래 세마리가 바다위를 점프하고 있다.</figcaption>
</figure>

EXAMPLE 4: alt 속성값을 빈값으로 해도 크게 상관없음
<img src="dolphin.jpg" alt="">
<p>돌고래 세마리가 바다위를 점프하고 있다.</p>

EXAMPLE 5: a 요소 안에서 사용할 때 alt 속성값이 비어있다면 자동으로 뒤쪽을 먼저 읽음
<a href="#">
  <img src="dolphin.jpg" alt="">
  <p>돌고래 세마리가 바다위를 점프하고 있다.</p>
</a>
```
#### 멀티미디어 대체 수단
* (자막제공) 멀티미디어 콘텐츠에는 자막, 대본 또는 수화를 제공해야 한다.
* 플루트 연주를 어떻게 대체수단을 제공해야할까?
  * 제공을 못해도 상관없다.
* 피카소의 그림의 대체텍스트를 어떻게 제공해야할까?
  * 피카소의 ~~~ 그림

```
EXAMPLE 6:
<video>
  <source src="">
  <track src="자막파일.vtt">
</video>

EXAMPLE 7:
<video>
  <source src="">
</video>
<div class="video-scripts">
  대본
</div>

EXAMPLE 8:
비디오 자체에서 수화를 제공하면 OK
```

#### 명료성
##### 콘텐츠는 색에 관계없이 인식될 수 있어야 한다.
* 색상으로만 강조나 차트를 보여줘서는 안된다.
* 색상은 시각적인 강조를 위해서만 사용해야 한다.

##### 텍스트 콘텐츠와 배경 간의 명도 대비는 4.5 대 1 이상이어야 한다.
* 보통 흰색배경에 #555 정도가 4.5:1
* 폰트의 크기가 18px 이상인 경우 => 3:1
* 폰트의 크기가 14px 이상인데 bold인 경우 => 3:1

##### 자동으로 소리가 재생되지 않아야 한다.
* 자동으로 재생되는 소리는 3초 이내에 멈춰야 함.
* 특정 키를 이용해서 소리를 멈출 수 있게 해야한다. (대표: esc 키)

##### 이웃간 콘텐츠는 구분할 수 있어야 한다.
* 테두리를 넣어라 (border)
* 시각적 구분선을 넣어라 (border)
* 서로 다른 무늬
* 콘텐츠 배경간의 다른 명도대비
* 줄간격 및 글자간격
* 사이 간격

### 운용의 용이성
#### 입력장치 접근성
* 마우스 뿐만 아니라 키보드던 터치던 
  어떤 입력장치를 사용하더라도 웹 사이트를 사용할 수 있어야 한다.

##### 모든 기능은 키보드만으로도 사용이 가능해야한다.
* 스크립트 이슈에 조금 더 가까움
```
EXAMPLE 9:
<button type="button">버튼</button>

var btn = document.querySelector("button");
// bad
btn.addEventListener("mousedown", function(e) {
  // 마우스를 클릭할 때 이 행위를 수행할 것
})

// good
btn.addEventListener("click", function(e) {
  // 마우스를 클릭할 때 이 행위를 수행할 것
})
```

##### 키보드에 의한 초점은 논리적이어이어야 하고 시각적으로 구별 가능해야한다.
* button이나 a요소의 outline을 제거하지 말 것
* 만약 outline이 도저히 못생겨서 못쓰겠다면 다른 대체수단을 제공할 것
```
EXAMPLE 10:
a:focus, button:focus {
  /* 포커스 갔을 때 넣을 CSS */
  background: red;
}
```

##### 사용자 입력 및 컨트롤이 조작 가능해야한다.
* 컨트롤 크기 보장
* 모든 컨트롤은 대각선기준 6.0mm 이상
  * 23px 이상
  * 모바일에서는 35px 이상

#### 충분한 시간 제공

##### 시간제한이 있는 콘텐츠는 응답시간을 조절할 수 있어야 한다.
* 시간제한 콘텐츠를 사용하지 말 것
* 예외: 온라인 경매, 실시간 게임
* 이 사항을 제대로 지키고 있지 않은 대표적인 분야 : 휴대폰 인증

##### 정지 기능을 제공해야한다.
* 이동하거나 스크롤되는 콘텐츠 배제 : 쇼핑몰 상단 이미지 롤링

#### 광과민성 발작 예방
* 초당 30회 ~ 50회 이상으로 깜빡이지 말 것

#### 쉬운 네비게이션
##### 콘텐츠의 반복되는 영역은 생략 가능해야한다.
* 반복영역을 뛰어넘을 수 있는 skip navigation을 제공해야함
```
EXAMPLE 11:

.skip-nav {
  position:fixed;
  left:0;
  top:0;
}
.skip-nav a {
  position:absolute;
  left:0;
  top:-1000px;
}
.skip-nav a:focus {
  top:0;
}

<nav class="skip-nav">
  <!-- index link -->
  <a href="#login">로그인</a>
  <a href="#contents">본문영역</a>
  <a href="#footer">푸터영역</a>
</nav>

<div id="login"></div>
<div id="contents"></div>
<div id="footer"></div>

```

##### 페이지, 콘텐츠 블록에는 적절한 제목을 제공해야 한다.
* heading 잘 사용하세요.

##### 링크 텍스트를 용도나 목적을 이해할 수 있도록 제공하여야 한다.
* 링크에 텍스트만 잘 넣어주십시오.
```
EXAMPLE 12:
<a href="#">
☺️ <span class="blind">네이버＜/span>
</a>

EXAMPLE 13:
<h4>공지사항</h4>
<ul>
<li>공지사항 1</li>
<li>공지사항 2</li>
<li>공지사항 3</li>
</ul>
<a href="#"><span class="blind">공지사항</span> 더보기</a>

```

### 이해의 용이성
#### 가독성
* 웹페이지의 언어를 명시할 것

```
EXAMPLE 14:
<html lang="ko">
```

#### 예측 가능성
* 유저가 의도하지 않은 기능은 실행되지 않아야 한다.
  * 포커스를 이동하던 중 페이지가 이동됨
  * 마우스를 특정 위치에 5초 이상 두면 비디오 자동재생
* 사용자가 인지하지 못한 상황에서 새창이나 팝업이 떠서는 안됨
* Form에서 유저가 입력할 값을 다 입력하기 전에 submit 버튼을 활성화시키지 않는다
* 새창이나 팝업은 되도록이면 유저가 직접 선택 가능하도록
* 레이어 팝업 - 안쓰면 좋다 (modal)

#### 콘텐츠의 논리성
* 시각적 측면 뿐 아니라 마크업 관점에서 콘텐츠를 논리적으로 전개해야한다.
```
EXAMPLE 14:
<h4>공지사항</h4>
<ul>
<li>공지사항 1</li>
<li>공지사항 2</li>
<li>공지사항 3</li>
</ul>
<a href="#"><span class="blind">공지사항</span> 더보기</a>
```

* 표(table)를 잘 작성해주세요.
```
EXAMPLE 15:
<table>
  <caption>테이블의 제목</caption>
  <thead> <!-- 제목셀 -->
    <tr>
      <th>제목</th>
      <th>내용</th>
    </tr>
  </thead>
  <tbody> <!-- 내용셀 -->
    <tr>
      <td>조은 바보다</td>
      <td>치킨 먹고싶다</td>
    </tr>
    <tr>
      <td>조은 바보다</td>
      <td>치킨 먹고싶다</td>
    </tr>
    <tr>
      <td>조은 바보다</td>
      <td>치킨 먹고싶다</td>
    </tr>
  </tbody>
</table>
```

#### 입력 도움
* input 요소에는 반드시 label을 함께 제공할 것
* 입력 오류가 발생했을 경우 수정할 수 있게 하야야 한다.
  * 로그인을 하는데, 아이디나 비밀번호가 틀려서 로그인을 못함.
  * 어디가 틀렸는 지 알려줘야 함

### 견고성
* 웹 표준을 준수할 것

### 측정도구
* chromerens
* N-wax

## WAI-ARIA
* 인터넷 어플리케이션에 대한 접근성을 준수하기 위한 기술

### Role Model
* 특정 요소에 역할을 부여

```
EXAMPLE 16:

<header role="banner">
  <h1>제목</h1>
</header>

```

* 표지판(landmark) Role을 가진 속성들
  * banner - 이 웹사이트에서 가장 먼저 봐야하는 콘텐츠 
  * search - 검색영역
  * navigation - 네비게이션 `<nav>`
  * main - 페이지의 주된 내용이 시작했음을 알림 `<main>`
  * contentinfo - 콘텐츠의 출처, 저작권, 발행일 등 콘텐츠에 대한 정보를 담고있는
  * complementary - 내용을 보충하는 데, 얘만으로도 의미는 있는 `aside`
  * application - 웹 어플리케이션을 담고 있는 내용

* 문서구조
  * document - 문서
  * article - `<article>`
  * definition - 정의 `<def>`
  * directory - 차례나 순서
  * heading - 헤딩 `h1` ~ `h6`
  * img - 이미지 `<img>`
  * list - 리스트 (그룹) - `ul`, `ol`
  * listitem - `li`
  * math - `math`
  * note - 참고내용이나 보충내용
  * row - 테이블의 한 행 `tr`
  * rowheader - 테이블의 헤더 `thead`
```
  <article>

  </article>

  === 둘은 의미상 동일

  <div role="article">

  </div>
```
### State and Properties
* 자바스크립트로 만든 어플리케이션의 상태를 보관

## 접근성을 준수
* 접근성이란 게 작업의 일부가 아니라 따로 해야한다 X
* 원래 작업을 하면서 접근성을 준수하여야 함 (4.5 : 1)
* 혼자 할 일이 아니라 유관부서와 협업하여 해야하는 일

## 레퍼런스
* http://www.wah.or.kr/Participation/guide.asp
* https://developer.mozilla.org/ko/docs/Web/Accessibility/ARIA
* https://github.com/h5bp/Front-end-Developer-Interview-Questions/tree/master/Translations/Korean

## ETC
* SEO (Search Engine Optimization / 검색이 잘 되게)
  * 구글 SEO
    * robots.txt 제공
    * 사이트의 마크업 구조를 잘 짜면 OK
    * 퍼포먼스 고민을 잘하면 OK
    * Google Ananlytics

* 웹앱만들기
  * React던 Angular던 Vue던 프론트엔트 프레임웤을 쓰는 걸 권장
  * 라우팅을 뻇어서 프론트엔드에서만 페이지가 전환되도록
  * Progressive Web Apps (PWA)
    * 웹을 앱처럼 사용하자
    * service worker
    * web manifest
    * https://developers.google.com/web/ilt/pwa/
    * https://developers.google.com/web/fundamentals/design-and-ui/browser-customization/

* 웹팩
  * 프론트엔드 배울 때 쓰시면 됨
  * 여러개의 파일을 하나로 묶어주는 역할

* SVG
  * `<svg>` 요소를 이용해서 svg 코드를 import 해올 수 있음.
  * https://css-tricks.com/using-svg/

* SCSS 활용법에 대해 좀 더 알고싶다.
  * variables (변수)
  * import (포함)
  * mixin

```

@mixin transform($posX, $posY) {
  -moz-transform: translate($posX, $posY);
  -webkit-transform: translate($posX, $posY);
  transform: translate($posX, $posY);
}

.btn {
  @include transform(0, 0);
}
```

* CSS 커스텀 속성
  * 상용화 단계 X
  * 아직 쓰기에는 시기가 적절하지 못하다
  * https://brunch.co.kr/@techhtml/27

* 자바스크립트 관련된 내용은 생략 !
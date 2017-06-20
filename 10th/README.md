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
@import("buttons");
@import("inputs");
@import("common");
@import("resets");

FILES:
buttons.scss : 버튼
inputs.scss : input
common.scss : 공통
_resets.scss : 리셋
```

## JavaScript 기초

## 질문
* express 배포를 어떻게 하나요?
* node.js 서버를 한대 사셔야 합니다.
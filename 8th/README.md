# 8번째 수업
* 중간평가
* 복습!

## 작업 환경 세팅
* 브라우저 지원율
    * 보통 IE 10 이상
    * 사장님 대상 사이트 IE9까지
    * 크롬, 사파리, 파이어폭스
* 서버
    * node.js + express
* CSS PreProcessor
    * 기본적으로는 CSS 문법
    * 다만 일부 기능이나 문법을 확장
    * SASS (LESS는 거의...)
* UI 개발
    * HTML, CSS에 더 가까운
    * 유저가 직접 사용하는 인터페이스를 개발
    * 예) Input
* 프론트엔드 개발
    * JS 영역
    * 서버와 UI 사이의 비즈니스 로직 설계 및 구현
    * 유저 인터렉션을 구현
* Carousel
    * 돌아가는 화면 (UI 개발)
    * 돌아가면서 데이터가 바뀐다 (프론트엔드 개발)
* 근래의 작업환경
    * 서버 : express
    * 뷰엔진 : hbs(handlebars, HTML에 가장 유사해서)
    * CSS : SASS
    * 태스크 러너 : 귀찮은 걸 대신해주는 => gulp
    * 빌드 도구 : webpack
    * 프론트엔드 : angular, react, vue, backbone, ember

## 생성된 폴더

* public
    * 리소스 (이미지, 스타일시트, JS)
* routes
    * 페이지
* views
    * 실제 작업할 HTML
    * 확장자 : hbs
        * layout.hbs
            * 공통 레이아웃
        * index.hbs
            * 그냥 VIEW
            * 보통은 메인 페이지
        * error.hbs
            * 그냥 VIEW
            * 보통 에러 페이지

# 작업순서
* 환경 세팅
* HTML을 먼저 짜요
    * 큰 화면
* CSS를 짜요
    * 큰 레이아웃 단위

# express를 사용하시구요
```
$ express --view hbs --css sass <프로젝트명>
```
- app.js 파일이 생성되었을 것임
- `indentedSyntax`를 true에서 false로 변경
- styles.sass => styles.scss
- `npm start`






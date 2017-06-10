# HTML & CSS 정복캠프 7번째 수업

## 과제는 Gist에 올려주세요
- https://gist.github.com
- 가독성

## 확장 가능한 의미있는 CSS 구성
- top (GNB)
    - top이라는 클래스명을 쓴 이유?
    - 제일 위에 있어서
    - 클래스명은 적어도 스타일에 의존성 X
    - 클래스명을 지을 때는 되도록이면 해당 요소의 목적
- 비주얼에 속았다.
    - 버튼의 공통 UI / `.btn`
    - `.btn-menu`
    - `.btn-more`
- 유튜브 메인을 현업에서는 얼마나 걸릴까요?
    - 저는 하루면 짜요 (4~6hour)
    - 유튜브를 구현
        - HTML을 짜임새 있게 짜야하며
        - 특정 요소를 추가한다고 해서 레이아웃이 깨지지 않게
        - CSS는 네이밍이 직관적이어서
        - 백엔드 개발자도 이해할 수 있게
    - OOCSS (객체 지향 CSS)

## How Browser Works (Simple)
- 브라우저
    - 웹 페이지를 보여주기 위한 클라이언트(어플리케이션)
- 대표적인 브라우저
    - Chrome
    - IE (Internet Explorer), MS Edge
    - Safari
    - Firefox
    - Opera
- 브라우저명 => 브라우저 버전, 브라우저 엔진
    - Chrome, Opera => Blink engine
    - Safari => Webkit2
    - IE, MS Edge => Trident
    - Firefox => Gecko -> Servo(바꾸는 중)
- 브라우저의 동작 방식
    - https://naver.com 방문
        - 리소스 다운로드 (HTML 파일)
        - HTML 파일을 읽어옴
        - HTML 파일 내에서 외부 리소스 찾음
            - Image
            - CSS
            - Script
            - Embed (Video, Audio)
        - 외부 리소스를 읽어옴
    - HTML 파일을 읽어옴 (병렬)
    - CSS 파일도 읽어옴 (병렬)
        - 유의미한 단위로 코드를 쪼갬
        - 기계가 알아들을 수 있게 해석
        - HTML은 DOM Tree 생성
        - CSS는 스타일 트리 생성
        - HTML과 CSS를 결합 (compound)
        - 결합시킨 데이터를 바탕으로 렌더 트리 생성
        - 렌더 트리를 화면에 뿌립니다 (Rednering)
        - 화면에 뿌리면서 CSS가 충돌
        - 배치 (Layout, Reflow)
        - 배치가 끝나면 Rendering 끝
    - 자바스크립트를 만나는 경우
        - 병렬로 해석하던 걸 멈추고,
        - 자바스크립트 해석을 시작합니다.
- Gecko reflow visualization
- 렌더링이 다 끝남
    - 특정 요소 A를 특정 위치로 이동
    - 이 과정에서 reflow(layout)이 발생함
    - reflow가 발생한다는건 프레임 드랍

## CSS 애니메이션 (Transform, Transition, animation, will-change)
- 애니메이션
    - 상태가 A에서 B로 바뀔 때 그 사이 과정을 늘어뜨리는 것
- 상태 A, 상태 B
    - 상태 A : 초기 값
    - 상태 B : 완료 값
- 속성
    - transform
        - 변형
            - 이동 (translate)
            - 회전 (rotate)
            - 크기 조정 (scale)
            - 왜곡 (skew)
        - transform: translate(0, 0) scale(3);
        - reflow(layout)를 발생시키지 않음
        - transform에 있는 속성이 다른 요소에 영향을 미칠 가능성 0
    - transition
        - 내가 시점이 제어 불가능한 경우
        - animation이랑 비슷함
    - animation
        - 내가 시점을 제어 가능한 경우
        - 특정 요소를 애니메이션 시키는 속성
        - @keyframes animation-name {}
        - animation: animation-name animation-duration;
        - animation-fill-mode: forwards
        - animation: infinite;
        - animation-delay: 3s;
    - will-change
        - transform 요소 안에서 position: fixed가 안먹음
        - 애니메이션을 넣어야하는 데 transform은 사용 못해
            - 애니메이션이 시작할 때 클래스를 넣었다가
            - 애니메이션이 끝났을 때 클래스를 뺌
        - 프레임 드랍
        - will-change
            - 애니메이션이 생길 요소를 사전에 알려주는 속성
            - 브라우저가 사전에 해당 요소에 CPU를 많이 할당할 수 있게
        - 많은 요소에 사용하면 CPU 사용량이 높아져서 그지같아짐
        - 극도의 성능 최적화를 위해 사용함
- https://csstriggers.com/

## CSS Values & Units (값과 단위)
- Textual Data Types
    - CSS Wide Keywords
        - `initial`
            - 해당 속성의 기본값을 사용하겠다.
        - `inherit`
            - 해당 속성이 부모요소에 선언되어 있는 경우,
            - 해당 속성을 부모요소로부터 상속받겠다
        - `unset`
            - 상속 받을 수 있다면 상속
            - 못받는다면 `initial`
    - `"String"`
    ```
    body {
        font-family: "APPLE SD Gothic NEO", sans-serif;
    }
    a::before {
        content: "문자열"
    }
    ```
    - `url("Resource URL")`
- Numeric Data Types
    - Int (정수)
        - 10
        - 20
    - Number (숫자)
        - 10
        - 10.1
    - Percentage (퍼센트)
        - width: 100%;
            - 부모요소를 기준
        - font-size: 100%;
            - 부모요소를 기준
        - `position: absolute;left: 100%;`
             - 부모요소 기준 
        - transform: translate(100%, 0);
            - 자기자신 기준
- Distance Units: the <length> type
    - Relative
        - em
            - em : 자기 자신의 폰트 사이즈 = 1em
            - a {font-size:14px;}
        - rem
            - root em : root 요소(HTML 요소)의 폰트 사이즈 = 
            - 1rem
                - html {font-size: 10px;}
                - body {font-size: 1.6rem;}
        - vw
            - viewport width
            - 아이폰의 가로사이즈 = ?
            - 아이폰SE의 가로사이즈 = 320px
            - 1vw = (320 / 100) = 3.2
            - (해당 기기의 가로 사이즈 / 100) = 1vw
            - 100vw = 해당 기기의 가로 사이즈
        - vh
            - (해당 기기의 세로 사이즈 / 100) = 1vh
            - 100vh === 해당 기기의 세로 사이즈
        - vmin
            - (viewport 높이와 가로 중 작은 거 기준 / 100)
            - 아이폰5 (320 x 480)
            - 1vw = 1vmin = (320 / 100)
        - vmax
            - (viewport 높이와 가로 중 큰 거 기준 / 100)
            - 아이폰5 (320 x 480)
            - 1vh = 1vmax = (320 / 100)
    - Absolute
        - px
            - 아이폰 5
            - 4 in
                - 1인치 = 2.54cm = 96px
                - 4인치 = 10.16cm = 384px
            - 가로 사이즈 : 58.6mm
            - 세로 사이즈 : 123.8mm
            - 해상도 : 640 x 1136
            - 실제로 보는 크기
            - 320 x 568
                - 물리적인 단위와 실제 픽셀 갯수 다른 경우
                - 레티나
            - 해상도 : 640 x 1136
                - width: 640px
            - 실제로 보여지는(하드웨어) 픽셀 갯수
                - width: 320px
            - 픽셀의 갯수가 실제 보여지는 픽셀보다 많으니까
            - 이미지등을 사용할 떄 2배율 이미지, 3배율 이미지
        - 갤럭시 S8
            - width x height : 360 x 740
            - 1440 x 2960 (4배) / 2배정도의 이미지만 사용
            - 아이콘, 로고
            - 벡터 그래픽 아이콘 (svg / 모든 해상도를 대응)
                - 브라우저 지원율.. (IE는....)
- Other Quantities
    - deg (angle)
        - `transform: rotate(360deg)`;
    - s, ms (time)
        - animation: 1582ms loading ease-in-out;
- Functional Notations
    - calc()
        - 계산
        - .btn { width: calc(100px + 20%); }
        - IE가 지원하지 않음, IE10부터 지원
    - IE10부터 지원하지만... 
    - 안드로이드는............. 5.0부터 지원....
    - 이전 브라우저에서 레이아웃이 깨지지 않았으면 좋겠어요

## 실습
- https://play.google.com/store
- 선정이유
    1. 이미지를 많이 쓰는 사이트
    2. 생각해볼 요인이 많아서
- 메인 페이지 1개, 서브 페이지 1개
- 생각해보면 좋은 것들
    1. Float 레이아웃 말고 Flexbox로 레이아웃 짜보기
    2. 공통 CSS를 어떻게 관리하면 좋을 지
    3. 클래스 네이밍
    4. 이걸 배포할 것이다
- 과제기간 2주
- 과제를 잘했다
    1. VIEW가 흐트러짐 없이 잘 구성되어있다.
    2. 네이밍을 고민한 흔적이 보였으면 좋겠습니다.
- 피드백은 두번까지 해드리겠습니다
- 테이블로 레이아웃 짜지 마세요.

## ETC
- http://caniuse.com/
- How Publisher Works?
    - 면접을 보러 들어갔음
    - UI개발이라는 직군 / 특수한 직군
        - 안드로이드 X
        - IOS X
        - 윈도우 어플리케이션 클라이언트 개발자
    - UI개발 직군이 왜 생겼을까?
        - 디자이너가 개발을 배우면...
        - UI개발 직군은 왜 생겼냐면... 일이 너무 많아서
        - 웹 디자이너
            - 2012년 (SK 커뮤니케이션즈)
                - 신입입사
                - UI개발팀 (UXD센터 / 디자인 센터 산하)
            - 2017년 현재 (구글)
                - UX Engineer (Front-end, Design)
                - 디자인 밀접도가 굉장히 높은 직군
        - UI 개발 직군이 생긴 이유
            - 일은 많은데
            - 디자이너가 그 일까지 하면 비효율적
    - 지금 UI 개발 직군의 상태
        - 애매함
            - HTML / CSS가 충분히 발전했고
            - 디자이너가 충분히 개발을 배워서 할 수 있는 수준
        - 프론트엔드라는 직군이 새로이 생겨남 (2012년)
            - backbone
            - ember
            - angular
            - react
            - vuejs
        - 브라우저가 발전하면서 인터렉션에 기대하는 기대도가 높아짐
        - 유저의 수준이 높아짐
            - 페이스북이 최초에 개발되었을 때는 페이지 이동 방식
            - 개선되면서 페이지가 바뀌지 않고 SPA 방식
    - 면접관
        - UI 개발의 Next는 뭘까요?
        - 미래가 있어야 변화하는데....
        - 스킬셋
            - gulp, grunt
            - express, node.js
            - front-end framework
                - angular, react, vue
            - JavaScript, jQuery, ECMAScript
            - 영어 (기초적인 수준)
            - HTML, CSS
                - Float랑 Flexbox의 차이를 설명
                - Flexbox에 대해서 저한테 설명
                - Transform을 2d로 쓸 때랑 3d로 쓸 떄의 차이
                - video 요소가 모바일에서는 전체화면으로 뜨는데 어떻게 전체화면을 막을 수 있을까요?
    - 제가 생각하는 UI 개발의 NEXT
        - 브라우저에 대한 심도있는 이해
        - 각 스펙에 대한 심도있는 이해
        - 특정 속성, 특정 요소를 썼을 때 주의해야할 사항에 대한 숙지
        - ECMA에 대한 심도 있는 이해
        - HTTP에 대한 심도 있는 이해
        - 웹에 대한 심도있는 이해
        - UX에 대해서 이해할 필요가 있다



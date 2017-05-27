# HTML & CSS 정복캠프 4번째 수업
* Network 문제가 있음. 

## CSS (CSS 2.1)
### CSS Background
- 특정한 요소의 배경을 지정
- div { background-color: red }
- 기본 배경 : 투명
- html 요소나 body 요소에 기본 배경색이 들어가있나요?

* background-image (이미지)
* background-color (색상)
* background-position (위치)
* background-repeat (반복)
* background-size (크기)

### CSS Color
* keywords
    * Reversed keyword (미리 정의된 키워드)
    * color: white; (흰색)
        * rgb(255,255,255)
        * #ffffff
        * rgba(255,255,255,1)
    * color: green; (초록색)
    * color: lime; (초록색)
    * color: #2ac1bc; (민트, 저희회사)
    * color: #eb2000; (빨강, 네이트)
    * a 요소는 원래 기본 색상 가지고 있음
        * a 요소가 부모요소의 색상을 상속 - inherit
        * 현재 이 CSS를 적용한 요소의 color 속성의 값 - currentColor
* hash (제일 많이 쓰여요)
    * 16비트 기준으로 색상을 나타내요
    * #FFFFFF - 색상 (흰색)
    * #000000 - 색상 (검은색)
    * #000000, #000
    * #2fc2fc, #2fc
* rgba
    * red (빨강)
    * green (초록)
    * blue (파랑)
    * Alpha (투명도)
        * 0% (투명), 100%(불투명)
    * rgba(255,255,255,1);
    * rgba(0,128,0,1); (초록색)
    * 해당 색상이 들어간 속성에만 투명도를 넣어요
* hsla (이런게 있음....)
    * Hue (색상의 배리에이션, color wheel)
    * Saturation (채도)
    * Lightness (명도)
    * Alpha
    * hsla(190, 50%, 50%, 1);

### CSS Opacity
    * 요소 전체를 투명하게 만듭니다

### CSS Fonts & Text
* Font / Text
    * 활자가 나타나는 형태 (FONT)
    * 문단 혹은 글줄이 나타나는 형태 (TEXT)
    * 가나다

* font-family
    * 어떤 폰트를 사용할 지
    * 시스템 폰트
        * 여러분들이 아무짓도 안해도 기본으로 설치되어있는 폰트 (빌트인)
            * 애플 : (Mac, IOS)
                * 한글 : "APPLE SD Gothic NEO"
                * 영문 : San fransisco (SFUI)
                * 일문 : Kozuka Gothic
            * MS : (윈도우)
                * 한글 : "맑은 고딕", "돋움", "굴림"
                * 한글 : "Malgun gothic", "dotum", "gulim"
                * 영문 : Candara
            * Google: (Android, Chrome OS)
                * (이론상) Android 4.4까지는
                    * 한국어 : Droid sans fallback
                * Android 4.4 이후
                    * 영문 : Roboto
                * 실제로는
                    * 삼성 : 삼성고딕
                    * LG : LG스마트고딕
                    * 팬텍 : 베가고딕
                    * 그외 : Droid sans fallback
                * 안드로이드 7부터는 폰트를
                    * Noto sans CJK (China, Japan, Korea)
                * 안드로이드는 기본 폰트를 유저가 변경 가능
                    * font-family: sans-serif;
        * 유저들이 직접 설치한 폰트 (나눔고딕, 나눔바른고딕)
    * 웹 폰트
        * 폰트를 서버에서 다운로드 받아 사용하는 형태 (그때그때)
        * 한국어는 웹폰트 용량이 클 수밖에 없음
        * 한국어에서 가장 많이 쓰이는 완성형문자 2350자
        * 2580자 + 이모티콘
        * Sopqa Han sans (본고딕을 기준)
            * https://spoqa.github.io/spoqa-han-sans/
        * 여러분들이 직접 웹폰트를 만들 수 있음
            * @font-face
            * 추후에 (3~4주차 사이에)
    * font-family
        * <font-family-name>
        * <generic-font>
            * serif (명조체)
            * sans-serif (고딕체)
            * monospace (고정폭폰트)
            * fantasy (요상꼬롬한...)
            * cursive (필기체)
    * font-family:
        * "APPLE SD Gothic NEO',
        * "Helvetica NEUE",
        * sans-serif;
* font-size
    * 사이즈
    * font-size: 14px;
* line-height
    * 행간, 한줄일때도 line-height가 존재
    * line-height: 18px;
* font-weight
    * 폰트의 굵기
    * 100 ~ 900
    * 100일 수록 가늘
    * 900일 수록 두껍
    * 폰트패밀리에서 해당 font-weight와 일치하는 폰트를 제공 해야 폰트 표현이 가능
    * 100 : Ultra-thin
    * 200 : Thin
    * 300 : Light
    * 400 : Regular (Standard)
    * 500 : Medium
    * 600 : Semi-bold
    * 700 : bold (bold)
    * 800 : bolder
    * 900 : black

* letter-spacing
    * 자간
    * 값은 px값이던 %던 상관없이

* text-align
    * 정렬
    * left (왼쪽)
    * right (오른쪽)
    * center (중앙)
    * justify (왼쪽에서 시작해서 줄바꿈 할 때 줄채움)
    * text-align은 어쨋던 요소가 text로 인식되기만 하면 적용이 됨
* text-indent (특수한 경우에만 사용)
    * 들여쓰기

## 작업 환경 세팅
### express-generator로 새 작업환경 세팅해오기 (과제)
### sass 개발환경 세팅 (gulp)
#### (좀 빠르지만) post-css setting
### express 라우팅 개념 설명 (서브페이지)

## 실습해보기
### 유튜브 UI를 만들어봅시다
* 유튜브는 720px에서 UI가 한번 바뀌어요
    * 상단 네비게이션이 바뀝니다
    * 좌측에 항상 뜨던 사이드 네비게이션이, 화면이 작아지면 사라짐
        * position, left, top, trasnform
        * 항상 뜨게 하려면 어떻게 해야할까?
        * 사라지게 하려면 어떻게 해야할까?
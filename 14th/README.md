# FAST CAMPUS HTML & CSS Camp 14th time
## 이론 복습시간

## 언어
* 컴퓨터 (PC)
* 프로그램
  * 네이티브 어플리케이션 (어플리케이션)
    * Windows용
    * MAC용
    * iOS용
    * 안드로이드용
  * 웹 어플리케이션 (어플리케이션)
    * HTML
    * CSS
    * JavaScript
    * 범용성

## HTML
  * Hyper Text Markup Language (1993년 / 스펙)
  * Markup Language
    * 특정한 키워드에 의미를 부여넣기 위해 사용하는 언어들
    * XML, MathML, EmotionML
    * SGML에서 파생
    * XML
      * <Movie>
      *   <MovieTitle>리얼</MovieTitle>
      * </Movie>
    * Hyper Text
      * <a></a>

## CSS
  * CSS
    * Cascading Style Sheet
    * Cascading이란?
      * 물결이 흐르는 모양을 Cascading이라 부른다
    * 스타일 데이터가 나열되어있는 것
    * Cascading
      * 대부분의 스타일 속성이 물결 흐르듯이 자식 요소에 영향을 줌

# HTML (언어)
* 언어가 회사에 귀속되어있는 것은 좋지 못하다
  => Java (Oracle)
* 표준기구
  * W3C (World Wide Web consortium)
    * 웹과 관련한 대부분의 스펙을 정의
    * 프로세스가 점점 느려짐.
    * HTML 4.01 => 1999년
    * XHTML 1.0 => 2003년
    * XHTML 1.1 => 2004년
    * XHTML 2.0 => ~ 2008년
      * 문법이 상당히 기존의 그것과는 달랐음
      * 망했...
      * XForms 2.0
          * `<input type="tel">`
          * HTML4.01의 확장판
          * 야 왜 HTML 4.01 포기 안하고도 잘 만들 수 있는데 왜 굳이 새 언어를 만드느냐?
      * APPLE, Google, Opera
        * WHATWG라는 기관을 만듬
        * Web Hypertext Application Technology Working Group
        * HTML Living Stanrdard라는 스펙을 만듬
          * XHTML에 반대하여 HTML 4.01의 정신을 잇는 스펙
        * XHTML 2.0 2008년에 폐기
        * Web Applications 1.0
        * => HTML Living Standard
        * => HTML 5
    * HTML 5 => 2014년
    * HTML 5.1
    * HTML 5.2
      => HTML Living Standard의 Snap shot

    * CSS
      * CSS 1.0
      * CSS 2.1 (2013년)
        * 통합 스펙
      * CSS 3.0 (2007년 ~ 쭉)
        * 모듈 스펙
        * CSS Text Module Level 3
    * HTML, 
    * CSS, 
    * DOM, 
    * HTML API, 
    * Web Automation, 
    * Web Payments
    * Web VR
  * IETF (Internet Engineering Task Force)
    * 대부분의 웹 & 인터넷과 관련된 표준을 제정
    * RFC (Request For Comments) 문서
    * HTML 1.0
    * HTTP
      * HTTP 200은 Success

## HTML 콘텐츠 모델
  * 해당 HTML 요소가 어떤 컨텐츠를 지칭하는가?
  * <a href="#">조은 바보</a>
    * > Body 요소 내부에 존재 : Flow content
    * > 유저가 클릭할 수 있어요 : Interactive Content
    * > 텍스트 레벨의 요소 : Phrasing Content
  * Metadata Content
    * 인간이 아닌 로봇에 주는 데이터 => 메타데이터
    * 일반적으로 head 요소 안에 쓰는 모든 요소
    * `meta`, `title`, `link`, `style`, `script`
  * Flow content
    * Body 요소 안에서 쓰는 모든 요소
  * Heading Content
    * 제목
  * Sectioning Content
    * 섹션을 쪼개는 콘텐츠
    * Heading Content의 범위를 지정하는 콘텐츠
    * 되도록이면 제목(Heading)을 포함하면 좋다
    * 미국 | 영국
    * <section>
    *   <h1>미국</h1>
    *   <!-- 여기까지는 미국 -->
    * </section>
    * <section>
    *   <h1>영국</h1>
    *   <!-- 여기까지는 영국 -->
    * </section>
    * HTML5 Outliner
  * Embedded Content
    * HTML 문법이 아닌 외부 리소스를 불러오는 콘텐츠
    * audio, video, iframe, img, svg, math
  * Interactive Content
    * 유저가 무언가 할 수 있는 요소
    * a, video, audio, select, input, button, label
    * 인터렉티브 콘텐츠 내에 다른 인터렉티브 콘텐츠를 넣어서는 안된다
  * a 요소
    * Flow, Phrasing, Interactive
    * Phrasing Content에 속하는 요소는 다른 요소를 포함할 수 없는 경우가 많음
    * <span><div></div></span>
    * a 요소는 예외적으로 다른 요소를 포함할 수 있음.
  * Phrasing Content
    * Text처럼 취급받는 요소들
    * 블라블라 <span>치킨</span> 블라블라
    * 블라블라 치킨 블라블라
    * 일반적으로 Phraing Content는 Phrasing Content만 포함 가능
  * transparent Content
    * transparent는 부모요소에 따라 콘텐츠 모델이 변하는 콘텐츠
    * `<a href="#"><div></div></a>`
    * `<ins></ins>`
    * `<del></del>`

* CSS
  * Categories
    * CSS Syntax
    * `Selector {}`
    * CSS Selector
      * HTML과 CSS는 서로 다른 언어
      * CSS가 HTML의 특정 요소를 가리킬 수 있어야 함.
      * 그럴 때 사용하는 것이 셀렉터
      * Class Selector를 가장 많이 사용함
      * Attribute Selector
        * 저희가 Admin 페이지에서 콘텐츠를 넣을 때 CSS를 같이 넣어요.
        * 이미지는 좌우가 안띄워지고, 텍스트는 좌우가 띄워졌음 좋겠어요.
        * <div style="padding:15px 0; text-align: center">텍스트</div>
        * <div style="padding:15px 0;"><img src="" alt=""></div>
        * `div[style*="text-align"] {margin:0 15px;}`
      * Type Selector
      * Combinator
         * E F 자손요소
         * E > F 자식요소
         * E + F 형제요소
         * E ~ F 형제인데 뒤쪽 쭈르륵 다
        * Generated Content
          * ::before (IE9까지 지원)
            * :before (CSS 2.1 문법 / IE7까지 지원)
          * ::after
            * :after (CSS 2.1 문법 / IE7까지 지원)
    * CSS Font / Text
      * Font
        * 콘텐츠를 나타내는 폰트 그 자체 (glyph)
        * `font-size`
        * `font-weight`
        * `font-family`
          * `Font Name`
            * 애플 : `APPLE SD Gothic NEO`
            * 구글 : `Noto sans CJK`
            * Myriad => San frasisco
            * Droid sans => Roboto
            * `font-family: "nanum gothic";`
          * `Generic Font`
            * 특정한 Glyph의 형태를 나타내는 폰트 명
            * `sans-serif` : 삐침이 없는 폰트
            * `serif` : 삐침이 있는 폰트
            * `monospace` : 고정폭폰트 (개발코드 작성할 때)
            * `fantasy` : 요상꼬롬한
            * `cursive` : 필기체
            * font-family: sans-serif;
            * font-family: "APPLE SD Gothic NEO", sans-serif;
    * CSS Text
      * 글줄을 스타일링하는 모든 것
      * `text-align`
      * `text-decoration`
      * `text-indent`
      * `text-shadow`
        * X축
        * Y축
        * blur-radius
        * color
        * text-shadow: 1px 1px 5px #2ac1bc;
    * color
      * wide keyword
      * CSS 어딘가에서 색상 관련된 속성값이 존재한다면 여기 있는 걸 다 써도 됨
      * `color`
      * `background-color`
      * 속성값
      * Hash color (16진수로 표현) (`#2ac1bc`)
        * 장점 : 대부분의 디자인 프로그램의 기본 값이 Hash
      * RGB, RGBA (Reg, Green, Blue, Alpha)
        * 2012년 11월에 제가 NTS 입사할 때 문제
        * RGB가 무엇인가요?
          * RED, 0 - 255 (정수)
          * Green, 0 - 255 (정수)
          * Blue, 0 - 255 (정수)
          * Alpha, 0 - 1 (소숫점 허용)
        * `rgb(255,0,0);` => red
        * `rgba(255,0,0,1);` => red
    * Color Keyword
      * `red` => `rgb(255,0,0)`
      * `green` => `rgb(0,128,0)`
      * `blue` => `rgb(0,0,255)`
      * `lime` => `rgb(0,255,0)`
      * `white` => `rgb(255,255,255)`
      * `black` => `rgb(0,0,0)`
      * `transparent` => `rgba(0,0,0,0)`
    * HSL, HSLA
      * Hue, Saturation, Lightness
      * `hsl(0, 100%, 50%)` => `red`
      * `hsl(240, 100%, 50%)` => `blue`
      * h => 색의 각도
        * 0 => red
        * 30 => red - Yellow (Orange)
        * 60 => Yellow
        * 90 => Yellow - Green
        * 120 - Green
        * 150 - Green - Cyan
        * 180 - Cyan
        * 210 - Cyan - blue
        * 240 - blue
        * 270 - blue - magenta
        * 300 - Magenta
        * 330 - Magenta - red
      * S => 채도
        * 채도가 0에 가까울 수록 무색(흰색)
        * 채도가 100에가까울수록 가장 진한색 (내가 표현하고자 하는 가장 진한색)
      * L => 밝기
        * 밝기가 100이면? (흰색)
        * 50에 가까울 수록 원색
        * 밝기가 0이면? (검은색)
      * color: currentColor
        * 현재 요소의 color 색상의 값 => currentColor
        * color: yellow
        * background: currentColor => yellow
    * opacity
      * alpha를 별도로 지정하는 속성
      * 요소 전체가 투명해진다는 점
      * opacity를 이용하면 GPU 가속의 혜택을 받을 수 있음
      * 값 : 0 - 1
  * background
    * 배경
    * `background-image`
      * `url()`
      * `linear-gradient()` => `background-image`에 속함
      * `radial-gradient()` => `background-image`에 속함
    * `background-color`
      * `background-image`와 `background-color`는 같이 쓸 수 있음
    * `background-repeat`
      * 배경을 반복시킬건지?
    * `background-size`
      * 배경의 크기
      * x값, y값
    * `background-position`
      * 배경의 위치
      * x값, y값
  * 절대경로
  * 상대경로



# 패스트캠퍼스 HTML & CSS 캠프 3번째 수업
## ETC
* 이모티콘 목록
* http://unicode.org/emoji/charts/full-emoji-list.html
* gist
* https://gist.github.com
* 실습중 사이트 :
* http://slowalk.co.kr/
* 과제 사이트 :
* https://www.hanokmaeul.or.kr/

## HTML Contents Model (30 min)
* 문서를 만들기 위해서 있는 언어
* 실제로 바라보는 화면 : canvas
* 현재 띄워놓은 창 : window
* 현재 띄워놓은 HTML : document

### 콘텐츠 모델
* HTML의 각 요소의 시맨틱(의미) 그룹을 나타냄
* 시맨틱
* 요소의 의미
    * <a href="http://naver.com">네이버로 이동</a>
* 포함관계
* 콘텐츠간의 포함관계
    * <a href="링크"><button></button></a>
    * <p><p></p></p>

#### 콘텐츠 모델의 종류
* 메타데이터 콘텐츠 (metadata content)
    * 봇(웹 브라우저, 검색 엔진)에게만 제공하는 데이터
    * 대부분이 head 요소 안에 들어감
    * link, meta, script, style, title

* 플로우 콘텐츠 (Flow content)
    * body 요소에 들어가는 모든 요소
    *  a abbr address area (if it is a descendant of a map element) article aside audio b bdi bdo blockquote br button canvas cite code data datalist del details dfn div dl em embed fieldset figure footer form h1 h2 h3 h4 h5 h6 header hr i iframe img input ins kbd keygen label main map mark math menu meter nav noscript object ol output p picture pre progress q ruby s samp script section select small span strong sub sup svg table template textarea time u ul var video wbr text

* sectioning content
    * 제목의 범위를 나타냄
    *  article aside nav section
<article>
    <h2>치킨이 맛있다.</h2>
    <h3>치킨이 맛있는 이유</h3>
    <h4>삼겹살이 치킨보다 영양에 좋다</h4>
    <h3>왜 치킨인가?</h3>
    <p>삼겹살은 맛있따</p>
</article>
<section>
    <h3>왜 삼겹살인가?</h3>
    <h3>한돈 이대로 괜찮은가</h3>
    <p>치킨은 맛있따</p>
</section>

* 헤딩 콘텐츠 (HEADING CONTENT)
    * 문서의 (섹션의) 제목
    *  h1 h2 h3 h4 h5 h6

* 프레이싱 콘텐츠(phrasing content)
    * 텍스트 레벨의 모든 것
    * (쉽게 생각하면) 줄바꿈 안되는 것들
    * 대표적인 inline 요소들
    *  a abbr area (if it is a descendant of a map element) audio b bdi bdo br button canvas cite code data datalist del dfn em embed i iframe img input ins kbd keygen label map mark math meter noscript object output picture progress q ruby s samp script select small span strong sub sup svg template textarea time u var video wbr text

* 임베디드 콘텐츠 (embedded content)
    * 외부에서 가져오는 콘텐츠
    * 웹사이트를 느리게 만드는 주된 요인
    * audio video canvas embed img math svg picture iframe

* 인터렉티브 콘텐츠 (Interactive content)
    * 유저랑 무언가 하면
    * a, audio, button, details, embed, iframe, img, input, label, select, textarea, video

## HTML Elements (1 hour)
1. 여기서 다루는 게 모든 HTML 요소가 아닙니다.
2. 오늘 다루는 것들은 빙산의 일각
3. HTML 요소를 많이 아는 것이 도움은 되지만 다 쓰진 않아요.

### Document metadata
* 메타데이터 콘텐츠
* head 요소
    * head 요소는 문서에서 봇에게 제공하는 정보를 담은 것
    * 이 문서가 어떻게 표현되어야 하고, 어떤 리소스를 사용하는가에 대해서, 브라우저에 사전에 알려주는 역할
* meta 요소
    * 봇에게 제공하는 실제 정보
    * <meta charset="UTF-8">
    * <meta name="viewport" content="">
    * <meta http-equiv="X-UA-Compatible" content="ie=edge">
    * <meta property="og:title" content="페이스북 공유하기 : 타이틀">
    * <meta property="og:description" content="페이스북 공유하기 : 문장">
    * <meta property="og:image" content="페이스북 공유하기 : 이미지">
    * [넣어도 그만 안 넣어도 그만]
    * <meta name="author" content="">
    * <meta name="description" content="">
    * <meta name="keywords" content="">
* title 요소
    * title 요소에는 반드시 텍스트만 포함 가능
    * <title>⭐️</title>
    * 유저에게 알림을 주기 좋음 (페이스북에서 안읽은 피드)
* link 요소
    * 현재 HTML 파일과 특정 리소스를 연결해주는 역할
    * <link rel="stylesheet" href="style.css">
    * http://www.favicon-generator.org/
    * <link rel="shortcut icon" href="이미지경로">
* style 요소
    * 이 페이지 안에서만 사용할 CSS
    * 장점 : 성능을 정말 극대화시키고싶을 때 사용 가능
        * HTTP 리퀘스트를 하나라도 줄여서 어떻게든 빠르게 할려고 사용
    * 단점 : 관리하기 힘듦.
    * <style>body {margin:10px}</style>
* 안다루는 것 (base), 쓰지 마세요

### Text-level
* 텍스트에 의미를 부여하는 요소들
* 조은 바보

* strong
    * 매우중요, 너 이거 안읽으면 안돼
* em
    * 강조
* b
    * bold (HTML 4.x대의 레거시)
* a
    * anchor (닻)
    * 특정한 지점을 찝어서 이동하기
    * href 속성이 필수값
    * <a href="http://naver.com">네이버로 이동</a>
* abbr
    * 약어 (abbreviation)
    * <abbr title="멘탈붕괴">멘붕</abbr>
* time
    * 시간 (국제 표준 기준의 표현법을 사용한 시간)
    * <time>2017-05-23</time>
    * <time datetime="2017-05-23">2017년 5월 23일</time>
* code
    * 코드를 나타냅니다
    * <code>body { margin:0 }</code>
* span
    * 특별히 의미는 없는데 CSS를 적용시키고 싶을 때 사용
    * <span class="dsc">얘는 설명이야</span>
    * 대부분의 text-level 콘텐츠는 text-level 요소만 포함 가능
* br
    * 줄바꿈
    * <p>조은<br>바보</p>
    * br요소에 display:none 넣으면 줄바꿈 사라짐

### Grouping
* p
    * paragraph (문장)
    * <p>[스포츠조선 백지은 기자] '서머퀸' 씨스타가 7년 만에 돌연 해체를 선언해 충격을 안겼다.</p>
    * <p>씨스타가 23일 해체 소식을 알렸다. 멤버들은 팬카페에 자필 편지를 올려 팀 해체 소식을 전했다. 보라는 "함께했던 시간이 정말 소중하고 행복했다. 서로를 위해 각자의 길을 응원하기로 했다"고, 소유는 "행복했던 순간에도 힘들었던 순간에도 멤버들과 팬들 덕분에 더 행복하고 덜 힘들었다. 함께했던 시간들이 부족했던 것 같아 아쉽고 미안하다. 좋은 음악 들려드리겠다"고 밝혔다.</p>

* hr
    * 문맥 커터
    * <p>씨스타가 23일 해체 소식을 알렸다. 멤버들은 팬카페에 자필 편지를 올려 팀 해체 소식을 전했다. 보라는 "함께했던 시간이 정말 소중하고 행복했다. 서로를 위해 각자의 길을 응원하기로 했다"고, 소유는 "행복했던 순간에도 힘들었던 순간에도 멤버들과 팬들 덕분에 더 행복하고 덜 힘들었다. 함께했던 시간들이 부족했던 것 같아 아쉽고 미안하다. 좋은 음악 들려드리겠다"고 밝혔다.</p>
    * <hr>
    * <p>최근 ‘진실게임’, ‘어느 멋진 날’, ‘히든카드’, ‘미래예능연구소’ 등 특집을 선보인 ‘무한도전’은 올해 1월 28일부터 7주간 재충전, 재정비 기간을 보냈다. 그러나 휴식기 중인 2월과 3월에도 최상위권을 유지해 최강 예능의 저력을 보였다. 4월 조사에서는 JTBC ‘썰전’과 공동 1위였으나, 이번에는 단독 1위를 기록했다. 복귀 후 2개월 연속 1위인 것.</p>

* pre 요소
    * 실제로 입력한 그대로 보이게 하는 요소
    * 코드 입력할 때 사용함
    * 사용자 이용약관 같은 걸 pre 요소 안에 많이 넣음
* ol, ul
    * ol - ordered list, 순서 있는 목록
    * ul - unordered list, 순서 없는 목록
    * 자식요소로 반드시 li 요소를 사용해야함
    * <ol><div></div></ol> 안돼
    * <ol><li></li></ol> 돼
* li
    * 리스트 아이템
    * 얘 밑에는 어떤 요소가 들어가도 상관 없음
    * <ul><li><div></div></li></ul>
* dl, dt, dd
    * 정의 목록, 정의 제목, 정의 설명
    * <dl>
    * <dt>조은</dt>
    * <dd>패스트캠퍼스 HTML &amp; CSS 강사</dd>
    * </dl>
    * <dl>
    * <dt>서형욱의 뷰티풀게임</dt>
    * <dd>'구관이 명관' 유럽 4대리그 득점왕 결산</dd>
    * </dl>
* figure, figcaption
    * 특정한 리소스, 특정한 리소스의 설명
    * 한국 2 : 0 아르헨티나
    * <figure>
    * <img src="">
    * <figcaption>Figure 1. 경기영상</figcaption>
    * </figure>
* main
    * HTML의 메인콘텐츠임을 나타냄
    * 한 HTML 문서에서 한번만 사용 가능
    * <div role="main"></div>
    * = <main></main>
* div
    * 특별히 의미는 없지만 레이아웃을 만들 때 많이 사용
    * 특별히 의미는 없지만 CSS가 넣고 싶을 때 사용

## CSS (1 hour 30 min)
### CSS Cascading & Inherit
* CSS (Cascading Style Sheet)
* 스타일에 관한 시트
* Cascading
    * 폭포수가 흐르는 형태
    * 조상으로부터 내려오는 성질(스타일)
    * <div class="wrapper">
    *   <div class="child"></div>
    * </div>
    * .wrapper { font-family: sans-serif }
    * .wrapper { width: 500px }
    * .child { width: 1000px }
* inherit
    * 의도적 상속
    * 특정 HTML 요소에 미리 지정된 CSS가 있을 때,
      이 CSS를 override 시키고 싶을 때

### CSS Display model
* 한 요소가 문맥 전체를 관통할 때
    * block
    * width, height, padding, border, margin
    * p (문장)
    * div
    * article
    * h1
* 한 요소가 문맥의 일부를 차지할 때
    * inline
    * padding, margin, line-height
    * span
    * strong (강조)
    * a (링크)

### CSS Background
### CSS Color
### CSS Fonts

## 작업 환경 세팅
### express-generator로 새 작업환경 세팅해오기 (과제)
### sass 개발환경 세팅 (gulp)
### express 라우팅 개념 설명 (서브페이지)

## 우리 LESS 쓰나요?
* 안써요
* 업데이트가 많이 안되고 있는 상태
* LESS에서 제공하는 모든 기능을 SASS에서 제공을 함
* 근데 SASS가 더 기능이 많음
* SASS 쓸 정도면 LESS도 잘 쓸 수 있음

## 참고자료
**[HTML]**
* https://www.w3.org/TR/html51/dom.html#content-models
* https://www.w3.org/TR/html51/semantics.html
* https://www.w3.org/TR/html51/document-metadata.html
* https://www.w3.org/TR/html51/textlevel-semantics.html
* https://www.w3.org/TR/html51/sections.html
* https://www.w3.org/TR/html51/grouping-content.html

**[CSS]**
* https://www.w3.org/TR/css3-cascade/
* https://www.w3.org/TR/css3-background/
* http://techhtml.github.io/css3-color/
* https://www.w3.org/TR/css-fonts-3/

# HTML Elements (1 hour 30 min)
## Sections
* HTML의 문서적 의미
### section
* The section element represents a generic section of adocument or application.
* 그럼 div와 차이가 뭘까?
* 구획, 특정 영역
* Outline (특정 관심사의 유효범위)
* section 요소는 반드시 제목(h1-h6)이 있어야함 
* outline 알고리즘이 적용됨
  * sectioning contents 전체에 적용이 됨 (article aside nav section)
  * sectioning 콘텐츠 밑에 다른 sectioning 요소가 
  있다면 h1만 써줘도 알아서 레벨이 낮아짐
  * 구버전의 브라우저는 아웃라인 알고리즘을 지원하지 않아요 (IE)
```
<section>
    <h1>Movie</h1>
    <p>blah blah blah</p>
    <section>
        <h2>Sports</h2>
        <p>Blah Blah Blah</p>
    </section>
    <p>캐리비안의 해적 - 개봉</p>
</section>
```
```
잘못된 예시:)
<div class="news-area">
    <h1>Movie</h1>
    <p>blah blah blah</p>
    <div>
        <h2>Sprots</h2>
        <p>Blah Blah Blah</p>
    </div>
    <p>캐리비안의 해적 - 개봉</p>
</div>
```

### article
* 근본적으로는 Section과 동일
* 독립적인 콘텐츠
* RSS 피드 (블로그 글)
* 위젯
* article의 section의 합집합

```
<section>
    <h1>개발자들이여 공부하라</h1>
</section>
```

```
<article>
    <h1>개발자들이여 공부하라</h1>
</article>
```

### aside
* 사이드
* 전의 콘텐츠를 부가적으로 설명하는 콘텐츠
* 있어도 그만 없어도 그만인 컨텐츠
* 광고
    * 광고가 웹에서 자주 쓰이는데 왜 ad라는 요소는 없나요?
    * 그러면 모두가 $("ad").css("display", "none");
    * adblock이 어떻게 동작하는 지
    * $(".ad").css("display", "none")
    * $(".advertise").css("display", "none")
    * $(".ed").css("display", "none")
```
<section>
    <h1>부대찌개 레시피</h1>
</section>
<aside>
    <h1>연관 레시피</h1>
</aside>
```

### nav
* 네비게이션
```
    <nav class="gnb">
        <a href="#">후라이드</a>
        <a href="#">양념</a>
        <a href="#">오븐</a>
        <a href="#">사이드</a>
    </nav>
```
```
    <nav>
        <ol>
            <li><a href="#recipe-1">닭을 삶습니다</a></li>
            <li><a href="#recipe-2">닭을 삶습니다</a></li>
            <li><a href="#recipe-3">닭을 삶습니다</a></li>
        </ol>
    </nav>
    <section id="recipe-1">
        <h1>닭을 삶습니다</h1>
    </section>
    <section id="recipe-2">
        <h1>닭을 삶습니다</h1>
    </section>
    <section id="recipe-3">
        <h1>닭을 삶습니다</h1>
    </section>
```

### header
* 섹션의 시작영역
### footer
* 섹션의 마지막영역
```
<section>
    <header>
        <h1>배달의민족</h1>
    </header>
    실제내용들
    <footer>
        <p>copyright all right reserved @choeun</p>
    </footer>
</sectuon>
```

## Forms (주말)

# CSS (1 hour 30 min)
## CSS Layout
* layout (배치)
* 배치한다.
* 쌓이는 구조.
    * 특정한 것을 특정한 위치에 두는 것 (배치, 레이아웃)
    * Normal Flow
* 위에서부터 흐르는 구조
    * 콘텐츠가 시작부터 끝까지 흐르는
    * 레이아웃을 만든다 => 흐름을 바꾸는 것
    * 레이아웃을 생성 => reflow
* block formatting context
    * 아래로 쌓이는 구조 (블록이)
    * vertically
    * width, height 다 내가 원하는대로
    * <div>, <section>, <article>
* inline formatting context
    * 텍스트처럼 취급되는 것이 쌓이는 구조 (한줄로)
    * horizental
    * 가로 길이를 콘텐츠의 길이 (width)
    * 높이를 행간만큼 (line-height)
    * <span>, <storng>

* float
    * 이미지의 오른쪽이나 왼쪽에 텍스트를 노출시키기 위해 사용
    * float? (부유)
    * 특정 요소에 float를 넣으면 해당 요소를 부유하게 만듦
    * 부모요소가 float된 자식의 높이를, 자식을 인식하지 못해요.
    * float : left
    * float : right
    * 문제점
    * 1. 유동형 레이아웃과 고정형 레이아웃이 결합되면 UI가 깨지기 쉽다.
    * 2. 만약 0.1px이라도 계산을 잘못하면 레이아웃 깨짐

* clear
    * float된 요소의 다음 요소에 사용을 하며,
    * float를 해체해주기 위해서 사용
    * clear: left
    * clear: right
    * clear: both;

* box model
    * 모든 HTML 요소는 사각형 (box)
    * 가로 사이즈 (width)
    * 높이 (height)
    * 외곽선 (border)
    * 외곽선과 콘텐츠 사이 여백 (padding)
    * 박스와 박스 사이 여백 (margin)
    * 더하는 구조

 --------
|        |
|        |
 --------
```
.box {
    width: 150px;
    height: 150px;
    padding: 25px;
    border: 1px solid #000;
    margin: 25px;
}
```

* width
* height
* border
    * border: 1px solid #000000;
    * border: <border-width> <border-style> <border-color>
    * border-width:1px 2px 3px 4px;
    * border-style: solid;
    * border-color: #000000;
* padding
    * 시계방향으로 속성값을 작성
    * padding: <padding-top> <padding-right> <padding-bottom> <padding-left>
    * padding: 15px 10px 5px 0;
    * padding: 15px 0 10px;
    * padding: 15px 5px;
    * padding: 15px;
* margin
    * 만약 margin을 가진 요소
    * 두 요소가 서로 vertical 관계라면
    * margin은 병합됨
    * 부모 - 자식 관계에서는 부모가 border도 없고 padding도 없는 경우
    * float된 요소에서는 발생하지 X
    * collasping margin
    * 둘 중 큰 값을 따라감
* 계산하기 어려움
    * box-sizing
    * box 사이즈를 width나 height를 최댓값으로 두고
    * 나머지를 뺴는걸로
    * 나머지
    * box-sizing: content-box (나머지: X) (원래 상태)
    * box-sizing: border-box (나머지: padding, border)

* flexbox (이번 주 토요일)
    
## CSS Position (토요일)
## CSS Values & Units (토요일)

# 웹 퍼블리셔 vs 프론트엔드 개발자
* Front-End Engineering
    * UI / UX
        * 웹 퍼블리셔 / HTML, CSS, 접근성 할 줄 아는 사람
        * HTML & CSS & JavaScript(Interaction) 
        * 버튼을 어느 크기로 만들어야 유저가 편히 쓸까 (Design, Engineer)
        * 스와이프 애니메이션을 넣는데 가속도를 어떻게 넣을까? (Design, Engineer)
    * Web Application
        * JavaScript Only / HTML / CSS
        * Angular, React, Backbone
        * API와 UI를 매칭
        * 적절한 시점에 적절한 UI를 보이게
        * <?=DATA?>
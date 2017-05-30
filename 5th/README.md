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
## CSS Position
## CSS Values & Units

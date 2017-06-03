# FAST Campus HTML & CSS Camp Day 6
* 6월 6일 (휴강)
* 유튜브 과제는 다음 주 토요일

## Create Amazing HTML Form
* Form
    * 유저 : 유저가 데이터를 입력할 수 있는 모든 HTML
    * 사이트 : 유저에게 데이터를 입력받는 모든 HTML
* FORM 구성요소
    * form
        * 전체 입력의 처리
        * 전송, reset 범위, 전송할 때 형태
        * 백엔드
        * form에 CSS를 direct로 넣지 않음
    * input
        * 실제로 유저에게 입력받는 요소
        * 아주 많은 type을 가지고 있음
            * `type="text"`
            * `type="url"`
            * `type="number"`
                * 입력이 숫자만 가능 (OS 레벨)
            * `type="tel"`
                * 숫자만 있는 키패드
            * `type="email"`
            * `type="date"`
            * `type="time"`
            * `type="password"`
            * `type="checkbox"`
                * 여러개의 선택지 중 여러개를 선택
            * `type="radio"`
                * 여러개의 선택지 중 하나만 선택
        * placeholder
            * 힌트 텍스트
            * 이 속성값을 label의 목적으로써 사용하지 말 것
            * ID : <input type="text" placeholder="baemin@baemin.com 혹은 apes0123">
            * IE에서 지원하지 않음
        * required
            * 필수값
            * IE에서 지원하지 않음
        * name
            * 서버에서 실제로 받을 때
            * radio 버튼이나 checkbox 같은 경우에는 name 속성값으로 그루핑
        * autocomplete
            * name (이름)
            * given-name (이름)
            * additional-name (중간 이름)
            * family-name (성)
        * minlength, maxlength
        * disabled
            * 사용 불가능하게 (Input을)
        * readonly
            * 읽기전용
    * Input (Status)
        * :required {}
        * :invalid {}
        * :valid {}
        * :optional {}
        * :checked {}
        * :disabeld {}
    * select
    * label
        * 이 Input 혹은 Select가 어떤 데이터를 받을 것인 지 설명
(1) 
```
[CSS]
label {}
label:before {}
label:after {}
label input {}
[HTML]
<label>비밀번호: <input type="password"></label>
```

(2) BETTER GOOD
```
[CSS]
label {}
label:before {}
label:after {}
input {}
label ~ input {}
input ~ label {}
input:checked ~ label {}
input:disabled ~ label {}

[HTML]
<label for="pwd">비밀번호</label>
<input id="pwd" type="password">
```

### Reference
* https://developers.google.com/web/fundamentals/design-and-ui/input/forms/

## CSS Position
* 배치
* static (정적)
    * Normal Flow
    * 내가 flow를 수정하고 싶어도 수정 불가능한 상태
* Position을 사용하는 속성
    * 아래 속성들을 사용하면 position container가 되고
    * 특정한 좌표값의 루트로써 활용
    * box offset 속성을 사용할 수 있게됨
    * box offset
        * left
        * top
        * right
        * bottom
        * z-index
    * relative
        * 겉보기에는 Static
    * absolute
        * 절대값 배치
    * fixed
        * 스크롤을 하던말던 계속 고정
    * sticky
        * 원래 위치에 있다가 브라우저가 해당 요소의 위치에 스크롤이 도달하면 fixed
        * IE 빼고 다 지원

## CSS Flexbox
* 레이아웃을 만듦
    * Flexible Box
    * 자유자재로 늘어나거나 줄어드는 Layout
* flexbox
    * 요소의 순서를 바꿀 수도 있고
    * 요소가 자기 알아서 늘어나거나 줄어들도록
    * IE 지원율 X
    * Andorid 2.x 지원율 X

## CSS Values & Units (Next)

## Codelabs
* 실습
* gulp + express
    * gulp-express (없어짐)
    * express 기반
* Youtube
    * 비디오? (iFrame)
    * 레이아웃?
        * 특정 사이즈를 기준

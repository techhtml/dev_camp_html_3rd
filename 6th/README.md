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

## CSS Flexbox

## CSS Values & Units

## Codelabs
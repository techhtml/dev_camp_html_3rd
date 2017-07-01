# Fast campus HTML & CSS camp Vol. 13
* 웹에 인터렉션을 불어넣는 법.

## 예제사이트
* ipad-pro
* https://www.apple.com/kr/ipad-pro/

## 목차
  * Video
  * Customized Input
  * Interaction 201
  * App-like Web

## VIDEO
* HTML5에 추가된 embeded content
  * HTML 문법이 아닌 것으로 되어있는 (바이너리) 외부 리소스를 불러올 때 사용하는 콘텐츠s
  ```
  EXAMPLE 1
  <video></video>

  EXAMPLE 2
  <video src="소스"></video>

  EXAMPLE 3
  <video>
    <source src="">
    <source src="">
  </video>

  EXAMPLE 4: 전체화면 막는 것
  <video wekbkit-playsinline playsinline>
    <source src="">
    <source src="">
  </video>

  EXAMPLE 4: 자동재생 / 접근성 위배
  <video autoplay>
    <source src="">
    <source src="">
  </video>

  EXAMPLE 5: 자동재생 / muted
  <video autoplay>
    <source src="">
    <source src="">
  </video>
  ```
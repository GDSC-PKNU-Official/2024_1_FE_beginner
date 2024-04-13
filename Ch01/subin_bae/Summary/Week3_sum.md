<h1>3주차 내용 요약</h1>

<h3>자바스크립트</h3>

- Javascript: HTML을 제어하는 언어 -> 웹페이지를 다이나믹하게 만들어줌.
    - 대소문자 구분.

---

<h3>script 태그</h3>

- `<script>`: 자바스크립트로 해석하겠다는 의미.

---

<h3>HTML과 JS</h3>

- `document.write()`: 글씨를 출력.
- `<input type="button" value="hi">`: hi 버튼 생성.
- `<input type="text">`: 내용 입력란 생성.
- `alert('hi')`: 경고창.

> ex. `<input type="button" value="hi" onclick="alert('hi')">`

- on~ 속성의 속성값은 Javascript가 들어가야 함.
- 이벤트, 사건: 웹브라우저 위에서 일어나는 일들. on~ 속성.

---

<h3>콘솔창 활용</h3>

- 콘솔 창을 활용해서 자바스크립트를 즉석으로 실행시킬 수 있음.
    - 해당 웹페이지를 대상으로 바로 실행됨.

---

<h3>데이터타입</h3>

- 산술계산 가능
- .length 문자열 길이 파악
- .toUpperCase() 대문자 변환

-> 이외에 여러 데이터타입이 있음.

---

<h3>변수와 대입 연산자</h3>

- x=1000;
    - x: 변수(variable)
    - 1000: 상수(constant)
    - =: 대입연산자(=)

- 변수선언 시 var 붙이기. > ex. var name

---

<h3>제어할 태그 선택하기</h3>

document.querySelector(): 제어할 태그를 지정할 수 있음
> ex. `document.querySelector('body').style.color = 'white';`
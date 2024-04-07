<h1>2주차 내용 요약</h1>

<h3>CSS의 등장</h3>

`<!-- ... -->`: 사이에 있는 것 무시.<br>
`<style>`: HTML문법이면서, 태그 안의 내용은 CSS의 문법으로 해석해라는 의미.<br>


CSS가 효과적인 이유
```
1. 중복하는 코드를 제거할 수 있음.
2. 웹페이지의 유지 보수가 편리해짐.
3. 가독성이 높아짐.
```

|CSS|HTML|
|:---:|:---:|
|디자인|정보 |

---

<h3>CSS의 기본문법</h3>

- `style="color:red"`: 속성 property. <br>
ex. `<li><a href="2.html" style="color:red">CSS</a></li>`<br>
-> style이라는 속성을 쓰면, style 속성이 위치하고 있는 태그에게 CSS 문법이 적용.

- `a{}`: 선택자 selector  
- `color:black;`: 선언 declaration 
- `;`세미콜론: 구분자<br><br>

(style 속성을 직접 사용한 경우에는 선택자를 사용할 필요 없음)

- CSS속성의 예시
    - 밑줄을 없앨 때: `text-decoration: none;`
    - 밑줄을 칠 때: `text-decoration: underline;`
    - 폰트 사이즈 조절: `font-size:45px;`
    - 텍스트 가운데 정렬: `text-align: center;`

---

<h3>CSS 선택자</h3>

- 선택자의 우선순위에 따라 선언이 적용됨.<br><br>

- `class`: 태그를 같은 그룹으로 묶을 때 사용. HTML의 속성을 부여. -> CSS가 아님. <br>
    > ex. class="saw" (class값이 saw인 태그)<br>

    - `.class값`: 선택자가 됨.
    - class의 속성값은 여러개의 값이 들어올 수 있음. 띄어쓰기로 구분.<br>

- `id`: class 선택자보다 우선순위가 높음. id값은 한 번만 사용할 수 있음. 중복불가.<br> 
    > ex. id="active"<br>

    - `#id값`: 선택자가 됨. <br><br>
 
선택자의 우선순위: 가장 마지막에 등장하는 선택자, 구체적인 것. `id > class > tag`

-> 선택자를 활용해서 코드를 똑똑하고 효율적으로 짤 수 있음.

---

<h3>박스모델</h3>

- block level element: 화면 전체를 쓰는 태그.
- inline element: 자신의 부피만큼 화면을 쓰는 태그.<br>

-> display 속성의 기본값일 뿐, 언제든 CSS로 변경 가능.

- 박스모델의 예시
    - 테두리 두께: `border-width:5px;`
    - 테두리 색깔: `border-color:red;`
    - inline element로 변경: `display:inline;`
    - 해당 태그를 화면에서 숨김: `display:none;`
    - 밑줄: `border-bottom: 1px solid gray;`<br><br>
    
    - `padding`: 내부 간격. ex. `padding:20px;`
    - `margin`: 테두리와 테두리 사이의 간격. 외부 간격. ex. `margin:20px;`
    - `width`: 요소의 너비. ex. `width:100px;`<br><br>

- `h1, a{` -> 선택자를 묶어서 표현 가능. <br>
    `border:5px solid red;` -> 같은 속성의 값들은 묶어서 쓸 수 있음.<br>
    `}`<br><br>

> 검사 - 개발자 도구 활용하기<br>

> (참고) https://caniuse.com/ <br>
    CSS, HTML Javascript 등 기술의 브라우저 호환성에 대한 정보를 확인할 수 있음.

---

<h3>그리드</h3>

- `<div>`: Division, 아무 의미없이 디자인의 용도로만 쓰임, block level element
- `<span>`: div와 같은 역할이지만 inline level element

- `fr`: fraction, 그리드에서 숫자 비율에 따라 너비를 자동으로 지정해주는 기능. 
    > ex. `grid-template-columns: 2fr 1fr;`

- `display:grid;` -> 그리드를 사용하려면 가장 먼저 지정해야 함.<br><br>

`#grid ol{}` -> 선택자를 활용해서 의미를 더 분명히 할 수 있음.<br>

---

<h3>미디어 쿼리</h3>

- 반응형 웹: 화면의 크기에 따라 웹페이지의 각 요소들이 최적화되는 디자인 방식.
- 미디어 쿼리: 화면의 특성에 따라 스타일을 조정할 수 있게 해 주는 기술.

`@media(min-width:800px){...}` = screen width > 800px<br><br>

- .css 파일을 통해 css코드를 재사용 할 수 있음.<br>
- 원래 코드가 있어야 할 자리에 `<link rel="stylesheet" href="~.css">`


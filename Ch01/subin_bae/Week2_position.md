<h1>CSS의 position 속성</h1>

<h3>position 속성</h3>
- HTML문서 상에서 요소가 배치되는 방식을 결정. 

---

<h3>position: static</h3>

- `static`: 기본값
- HTML에 작성된 순서 그대로 요소들이 표시됨.

---

<h3>position: relative</h3>

- 요소를 원래 위치를 기준으로 상대적으로 배치.
- `top`, `bottom`, `left`, `right` 속성 사용가능.

---

<h3>position: absolute</h3>

- `absolute`인 요소는 독립되어 더 이상 다른 요소와 상호작용 X
- `absolute`인 요소는 부모 요소의 위치를 기준으로 위치를 조정.<br>
    (요소의 배치 기준은 `static`이 아닌 상위 요소)<br><br>

- 일반적으로 position 속성을 `absolute`로 설정할 때,<br>
    부모 요소의 position 속성을 `relative`로 설정해 줌.

---

<h3>position:fixed</h3>

- 브라우저 화면의 특정 부분에 고정.
- `fixed` 속성값의 배치 기준은 뷰포트(viewport).

---

<h3>position:sticky</h3>

- 스크롤 위치가 임계점에 이르면, 화면에 고정할 수 있는 속성.
- 사이드바, 테이블 헤더 등에 사용.
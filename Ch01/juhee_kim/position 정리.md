# Position 정리

### position 속성이란?
- HTML 문서 상 요소가 배치되는 방식을 결정하는 속성

---

### position: static;

- position의 기본값
- 나란히 배치됨
- top, left, bottom, right 속성값이 이때는 무시됨

---

### position: relative;

- 원래 위치 기준으로 상대적으로 배치

---

### position: absolute;

- relative 속성값과 함께 사용되는 경우가 많음
- 배치 기준을 자신이 아닌, 상위 요소에서 찾음
    - 부모 요소(가장 가까운 상위 요소)를 기준으로 top, left, bottom, right 속성 적용
    - 어떤 요소의 display 속성을 absolute로 설정하면, **부모 요소의 display 속성을 relative로 지정**해야 함

---

### position: fixed;

- 요소를 **항상** 고정된 위치에 배치
- fixed 속성값의 배치 기준이 자신이나 부모 요소가 아닌 뷰포트(viewport), 즉 브라우저 전체화면이기 때문
- top, left, bottom, right 속성 ⇒ 각 브라우저 상,하,좌,우측으로부터 해당 요소가 얼마나 떨어져있는지를 결정

---

### position: sticky;

- 스크롤 x ⇒ static처럼 동작
- 스크롤 o ⇒ fixed처럼 동작
- 참고문헌
    - [[CSS] position : sticky 속성 - 요소를 스크롤에 따라오게 만들기](https://coding-factory.tistory.com/951)
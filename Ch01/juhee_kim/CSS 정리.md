# CSS 정리


### CSS란? 

- HTML과 완전히 다른 컴퓨터 언어
- 태그 예시

```html
<style>
 a {
  color:red;
  }
</style>

// a: Seclector
// color:red; : Declaration (선언, 효과)
// color: Property (속성)
// red: Value
```

- 새로운 언어를 해석하는 기능을 탑재해야 하므로 어려움
- 사용 이유: 코드 단순화, 코드 중복 제거
    - 유지 보수 편리, 가독성 up

---

### 기본 문법

- style 속성 : ```style=” ”```
    - 속성 값을 웹브라우저가 CSS 문법에 따라 해석 → 해석된 결과를 style 속성이 위치한 태그에 적용
- 세미콜론(;)을 사용하여 구분함

---

### CSS 속성

- 선택자
    - class 지정
        - ``` .class 명{ }```
        - 속성 값은 여러 개의 값이 들어올 수 있음
        - 같은 유형으로 반복되는 태그들을 유형별로 분류하고 싶을 때 사용
    - id 명령어
        - ``` #id 명 { } ```
        - 전체 페이지에서 단 하나의 요소에만 지정 가능
        - 중복 불가능
- 가까이 있는 명령어가 우선순위가 높음
- 우선순위
    - (1) id 선택자 → (2) class 선택자 → (3) 태그 선택자

---

### 박스 모델

- 테두리 : border
- 화면 전체 : block
- 화면 일부분 : inline
- 중복 제거

```html
h1, a{
	border-width: 5px;
	border-color: red;
	border-style: solid;
	}
	
⇒ 중복 제거 버전
h1, a{
		border: 5px solid red;    // 순서 중요 x
	}
```

- 여백 : padding, margin
    - padding: 콘텐츠, 바깥 테두리 사이 간격
    - margin: 테두리, 테두리 사이 간격
    
    <img src="https://velog.velcdn.com/images/dtc03003/post/47331101-ace6-4172-94de-fd4ee8f9be97/image.png" height=200px>
    

⇒ 개발자 도구 적극 활용

---

### 그리드

- div 태그 : 묶어주는 태그
- span : inline 태그
- ```grid-template-columns: fr;```
    - 공간 사이즈가 자동으로 고정됨

```
display: grid;
grid-template-columns: **fr**;
```

---

### 미디어 쿼리

- 반응형 웹/디자인
    - 화면 크기에 따라 웹페이지의 각 요소들이 반응해서 최적화된 모양으로 바뀌게 하는 것
- 미디어 쿼리
    - @media( )
    - ```@media(min-width: 800px) { }```
        - 화면 크기가 최소 800px일 때 = 화면 크기가 800px보다 클 때
    - ```@media(max-width: 800px) { }```
        - 화면 크기가 최대 800px일 때 = 화면 크기가 800px보다 작을 때
- 미디어 쿼리 내 다른 태그의 style을 추가시킬 수 있음

```
// 예시
@media(max-width:800px){
	#grid{
		display: block;
	}
	ol{
		border-right: none;
    }
}
```

---

### 링크

- html과 css 파일 연결 → 유지보수가 편함!
- ```<link rel=”stylesheet” href=”***.css”>```


# 강의 요약-CSS

1. html 내에서 css 설정 할 경우 (1) : style 태그 사용
- head태그 내에서 style 태그 설정
- style 태그 내에서 할당하고 싶은 태그 작성 후 중괄호 { } : 선택자(selector), 선언(declaration)
→ 만약 a 태그를 할당하고 style 변경을 했다면 a 태그 전체가 바뀜 ( 중복코드 제거 효과 )

2. html 내에서 css 설정 할 경우 (2) : style 속성 사용
- html body 태그 내에서 설정
→ 설정하고 싶은 태그에서 style=” “ 속성 할당 (선택자 X)

3. css 기본 문법 : 뒤에 세미콜론(;) 붙이기
-->모르는 건 구글링! (css + @ + property)
- color: @@@ → 색깔 설정
⇒ color(:property) / @@@(:value)
- text-decoration: none → 밑줄 해제
- text-decoration: underline → 밑줄 긋기
- font-size:@px → 글자 크기
- text-align: center → 글자 가운데 정렬

4. css 선택자 : 태그 < class < id ( 우선순위 )
- < . > : class=”@” 태그(html) → css : class 태그를 기반으로 .@ 설정
    1. class 속성은 여러 개 값을 받을 수 있다. 띄어쓰기 구분
    2. . 을 붙여서 css 설정
- <#> : id=”@” 태그(html) → css: id 태그 기반으로 #@ 설정

5. 박스모델
- block element: 화면 전체를 씀
- inline element: 자기 자신의 부분만큼 부피를 차지
- display : block, display : inline, display : none(화면 사라짐)
- border : 테두리 표시
- padding : 테두리와 요소 사이의 간격 표시
- margin : 테두리와 테두리 사이의 간격 표시
- display : block을 하고 width를 설정하면 박스의 크기를 조정 가
- F12 → style : html이 어떤 css의 영향을 받는지 알 수 있는 도구

6. 그리드  
- div : block element, 디자인 용도의 태그
- span : inline element, 디자인 용도의 태그
- 어떤 태그들을 나란히 배치하려면 부모태그로 감싸야 한다.
    1. 나란히 할 태그를 부모 태그로 감싸기
    2. 부모 태그에 id 할당
    3. style 태그 → id 선택자 호출
    4. display : grid;
    grid-template-columms : 각 column이 차지 할 공간 지정
    5. 자동 조정 : fr  
- [caniuse.com](http://caniuse.com) : 현재 웹 브라우저들의 채택율을 볼 수 있음

7. 반응형 디자인
- 반응형 디자인  : 화면의 크기에 따라 웹 페이지 요소들이 자동으로 최적화 되는 웹
- 미디어 쿼리
    1. 부모 태그 만들기
    2. style 태그 
    3. @media( ~~ ) → 부모 태그 호출
    4. display : none
    5. min-width : 화면 크기가 조건 이상일 때 작동
    6. max-width : 화면 크기가 조건 이하일 때 작동  

8. html 외에서 css 설정 (재사용,효율적)
- html 내의 head → link 태그
- link → href = 연결된 css 코드 경로 / rel = “stylesheet”

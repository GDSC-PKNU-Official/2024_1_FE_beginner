# POSITION 속성 정리
: HTML 문서 상에서 요소가 배치되는 방식

---
### position : static
기본 값 : static (위의 속성 무시됨)
-> HTML 작성된 순서대로 배치

---
### position : relative
원래 위치를 기준으로 상대적인 배치
-> top, left, bottom, right 속성을 이용해 상하좌우의 거리 지정

---
### position : absolute
absolute가 되는 순간 더 이상 인접하고 있는 요소들과 상호작용 X   
-> **독립된 요소**

일반적으로 absolute를 쓸 경우,   
기준이 될 부모에게 **position: relative;** 를 부여하고 원하는 위치를 지정

=> DOM 트리의 최상위 요소를 기준으로 설정

---
### position : fixed
요소를 항상 고정된 위치에 배치  
-> 배치 기준이 부모 요소가 아닌 브라우저 전체화면(뷰포트)임  
-> 스크롤을 해도 계속 같은 자리

---
### position : sticky
스크롤링을 할 때 효과가 나타남  
-> sticky가 적용된 부분은 끝까지 스크롤을 해도 해당 포지션에서 제자리를 유지 
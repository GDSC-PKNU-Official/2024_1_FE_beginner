
<position 속성>
position 속성 -> HTML 문서 상에서 요소가 배치되는 방식 결정
정확한 위치 지정을 위해 top,left,bottom,right 속성과 함께 사용

position: static
-> HTML 문서 상에서 원래 있어야 하는 위치에 배치. 즉, 위치의 기본값

position: relative
->요소를 원래 위치에서 벗어나게 배치 가능!
단, "원래 위치를 기준"으로 상대적으로 배치

position: absolute
-> 절대적으로 요소를 배치하지 않음!
해당 요소의 배치 기준을 자신이 아닌 상위 요소에서 찾음 즉 위에 있는 요소로부터 기준

position: fixed
-> 화면을 위아래로 스크롤하더라도 브라우저 화면의 특정 부분에 고정되어 움직이지 않도록 만든다.
이의 배치 기준은 자신이나 부모 요소가 아닌 브라우저 전체화면.
top, left, bottom, right 속성은 브라우저의 상단,좌측,하단,우측으로 부터 해당 요소가 얼마나
떨어져 있는지 결정

position: sticky
-> 브라우저 화면을 스크롤릴할 때 효과가 나타남
스크롤바를 내리고 position: sticky인 부분을 지나 내려가게 되면 화면 상단에 붙어 계속 나타나게끔 해줌

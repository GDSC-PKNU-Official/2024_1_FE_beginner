
<h1>position 속성</h1>

: HTML 문서 상에서 요소가 배치되는 방식 결정<br>
<p>
-> position: static<br>
    position 속성을 지정해주지 않으면, 기본값인 static 적용된다.
    
-> position: relative<br>
    요소를 realtive하게 배치해준다.(원래 위치를 기준으로)<br>
    top, bottom, left, right 속성을 이용해 상하좌우로 얼마나 떨어지게할 지 지정할 수 있다.

-> position: absolute<br>
    배치 기준을 자신이 아닌 상위요소에서 찾는다. <br>
    position 속성을 absolute로 설정하면, 부모 요소의 position 속성을 relative로 지정해주는 것이 관례이다. <br>
    position: absolute인 요소는 HTML 문서상에서 독립. 앞뒤에 나오는 요소와 상호작용 하지 않는다.

-> position: fixed<br>
    화면을 위아래로 스크롤하더라도 브라우저 화면의 특정 부분에 고정되어 움직이지 않는 UI 등에 사용<br>
    position 속성을 fixed로 지정하면 이렇게 요소를 항상 고정된 위치에 배치할 수 있다.<br>
    -> fixed 속성값의 배치 기준이 자신이나 부모 요소가 아닌 viewport, 즉 브라우저 전체화면이기 때문이다.

-> position: sticky<br>
    CSS에서 비교적 최근에 추가된 속성 값. 브라우저 화면을 스크롤링할 떄 효과가 나타난다.
</p>
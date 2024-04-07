# position 정리

position 속성을 이용한 배치 방법에는 총 5가지
static, relative, absolute, fixed, sticky가 있다.

# position: static
static은 position 속성의 기본값이며, HTML 문서 상에서 원래 있어야하는 위치에 배치되므로,
static일때에는, top left bottom right 속성값이 무시된다.

# position: relative
relative는 요소를 상대적으로 배치해준다고 생각하면 된다.
top left bottom right 속성을 이용해서, 요소의 상하좌우를 바꿔 위치를 조정할 수 있다.

즉, 기본위치에서 top left bottom right 속성 값만큼 이동한 상대위치에 배치하는 것이다.

# position: absolute
absolute를 사용하면, 해당 요소는 배치 기준을 상위요소에서 찾는다.
상위 요소에 static이 아닌 요소가 없다면, &lt;body&gt;요소가 배치 기준이 된다.

# position: fixed
fixed를 사용하면, 그 요소는 브라우저 화면의 특정 부분에 고정되어 움직이지 않는다.
항상 고정된 위치에 지정해두고 싶은 요소가 있을때에 사용하는 속성이다.

# position: sticky
sticky를 사용하면, 브라우저 화면을 스크롤할때에 효과가 나타난다.
sticky 속성이 적용되지 않은 다른 요소들은, 화면을 내리는것과 같이 스크롤하면
화면에 따라 올라간다. 하지만 sticky 속성이 적용된 요소는 화면에 따라 올라가지 않고,
스크롤을 아무리 밑으로 내려도 화면 위에 붙어서 따라 내려간다.
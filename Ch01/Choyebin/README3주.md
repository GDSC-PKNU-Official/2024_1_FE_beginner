<3주차 강의 내용 정리>

JavaScript를 사용하는 이유는 " 사용자와 상호작용 "을 할 수 있기 때문이다. 따라, 이를 이용한다면 웹페이지를 더 동적이게 만들 수 있다.

<script></script>태그 사이에는 꼭 JavaScript가 들어가야 하며 계산 또한 가능하다(그만큼 동적이라는 것)
+JavaScript를 이용해 무언가를 적고 싶다면 document.write(넣고 싶은 것)

버튼을 만들고 싶다 -> input type="button" 
글씨를 입력받는 칸을 만들고 싶다 -> input type="button" 
+여기서 이름을 붙이고 싶으면 뒤에 value=""
onclick, onchange, onkey 이런 것들은 "이벤트"라고 불림. 이것들을 통해 사용자와 상호작용 가능. 또한 이들의 속성값은 반드시 JavaScript

파일을 굳이 만들지 않더라도 웹페이지 검사의 콘솔을 통해 자바스크립트를 즉석으로 사용할 수 있음. 콘솔을 통해, 웹페이지를 대상으로 하여 자바스크립트가 실행됨.

변수명 앞에 var 붙이는 것이 좋음
ex) var name;
  
매우 중요!! 제어할 태그 선택하기
->> 이벤트의 속성값으로 document.querySelector('선택자') 설정
이후, .style.color = ""나 .style.backtgroundcolor=""; 와 같은 것들을 뒤에 붙여서 
사용자와 상호작용하여 내가 설정한 대로 웹이 동적으로 바뀔 수 있게 함


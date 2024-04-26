JavaScript는 사용자와 상호작용
웹브라우저는 한 번 출력되면 자기자신을 바꿀 수 없음->JavaScript로 속성 추가 가능
브라우저에서 우클릭->검사->Elements: HTML 코드 확인 가능, Console: 브라우저에서 바로 JavaScript 코드 실행 가능(개발자 도구를 통해 이미 존재하는 웹 페이지에서도 가능)
type="button", value="night" onclick="JavaScript 코드 내용"
코드의 내용은 어느 태그에 영향을 줄지 지정해야 하고 CSS 코드를 포함

<script> 태그: JavaScript 시작 전 입력(HTML에게 알려주는 용도)
-> 그냥 쓰는 것과 무엇이 다른가?: 정적/동적
alert: JavaScript의 속성, 브라우저 상단에 메시지를 띄움
onkeydown: 텍스트를 입력했을 때

컴퓨터 프로그래밍: 데이터를 잘 처리하는 것이 중요
JS의 데이터: 문자, 숫자
변수 앞에는 var 키워드를 사용하면 좋음
<input type="button" value="day" onclick="
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color = 'black';
  ">

https://aha-rin.github.io/My-Repo/
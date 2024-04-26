Javascript 코드  
->  
<input type="button" value="night" onclick
document.querySelector('body').style.backgroundColor="black";
document.querySelector('body').style.color="white";>

위의 코드 설명  
-> onclick이라는 속성의 값으로는 자바스크립트가 와야한다.  
사용자가 버튼을 클릭했을 때 밑의 자바스크립트를 실행시킬것이라는..의미  
Javascript는 html을 제어하는 언어이다.  
기본적으로 html 위에서 동작한다.  

script 라는 tag를 사용해 JavaScript의 시작을 알려준다.  
JavaScript는 동적이기 때문에, 1+1은 2로 출력한다.  
반면 html은 1+1은 문자 그대로 1+1로 출력  

"event"
alert('~~')
웹페이지에서 어떤 event가 일어났을 때 JavaScript가 실행되도록 하는 것이 onclick 부분에 해당하는 코드가 하는 일이다.  

event 종류: 클릭, text입력(내용이 변했을 떄:onchange)와 같이 마우스, 키, 폼, 로드, 기타 이벤트가 스무가지 정도 있다.

"data type"
Javascript의 자료형은 7가지 정도가 있다.
1. string
: 텍스트 데이터
2. number
3. null
: null이라는 하나의 값만 가진다. (객체가 없음)
4. undefined
: undefined라는 하나의 값만 가진다. (값이 없음)
5. boolean
: true/false 두가지 값을 가진다.
6. bigInt
: 임의 정밀도로 정수를 나타낼 수 있는 JavaScript 숫자 원시 값이라고 한다.
7. Symbol
: 다른 코드의 키와 충돌하지 않도록 보장되는 고유한 속성 키를 만드는 것이라고 한다..
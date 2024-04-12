# JS - 강의요약

## 1. script

- script 태그 안에 자바스크립트 문법을 쓴다.
- document.write( ) :  화면에 출력

## 2. event

- 웹 브라우저에서 자바스크립트에 의해 사건 진행
- onclick : <input type="button" value=" " onclick="alert(' ')">
버튼을 클릭하면 alert의 메세지 출력
- onchange : <input type="text" onchange="alert(' ')">
텍스트의 내용이 바뀌면 alert의 메세지 출력

## 3. console

- JS를 실행할 때 파일을 만들지 않고 실행하는 방법 (F12)
- 이미 만들어진 웹 사이트를 대상으로 사 가능

## 4. 데이터타입

- 숫자 : + - * / 연산자 사용
- 문자형 : “,’ 둘다 사용가능
- .length : 문자열 길이
- .toUpperCase() : 대문자 변환  
- .indexOf(문자/문자열) : 문자 인덱스 반환. 없으면 -1
- .trim() : 공백 없애기

## 5. 변수

- var : 변수 앞, (variable)

## 6. 웹 제어

- onclick과 같은 요소에 JS 문법 넣기
- 야간모드(e.g.)
:<input type="button" value="night" onclick="
    document.querySelector('body').style.backgroundColor="black";
    document.querySelector('body').style.color='white';">
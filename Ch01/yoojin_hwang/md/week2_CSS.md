<h1>GDSC FE week2</h1>


CSS는 HTML로 만든 웹페이지를 더 보기 좋게 만들기 위해 등장한 스타일 시트 언어이다.

<h3>HTML에서 글꼴을 변경하는 방법</h3>

1. font tag 이용  
font tag 안에 작성된 코드는 웹에 대한 정보 X.  
디자인에 대한 정보만을 가진다.  
-> 웹페이지가 정보로서의 가치가 떨어짐    

2. CSS 이용    
(1) style tag 사용 (inline 방식)  
style tag는 HTML의 문법인 동시에, 태그 안의 코드는 CSS의 문법에 처리하도록 한다.  
-> 유지보수 쉬워짐, 가독성 높아짐   
-> HTML에서 디자인에 대한 정보는 style tag에만 둠으로써 여러 작업을 처리할때 필요한 정보만 사용할 수 있게 된다.  
    -> 효율적  
(2) style 이라는 속성을 사용  
-> 이 부분은 CSS로 해석    


<h3>CSS의 문법</h3>

    a {
        color: red;
    }

- a (선택자): 이 웹페이지에 있는 모든 'a'태그를 선택한다는 의미.  
HTML에 있는 class가 a인 태그를 가리키는 선택자  
- color : red; = 선언 : 태그들에 어떤 효과를 줄 것인가에 대한 부분  
    -> color : 속성. Property    
    -> red : 속성값. Property Value  

<h4>.saw {~~}</h4>  
".{}" : HTML에 있는 class가 saw인 태그를 가리키는 선택자  
class는 grouping을 해주는 것이라고 이해하면 된다.  

class라는 속성의 값은 여러개의 값이 들어올 수 있고, 띄어쓰기로 구분한다.  
여러개의 선택자로 하나의 tag를 공동으로 제어할 수 있다.  
-> 나중에 실행되는 명령(보다 가까이에 있는 명령)의 영향을 받음  

<h4>id = "active"</h4>
#active : id 선택자가 class 선택자보다 우선순위가 더 높음  

우선순위 : id 선택자 > class 선택자 > tag 선택자  
-> 이유??  
-> id의 값은 단 한번만 등장해야한다. 중복되서는 안된다. 유일무이한 값.   
-> tag 선택자가 id 선택자보다 훨씬 포괄적이다.   

<h4>[박스모델]</h4>
h1은 원래 block level element이고, a는 원래 inline element이다.<br><br>
    display:inline; -> block level element를 inline element로 바꾼다.<br>  
    display:block; -> inline elemet를 block level element로 바꾼다.<br>
    display: none; -> 화면 상에 안보이게 바꾼다. <br><br>

h1과 a에 같은 css 코드를 적용하고 싶다면,  
콤마라는 선택자를 사용해서 코드의 중복을 해결해 양을 획기적으로 줄일 수 있다.  

아래의 한줄짜리 코드가 다음 세줄짜리 코드와 같은 의미이다.  
border: 5px solid red;  
=<br>
border-width: 5px;  
border-style: solid;  
border-color: red;  

css 코드의 순서는 중요하지 않다.

<h4>[Grid]</h4>

Grid는 2차원 layout 시스템이다.
- div tag
div tag는 스타일 용도로만 사용되는 tag이다.  
같은 목적의 tag로 span이라는 tag도 있다.
span은 inline tag이고, div는 block level element이다.
<p>

    #grid {
        border: 5px solid pink;
        display:grid;
        grid-template-columns: 150px 1fr;
    }
</p>        
- fr 단위는 그리드 컨테이너에서 그리드 행과 열의 크기를 나타내는 공간의 비율이다.<br>
    grid-template-columns: 1fr 2fr 은 화면을 1:2비율로 차지한다는 의미이다.<br>
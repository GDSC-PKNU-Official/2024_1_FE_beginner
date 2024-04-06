## 2주차 강의 CSS 요약

## CSS 사용 방법
#### STYLE 태그 사용
> <style\> 태그 : 디자인에 관련된 css 언어의 문법 처리 
> -> 유지보수 용이해지는 장점  
> 
> if) **모든** <a\> 태그(선택자 selector)에 대해 폰트 색(효과)을 바꾸고 싶다  
> <pre>
> a {   
>   color:red;   
> }</pre>
>
> **a** : selector 선택자  
> **color:red;** : declaration 선언,효과  
> **color** : property 속성 ex) text-decoration, font-size, text-align  
> **red** : value 값  

#### STYLE 속성 사용
> 선택자를 사용할 필요 X  
> 
> if) **선택적으로** <a\> 태그(선택자)에 대해 폰트 색(효과)을 바꾸고 싶다  
> <pre>
> &lt;a href="" style="color:red"&gt;</pre>

## CLASS 선택자
> <style\> .~  
> <body\> class="~"  
> 태그 선택자보다 우선순위 가짐
> 가장 아래에 입력한 class가 우선순위 적용

## ID 선택자
> <style\> #~  
> <body\> id="~"  
> class보다 우선순위 가짐

-> 원하는 효과 정교하게 부분적 타겟팅 가능

## 박스 모델
> block : 화면 전체를 쓰는 태그 ex)h1   
> inline : 자신의 부피만큼만 쓰는 태그 ex)a   
> -> display 속성으로 서로 바꿔서 나타낼 수 O 
> -> width를 통해 부피 선택
>  
> padding : 콘텐츠와 테두리 사이 간격(안)  
> margin : 테두리 사이 간격(밖)  

## 그리드
> <div\> <span\> : 아무 의미 없는 태그 (디자인용)  
> <div\> block  
> <span\> inline  
>
> if) <div\> 를 이용하여 한 줄에 나타내고 싶을 때  
> <pre>
> &lt;style&gt;
>   #grid{
>     display:grid;
>     grid-template-columns: 150px(고정) 1fr(유동);
>   }
> &lt;/style&gt;
>
> &lt;body&gt;
>   &lt;div id="grid"&gt;
>     &lt;div&gt;고정부분&lt;/div&gt;
>     &lt;div&gt;유동부분&lt;/div&gt;
>   &lt;/div&gt;
> &lt;/body&gt;

## 반응형 디자인
> 조건에 따라 화면에 보이는 것을 다르게  
> ex) 화면의 크기가 800px보다 작을 때  
> -> @media(max-width:800px)

## CSS 코드의 재사용
> 중복제거의 중요성 -> 여러개의 공통된 css 스타일  
> <style\> 태그 제거 후, &lt;link rel="stylesheet" href="style.css"&gt;를 <head\> 태그 안에 입력
<2주차 CSS 강의 내용 정리>

웹페이지의 중요성이 커지면서 이를 꾸미고자 하는 욕심이 생겨남
따라, 이에 맞추어 HTML 내에서 디자인과 관련된 <font></font>라는 태그를 만들었음.
하지만 정보를 담고 있는 다른 태그와 달리, 이를 담고 있지 않아 웹페이지의 정보로서의 가치에 적절치 않음
따라, 지금은 거의 사용치 않음.

<!--    --> 사용하면 주석(?) 처리 
CSS코드를 사용하고자 한다면 <style></style> 태그를 사용해야 함(head 태그 내에서 사용) -> HTML과 CSS는 완전히 다른 언어이기에 어디서부터 어디까지가 CSS인지 컴퓨터에게 알려주어야 하기 때문.
HTML이 정보에 전념토록 하기 위해서 디자인에 대한 기능을 가져간 것이 CSS.
또한, CSS를 이용해 디자인하는 것이 보다 효율적이기에 사용되는 것임.

웹페이지 안에다가 CSS를 삽입하는 2가지 방법
1.바로 위의 경우처럼  <style></style> 태그를 쓴다. 태그 안에 선택자, 효과(선언)이 들어가야 함 
(이때 선택자에 대하여 여러 개의 효과를 지정할 수 있는데 이 효과를 ;로 구분)
ex) <style>
	a --> 선택자(selector) {  
	color : black ;  -> 효과(선언,declaration)                 //여기서 color는 property, red는 value
	} 
</style>
2. 스타일 속성을 쓴다
ex) <li><a href="index.html" style ="color : red">HTML </li>

CSS에서 밑줄을 없애고 싶다. 장식을 없애고 싶다고 하면 style에서 text-decoration: none; 하기
밑줄 추가하고 싶으면 style="text-decoration:unerline";

폰트 사이즈를 더 크게 하고 싶다-> font-size:(원하는 숫자 넣기)px;
폰트를 가운데 정렬하고 싶다 -> text-align: center;  (왼쪽정렬이면 left, 오른쪽 정렬이면 right)

HTML문법으로 2가지이상을 그룹으로 묶을 수 있음
class="(원하는 그룹이름)" 이렇게 하면 됨
선택자를 class로다가 하고 싶다면 클라스명 앞에"."붙이면 됨 
ex) .coffee {
	}
class는 여러개의 값이 들어갈 수 있고 띄어쓰기로 구분. 하나의 태그에는 여러개의 속성이 들어갈 수 있음

id="(넣고 싶은 아이디)"  ->>> 중요!! 아이디의 값은 단 하나만 등장해야 됨!! 즉 class처럼 묶을 수 없다는 말임!! 단 하나만!!
선택자를 id로다가 하고 싶다면 클라스명 앞에"#"붙이면 됨 
ex) #me {
	}	

적용 우선순위 1.id 선택자 2.class선택자 3.태그 선택자!!  ~> 구체적인 것이 포괄적인 것보다 우선순위가 크다!
만일 위의 순위를 가릴 수 없다면 가장 가까운 것(즉, 가장 마지막에 있는 것)이 영향력이 크다!

// 참고 element = tag

h1,h2--- 과 같은 것들은 화면 전체를 쓰며(block level element)라고 불리고, 그 외는 부분을 사용 즉, 자기 크기만큼 쓰는 것은(inline element)
기본값이 각각 block, inline임. 원한다면 CSS를 통하여 display:inline ;  display:block 이런 식으로 하여 바꿀 수 있음
혹시나!! 태그들을 웹사이트상에서 안 보이도록 하고 싶다면~(막 주제인 걸 드러내기 싫은?이러한 경우) CSS로 display:none;

BOX 모델 -> 부피감을 결정!                
{
CSS를 이용하여 
border-width:(숫자)px -->두께 
border-color:(색)px --> 색
border-style:(스타일)px -->선 형식(점선...이런 거)
-->>> 위에 것을 하나하나 안 치고 한 번에 정리도 가능 !! --> ex) border: 5px, solid, red;
->아래만 선을 긋고 싶다, 왼쪽에만 ~ 이러한 경우에는 border- bottom: 이런 식으로 해서 위와 같이 적용시켜주면 됨

* 여기서 content와 테두리 사이에 간격을 두고 싶다면 padding:~; 사용
content의 크기를 수정하고 싶다면 폭은 width: ~, 높이는 height:~ 사용
테두리와 테두리 사이의 간격을 조정하고 싶다면 margin:~사용
->>>>>>> margin 안에 border, border 안에 padding, padding 안에 content 
}  
*웹페이지에서 마우스 오른쪽 클릭 후 검사를 누르면 이를 확인 가능

* 디자인이라는 목적을 위한, 어떠한 의미를 가지고 있지 않은 태그 -> 그렇기 때문에 묶을 때 사용하는 것이 좋음
<div></dive> -> block level element임
<span></span> -> inline level element임

그리드로 만들고 싶다면 그리드로 만들고 싶은 것끼리 묶고, style로 가서 dispaly: grid; grid-template-clumns(칼럼말고도 여러 개 있음 원하는 것 사용): 150px 1fr;
위처럼 px로 하라하고 할 수 있고 1fr을 쓰라면 전체 fr에서 정도 써라는 뜻! 옆에 나란히 쓰면 됨

만일 특정한 id 혹은 class 내의 태그에만 효과를 넣고 싶다면 class/id 태그명 {}; 이렇게 사용
ex) #grid ol{};

반응형 웹(responsive web) : "화면의 크기"에 따라 웹페이지의 각 요소들이 반응해서 최적화된 모양으로 바뀌는 웹
화면의 특성들에 따라, 어떠한 조건이 만족할 때만 css가 동작하도록 만드는 것은 미디어 쿼리라고 불림.
이를 사용하기 위해서는 style태그에 @media(max(혹은 min)-width(혹은 원하는 것): ex)80px {} )을 적고 
이 조건을 만족했을 때 CSS가 적용되는 선택자와 효과를 적기(일반적으로 위에 적은 것처럼)

여러개의 HTML 파일들이 동일한 CSS 형식(?),스타일(?)을 가지고 있을 때 (파이명).css 라는 파일을 따로 만들고 
<head>태그 아래에 해당 css 파일의 링크를 걸어준다. 
<link rel="stylesheet" href="(css 파일명)">

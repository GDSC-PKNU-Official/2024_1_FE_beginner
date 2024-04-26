생활코딩 CSS 강의
<font> 태그가 없어진 이유
1. 웹 페이지에서 디자인은 중요하지만 디자인 자체가 정보인 것은 아님->정보가 아닌 디자인의 코드가 삽입되며 웹 페이지의 정보로서의 가치 급락
2. 태그가 너무 많을 때->일일이 수정...

<!-- --> <- 웹 페이지에서 어떤 문장을 실행시키고 싶지 않을 때(주석)
CSS는 HTML과 완전히 다른 언어 -> 컴퓨터에게 이를 HTML의 문법으로 전달 -> <style> 태그
a(Selector, 선택자) {
         color(Property):red(Value); <- (Declaration, 선언 또는 효과)
}
-> CSS는 불필요한 중복을 제거할 수 있음(웹 페이지의 사이즈, 유지보수, 가독성 측면에서 이득), 디자인과 정보 코드를 분리하여 정보만에 전념할 수 있도록 만들 수 있음
CSS 효과를 이용하는 방법: <style> 태그 이용, style 속성 이용(특정 태그 몇 개만 다른 디자인을 하고 싶을 때, style 속성은 HTML임)

모르는 속성, 선택자 -> 구글링, 다 외울 필요 없음
text-decoration: none; -> 텍스트 꾸밈 없애기(밑줄, 강조, 기울임 등)
텍스트의 크기를 바꾸고 싶을 때 검색 -> css text size property -> font-size
text-align: center; <- 텍스트 가운데 정렬

class <- 어떤 공통된 특성을 가진 태그들에 같은 디자인을 부여하고 싶을 때
class 값이 saw인 태그들의 CSS 효과 설정: .saw(점 필요)
class 속성에는 여러 개의 값이 들어올 수 있고 띄어쓰기로 구분, 하나의 태그에는 여러 개의 속성이 들어올 수 있고 여러 개의 선택자를 통해 하나의 태그 공통 제어 가능(근데 좋은 방법은 아님...)
하나의 태그 안에 속성이 여러 개 부여되었다면 style 태그 안에 들어간 속성 중 더 나중에(가장 최근에) 언급된 것, 더 적용 범위가 좁은 것이 우선적용됨 -> style 태그의 선택자에 #라는 ID 선택자를 붙이면 ID 선택자가 들어간 것이 우선적용
ID 선택자의 태그인 active -> 다시 active라는 이름을 쓸 수 없음(ID는 중복 불가, 유일무이한 값, 여러 개의 요소에 사용할 수 없고 한 줄에만 사용 가능)
우선순위 적용 순서: 1. ID 선택자 2. 클래스 선택자 3. 태그 선택자

CSS box model
HTML의 태그들은 태그의 쓰임에 따라서 화면 전체를 쓰거나(block level element) 자기 크기만큼의 부피를 사용(inline element) -> display:block; 또는 inline을 통해 이 값을 바꿀 수 있음(display:none; <- 해당 태그를 안 보이게)
다른 태그에 같은 스타일 적용 -> 콤마(,)를 이용하면 중복을 줄일 수 있음
같은 대상(e.g. border)에 대해 지정할 떄는 border: 5px solid red; 이런 식으로 중복을 없앨 수 있음(순서 상관 X)
width(콘텐츠 너비), height(콘텐츠 높이)-padding-border-margin 순으로 콘텐츠와 거리

콘텐츠 아래 밑줄: border-bottom
콘텐츠 세로줄: border-right border-left -> 태그의 폭(width), padding, margin(0으로 하면 여백 없어짐)을 지정하여 선 위치 조정
디자인만을 위해서 어떤 의미도 없는 태그를 이용해야 할 때가 있음 -> <div> 태그(<h1> 태그와 같은 크기)로 부모 태그, 자식 태그 생성, 부모 div 태그에 id 부여하여 디자인 가능
display: grid; <- row와 column 이용, 아이템 배치
grid-template-columns: 150px(NAVIGATION) 1fr(ARTICLE);
1fr: 남은 화면 전체를 다 씀
사이트: caniuse.com -> CSS, HTML, JavaScript에서 웹 페이지들이 해당 기술을 얼마나 채택하고 있는지를 보여줌(초록색: 지원)
<ol> 태그를 id 값이 grid인 것으로 한정하고 싶을 때: #grid ol { 스타일 }
반응형 웹 페이지(Responsive Web): 화면의 크기에 따라 모습이 달라지는 웹 페이지
반응형 디자인: 화면 크기에 따라 웹 페이지의 각 요소들이 반응해서 동작
미디어 쿼리: @media(min-width:800px){
          스타일 코드
}
구글 개발자 툴: 화면 크기 확인 가능

한 사이트의 여러 웹 페이지에 동일한 스타일을 <style> 태그를 이용하여 적용 -> 중복, 제거 필요
CSS 코드만 복사해서 별도로 CSS 파일을 만들기 -> <link> 태그 사용, <link rel=stylesheet" href="파일 경로 파일 이름">
캐싱: 한 번 style.css 파일을 다운 받으면 컴퓨터에 파일이 저장되어 다음에 요청이 있을 때 저장된 파일을 가져와 네트워크 속도를 높일 수 있게 됨(적은 트래픽)

nth-of-type(n): 해당 태그의 n번쨰 요소
position 속성: HTML 문서 상에서 요소가 배치되는 방식 결정, top bottom right left 속성과 함꼐 사용
position: static -> 별도로 position 속성을 지정하지 않았을 때, HTML 문서 상에서 원래 있어야 하는 위치에 배치
position: relative -> 원래 위치를 기준으로 상대적 배치(상하좌우 속성 이용)
position: absolute -> 가장 난해하고 주의해서 사용해야 하는 속성, DOM 트리를 따라 올라가다가 static이 아닌 상위 요소의 배치 기준에 따라 배치, 요소 상위에 조건을 만족하는 요소가 없을 경우 DOM 트리 최상단의 <body> 요소가 배치 기준(대부분은 부모 요소를 기준으로 적용, 부모 요소의 position 속성을 relative로 저장하는 것이 관례), 본 속성을 가진 요소는 HTML 문서 상에서 독립되어 앞뒤 요소와 상호작용 X
position: fixed -> 브라우저 전체화면을 기준으로 배치, 요소를 항상 고정된 위치에 배치하고 싶을 때 사용, absolute와 마찬가지로 독립되어 앞뒤에 나온 요소와 상호작용 X
position: sticky -> 해당 요소를 스크롤을 통해 지난 후에도 계속해서 화면에 붙어 있음
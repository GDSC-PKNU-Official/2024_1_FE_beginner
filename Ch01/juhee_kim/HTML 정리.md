<h1>HTML 정리</h1>

<h3>HTML이란?</h3>

- 웹페이지를 만드는 컴퓨터 언어<br>
- 기본 문법: 태그<br>

---

<h3>줄바꿈 태그</h3>

- ```<br>```
    - 줄바꿈만을 위한 태그
    - 장점: 원하는 만큼 간격을 줄 수 있음
- ```<p>```
    - 단락 표현할 때 좋은 태그
    - 장점: 단락에 단락 태그 사용 = 웹페이지를 정보로서 가치있게 해줌
    - 단점: 단락과 단락 사이 간격 고정 (-> CSS로 해결 가능)

---

<h3>속성(attribute)</h3>

- 태그의 이름만으로는 정보가 부족할 때 사용
- ex) img 태그에서 src, width, height 등

---
<h3>HTML 구조</h3>

- ```<title>``` 태그 필수 (검색엔진이 웹페이지를 분석할 때 가장 중요시하는 태그)
- ```<body>``` : 본문 내용
- ```<head>``` : 본문에 대한 설명
- ```<meta charset="utf-8">``` : 문자가 깨진다면 해당 코드를 사용
```
<!doctype html>
<html>
    <head>
        <title></title>
        <meta charset="utf-8">
    </head>
    <body>
    </body>
</html>
```

---
<h3>웹 사이트</h3>

- 웹 페이지들의 그룹
- 링크 첨부 : ```<a href="~.html"></a>```

---
<h3>서버 & 클라이언트</h3>

- 클라이언트(Client) : 요청하는 컴퓨터
- 서버(Server) : 응답하는 컴퓨터
- 웹브라우저는 클라이언트에서 작동
- 웹서버는 서버에서 작동
- <b>Frontend는 웹브라우저를 만드는 것</b><br>
<img src="https://s3-ap-northeast-2.amazonaws.com/opentutorials-user-file/module/3135/7753.jpeg" width="200px">
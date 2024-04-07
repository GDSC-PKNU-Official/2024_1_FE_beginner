# 강의요약 - position (CSS)

position 속성
: html 요소를 원하는 위치에 배치 

1. static
- 기본값
- html 문서 상 원래 있어야 하는 위치
- top, left, bottom, right 속성은 적용되지 않음

2. relative
- <strong>원래위치</strong>를 기준으로 설정한 만큼 이동
- top, left, bottom, right 속성 사용 가능

3. absolute
- 배치기준:
    1.  position 속성이 자신&static이 아닌 첫번째 상위 요소
    2. 만약 상위 요소가 자신&static이 아닌 요소가 없을 때 → 최상위 body 요소
- 부모 요소를 relative로 설정 후 absolute 사용
- 인접 요소들과 상호작용 하지 않고 독립됨

4. fixed
- 화면에 요소 고정
- 스크롤 시에도 고정되어 움직이지 않음
- 배치기준: 브라우저 전체화면 (viewport)

5. sticky
- 스크롤 시에 효과 나타남
- 스크롤을 계속 할 때, 화면 위에 붙어 사라지지 않고 유지됨.

**스크롤링
1. main height 늘리기
2. main height 줄이기:
- overflow : auto; → 자식요소가 main 밖을 빠져나오지 않음

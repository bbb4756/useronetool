3/21 (1주차 월요일)

라우터 분리, DB 스키마 오전 ~ 오후

front/user 쪽의 html 아웃라인 작성 - 야간

로그인, 회원 가입 기능은 카카오를 통해 구현 해야하는데

이걸 어떻게 쓰는지 잘 모르겠다.

oauth에 대한 공부, 수업 시간에 한 코드에 대한 복습이 필요할 것 같읍니다.

 --------------------------

3/22 (1주차 화요일)

todo

1. 메인 페이지 - 로그인/아웃 > 여기서 가능하면 oauth까지 구현해본다.

로그인 하면 사용자 정보를 이용, jwt를 만들어 쿠키를 준다. 로그아웃하면 쿠키를 지운다.

현재 회원 가입 기능은 미구현이므로 우선 DB에 직접 아이디를 하나 만들어서 그걸 가지고 해보자.

insert into user(userid, userpw,userimg,  username, nickname, address, gender,phone, mobile, email, userintro) 
values('sila', '1234', 'sss', 'qwerty', 'qwerty','seoul', '남자','00000000', '00000000', '1234@gmail.com', '살려줘');

front - 로그인 시도 (id, pw 입력후 axios를 통해 back으로 전송) 
> back에서 그걸 받아다 DB의 데이터셋과 비교
> 일치하는 데이터셋이 있으면 그에 맞는 응답을 전달

done

2. 채팅

사용자에 따라 다른 아이디가 출력 되게끔 하는 채팅 기능이 필요하다. 
예전에 혼자 시도 해봤는데 안 됫는데 ㅠㅠ..

얘는 소켓 통신을 사용해야 함. (배웠던거 대충 배껴서 구현함.)

다만, userid는 로그인 후 쿠키를 쪼개던가 해서 값을 받아서 미들웨어에서 html 렌더링할때 같이 던져줘야 할 것 같아서 나중으로 미룸.

일단 나는 jwt를 쪼개서 userid value를 다시 얻고 그걸 던져 주는 방법을 생각하고 있는데 글쎄..

!! problem !! 
jwt cookie를 해석해 유저 정보를 얻는것 까진 되는데 이걸 socket.js로 주질 못하고 있습니다. 

http > ws 로 데이터 전송을 하는데 특별한 기능이 필요한걸까요?

아니면 제가 뭔가 헛짓을 하고 있는걸까요? 

!! solve !!
선생님께 질문을 통해 해결했습니다. 

우리가 서버를 구동하면 server.js가 콜 스텍 가장 아래 쌓이고 

그 다음 socket.js가 실행이 되므로 

server.js에서 socket.js로 데이터를 export할 수 없습니다.

미래에서 과거로 복권 당첨 번호를 보낼 수 없는 것과 같은 원리입니다.

다행히도 ws에도 요청 헤더가 있습니다. ( 선생님이 힌트 주심.. ㅠㅠ..) 

거기에 쿠키가 있으므로 그걸 잘 해석해서 넣어주면 될 수도 있을 것 같습니다. 안되면 말고..

해보니까 잘 실행됩니다. 다행 ㅠㅠ..

done

3. 야간 작업

집에 가서 저녁때는 oauth의 개념에 대해 조금 더 공부하고

수업 들었던 내용 코드를 다시 한 번 확인해볼 예정입니다.

그래서 코드 복붙까지만 성공해도 뭐..

지금 어떻게 구현할지 잘 모르겠는 부분은

'카카오 로그인을 할 경우, 저희가 그 사람의 정보를 어떻게 DB에서 가져올 수 있는가' 입니다.

프론트에서 로그인 > axios > 백엔드 > DB > 핸드폰 번호로 select

해서 가져와야 할까요?

그렇다면 거기서 입력해서 카카오의 로그인 페이지에 전송한 핸드폰 번호를 저희가 다른 곳으로도 가져올 수 있을까요?

직접 해봐야 알 것 같습니다. 안되면 도와주세요..
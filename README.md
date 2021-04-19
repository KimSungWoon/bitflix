https://pedantic-northcutt-3160cd.netlify.app/#/movie

## 넷플릭스 영화 홈페이지 react로 제작

### API (자료 끌어오기)
 - Movies : nowPlaying, upcomming, popular, movieDetail
 - Tv : topRated,popular, airingToday,showDetail
## component
 - App.js : 
 - GlobalStyles.js :
 - Header.js : 라우터로 인해 컴포넌트가 교체되면 Header에 변화를 줭 함
 - Loader.js : 로딩 페이지
 - Router.js : 라우터만 관리 하는 컴포넌트 / Switch 사용해 하나의 라우터만 타게 만든다.
### router
#### -container
#### -present





## [AWS,Netlify 설정]

[AWS]

1. 인스턴스 시작
- 단계 1: Amazon Machine Image(AMI) 선택
	- Ubuntu Server 18.04 LTS (HVM), SSD Volume Type 
	- T2.micro 시작
	- 키페어  생성 >키페어 이름 :  bit1208 > 키페어 다운로드 >  인스턴스 시작 > 인스턴스 보기 > 중지(일시정지),종료(삭제)
		- 퍼블릭 IPv4 주소 확인 [ IP: 18.224.180.***] [ port :2701* ] 
		  

2. Terminal
- cd downloads 
- sudo chmod 400 bit1207.pem > 
- ssh -i {key file 끌어넣기} ubuntu@[18.224.180.***]  > yes
- sudo service mongod restart;
- sudo vi /etc/mongod.conf
	- >  bindIP : 0.0.0.0 (전체연결)
	- >  security 밑에 uthorization : enabled 설정
- sudo update-alternatives --install /usr/bin/python python /usr/bin/python3 10
- sudo apt-get update
- sudo apt-get install -y python3-pip
- sudo update-alternatives —install /usr/bin/pip pip /usr/bin/pip3 1
- pip install flask pymongo requests bs4
-
- wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -&&
- echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list&&
- sudo apt-get update&&
- sudo apt-get install -y mongodb-org
		- sudo service mongod start
- use admin;
- db.createUser({user:"계정명", pwd:"패스워드", roles:["root"]})
	- sudo service mongod restart;
- 앞에 포트 번호 없애주는것(포트 포워딩) : sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 5000
- 터미널 꺼도 서버 돌리기 : nohup python app.py &
- 서버 끄기 :  ps -ef | grep ‘python’ 에서 번호를 확인한다 > kill -9 [PID번호 입력함]
    



[Netlitfy]
- `올린 후 -> site setting -> build&deploy -> build command: CI= npm run build 로 수정`


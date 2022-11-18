#
# `TIL` (Things I Love) Front-end 

### 목차

[1. 프로젝트 설명](#1프로젝트-설명 )
<br/>
[2. 사용 라이브러리](#2사용-라이브러리)
<br/>
[3. 주요 기능](#3주요-기능)
<br/>
[4. 프로젝트 구조](#4프로젝트-구조)
<br/>
[5. 페이지별 설명](#5페이지별-설명)
<br/>

#
## 1.프로젝트 설명 
#
<img width="480px" src="https://drive.google.com/file/d/1ulvfjbgBfFsw7jpDlOsWPDfKbm_PYhi4/view?usp=share_link"/>


좋아하는 것들을 리스트로 저장할 수 있는 앱입니다 .  리액트와 리덕스를 기반으로 만들어졌고 EC2 인스턴스의 Docker Container로 배포되어 있습니다. 아래 링크에서 앱을 사용해볼 수 있습니다. REST API 방식으로 EC2 인스턴스에 Docker container로 배포되어 있는 Spring-boot API 서버에서 데이터를 받아오고 있으며. Spring-Security form login 방식을 통해 로그인 기능, session을 통한 로그인 유지가 구현되었습니다. 

<br/>

> Site URL

<br/>

- https://til-api.space

<br/>

#
## 2. 사용 라이브러리
#

<br/>

Front-end Stack||
--|--  
라이브러리|`React.js 18.2.0`
상태관리|`react-redux 8.0.4`
HTTP client | `Axios 1.1.3`
Component Design | `Marterial-Design` , `Styled Component` ,` SCSS`


#
## 3.주요 기능
#

카테고리 저장 

장소저장

카테고리별 검색 

검색옵션별 검색

영수증 등록

네이버로 검색

로그인 , 로그아웃


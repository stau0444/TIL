# `TIL` (Things I Love) Front-end 

#### 목차

[1. 프로젝트 설명](#1프로젝트-설명 )
<br/>
[2. 사용 라이브러리](#2사용-라이브러리)
<br/>
[3. 프로젝트 구조](#3프로젝트-구조)
<br/>
[4. 주요 기능 설명](#4주요-기능-설명)
<br/>



## 1.프로젝트 설명 

<br/>

<img width="300" style="border-radius:20px" alt="logoImage" src="https://user-images.githubusercontent.com/51349774/202742588-1871ff0d-c0a1-4de6-b5d4-49366c0b069c.png">

<br/>

좋아하는 것들을 리스트로 저장할 수 있는 앱입니다 .  리액트와 리덕스를 기반으로 만들어졌고 EC2 인스턴스의 Docker Container로 배포되어 있습니다. 아래 링크에서 앱을 사용해볼 수 있습니다. REST API 방식으로 EC2 인스턴스에 Docker container로 배포되어 있는 Spring-boot API 서버에서 데이터를 받아오고 있으며. Spring-Security form login 방식을 통해 로그인 기능, session을 통한 로그인 유지가 구현되었습니다. 

<br/>
<br/>

> Site URL

<br/>

- https://til-api.space

<br/>

## 2. 사용 라이브러리

<br/>

Front-end Stack||
--|--  
라이브러리|`React.js 18.2.0`
상태관리|`react-redux 8.0.4`
HTTP client | `Axios 1.1.3`
Component Design | `Marterial-Design` , `Styled Component` ,` SCSS`

<br/>

## 3.프로젝트 구조

<img width="517" alt="TilBuildAndDeployFlow" src="https://user-images.githubusercontent.com/51349774/202758185-31986614-dc6c-4ea2-8ab4-8017a5fe875d.png">

<br/>

## 4.주요 기능 설명


#### `카테고리 , 장소 저장 `
---
<img width="60%" style="border:'1px solid gray'" alt="카테고리장소추가" src="https://user-images.githubusercontent.com/51349774/202737409-bccc475d-488b-4e42-a238-218b765d6944.gif"/>

#### `카테고리별,정렬 옵션  검색`
---
<img width="60%" style="border:'1px solid gray'" alt="검색" src="https://user-images.githubusercontent.com/51349774/202738184-fcffae38-286e-4961-9d05-019436975ce3.gif"/>


#### `장소 디테일 화면`
---

<img width="60%" style="border:10px solid gray" alt="장소 정보화면" src="https://user-images.githubusercontent.com/51349774/202738101-931039d5-494b-40bf-bc6d-d265c4d152e1.gif"/>


#### `영수증 등록`
---
<img width="60%" style="border:1px solid gray" alt="장소 정보화면" src="https://user-images.githubusercontent.com/51349774/202737749-dbae5e82-c14d-4fc2-9a87-65424d94897e.gif"/>


#### `네이버로 검색`
---
<img width="60%" style="border:1px solid gray" alt="네이버링크" src="https://user-images.githubusercontent.com/51349774/202737796-a33e8185-1c77-449e-9098-d528f66fb0c6.gif"/>


#### `회원가입`
---
<img width="60%" style="border:1px solid gray" alt="회원가입" src="https://user-images.githubusercontent.com/51349774/202737899-ff60ec9e-6445-444c-8848-7cf818541001.gif"/>


#### `로그인 , 로그아웃`
---
<img width="60%" style="border:1px solid gray" alt="로그인 , 로그아웃" src="https://user-images.githubusercontent.com/51349774/202739227-27827e75-fb83-4f93-9095-2b665ce2fc9f.gif"/>
<br/>

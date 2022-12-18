## 🚀 Fun game studio(심심풀이 제작소) 🎮

<br>
<strong>심심할 때 하기 좋은 간단한 게임 베스트 8!</strong>

<br>

## 🗓 프로젝트 기간

2022.10.31 ~ 2022.11.18
  <br>
## 📎 Link

<br>

## 🍀 나의 개발일지

<details>
<summary>✏️ 프로젝트를 개발하며 작성한 개발블로그입니다.</summary>

- [구구단](https://velog.io/@pjh1011409/PJHs-Game-World-Main-Page-infzil6x)  
- [끝말잇기](https://velog.io/@pjh1011409/PJHs-Game-World-%EB%81%9D%EB%A7%90%EC%9E%87%EA%B8%B0) 
- [숫자야구](https://velog.io/@pjh1011409/PJHs-Game-World-%EC%88%AB%EC%9E%90%EC%95%BC%EA%B5%AC)
- [반응속도체크](https://velog.io/@pjh1011409/PJHs-Game-World-%EB%B0%98%EC%9D%91%EC%86%8D%EB%8F%84%EC%B2%B4%ED%81%AC)
- [가위바위보](https://velog.io/@pjh1011409/PJHs-Game-World-%EA%B0%80%EC%9C%84%EB%B0%94%EC%9C%84%EB%B3%B4)
- [로또뽑기](https://velog.io/@pjh1011409/PJHs-Game-World-%EB%A1%9C%EB%98%90%EB%BD%91%EA%B8%B0)
- [지뢰찾기](https://velog.io/@pjh1011409/PJHs-Game-World-%EC%A7%80%EB%A2%B0%EC%B0%BE%EA%B8%B0)
- [틱텍토](https://velog.io/@pjh1011409/PJHs-Game-World-%ED%8B%B1%ED%85%8D%ED%86%A0)

</details>
 
  
<br>

## ⚙️ 주요 기능 

- ##### 회원가입, 로그인 및 인증 🔐
  

- ##### 커뮤니티 🌈
  - 로그인시 커뮤니티를 생성 가능
  - 중복되는 이름의 커뮤니티는 생성할 수 없도록 유효성 검증
  - 커뮤니티마다 게시글을 생성 가능
  - 커뮤니티 프로필 이미지와 배너 이미지를 선택적으로 업로드 가능
  - 본인이 생성한 커뮤니티에 한해서 수정, 삭제 가능

- ##### 게시글 ✏️ 
  - 로그인시 게시글을 생성 가능
  - 게시글에 선택적으로 이미지 업로드 가능
  - 본인이 작성한 게시글에 한해서 삭제 가능

- ##### 댓글 달기 💬
  - 로그인시 게시글마다 댓글 작성 가능

- ##### 투표하기 👍 
  - 게사글, 댓글에 좋아요 누르기 가능

- ##### 검색하기 🔍 
  - 메인페이지에서 전체 게시글에 대한 검색이 가능
  - 검색시 입력한 텍스트에 대한 데이터에 하이라이트 출력

- ##### 사용자 페이지 👤
  - 해당 사용자가 작성한 게시글과 댓글 목록을 작성일자 순으로 조회 가능
  - 해당 사용자의 가입날짜를 조회 가능

  <br>



<br>

## 💻 Service Architecture

<img width="800" alt="POP Structure" src="https://user-images.githubusercontent.com/81337674/208282368-622266b2-aa26-451f-95f5-412053261077.png">


<br>

## 📄 Project Architecture

#### Client

```
⭐️ src
|
├── 🗂 pages
│    │ 
│    ├── 📄 _app.tsx
│    ├── 📄 index.tsx
│    ├── 📄 login.tsx
│    ├── 📄 register.tsx
│    │ 
│    ├── 🗂 r
│    │   ├── 🗂 [sub]
│    │   │    ├── create.tsx
│    │   │    └── 🗂 [identifier] ─ 📄 [slug].tsx   
│    │   └── 📄 [sub].tsx      
│    │    
│    ├── 🗂 subs - 📄 create.tsx
│    └── 🗂 u - 📄 [username].tsx
│
├── 🗂 context ── auth.tsx
│   
├── 🗂 components 
│   │
│   ├── 🗂 common
│   │     ├── 📄 InputGroup.tsx
│   │     ├── 📄 Navbar.tsx     
│   │     ├── 📄 PostCard.tsx
│   │     └── 📄 Shimmer.tsx
│   ├── 🗂 mainPage
│   │     ├── 📄 Introduce.tsx
│   │     ├── 📄 PostList.tsx     
│   │     ├── 📄 Search.tsx
│   │     ├── 📄 Slider.tsx
│   │     └── 📄 SideBar.tsx
│   ├── 🗂 postPage
│   │     ├── 📄 CreateForm.tsx
│   │     ├── 📄 CreateImage.tsx     
│   │     ├── 📄 Contents.tsx
│   │     ├── 📄 CreateComment.tsx
│   │     └── 📄 CommentList.tsx
│   ├── 🗂 subPage
│   │     ├── 📄 SubBar.tsx
│   │     └── 📄 SubHeader.tsx
│   └── 🗂 userPage
│         ├── 📄 Comments.tsx
│         └── 📄 UserInfo.tsx      
│  
├── 🗂 types - 📄 types.tsx
│
└── 🗂 styles - 📄 globals.css
```
#### Server
```
⭐️ src
|
├── 📄 data-source.ts
├── 📄 server.ts
|
├── 🗂 entities 
│    ├── 📄 Entity.ts
│    ├── 📄 Sub.ts
│    ├── 📄 Post.ts
│    ├── 📄 Comment.ts
│    ├── 📄 Vote.ts
│    └── 📄 User.ts
│
├── 🗂 routes 
│    ├── 📄 auth.ts
│    ├── 📄 posts.ts
│    ├── 📄 subs.ts
│    ├── 📄 users.ts
│    └── 📄 votes.ts
│       
├── 🗂 middlewares 
│    ├── 📄 auth.ts
│    └── 📄 user.ts
│
└── 🗂 utils - 📄 helpers.tsx
```


<br>



<br>

## 🛠 Tools
<p>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"> 
  <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=white">
  
<br>

 <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white">
 <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white">
 <img src="https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white">
 <img src="https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=Babel&logoColor=%2361DAFB">

  <br>
    <img src="https://img.shields.io/badge/Testing library-E33332?style=for-the-badge&logo=Testing Library&logoColor=white">
    <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=Heroku&logoColor=white">
      <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white">

  <br>

  <img src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white">
  <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white">
    


<br>

## 👍 사용 이유

### Next.js + Typescript

- SSR방식을 사용함으로써 SEO(검색엔진최적화)에 유리
- 컴파일 단계에서 타입 관련 에러를 막을 수 있으며, 크로스 브라우징(브라우저 호환성) 문제 해결

### Node.js + Express

- 내장 HTTP 서버 라이브러리를 포함하고 있어 웹 서버에서 아파치 등의 별도의 소프트웨어 없이 동작하는 것이 가능
- Javascript 언어로 Front-end 뿐만 아니라 Back-end 개발 환경을 구성할 수 있기에 생산성이 높고 러닝 커브가 줄어듦
- 일련의 강력한 기능을 제공하며 라우팅과 미들웨어 기반으로 간결하고 유연하게 웹서버를 구현할 수 있음

### PostgreSQL & TypeORM
- 복잡한 쿼리와 대규모 데이터베이스를 다룰 수 있는 기능이 풍부한 데이터베이스이며, 빠르고 유연한 개발이 가능
- Node.js 에서 작동하며 항상 최신 JS,TS 기능을 지원하고 다양한 데이터 베이스를 지원하며, 
코드에 entities와 함께 작업 가능</li>


### Axios & useSWR
- response timeout 처리가 가능하며, Promise 기반으로 만들어져 데이터를 다루기 편리함
- 여러 컴포넌트들에 모두 동일한 원격의 상태를 공유하며, 캐시된 데이터를 이용하여 효율적인 동작을 만들어냄. 데이터를 가져오는데 특화.

<br>


# 🔥 Issue & TroubleShooting

####  👉 재사용성 높이기
- **Issue**  
  - 회원정보는 어느 컴포넌트에서나 자주 쓰이는 데이터. 따라서, 상위 컴포넌트에서 최하위컴포넌트까지 props로 정보를 전달하는 경우 발생
- **trouble shooting**
  - **Context**에 담아 재사용성을 높이고, **Reducer**를 통하여 관리하고 dispatch를 통해 데이터를 업데이트.
---
####  👉 Foreign key constraint
- **Issue**
  -  커뮤니티, 게시글, 댓글을 삭제하는 과정에서 외래키 참조에 대한 에러 발생.
- **trouble shooting** 
  - 테이블마다 외래키를 통해 연관관계를 맺고 있기 때문이다. 따라서, **CASCADE문**을 사용하여 삭제시 참조되는 테이블에서도 업데이트가 이루어지게 한다.

```
// Example
@ManyToOne(() => Post, post => post.comments, {
    nullable: false,
    onDelete: 'CASCADE',
  })
```
---
####  👉 미들웨어 생성하기
- **Issue** 
  - route 생성시 대부분의 기능들이 사용자 인증에 대한 핸들러를 사용
- **trouble shooting**
   - 중복적으로 사용되는 핸들러를 재사용하기 위하여 **미들웨어**로 분리
  - User Middleware : 여러 핸들러에서 유저 정보를 제공
  - Auth Middleware : 유저 정보 또는 유저 등급에 따른 인증 제공

---
####  👉 Infinite Scroll
- **Issue** 
  - 수많은 게시글에 대한 데이터 출력
- **trouble shooting**
   - **useSWRInfinite**을 통해서 페이지를 스크롤하는 동작에 반응하여 자동으로 필요한 데이터를 불러오는 기능을 구현
   - 페이지의 끝이라는 특정지점에 도달하는지 관찰하기 위해 **Intersection Observer API**을 사용

<br>

 
<br>




## 🎥 GIF
**구구단**|**끝말잇기**
:--------:|:--------:|
![구구단](https://user-images.githubusercontent.com/81337674/208301772-26636d44-12eb-4710-9b54-5cf2877f5bb6.gif)|![끝말잇기](https://user-images.githubusercontent.com/81337674/208302662-1f52d0a7-078b-4760-90c8-6dc8a865567d.gif)
**숫자야구**|**반응속도체크**
![숫자야구](https://user-images.githubusercontent.com/81337674/208302671-425517d9-5781-47b7-b63c-d8f34ef970b2.gif)|![반응속도체크](https://user-images.githubusercontent.com/81337674/208302669-c3e948b9-9226-4655-a4ce-d23ec26247f3.gif)
**가위바위보**|**로또뽑기**
![가위바위보](https://user-images.githubusercontent.com/81337674/208302773-4f313371-fbec-4835-8e47-ed73898a0508.gif)|![로또뽑기](https://user-images.githubusercontent.com/81337674/208302667-ae1b7bd8-eb91-4482-b31b-c8f97498f4ce.gif)
**지뢰찾기**|**틱텍토**
![지뢰찾기](https://user-images.githubusercontent.com/81337674/208302672-0f1a86f9-63b5-42b0-8207-b148e2833f49.gif)|![틱텍토](https://user-images.githubusercontent.com/81337674/208302674-5466ba4d-785d-4e72-b2fe-f6f6cdebe4ec.gif)

<br>

 
<br>

## ✚ 추가하고 싶은 기능

1️⃣  

2️⃣ 

3️⃣ 


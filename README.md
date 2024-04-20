# 🛍️ Shoppy Switches - HMX WORLD

![홈화면](./public/thumbnail.png)

## ⌨️ HMX 스위치들을 구매할 수 있는 쇼핑몰 (실제 결제 X)

> 개발 기간 : 2024.04.05 ~ 2024.04.20

> 추후 디자인 및 UI 개선 예정

## 🥞 Stack

<img src="https://img.shields.io/badge/React.js-61DAFB?style=flat-square&logo=react&logoColor=black">

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black">

<img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=TailwindCSS&logoColor=white">

<img src="https://img.shields.io/badge/React Router-white?style=flat-square&logo=reactrouter&logoColor=CA4245">

<img src="https://img.shields.io/badge/React Query-FF4154?style=flat-square&logo=reactquery&logoColor=white">

<img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black">

<img src="https://img.shields.io/badge/Cloudinary-3448C5?style=flat-square&logo=cloudinary&logoColor=white">

## 💡 HMX WORLD에 구현한 기술

🌱 Firebase를 이용하여 Google 계정을 통한 로그인

🌱 Admin 권한이 있는 유저는 상품 등록

- Cloudinary와 Firebase를 사용하여 데이터 저장과 불러오기

🌱 로그인 한 유저는 장바구니에 상품 추가 가능

- Firebase를 사용하여 데이터 저장과 불러오기

🌱 useCart, useProducts 같은 커스텀 훅을 사용

- UI와 비즈니스 로직을 담은 컴포넌트 간의 모듈화를 추구했습니다.

🌱 로그인하지 않은 사용자의 장바구니, 상품 등록 페이지 URL 접근을 차단

- ProtectedRoute

🌱 Context API를 사용하여 유저 정보 관리

- 전역 상태 관리 및 조회 (user, login, logout)

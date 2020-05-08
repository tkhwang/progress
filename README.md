# Progress

* Inspired by [(번역) 공개적으로 학습하라](https://tkhwang.me/2020-04-22-learn-in-public-korean-translation)
* **Study memo and tracker** for YouTube and other online lectures like TED, U-Demy, ...

## TL;DR

* Input side
  - 대부분 정보를 동영상을 통하여 많이 습득함.
  - 하지만, 사이트가 다 제각각이라서 이들에 대한 통합적인 관리가 개인 차원에는 잘 이루어지지 않음.
  - Learn-in-public 실천
  - 책보고, 강의 본 내용을 public 하게 공유. 마치 twitter 통해서 책 사진 찍어서 공유하듯이
* Output side
  - 자신의 공부한 내용을 잘 정리하여 다른 사람들과 공유
  - Medium like blogging
  - Instagram like social network : 신변잡귀, 뉴스가 아니라 학습 내용을 통한 social networking - 가치는 있는 공유

## Objective

- TOY PROJECT
- 현재 가장 편안하게 느끼는 기술을 가지고 내가 필요로 하는 서비스를 재미있게 만들어 본다.
- 새로운 architecture와 technology에 대한 적용은 어느 정도 서비스가 동작한 이후에 적용해본다.

## Technology

### Backend

- typescript
- nest.js
- decorator : routing controller, class transformer
- typeorm
- Controller-Service-Repository pattern
- Infra
  - 1st : heorku - ci/cd + deploy
  - final : AWS lambda + ECS

### Frontend

- typescript
- react
- mobx
- mobx state tree
- Ant design
- Infra
  - 1st : netlify - ci/cd + deploy
  - final : AWS S3 (?)

## Feature To-do

- [ ] Social login : kakao login, google, facebook, github
- [ ] Screen capture and study memo taking
- [ ] On-line study link paste 시 화면 thumbnail 멋있게 표현
- [ ] 개인 스터디 진도 관리 habit tracker


//회원관리 미들웨어
const express = require('express')
const router = express.Router()
const axios = require('axios')
const qs = require('qs')
const { createToken } = require('../../../back/utils/jwt')


let update = {}

router.use('/join',(req,res)=>{
    res.render('./user/join')
})

router.use('/login', (req,res)=>{
    res.render('./user/login')
})

router.use('/update', (req,res)=>{
    const {token} = req.cookies
    
    if(token !== undefined) {
    const userid = token.split('.')
    const deUserid = JSON.parse(Buffer.from(userid[1], 'base64').toString('utf-8'))
    update = { ...deUserid }
    
    res.render('./user/update',{
        user:update
    })
  } else {
      console.log('안됨')
  }
})

router.use('/profile', (req,res)=>{
    const { nickname } = req.query
    const {token} = req.cookies
    const userid = token.split('.')
    const deUserid = JSON.parse(Buffer.from(userid[1], 'base64').toString('utf-8'))

    if( deUserid.nickname == nickname) {
        res.render('./user/profile',{
            nickname:deUserid.nickname,
            userid:deUserid.userid
        })
    }
    else {
        res.render('./user/userinfo',{
            nickname:deUserid.nickname
        })
    }
})


router.use('/welcome', (req,res)=>{
    const { userid, username, nickname, mobile, email } = req.query
    res.render('./user/welcome', {
        userid:userid,
        username:username,
        nickname:nickname,
        mobile:mobile,
        email:email
    })
})

router.use('/user_board',(req,res)=>{
    res.render('./user/user_board')
})

router.use('/user_comment',(req,res)=>{
    res.render('./user/user_comment')
})

router.use('/user_like',(req,res)=>{
    res.render('./user/user_like')
})

router.get('/logout', (req, res) => {
    res.clearCookie('token', {path : '/'})
    res.send(`<script>alert('로그아웃 되었습니다.'); location.href='/';</script>`)
})

router.get('/profile2', async (req, res) => {
    const {token} = req.cookies
    const userid = token.split('.')
    const deUserid = JSON.parse(Buffer.from(userid[1], 'base64').toString('utf-8'))
    const nickname = deUserid.nickname
    res.redirect(`/user/profile?nickname=${nickname}`)
  })

module.exports = router
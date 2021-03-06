const express = require('express')
const router = express.Router()
const cate1Router = require('./cate1Controller.js')
const upload = require('../../../utils/upload.js')

router.use('/write', cate1Router.write)
router.use('/list',cate1Router.list)
router.use('/view',cate1Router.view)
router.use('/viewuser',cate1Router.viewuser)
router.use('/delete',cate1Router.del)
router.use('/update', cate1Router.update)
router.use('/check', cate1Router.check)

// like
router.use('/like',cate1Router.like)
router.use('/likeCount', cate1Router.likeCount)

// hashtag
router.use('/hashtagLoad', cate1Router.hashtagLoad)

// imgUpload
router.use('/imageUpload', upload.fields([{name:'img1'},{name:'img2'},
{name:'img3'},{name:'img4'},{name:'img5'}]), cate1Router.imgUp)
router.use('/imgLoad', cate1Router.imgLoad)
router.use('/thumbnail', cate1Router.thumbnail)

router.use('/imgUpdate', upload.fields([{name:'img1'},{name:'img2'},
{name:'img3'},{name:'img4'},{name:'img5'}]), cate1Router.imgUpdate)

router.use('/imgUpdate2', cate1Router.imgUpdate2)

// search
router.use('/search', cate1Router.search)
router.use('/searchThumbNail', cate1Router.searchThumbNail)

module.exports = router

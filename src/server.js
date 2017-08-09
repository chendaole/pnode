import path from 'path'
import util from 'util'

import express from 'express'
import utility from 'utility'
import superagent from 'superagent'
import cheerio from 'cheerio'

const PORT = process.env.PORT || 7001
const app = express()
const router = express.Router()

router.get('/', (req, res, next) => {
  const q = req.query.q

  if (q) {
    const md5Value = utility.md5(q)
    const sha1Value = utility.sha1(q)
    res.send({
      md5: md5Value,
      sha1: sha1Value
    })
  } else {
    res.send(`q should not be empty.`)
  }
})

router.get('/cnode', (req, res, next) => {
  const host = `https://www.cnodejs.org`

  superagent.get(host)
    .end((err, sres) => {
      const $ = cheerio.load(sres.text)
      
      const [ arr, urls ] = [
        $('#topic_list > .cell'),
        []
      ]

      arr.each((index, item) => {
        const $el = $(item)
        const [ $topic, $user ] = [
          $el.find(' .topic_title'),
          $el.find(' .user_avatar > img'),
        ]
        urls.push({
          url: host + $topic.attr('href')
        })
      })

      urls.length = 10
      const ps = []
      urls.map(item => {
        ps.push( superagent.get(item.url) )
      })

      Promise.all(ps).then(value => {
        const rs = []
        value.map(item => {
          const $ = cheerio.load(item.text)
          rs.push({
            title: $('.topic_full_title').text(),
            comment1: $('.reply_item').eq(0).find('.reply_content').text()
          })
        })

        res.send(rs)
      })
    })
})

app.use(router)

app.listen(PORT, (err) => {
  if (err) console.log(err)

  console.log(`server started at ${ PORT }.`)
})
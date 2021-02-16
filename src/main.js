const puppeteer = require('puppeteer');

(async() => {
  const URL = 'https://twitter.com/tamakiii'
  const browser = await puppeteer.launch({})
  const page = await browser.newPage()
  await page.goto(URL)

  const results = await page.evaluate(() => {
    return {
      title: document.title
    }
  })

  console.log('title', results.title)

  await browser.close()
})()

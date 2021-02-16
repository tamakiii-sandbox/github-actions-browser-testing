const puppeteer = require('puppeteer');

(async() => {
  const URL = 'http://localhost:3030/'
  const browser = await puppeteer.launch({})
  const page = await browser.newPage()
  await page.goto(URL)

  await Promise.all([
    page.waitForNavigation(),
    page.click('a')
  ]);

  const results = await page.evaluate(() => {
    return {
      title: document.title,
      url: location.href,
      search:  location.search,
    }
  })

  var search = new URLSearchParams(results.search)

  console.log('title', results.title)
  console.log('url', results.url)
  console.log(search)

  await browser.close()
})()

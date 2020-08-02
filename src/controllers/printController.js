const puppeteer = require('puppeteer')

module.exports = {
    async create(request, response){
        
        (async () => {
            try{
                const { pageUrl } = request.body;
                const browser = await puppeteer.launch();
                const page = await browser.newPage();
                await page.goto(pageUrl);
                await page.setViewport({ width: 1000, height: 1000});
                const screenshot = await page.screenshot({ encoding: 'base64', fullPage: true })
                response.json({ screenshot })
                await browser.close();
            }catch(err){console.log(err)}
        })();
    }
}

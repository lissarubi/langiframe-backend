const puppeteer = require('puppeteer')

module.exports = {
    async create(request, response){
        const { pageUrl } = request.body
        const now = Date.now()

        (async () => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto(pageUrl);
            await page.setViewport({ width: 1000, height: 1000});
            const screenshot = await page.screenshot({ encoding: 'base64', fullPage: true });
	    response.writeHead(200, {
            	'Content-Type': 'image/png',
        	'Content-Length': screenshot.length,
                "Access-Control-Allow-Origin", "http://langiframe.herokuapp.com/",
                "Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE',
    	    });
            response.json({ screenshot });

            await browser.close();
        })();
    }
}

const puppeteer = require('puppeteer')

module.exports = {
    async create(request, response){
        const { pageUrl } = request.body;
        
        (async () => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto(pageUrl);
            await page.setViewport({ width: 1000, height: 1000});
            const screenshot = await page.screenshot({ encoding: 'base64', fullPage: true });
	    response.writeHead(200, {
            	'Content-Type': 'image/png',
        	'Content-Length': screenshot.length
    	    });
            response.end(screenshot);

            await browser.close();
        })();
    }
}

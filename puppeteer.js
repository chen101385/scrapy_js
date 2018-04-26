const puppeteer = require('puppeteer');

const queue = [];

const crawl = async (url = `https://www.airbnb.com/s/Palm-Desert--CA--USA/homes?refinement_paths%5B%5D=%2Fhomes&checkin=2019-04-11&checkout=2019-04-16&adults=8&children=0&infants=0&guests=8&room_types%5B%5D=Entire%20home%2Fapt&source=hdr&place_id=ChIJN8Kl8i782oARdUavho9GuS4&allow_override%5B%5D=&price_max=598&min_beds=4&min_bedrooms=4&min_bathrooms=3&s_tag=1SXQY02k`) => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 1000,
    });
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({ path: `./screenshots/Palm_Desert_Coachella_${Date.now()}` })
}
import puppeteer from "puppeteer";

async function pupy() {
  const browser = await puppeteer.launch({
    ignoreHTTPSErrors: true,
  });
  const page = await browser.newPage();
  await page.goto("https://194.16.0.210:8083");
  await page.waitForNavigation();
  await page.type("[name=username]", "admin");
  await page.type("[name=password]", "1mp3rvA");
  await page.click(".loginInputPushButton");
  await page.waitForNavigation({ waitUntil: "networkidle0" });

  await takeScreenShotOfPage(page, "agents", 3000);
  await takeScreenShotOfPage(page, "AgentsViewStatusAnalysis.AgentsInactive", 3000);
  await takeScreenShotOfPage(page, "gateways", 3000);
  await takeScreenShotOfPage(page, "gateway_management", 3000);
  await takeScreenShotOfPage(page, "newaudithealth", 3000);
  await takeScreenShotOfPage(page, "newalerts", 3000);
  await takeScreenShotOfPage(page, "system_events_log", 3000);
  await takeScreenShotOfPage(page, "health_monitor", 3000);
  await takeScreenShotOfPage(page, "dashboard", 10000);
  await browser.close();
}

async function takeScreenShotOfPage(page, name, timeout) {
  await page.goto(`https://194.16.0.210:8083/SecureSphere/app/#${name}`, {});
  await page.waitForTimeout(timeout);
  await page.screenshot({ path: `./${name}.png`, fullPage: true });
}

pupy();
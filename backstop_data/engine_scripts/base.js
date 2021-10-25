const loc = require('./locators')


module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);
  await page.waitForTimeout(6000)
  //await require('./clickAndHoverHelper')(page, scenario);
  // Example: changing behavior based on config values

  if (scenario.label === 'Women_Tab') {
    //await page.goto('http://automationpractice.com/index.php?id_category=3&controller=category');
    await page.click(loc.locators.womenTab);
    await page.waitForTimeout(6000)
  }

  if (scenario.label === 'Dresses_Tab') {
    //await page.goto('http://automationpractice.com/index.php?id_category=8&controller=category');
    await page.click(loc.locators.dressesTab);
    await page.waitForTimeout(6000)
  }

  if (scenario.label === 'T_shirts_Tab') {
    //await page.goto('http://automationpractice.com/index.php?id_category=5&controller=category');
    await page.click(loc.locators.tshirtsTab);
    await page.waitForTimeout(6000)
  }

  // add more stuff here...
};
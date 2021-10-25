/**
 * This example demonstrates how to create settings for a given testing scenario
 * for backstopjs. By replicating this setup, one can create multiple types of
 * tests and test groups for running Backstop VRT.
 */

//const { partials } = require('../../pl-paths.js');

//const plRoot = 'https://www.google.com/';

//const endpoints = ['/index.php?id_category=3&controller=category', '/index.php?id_category=8&controller=category',
//              '/index.php?id_category=5&controller=category'];


const labels = ['test_one','test_two', 'test_three']
const base_url = 'http://automationpractice.com';

module.exports = () => {
  // Set which resolutions to take screenshots at.
  const viewports = [
    {
      name: 'desktop',
      width: 1401,
      height: 1500,
    },
    {
      name: 'mobile',
      width: 720,
      height: 1280,
    },
  ];

  // Set the defaults for all of the screenshots. This can be used to powerfully
  // modify the page before capturing.
  const defaultScenarioSettings = {
    hideSelectors: [],
    removeSelectors: [],
    selectorExpansion: true,
    selectors: [],
    readyEvent: null,
    delay: 500,
    misMatchThreshold: 0.1,
    requireSameDimensions: true,
    onBeforeScript: '',
    onReadyScript: '',
  };

  // Set which pages to capture, and how to label them.
  const scenarios = labels.map((labels) => {
    return {
      label: labels,
      //url: `${base_url}?p=${partial}`,
      url: `${base_url}`,
      ...defaultScenarioSettings,
    };
  });

  return {
    id: 'automationpractice_backstop',
    viewports,
    scenarios,
    paths: {
      bitmaps_reference: 'backstop_data/bitmaps_reference',
      bitmaps_test: "backstop_data/bitmaps_test",
      engine_scripts: "backstop_data/engine_scripts",
      html_report: "backstop_data/html_report",
      ci_report: "backstop_data/ci_report"
    },
    engine: 'puppeteer',
    report: ['browser', 'CI'],
    asyncCaptureLimit: 5,
    asyncCompareLimit: 50,
    debug: false,
  };
};
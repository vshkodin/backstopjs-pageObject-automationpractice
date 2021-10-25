const labels = ['Women_Tab','Dresses_Tab', 'T_shirts_Tab', 'Login']
const base_url = 'http://automationpractice.com';

module.exports = () => {
  // Set which resolutions to take screenshots at.
  const viewports = [
    {
      name: 'desktop',
      width: 1401,
      height: 1500,
    },
    // {
    //   name: 'mobile',
    //   width: 720,
    //   height: 1280,
    // },
  ];

  // Set the defaults for all of the screenshots. This can be used to powerfully
  // modify the page before capturing.
  const defaultScenarioSettings = {
    hideSelectors: [],
    removeSelectors: [],
    selectorExpansion: true,
    selectors: [],
    readyEvent: null,
    delay: 2000,
    misMatchThreshold: 0.1,
    requireSameDimensions: true,
    onBeforeScript: '',
    onReadyScript: 'base.js',
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
    onBeforeScript: "onBefore.js",
    onReadyScript: "onReady.js",
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
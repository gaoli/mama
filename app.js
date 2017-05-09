import AV from './libs/av';

const APP_ID = 'P71F09QYVam7V9FTrpBd7mzW-gzGzoHsz';
const APP_KEY = '623WUkPTwpEOnmfeGvG1FxQE';

App({
  onLaunch() {
    AV.init({
      appId: APP_ID,
      appKey: APP_KEY,
    });
  },
});

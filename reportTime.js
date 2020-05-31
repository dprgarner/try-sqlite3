// Quick helper function to log the time an async operation takes
const reportTime = (txt, fnToTime) => {
  const start = new Date();
  new Promise((res) => {
    fnToTime(res);
  }).then(() => {
    const dt = new Date() - start;
    console.log(`${txt}: ${dt}ms`);
  });
};

module.exports = reportTime;

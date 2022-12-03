export var whiteListR;
export var blackListR;

export const toRegex = function (whiteList, blackList) {
  if (whiteList != '') {
    whiteListR = new RegExp(
      '^(?!.*(' + whiteList.replace(/(,|;)/g, '|') + ')).*$\n',
      'mg'
    );
  }
  if (blackList != '') {
    blackListR = new RegExp(
      '^.*(' + blackList.replace(/(,|;)/g, '|') + ').*$\n',
      'mg'
    );
  }
};

export const applyRegex = function (metrics) {
  let metricsFiltered = metrics;
  if (whiteListR) {
    metricsFiltered = metricsFiltered.replace(whiteListR, '');
  }
  if (blackListR) {
    metricsFiltered = metricsFiltered.replace(blackListR, '');
  }
  return metricsFiltered;
};

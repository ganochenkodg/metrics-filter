export var allowListR;
export var blockListR;

export const toRegex = function (allowList, blockList) {
  if (allowList != '') {
    allowListR = new RegExp(
      '^(?!.*(' + allowList.replace(/(,|;)/g, '|') + ')).*$\n',
      'mg'
    );
  }
  if (blockList != '') {
    blockListR = new RegExp(
      '^.*(' + blockList.replace(/(,|;)/g, '|') + ').*$\n',
      'mg'
    );
  }
};

export const applyRegex = function (metrics) {
  let metricsFiltered = metrics;
  if (allowListR) {
    metricsFiltered = metricsFiltered.replace(allowListR, '');
  }
  if (blockListR) {
    metricsFiltered = metricsFiltered.replace(blockListR, '');
  }
  return metricsFiltered;
};

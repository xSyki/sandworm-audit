const path = require('path');
const semver = require('semver');
const {loadManifest} = require('../files');
const {getRegistryData} = require('../graph/utils');

module.exports = async () => {
  const {version: currentVersion} = await loadManifest(path.join(__dirname, '../..'));
  const data = await getRegistryData('@sandworm/audit');
  const latestVersion = data['dist-tags']?.latest;

  return semver.lt(currentVersion, latestVersion);
};

import { getMainLink } from '../links/utils';

const smoothClusters = (
  { links: oldLinks },
  { links: newLinks, ...newCluster }
) => {
  const newLinksByUrl = new Map();
  newLinks.forEach((link) => {
    if (link.meta.type === 'history') {
      newLinksByUrl.set(link.url, link);
    }
  });

  const spareOldLinks = oldLinks.filter(oldLink =>
    oldLink.meta.type === 'history' && !newLinksByUrl.has(oldLink.url));

  return {
    ...newCluster,
    links: [
      ...newLinks,
      ...spareOldLinks,
    ]
  };
};

export default ({ results: oldResults } = {}, newResponse, config) => {
  const { isEnabled } = config.operators.responses.smoothClusters;

  if (!isEnabled || !oldResults) {
    return newResponse;
  }

  const { results: newResults } = newResponse;

  const oldClustersByUrl = new Map();
  oldResults.forEach((result) => {
    const { url, meta: { isCluster } = {} } = getMainLink(result);
    if (isCluster) {
      oldClustersByUrl.set(url, result);
    }
  });

  const smoothedNewResults = newResults.map((result) => {
    const { url, meta: { isCluster } = {} } = getMainLink(result);
    // same cluster found in both old and new responses
    if (isCluster && oldClustersByUrl.has(url)) {
      return smoothClusters(oldClustersByUrl.get(url), result);
    }
    return result;
  });

  return {
    ...newResponse,
    results: smoothedNewResults,
  };
};

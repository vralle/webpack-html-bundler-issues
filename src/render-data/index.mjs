import entryDataMap from "./submodule.mjs";

/**
 * @template {keyof typeof entryDataMap} K
 * @param {K} entryName
 * @param {EntryDataMap} entryDataMap
 * @returns {{ entry: typeof entryDataMap[K] }}
 */
function getEntryData(entryName, entryDataMap) {
  return {
    entry: entryDataMap[entryName] ?? entryDataMap.notExist,
  };
}

export { entryDataMap, getEntryData };

export default { entryDataMap, getEntryData };

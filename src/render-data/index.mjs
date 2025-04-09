import entryDataMap from "./submodule.mjs";

/**
 * @param {string} entryName
 * @param {EntryDataMap} entryDataMap
 * @returns {EntryData}
 */
function getEntryData(entryName, entryDataMap) {
  return entryDataMap[entryName] ?? entryDataMap.notExist;
}

export { entryDataMap, getEntryData };

export default { entryDataMap, getEntryData };

// No fancy js in this file, because it is used by gatsby-node.js
// No export or import e.t.c., just plain js
const { LANGUAGE_CODES } = require(`./iso-639-1-language-codes-non-es6`)

const languageCodes = Object.keys(LANGUAGE_CODES)

const getRequiredPathPrefix = (path) => {

  const candidate = path?.toString()?.toLowerCase()

  const predicate = (code) => candidate && candidate.includes(`/${code}/`)

  const countryCode = languageCodes.find(predicate)

  return countryCode ? `/${countryCode}/` : undefined
}

function getNodeFilterByPath(path) {

  const requiredPathPrefix = getRequiredPathPrefix(path)

  return (node) => {
    return !requiredPathPrefix || node?.fields?.slug?.toString().toLowerCase().includes(requiredPathPrefix)
  }
}

module.exports = {
  getNodeFilterByPath,
}
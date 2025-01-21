// No fancy js in this file, because it is used by gatsby-node.js
// No export or import e.t.c., just plain js

const supportedCountryCodes = ["DE"]

const getRequiredPathPrefix = (path) => {

  const predicate = (code) => path.startsWith(`/${code.toLowerCase()}/`)
    || path.startsWith(`/${code.toUpperCase()}/`)

  const countryCode = supportedCountryCodes.find(predicate)

  return countryCode ? `/${countryCode}/` : undefined
}

function getNodeFilterByPath(path) {

  const requiredPathPrefix = getRequiredPathPrefix(path)

  return (node) => !requiredPathPrefix || node.fields.slug.startsWith(requiredPathPrefix)
}

module.exports = {
  getNodeFilterByPath,
}
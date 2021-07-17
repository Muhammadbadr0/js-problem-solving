function anagrams(str1, str2) {
  return cleanString(str1) === cleanString(str2)
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("")
}

module.exports = anagrams

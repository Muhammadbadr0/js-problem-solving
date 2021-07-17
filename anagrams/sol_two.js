function anagrams(str1, str2) {
  const charMapOfOne = buildCharMap(str1)
  const charMapOfTwo = buildCharMap(str2)

  if (Object.keys(charMapOfOne).length !== Object.keys(charMapOfTwo).length) {
    return false
  }

  for (let char in charMapOfOne) {
    if (charMapOfOne[char] !== charMapOfTwo[char]) {
      return false
    }
  }

  return true
}

function buildCharMap(str) {
  const charMap = {}
  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1
  }

  return charMap
}

module.exports = anagrams

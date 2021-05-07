isAnagram = (stringA, stringB) => {
    const charMapA = getCharMap(stringA);
    const charMapB = getCharMap(stringB);

    for (const char in charMapA) {
      if (charMapA[char] !== charMapB[char]) {
        return false;
      }
    }

    return true;
  };

  getCharMap = (string) => {
    let charMap = {};
    for (let char of string) {
      charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
  };

  anagramGroup = (stringArray) => {
    const anagram = [];
    let groupCounter = 0;
    for (let i = 0; i < stringArray.length; i++) {
      if (i === 0) {
        anagram[groupCounter] = [];
        anagram[groupCounter].push(stringArray[i]);
      } else {
        for (let j = 0; j < anagram.length; j++) {
          if (isAnagram(anagram[j][0], stringArray[i])) {
            anagram[j].push(stringArray[i]);
            break;
          }
          if (
            !isAnagram(anagram[j][0], stringArray[i]) &&
            j === anagram.length - 1
          ) {
            groupCounter++;
            anagram[groupCounter] = [];
            anagram[groupCounter].push(stringArray[i]);
            break;
          }
        }
      }
    }
    return anagram;
  };

  console.log(anagramGroup(["kita", "atik", "tika", "aku", "kia", "makan", "kua"]))
const isAnagram = (str1, str2) => {
    if (str1.length != str2.length)
        return false;

    str1 = str1.split("").sort();
    str2 = str2.split("").sort();

    for (let i = 0; i < str1.length; i++) {
        if (str1[i] != str2[i])
            return false;
    }

    return true;
};

console.log(isAnagram('kajak', 'slowo'));
console.log(isAnagram('kajak', 'jakak'));
console.log(isAnagram('kdoem', 'domek'));
console.log(isAnagram('pilka', 'klipc'));
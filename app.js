// Character Set []
const regex1 = /ninja/g;

// Range [a-z]
const regexRange = /[a-zA-z0-9]ninja/g;

// Repeat re-match(+)
// Re-match until n-th using {} eg. {11}
const regexRepeat = /[0-9]{11}/g;

// between 5 and 8
const regexBetween = /[a-z]{5,8}/g;

// match at least 5 charcter, leave the comma (infinite)
const regexAtLeast = /[0,9]{5,}/g;

// # Metacharacter

// \d match any digit character or number
// \w (a-z, A-Z, 0-9) and _
// \s match whitespace character(spaces, tabs ets)
// \t match tab character only

const regexMetaCharacter = /\d{3}\s\w{5}/;
console.log(regexMetaCharacter.test("981 hello"));

// Secial Character
// -? mean optional before last character
// Eg. /hello?/g, "o" here weill become optional

const regexQuestionCharacter = /a[a-z]?/g;

// -"." dot character is required character and it can be anything.

const regexDot = /car./g;
console.log(regexDot.test("cars")); //match

// - "*", match as much as it can, its
// Eg. /a[a-z]*/g, will match adsfsdfdsfdsfdsfdsfds12321, not match until number

// Escape special character
// Using \ , eg. /abc\*/, will match abc*

// #Start and Ending pattern
// using (carrot) ^ , using $ to detect the end of character
// Eg. ^[a-z]{5}$

```js
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
// \w (a-z, A-Z, 0-9) and \_
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

// - "_", match as much as it can, its
// Eg. /a[a-z]_/g, will match adsfsdfdsfdsfdsfdsfds12321, not match until number

// Escape special character
// Using \ , eg. /abc\*/, will match abc\*

// #Start and Ending pattern
// using (carrot) ^ , using $ to detect the end of character
// Eg. ^[a-z]{5}$

// Alternative, in regex or using "|"
const regexOr = /(p/t)yre/i // this regex will match pyre and tyre
const regexAnotherOr = /(pet|toy|crazy)? rabbit/ig // will match pet rabbit, rabbit


```

# Email Validation

```
(your name) @ (domain) . (extension) (.again)
suryakumara @ gmail . co . uk
```

1.  any letters, numbers, dots and/or hyphens
2.  any letter, numbers and/or hyphens
3.  any letter
4.  a dot(.) then any letter.

```js
const inputs = document.querySelectorAll("input");

const patterns = {
  telephone: /^\d{11}$/,
  username: /^[a-z\d]{5,12}$/i,
  password: /^[\w@-]{8,20}$/,
  slug: /^[a-z\d-]{8,20}$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
};

function validataion(field, regex) {
  console.log(regex.test(field.value));

  if (regex.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
}

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    validataion(e.target, patterns[e.target.attributes.name.value]);
  });
});
```

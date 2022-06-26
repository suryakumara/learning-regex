// validation script here
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

// Email Validation

// (your name) @ (domain) . (extension) (.again)
// suryakumara @ gmail . co . uk

// 1. any letters, numbers, dots and/or hyphens
// 2. any letter, numbers and/or hyphens
// 3. any letter
// 4. a dot(.) then any letter.

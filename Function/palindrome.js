function ispalindrome(str){
  const reversedstr = str.split('').reverse().join('');
  return str == reversedstr;
}
console.log(ispalindrome("HEllo"));
console.log(ispalindrome("madam"));


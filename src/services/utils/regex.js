/* eslint-disable no-useless-escape */

const Regex = {
  phoneNumber: /^[1-9][0-9]{6,15}$/,
  email: /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  isNumber: /^\s*\d{0,}\s*$/,
  bankName: /^[A-Za-z\s]$/,
  fullName: /^[A-Za-z\s]$/,
  fullName92Char: /^[A-Za-z\s]{3,92}$/,
  numberNotContain: /^([^0-9]*)$/,
  pinCode: /^\d{5}$/,
  idValid: /^\d{16}$/,
  tinValid: /^\d{15}$/,
  accountValid: /^\d{10,17}$/,
  alphaNumeric: /[^A-Za-z0-9\s]/,
  homeTown: /^[A-Za-z\s]{3,70}$/,
};

export default Regex;

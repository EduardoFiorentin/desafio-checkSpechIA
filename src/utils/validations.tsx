import { AsYouType, CountryCode, parsePhoneNumberFromString } from 'libphonenumber-js';

const nameValidate = (name: string): boolean => {
    if (name.length === 0) return false
    return true
}

const emailValidate = (email: string): boolean => {
    if (email.length === 0) return false
    if (!validateEmailFormat(email)) return false 

    return true
    
}

const messageValidate = (message: string): boolean => {
    if (message.length === 0) return false
    return true
    
}

function validateEmailFormat(email: string) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function phoneValidate(numero: string, codigoPais: CountryCode) {

  const phone = new AsYouType(codigoPais).input(numero)
    try {
      const phoneNumber = parsePhoneNumberFromString(phone, codigoPais);
      return phoneNumber && phoneNumber.isValid();
    } catch (error) {
      return false;
    }
  }

export {
    messageValidate,
    emailValidate,
    nameValidate,
    phoneValidate
}
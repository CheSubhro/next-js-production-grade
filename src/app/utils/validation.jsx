
// Function to validate email format

export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
  
// Function to validate password strength (minimum 8 characters with at least one uppercase letter, one lowercase letter, one number, and one special character)

export const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    return passwordRegex.test(password);
};
  
// Function to validate a non-empty string

export const isValidString = (str) => {
    return str.trim() !== '';
};
  
// Function to validate a number

export const isValidNumber = (num) => {
    return !isNaN(num) && num !== null && num !== undefined;
};
  
// Function to validate an array

export const isValidArray = (arr) => {
    return Array.isArray(arr) && arr.length > 0;
};
  

  
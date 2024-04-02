
// Helper function to generate a random alphanumeric string

export const generateRandomString = (length) => {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      randomString += charset[randomIndex];
    }
    return randomString;
};
  
// Helper function to capitalize the first letter of a string

export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
  
// Helper function to truncate a string to a specified length

export const truncate = (str, maxLength) => {
    return str.length > maxLength ? str.substring(0, maxLength - 3) + '...' : str;
};

// Helper function to convert a string to lowercase

export const toLowerCase = (str) => {
    return str.toLowerCase();
};
  

  
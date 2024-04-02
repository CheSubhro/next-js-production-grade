
// Function to format a date to a specific format (e.g., "MM/DD/YYYY")

export const formatDate = (date, format) => {
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    };
  
    const formattedDate = new Date(date).toLocaleDateString('en-US', options);
    return formattedDate;
};
  
// Function to format a number to a specific number of decimal places

export const formatNumber = (number, decimalPlaces) => {
    return parseFloat(number).toFixed(decimalPlaces);
};
  
// Function to format currency (e.g., "$1,000.00")

export const formatCurrency = (amount) => {
    return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
  
// Function to format a string to title case
export const toTitleCase = (str) => {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};
  

  

// Function to handle API errors

const errorHandler = (statusCode, message, errors = []) => {
    return {
      statusCode: statusCode,
      message: message,
      errors: errors
    };
};
  
export default errorHandler;
  
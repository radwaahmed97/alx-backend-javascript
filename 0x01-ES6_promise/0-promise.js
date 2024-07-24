export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const response = true;
    if (response) {
      resolve('API response received');
    } else {
      reject(new Error('API response not received'));
    }
  });
}

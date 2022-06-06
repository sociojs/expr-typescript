export default (): void => {
  console.log('Anonymous. Default export.');
};
export let checkWeather = (city: string): string => {
  return 'Cloudy';
};

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  BASIC_URL: 'http://api.openweathermap.org/data/2.5/weather?id=',
  APP_ID: '&appid=cb30165fbee1109708d696ef9dfffd36',
  BASIC_URL_FORECAST: 'http://api.openweathermap.org/data/2.5/forecast?id=',
  JSON_ADRESS: './assets/data/city.list.json'
};
// http://api.openweathermap.org/data/2.5/weather?id=2172797&appid=cb30165fbee1109708d696ef9dfffd36
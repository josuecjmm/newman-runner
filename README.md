# newman-runner
This is a runner and report generator for newman/postman collections: 
* Quick API Test Automation done
* Automatic html report creation and opening

### Configuration
Inside the /environments folder set the postman environment json files, example: 
```json 
{
	"id": "540a5d14-4a75-4d48-8061-95d0fe1a1b0e",
	"name": "foodshop",
	"values": [
		{
			"key": "clientUrl",
			"value": "https://foodshop-client-api.herokuapp.com",
			"enabled": true
		}
	],
	"_postman_variable_scope": "environment",
	"_postman_exported_at": "2020-10-05T03:32:11.130Z",
	"_postman_exported_using": "Postman/7.33.1"
}

```

Inside the /config folder set the collection and environment for postman 
```js 
collection: 'https://www.getpostman.com/collections/baef31a128ff8913eb2d',
environment: require('../environments/PROD.json')
```

### Installation
Clone the repo:
```sh 
git clone https://github.com/connorturok27/newman-runner.git
```
Install the dependencies: 
```sh 
npm install
```
Run the tests: 
```sh 
npm test
```
The report must have been automatically saved and opened in your browser 
![reporter](https://raw.githubusercontent.com/DannyDainton/newman-reporter-htmlextra/HEAD/examples/Default_Report.gif)

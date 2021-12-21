# newman-runner
This is a runner and report generator for newman/postman collections: 
* Quick API Test Automation done
* Automatic html report creation and opening

### Configuration
Inside the /environments folder set the postman environment json files, example: 
```json 
{
	"id": "42e2303f-a24e-4dac-8acd-584c96fc1167",
	"name": "Pilotly - QA",
	"values": [
		{
			"key": "url",
			"value": "https://study-intake-git-dev-pilotly.vercel.app/api",
			"enabled": true
		},
		{
			"key": "token",
			"value": "",
			"enabled": true
		}
	],
	"_postman_variable_scope": "environment",
	"_postman_exported_at": "2021-12-21T01:23:41.859Z",
	"_postman_exported_using": "Postman/8.11.1"
}
```
Inside the /config folder set the collection and environment for postman 
```js 
collection: 'https://www.getpostman.com/collections/baef31a128ff8913eb2d',
environment: require('../environments/PROD.json')
```

### Installation
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

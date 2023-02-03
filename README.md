# Build an API using Node, Express, MongoDB, and Typescript

## Setup

* Make a new private git repo
* Clone it to your computer
* npm i inside of it
* npm install typescript
    * Make a tsconfig.json file and refer to https://www.typescriptlang.org/tsconfig
* Install VSCode extensions:
    * Javascript and Typescript Nightly from Microsoft
	
	Gather data

Find some data in the wild on a website and steal it
	Use scripts, regex, spreadsheet functions?
Wash the data 
	Eyeball the values to make sure there’s nothing funky
	Add metadata
Describe the data
	What are your endpoints?
	What are your verbs?
What’s the form of the data that will be returned?
Put it into a database
	Spin up local mongodb
        https://www.prisma.io/dataguide/mongodb/setting-up-a-local-mongodb-database
	Loop through raw data
	Use mongoose to load into Mongo
	Verify using terminal
Spin up a Node Express server
Make sure your database can be queried

	TDD time!
		int tests:
			Can I query the local db?
				

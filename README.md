# GeoblinkTest
Geoblink Exercise - Front End

## Prerequisites

  You need git to clone the GeoblinkTest repository. You can get git from http://git-scm.com/.
  
  Also to initialize and test GeoblinkTest. You must have node.js and its package manager (npm) installed. You can get them from http://nodejs.org/.

# Steps to run this repository:

## Clone GeoblinkTest :

```
git clone https://github.com/anthonyjba/GeoblinkTest.git
cd GeoblinkTest
```

## Install Dependencies :

```
npm install
```

## Run the Application :

We have preconfigured the project with a simple development web server. The simplest way to start this server is:

```
npm start
```

- Navigate your browser to [http://localhost:3000/index.html](http://localhost:3000/index.html) to see the application.

## Unit Testing

using [Jasmine][jasmine] and [Karma][karma] for your unit tests/specs.

```
npm test
```

- A browser will start and connect to the Karma server. Chrome and Firefox are the default browsers,
  others can be captured by loading the same URL or by changing the `karma.conf.js` file.
- Karma will sit and watch your application and test JavaScript files. To run or re-run tests just
  change any of your these files.

## Features & Components

The page is responsive and fully functional in the latest versions of Chrome, Firefox and Edge.

It Contains a fake server RESTful:

Sample that you can get data json by fake server:

```
http://localhost:3000/dataTest/1

The response is:

{
  "id": 1,
  "address": "Calle Mar Adriático, 12, 28221 Majadahonda, Madrid, Spain",
  "variables": {
    "population": 9084,
    "is_reference": true,
    "indexes": {
      "population": "3",
      "unemployment": "1",
      "commercial_activity": "6",
      "wealth": "7",
      "traffic": "4",
      "foreigners": "1",
      "dependency_rate": "2"
    }
  }
}
```
It Contains 2 components:

a) A Dashboard to print the population of each feature json.

b) A radar chart to show the graph comparision and can download the graph in .png format. 

And an extra component: Visualization the Map location of each feature json.

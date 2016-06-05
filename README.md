# GeoblinkTest
Geoblink Exercise - Front End

* Prerequisites

  You need git to clone the GeoblinkTest repository. You can get git from http://git-scm.com/.
  
  Also to initialize and test GeoblinkTest. You must have node.js and its package manager (npm) installed. You can get them from http://nodejs.org/.

Steps to run this repository:

* Clone GeoblinkTest :

```
git clone https://github.com/anthonyjba/GeoblinkTest.git
cd GeoblinkTest
```

* Install Dependencies :

```
npm install
```

* Run the Application :

We have preconfigured the project with a simple development web server. The simplest way to start this server is:

```
npm start
```

Now browse to the app at http://localhost:3000/index.html


## Features & Components

It Contains a fake server to RESTful:

Sample that you can get a data json by fake server:

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

And a Extra component: a visualization the Map location of each feature json.
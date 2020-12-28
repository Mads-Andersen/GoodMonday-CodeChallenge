# Good Monday code-challenge
3 venner tager en bus. Bussen har to rækker med sæder, med 10 sæder i hver række. Vi kalder dem række 1 og række 2. Nogle af sæderne kan være optaget af andre passagerer. De 3 venner vil gerne sidde så tæt på hinanden som muligt. Afstanden beregnes som euklidisk distance. Den samlede afstand mellem dem beregnes som summen af afstanden mellem de 3 venner - så der er 3 afstande at summere. Afstanden mellem sæderne i samme række er 1 meter. Afstanden mellem de 2 rækker er 2 meter.

Skriv et program der finder den kortest mulige distance.

Input: to liste/strenge/arrays ellers hvad der nu passer bedst, der indeholder de rækker sædder, hvor ‘+’ eller ‘1’ eller lignende markerer et sæde der allerede er optaget.
Du vælger det sprog du vil implementere programmet i.

Eksempel:
```
"++++++++++"
"----------"
```

Her er den korteste samlede afstand 4, da de alle kan sidde på samme række. De individuelle afstande er 1, 1 og 2.

## Installation
Use the package manager npm to install dependencies.

```bash
npm install
```

## Usage
```javascript
npm run test

node index.js ++++++++++ ----------
4
```

## Solution
I see the problem as finding a group of 3 points that forms the shortest distance using euclidian-distance in a set of points.

To make this work we just need to convert our "Bus-input" into values in a coordinate system where each seat is a 2d-point and one unit corresponds to 1 meter. The index of a character in a string would correspond to the x-value of a point. All the seats in the first row will have a y-value of 0 and all the seats in the second row will have a y-value of 2. The hallway between the two rows in the bus could be seen as points having a y-value of 1. Next, we filter only the seats that are available. Once we have converted our input to points then we need to find a strategy that finds the 3 points that yield the shortest distance.
  
*Note:*

*In the code I have been using the word `node` to describe a point*

### Strategies
I first made a solution that worked using a naive/brute-force strategy. Then, I tried to optimize the program using a different strategy where we use the two closest adjacent points for each point. It is possible there is an even better strategy but I have not been able to find one.

**Naive:**

Try every possible permutation and select the one that yields the shortest distance. 
This is a non-optimal solution with a Big-O complexity of O(n^3) but we can be sure the solution is correct because there is no trickery here.

**AdjacentNodes:**

Find the closest two adjacent points and calculate the distance. Do this for all points and select the point that yields the shortest distance. I believe with this approach we will always get the shortest distance but I have not been able to prove it and it is not intuitive that it is correct. However, I have not been able to find an example that disproves it.
This algorithm has a Big-O complexity of O(n^2) and performs much faster than the naive solution when the input is large (a bus where a row can have 500 seats).
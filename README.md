GraphQL simple Demo site
================================

## How to start
```sh
npm install
npm start
```

## Query Samples

### Query all data
```
query {
  persons {
    name
    height
    eye_color
    birth_year
    gender
  }
}
```

### Query with filter
```
query {
  persons(filter: {id : 5}) {
    name
    height
    eye_color
    birth_year
    gender
  }
}
```

## Mutation Sample
```
mutation {
  createPerson(name: "ddd", height: "178", mass: "upup", hair_color: "black", skin_color: "brown", eye_color: "green", birth_year: "3002", gender: "male")
  {
    id
    name
    height
    mass
    hair_color
    skin_color
    eye_color
    birth_year
    gender
  }
}
```
After mutation, try to query again, should be able to find a new person in the end:
```
query {
  persons {
    name
    height
    skin_color
    eye_color
    birth_year
    gender
  }
}
```

## Schema
```
type Person {
        id: ID!
        name: String!
        height: String!
        mass: String!
        hair_color: String!
        skin_color: String!
        eye_color: String!
        birth_year: String!
        gender: String!
  }
```

## Technology involved
Use Apollo Server in Node.js HTTP server framework, it is a standard Node.js GraphQL library.

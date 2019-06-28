const data = require('../schema/data.json');

module.exports = {
        Query: {
                persons: (root, {filter}) => {
                        return filter && Object.keys(filter).length ? 
                        data.filter(d => {
                                d;
                                return d[Object.keys(filter)[0]] === Object.values(filter)[0]
                        }) : 
                        data
                }
        },
        Mutation: {
                createPerson: (_, person) => {
                        const newPerson = Object.assign({id: data.length + 1}, person)
                        data.push(newPerson)
                        return newPerson
                }
        }
}
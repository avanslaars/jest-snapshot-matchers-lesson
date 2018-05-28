const uuid = require('uuid/v4')

function createPerson(fName, lName) {
  return {
    id: uuid(),
    createdAt: new Date(),
    firstName: fName,
    lastName: lName
  }
}

module.exports = {
  createPerson
}

const { createPerson } = require('./index')

describe('createPerson', () => {
  it('Creates a person object', () => {
    const result = createPerson('John', 'Smith')
    expect(result).toMatchSnapshot()
  })
})

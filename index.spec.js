const { createPerson } = require('./index')

describe('createPerson', () => {
  it('Creates a person object', () => {
    const result = createPerson('John', 'Doe')
    expect(result).toMatchSnapshot()
  })
})

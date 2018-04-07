describe('suite', () => {
  it('spec', () => {
    const func = () => { throw 'test' }

    expect(func).toThrow()
  })
})
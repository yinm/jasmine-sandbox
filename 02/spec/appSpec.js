describe('suite', () => {
  it('spec', () => {
    expect(1).toBeTruthy()
    expect('a').toBeTruthy()

    expect(0).not.toBeTruthy()
    expect('').not.toBeTruthy()
  })
})
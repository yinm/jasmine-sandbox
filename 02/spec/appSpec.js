describe('suite', () => {
  it('spec', () => {
    expect(1).not.toBeFalsy()
    expect('a').not.toBeFalsy()

    expect(0).toBeFalsy()
    expect('').toBeFalsy()
  })
})
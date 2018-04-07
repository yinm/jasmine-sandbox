describe('suite', () => {
  it('spec', () => {
    const spyFunction = jasmine.createSpy()

    spyFunction()
    expect(spyFunction).toHaveBeenCalled()
  })
})
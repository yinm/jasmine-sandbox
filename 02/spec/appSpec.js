describe('suite', () => {
  it('spec', () => {
    const spy = jasmine.createSpy()

    setTimeout(() => {
      spy()
    }, 1000)

    expect(spy).toHaveBeenCalled()
  })
})
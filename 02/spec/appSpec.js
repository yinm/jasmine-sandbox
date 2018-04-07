describe('suite', () => {
  it('spec', () => {
    jasmine.clock().install()

    const spy = jasmine.createSpy()

    setTimeout(() => {
      spy()
    }, 100)

    jasmine.clock().tick(101)

    expect(spy).toHaveBeenCalled()

    jasmine.clock().uninstall()
  })
})
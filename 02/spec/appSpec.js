describe('suite', () => {
  it('spec', () => {
    const obj = {
      method() {
        console.log('obj#method()')
      }
    }

    spyOn(obj, 'method').and.callThrough()

    obj.method()

    expect(obj.method).toHaveBeenCalled()
  })
})
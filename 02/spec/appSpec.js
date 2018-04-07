describe('suite', () => {
  it('spec', () => {
    const obj = {
      method() {
        console.log('obj#method()')
      }
    }

    spyOn(obj, 'method')

    obj.method()
    obj.method()

    expect(obj.method.calls.count()).toBe(2)
  })
})
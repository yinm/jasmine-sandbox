describe('suite', () => {
  it('spec', () => {
    const obj = {
      method() {
        console.log('obj#method()')
      }
    }

    spyOn(obj, 'method')

    obj.method('any string')

    expect(obj.method).toHaveBeenCalledWith(jasmine.any(String))
  })
})
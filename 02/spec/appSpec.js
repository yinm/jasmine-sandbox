describe('suite', () => {
  it('spec', () => {
    const obj = {
      method: function() {
        console.log('obj#method(')
      }
    }

    spyOn(obj, 'method')

    obj.method()

    expect(obj.method).toHaveBeenCalled()
  })
})
describe('suite', () => {
  it('spec', () => {
    const obj = {
      method() {
        console.log('obj#method()')
      }
    }

    spyOn(obj, 'method').and.returnValue('stub')

    const result = obj.method()

    expect(result).toBe('stub')
  })
})
describe('suite', () => {
  it('spec', () => {
    const obj = {
      method() {
        console.log('obj#method()')
      }
    }

    spyOn(obj, 'method').and.throwError('mock exception')
    expect(obj.method).toThrowError('mock exception')
  })
})
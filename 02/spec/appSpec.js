describe('suite', () => {
  it('spec', () => {
    const obj = {
      method() {
        console.log('obj#method()')
      }
    }

    spyOn(obj, 'method').and.callFake((param) => {
      console.log(`fake param = ${param}`)
      return 'fake'
    })

    const result = obj.method('hoge')

    expect(result).toBe('fake')
  })
})
describe('suite', () => {
  it('spec', () => {
    const obj = {
      method() {
        console.log('obj#method()')
      }
    }

    spyOn(obj, 'method')

    obj.method('hoge', 'fuga')

    expect(obj.method).toHaveBeenCalledWith('hoge', 'fuga')
  })
})
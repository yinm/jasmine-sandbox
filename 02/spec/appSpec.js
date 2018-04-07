describe('suite', () => {
  it('spec', () => {
    const obj = {
      method() {
        console.log('obj#method()')
      }
    }

    spyOn(obj, 'method')

    obj.method()
    obj.method(11)
    obj.method('hoge', 'fuga')

    expect(obj.method.calls.argsFor(0)).toEqual([])
    expect(obj.method.calls.argsFor(1)).toEqual([11])
    expect(obj.method.calls.argsFor(2)).toEqual(['hoge', 'fuga'])
  })
})
describe('suite', () => {
  it('spec', () => {
    const obj = {
      method() {
        console.log('obj#method()')
      }
    }

    spyOn(obj, 'method')

    obj.method('first')
    obj.method(11)
    obj.method('last')

    // エラーになる。いい感じにmatcherがわからなかった
    expect(obj.method.calls.first()).toEqual({object: obj, args: ['first']})
    expect(obj.method.calls.mostRecent()).toEqual({object: obj, args: ['last']})
  })
})
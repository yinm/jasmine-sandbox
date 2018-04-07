describe('suite', () => {
  it('spec', () => {
    function MyClass() {}
    const myClass = new MyClass()

    expect(myClass).toEqual(jasmine.any(MyClass))
    expect({}).toEqual(jasmine.any(Object))
    expect([]).toEqual(jasmine.any(Array))
    expect(11).toEqual(jasmine.any(Number))
    expect('').toEqual(jasmine.any(String))
    expect(true).toEqual(jasmine.any(Boolean))
  })
})
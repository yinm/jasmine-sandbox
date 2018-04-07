describe('suite', () => {
  it('spec', () => {
    const spyObj = jasmine.createSpyObj('spyName', ['hoge', 'fuga', 'piyo'])

    spyObj.hoge()
    spyObj.piyo()

    expect(spyObj.hoge).toHaveBeenCalled()
    expect(spyObj.fuga).not.toHaveBeenCalled()
    expect(spyObj.piyo).toHaveBeenCalled()
  })
})
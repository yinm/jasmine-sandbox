describe('suite', () => {
  it('spec', () => {
    const obj = {
      hoge: 'HOGE',
      fuga: 'FUGA',
    }

    expect(obj).toEqual(jasmine.objectContaining({fuga: 'FUGA'}))
  })
})
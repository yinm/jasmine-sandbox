describe('suite', () => {
  it('spec', () => {
    const
      a = 'aaa',
      b = undefined

    expect(a).toBeDefined()
    expect(b).not.toBeDefined()
  })
})
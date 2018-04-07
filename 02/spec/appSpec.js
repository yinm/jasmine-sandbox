describe('suite', () => {
  it('spec', () => {
    const
      a = 'aaa',
      u = undefined

    expect(a).not.toBeUndefined()
    expect(u).toBeUndefined()
  })
})
describe('suite', () => {
  it('spec', () => {
    const
      obj1 = {
        name: 'Hoge',
        age: 14,
      },
      obj2 = {
        name: 'Hoge',
        age: 14,
      }

    expect(obj1).toEqual(obj2)

    const
      array1 = [1, 2, 3,],
      array2 = [1, 2, 3,]

    expect(array1).toEqual(array2)
  })
})
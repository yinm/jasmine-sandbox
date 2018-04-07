describe('suite', () => {
  beforeEach(() => {
    setTimeout(() => {
      console.log('beforeEach')
    }, 1000)
  })

  it('spec', () => {
    setTimeout(() => {
      console.log('spec')
    }, 500)
  })

  afterEach(() => {
    setTimeout(() => {
      console.log('afterEach')
    }, 200)
  })
})
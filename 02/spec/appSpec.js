describe('suite', () => {
  beforeEach((done) => {
    setTimeout(() => {
      console.log('beforeEach')
      done()
    }, 1000)
  })

  it('spec', (done) => {
    setTimeout(() => {
      console.log('spec')
      done()
    }, 500)
  })

  afterEach((done) => {
    setTimeout(() => {
      console.log('afterEach')
      done()
    }, 200)
  })
})
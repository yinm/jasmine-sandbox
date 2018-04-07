describe('parent', () => {
  beforeEach(() => {
    console.log('parent beforeEach')
  })

  afterEach(() => {
    console.log('parent afterEach')
  })

  it('parent test', () => {
    console.log('parent test')
  })

  describe('child', () => {
    beforeEach(() => {
      console.log('child beforeEach')
    })

    afterEach(() => {
      console.log('child afterEach')
    })

    it('child test', () => {
      console.log('child test')
    })
  })
})
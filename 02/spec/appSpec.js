describe('test', () => {
  beforeEach(() => {
    console.log('[beforeEach]')
    console.log(`this.value = ${this.value}`)
    this.value = 'before'
  })

  afterEach(() => {
    console.log('[afterEach]')
    console.log(`this.value = ${this.value}`)
    this.value = 'after'
  })

  it('test1', () => {
    console.log('[test1]')
    console.log(`this.value = ${this.value}`)
    this.value = 'test1'
  })

  it('test2', () => {
    console.log('[test2]')
    console.log(`this.value = ${this.value}`)
    this.value = 'test2'
  })
})
describe('suite1', () => {
  it('spec1', () => {
    console.log('suite1 spec1')
  })

  xit('spec2', () => {
    console.log('suite1 spec2')
  })
})

xdescribe('suite2', () => {
  it('spec1', () => {
    console.log('suite2 spec1')
  })

  xit('spec2', () => {
    console.log('suite2 spec2')
  })
})

describe('suite3', () => {
  it('spec1', () => {
    console.log('suite3 spec1')
    pending()
  })

  it('spec2')
})
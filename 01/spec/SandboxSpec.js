describe('Sandbox', () => {
  let sandbox

  beforeEach(() => {
    sandbox = new Sandbox()
  })

  it('sandboxにはbodyがある', () => {
    sandbox.setBody('body')
    expect(sandbox.getBody()).not.toBe(null)
    expect(sandbox.getBody()).toBe('body')
  })
})
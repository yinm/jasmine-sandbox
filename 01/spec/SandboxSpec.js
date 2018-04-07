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

  it("1と'1'", () => {
    const a = 1
    expect(a).toEqual(1)
    expect(a).toBe(1)
    expect(a).not.toEqual('1')
    expect(a).not.toBe('1')
  })
})
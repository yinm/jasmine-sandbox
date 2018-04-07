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

  it('Taroを含む', () => {
    const players = ['Taro', 'Jiro', 'Sub']
    expect(players).toContain('Taro')
  })

  it('aはbより大きい', () => {
    const
      a = 100,
      b = 1

    expect(a).toBeGreaterThan(b)
    expect(b).toBeLessThan(a)
  })

  it('TypeErrorが投げられる', () => {
    const foo = function() {
      throw new TypeError('hoge fuga')
    }

    expect(foo).toThrowError('hoge fuga')
    expect(foo).toThrowError(/hoge/)
    expect(foo).toThrowError(TypeError)
    expect(foo).toThrowError(TypeError, 'hoge fuga')
  })
})
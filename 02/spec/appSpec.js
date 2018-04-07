describe('suite', () => {
  it('spec', () => {
    jasmine.addMatchers({
      is: function(util, customEqualityTesters) {
        return {
          compare: function(actual, expected) {
            console.log(actual)
            console.log(expected)
            return {
              pass: actual === expected
            }
          }
        }
      }
    })

    expect(10).is(10)
  })
})
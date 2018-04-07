describe('suite', () => {
  it('spec', () => {
    jasmine.addMatchers({
      myMatcher: function(util, customEqualityTesters) {
        return {
          compare: function(actual, expected) {
            return {
              pass: actual === expected
            }
          }
        }
      }
    })

    expect(10).myMatcher(10)
  })
})
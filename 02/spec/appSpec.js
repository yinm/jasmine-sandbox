describe('suite', () => {
  it('spec', () => {
    jasmine.addMatchers({
      myMatcher: function(util, customEqualityTesters) {
        return {
          compare: function(actual, expected) {
            return {
              pass: actual === expected,
              message: 'hoge',
            }
          }
        }
      }
    })

    expect(1).myMatcher(101)
  })
})
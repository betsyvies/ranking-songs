import * as actions from './index'

describe('songs actions', () => {
  it('upVotes should create UP_VOTES action', () => {
    expect(actions.upVotes(1)).toEqual({
      type: 'UP_VOTES',
      id: 1,
      value: 15
    })
  })

  it('downVotes should create DOWN_VOTES action', () => {
    expect(actions.downVotes(2)).toEqual({
      type: 'DOWN_VOTES',
      id: 2,
      value: 14
    })
  })
})

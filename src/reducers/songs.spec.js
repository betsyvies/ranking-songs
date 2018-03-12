import songs from './songs'

describe('songs reducer', () => {
  it('should handle initial state', () => {
    expect(
      songs(undefined, {})
    ).toEqual([])
  })

  it('should handle UP_VOTES', () => {
    expect(
      songs([
        {
          id: 1, 
          name: 'Sign of the time', 
          img: 'assets/images/1.jpg', 
          vote: 15
        }, {
          id: 6, 
          name: 'Love me like you do', 
          img: 'assets/images/6.jpg', 
          vote: 14
        }
      ], {
        type: 'UP_VOTES',
        id: 1,
        vote: 15
      })
    ).toEqual([
      {
        id: 1, 
        name: 'Sign of the time', 
        img: 'assets/images/1.jpg', 
        vote: 15
      }, {
        id: 6, 
        name: 'Love me like you do', 
        img: 'assets/images/6.jpg', 
        vote: 16
      }
    ])
  })

  it('should handle DOWN_VOTES', () => {
    expect(
      songs([
        {
          id: 1, 
          name: 'Sign of the time', 
          img: 'assets/images/1.jpg', 
          vote: 15
        }, {
          id: 6, 
          name: 'Love me like you do', 
          img: 'assets/images/6.jpg', 
          vote: 14
        }
      ], {
        type: 'DOWN_VOTES',
        id: 1,
        vote: 15
      })
    ).toEqual([
      {
        id: 1, 
        name: 'Sign of the time', 
        img: 'assets/images/1.jpg', 
        vote: 15
      }, {
        id: 6, 
        name: 'Love me like you do', 
        img: 'assets/images/6.jpg', 
        vote: 13
      }
    ])
  })
})

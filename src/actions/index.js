export const next = () => ({
  type: 'NEXT',
});
  
export const previous = () => ({
  type: 'PREVIOUS'
});

export const upVotes = (id, vote) => ({
  type: 'UP_VOTES',
  id,
  vote
})

export const downVotes = (id, vote) => ({
  type: 'DOWN_VOTES',
  id,
  vote
})
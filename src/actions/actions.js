export const actionTypes = {
  UP_VOTES: 'UP_VOTES',
  DOWN_VOTES: 'DOWN_VOTES'
};
  
export const moreVotes = (id) => ({
  type: actionTypes.UP_VOTES,
  id,
});
  
export const minusVotes = (id) => ({
  type: actionTypes.DOWN_VOTES,
  id,
});
  
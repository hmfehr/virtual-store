

// why am i doing this: log the action in the console as a precurssor to THUNK 
// goal: use middleware in a way that redux likes
// notice: redux is "function heavy" aka it favors functions and i can curry info using multiple functions

const logger = (store) => (next) => (action) => {
  // here i can do the thing
  console.log('___action___', action);
  next(action);
};

export default logger;
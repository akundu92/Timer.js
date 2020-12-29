const initilize = (duration) => ({
  start: 0,
  duration: duration,
  elapsed: 0,
  active: false,
  complete: false,
});

//Binaries
const isActive = (current) => (state) =>
  current - state.start <= state.duration && state.active ? true : false;
const isComplete = (current) => (state) =>
  current - state.start >= state.duration ? true : false;

//Interupts
const start = (startTime) => (state) => ({
  ...state,
  start: startTime,
  duration: state.duration - state.elapsed,
  elapsed: 0,
  active: true,
});

const stop = (state) => ({ ...state, active: false });

//Utils
const elapsedTime = (current) => (state) => current - state.start;

const updateTimer = (current) => (state) => ({
  ...state,
  elapsed: elapsedTime(current)(state),
  active: isActive(current)(state),
  complete: isComplete(current)(state),
});

export default {
  initilize,
  start,
  stop,
  updateTimer,
  isActive,
};

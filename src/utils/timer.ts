interface TimerResult {
  start: (time: number, callback: () => void) => void;
  stop: () => void;
}

export const useTimer = (): TimerResult => {
  let timeout: ReturnType<typeof setTimeout>;

  const start = (time: number, callback: () => void) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => callback(), time);
  };

  const stop = () => {
    clearTimeout(timeout);
  };

  return { start, stop };
};

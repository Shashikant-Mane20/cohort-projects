import { useEffect, useRef, useState } from 'react'
import TimeDisplay from './TimeDisplay'

const Stopwatch = () => {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  const intervalRef = useRef(null)

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1000)
      }, 1000)
    }

    return () => clearInterval(intervalRef.current)
  }, [isRunning])

  const startStopwatch = () => {
    setIsRunning(true)
  }

  const pauseStopwatch = () => {
    setIsRunning(false)
  }

  const resetStopwatch = () => {
    setIsRunning(false)
    setTime(0)
  }

  return (
    <div
      className="
        bg-slate-800
        p-8
        rounded-3xl
        shadow-2xl
        text-center
        w-full
      "
    >
      <h2 className="text-3xl font-bold text-cyan-400 mb-6">
        Stopwatch
      </h2>

      <TimeDisplay time={time} />

      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={startStopwatch}
          className="
            bg-green-500
            hover:bg-green-600
            px-5
            py-3
            rounded-xl
            text-white
            font-semibold
            transition
          "
        >
          Start
        </button>

        <button
          onClick={pauseStopwatch}
          className="
            bg-yellow-500
            hover:bg-yellow-600
            px-5
            py-3
            rounded-xl
            text-white
            font-semibold
            transition
          "
        >
          Pause
        </button>

        <button
          onClick={resetStopwatch}
          className="
            bg-red-500
            hover:bg-red-600
            px-5
            py-3
            rounded-xl
            text-white
            font-semibold
            transition
          "
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Stopwatch
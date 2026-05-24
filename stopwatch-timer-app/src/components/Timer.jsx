import { useEffect, useRef, useState } from 'react'
import TimeDisplay from './TimeDisplay'

const Timer = () => {
  const [inputMinutes, setInputMinutes] = useState('')
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  const intervalRef = useRef(null)

  useEffect(() => {
    if (isRunning && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev - 1000)
      }, 1000)
    }

    if (time === 0) {
      setIsRunning(false)
    }

    return () => clearInterval(intervalRef.current)
  }, [isRunning, time])

  const startTimer = () => {
    if (time === 0) {
      const minutes = Number(inputMinutes)

      if (!minutes) return

      setTime(minutes * 60 * 1000)
    }

    setIsRunning(true)
  }

  const pauseTimer = () => {
    setIsRunning(false)
  }

  const resetTimer = () => {
    setIsRunning(false)
    setTime(0)
    setInputMinutes('')
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
      <h2 className="text-3xl font-bold text-pink-400 mb-6">
        Timer
      </h2>

      <input
        type="number"
        placeholder="Enter minutes"
        value={inputMinutes}
        onChange={(e) => setInputMinutes(e.target.value)}
        className="
          w-full
          mb-6
          px-4
          py-3
          rounded-xl
          bg-slate-700
          text-white
          outline-none
        "
      />

      <TimeDisplay time={time} />

      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={startTimer}
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
          onClick={pauseTimer}
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
          onClick={resetTimer}
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

export default Timer
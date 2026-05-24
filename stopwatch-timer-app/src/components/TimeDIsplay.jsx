const TimeDisplay = ({ time }) => {
  const formatTime = () => {
    const hours = String(Math.floor(time / 3600000)).padStart(2, '0')

    const minutes = String(
      Math.floor((time % 3600000) / 60000)
    ).padStart(2, '0')

    const seconds = String(
      Math.floor((time % 60000) / 1000)
    ).padStart(2, '0')

    return `${hours}:${minutes}:${seconds}`
  }

  return (
    <div
      className="
        text-5xl
        font-bold
        text-white
        tracking-widest
        mb-6
      "
    >
      {formatTime()}
    </div>
  )
}

export default TimeDisplay
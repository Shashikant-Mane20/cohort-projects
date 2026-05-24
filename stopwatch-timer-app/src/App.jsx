import Stopwatch from './components/Stopwatch'
import Timer from './components/Timer'

const App = () => {
  return (
    <div
      className="
        min-h-screen
        bg-gradient-to-br
        from-slate-900
        via-slate-800
        to-black
        flex
        items-center
        justify-center
        px-4
        py-10
      "
    >
      <div className="w-full max-w-6xl">
        <h1
          className="
            text-5xl
            font-bold
            text-center
            text-white
            mb-12
          "
        >
          Stopwatch & Timer App
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <Stopwatch />
          <Timer />
        </div>
      </div>
    </div>
  )
}

export default App
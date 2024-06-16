import { Hourglass, Pause, Play, Square } from "lucide-react"
import { useEffect, useState } from "react"
import { toFixed } from "../utils/time"

export const Timer = () => {
  const [count, setCount] = useState(0)
  const [initialTime, setInitialTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [hours, minutes, seconds] = [
    Math.floor(count / 60 / 60),
    Math.floor(count / 60) % 60,
    count % 60,
  ].map(toFixed)


  const handleStart = () => {
    setCount(initialTime)
    setIsRunning(true)
  }

  const handleStop = () => {
    setIsRunning(false)
  }

  const handleReset = () => {
    setIsRunning(false)
    setCount(0)
  }


  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        setCount((prev) => prev + 1)
      }, 1000)

      return () => {
        clearInterval(timer)
      }
    }
  }, [isRunning])


  return (
    <div className='bg-neutral-50 px-4 md:px-8 py-4 rounded-md shadow-md space-y-4 max-w-fit mx-auto'>
      <div className="flex flex-col gap-4  p-10">
        <div className="flex gap-2 items-center">

          <h2 className="text-3xl md:text-4xl font-semibold">

            Timer
          </h2>
          <Hourglass

            className={
              `w-5 h-5 md:w-6 md:h-6 
            ${isRunning ? 'animate-spin-slow' : ''}`
            } />

        </div>
        <div className="text-center font-bold">
          <h3 className="text-5xl md:text-6xl min-w-max">{hours} : {minutes} : {seconds}</h3>
        </div>
      </div>
      <div className="flex gap-4 justify-center">
        <button
          onClick={handleStart}
          className="button flex items-center gap-2 bg-neutral-900 text-white"
        >
          Iniciar
          <Play className="w-5 h-5 " />
        </button>
        <button
          className="button flex items-center gap-2 bg-neutral-900 text-white"
          onClick={handleStop}
        >
          Parar
          <Pause className="w-5 h-5" />
        </button>
        <button
          onClick={handleReset}
          className="button flex items-center gap-2 bg-neutral-900 text-white"
        >
          Zerar
          <Square className="w-5 h-5" />
        </button>
      </div>
      <div className="flex gap-2 items-center">
        <label className="min-w-fit font-semibold" htmlFor="">Tempo inicial</label>
        <input
          onChange={(e) => setInitialTime(Number(e.target.value))}
          className="w-full p-2  rounded-md border border-gray focus:outline-none focus:ring-2 focus:ring-gray-200"
          min={0}
          type="number" />
        <span className="font-semibold">segundos</span>
      </div>
    </div >
  )
}


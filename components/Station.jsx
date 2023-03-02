import { useEffect, useRef, useState } from 'react'
import {
  BsHeart,
  BsHeartFill,
  BsPauseCircle,
  BsPlayCircle,
} from 'react-icons/bs'

const Station = ({ radio, isPlaying, onClick }) => {
  const [isFav, setIsFav] = useState(false)
  const audioRef = useRef()

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  return (
    <div
      className={`w-full flex justify-between py-2 px-4 rounded-lg items-center ${
        isPlaying ? 'bg-primary-300' : ''
      }`}
    >
      <div className='flex items-center gap-4'>
        <audio src={radio.url} className='hidden' ref={audioRef}></audio>
        <button onClick={onClick} className='text-3xl text-primary-900'>
          {isPlaying ? <BsPauseCircle /> : <BsPlayCircle />}
        </button>
        <span className='font-light text-xl'>{radio.name}</span>
      </div>
      <button
        onClick={() => setIsFav((prev) => !prev)}
        className='text-xl text-red-500'
      >
        {isFav ? <BsHeartFill /> : <BsHeart />}
      </button>
    </div>
  )
}

export default Station

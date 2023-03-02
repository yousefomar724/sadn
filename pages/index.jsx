import { useState } from 'react'
import Filters from '../components/Filters'
import Search from '../components/Search'
import Station from '../components/Station'

export const getServerSideProps = async () => {
  const res = await fetch('https://mp3quran.net/api/v3/radios')
  const { radios } = await res.json()

  return { props: { radios } }
}

const Home = ({ radios }) => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null)

  const handleStationClick = (radioId) => {
    if (currentlyPlaying === radioId) {
      setCurrentlyPlaying(null)
    } else {
      setCurrentlyPlaying(radioId)
    }
  }
  return (
    <main dir='rtl'>
      <Search />
      <div className='max-w-7xl mx-auto flex gap-10 px-4'>
        <Filters />
        <div className='basis-3/4 flex items-center gap-4 flex-wrap'>
          {radios.map((radio) => (
            <Station
              key={radio.id}
              radio={radio}
              isPlaying={currentlyPlaying === radio.id}
              onClick={() => handleStationClick(radio.id)}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Home

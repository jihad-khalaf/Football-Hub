import Hero from '../components/Hero.jsx'
import ScoreStrip from '../components/ScoreStrip.jsx'
import ClubGrid from '../components/ClubGrid.jsx'
import StandingsPreview from '../components/StandingsPreview.jsx'
import NewsPreview from '../components/NewsPreview.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <ScoreStrip />
      <Reveal>
        <ClubGrid />
      </Reveal>
      <Reveal>
        <div className="mx-auto grid max-w-[1280px] gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[7fr_5fr] lg:px-12">
          <StandingsPreview />
          <NewsPreview />
        </div>
      </Reveal>
    </>
  )
}

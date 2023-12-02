import Image from 'next/image'
import Intro from './Intro'
import Work from './Work'
import WorkSecond from './WorkSecond'

export default function Home() {
  return (
    <main>
      <Intro />
      <Work />
      <WorkSecond />
    </main>
  )
}

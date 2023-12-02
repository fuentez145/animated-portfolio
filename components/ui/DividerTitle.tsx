'use client'
import { H1Reveal } from '../animation/RevealAnimation'

const DividerTitle = ({title} : { title : string}) => {
  return (
    <div>
       <H1Reveal
          variants="LeftVariants"
          className="font-bold  text-4xl md:text-7xl mt-2 whitespace-nowrap text-white"
        >
         {title}
        </H1Reveal>

      <div className="w-full h-[1px] bg-white my-1 "> </div>
    </div>
  )
}

export default DividerTitle

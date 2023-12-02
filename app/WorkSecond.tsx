import { H1Reveal } from "@/components/animation/RevealAnimation";
import {SlideAnimation} from "@/components/animation/SlideAnimation"
import Image from "next/image"

const variants = {
  hidden: { opacity: 0, x: -250 },
  visible: { opacity: 1, x: 0 },
};

const WorkSecond = () => {
  return (
    <div className="text-white m-3 sm:m-10 min-h-screen  ">
      <H1Reveal variants="LeftVariants" className="font-extrabold  text-7xl mt-2 sm:whitespace-nowrap">Selected Work</H1Reveal>
      {/* <h1 className="font-extrabold  text-7xl mt-2" >Selected Work</h1> */}
      <div className="w-full h-1 bg-white my-5 rounded-full"> </div>
      <SlideAnimation variants={variants} viewport={true} className="grid grid-cols-1 sm:flex sm:flex-row-reverse  h-5/6 border p-2 border-gray-900">
       <Image src="/images/profile.jpg" width={700} height={400} className="object-cover h-98 sm:h-5/6  rounded-lg" alt="MY Profile Picture" />
       <div className=" sm:m-5 sm:p-5 ">
        <h4 className="border rounded-md my-2 border-gray-700 text-lg p-2">Project</h4>
        <h4 className="border rounded-md  border-gray-700 text-end text-lg p-2">Ecoomerce</h4>
        <h4 className="border rounded-md my-2 border-gray-700 text-lg p-2" >Year</h4>
        <h4 className="border rounded-md  border-gray-700 text-end text-lg p-2">2023</h4>
        <h4 className="border rounded-md my-2 border-gray-700 text-lg p-2">Service</h4>
        <h4 className="border rounded-md my-2 border-gray-700 text-end text-lg p-2">Product Design </h4>
        <h4 className="border rounded-md my-2 border-gray-700 text-lg p-2">Description</h4>
        <p className="border rounded-md my-2 border-gray-700 text-lg p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eum quidem vitae dolorem itaque, perferendis non unde sint dolore saepe exercitationem voluptatem amet asperiores cum eligendi alias ducimus. Totam, accusantium!</p>
       </div>
      </SlideAnimation>
    </div>
  )
}

export default WorkSecond

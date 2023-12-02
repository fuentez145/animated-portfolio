import Image from "next/image"

const Work = () => {
  return (
    <div className="text-white m-3 sm:m-10 min-h-screen ">
      <h1 className="font-extrabold  text-7xl mt-2" >Selected Work</h1>
      <div className="w-full h-1 bg-white my-5 rounded-full"> </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  h-5/6 border p-2 border-gray-900	">
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
      </div>
    </div>
  )
}

export default Work

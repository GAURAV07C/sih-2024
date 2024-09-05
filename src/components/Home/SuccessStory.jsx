import React from 'react'

const SuccessStory = () => {
  return (
    <div>
         <section id="success-stories" className="py-20 bg-blue-100 text-center">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold mb-10">Alumni Success Stories</h2>
                <div className="flex flex-wrap justify-center">
                    <div className="bg-white shadow-lg p-6 m-4 w-80 rounded-lg">
                        <p>"Our alumni have achieved great things and continue to make a difference in their fields."</p>
                        <cite className="block mt-4 font-semibold">- Alumni Name</cite>
                    </div>
                    <div className="bg-white shadow-lg p-6 m-4 w-80 rounded-lg">
                        <p>"I am proud to be part of a network that supports and celebrates each other's successes."</p>
                        <cite className="block mt-4 font-semibold">- Another Alumni Name</cite>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default SuccessStory

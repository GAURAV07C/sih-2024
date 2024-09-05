import React from 'react'

const Features = () => {
  return (
    <div>

<section id="features" className="py-20 bg-gray-100 text-center">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold mb-10">Platform Features</h2>
                <div className="flex flex-wrap justify-center">
                    <div className="bg-white shadow-lg p-6 m-4 w-80 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Alumni Registration</h3>
                        <p>Easily join and update your profile to stay connected with peers and the institution.</p>
                    </div>
                    <div className="bg-white shadow-lg p-6 m-4 w-80 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2"><a href="/donation">Donation Portal</a></h3>
                        <p>Support initiatives and projects with secure and convenient donation options.</p>
                    </div>
                    <div className="bg-white shadow-lg p-6 m-4 w-80 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2"><a href="/networking">Networking Hub</a></h3>
                        <p>Connect with alumni based on interests, professions, and locations for networking and mentorship.</p>
                    </div>
                    <div className="bg-white shadow-lg p-6 m-4 w-80 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2"><a href="/job-portal">Job Portal</a></h3>
                        <p>Explore career opportunities and post job openings within the alumni network.</p>
                    </div>
                    <div className="bg-white shadow-lg p-6 m-4 w-80 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Success Stories</h3>
                        <p>Showcase and track achievements to inspire current students and alumni.</p>
                    </div>
                    <div className="bg-white shadow-lg p-6 m-4 w-80 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2"><a href="/events">Events & Reunions</a></h3>
                        <p>Organize and manage alumni events, reunions, and professional development sessions.</p>
                    </div>
                </div>
            </div>
        </section>


    </div>
  )
}

export default Features

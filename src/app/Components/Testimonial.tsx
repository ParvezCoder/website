import React from 'react'

const Testimonial = () => {
  return ( <div className="py-10 font-[sans-serif] bg-cyan-100 max-md:max-w-2xl mx-auto">
    <div className="md:mb-28 mb-12 text-center">
      <h2 className="text-gray-800 text-3xl font-extrabold">What our happy client Said</h2>
    </div>

    <div className="grid md:grid-cols-3 gap-6 relative">
      <div
        className="bg-gradient-to-tr from-[#caf0f8] via-[#ade8f4] to-[#90e0ef] max-w-[65%] h-[140%] w-full -top-16 left-0 right-0 mx-auto rounded-3xl absolute max-md:hidden">
      </div>

      <div className="h-auto p-6 rounded-2xl mx-auto bg-white relative max-md:shadow-md">
        <div>
          <img src="https://readymadeui.com/profile_2.webp" className="w-10 h-10 rounded-full" />
          <h4 className="text-gray-800 text-sm whitespace-nowrap font-bold mt-3">John Doe</h4>
          <p className="mt-0.5 text-xs text-gray-600">Founder of Rubik</p>
        </div>
        <div className="mt-4">
          <p className="text-gray-600 text-sm leading-relaxed">The service was amazing. I never had to wait that long for my food.
            The staff was friendly and attentive, and the delivery was impressively prompt.</p>
        </div>
      </div>

      <div className="h-auto p-6 rounded-2xl mx-auto bg-white relative max-md:shadow-md">
        <div>
          <img src="https://readymadeui.com/profile_3.webp" className="w-10 h-10 rounded-full" />
          <h4 className="text-gray-800 text-sm whitespace-nowrap font-bold mt-3">Mark Adair</h4>
          <p className="mt-0.5 text-xs text-gray-600">Founder of Alpha</p>
        </div>
        <div className="mt-4">
          <p className="text-gray-600 text-sm leading-relaxed">The service was excellent. While the food took a
            bit longer to arrive, the staff was polite and attentive, and the delivery time was surprisingly quick.</p>
        </div>
      </div>

      <div className="h-auto p-6 rounded-2xl mx-auto bg-white relative max-md:shadow-md">
        <div>
          <img src="https://readymadeui.com/profile_4.webp" className="w-10 h-10 rounded-full" />
          <h4 className="text-gray-800 text-sm whitespace-nowrap font-bold mt-3">Simon Konecki</h4>
          <p className="mt-0.5 text-xs text-gray-600">Founder of Labar</p>
        </div>
        <div className="mt-4">
          <p className="text-gray-600 text-sm leading-relaxed">The experience was outstanding. Though there was a
            longer wait for my meal, the team was courteous and attentive, and the delivery was remarkably swift.</p>
        </div>
      </div>
    </div>
  </div>
 )
}

export default Testimonial
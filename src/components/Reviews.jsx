import React from 'react';

const Reviews = ({ rating }) => {
  const stars = [];
  const totalStars = 5;

  // Fill solid stars based on rating
  for (let i = 1; i <= totalStars; i++) {
    if (i <= rating) {
      stars.push(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-yellow-500"
          key={i}
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clipRule="evenodd"
          />
        </svg>
      );
    } else {
      stars.push(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-gray-400"
          key={i}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
      );
    }
  }

  return (
    <div className="flex flex-col gap-4 flex-1">
      <h1 className="text-xl font-bold">Customer Reviews</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
        {[1, 2].map((review) => (
          <div className="bg-white p-4 border border-gray-200 rounded-lg flex flex-col gap-2" key={review}>
            <div className="flex gap-2 items-center">
              <div className="w-10 h-10 rounded-full bg-gray-200"></div>
              <div>
                <h2 className="text-lg font-semibold">Sofia</h2>
                <p className="text-sm text-gray-500">2 days ago</p>
              </div>
            </div>
            <p className="text-sm text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's
            </p>
            <div className="flex items-center gap-2">
              {stars.map((star, index) => (
                <span key={index}>{star}</span>
              ))}
              <h4 className="text-sm text-gray-500">40</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;

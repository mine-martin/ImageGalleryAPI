import React from 'react';

const DevInfo = () => {
  return (
    <div className="bg mx-auto mt-16 max-w-sm rounded overflow-hidden shadow-xl ">
      <div classname="grid grid-cols-3 gap-4">
        <p>
          {' '}
          Support the Developer
          <a
            className="text-blue-400  hover:text-pink-400"
            href="https://www.paypal.com/myaccount/transfer/homepage/buy/preview"
          >
            {' '}
            here
          </a>
        </p>
        <div>
          Get Intouch with the Developer
          <a
            className="text-blue-400 hover:text-pink-400 "
            href="https://mine-martin.netlify.app/"
          >
            {' '}
            here
          </a>
        </div>
      </div>
    </div>
  );
};

export default DevInfo;

import React from 'react';

const ImageCard = ({ image }) => {
  const tags = image.tags.split(',');

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg ">
      <a href={image.largeImageURL}>
        {' '}
        <img src={image.webformatURL} alt="" className="w-full"></img>{' '}
      </a>
      <div className="px-6 py-4">
        <div className="font-small text-pink-400 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong className="font-small text-gray-600 text-sm">
              Views:{' '}
            </strong>
            {image.views}
          </li>
          <li>
            <strong className="font-small text-gray-600 text-sm">Love: </strong>
            {image.likes}
          </li>
          <li>
            <strong className="font-small text-gray-600 text-sm">
              Downloads:{' '}
            </strong>
            {image.downloads}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            <a href={image.pageURL}> #{tag} </a>
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;

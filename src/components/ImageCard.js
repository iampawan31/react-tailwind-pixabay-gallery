import React from 'react'

function ImageCard({ image }) {
  // const tags = image?.tags.split(',')
  return (
    <div>
      <div className="rounded overflow-hidden shadow-lg relative group">
        <img
          src={image.webformatURL}
          className="w-full object-cover h-48 md:h-96 z-10"
          alt=""
        />
        <div className="absolute px-2 pt-2 pb-4 right-0 opacity-0 transition ease-in-out bg-gradient-to-t from-black left-0 -bottom-6 w-full group-hover:bottom-0 group-hover:opacity-100">
          <div className="">
            <div className="font-bold text-white mb-2">
              Photo by {image.user}
            </div>
            {/* <ul>
              <li>
                <strong>Views:</strong> {image.views}
              </li>
              <li>
                <strong>Downloads:</strong> {image.downloads}
              </li>
              <li>
                <strong>Likes:</strong> {image.likes}
              </li>
            </ul> */}
          </div>
          {/* <div>
            {tags.map((tag, index) => {
              return (
                <span
                  key={index}
                  className="inline-block bg-gray-200 text-white ease-in-out rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                >
                  #{tag}
                </span>
              )
            })}
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default ImageCard

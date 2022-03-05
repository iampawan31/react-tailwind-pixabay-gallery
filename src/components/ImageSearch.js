import React from 'react'

function ImageSearch({ searchText }) {
  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <div className="text-3xl text-center mb-2 font-bold">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue to-green">
          Image Gallery App
        </span>
      </div>
      <div className="flex items-center border rounded border-black py-2">
        <input
          onChange={(e) => searchText(e.target.value)}
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Search Image Term..."
        />
      </div>
    </div>
  )
}

export default ImageSearch

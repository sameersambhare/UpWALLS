import React, { useEffect, useState } from 'react';
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
const Wallpapers = () => {
  const [photosList, setPhotosList] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(null); // Changed to null for clarity
  const [downloadUrl, setDownloadUrl] = useState('');
  const [pageIndex,setPageIndex]=useState(1);

  const downloadImage = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.target="main";
    link.download = url.split('/').pop(); // Extract filename from URL
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    fetch(`https://api.pexels.com/v1/curated?page=${pageIndex}&per_page=50`, {
      headers: {
        Authorization: "Dwk2bjVmg0Vsy5ULdY1bTbgiX36ixNYbmdqILdpO0w8WSh6JW2zIGVbV",
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPhotosList(data.photos);
      })
      .catch(err => console.log(err));
  },);

  return (
    <div className="w-full font-['Apercu_pro'] min-h-screen bg-black text-white flex flex-col items-center py-[2vw]">
      <div className="w-full gap-[2vw] px-[2vw] flex flex-wrap justify-center items-center">
        {photosList.map((item, index) => {
          return (
            <div className="rounded-2xl overflow-hidden relative" key={index}
              onMouseEnter={() => {
                setHoverIndex(index);
                setDownloadUrl(item.src.original); // Update URL to the original resolution
              }}
              onMouseLeave={() => setHoverIndex(null)} // Reset hoverIndex on mouse leave
            >
              <img src={item.src.medium} alt="" draggable="false" className='pointer-events-none object-cover w-full' />
              {hoverIndex === index && (
                <button
                  className='absolute bottom-[1.5vw] left-1/2 -translate-x-1/2 bg-black rounded-lg font-semibold text-white py-[0.5vw] px-[2vw]'
                  onClick={() => downloadImage(downloadUrl)}
                >
                  Download
                </button>
              )}
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-[1vw] text-[2vw] mt-[2vw]">
        <BsChevronLeft className='border-[0.1vw] rounded-full p-[0.2vw]' onClick={()=>{let n=pageIndex-1;setPageIndex(n)}} />
        <p className=''>{pageIndex}</p>
        <BsChevronRight className='border-[0.1vw] rounded-full p-[0.2vw]' onClick={()=>{let n=pageIndex+1;setPageIndex(n)}} />
      </div>
    </div>
  );
};

export default Wallpapers;

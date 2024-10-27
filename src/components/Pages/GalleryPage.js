import React, { useState } from 'react';

const images = [
  { id: 1, src: 'img/classes-6.jpg', width: 350, height: 350 , details: "detail of event carried out" },
  { id: 1, src: 'img/about-2.jpg', width: 350, height: 350 , details: "detail of event carried out" },
  { id: 3, src: 'img/about-3.jpg', width: 350, height: 350 , details: "detail of event carried out" },
  { id: 4, src: 'img/classes-1.jpg', width: 350, height: 350 , details: "detail of event carried out" },
  { id: 5, src: 'img/classes-2.jpg', width: 350, height: 350 , details: "detail of event carried out" },
  { id: 6, src: 'img/classes-3.jpg', width: 350, height: 350 , details: "detail of event carried out" },
  { id: 7, src: 'img/classes-4.jpg', width: 350, height: 350 , details: "detail of event carried out" },
  { id: 8, src: 'img/classes-5.jpg', width: 350, height: 350 , details: "detail of event carried out" },
];

const GalleryPage = () => {
  const [zoomedImage, setZoomedImage] = useState(null);

  const handleImageClick = (image) => {
    setZoomedImage(image);
  };

  return (
    <div className="container p-4">
      <div className="flex flex-row w-full h-auto flex-wrap">
		{images.map((image) => (
		<div key={image.id} className='my-2 mx-4'>
			<img
				src={image.src}
				alt={`Image ${image.src}`}
				
				style={{"width": image.width, "height": image.height}}
				onClick={() => handleImageClick(image)}
			/>
			<div className=''>
				<h1 className='text-2xl'>Event</h1>
				<p>{image.details}</p>
			</div>
		</div>
		))}
      </div>

      {zoomedImage && (
        <div
          className="fixed top-2 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center"
          onClick={() => setZoomedImage(null)}
        >
			<button className="fixed sm:top-40 top-20 right-10 text-white text-3xl" onClick={() =>{setZoomedImage(null)}}> X</button>
          <img
            src={zoomedImage.src}
            alt={`Zoomed Image ${zoomedImage.src}`}
            className="max-w-4xl max-h-4xl object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
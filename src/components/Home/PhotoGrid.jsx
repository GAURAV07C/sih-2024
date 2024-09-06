import React from 'react';
// import './PhotoGrid.css'; // Import CSS file for styling
import "./CSS/photoGrid.css"

const photos = [
  { src: 'https://media.istockphoto.com/id/639698498/photo/graduation-college-school-degree-successful-concept.jpg?s=612x612&w=0&k=20&c=xTxCHBETVW5uX4HcZOhkgH4w_oNYnbSMfKe2jv-PNlU=', alt: 'Photo 1' },
  { src: 'https://www.blazingcoders.com/appdata/blogs/116/alumniwebsitedevelopmentanddesigncompany.jpg', alt: 'Photo 2' },
  { src: 'https://media.licdn.com/dms/image/C4D12AQFNy0CKUCEPiw/article-cover_image-shrink_600_2000/0/1647241811903?e=2147483647&v=beta&t=uTiUn87tp3__thfiWE-XfcnV7MIh4DohoRwOgU-aekY', alt: 'Photo 3' },
  { src: 'https://www.msrcasc.edu.in//uploads/media-upload/2023-05/alumni-banner1.png', alt: 'Photo 4' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0CL9W9ncqdeuxFgqrwd4uF7lPpAGKaYx_uA&s', alt: 'Photo 5' },
  { src: 'https://i0.wp.com/gitjaipur.com/wp-content/uploads/2023/04/ALUMNI-scaled.jpg?fit=2560%2C960&ssl=1', alt: 'Photo 6' },
  // Add more photo objects here
];

const PhotoGrid = () => {
  return (
    <div className="photo-grid">
      {photos.map((photo, index) => (
        <div key={index} className="photo-grid-item">
          <img src={photo.src} alt={photo.alt} className="photo-grid-img" />
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Pages from './Pages';

type WallpaperProps = {
  category: string;
};

type Src = {
  original: string;	
  large2x: string;
  large: string;
  medium: string;
  small: string;
  portrait: string;
  landscape: string;
  tiny: string;
};

type Photo = {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: Src;
  liked: boolean;
  alt: string;
};

type PexelsResponse = {
  page: number;
  per_page: number;
  photos: Photo[];
  total_results: number;
  next_page: string;
};

const Wallpapers = ({ category }: WallpaperProps) => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  const [page, setPage] = useState<number>(3)

  const fetchPhotos = async () => {
    try {
      const res = await axios.get<PexelsResponse>(
        "https://api.pexels.com/v1/search",
        {
          headers: {
            Authorization: "oKA82CSj95nFmCE59dCgPuQw3DPmSR9wChnAqNyKgdI0fbgmYEkd16Ha",
          },
          params: {
            query: category,
            per_page: 5,
            page: page,
          },
        }
      );

      setPhotos(res.data.photos);
    } catch (error: any) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, [category]);

  return (
    <div className="wallpaper-container">
      <h1 className='category-title'>{category}</h1>
    <div className='wallpapers'>
    
      {photos.map((photo) => (
        <div key={photo.id} className='wallpaper'>
          <img src={photo.src.original} alt={photo.alt} className='wallpaper-img' loading='lazy'/>
          <div className='img-t'>{photo.width} x {photo.height}</div>
        </div>
      ))}
    </div>

    <Pages setPage={setPage} />
    </div>
  );
};

export default Wallpapers;
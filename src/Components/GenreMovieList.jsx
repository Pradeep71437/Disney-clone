import React from 'react'
import GenersList from '../Constant/GenersList'
import MovieList from './MovieList'
function GenreMovieList() {
  return (
    <div>
        {GenersList.genere.map((item,index) => index<=4&&(

            <div className='pt-8 px-8 md:px-16'>
                <h2 className='text-[20px] md:text-[25px] text-white font-bold'>{item.name}</h2>
                <MovieList id={item.id} index_={index}/>
            </div>
        ))}
    </div>
  )
}

export default GenreMovieList
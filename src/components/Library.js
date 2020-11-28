import React from "react"

import LibrarySongs from "./LibrarySongs"

const Library = ({currentSong, setSongs, songs, setCurrentSong, audioRef, isPlaying, libraryStatus}) => {
    return(
        <div className={`library ${libraryStatus ? "active-library": ""}`}>
            <h2>Library</h2>
            <div className="library-song">
                {songs.map((song) => (
                    <LibrarySongs key={song.uuid} currentSong={currentSong} setSongs={setSongs} songs={songs} isPlaying = {isPlaying} audioRef={audioRef} setCurrentSong={setCurrentSong} song={song}/>                   
                ))}
            </div>           
        </div>
    )
}

export default Library;
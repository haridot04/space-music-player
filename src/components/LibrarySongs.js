import React from "react"

const LibrarySongs = ({currentSong, setSongs, songs, song, setCurrentSong, audioRef, isPlaying, key}) => {
    // console.log(song.active);
    //Event Handler
    const songSelectHandler = async () => {
        await setCurrentSong(song);
        if(isPlaying) audioRef.current.play()
        const newSongs = songs.map((e) => {
            if (song.uuid === e.uuid){
                return{
                    ...e,
                    active: true,
                }
            } else {
                return{
                    ...e,
                    active: false,
                }
            }
        })
        setSongs(newSongs)      
    }
    return( 
        <div onClick={songSelectHandler} className={`library-songs ${ song.active? "selected": "" }`}>
            <img alt={song.name} src={song.cover}/>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
            
        </div>
    )
}

export default LibrarySongs
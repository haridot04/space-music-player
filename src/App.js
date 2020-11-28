import React, {useState, useRef} from "react"
//Styles
import "./styles/app.scss"
//Components 
import Song from "./components/Song"
import Player from "./components/Player"
import data from "./components/data"
import Library from "./components/Library"
import Nav from "./components/Nav"

function App() {
  //Ref
  const audioRef = useRef(null)
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  })
  const [libraryStatus, setLibraryStatus] = useState(false);
  //Event Handler
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime
    const duration = e.target.duration
    const animation = Math.round((current/duration)*100)
    setSongInfo({...songInfo, currentTime: current, duration: duration, animationPercentage: animation,})
  }
  const songEndedHandler = async () => {
    let currentIndex = songs.findIndex((e) => e.uuid === currentSong.uuid)           
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if(isPlaying) audioRef.current.play()
  }

  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav setLibraryStatus={setLibraryStatus} libraryStatus={libraryStatus}/>
      <Song currentSong = {currentSong}/>
      
      <Player songInfo={songInfo} 
        setSongInfo={setSongInfo} 
        audioRef={audioRef} 
        setIsPlaying = {setIsPlaying} 
        isPlaying = {isPlaying} 
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        songs={songs}
        setSongs={setSongs}
      />
      <Library 
        currentSong={currentSong} 
        setSongs={setSongs} 
        isPlaying = {isPlaying} 
        audioRef={audioRef} 
        setCurrentSong={setCurrentSong} 
        songs={songs} 
        libraryStatus={libraryStatus}
      />
      <audio onLoadedMetadata = {timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio} onEnded={songEndedHandler}></audio>

    </div>
  );
}

export default App;

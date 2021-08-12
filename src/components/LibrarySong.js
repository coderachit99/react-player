import React from "react";

const LibrarySong = ({
  song,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  id,
  songs,
}) => {
  const songSelectHandler = () => {
    // const selectedSong = song; //dev ed selecting song time 4:00
    setCurrentSong(song);
    //add active state
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song, //copy same array valuse as before
          active: true, //but updates the active to true
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    audioRef.current.play();
    //check if song is playing
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};
export default LibrarySong;

import React, { useState } from "react";
import songs_list from "./songs";
import './Song_Listcss.css';
import PhoneView from "./PhoneView/PhoneView";
import Phone from "./Phone/Phone"
import SongEdit from "./SongEdit/SongEdit";
import ToggleButton from "./ToggleButton/ToggleButton";
import DashboardWrapper, { DashboardWrapperRight, DashboardWrapperMain } from '../../components/dashboard-wrapper/DashboardWrapper'

const EditPage = () => {
  //a demo list of songs for testing

  const [currentSong, setCurrentSong] = useState({});
  const [isClicked, setClicked] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [songDetails, setSongDetails] = useState({ name: '', artist: '', title: '', album: '', year: '', track: '', genre: '', comments: '', albumArtist: '', composer: '', discno: '', });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSongDetails({ ...songDetails, [name]: value })
  };

  const handleChangeSubmit = () => {
    console.log(songDetails);
  }
  // for showing the list of all the songs presents
  // src/SongList.j
  const handleVieworEdit = () => {
    setEditing(!isEditing);
  }
  //here is how things could turn out to be 

  // here is how it goes now lets see that carefully ....
  const handleCurrentSong = (song) => {
    console.log(song);
    setCurrentSong(song);
    setClicked(true);
    console.log(currentSong);
  }

  const SongList = () => {
    return (
      <div className="container-table">
        <div className="tbl-header">
          <table cellPadding="0" cellSpacing="0" border="0">
            <thead>
              <tr>
                <th>SNo</th>
                <th>File Name</th>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Year</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="tbl-content">
          <table cellPadding="0" cellSpacing="0" border="0">
            <tbody>
              {songs_list.map((item, index) => (
                <tr key={index} onClick={() => handleCurrentSong(item)} style={{ cursor: 'pointer' }}>
                  {/* Add a placeholder for the song image */}
                  <td>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: 15, alignItems: 'center' }}>
                      {index + 1}
                      <div style={{
                        width: '35px',
                        height: '35px',
                        borderRadius: '50%',  // Apply border-radius to make it rounded
                        overflow: 'hidden',  // Hide overflowing content

                      }}>
                        <img
                          src={item.imageSrc ? item.imageSrc : `https://img.freepik.com/free-vector/elegant-musical-notes-music-chord-background_1017-20759.jpg?w=360`} // Replace with the actual image source
                          alt={item.title}
                          width="100%" // Set width to 100% to fill the container
                          height="100%" // Set height to 100% to fill the container
                        />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.title}</td>
                  <td>{item.artist}</td>
                  <td>{item.album}</td>
                  <td>{item.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    );
  };

  // for editing And viewing each and every song details metadata
  return (
    <DashboardWrapper>
      <DashboardWrapperMain>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "full" }}>
          <SongList />
        </div>
      </DashboardWrapperMain>
      {isClicked ? (
        <DashboardWrapperRight>
          <ToggleButton handleVieworEdit={handleVieworEdit} />
          {isEditing ? (
            <SongEdit
              currentSong={currentSong}
              handleChange={handleChange}
              handleSubmit={handleChangeSubmit}
            />
          ) : (
            // <PhoneView currentSong={currentSong} />
            <Phone currentSong={currentSong} />
          )}
        </DashboardWrapperRight>
      ) : (
        <></>
      )}
    </DashboardWrapper>
  )
}

export default EditPage;
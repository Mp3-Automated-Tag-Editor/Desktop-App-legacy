
import React from "react";
import './SongEditcss.css';
const SongEdit = ({ currentSong, handleChange, handleChangeSubmit }) => {

  return (
    <div class="editContainer">
      <div class="editform">
        <div className="editTitle">Song Details</div>
        <div>
          <p className="editSubtitle">Title</p>
          <div className="input-container ic2">
            <input className="fieldsinput" type="text" name="title" value={currentSong.title} onChange={(e) => handleChange(e)} />
          </div>
        </div>
        <div>
          <p className="editSubtitle">Artist</p>
          <div class="input-container ic2">
            <input className="fieldsinput" type="text" name="artist" value={currentSong.artist} onChange={(e) => handleChange(e)} />

          </div>
        </div>
        <div>
          <p className="editSubtitle">Album</p>
          <div class="input-container ic2">
            <input className="fieldsinput" type="text" name="album" value={currentSong.album} onChange={(e) => handleChange(e)} />

          </div>
        </div>

        <div className="two-container">
          <div>
            <p className="editSubtitle">Year</p>

            <div class="input-container ic2">
              <input className="fieldsinput" type="text" name="year" value={currentSong.year} onChange={(e) => handleChange(e)} />

            </div>
          </div>
          <div>
            <p className="editSubtitle">Track</p>
            <div class="input-container ic2">
              <input className="fieldsinput" type="text" name="track" value={currentSong.track} onChange={(e) => handleChange(e)} />

            </div>
          </div>
        </div>
        <div className="two-container">
          <div>
            <p className="editSubtitle">Genre</p>
            <div class="input-container ic2">
              <input className="fieldsinput" type="text" name="genre" value={currentSong.genre} onChange={(e) => handleChange(e)} />

            </div>
          </div>
          <div>
            <p className="editSubtitle">DiscNo.</p>
            <div class="input-container ic2">
              <input className="fieldsinput" type="text" name="discno" value={currentSong.discno} onChange={(e) => handleChange(e)} />

            </div>
          </div>
        </div>

        <div>
          <p className="editSubtitle">Album Artist</p>
          <div class="input-container ic2">
            <input className="fieldsinput" type="text" name="albumArtist" value={currentSong.albumArtist} onChange={(e) => handleChange(e)} />

          </div>
        </div>
        <div>
          <p className="editSubtitle">Composer</p>
          <div class="input-container ic2">
            <input className="fieldsinput" type="text" name="composer" value={currentSong.composer} onChange={(e) => handleChange(e)} />

          </div>
        </div>
        <div>
          <p className="editSubtitle">Directory</p>
          <div class="input-container ic2">
            <input className="fieldsinput" type="text" name="directory" value="Directory x" onChange={(e) => handleChange(e)} />

          </div>
        </div>
        <p className="editSubtitle">Comments</p>
        <div class="input-container ic2" style={{ height: "50px" }}>
          <input class="fieldsinput" type="text" style={{ height: "50px" }} placeholder=" " name="comments" value={currentSong.comments} onChange={(e) => handleChange(e)} />
        </div>
        <div style={{ width: "80%", height: "120px", display: "flex", justifyContent: "space-around", alignItems: "center", padding: "10px" }}>
          <p className="editSubtitle">Album Art</p>
          <img
            src={currentSong.imageSrc} // Replace with the image URL
            alt="Your Image"
            style={{ width: "120px", height: "120px", padding: "10px", borderRadius: "10px" }}
          />
        </div>
        <button type="text" class="submit" style={{ marginBottom: "10px" }} onClick={() => handleChangeSubmit}>Save Changes </button>
      </div>
    </div>
  );
}
export default SongEdit;
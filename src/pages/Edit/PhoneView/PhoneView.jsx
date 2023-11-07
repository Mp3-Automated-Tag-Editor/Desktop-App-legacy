import React from 'react';
import { useEffect } from 'react';
import './PhoneViewCss.css'
const PhoneView = ({ currentSong }) => {

  return (
    <>
      <div className='sideContainer'>

        <div class="player">
          <div class="overlay" style={{
            background: `url(${currentSong.imageSrc ? currentSong.imageSrc : 'https://img.freepik.com/free-vector/elegant-musical-notes-music-chord-background_1017-20759.jpg?w=360'})`,
            backgroundSize: 'cover', // Replace 'your-image.jpg' with your image UR
            backgroundPosition: 'center',
            position: "relative",
            height: "100%",
            width: "100%",
            filter: "blur(30px)",
            top: "0",


          }}></div>
          <div style={{ position: "relative", top: "-600px" }}>
            <div class="top">
              <button class="small">
                <div class="inner_button">
                  <img style={{ height: "10px" }} src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ5MiA0OTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5MiA0OTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDY0LjM0NCwyMDcuNDE4bDAuNzY4LDAuMTY4SDEzNS44ODhsMTAzLjQ5Ni0xMDMuNzI0YzUuMDY4LTUuMDY0LDcuODQ4LTExLjkyNCw3Ljg0OC0xOS4xMjQgICAgYzAtNy4yLTIuNzgtMTQuMDEyLTcuODQ4LTE5LjA4OEwyMjMuMjgsNDkuNTM4Yy01LjA2NC01LjA2NC0xMS44MTItNy44NjQtMTkuMDA4LTcuODY0Yy03LjIsMC0xMy45NTIsMi43OC0xOS4wMTYsNy44NDQgICAgTDcuODQ0LDIyNi45MTRDMi43NiwyMzEuOTk4LTAuMDIsMjM4Ljc3LDAsMjQ1Ljk3NGMtMC4wMiw3LjI0NCwyLjc2LDE0LjAyLDcuODQ0LDE5LjA5NmwxNzcuNDEyLDE3Ny40MTIgICAgYzUuMDY0LDUuMDYsMTEuODEyLDcuODQ0LDE5LjAxNiw3Ljg0NGM3LjE5NiwwLDEzLjk0NC0yLjc4OCwxOS4wMDgtNy44NDRsMTYuMTA0LTE2LjExMmM1LjA2OC01LjA1Niw3Ljg0OC0xMS44MDgsNy44NDgtMTkuMDA4ICAgIGMwLTcuMTk2LTIuNzgtMTMuNTkyLTcuODQ4LTE4LjY1MkwxMzQuNzIsMjg0LjQwNmgzMjkuOTkyYzE0LjgyOCwwLDI3LjI4OC0xMi43OCwyNy4yODgtMjcuNnYtMjIuNzg4ICAgIEM0OTIsMjE5LjE5OCw0NzkuMTcyLDIwNy40MTgsNDY0LjM0NCwyMDcuNDE4eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojODQ4NzhBIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4="></img>
                </div>
              </button>
              <p class="indicator">PLAYING NOW</p>
              <button class="small">
                <div class="inner_button">
                  <img style={{ height: "10px" }} src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXll
cl8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9I
jUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiPjxnPjxwYXRoIGQ9
Im00NjQuODgzIDY0LjI2N2gtNDE3Ljc2NmMtMjUuOTggMC00Ny4xMTcgMjEuMTM2LTQ3
LjExNyA0Ny4xNDkgMCAyNS45OCAyMS4xMzcgNDcuMTE3IDQ3LjExNyA0Ny4xMTdoNDE3
Ljc2NmMyNS45OCAwIDQ3LjExNy0yMS4xMzcgNDcuMTE3LTQ3LjExNyAwLTI2LjAxMy
0yMS4xMzctNDcuMTQ5LTQ3LjExNy00Ny4xNDl6IiBkYXRhLW9yaWdpbmFsPSIjMDAwM
DAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiM4NDg3OEEiIGRhd
GEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTQ2NC44ODMgM
jA4Ljg2N2gtNDE3Ljc2NmMtMjUuOTggMC00Ny4xMTcgMjEuMTM2LTQ3LjExNyA0Ny4
xNDkgMCAyNS45OCAyMS4xMzcgNDcuMTE3IDQ3LjExNyA0Ny4xMTdoNDE3Ljc2NmMyN
S45OCAwIDQ3LjExNy0yMS4xMzcgNDcuMTE3LTQ3LjExNyAwLTI2LjAxMy0yMS4xMzc
tNDcuMTQ5LTQ3LjExNy00Ny4xNDl6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjb
GFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiM4NDg3OEEiIGRhdGEtb2xkX2N
vbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTQ2NC44ODMgMzUzLjQ2N2gtNDE
3Ljc2NmMtMjUuOTggMC00Ny4xMTcgMjEuMTM3LTQ3LjExNyA0Ny4xNDkgMCAyNS45OCA
yMS4xMzcgNDcuMTE3IDQ3LjExNyA0Ny4xMTdoNDE3Ljc2NmMyNS45OCAwIDQ3LjExNy0yMS4
xMzcgNDcuMTE3LTQ3LjExNyAwLTI2LjAxMi0yMS4xMzctNDcuMTQ5LTQ3LjExNy00Ny4xNDl
6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJ
maWxsOiM4NDg3OEEiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PC9nPiA8L3N
2Zz4="></img>
                </div>
              </button>
            </div>

            <div class="center">
              <img class="album" src={currentSong.imageSrc ? currentSong.imageSrc : `https://img.freepik.com/free-vector/elegant-musical-notes-music-chord-background_1017-20759.jpg?w=360`}></img>
            </div>

            <div class="song_details">
              <div style={{ fontSize: "20px" }}>{currentSong.name}</div>
              <div style={{ marginTop: "7px", fontSize: "10px" }}>{currentSong.artist}</div>
            </div>

            <div class="slider">
              <div class="time">
                <div>0%</div>
                <div>100%</div>
              </div>
              <div class="slider_bar">
                <div class="inner_slider_bar"></div>
              </div>

            </div>

            <div class="controls">
              <button class="big">
                <div class="inner_button_big">
                  <img style={{ height: "15px" }} src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5
vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi
8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiI
GlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDQ
4IDQ0OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDQ4IDQ
0ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEy
Ij48Zz48cGF0aCBkPSJNNDM5Ljg0LDIxMC4wNDJsLTI1Ni0xNDRjLTQuOTI4LTIuN

zUyLTExLjAwOC0yLjcyLTE1LjkwNCwwLjEyOFMxNjAsNzQuMjk4LDE2MCw3OS45OT
R2NjIuNTkyTDIzLjg0LDY2LjA0MiAgYy00Ljk2LTIuNzg0LTExLjAwOC0yLjcyLTE1L
jkzNiwwLjEyOEMzLjAwOCw2OS4wNSwwLDc0LjI5OCwwLDc5Ljk5NHYyODhjMCw1LjY5
NiwzLjAwOCwxMC45NDQsNy45MDQsMTMuODI0ICBjMi40OTYsMS40NCw1LjMxMiwyLjE
3Niw4LjA5NiwyLjE3NmMyLjY4OCwwLDUuNDA4LTAuNjcyLDcuODQtMi4wNDhMMTYwLD
MwNS40MDJ2NjIuNTkyYzAsNS42OTYsMy4wNCwxMC45NDQsNy45MzYsMTMuODI0ICBzM
TAuOTc2LDIuOTEyLDE1LjkwNCwwLjEyOGwyNTYtMTQ0YzUuMDI0LTIuODQ4LDguMTYt
OC4xNiw4LjE2LTEzLjk1MlM0NDQuODY0LDIxMi44OSw0MzkuODQsMjEwLjA0MnoiIGR
hdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9Im
ZpbGw6Izg0ODc4QSIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48L2c+I
Dwvc3ZnPg=="></img>
                </div>
              </button>
              <button class="big_play_pause">
                <div class="playpause">
                  <img style={{ height: "15px" }} src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzIwLjAwMSAzMjAuMDAxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMjAuMDAxIDMyMC4wMDE7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PHBhdGggZD0iTTI5NS44NCwxNDYuMDQ5bC0yNTYtMTQ0Yy00Ljk2LTIuNzg0LTExLjAwOC0yLjcyLTE1LjkwNCwwLjEyOEMxOS4wMDgsNS4wNTcsMTYsMTAuMzA1LDE2LDE2LjAwMXYyODggIGMwLDUuNjk2LDMuMDA4LDEwLjk0NCw3LjkzNiwxMy44MjRjMi40OTYsMS40NCw1LjI4LDIuMTc2LDguMDY0LDIuMTc2YzIuNjg4LDAsNS40MDgtMC42NzIsNy44NC0yLjA0OGwyNTYtMTQ0ICBjNS4wMjQtMi44NDgsOC4xNi04LjE2LDguMTYtMTMuOTUyUzMwMC44NjQsMTQ4Ljg5NywyOTUuODQsMTQ2LjA0OXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48L2c+IDwvc3ZnPg=="></img>
                </div>

              </button>
              <button class="big">
                <div class="inner_button_big">
                  <img style={{ height: "15px" }} src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsa
W5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDQ4IDQ0OCIgc3R5bGU9ImVuYWJsZS
1iYWNrZ3JvdW5kOm5ldyAwIDAgNDQ4IDQ0ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48cGF0a
CBkPSJNNDM5Ljg0LDIxMC4wNDJsLTI1Ni0xNDRjLTQuOTI4LTIuNzUyLTExLjAwOC0yLjcyLTE1LjkwNCwwLjEyOFMxNjAsNzQuMjk4LDE2MCw3OS45O
TR2NjIuNTkyTDIzLjg0LDY2LjA0MiAgYy00Ljk2LTIuNzg0LTExLjAwOC0yLjcyLTE1LjkzNiwwLjEyOEMzLjAwOCw2OS4wNSwwLDc0LjI5OCwwLDc5Ljk5NH
YyODhjMCw1LjY5NiwzLjAwOCwxMC45NDQsNy45MDQsMTMuODI0ICBjMi40OTYsMS40NCw1LjMxMiwyLjE3Niw4LjA5NiwyLjE3NmMyLjY4OCwwLDUuNDA4LTAuNjcyL
DcuODQtMi4wNDhMMTYwLDMwNS40MDJ2NjIuNTkyYzAsNS42OTYsMy4wNCwxMC45NDQsNy45MzYsMTMuODI0ICBzMTAuOTc2LDIuOTEyLDE1LjkwNCwwLjEyOGwyNTYtMTQ0Yz
UuMDI0LTIuODQ4LDguMTYtOC4xNiw4LjE2LTEzLjk1MlM0NDQuODY0LDIxMi44OSw0MzkuODQsMjEwLjA0MnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0
aCIgc3R5bGU9ImZpbGw6Izg0ODc4QSIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48L2c+IDwvc3ZnPg=="></img>
                </div>
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
export default PhoneView;
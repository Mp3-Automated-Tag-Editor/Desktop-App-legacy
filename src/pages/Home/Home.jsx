import React, { useState } from 'react'
import DashboardWrapper, { DashboardWrapperRight, DashboardWrapperMain } from '../../components/dashboard-wrapper/DashboardWrapper'
import Box from '../../components/box/Box'
import Github from '../../assets/images/github.png'
import Button from '../../components/box/Button'
import { open } from '@tauri-apps/api/dialog'
// import Divider from '../../components/divider/Divider'
import { Transition } from 'react-transition-group'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const nv = useNavigate();
    function goToSettings() {
        nv("/settings");
    }

    function openGitHub() {
        window.open("https://github.com/Mp3-Automated-Tag-Editor")
    }

    async function selectDirectory() {
        try {
            const selectedPath = await open({
                title: "Select Music Library",
                directory: true,
                multiple: false,
                defaultPath: 'Downloads',
            });
            if (selectedPath) setDirectory(selectedPath);
            else return;
        } catch (error) {
            console.log(error);
        }
    }
    const [directory, setDirectory] = useState("");

    return (
        <DashboardWrapper>
            <DashboardWrapperMain>
                {directory === "" ? (<></>) : (
                    <div className="row">
                        <div className="col-12 mb">
                            <Transition timeout={200} >
                                <Box>Selected Directory: {directory}</Box>
                            </Transition>
                        </div>
                    </div>
                )}

                <div className="row">
                    <div className="col-4 mb">
                        <Button buttonType="button2" func={selectDirectory} title="Select the Directory that contains all the songs that need to be edited">
                            Select Directory
                        </Button>
                    </div>
                    <div className="col-4 mb">
                        <Button buttonType="button" title="Start Searching!">
                            Start
                        </Button>
                    </div>
                    <div className="col-4 mb">
                        <Button buttonType="button2" func={goToSettings} title="Configure Settings">
                            Settings
                        </Button>
                    </div>
                </div>

                {/* <Divider /> */}

                <div className='row'>
                    <div className="col-8 col-md-12">
                        <div className="row">
                            <div className="col-12 col-md-6 col-sm-12 mb">
                                <Box>Hey there! Welcome to Mp3 Automated Tag Editor, by JRS Studios! This suite provides a one-stop solution to 3rd party downloaded songs in terms of generated metadata. Click this square to learn more!</Box>
                            </div>

                        </div>
                    </div>
                    <div className="col-4 hide-md mb">
                        <Button buttonType="button3" title="Check out our GitHub!" func={openGitHub}>
                            <div style={{ alignContent: 'center' }}> <img src={Github} alt="" /> </div>
                        </Button>
                    </div>
                </div>


                <div className='row'>
                    <div className="col-5 col-md-6 col-sm-12 mb">
                        <Box>Hello there</Box>
                    </div>
                    <div className="col-7 col-md-6 col-sm-12 mb">
                        <Box>
                            The music space in today's world is ever evolving and expanding. With great improvements to today's technology, we have been able to bring out music to the vast majority of today's ever-growing and tech-savvy people. In today's market, the biggest players for music streaming include behemoth corporations like Spotify, Gaana, Apple Music, YouTube Music, and so on and so forth. This also happens to be quite the shift from how music was once listened to. For songs downloaded out of old music databases without the song's metadata in place, and other distribution sites, they oftentimes come without any known metadata, i.e., most of the details with regards to the songs are absent, such as the artist's name, the year it was made, album art, etc. This chapter discusses how data mining, data scraping, and data classification are utilized to help add incomplete metadata to song files without the same, along with the design process, the software development, and research for the same.
                        </Box>
                    </div>
                </div>


            </DashboardWrapperMain>
            <DashboardWrapperRight>
                {/* Preview Screen Model (Spotify type) */}
            </DashboardWrapperRight>
        </DashboardWrapper>
    )
}
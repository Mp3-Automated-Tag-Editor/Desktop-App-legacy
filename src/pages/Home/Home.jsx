import React, { useState } from 'react'
import DashboardWrapper, { DashboardWrapperRight, DashboardWrapperMain } from '../../components/dashboard-wrapper/DashboardWrapper'
import Box from '../../components/box/Box'
import Button from '../../components/box/Button'
import { open } from '@tauri-apps/api/dialog'
// import Divider from '../../components/divider/Divider'
import { Transition } from 'react-transition-group'
import { useNavigate } from 'react-router-dom'
import { invoke } from '@tauri-apps/api/tauri'

import Github from '../../assets/images/github.png'
import Igi from '../../assets/images/igi.jpg'
import Python from '../../assets/images/python.png'
import Tauri from '../../assets/images/tauri.svg'
import react from '../../assets/images/react.svg'
import Rust from '../../assets/images/rust.png'
import FastApi from '../../assets/images/fastapi.svg'
import Logo from '../../assets/images/1.png'
import JS from '../../assets/images/js.png'

export default function Home() {
    const nv = useNavigate();
    const [directory, setDirectory] = useState("");

    function startSearch() {
        if (!directory) {
            alert("Select koi bhi nahi")
        } else {
            // await invoke('set_dir', { path_var: selectedPath });
        };
    }

    function goToSettings() {
        nv("/settings");
    }

    function goToAboutUs() {
        nv("/about");
    }

    function openGitHub() {
        window.open("https://github.com/Mp3-Automated-Tag-Editor");
    }

    function openIgiGlobal() {
        window.open("https://www.igi-global.com/gateway/chapter/325943");
    }

    function openWebsite() {
        window.open("https://google.com");
    }

    function openDocs() {
        window.open("https://google.com");
    }

    function openPython() {
        window.open("https://www.python.org/");
    }

    function openReact() {
        window.open("https://react.dev/");
    }

    function openJS() {
        window.open("https://www.javascript.com/");
    }

    function openRust() {
        window.open("https://www.rust-lang.org/");
    }

    function openFastAPI() {
        window.open("https://fastapi.tiangolo.com/");
    }

    function openTauri() {
        window.open("https://tauri.app/");
    }

    async function selectDirectory() {
        try {
            const selectedPath = await open({
                title: "Select Music Library",
                directory: true,
                multiple: false,
                defaultPath: 'Downloads',
            });
            if (selectedPath) {
                setDirectory(selectedPath);
                invoke('set_dir', { path_var: selectedPath });
            } else return;
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <DashboardWrapper>
            <DashboardWrapperMain>
                {directory === "" ? (<></>) : (
                    <div className="row">
                        <div className="col-24 mb">
                            <Transition timeout={200} >
                                <Box>Selected Directory: {directory}</Box>
                            </Transition>
                        </div>
                    </div>
                )}

                <div className="row">
                    <div className="col-8 mb">
                        <Button buttonType="button2" func={selectDirectory} title="Select the Directory that contains all the songs that need to be edited">
                            Select Directory
                        </Button>
                    </div>
                    <div className="col-8 mb">
                        <Button buttonType="button" title="Start Searching!" func={startSearch}>
                            Start
                        </Button>
                    </div>
                    <div className="col-8 mb">
                        <Button buttonType="button2" func={goToSettings} title="Configure Settings">
                            Settings
                        </Button>
                    </div>
                </div>

                {/* <Divider /> */}

                <div className='row'>
                    <div className="col-19 col-md-24 mb">
                        <Box>Hey there! Welcome to Mp3 Automated Tag Editor, by JRS Studios!
                            This suite provides a one-stop solution to 3rd party downloaded
                            songs in terms of generated metadata. Click this square to learn
                            more!
                        </Box>
                    </div>
                    <div className="col-5 hide-md">
                        <Button buttonType="button3" title="Check out our GitHub!" func={openGitHub}>
                            <div style={{ alignContent: 'center' }}> <img src={Github} style={{ width: "80px" }} alt="" /> </div>
                        </Button>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-5 col-md-12 col-sm-24 mb">
                        <Button buttonType="button3 margin" title="About Us" func={goToAboutUs}>
                            <i className='bx bx-info-circle'></i>
                        </Button>
                        <Button buttonType="button3 margin" title="Check out our documentation!" func={openDocs}>
                            <i class='bx bxs-file-doc'></i>
                        </Button>
                    </div>
                    <div className="col-18 col-md-12 col-sm-24 mb">
                        <div className="row">
                            <Button buttonType="button4" title="Check out the paper that started it all!" func={openIgiGlobal}>
                                The music space in today's world is ever evolving and expanding. With great
                                improvements to today's technology, we have been able to bring out music to
                                the vast majority of today's ever-growing and tech-savvy people. In today's
                                market, the biggest players for music streaming include behemoth corporations
                                like Spotify, Gaana, Apple Music, YouTube Music, and so on and so forth. This
                                also happens to be quite the shift from how music was once listened to. For
                                songs downloaded out of old music databases...
                            </Button>
                        </div>

                    </div>

                </div>
                <div className="row">
                    <div className="col-19 col-md-12 col-sm-24 mb">
                        <Box><span className='margin'>Our Tech Stack</span>
                            <div className="row">
                                <div className="col-4 col-md-12 col-sm-24">
                                    <Button buttonType="button3" title="Python Docs" func={openPython}>
                                        <div style={{ alignContent: 'center' }}> <img src={Python} alt="" /> </div>
                                    </Button>
                                </div>
                                <div className="col-4 col-md-12 col-sm-24">
                                    <Button buttonType="button3" title="Tauri Docs" func={openTauri}>
                                        <div style={{ alignContent: 'center' }}> <img src={Tauri} alt="" /> </div>
                                    </Button>
                                </div>
                                <div className="col-4 col-md-12 col-sm-24">
                                    <Button buttonType="button3" title="React Docs" func={openReact}>
                                        <div style={{ alignContent: 'center' }}> <img src={react} alt="" /> </div>
                                    </Button>
                                </div>
                                <div className="col-4 col-md-12 col-sm-24">
                                    <Button buttonType="button3" title="FastAPI Docs" func={openFastAPI}>
                                        <div style={{ alignContent: 'center' }}> <img src={FastApi} alt="" /> </div>
                                    </Button>
                                </div>
                                <div className="col-4 col-md-12 col-sm-24">
                                    <Button buttonType="button3" title="Rust Docs" func={openRust}>
                                        <div style={{ alignContent: 'center' }}> <img src={Rust} alt="" /> </div>
                                    </Button>
                                </div>
                                <div className="col-4 col-md-12 col-sm-24">
                                    <Button buttonType="button3" title="JavaScript Docs" func={openJS}>
                                        <div style={{ alignContent: 'center' }}> <img src={JS} alt="" /> </div>
                                    </Button>
                                </div>
                            </div>
                        </Box>
                    </div>
                    <div className="col-5 col-md-12 col-sm-24">
                        <Button buttonType="button3" title="Check out paper on IGI Global!" func={openIgiGlobal}>
                            <div style={{ alignContent: 'center' }}> <img src={Igi} alt="" /> </div>
                        </Button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-14 col-md-12 col-sm-24 mb">
                        <Button buttonType="button4" title="Check out paper on IGI Global!" func={openIgiGlobal}>
                            Samuel, Jonathan Rufus, et al. "Automated MP3 Tag Editor via Data Mining:
                            A Classification Software for Predicting MP3 Metadata." Handbook of Research
                            on Deep Learning Techniques for Cloud-Based Industrial IoT. IGI Global,
                            2023.
                        </Button>
                    </div>
                    <div className="col-5 col-md-12 col-sm-24 mb">
                        <Button buttonType="button3" title="Check out our GitHub!" func={openGitHub}>
                            <div style={{ alignContent: 'center' }}> <img src={Igi} alt="" /> </div>
                        </Button>
                    </div>
                    <div className="col-5 col-md-12 col-sm-24 mb">
                        <Button buttonType="button3 margin" title="Check out our GitHub!" func={openWebsite}>
                            <img src={Logo} alt="" />
                        </Button>
                    </div>

                </div>


            </DashboardWrapperMain>
            <DashboardWrapperRight>
                {/* Preview Screen Model (Spotify type) */}
            </DashboardWrapperRight>
        </DashboardWrapper>
    )
}
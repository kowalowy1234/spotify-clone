import React from 'react'
import '../Styles/Footer.css'
import ShuffleIcon from '@mui/icons-material/Shuffle';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import MicIcon from '@mui/icons-material/Mic';
import ComputerIcon from '@mui/icons-material/Computer';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { Grid, Slider } from '@mui/material';

function Footer() {
  return (
    <div className='footer'>

      <div className='footer__left'>
        <p>Album and song details</p>
      </div>

      <div className='footer__center'>
        <ShuffleIcon className='footer__green' />
        <SkipPreviousIcon className='footer__icon' />
        <PlayCircleFilledIcon className='footer__icon footer__mainIcons'  fontSize='large'/>
        <PauseCircleFilledIcon className='footer__icon footer__mainIcons'  fontSize='large' />
        <SkipNextIcon className='footer__icon' />
        <RepeatIcon className='footer__green' />
      </div>

      <div className='footer__right'>
        <Grid container spacing={2}>
          <Grid item xs={1}>
            <MicIcon className='footer__icon'/>
          </Grid>
          <Grid item xs={1}>
            <PlaylistPlayIcon className='footer__icon'/>
          </Grid>
          <Grid item xs={1}>
            <ComputerIcon className='footer__icon'/>
          </Grid>
          <Grid item xs={1}>
            <VolumeDownIcon className='footer__icon' />
            <VolumeOffIcon className='footer__icon'/>
          </Grid>
          <Grid item xs={6}>
            <Slider color="success"/>
          </Grid>
          <Grid item xs={1}>
            <OpenInFullIcon className='footer__icon'/>
          </Grid>
        </Grid>
      </div>

    </div>
  )
}

export default Footer
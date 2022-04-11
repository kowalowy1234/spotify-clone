import React from 'react';
import '../Styles/Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDataLayerValue } from '../DataLayer';

function Sidebar() {

  const [{ playlists, savedPlaylists }, dispatch] = useDataLayerValue();

  return (
    <div className='sidebar'>
      <img
        className='sidebar__logo'
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon={HomeIcon} title={"Home"} />
      <SidebarOption Icon={SearchIcon} title={"Search"} />
      <SidebarOption Icon={LibraryMusicIcon} title={"Your Library"} />
      <div className='sidebar__specialOptions'>
        <SidebarOption Icon={AddBoxIcon} title={"Create a playlist"}/>
        <SidebarOption Icon={FavoriteIcon} title={"Liked songs"}/>
      </div>
      <br />
      <strong className='sidebar__title'>PLAYLISTS</strong>
      <hr />

      <div className='sidebar__playlists'>
      {playlists?.items?.map(playlist => (
        <SidebarOption title={playlist.name} />
        ))}

      {savedPlaylists?.items?.map(savedPlaylist => (
        <SidebarOption title={savedPlaylist.name} />
        ))}
      </div>

        <hr />
    </div>
  )
}

export default Sidebar
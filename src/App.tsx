import React, { useContext } from 'react'
import Snowfall from 'react-snowfall'
import { SettingsContext } from './context/settings'
import ReactTypingComponent from './components/TypingTextComponent'
import SocialMediaHandles from './components/soicalMediaHandles'

import './App.css'

const IMAGE_SRC =
  'https://res.cloudinary.com/imphanimurari/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1628421712/Portfolio/WhatsApp_Image_2021-08-08_at_4.50.35_PM_2_bgm46k.jpg'

const strings = {
  name: `I'm Phani Murari`,
  about: 'Techie with Entrepreneurial Mindset'
}

const App = () => {
  const settings = useContext(SettingsContext)

  return (
    <div className="app">
      <Snowfall color={settings.color} snowflakeCount={settings.snowflakeCount} />
      <img className="avatar-image" src={IMAGE_SRC} alt="avatar" />
      <h1>{strings.name}</h1>
      <ReactTypingComponent typingText={strings.about} />
      <SocialMediaHandles />
    </div>
  )
}

export default App

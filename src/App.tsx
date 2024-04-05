import React, { useState } from "react"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme/default"
import GlobalStyle from "./styles/global"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import Banner from "./components/Banner"
import backgroundImage from './assets/banner.png'
import { AppContainer, GaleryContainer, MainContainer } from "./components/AppContainer/styles"
import Galery from "./components/Galery"
import photos from './fotos.json'
import ZoomModal from "./components/ZoomModal"
import { Photo } from "./types"

const App: React.FC = () => {
  const [galeryPhotos, setGaleryPhotos] = useState(photos)
  const [selectedPhotos, setSelectedPhotos] = useState<Photo>()

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <AppContainer>
        <Header/>
        <MainContainer>
          <SideBar/>
          <GaleryContainer>
            <Banner 
              text="A galeria mais completa de fotos do espaço!" 
              backgroundImage={backgroundImage}
            />
            <Galery photos={galeryPhotos} onSelect={(photo: Photo) => setSelectedPhotos(photo)}/>
          </GaleryContainer>
        </MainContainer>
      </AppContainer>
      {selectedPhotos && <ZoomModal photo={selectedPhotos} onClose={() => setSelectedPhotos(undefined)}/>}
    </ThemeProvider>
  )
}

export default App

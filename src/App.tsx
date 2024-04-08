import React, { useEffect, useState } from "react"
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
  const [galeryPhotos, setGaleryPhotos] = useState<Photo[]>(photos)
  const [selectedPhotos, setSelectedPhotos] = useState<Photo>()
  const [tag, setTag] = useState(0)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const filteredPhotos = photos.filter(photo => {
      const tagFiltered = !tag || photo.tagId === tag
      const titleFiltered = !filter || photo.titulo.toLowerCase().includes(filter.toLowerCase())
      return titleFiltered && tagFiltered
    })
    setGaleryPhotos(filteredPhotos)
  }, [filter, tag])
  
  const  toggleFavorites = (photo: Photo) => {
   if(photo.id === selectedPhotos?.id){
    setSelectedPhotos({
      ...selectedPhotos,
      favorite: !selectedPhotos.favorite
    })
   }
   setGaleryPhotos(galeryPhotos.map(galeryPhoto => {
    return{
      ...galeryPhoto,
      favorite: galeryPhoto.id === photo.id ? !photo.favorite : galeryPhoto.favorite
    }
   }))
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <AppContainer>
        <Header setFilter={setFilter}/>
        <MainContainer>
          <SideBar/>
          <GaleryContainer>
            <Banner 
              text="A galeria mais completa de fotos do espaço!" 
              backgroundImage={backgroundImage}
            />
            <Galery 
              photos={galeryPhotos} 
              onSelect={(photo: Photo) => setSelectedPhotos(photo)}
              toggleFavorites={toggleFavorites}
              setTag={setTag}
            />
          </GaleryContainer>
        </MainContainer>
      </AppContainer>
      {selectedPhotos && <ZoomModal photo={selectedPhotos} onClose={() => setSelectedPhotos(undefined)} toggleFavorites={toggleFavorites}/>}
    </ThemeProvider>
  )
}

export default App

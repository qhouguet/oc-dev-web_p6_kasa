import { useState } from 'react'
import leftBracket from 'images/left-bracket.svg'
import rightBracket from 'images/right-bracket.svg'

function Gallery({ images, alt }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // On vient vérifier si on est à l'index 0
  // Si c'est le cas, la fonction vient set le nouvel index dans notre state à notre taille de tableau - 1
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  // Même principe que la fonction previous, mais appliqué dans le cas où on est à la dernière image de notre tableau
  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  // On vérifie si on a plusieurs images dans notre tableau, et on stocke ça avec un booléen
  // Si on a + d'une image, on affichera les chevrons gauche et droite + le compteur d'images sur
  // le carousel
  let isMultipleImages = false

  if (images.length > 1) {
    isMultipleImages = true
  }

  return (
    <div className="slideshow">
      {isMultipleImages ? (
        <>
          <img
            className="slideshow__bracket--left"
            src={leftBracket}
            alt="Bouton vers la slide précédente"
            onClick={goToPrevious}
          />
          <img
            className="slideshow__bracket--right"
            src={rightBracket}
            alt="Bouton vers la slide suivante"
            onClick={goToNext}
          />
          <div className="slideshow__numerotation">
            {currentIndex + 1}/{images.length}
          </div>
        </>
      ) : null}
      <img className="slideshow__slide" src={images[currentIndex]} alt={alt} />
    </div>
  )
}

export default Gallery
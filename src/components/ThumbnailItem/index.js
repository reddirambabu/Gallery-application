// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachImageObject, onChangeImage, isTrue} = props
  const {
    id,
    imageAltText,
    imageUrl,
    thumbnailUrl,
    thumbnailAltText,
  } = eachImageObject

  const hasChangeImage = () => {
    onChangeImage(imageUrl, imageAltText, id)
  }

  const selectedClass = isTrue ? 'selected-button' : 'non-selected-button'

  return (
    <li onClick={hasChangeImage} className="list-item">
      <button type="button" className={`button ${selectedClass}`}>
        <img src={thumbnailUrl} alt={thumbnailAltText} className="image" />
      </button>
    </li>
  )
}

export default ThumbnailItem

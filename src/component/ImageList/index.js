import './index.css'

const ImageList = props => {
  const {imageListItem, imageClick} = props
  const {thumbnailUrl} = imageListItem

  const onclickImage = () => {
    imageClick(thumbnailUrl)
  }
  return (
    <li className="list-items">
      <button className="image-button" type="button" onClick={onclickImage}>
        <img src={thumbnailUrl} className="small-image" alt="thumbnail" key="thumbnailUrl" />
      </button>
    </li>
  )
}

export default ImageList

import './index.css'

const LocationContainer = props => {
  const {locationDetails} = props
  const {imageUrl, name, description} = locationDetails

  return (
    <li className="location-item">
      <div className="location-card-container">
        <img src={imageUrl} alt={name} className="image" />
        <div className="bottom-container">
          <h1 className="heading">{name}</h1>
          <p className="description">{description}</p>
        </div>
      </div>
    </li>
  )
}

export default LocationContainer

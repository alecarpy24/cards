import PropTypes from "prop-types"

import './cards.css'
function Card({ title, imageSource, url, text }) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow"><img src={imageSource} className="card-img-top" /></div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">
          {text ? text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip  ex ea commodo consequat"}
        </p>
        <a href={url} target="_blank" className='btn btn-outline-secondary rounded-0'>Go to this website</a>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource: PropTypes.string,
  text:PropTypes.string
}
export { Card }

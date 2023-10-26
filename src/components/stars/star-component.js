import { StarStyle } from './styled-star'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export const StarComponent = ({ rating }) => {
  const stars = []

  for (let i = 0; i < rating; i++) {
    stars.push(<FontAwesomeIcon icon={faStar} style={ { color: '#f7c325', fontSize: '20px' } } key={i} />)
  }

  if (stars.length < 5) {
    for (let i = stars.length; i <= 5; i++) {
      stars.push(<FontAwesomeIcon icon={faStar} style={{ color: '#c5ced6', fontSize: '20px' }} key={i} />)
    }
  }

  return (
    <StarStyle>
        {stars.slice(0, 5)}
    </StarStyle>
  )
}

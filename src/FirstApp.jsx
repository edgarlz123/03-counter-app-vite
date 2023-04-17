//const newMessage = 'Compenente de Edgar3';
import PropTypes from 'prop-types';

export default function FirstApp( {title, subTitle} ) {
  return (
    <>
        <h1>{ title }</h1>
        <p>{ subTitle }</p>
    </>
  )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    subTitle: 'No hay subtitulo definido'
}
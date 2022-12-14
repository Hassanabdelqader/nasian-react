export const Image = ({ title, largeImage, smallImage }) => {
  return (
    <div className='portfolio-item'>
      <div className='hover-bg'>
        {' '}
        <a
          href={largeImage}
          rel="noreferrer"
          target={'_blank'}
          title={title}
          data-lightbox-gallery='gallery1'
        >
          <div className='hover-text'>
            <h4>{title}</h4>
          </div>
          <img
            src={smallImage}
            className='img-responsive-galary'
         
            alt={title}
          />{' '}
        </a>{' '}
      </div>
    </div>
  )
}
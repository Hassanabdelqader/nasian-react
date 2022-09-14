import imgMine from '../data/myPic.jpg';

export const Developer = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>The Developer</h2>
          <p>
          👋 I'm Hassan Mousa.I'm working with newest front-end frameworks like Angular, React.I've graduated from the Jordan University of Science and Technology with a major in computer science .📫 How to reach me TerawiHassan@gmail.com💚
          </p>
        </div>
        <div id='row'>

             <div className='thumbnail'>
                    {' '}
                    <img src={imgMine} alt='...' className='img-mine' />
                    <div className='caption'> 
                      <h4>{"Hasan Mousa "}</h4>
                      <p>{'Full Stack Developer'}</p>
                    </div>
                  </div>
        </div>
      </div>
    </div>
  )
}

import { useState } from 'react'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
import data from '../data/data.json'
import Address from './Address'
import { Wrapper, Status } from "@googlemaps/react-wrapper";


const render = (status) => {
  return <h1>{status}</h1>;
};

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)
  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    emailjs
      .sendForm(
        'service_w36eym9', 'template_49nkwhq', e.target, 'NhWFP7NebEGbABIhz'
      )
      .then(
        (result) => {
          Swal.fire(
            'Thanl for contacting us ',
            'Email Sent Successfully ',
            'success'
          )
          clearState()
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: 'Email was not Sent '
          })
        }
      )
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Name'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>


                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
            <h3>Contact Info</h3>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                {data.Contact ? data.Contact.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {data.Contact ? data.Contact.email : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
             
              <div>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
                <Wrapper apiKey={"YOUR_API_KEY"} render={render}>
                
                <Address />
                </Wrapper>

                {/* {data.Contact.address ? data.Contact.address : 'loading'} */}
              </div>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={data.Contact ? data.Contact.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={data.Contact ? data.Contact.github : '/'}>
                      <i className='fa fa-github'></i>
                    </a>
                  </li>
                  <li>
                    <a href={data.Contact ? data.Contact.linkedin : '/'}>
                      <i className='fa fa-linkedin-square'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

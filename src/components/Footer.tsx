import img from '../../public/iso.svg'

const FooterRes = () => {
  return (
    <div className='footer'>
        <a href="#main-title" className='footer-img' style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
        }}>
        </a>
    </div>
  )
}

export default FooterRes

import {Link} from 'react-router-dom'


function Footer() {
  return (
    <div className="grid place-items-center gap-[2rem] text-center py-[5rem] bg-[#2c343e] text-white">
        <Link to='/'><img src="/src/assets/shared/desktop/footer-logo.svg" alt="" /></Link>

        <ul className='grid gap-[1rem]'>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/about'>ABOUT US</Link></li>
            <li><Link to='/create'>CREATE YOUR PLAN</Link></li>
        </ul>

        <div className="socials flex gap-[1rem]">
            <Link to='www.instagram.com'><img src="/src/assets/shared/desktop/icon-instagram.svg" alt="" /></Link>
            <Link to='www.x.com'><img src="/src/assets/shared/desktop/icon-twitter.svg" alt="" /></Link>
            <Link to='www.facebook.com'><img src="/src/assets/shared/desktop/icon-facebook.svg" alt="" /></Link>
        </div>
    </div>
  )
}

export default Footer
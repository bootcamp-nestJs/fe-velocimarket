import banner  from '../assets/img/bannerimg.png'
import './banner.css'

export function Banner() {
    return (
        <div className="banner">
        <img src={banner} alt="" />
    </div>
    )
}
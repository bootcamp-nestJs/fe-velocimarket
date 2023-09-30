import banner  from '../assets/img/Banner.svg'
import './banner.css'

export function Banner() {
    return (
        <div className="banner">
        <img src={banner} alt="" />
    </div>
    )
}
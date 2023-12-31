import { useNavigate } from "react-router-dom";
import avatarDefault from "../assets/img/avatardefault.png" 
import { ReactNode } from "react";


interface ProfileCardProps {
  avatar:string;
  name: string;
  location: string;
  rate?: number;
  followers: number;
  following: number;
  products: number;
  children: ReactNode;
  onProductsClick: () => void;
  onFollowersClick: () => void;
  onFollowingClick: () => void;
}

export default function ProfileCard({
  avatar,
  name,
  location,
  rate = 5,
  followers,
  following,
  products,
  children,
  onProductsClick,
  onFollowersClick,
  onFollowingClick
  
}: ProfileCardProps) {

  const navigate = useNavigate();

  const handleProduct = () => {
    onProductsClick();
  };

  const handlefollowers = () => {
    onFollowersClick();
  };

  const handlefollowing = () => {
    onFollowingClick();
  };

  const renderStars = () => {
    const maxRating = 5;
    const starArray = [];

    for (let i = 1; i <= maxRating && i <= rate; i++) {

      starArray.push(
        <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.9844 7.5039C18.8894 7.21275 18.711 6.95593 18.4712 6.76536C18.2315 6.5748 17.941 6.45888 17.636 6.43203L13.1828 6.04687L11.4406 1.89531C11.3208 1.61298 11.1205 1.37217 10.8648 1.20289C10.609 1.03361 10.3091 0.943344 10.0024 0.943344C9.69566 0.943344 9.39573 1.03361 9.13997 1.20289C8.88421 1.37217 8.68393 1.61298 8.56408 1.89531L6.81955 6.04687L2.36643 6.43203C2.0597 6.45743 1.7673 6.57284 1.52593 6.7638C1.28455 6.95476 1.10495 7.21275 1.00965 7.5054C0.91435 7.79805 0.907605 8.11233 0.990257 8.4088C1.07291 8.70527 1.24128 8.97073 1.47424 9.17187L4.85861 12.125L3.84299 16.5187C3.77334 16.8179 3.79342 17.131 3.90073 17.4189C4.00804 17.7067 4.19782 17.9565 4.44633 18.1371C4.69484 18.3177 4.99107 18.421 5.29798 18.4341C5.60489 18.4472 5.90886 18.3696 6.1719 18.2109L10 15.8859L13.8281 18.2109C14.0912 18.3694 14.395 18.4468 14.7018 18.4335C15.0086 18.4203 15.3046 18.3169 15.553 18.1364C15.8014 17.9559 15.9911 17.7062 16.0983 17.4185C16.2056 17.1308 16.2258 16.8178 16.1563 16.5187L15.1406 12.125L18.525 9.17187C18.7574 8.97 18.9249 8.70401 19.0066 8.40727C19.0884 8.11053 19.0806 7.79626 18.9844 7.5039ZM13.7696 10.8336C13.5553 11.02 13.3959 11.2613 13.3085 11.5315C13.2211 11.8017 13.209 12.0906 13.2735 12.3672L14.1633 16.2203L10.8086 14.1828C10.565 14.0345 10.2853 13.956 10 13.956C9.71478 13.956 9.43505 14.0345 9.19143 14.1828L5.83674 16.2203L6.72658 12.3672C6.79107 12.0906 6.77896 11.8017 6.69155 11.5315C6.60414 11.2613 6.44474 11.02 6.23049 10.8336L3.25471 8.2375L7.1719 7.89843C7.45555 7.87415 7.72712 7.77251 7.95702 7.60459C8.18692 7.43668 8.36636 7.20891 8.4758 6.94609L10 3.31406L11.5242 6.94609C11.6337 7.20891 11.8131 7.43668 12.043 7.60459C12.2729 7.77251 12.5445 7.87415 12.8281 7.89843L16.7453 8.2375L13.7696 10.8336Z" fill="black" />
        </svg>
      );
    }

    return starArray;
  };

  return (
    <div className="ProfileCard">
      <div className="ProfileCard_header">
        <img src={avatar===""?avatarDefault:avatar} alt="" />
        <div className="details">
          <h1>{name}</h1>
          <span>{location}</span>
          <div className="rate">
            {renderStars()}
          </div>
        </div>
        <div className="buttons">
          {children}
        </div>
      </div>

      <span className="mid_text">Acá va una pequeña biografía del usuario</span>

      <div className="ProfileCard_footer">
        <div className="tag" onClick={handleProduct}>
          <span>Productos</span>
          <big>{products}</big>
        </div>
        <div className="tag"onClick={handlefollowers}>
          <span>Siguiendo</span>
          <big>{following}</big>
        </div>
        <div className="tag"onClick={handlefollowing}>
          <span>Seguidores</span>
          <big>{followers}</big>
        </div>
      </div>
    </div>
  )
}
 
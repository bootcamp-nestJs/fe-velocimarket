import Header from "../components/header";
import Footer from "../components/footer";
import imgMessage from "../assets/img/imagen message.png";
import paperplane from "../assets/paper-plane.svg";
import { useState } from "react";
import mensajesprueba from '../json/mensajesprueba.json';
import { Message } from "../interfaces/testmensajes";
import "./inbox.css"
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import avatarData from "../json/imagenesprueba.json"


interface InboxProps {
    messages: Message[];
}

export default function Inbox({ messages }: InboxProps) {

    const user = useSelector((state: RootState) => state.user)

    const [userMessage, setUserMessage] = useState<string>('');

    const handleSendMessage = () => {
        setUserMessage('');
    };

    const img_product = avatarData.product[0].img_product;

    return (
        <>
            <div className="inbox-page-cont">
                {user.isAuth && <Header />}
                <div className="title-inbox">
                    <h2>Bandeja de Mensajes</h2>
                </div>
                <div className="cont-inbox">
                    <div className="cont-messages">
                        {messages.map((message, index) => (
                            <div className="message" key={index}>
                                <img className="avatar-inbox" src= {avatarData.avatar[index].avatar} alt="Avatar" />
                                <div className="user-message">
                                    <h5 className="title-messUser">{avatarData.follower[index].user}</h5>
                                    <a className="location-message">{avatarData.follower[index].comuna}</a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="message-view-zone">
                        {userMessage ? (
                            <div className="user-message">
                                <h5 className="title-messUser">Nombre de usuario</h5>
                                <p>{userMessage}</p>
                            </div>
                        ) : (
                            <div>
                                <img className="img-message" src={imgMessage} alt="Message" />
                                <h5 className="title-messUser">comienza tu conversación</h5>
                            </div>
                        )}
                        <div className="send-text">
                            <input
                                type="text"
                                className="input-message"
                                placeholder="Escribe tu mensaje"
                                value={userMessage}
                                onChange={(e) => setUserMessage(e.target.value)}
                            />
                            <img className="icon-message-zone" src={paperplane} alt="Send" onClick={handleSendMessage} />
                        </div>
                    </div>

                    <div className="message-product-view">
                        <img className="img-product-message" src={img_product} alt="Product" />
                        <div className="precio-message">{avatarData.product[0].precio}</div>
                        <div className="text-product-message">{avatarData.product[0].titulo}</div>
                    </div>
                </div>
                <div className="footer-inbox">
                    <Footer />
                </div>
            </div>
        </>
    );
}


Inbox.defaultProps = {
    messages: mensajesprueba.message
};

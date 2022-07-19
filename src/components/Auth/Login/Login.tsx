import { FC } from "react";
import "../../../styles/login.scss"

const Login: FC = () => {
    return (
        <div className="login">
            <div className="login-content">
                <div className="login__info">
                    <svg className="logo-info" viewBox="0 0 24 24"><path d="m5.868 15.583a8.938 8.938 0 0 1 -2.793-7.761 9 9 0 1 1 14.857 7.941 5.748 5.748 0 0 0 -1.804 3.237h-3.128v-8.184a3 3 0 0 0 2-2.816h-2a1 1 0 0 1 -2 0h-2a3 3 0 0 0 2 2.816v8.184h-3.125a6.538 6.538 0 0 0 -2.007-3.417zm2.132 5.417v3h8v-3z" /></svg>
                    <div className="title-info">
                        Podorozhnik
                    </div>
                    <div className="item-info">
                        <svg className="item-info-svg" viewBox="0 0 24 24" ><rect x="4" width="16" height="16" /><path d="M4,18v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V18Zm9,4H11V20h2Z" /></svg>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, laboriosam.
                    </div>
                    <div className="item-info">
                        <svg className="item-info-svg" viewBox="0 0 24 24"><path d="M18,24H15V20.5a.5.5,0,0,0-.5-.5h-5a.5.5,0,0,0-.5.5V24H6V20.5A3.5,3.5,0,0,1,9.5,17h5A3.5,3.5,0,0,1,18,20.5Zm-6-8a3.5,3.5,0,1,0-3.5-3.5A3.5,3.5,0,0,0,12,16Zm6-9a3.5,3.5,0,1,0-3.5-3.5A3.5,3.5,0,0,0,18,7ZM6,7A3.5,3.5,0,1,0,2.5,3.5,3.5,3.5,0,0,0,6,7ZM8.8,8.031C8.7,8.022,8.6,8,8.5,8h-5A3.5,3.5,0,0,0,0,11.5V15H3V11.5a.5.5,0,0,1,.5-.5H6.712A5.5,5.5,0,0,1,8.8,8.031ZM20.5,8h-5c-.1,0-.2.022-.3.031A5.5,5.5,0,0,1,17.288,11H20.5a.5.5,0,0,1,.5.5V15h3V11.5A3.5,3.5,0,0,0,20.5,8Z" /></svg>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, laboriosam.
                    </div>
                </div>
                <div className="login__form">
                    <div className="form__info">
                        <div className="form-title">
                            Podorozhnik club
                        </div>
                        <div className="form-subtitle">
                            Войти
                        </div>
                    </div>
                    <form>
                        <input className="form-input" type="text" placeholder="Email" />
                        <input className="form-input" type="password" placeholder="Password" />
                        <button className="form-btn">Join</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
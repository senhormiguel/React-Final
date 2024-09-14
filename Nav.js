import logoPNG from '../../assets/png/logo.png' // logoSVG
import style from './Nav.module.css'

// import { Icon } from '@iconify/react';

// Na página shop é de produtos e Home é a página inicial relacionado o about
function Nav() {
// # liagações das páginas´"a href"
    console.log(style)

    // Existe sempre um return, condição: if
    return (
        <div className={style['main-header']}>
            <div className={`${style.logoWrapper}`}>
                <img src={logoPNG} alt="logo" />
            </div>

            <nav className={style.linksWrapper}>
                <div className={style.mainMenu}>
                    <ul>
                        <li><a href="#">Homepage</a></li>
                        <li><a href="#">AboutUs</a></li>
                        <li><a href="#">ProductGrid</a></li>

                    </ul>
                </div>
                <div className={style.utilityMenu}>
                    <ul>
                        <li className={style.loginLinks}><a className={style.linksWithIcons} href="#login">
                            <Icon icon="mdi:user-outline" height="2.4rem" /> Login</a>
                        </li>
                        <li><a href="#register">Register</a></li>

                    </ul>
                </div>
            </nav>
        </div>)
}


export default Nav;
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { CreateEffectIcon } from '@/components/Icons';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('div-link')}>
                <Link
                    className={cx('link')}
                    target="_blank"
                    to={'https://www.tiktok.com/'}
                >
                    <img
                        className={cx('img')}
                        src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/045b2fc7c278b9a30dd0.png"
                        alt=""
                    />
                    <div className={cx('div-img')}>
                        <CreateEffectIcon className={cx('icon')} />
                        <h4 className={cx('title')}>Create effects</h4>
                    </div>
                </Link>
            </div>

            <div className={cx('content')}>
                <span>About</span>
                <span>Newsroom</span>
                <span>Contact</span>
                <span>Careers</span>
                <span>ByteDance</span>
            </div>
            <div className={cx('content')}>
                <span>TikTok for Good</span>
                <span>Advertise</span>
                <span>Developers</span>
                <span>Transparency</span>
                <span>TikTok</span>
                <span>Rewards</span>
                <span>TikTok Embeds</span>
            </div>
            <div className={cx('content')}>
                <span>Help</span>
                <span>Safety</span>
                <span>Terms</span>
                <span>Privacy</span>
                <span>Creator Portal</span>
                <span>Community Guidelines</span>
            </div>

            <span className={cx('span')}>© 2023 TikTok</span>
        </div>
    );
}

export default Footer;

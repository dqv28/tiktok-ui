import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';

import AccountItem from './AccountItem';
import Button from '@/components/Button';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label }) {
    const currentUser = false;

    return (
        <div className={cx('wrapper')}>
            {currentUser ? (
                <div className={cx('account-frame')}>
                    <p className={cx('label')}>{label}</p>

                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
                    <AccountItem />

                    <p className={cx('more-btn')}>See more</p>
                </div>
            ) : (
                <div className={cx('login-frame')}>
                    <p className={cx('hint')}>
                        Log in to follow creators, like videos, and view
                        comments.
                    </p>

                    <Button large outline className={cx('button')}>
                        Login
                    </Button>
                </div>
            )}
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;

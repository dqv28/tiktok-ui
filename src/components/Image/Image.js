import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '@/assets/images';
import styles from './Img.module.scss';

const Image = forwardRef(
    (
        {
            className,
            src,
            alt,
            fallback: customFallback = images.noImage,
            ...props
        },
        ref,
    ) => {
        const [fallback, setFallback] = useState('');

        const handleError = () => {
            setFallback(customFallback);
        };

        return (
            <img
                className={classNames(styles.wrapper, className)}
                ref={ref}
                src={fallback || src}
                alt={alt}
                {...props}
                onError={handleError}
            />
        );
    },
);

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;

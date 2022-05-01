import React from 'react';
import styles from '../styles/Global';
import assets from '../assets';
import Button from './Button';

const SectionWrapper = ({title, description, showBtn, mockupImg, banner, reverse}) => {
  return (
    <div 
        className={`min-h-screen ${styles.section} 
                    ${banner}
                    ${reverse ? styles.bgWhite : styles.bgPrimary}
                    `}
    >
        <div 
            className={`flex items-center 
                        w-11/12 sm:w-full midmd:w-3/4
                        ${reverse ? styles.boxReverseClass : styles.boxClass} 
                    `}
        >
            <div 
                className={`${styles.descDiv} 
                            ${reverse ? 'fadeRightMini' : 'fadeLeftMini'}
                            ${reverse ? styles.textRight : styles.textLeft}
                            ${reverse ? styles.blackText : styles.whiteText}
                        `}
            >
                <h1 
                    className={`${styles.h1Text}
                                ${reverse ? styles.blackText : styles.whiteText}
                            `}
                >
                    {title}
                </h1>
                <p className={`${styles.descriptionText}`}>{description}</p>
                {showBtn && (
                    <Button
                        assetUrl={assets.expo}
                        link="deployed nft market place application"
                    />
                )}
            </div>

            <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
                <img src={mockupImg} alt="mockup" 
                    className={`${styles.sectionImg} 
                                ${reverse ? 'fadeLeftMini' : 'fadeRightMini'}
                            `} 
                />
            </div>
        </div>        
    </div>
  )
}

export default SectionWrapper
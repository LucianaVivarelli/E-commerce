import React from 'react';
import Styles from './Rodape.module.css'
import {TbBrandLinkedin,} from 'react-icons/tb'
import {FiGithub} from 'react-icons/fi'
export const Rodape = () => {
  return (
    <footer className={Styles.containerFooter}>
        <div className={Styles.listsContainer}>

            <div className={Styles.social}>
              <h3>Social Media</h3>
                <TbBrandLinkedin className={Styles.icon} />
                <FiGithub className={Styles.icon} />
            
            </div>
            <div className={Styles.search}>
                
                    <h3>About</h3>
                    <p>Company</p>
                    <p>Details</p>
                    <p>Planning</p>
                    <p>About Us</p>
                </div>
                </div>
    </footer>
  )
}


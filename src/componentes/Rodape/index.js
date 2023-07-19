import React from 'react'
import styles from './Rodape.module.css'
import { FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa";


export default function Rodape() {
 
  function getToday() { 
    var today = new Date(); 
    var dd = String(today.getDate()).padStart(2, '0'); 
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear(); 
  
    today = mm + '/' + dd + '/' + yyyy; 
    return today 
  }

    return ( 
    <>     
    <div className={styles.rodape}> 
    <div className={styles.icon}> <FaFacebook/> </div> 
    <div className={styles.icon}> <FaTwitter/> </div> 
    <div className={styles.icon}> <FaInstagram/> </div> 
  
    </div> 
     

    <p className={styles.date}>{getToday()}</p> </> 
    
    
     ) 

    }

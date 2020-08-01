import React from 'react';
import  './Modal.css';
import User from '../../../views/UserPage/UserPage';



const modal=  props =>{
    const cssClasses = [
        "Modal",
        "ModalOpen"
      ];



        return (


                <div className={cssClasses.join(' ')}>
        <User farmerId={props.match.params.id}/>

                </div>
        );


}

export default modal;

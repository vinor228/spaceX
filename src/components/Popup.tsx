import React, {useEffect, useRef} from "react";
import {CloseButton, DetailImage, DetailInfo, DetailText, PopupBody, PopupContainer} from "./GridStyle";

type PopupProps = {
    open: boolean
    modalData: Record<string, object| string | number > | undefined
    closePopup: (arg: boolean) =>  void
}

type Links = { flickr: { original: string[]} }

 const Popup = ({ modalData, closePopup, open}: PopupProps) => {
     const modelRef = useRef(null)

     useEffect(()=> {
         const clickOutsideListener = (e: any) =>{
             if (e.target === modelRef.current){
                 closePopup(false)
             }
         }
         window.addEventListener('click',clickOutsideListener)
         return () => {
             window.removeEventListener('click',clickOutsideListener)
         }
     })

    return (
        <PopupContainer ref={modelRef} open={open} >
            <PopupBody open={open}>
                <DetailImage
                    src={modalData && (modalData.links as Links).flickr.original[0]}
                    loading='lazy'
                />
                {modalData &&
                    <div>
                        <DetailText>Details</DetailText>
                        <DetailInfo>{typeof modalData.details !== "object" && modalData.details}</DetailInfo>
                        <DetailInfo>
                            <>Name: {modalData.name}</>
                        </DetailInfo>
                        <DetailInfo>
                            <>Date:{modalData.date}</>
                        </DetailInfo>
                    </div>
                }

                <CloseButton onClick={() => closePopup(false)}>X</CloseButton>
            </PopupBody>
        </PopupContainer>
    );
};

 export default Popup
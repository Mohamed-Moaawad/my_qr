import React, { useRef } from 'react'
import './QR.css'
import {saveAs} from 'file-saver'

const QR = () => {
    const imgQrRef = useRef()
    const inputQrRef = useRef()
    const downloadImgQr = useRef()

    const createQR = ()=>{
        if(inputQrRef.current.value != ""){
            imgQrRef.current.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + inputQrRef.current.value
        
            downloadImgQr.current.style.pointerEvents = 'all'
        }else{
            inputQrRef.current.classList.add('error')
            setTimeout(()=>{
                inputQrRef.current.classList.remove('error')
            },2000)

            console.log(imgQrRef.current.src);
        }
    }
    const downloadImage = ()=>{
            saveAs(imgQrRef.current.src , 'QR Code.png')
    }


    return (
        <>
            <section>
                <div className="container">
                    <p>Enter your text or URL</p>
                    <input type="text" placeholder='Text or URL' ref={inputQrRef}/>
                    <div className="qrBox">
                        <img id='image' src="" alt="" ref={imgQrRef}/>

                    </div>
                    <button onClick={createQR} >generate QR code</button>
                    <div className="download">
                        <a onClick={downloadImage} ref={downloadImgQr} > <i class="fa-solid fa-download"></i></a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default QR

import React from 'react'
import Productcard from '../Component/Productcard'

export default function Product() {
    return (
        <div>
                    <div className="product">
        <div className="container text-center products">
        <div className="row">
            <div className="col-4">
            <h2>PRODUCTS</h2>
            </div>
            <div className="col-8">
            <p>Find below a list of IoT products that are based on communication protocols like WiFi, GSM and& BLE. 
                These are embedded with a Blockchain identity that interacts with the BIoT's smart solutions so as to 
                execute the smart-contracts.</p>  
            </div>
        </div>
        <div>
            
              
            <Productcard />
        </div>
        </div>
        </div>
        </div>
    )
}

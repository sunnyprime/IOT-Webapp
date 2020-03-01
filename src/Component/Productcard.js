import React from 'react'

export default function Productcard() {
    return (
        <div className="card">
            <div className="header">
            <h1>IoT Shield</h1>
            <h5>A sensor and actuator platform</h5>
           </div>
            <img className="img" src="https://pbs.twimg.com/profile_images/908794684616491008/O_GcXN8e_400x400.jpg"  height="200px" width="200px"/>
            <p>This is a device that can singularly interface multiple sensors simultaneously and transmit the data to the gateway. Data from all the sensors is encrypted with AES 256 bit cryptographic technique and is sent to the gateway via the LoRa network.</p>

        </div>
    )
}

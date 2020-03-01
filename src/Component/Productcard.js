import React from 'react'

export default function Productcard() {
    const product=[{name:"IOT Shield",about:"A sensor and actuator platform",content:"This is a device that can singularly interface multiple sensors simultaneously and transmit the data to the gateway. Data from all the sensors is encrypted with AES 256 bit cryptographic technique and is sent to the gateway via the LoRa network.",img:"https://pbs.twimg.com/profile_images/908794684616491008/O_GcXN8e_400x400.jpg"},
    {name:"IOT Shield",about:"A sensor and actuator platform",content:"This is a device that can singularly interface multiple sensors simultaneously and transmit the data to the gateway. Data from all the sensors is encrypted with AES 256 bit cryptographic technique and is sent to the gateway via the LoRa network.",img:"https://pbs.twimg.com/profile_images/908794684616491008/O_GcXN8e_400x400.jpg"},
    {name:"IOT Shield",about:"A sensor and actuator platform",content:"This is a device that can singularly interface multiple sensors simultaneously and transmit the data to the gateway. Data from all the sensors is encrypted with AES 256 bit cryptographic technique and is sent to the gateway via the LoRa network.",img:"https://pbs.twimg.com/profile_images/908794684616491008/O_GcXN8e_400x400.jpg"},]
    return (
        <>
        <div class="card-group mb-5">
        {product.map((item)=>{
            return(<div className="card card-hover">
            <div className="header">
            <h1>{item.name}</h1>
            <h5>{item.about}</h5>
           </div>
            <img className="img" src={item.img}  height="200px" width="200px"/>
            <p className="overflow">{item.content}</p>

        </div>)
        })}
  
        </div>
        
        </>
    )
}

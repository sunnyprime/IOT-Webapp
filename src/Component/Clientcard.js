import React from 'react'
const Clientsurl= [{url:"https://github.com/sunnyprime/IOT-Webapp/blob/master/src/Images/Client/1.jpeg?raw=true"},
{url:"https://github.com/sunnyprime/IOT-Webapp/blob/master/src/Images/Client/2.jpeg?raw=true"},
{url:"https://github.com/sunnyprime/IOT-Webapp/blob/master/src/Images/Client/3.jpeg?raw=true"},
{url:"https://github.com/sunnyprime/IOT-Webapp/blob/master/src/Images/Client/4.jpeg?raw=true"},
{url:"https://github.com/sunnyprime/IOT-Webapp/blob/master/src/Images/Client/5.jpeg?raw=true"}

    
]


export default function Clientcard() {
    return (
        <div>
            
            {Clientsurl.map((url,index)=>{
                return(<><img className="client_img" src={url.url} alt="url"></img></>)
            })}
        </div>
    )
}

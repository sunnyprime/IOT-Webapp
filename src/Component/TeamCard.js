import React from 'react'

export default function TeamCard() {
  const team = [
    {name:"Ashish",
    img:"https://oc.ocstatic.com/images/favicon/android-chrome-512x512.png",
role:"Backen developer"},
{name:"Ashish",
img:"https://oc.ocstatic.com/images/favicon/android-chrome-512x512.png",
role:"Backen developer"},
{name:"Ashish",
img:"https://oc.ocstatic.com/images/favicon/android-chrome-512x512.png",
role:"Backen developer"}
]
    return (
        <div>
          <div class="card-deck cards">
           { team.map((item)=>{
              return(<div class="card single-card mx-5">
              <img src={item.img} class="card-img-top" alt="..." />
              <div class="card-body">
                <h3 class="card-title">{item.name}</h3>
                <p class="card-text">{item.role}</p>
                
              </div>
              </div>)
            })}
  
  
 
  </div>
</div>
       
    )
}

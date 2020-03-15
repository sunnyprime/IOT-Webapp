import React from 'react'

export default function TeamCard() {
  const team = [
    {name:"Ashish",
    img:"https://avatars2.githubusercontent.com/u/32286384?s=460&u=3f70362c62c167a15aa1eb8c359f5be0bda4ade1&v=4",
role:"Backend developer with IoT"},
{name:"Vivek Kumar",
img:"https://lh3.googleusercontent.com/a-/AOh14Gj6obKto__B084U4gdHoVnadIPSSgB2npuZYJZn",
role:"Frontend developer with IoT"},
{name:"Suyesh",
img:"https://oc.ocstatic.com/images/favicon/android-chrome-512x512.png",
role:"Dotnet developer"}
]
    return (
        <div>
          <div class="card-deck cards">
           { team.map((item,index)=>{
              return(<div key={index} class="card single-card mx-5">
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

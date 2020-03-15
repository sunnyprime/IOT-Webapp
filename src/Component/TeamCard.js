import React from 'react'

export default function TeamCard() {
  const team = [
    {name:"Ashish",
    img:"https://avatars2.githubusercontent.com/u/32286384?s=460&u=3f70362c62c167a15aa1eb8c359f5be0bda4ade1&v=4",
role:"Founder and CEO"},
{name:"Vivek Kumar",
img:"https://lh3.googleusercontent.com/a-/AOh14Gj6obKto__B084U4gdHoVnadIPSSgB2npuZYJZn",
role:"Co-Founder and Chief Technology Officer"},

{name:"Suyash Kumar",
img:"https://github.com/sunnyprime/IOT-Webapp/blob/master/src/Images/Suvesh.jpeg?raw=true",
role:"Dotnet and FullStack Developer"},
{name:"Dibyanshu Kumar",
img:"https://github.com/sunnyprime/IOT-Webapp/blob/master/src/Images/Dibyanshu.jpeg?raw=true",
role:"Head of Embedded"},
{name:"Rajkumar Prajapati",
img:"https://github.com/sunnyprime/IOT-Webapp/blob/master/src/Images/rajkumar.jpeg?raw=true",
role:"Head of Web Development"},
{name:"Supriya Choudhary",
img:"https://github.com/sunnyprime/IOT-Webapp/blob/master/src/Images/Supriya.jpeg?raw=true",
role:"Software Consultant Java"},
{name:"Shreejith Kumar",
img:"https://oc.ocstatic.com/images/favicon/android-chrome-512x512.png",
role:"Head of Hardware Engineering"},
{name:"Tarun Thotakura",
img:"https://github.com/sunnyprime/IOT-Webapp/blob/master/src/Images/Tarun.jpeg?raw=true",
role:"Head of Hardware Engineering with Python and Machine Learning"},
{name:"Pratyush Prakash",
img:"https://github.com/sunnyprime/IOT-Webapp/blob/master/src/Images/Pratyush_Prakash.jpeg?raw=true",
role:"Digital Marketing Analyst"},
{name:"Shreejith",
img:"https://github.com/sunnyprime/IOT-Webapp/blob/master/src/Images/Shrejit.jpeg?raw=true",
role:"Head of Embedded Engineering ( Hardware and Software)"},
{name:"Papun Kumar",
img:"https://github.com/sunnyprime/IOT-Webapp/blob/master/src/Images/Papun.jpeg?raw=true",
role:"Head Automation Tester "}


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

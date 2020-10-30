import React from 'react';
import ProjectsData from './ProjectsData';

var Webdata=[
    {
        name: 'Creative-Agency',
        link:"https://vigilant-swirles-da17f0.netlify.app/",
        details:"1. A full-stack website of a dummy agency that provides creative services.2. It has both client and admin access. 3. Client can order. 4. client can give review. 5. client can see the order list whereas admin can create a new service review order 6. can make a new admin. 7. Deployed server-side in Heroku and client-side in Netlify.",
        tecnology:"React.js,BootStrap,JavaScript,Es6,Node.js, Express.js,MongoDB, Firebase Authentication",
        img:"https://i.ibb.co/Rpmf3Pn/Creative-Agency.png"
         
    },
    {
        name:"Travel-Guro",
        link:"https://quirky-jang-5a5390.netlify.app",
        details:" User can Log in by Gmail, email and password, facebook. user can choice his destination by users choice. The user will be able to know the details about the place he like. User can set the date he wants to go ",
        tecnology:"React.js,BootStrap,JavaScript,Es6,Node.js, Firebase Authentication",
        img:"https://i.ibb.co/Gv99X5j/Home.png"
    },
    {  name:"Social-Buddy",
       link:"https://quizzical-hermann-6c855c.netlify.app/",
       details:" people can see some friends picture with post. people can see who is commenting on those pictures",
       tecnology:"React.js,JavaScript,Es6,Node.js,Express.js.",
       img:"https://i.ibb.co/DrrHL0H/social-budd.jpg"
       


    },
    {
         name:"Volunteer Network",
         link:"https://zealous-hugle-2a50b5.netlify.app/",
         details:" It is a dummy website where people can select volunteer service that they want to provide on a particular date. There is a dashboard where users can see their selected services. Users can even cancel any event if they change their mind.Deployed server-side in Heroku and client-side in Netlify",
         tecnology:"React.js,BootStrap,JavaScript,Es6,Node.js,Express.js, MongoDB,Firebase Authentication",
         img:"https://i.ibb.co/TbpnbhZ/brand-Logo.png"
    

          
},
{
    name:"Generate-pin",
    link:"https://monnab4u.github.io/pin-matcher-master1/",
    details:" A vanilla javascript project . Users can match his pin number through this. If any user makes a mistake he/she will lose a chance",
    tecnology:"html4, css3, bootstrap.javaScrips",
    img:"https://i.ibb.co/Npnh5K5/Screenshot-15.png"
},

]

const Projects = () => {
    
    return (
        <section className="row banner">
        {
            Webdata.map(data => <ProjectsData data={data} key={data.name}></ProjectsData>)
        }
        </section>
    );
};

export default Projects;
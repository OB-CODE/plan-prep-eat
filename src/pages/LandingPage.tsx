import React from "react";
import arcIMG from '../Components/Arc.png'
import Image from "next/image";


const LandingPage = () => {
  return (
    <div>
      <h1 className="text-center text-5xl font-extrabold tracking-tight dark:text-white sm:text-[5rem]">
        Plan <span className="text-[hsl(280,100%,70%)]">PREP</span> Eat
      </h1>
      <div className="flex flex-col w-9/12 mx-auto pt-4 "><div>      App Brief: Develop a Next.JS application that communicates with internal and external API's</div>
<div>      Design: React Front End with Next.JS routing. Python and C# back ends. AWS RDS and tPRC API layer. 
</div>
<div>      Hosting: AWS - EC2 and Lambda services. A microservice approach to hosting. 
</div>
<div>      CI/CD: GitHub Actions. 
</div>
<div>      Testing: Jest, scripts ran through CI.
</div>
<div></div>
<div>      Starting Architeture plan - 22nd Aug 2023:
</div>
      <Image 
                    src={arcIMG}
                    width={900}
                    height={900}
                    alt="Flow chart"/></div>
    <div>Guide for CI/CD: https://reflectoring.io/tutorial-cicd-github-actions-pm2-nodejs-aws-ec2/</div>      
    </div>

  );
};

export default LandingPage;

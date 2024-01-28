/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rayen Michael",
  title: "Hey There!, I'm Rayen",
  subTitle: emoji(
    "A Seasoned 13 Year Old Software Developer 🚀 With A Track Record Spanning Since 2018, I Possess A Wealth Of Experience In Web Development and mobile applications."
  ), // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/RayenMichael",
  linkedin: "https://www.linkedin.com/in/rayen-michael-504889218/",
  gmail: "Rayenmike2010@gmail.com",
  facebook: "https://www.facebook.com/rayen.michael.10",
  stackoverflow: "https://stackoverflow.com/users/14309397/rayen-michael?tab=profile",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My Skills 💪",
  subTitle: "A SMALL MONSTER WHO WANTS DISCOVER EVERYTHING ABOUT DEVELOPING APPS",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase, REST API."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "Css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Command Prompt",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
        {
      skillName: "Kotlin",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
	{
      skillName: "Microsoft 365",
      fontAwesomeClassname: "fab fa-microsoft"
    },
	{
      skillName: "Arduino",
      fontAwesomeClassname: "fas fa-code"
    },
	{
      skillName: "Flutter",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Dart",
      fontAwesomeClassname: "fas fa-code"
    },
	{
      skillName: "Kali Linux",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "DiscordJS",
      fontAwesomeClassname: "fab fa-discord"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Android-Java",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Bash",
      fontAwesomeClassname: "fas fa-terminal"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Android Development", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "API Developing",
      progressPercentage: "50%"
    },
    {
      Stack: "Web Development",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  title: "My Story",
  subtitle:"My Name is Ryan, I am 12 Years Old, I am an young developer That made 6 apps ", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/backgammon.webp"),
      projectName: "backgammon (tawla)",
      projectDesc: "Backgammon is a backgammon game you can play it with your friends and enjoy",
      footerLink: [
        {
          name: "Download Game",
          url: "https://play.google.com/store/apps/details?id=com.rayen.tawla"
        }
      ]
    },
    
    {
      image: require("./assets/images/BasketBalldunks.webp"),
      projectName: "BasketBall Dunks",
      projectDesc: "BasketBall Dunks is an game that you shoot some dunks and get high scores and challenge your friends.",
      footerLink: [
        {
          name: "Download Game",
          url: "https://play.google.com/store/apps/details?id=com.rayen.BasketBallDunks"
        }
      ]
    },
    
    {
      image: require("./assets/images/Bottleflip.webp"),
      projectName: "Bottle Flip",
      projectDesc: "bottle flip is a game that u flip the bottle to get coins to buy more stable bottles.",
      footerLink: [
        {
          name: "Download Game",
          url: "https://play.google.com/store/apps/details?id=com.rayen.bottleflip"
        }
      ]
    },
    {
      image: require("./assets/images/checkers.webp"),
      projectName: "Checkers",
      projectDesc: "Checkers is a checkers game that you can play it with your friends in peace.",
      footerLink: [
        {
          name: "Download Game",
          url: "https://play.google.com/store/apps/details?id=com.rayen.checkers"
        }
      ]
    },
    {
      image: require("./assets/images/birdshooting.webp"),
      projectName: "Birds Shooting",
      projectDesc: "Birds shooting, the first game i made in the whole programming history the best game you will play and upcoming update with levels and coins",
      footerLink: [
        {
          name: "Download Game",
          url: "https://play.google.com/store/apps/details?id=com.Rayen.Birdsshooting"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Certifications that I have done !",

  achievementsCards: [
    {
      title: "Android Developer Certification",
      subtitle:
        "I hold a certification in Android Development Essentials and have a strong command over Android Development in Kotlin and Java. In addition, I am authorized by both Adobe Training Centre and AutoDesk Training Center, and have also been certified by the Russian Culture Center. My diverse skill set and extensive training enable me to deliver innovative and high-quality solutions for mobile development.",
      image: require("./assets/images/codeInLogo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/13Et50uVCsWL-LriPIfN-Tng8hOPGFB92/view"
        },
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "My Story",
  subtitle:
    "",

  blogs: [
    {
      title: "My Story",
      description:
        "My Full story when i was 8 years old i was making some websites for me but then my dad was seeing my websites and i told him i wanna be a developer he saied ok we will see about that soon, then my dad found a course in the Russian Cultural Center took a course in there about how to make android apps then after finishing the course i tried to make an app but it was a little bit hard so i used to learn myself how to make apps i watched some tutorials and used open source things then in made my first game named birds shooting you will find it in my works section then i made every game you will find there and then i tried to make bots but it was so hard so i learned it myself without any video then made websites for companies and for myself."
    },
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "My Story",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+201204543684",
  email_address: "Rayen@rayenmichael.xyz"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};

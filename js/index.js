
function setup() {
    createCanvas(window.innerWidth , window.innerHeight);
    background('#12181b');
  }
  
  function draw() {
    noStroke();
    fill(220,220,0, 50);
    circle(mouseX,mouseY,20,20);
  }

  const HomeIcon = document.querySelector('.home-icon');
  const SkillIcon = document.querySelector('.skill-icon');
  const AboutIcon = document.querySelector('.about-icon');
  const ProjectIcon = document.querySelector('.project-icon');
  const SocialIcon = document.querySelector('.social-icon');
  const ContactIcon = document.querySelector('.contact-icon');
  const Skill = document.querySelector('.skill');
  const About = document.querySelector('.about');
  const Project = document.querySelector('.project');
  const Social = document.querySelector('.social');
  const Contact = document.querySelector('.contact');
  const Home = document.querySelector('.home');

  const GithubIcon = document.querySelector('.github-icon');
  const DevIcon = document.querySelector('.dev-icon');

  Skill.classList.add('hide-class')
  About.classList.add('hide-class')
  Project.classList.add('hide-class')
  Social.classList.add('hide-class')
  Contact.classList.add('hide-class')
  Home.classList.remove('hide-class')




  HomeIcon.addEventListener('click', () => {
    Skill.classList.add('hide-class')
    About.classList.add('hide-class')
    Project.classList.add('hide-class')
    Social.classList.add('hide-class')
    Contact.classList.add('hide-class')
    Home.classList.remove('hide-class')
  })
  SkillIcon.addEventListener('click', () => {
      Home.classList.add('hide-class')
      About.classList.add('hide-class')
      Project.classList.add('hide-class')
      Social.classList.add('hide-class')
      Contact.classList.add('hide-class')
      Skill.classList.remove('hide-class')
  })
  AboutIcon.addEventListener('click', () => {
    Home.classList.add('hide-class')
    Skill.classList.add('hide-class')
    Project.classList.add('hide-class')
    Social.classList.add('hide-class')
    Contact.classList.add('hide-class')
    About.classList.remove('hide-class')
  })
  ProjectIcon.addEventListener('click', () => {
    Home.classList.add('hide-class')
    About.classList.add('hide-class')
    Skill.classList.add('hide-class')
    Social.classList.add('hide-class')
    Contact.classList.add('hide-class')
    Project.classList.remove('hide-class')
  })
  SocialIcon.addEventListener('click', () => {
    Home.classList.add('hide-class')
    About.classList.add('hide-class')
    Project.classList.add('hide-class')
    Skill.classList.add('hide-class')
    Contact.classList.add('hide-class')
    Social.classList.remove('hide-class')
  })
  ContactIcon.addEventListener('click', () => {
    Home.classList.add('hide-class')
    About.classList.add('hide-class')
    Project.classList.add('hide-class')
    Social.classList.add('hide-class')
    Skill.classList.add('hide-class')
    Contact.classList.remove('hide-class')
  })

  GithubIcon.addEventListener('click', () => window.location.href = "https://github.com/vimalverma558");
  DevIcon.addEventListener('click', () => window.location.href = "https://dev.to/vimal")











//   Responsive Website Forwording
  function myFunction(x) {
    if (x.matches) { // If media query matches
      window.location.href = "https://v2.vimal.letskhabar.com"
    } else {
      
    }
  }
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
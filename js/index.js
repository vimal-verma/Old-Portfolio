
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
  const home = document.querySelector('.home');



  HomeIcon.addEventListener('click', () => {
    skill.classList.add('hide-class')
    About.classList.add('hide-class')
    Project.classList.add('hide-class')
    Social.classList.add('hide-class')
    Contact.classList.add('hide-class')
    home.classList.remove('hide-class')
  })
  SkillIcon.addEventListener('click', () => {
      home.classList.add('hide-class')
      About.classList.add('hide-class')
      Project.classList.add('hide-class')
      Social.classList.add('hide-class')
      Contact.classList.add('hide-class')
      Skill.classList.remove('hide-class')
  })
  AboutIcon.addEventListener('click', () => {
    home.classList.add('hide-class')
    Skill.classList.add('hide-class')
    Project.classList.add('hide-class')
    Social.classList.add('hide-class')
    Contact.classList.add('hide-class')
    About.classList.remove('hide-class')
  })
  ProjectIcon.addEventListener('click', () => {
    home.classList.add('hide-class')
    About.classList.add('hide-class')
    Skill.classList.add('hide-class')
    Social.classList.add('hide-class')
    Contact.classList.add('hide-class')
    Project.classList.remove('hide-class')
  })
  SocialIcon.addEventListener('click', () => {
    home.classList.add('hide-class')
    About.classList.add('hide-class')
    Project.classList.add('hide-class')
    Skill.classList.add('hide-class')
    Contact.classList.add('hide-class')
    Social.classList.remove('hide-class')
  })
  ContactIcon.addEventListener('click', () => {
    home.classList.add('hide-class')
    About.classList.add('hide-class')
    Project.classList.add('hide-class')
    Social.classList.add('hide-class')
    Skill.classList.add('hide-class')
    Contact.classList.remove('hide-class')
  })

function setup() {
    createCanvas(window.innerWidth , window.innerHeight);
    background('#c800dc');
  }
  
  function draw() {
    noStroke();
    fill(220,220,0, 50);
    circle(mouseX,mouseY,20,20);
  }

// Social Media
document.querySelector('.twitter').addEventListener('click', () => window.location.href = "https://twitter.com/vimalverma558")
document.querySelector('.facebook').addEventListener('click', () => window.location.href = "https://facebook.com/vimalverma558")
document.querySelector('.github').addEventListener('click', () => window.location.href = "https://github.com/vimalverma558")
document.querySelector('.instagram').addEventListener('click', () => window.location.href = "https://instagram.com/vimalverma558")
document.querySelector('.dev').addEventListener('click', () => window.location.href = "https://dev.to/vimal")
document.querySelector('.linkedin').addEventListener('click', () => window.location.href = "https://www.linkedin.com/in/vimalverma558/")
document.querySelector('.dribbble').addEventListener('click', () => window.location.href = "https://dribbble.com/vimalverma")
document.querySelector('.mail').addEventListener('click', () => window.location.href = 'mailto:kumarvimal558@gmail.com')

//  form
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
e.preventDefault();
const name= form.name.value;
console.log(name)
const email= form.email.value;
console.log(email)
const message= form.message.value;
console.log(message);
window.location.href = 'mailto:kumarvimal558@gmail.com?subject=Hi, I am -' + name + ' (' + email + ')' + '&body=' + message +'&cc=vimal@letskhabar.com&bcc='+email;
})





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
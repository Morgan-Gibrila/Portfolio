var titles={
    Project1: 'Bespoke',
    Project2: 'Programing boothcamp',
    Project3: 'Project research and design',
    Project4: 'Research design 1',
    Project5: 'Research design 2',
    Project6: 'Online Portofolio ',
    Project7: 'Building Engaging Prototype',
    Project8: 'Design for emotion',
};
var Descriptions={
    Project1: 'Bespoke is a research and prototyping project. During this class we learned how to conduct interview, gather information about a user and then turn it into a prototype. For this specific class we were put in teams of two and each member of the team was assign a user. The user was another student from different class and we had to gather information about their personality and what type of gifts they like to receive. The goal of this project was to create a digital gift giving experience for our user. At the end of the gathering phase the teams had to choose one of the users and start designing the prototype.',
    Project2: 'During the programming boothcamp we learned how to use java. It was a 5 day boothcamp where each day we were set challenges to complete using java and on the final day we had to combine all the assignments we made in the previous days into one and then we had an expo to show our work to other. ',
    Project3: 'This project is university project where I will do research to solve the issues given by a client. The client is StudyPortal, they help millions of students to find the right university for them. They do so by working hand in hand with over 3,750 different universities, business schools, law schools, and pathway providers who want to diversify their campus and find the right students from across the globe. Their aim is: “matching the right students with the right universities globally.” The design challenge is: Increasing the traffic, generating more leads, and adding functionality to improve the user experience on mastersportal.com. I am currently still working on this project as the course it not yet finished.',
    Project4: 'In Research design part 1 we learned how to conduct interviews. for this project we had to choose a subculture and gather information about them. I had chosen musicians and observed and interview a couple participants. once I had the information needed, i created an affinity diagram with the insights gathered from the observation and interview and clustered the insights into 3 main user insights; once all that was done it was time for the design direction. The design direction was to make an app that would help the people from said subculture to solve an issues they had. For my design direction was to design an app that would allow musicians to gather more following and help them make music their career. ',
    Project5: 'In research design 2  I had to analyse Rijksstudio and its usability in groups of 4. In this research we started by creating a sitemap to layout the different sections in the website, from there we thought of things we would like to test on the website to see the usability of Rijksstudio. We came up with research questions that we helped use with our research and then made an interview separated into usability factors. The interview was then integrated into a protocol. Once the protocol was finished we did a pilot run with our classmates to get feedback on it, and we changed it according to the feedback. We then proceeded to each find a user who is not part of the course to do our protocol with and test the websites. Once we gathered the data from our users we created a shared document with our findings. To gather the data we screen recorded the computer, and the voice of our user as we did the interview and created transcripts. With the transcript and video we analysed it after the user test and put our findings on the shared document. With our findings we created an overview of actions that each user did to see if there were any connections between our users. We proceeded by creating a table of usability problems to see how many users had the same issue, this gave us an overview of the more relevant problems Rijksstudio has. We then analysed our findings and found that we wrote recommendations for Rijksstudio. ',
    Project6: 'This is an on going project which is actually this website. I am using the skills in: HTML, CSS and JS I have learned from my programming classes. this website will be updated every so often once a project is finished as to build strong online portfolio.',
    Project7: 'In building engaging prototype we learn to create prototypes from a set of instruction and learn on how to test them and use the feedback to improve it. During this project I had to create 5 prototypes (paper prototype, wireframe, hi-fi prototype, wizard of oz) and use different testing techniques (testing and AB testing). ',
    Project8: 'For design for emotion i was put into a group, with this group we had to come up with an event that we all had in common and determine the emotions that are linked to this event; we found that sadness and empathy was the two emotions we all had in common from the events. We gathered insights and design principles by: (a dramatic arc, emotional explorations and iterations). At the end of the project we had to make a video of a product that used the emotions to benefit the user.',
}
var scrollTo= document.getElementById('BigPanneltext');

var r = 49;
var g = 167;
var b = 250;

function Project1(){
    document.getElementById('BigPanneltext').style.backgroundColor='rgb(49, 167, 250)';
    document.getElementById('BigPanneltext').style.borderRadius='3px 3px 10px 10px';

    document.getElementById('BigPanneltitle').innerHTML = titles.Project1;
    document.getElementById('BigPannelDescription').innerHTML = Descriptions.Project1;
    scrollTo.scrollIntoView();
}
function Project2(){
    document.getElementById('BigPanneltext').style.backgroundColor='rgb(49, 167, 250)';
    document.getElementById('BigPanneltext').style.borderRadius='3px 3px 3px 10px';

    document.getElementById('BigPanneltitle').innerHTML = titles.Project2;
    document.getElementById('BigPannelDescription').innerHTML = Descriptions.Project2;
    scrollTo.scrollIntoView();
}
function Project3(){
    document.getElementById('BigPanneltext').style.backgroundColor='rgb(49, 167, 250)';
    document.getElementById('BigPanneltext').style.borderRadius='3px 3px 3px 10px';

    document.getElementById('BigPanneltitle').innerHTML = titles.Project3;
    document.getElementById('BigPannelDescription').innerHTML = Descriptions.Project3;
    scrollTo.scrollIntoView();
}
function Project4(){
    document.getElementById('BigPanneltext').style.backgroundColor='rgb(49, 167, 250)';
    document.getElementById('BigPanneltext').style.borderRadius='3px 3px 3px 10px';

    document.getElementById('BigPanneltitle').innerHTML = titles.Project4;
    document.getElementById('BigPannelDescription').innerHTML = Descriptions.Project4;
    scrollTo.scrollIntoView();
}
function Project5(){
    document.getElementById('BigPanneltext').style.backgroundColor='rgb(49, 167, 250)';
    document.getElementById('BigPanneltext').style.borderRadius='3px 3px 3px 10px';

    document.getElementById('BigPanneltitle').innerHTML = titles.Project5;
    document.getElementById('BigPannelDescription').innerHTML = Descriptions.Project5;
    scrollTo.scrollIntoView();
}
function Project6(){
    document.getElementById('BigPanneltext').style.backgroundColor='rgb(49, 167, 250)';
    document.getElementById('BigPanneltext').style.borderRadius='3px 3px 3px 10px';

    document.getElementById('BigPanneltitle').innerHTML = titles.Project6;
    document.getElementById('BigPannelDescription').innerHTML = Descriptions.Project6;
    scrollTo.scrollIntoView();
}
function Project7(){
    document.getElementById('BigPanneltext').style.backgroundColor='rgb(49, 167, 250)';
    document.getElementById('BigPanneltext').style.borderRadius='3px 3px 3px 10px';

    document.getElementById('BigPanneltitle').innerHTML = titles.Project7;
    document.getElementById('BigPannelDescription').innerHTML = Descriptions.Project7;
    scrollTo.scrollIntoView();
}
function Project8(){
    document.getElementById('BigPanneltext').style.backgroundColor='rgb(49, 167, 250)';
    document.getElementById('BigPanneltext').style.borderRadius='3px 3px 3px 10px';

    document.getElementById('BigPanneltitle').innerHTML = titles.Project8;
    document.getElementById('BigPannelDescription').innerHTML = Descriptions.Project8;
    scrollTo.scrollIntoView(smooth);
}
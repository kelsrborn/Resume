var bio = {
  name: "Kelsey Borneman",
  role: "Analyst",
  contacts: {
    mobile: "404-457-9277",
    email: "kelsrborn@gmail.com",
    github: "kelsrborn",
    location: "Atlanta, Georgia"
  },
  welcomeMessage:
    "Motivated analyst with the technical expertise and skills needed to translate project requirements and objectives into scalable, successful solutions.",
  skills: [
    "Data Analysis",
    "Project Management",
    "Process Improvement",
    "Time Management",
    "Client Relations"
  ],
  biopic:
    "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAfZAAAAJGViZWU1ODEwLTVhZTUtNGJiNy04YWY2LTI4NzRkN2NkODM5OQ.jpg"
};

var work = {
  jobs: [
    {
      employer: "Optomi, LLC",
      title: "Sr. Billing Analyst",
      dates: "September 2015 - Present",
      description:
        "Responsible for full cycle accounts receivable process for over 120 clients in addition to designing and implementing billing and onboarding CRM system.",
      location: "Roswell, Georgia"
    },
    {
      employer: "The Weather Channel",
      title: "Process Improvement Analyst",
      dates: "May 2015 - September 2015",
      description:
        "Managed project implementations and business process improvements for 3 different departments.",
      location: "Atlanta, Georgia"
    },
    {
      employer: "Sapient",
      title: "Sr. Associate Operations",
      dates: "August 2013 - May 2015",
      description:
        "Developed and maintained new deliverables such as databases, buget tracking systems, and new data gathering tools while encorporating process improvements based on business needs.",
      location: "Atlanta, Georgia"
    }
  ]
};

var projects = {
  projects: [
    {
      title: "Movie Website",
      dates: "2017",
      description:
        "Coded my own movie website using Python during my Udacity coursework.",
      images: ["images/movie_site.jpeg"]
    },
    {
      title: "Create Your Own Website",
      dates: "2017",
      description:
        "Coded my own website made for my dog using HTML and CSS during my Udadity coursework.",
      images: ["images/my_dog_lynus.jpeg"]
    },
    {
      title: "Code Your Own Quiz",
      dates: "2017",
      description:
        "Coded my own madlibs quiz using Python during my Udacity coursework.",
      images: ["images/madlib.jpeg"]
    }
  ]
};

var education = {
  schools: [
    {
      name: "Georgia Southern University",
      location: "Statesboro, Georgia",
      degree: "BS",
      majors: ["Nutrition"],
      year: "2013"
    }
  ],

  onlineCourses: [
    {
      name: "Udacity",
      location: "Alpharetta, Georgia",
      degree: "Nanodegree",
      majors: ["Programming"],
      year: "2017"
    }
  ]
};

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

  $("#header").prepend(formattedRole, formattedName);
  $("#header").append(formattedBioPic, formattedWelcomeMsg, HTMLskillsStart);
  $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub);

  bio.skills.forEach(function(skills) {
    var formattedSkill = HTMLskills.replace("%data%", skills);
    $("#skills").append(formattedSkill);
  });
};

//Work functions
work.display = function() {
  $("#workExperience").append(HTMLworkStart);


  work.jobs.forEach(function(job) {

    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
    var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
    var formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle;

    $(".work-entry:last").append(
      formattedWorkEmployerTitle,
      formattedWorkLocation,
      formattedWorkDates,
      formattedWorkDescription
    );

  });
};


//Project Functions
projects.display = function() {

    projects.projects.forEach(function(project) {
      var formattedProjectStart = HTMLprojectStart.replace("%data%", project);
      var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
      var formattedProjectYear = HTMLprojectDates.replace("%data%", project.dates);
      var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);

      $("#projects").append(formattedProjectStart);
      $(".project-entry:last").append(
        formattedProjectTitle,
        formattedProjectYear,
        formattedProjectDescription
      );

        project.images.forEach(function(image) {
            var formattedProjectImage = HTMLprojectImage.replace("%data%", image);

            $(".project-entry:last").append(formattedProjectImage);
        });
    });
};


education.display = function() {

    education.schools.forEach(function(school) {
      var formattedschoolStart = HTMLprojectStart.replace("%data%", school);
      var formattedschoolName = HTMLschoolName.replace("%data%", school.name);
      var formattedschoolLocation = HTMLschoolLocation.replace("%data%", school.location);
      var formattedschoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
      var formattedschoolDates = HTMLschoolDates.replace("%data%", school.year);

      $("#education").append(HTMLschoolStart);

      $(".education-entry:last").append(formattedschoolName, formattedschoolDates, formattedschoolLocation);

      school.majors.forEach(function(major) {
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", school.majors);

        $(".education-entry:last").append(formattedschoolMajor);

      });

        $(".education-entry:last").append(formattedschoolDegree);
    });

    education.onlineCourses.forEach(function(onlinecourse) {
      var formattedschoolStart = HTMLprojectStart.replace("%data%", onlinecourse);
      var formattedschoolName = HTMLschoolName.replace("%data%", onlinecourse.name);
      var formattedschoolLocation = HTMLschoolLocation.replace("%data%", onlinecourse.location);
      var formattedschoolDegree = HTMLschoolDegree.replace("%data%", onlinecourse.degree);
      var formattedschoolDates = HTMLschoolDates.replace("%data%", onlinecourse.year);

      $("#education").append(HTMLschoolStart);

      $(".education-entry:last").append(formattedschoolName, formattedschoolDates, formattedschoolLocation);

      onlinecourse.majors.forEach(function(major) {
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", onlinecourse.majors);

        $(".education-entry:last").append(formattedschoolMajor);

      });

        $(".education-entry:last").append(formattedschoolDegree);
    });
};


bio.display();
work.display();
projects.display();
education.display();

//Google Maps
$("#mapDiv").append(googleMap);

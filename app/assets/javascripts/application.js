// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .


    let skills = document.querySelectorAll("skill")

      skills.forEach((skill) => {
        skill.addEventListener('mouseover' (event) => {
          event.currentTarget.classList.toggle('sub-text');
          console.log('sub-text');
        });
      });

      const event = new MouseEvent('mouseover', {
  'view': window,
  'bubbles': true,
  'cancelable': true
});

    // function mySkillFunction() {
    //   recruitment.addEventListener("mouseover", function(event) {
    //       event.classList.toggle("sub-text");
    //       });
    // };


export MouseEvent();

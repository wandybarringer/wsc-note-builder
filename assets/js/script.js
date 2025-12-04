var apptSelectEl = document.querySelector('#appointment');
var firstApptFormEl = document.querySelector('#first-appt-form');
var secondApptFormEl = document.querySelector('#second-appt-form');
var thirdApptFormEl = document.querySelector('#third-appt-form');
var postApptFormEl = document.querySelector('#post-appt-form');

// event listener for selected appointment that displays the correct form

// TODO: LEARN how to make this code block less WET (Object.values() method)
function handleApptSelection() {
  apptSelectEl.addEventListener('change', function (event) {
    var selectedValue = event.target.value;
    console.log(selectedValue);

    if (selectedValue === '1st Appointment') {
      firstApptFormEl.setAttribute('class', 'show-content');
      secondApptFormEl.setAttribute('class', 'hide-content');
      thirdApptFormEl.setAttribute('class', 'hide-content');
      postApptFormEl.setAttribute('class', 'hide-content');
    } else if (selectedValue === '2nd Appointment') {
      firstApptFormEl.setAttribute('class', 'hide-content');
      secondApptFormEl.setAttribute('class', 'show-content');
      thirdApptFormEl.setAttribute('class', 'hide-content');
      postApptFormEl.setAttribute('class', 'hide-content');
    } else if (selectedValue === '3rd Appointment') {
      firstApptFormEl.setAttribute('class', 'hide-content');
      secondApptFormEl.setAttribute('class', 'hide-content');
      thirdApptFormEl.setAttribute('class', 'show-content');
      postApptFormEl.setAttribute('class', 'hide-content');
    } else if (selectedValue === 'Post Appointment') {
      firstApptFormEl.setAttribute('class', 'hide-content');
      secondApptFormEl.setAttribute('class', 'hide-content');
      thirdApptFormEl.setAttribute('class', 'hide-content');
      postApptFormEl.setAttribute('class', 'show-content');
    }
  });
}

handleApptSelection();

// when user makes an input, html code is generated in the html-notes text area

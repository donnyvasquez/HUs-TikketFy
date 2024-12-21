// Handle enabling/disabling the ticket purchase limit field
window.toggleLimitField = function (checkbox) {
  const limitValueContainer = document.getElementById('limitValueContainer');
  const limitValue = document.getElementById('limitValue');

  if (checkbox.checked) {
      limitValueContainer.classList.remove('d-none');
  } else {
      limitValueContainer.classList.add('d-none');
      limitValue.value = ''; // Reset the input field
  }
};

// Handle enabling/disabling date controls
window.toggleDateControls = function (checkbox) {
  const dateControlOptions = document.getElementById('dateControlOptions');

  if (checkbox.checked) {
      dateControlOptions.classList.remove('d-none');
  } else {
      dateControlOptions.classList.add('d-none');
      resetDateControls();
  }
};

// Handle changes in the date type select field
window.handleDateTypeChange = function (select) {
  const eventDateFields = document.getElementById('eventDateFields');
  const dynamicDateButton = document.getElementById('dynamicDateButton');
  const dynamicDateSection = document.getElementById('dynamicDateSection');

  eventDateFields.classList.add('d-none');
  dynamicDateButton.classList.add('d-none');

  if (select.value === 'event') {
      eventDateFields.classList.remove('d-none');
      dynamicDateSection.classList.add('d-none');
  } else if (select.value === 'dynamic') {
      dynamicDateButton.classList.remove('d-none');
      dynamicDateSection.classList.remove('d-none');
  }
};

// Reset date controls
window.resetDateControls = function () {
  const eventDateFields = document.getElementById('eventDateFields');
  const dynamicDateButton = document.getElementById('dynamicDateButton');
  const dynamicDateSection = document.getElementById('dynamicDateSection');
  const dateType = document.getElementById('dateType');

  eventDateFields.classList.add('d-none');
  dynamicDateButton.classList.add('d-none');
  dynamicDateSection.classList.add('d-none');
  dateType.value = ''; // Reset the select field
};

// Handle enabling/disabling the date mode options
window.toggleDateMode = function (checkbox) {
  const dateModeOptions = document.getElementById('dateModeOptions');

  if (checkbox.checked) {
      dateModeOptions.classList.remove('d-none');
  } else {
      dateModeOptions.classList.add('d-none');
      resetDateMode();
  }
};

// Reset date mode options
window.resetDateMode = function () {
  const radios = document.getElementsByName('dateMode');
  radios.forEach(radio => radio.checked = false);
};

// Handle enabling/disabling the schedule hour grid
window.toggleScheduleHour = function (checkbox) {
  const scheduleHourGrid = document.getElementById('scheduleHourGrid');

  if (checkbox.checked) {
      scheduleHourGrid.classList.remove('d-none');
  } else {
      scheduleHourGrid.classList.add('d-none');
      resetScheduleHourGrid();
  }
};

// Reset schedule hour grid
window.resetScheduleHourGrid = function () {
  const checkboxes = document.querySelectorAll('#scheduleHourGrid input[type="checkbox"]');
  checkboxes.forEach(checkbox => checkbox.checked = false);
};

// Save dynamic date configuration
window.saveDynamicDateConfig = function () {
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;
  const dateMode = Array.from(document.getElementsByName('dateMode')).find(radio => radio.checked)?.value || 'None';
  const selectedHours = Array.from(document.querySelectorAll('#scheduleHourGrid input[type="checkbox"]:checked')).map(cb => cb.value).join(', ');

  if (!startDate || !endDate) {
      alert('Please select both start and end dates.');
      return;
  }

  const dynamicDateList = document.getElementById('dynamicDateList');

  // Create a new list item for the dynamic date configuration
  const listItem = document.createElement('li');
  listItem.className = 'list-group-item';
  listItem.textContent = `Start: ${startDate}, End: ${endDate}, Mode: ${dateMode}, Hours: ${selectedHours}`;

  dynamicDateList.appendChild(listItem);

  // Close the modal
  const dynamicDateModal = bootstrap.Modal.getInstance(document.getElementById('dynamicDateModal'));
  dynamicDateModal.hide();

  // Reset modal fields
  document.getElementById('startDate').value = '';
  document.getElementById('endDate').value = '';
  resetDateMode();
  resetScheduleHourGrid();
};

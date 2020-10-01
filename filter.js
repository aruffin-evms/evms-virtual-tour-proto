const getSelectedCheckboxValues = (name) => {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
      
    });
    return values;
}
//
document.body.addEventListener('click', function (e) {
  console.log(getSelectedCheckboxValues('colors-check'));
  });
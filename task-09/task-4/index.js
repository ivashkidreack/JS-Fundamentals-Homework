const checkboxes = $("input[type='checkbox']");
checkboxes.change(function() {
  const checkedCheckboxes = $("input[type='checkbox']:checked");
  if (checkedCheckboxes.length >= 3) {
    checkboxes.prop("disabled", true);
  }
});
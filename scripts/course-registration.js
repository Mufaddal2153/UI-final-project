// Get all the checkbox inputs within the table
let recap_checkboxes = recap_table.querySelectorAll("input[type='checkbox']");
let course_checkboxes = course_table.querySelectorAll("input[type='checkbox']");
function onRecapSubmit(params) {
  recap_checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      const tr = checkbox.closest("tr");
      course_table_body.innerHTML += tr.innerHTML;
      tr.remove();
    }
  });
  recap_checkboxes = recap_table.querySelectorAll("input[type='checkbox']");
  course_checkboxes = course_table.querySelectorAll("input[type='checkbox']");
}
function onCourseSubmit(params) {
  course_checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      const tr = checkbox.closest("tr");
      recap_table_body.innerHTML += tr.innerHTML;
      tr.remove();
    }
  });
  recap_checkboxes = recap_table.querySelectorAll("input[type='checkbox']");
  course_checkboxes = course_table.querySelectorAll("input[type='checkbox']");
}

course_btn.addEventListener("click", onCourseSubmit);
recap_btn.addEventListener("click", onRecapSubmit);

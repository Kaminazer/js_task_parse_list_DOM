'use strict';

const employers = [...document.body.querySelector('ul').children];

function sortList(list) {
  list.sort((a, b) => {
    return convertSalary(b.dataset.salary) - convertSalary(a.dataset.salary);
  });
}

function convertSalary(salary) {
  return parseFloat(salary.replace(/[$,]/g, ''));
}

function getEmployees(list) {
  return list.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
}

sortList(employers);

getEmployees(employers);

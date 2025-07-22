'use strict';

const employers = [...document.body.querySelector('ul').children];

function sortList(list) {
  list.sort((a, b) => {
    return convertSalary(b.dataset.salary) - convertSalary(a.dataset.salary);
  });

  const ul = document.querySelector('ul');

  ul.innerHTML = '';

  list.forEach((item) => {
    ul.insertAdjacentHTML(
      'beforeend',
      `<li data-position="${item.dataset.position}" data-salary="${item.dataset.salary}" data-age="${item.dataset.age}">${item.textContent.trim()}</li>`,
    );
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

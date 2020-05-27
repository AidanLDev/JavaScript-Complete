const task3Element = document.getElementById('task-3');

function noParams() {
  alert("Hey, I'm alerting, without taking any additional input as params");
}

function withParams(name) {
  alert(name);
}

function threeParams(str1, str2, str3) {
  alert(`${str1}, ${str2}, ${str3}`);
}

task3Element.addEventListener('click', noParams);
withParams('Aidan');
threeParams('Hi', 'world', "It's Aidan");

// Через метод fetch()

async function getSum() {
  let response = await fetch(url);

  if (response.ok) {
    let jsonData = await response.json();
    sumElem.textContent = `Общая сумма: ${jsonData.sum}`;
  } else {
    console.log(`HTTP error:${response.status}`);
  }
}

// Через xmlhttprequest

/*function getSum() {
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', './scripts/ajax.php', true);
  xhttp.responseType = 'json';
  xhttp.send();

  xhttp.onload = function() {
    if (xhttp.status != 200) {
      console.log(`error ${xhttp.status}: ${xhttp.statusText}`);
    } else {
      console.log(xhttp.response.sum);
      sumElem.textContent = `Общая сумма: ${xhttp.response.sum}`;
    }
  };

  xhttp.onerror = function() {
    console.log(xhttp.status);
  };  
}*/

const url = "./scripts/ajax.php";
button.addEventListener('click', () => {
  getSum();
});

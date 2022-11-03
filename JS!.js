// declare variables

function onSub(event) {
  //   prevent page from reloading
  if (document.querySelector(".rad:checked") != undefined) {
    var desc = document.querySelector("#text").value;
    var amt =
      Math.floor(parseFloat(document.querySelector("#amount").value) * 100) /
      100;
    // input value for radio button
    console.log(desc, amt, select);
    hist.push({
      description: desc,
      amount: amt,
      select: select,
    });
    if (select == "income") {
      inc += amt;
      bal += amt;
    }
    if (select == "expense") {
      exp += amt;
      bal -= amt;
    }
    var balContainer = document.querySelector("#balance");
    balContainer.textContent = `₹${bal}`;
    // add  expense and income to html

    var toUpdateList = "";
    hist.forEach((elem, index) => {
      toUpdateList += `<li class="${
        elem.select == "income" ? "green" : "red"
      } _${index}"><span>${elem.description}</span><span>${elem.amount}</span>
      <button class="_${index}" onclick="onCross(event)" >X</button></li>`;
    });
    document.querySelector("#list").innerHTML = toUpdateList;
    document.querySelector("#text").value = "";
    document.querySelector("#amount").value = "";
    document.querySelector(".rad:checked").checked = false;
  }
  //   provide an alert if  buttons are not selected
}
function onCross(event) {
  //    print the event occuring
  var index = -1;
  var listElems = document.querySelectorAll("#list li");
  listElems.forEach((elem, ind) => {
    if (elem == event.target) {
      index = ind;
    }
  });
  // remove  elements from history array
  bal = 0.0;
  inc = 0.0;
  exp = 0.0;

  if (hist.length != 0) {
    hist.forEach((elem) => {
      if (elem.select == "income") {
        inc += elem.amount;
        bal += elem.amount;
      }
      if (elem.selec == "expense") {
        exp += elem.amount;
        bal -= elem.amount;
      }
    });
    //   update history array Hint : use forEach loop
    document.querySelector("#list").innerHTML = toUpdateList;
  } else {
    document.querySelector("#list").innerHTML = "";
  }
  var balContainer = document.querySelector("#balance");
  balContainer.textContent = `₹${bal}`;
  var balContainer = document.querySelector("#money-plus");
  balContainer.textContent = `₹${inc}`;
  var balContainer = document.querySelector("#money-minus");
  balContainer.textContent = `₹${exp}`;
}

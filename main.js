function init() {
  var rows = document.getElementsByClassName("t");
  for (var i = 0; i < rows.length; i++) {
    var rating = rows[i].getElementsByTagName("td")[5].innerHTML;
    if (rating < 2) {
      rows[i].classList.add("red-background");
    } else if (rating > 4) {
      rows[i].classList.add("green-background");
    }
  }
}

$(".btn-danger").click(function () {
  $(this).closest("tr").remove();
});

function averagePrice(rows) {
  var totalPrice = 0;
  for (var i = 0; i < rows.length; i++) {
    totalPrice += parseFloat(rows[i].price);
  }
  return totalPrice / rows.length;
}

function findBestOption(arr) {
  let bestOption = null;
  for (const obj of arr) {
    if (obj.rating === 4 || obj.rating === 5) {
      if (!bestOption || obj.price < bestOption.price) {
        bestOption = obj;
      }
    }
  }
  return bestOption ? bestOption.id : null;
}

function openForm(id) {
  location.href = "form.html";
  formLoad(id);
}

function formLoad(id) {}

function submit() {}

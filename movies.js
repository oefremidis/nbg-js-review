let totalCosts = [];

let form = document.getElementById("movie-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // ----------------------------------------------
  // add an entry
  let row = document.createElement("tr");
  let title = document.querySelector("input[name=title]").value;
  let cost = document.querySelector("input[name=cost]").value;

  try {
    let exists = totalCosts.find((movie) => movie.title == title);
    if (exists) {
      throw new Error("Movie already exists...");
    }

    row.innerHTML = `<tr><td>${title}</td><td>${cost}</td>
                  <td><button class="btn btn-danger">Remove</button></tr>`;
    const table = document.getElementById("movies");
    table.append(row);

    // add an entry to your 'model'
    totalCosts.push({ title, cost });

    // ---------------------------------------------
    // remove an entry

    let remove = row.querySelector("button");
    remove.addEventListener("click", function (e) {
      e.preventDefault();

      const title = row.cells[0].innerHTML;
      this.parentNode.parentNode.remove();

      totalCosts = totalCosts.filter((movie) => movie.title != title);

      updateTotal();
    });

    updateTotal();
  } catch (e) {
    alert(e.message);
  }
});

function updateTotal() {
  let total = 0;
  for (let item of totalCosts) {
    total += Number(item.cost);
  }
  let span = document.getElementById("total-cost");
  span.innerHTML = total;
}

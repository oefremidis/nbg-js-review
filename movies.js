
let totalCosts = []

const form = document.getElementById('movie-form');

form.addEventListener('submit', function(event){

    event.preventDefault();

    //-------------------------------------------
    // add an entry

    let title = document.querySelector('input[name=title]').value;
    let cost = document.querySelector('input[name=cost]').value;

    let row = document.createElement('tr');
    row.innerHTML = `<tr><td>${title}</td><td>${cost}</td>
    <td><button class="btn btn-danger">Remove</button></td></tr>`;

    let table = document.getElementById('movies');
    table.append(row);

    totalCosts.push({title, cost});
    // console.log(totalCosts)

    //-------------------------------------------
    // remove an entry

    let remove = row.querySelector('button');
    remove.addEventListener('click', function(e){
        e.preventDefault();
        // console.log(this.parentNode.parentNode)
        this.parentNode.parentNode.remove();

        const title = row.cells[0].innerHTML;
        totalCosts = totalCosts.filter(movie => movie.title != title);

        updateCost();
    });


    updateCost();

});


function updateCost(){
    let total = 0;
    for(let item of totalCosts){
        total += Number(item.cost);
    }

    let span = document.getElementById('total-cost');
    span.innerHTML = total;
}
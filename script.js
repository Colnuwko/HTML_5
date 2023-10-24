
let Button = document.querySelector('.button');
let max = 10;
Button.onclick = function() {
    max = max+1;
    let row = document.createElement("tr");
    let name = document.querySelector('#name')
    let season = document.querySelector('#season')
    let series = document.querySelector('#series')
    let data_of_release = document.querySelector('#data_of_release')
    let fees = document.querySelector('#fees')
    let link = document.querySelector('#link')
    row.innerHTML = "<td>"+max+"</td>"+"<td>"+name.value+"</td>"+"<td>"+season.value+"</td>"+"<td>"+series.value+"</td>"+
    "<td>"+data_of_release.value+"</td>"+"<td>"+fees.value+"</td>"+"<td>"+"<a href=link.value>"+name.value+"</a>"+"</td>";
    document.getElementById("node").appendChild(row); 
};

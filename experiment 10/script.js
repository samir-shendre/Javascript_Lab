const url = "./data.json";

document.getElementById("fetchBtn").onclick = function () {

    fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw new Error("HTTP Error: " + response.status);
            }
            return response.json();
        })
        .then(function(data) {
            displayData(data);
        })
        .catch(function(error) {
            document.getElementById("message").innerHTML =
                "Fetch Error: " + error.message;
        });
};


document.getElementById("jqueryBtn").onclick = function () {

    $.getJSON(url)
        .done(function(data) {
            displayData(data);
        })
        .fail(function(xhr) {
            document.getElementById("message").innerHTML =
                "jQuery Error: Cannot load data";
        });
};


function displayData(data) {

    let output = "";

    data.forEach(function(student) {

        output += "<tr>";
        output += "<td>" + student.id + "</td>";
        output += "<td>" + student.name + "</td>";
        output += "<td>" + student.email + "</td>";
        output += "<td>" + student.city + "</td>";
        output += "</tr>";

    });

    document.getElementById("tableBody").innerHTML = output;
}
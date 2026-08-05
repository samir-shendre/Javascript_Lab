// ===============================
// LOGIN FUNCTION
// ===============================

function login() {

    const validEmail = "student@gmail.com";
    const validPassword = "Samir@2006";

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let error = document.getElementById("loginError");

    if (email === "" || password === "") {
        error.innerHTML = "Please enter Email and Password";
        return;
    }

    if (email !== validEmail) {
        error.innerHTML = "❌ Invalid Email";
        return;
    }

    if (password !== validPassword) {
        error.innerHTML = "❌ Invalid Password";
        return;
    }

    error.innerHTML = "";

    // Hide Login Page
    document.getElementById("loginPage").style.display = "none";

    // Show Grading Page
    document.getElementById("gradingPage").style.display = "block";
}



// ===============================
// STUDENT RESULT FUNCTION
// ===============================

function calculateResult() {

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    let marks = document.getElementsByClassName("marks");

    if (name == "" || roll == "") {
        alert("Please fill Student Name and Roll Number");
        return;
    }

    let total = 0;
    let highest = 0;
    let lowest = 100;
    let pass = true;

    let subjects = [
        "DBMS",
        "TOC",
        "JAVA",
        "JAVASCRIPT",
        "PYTHON",
        "OS"
    ];

    let table = `
        <table>
        <tr>
            <th>Subject</th>
            <th>Marks</th>
            <th>Status</th>
        </tr>
    `;

    for (let i = 0; i < marks.length; i++) {

        let m = parseInt(marks[i].value);

        if (isNaN(m) || m < 0 || m > 100) {
            alert("Enter valid marks between 0 and 100");
            return;
        }

        total += m;

        if (m > highest)
            highest = m;

        if (m < lowest)
            lowest = m;

        if (m < 35)
            pass = false;

        table += "<tr>";

        if (m >= 35) {

            table += `
                <td>${subjects[i]}</td>
                <td>${m}</td>
                <td class="pass">PASS</td>
            `;

        } else {

            table += `
                <td>${subjects[i]}</td>
                <td>${m}</td>
                <td class="fail">FAIL</td>
            `;

        }

        table += "</tr>";

    }

    table += "</table>";



    // ===============================
    // Percentage
    // ===============================

    let percentage = (total / 600) * 100;



    // ===============================
    // Grade
    // ===============================

    let grade = "";

    if (percentage >= 90)
        grade = "A+";

    else if (percentage >= 80)
        grade = "A";

    else if (percentage >= 70)
        grade = "B";

    else if (percentage >= 60)
        grade = "C";

    else if (percentage >= 50)
        grade = "D";

    else if (percentage >= 35)
        grade = "E";

    else
        grade = "FAIL";



    // ===============================
    // Remark
    // ===============================

    let remark = "";

    if (percentage >= 90)
        remark = "🌟 Outstanding";

    else if (percentage >= 75)
        remark = "🎉 Excellent";

    else if (percentage >= 60)
        remark = "👍 Good";

    else if (percentage >= 50)
        remark = "🙂 Average";

    else
        remark = "📚 Needs Improvement";



    // ===============================
    // Display Result
    // ===============================

    document.getElementById("result").innerHTML = `

        <h2>Student Marksheet</h2>

        <hr>

        <p><b>Student Name :</b> ${name}</p>

        <p><b>Roll Number :</b> ${roll}</p>

        <p><b>Date :</b> ${new Date().toLocaleString()}</p>

        ${table}

        <hr>

        <p><b>Total Marks :</b> ${total} / 600</p>

        <p><b>Percentage :</b> ${percentage.toFixed(2)}%</p>

        <p><b>Grade :</b> ${grade}</p>

        <p><b>Highest Marks :</b> ${highest}</p>

        <p><b>Lowest Marks :</b> ${lowest}</p>

        <p><b>Remark :</b> ${remark}</p>

        <h2 class="${pass ? 'pass' : 'fail'}">
            ${pass ? "✅ PASS" : "❌ FAIL"}
        </h2>

    `;

}
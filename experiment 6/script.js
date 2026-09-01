function analyzeText() {

   
    const text = document.getElementById("inputText").value;


   

    const studentRegex =
        /Student\s*:\s*([^\n]+)/i;

    const rollRegex =
        /Roll\s*Number\s*:\s*([^\n]+)/i;

    const emailRegex =
        /Email\s*:\s*([^\s\n]+)/i;

    const phoneRegex =
        /Phone\s*Number\s*:\s*([0-9]+)/i;

    const departmentRegex =
        /Department\s*:\s*([^\n]+)/i;


    // ==============================
    // EXTRACT INFORMATION
    // ==============================

    const studentMatch =
        text.match(studentRegex);

    const rollMatch =
        text.match(rollRegex);

    const emailMatch =
        text.match(emailRegex);

    const phoneMatch =
        text.match(phoneRegex);

    const departmentMatch =
        text.match(departmentRegex);


    const student =
        studentMatch
            ? studentMatch[1].trim()
            : "Not Found";

    const roll =
        rollMatch
            ? rollMatch[1].trim()
            : "Not Found";

    const email =
        emailMatch
            ? emailMatch[1].trim()
            : "Not Found";

    const phone =
        phoneMatch
            ? phoneMatch[1].trim()
            : "Not Found";

    const department =
        departmentMatch
            ? departmentMatch[1].trim()
            : "Not Found";


    

    const emailPattern =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const isEmailValid =
        emailPattern.test(email);


    

    const phonePattern =
        /^\d{10}$/;

    const isPhoneValid =
        phonePattern.test(phone);


   

    const totalWords =
        text.trim() === ""
            ? 0
            : text.trim().split(/\s+/).length;


    

    const totalCharacters =
        text.replace(/\s/g, "").length;


   

    let processedText =
        text.toLowerCase();


    

    processedText =
        processedText.replace(
            /computer science/gi,
            "information technology"
        );


    
    document.getElementById("student").textContent =
        student;

    document.getElementById("roll").textContent =
        roll;

    document.getElementById("email").textContent =
        email;

    document.getElementById("phone").textContent =
        phone;

    document.getElementById("department").textContent =
        department;


    

    const emailStatus =
        document.getElementById("emailStatus");

    if (isEmailValid) {

        emailStatus.textContent =
            "✓ Valid Email";

        emailStatus.className =
            "valid";

    } else {

        emailStatus.textContent =
            "✗ Invalid Email";

        emailStatus.className =
            "invalid";
    }


   

    const phoneStatus =
        document.getElementById("phoneStatus");

    if (isPhoneValid) {

        phoneStatus.textContent =
            "✓ Valid - 10 Digits";

        phoneStatus.className =
            "valid";

    } else {

        phoneStatus.textContent =
            "✗ Invalid - Must be 10 Digits";

        phoneStatus.className =
            "invalid";
    }


   

    document.getElementById("wordCount").textContent =
        totalWords;

    document.getElementById("charCount").textContent =
        totalCharacters;


    
    document.getElementById("processedText").textContent =
        processedText;
}




window.addEventListener("DOMContentLoaded", () => {
    analyzeText();
});
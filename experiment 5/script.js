function analyzeArray() {

    // Get input
    let input = document.getElementById("numberInput").value;

    // Create array
    let numbers = input
        .split(",")
        .map(Number)
        .filter(num => !isNaN(num));

    if (numbers.length === 0) {
        alert("Please enter valid numbers.");
        return;
    }


    // ==============================
    // OBJECT HANDLING
    // ==============================

    // Convert every number into an object
    let numberObjects = numbers.map(function(num, index) {

        return {
            position: index + 1,
            value: num
        };

    });


    // ==============================
    // ARRAY METHODS
    // ==============================

    // Find maximum using reduce()
    let maximum = numberObjects.reduce(function(max, item) {

        return item.value > max.value ? item : max;

    });


    // Find minimum using reduce()
    let minimum = numberObjects.reduce(function(min, item) {

        return item.value < min.value ? item : min;

    });


    // ==============================
    // DISPLAY
    // ==============================

    document.getElementById("result").innerHTML = `

        <div class="array">

            <b>Array:</b>

            ${numberObjects
                .map(item => item.value)
                .join(", ")}

        </div>


        <div class="result-box">

            <div class="box">

                <small>Maximum Value</small>

                <h2 class="maximum">
                    ${maximum.value}
                </h2>

                <p>
                    Position: ${maximum.position}
                </p>

            </div>


            <div class="box">

                <small>Minimum Value</small>

                <h2 class="minimum">
                    ${minimum.value}
                </h2>

                <p>
                    Position: ${minimum.position}
                </p>

            </div>

        </div>

    `;

}
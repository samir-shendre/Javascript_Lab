// -------------------- VEHICLE DATABASE --------------------

const vehicleDatabase = {

    "MH20AB8881": {
        owner: "Rahul Sharma",
        vehicleType: "Motorcycle",
        company: "Honda",
        model: "Shine 125",
        fuel: "Petrol",
        color: "Black",
        registrationDate: "15-03-2022",
        registrationValid: "14-03-2037",
        state: "Maharashtra",
        district: "Nagpur",
        city: "Nagpur",
        area: "Civil Lines RTO",
        chassisNo: "********5678",
        engineNo: "********4321",
        status: "Active"
    },

    "MH12AB1234": {
        owner: "Amit Patil",
        vehicleType: "Car",
        company: "Hyundai",
        model: "Creta",
        fuel: "Diesel",
        color: "White",
        registrationDate: "12-01-2023",
        registrationValid: "12-01-2038",
        state: "Maharashtra",
        district: "Pune",
        city: "Pune",
        area: "Sangamwadi RTO",
        chassisNo: "********9876",
        engineNo: "********6543",
        status: "Active"
    }

};

// -------------------- FUNCTION DECLARATION --------------------

function createValidator() {

    let totalChecks = 0;

    return function(vehicle) {

        try {

            vehicle = vehicle.trim().toUpperCase();

            if(vehicle === "")
                throw new Error("Registration Number cannot be empty.");

            if(vehicle.length !== 10)
                throw new Error("Registration Number must be exactly 10 characters.");

            if(!/^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/.test(vehicle))
                throw new Error("Invalid Registration Number.");

            let details = vehicleDatabase[vehicle];

            if(!details)
                throw new Error("Vehicle details not found.");

            totalChecks++;

            document.getElementById("resultCard").style.display = "block";

            document.getElementById("vehicleNo").innerHTML = vehicle;
            document.getElementById("owner").innerHTML = details.owner;
            document.getElementById("vehicleType").innerHTML = details.vehicleType;
            document.getElementById("company").innerHTML = details.company;
            document.getElementById("model").innerHTML = details.model;
            document.getElementById("fuel").innerHTML = details.fuel;
            document.getElementById("color").innerHTML = details.color;
            document.getElementById("regDate").innerHTML = details.registrationDate;
            document.getElementById("validTill").innerHTML = details.registrationValid;
            document.getElementById("state").innerHTML = details.state;
            document.getElementById("district").innerHTML = details.district;
            document.getElementById("city").innerHTML = details.city;
            document.getElementById("area").innerHTML = details.area;
            document.getElementById("chassis").innerHTML = details.chassisNo;
            document.getElementById("engine").innerHTML = details.engineNo;
            document.getElementById("status").innerHTML = details.status;

            document.getElementById("count").innerHTML = totalChecks;

            showPopup("Vehicle Found Successfully", "success");

        }
        catch(error) {

            document.getElementById("resultCard").style.display = "none";

            showPopup(error.message, "error");

        }

    };

}

// -------------------- CLOSURE --------------------

const validator = createValidator();

// -------------------- FUNCTION EXPRESSION --------------------

const validateVehicle = function() {

    let vehicle = document.getElementById("regNumber").value;

    validator(vehicle);

};

// -------------------- FUNCTION DECLARATION --------------------

function showPopup(message, type) {

    let popup = document.getElementById("popup");

    popup.innerHTML = message;

    popup.className = "popup";

    popup.classList.add(type);

    popup.classList.add("show");

    setTimeout(() => {

        popup.classList.remove("show");

    }, 3000);

}
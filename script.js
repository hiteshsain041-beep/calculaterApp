// Simple Interest
function SimpleInterest() {
    const Principal = parseFloat(document.getElementById("Principal").value) || 0;
    const RateOfInterest = parseFloat(document.getElementById("RateOfInterest").value) || 0;
    const Time = parseFloat(document.getElementById("Time").value) || 0;

    if (Principal < 0 || RateOfInterest < 0 || Time < 0) {
        document.getElementById("PrincipalAmount").innerText = "0.00";
        document.getElementById("InterestAmount").innerText = "0.00";
        document.getElementById("TotalAmount").innerText = "0.00";
        return;
    }

    const InterestAmount = (Principal * RateOfInterest * Time) / 100;
    const TotalAmount = Principal + InterestAmount;

    document.getElementById("PrincipalAmount").innerText = Principal.toFixed(2);
    document.getElementById("InterestAmount").innerText = InterestAmount.toFixed(2);
    document.getElementById("TotalAmount").innerText = TotalAmount.toFixed(2);
}








// Body Mass Index
function BodyMassIndex() {
    const Height = (parseFloat(document.getElementById("Height").value) / 100) || 0;
    const Weight = parseFloat(document.getElementById("Weight").value) || 0;

    if (Height <= 0 || Weight <= 0) {
        document.getElementById("BMI").innerText = `0.00 kg/m²`;
        document.getElementById("BMICategory").innerText = "";
        return;
    }

    const BMI = (Weight / (Height * Height)) || 0;

    let BMICategory = "";

    if (BMI < 18.5) {
        BMICategory = "Underweight";
    }
    else if (BMI >= 18.5 && BMI < 24.9) {
        BMICategory = "Normal Weight";
    }
    else if (BMI >= 25 && BMI < 29.9) {
        BMICategory = "Overweight";
    }
    else if (BMI >= 30) {
        BMICategory = "Obesity";
    }

    document.getElementById("BMI").innerText = `${BMI.toFixed(2)} kg/m²`;
    document.getElementById("BMICategory").innerText = BMICategory;
}












// Calorie
function Calorie() {
    const Age = parseFloat(document.getElementById("Age").value) || 0;
    const Weight = parseFloat(document.getElementById("Weight").value) || 0;
    const Height = parseFloat(document.getElementById("Height").value) || 0;
    const Gender = document.getElementById("Gender").value;
    const ActivityLevel = document.getElementById("ActivityLevel").value;

    if (Age <= 0 || Weight <= 0 || Height <= 0) {
        document.getElementById("BMR").innerText = `0.00 Calories/Day`;
        document.getElementById("DailyCalorie").innerText = "0.00";
        return;
    }

    let BMR = 0;

    if (Gender === "Male") {
        BMR = 10 * Weight + 6.25 * Height - 5 * Age + 5;
    }
    else {
        BMR = 10 * Weight + 6.25 * Height - 5 * Age - 161;
    }

    document.getElementById("BMR").innerText = `${BMR.toFixed(2)} Calories/Day`;

    let DailyCalorie = 0;
    if (ActivityLevel === "Sedentary") {
        DailyCalorie = BMR * 1.20;
    }
    else if (ActivityLevel === "LightlyActive") {
        DailyCalorie = BMR * 1.375;
    }
    else if (ActivityLevel === "ModeratelyActive") {
        DailyCalorie = BMR * 1.55;
    }
    else if (ActivityLevel === "VeryActive") {
        DailyCalorie = BMR * 1.725;
    }
    else if (ActivityLevel === "ExtraActive") {
        DailyCalorie = BMR * 1.90;
    }

    document.getElementById("DailyCalorie").innerText = `${DailyCalorie.toFixed(2)} Calories/Day based on Activity Level`;
}
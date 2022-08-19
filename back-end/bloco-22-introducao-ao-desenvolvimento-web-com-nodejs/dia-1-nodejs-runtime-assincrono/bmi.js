const readline = require('readline-sync');
const handleBMI = require('./handleBMI');

function main() {
  const weight = readline.questionFloat("What's your weight? (kg) ");
  const height = readline.questionInt("What's your height? (cm) ");

  const bmi = handleBMI(weight, height);

  console.log(`BMI: ${bmi.toFixed(2)}`);

  if (bmi < 18.5) {
    console.log('Status: Underweight (thin)');
    return;
  }

  if (bmi >= 18.5 && bmi < 25) {
    console.log('Status: Normal weight');
    return;
  }

  if (bmi >= 25 && bmi < 30) {
    console.log('Status: Overweight (overweight)');
    return;
  }

  if (bmi >= 30 && bmi < 35) {
    console.log('Status: Grade I obesity');
    return;
  }

  if (bmi >= 35 && bmi < 40) {
    console.log('Status: Grade II obesity');
    return;
  }

  console.log('Status: Obesity grades III and IV');
}

main();

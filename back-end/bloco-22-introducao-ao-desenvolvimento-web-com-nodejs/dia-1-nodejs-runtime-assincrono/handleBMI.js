function handleBMI(weight, height) {
  console.log(`Weight: ${weight}, Height: ${height}`);

  const bmi = weight / (height / 100) ** 2;

  return bmi;
}

module.exports = handleBMI;
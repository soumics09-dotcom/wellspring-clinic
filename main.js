document.addEventListener('DOMContentLoaded', () => {
  // BMI Calculator
  const bmiForm = document.getElementById('bmiForm');
  if (bmiForm) {
    bmiForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const height = parseFloat(document.getElementById('height').value) / 100;
      const weight = parseFloat(document.getElementById('weight').value);
      if (height > 0 && weight > 0) {
        const bmi = weight / (height * height);
        let category = '';
        if (bmi < 18.5) category = 'Underweight';
        else if (bmi < 25) category = 'Normal';
        else if (bmi < 30) category = 'Overweight';
        else category = 'Obese';
        document.getElementById('bmiResult').innerText = `Your BMI is ${bmi.toFixed(1)} — ${category}`;
      }
    });
  }
});

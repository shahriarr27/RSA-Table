document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.item-content');
  
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      const chartFeatureGroup = button.closest('.chart-feature-group').querySelector('.chart-feature-group-features');
      if (chartFeatureGroup.style.maxHeight === '0px' || !chartFeatureGroup.style.maxHeight) {
        chartFeatureGroup.style.maxHeight = '915px';
        button.classList.add('active'); // Add the "active" class
      } else {
        chartFeatureGroup.style.maxHeight = '0px';
        button.classList.remove('active'); // Remove the "active" class
      }
    });
  });
});

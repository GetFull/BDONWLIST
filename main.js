const clickableElements = document.querySelectorAll(
  'h2.text-white.title-font.font-medium, .copy'
);

const handleItemClick = async (item) => {
  try {
    await navigator.clipboard.writeText(item.textContent.trim());

    item.classList.toggle('text-green-500');

    console.log('Text copied successfully: ' + item.textContent);
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
};

clickableElements.forEach((item) => {
  item.classList.add('cursor-pointer');
  item.addEventListener('click', () => handleItemClick(item));
});

const toggleButtons = document.querySelectorAll('[data-toggle]');

function toggleElements(event) {
  const elementsToToggle = document.querySelectorAll('[data-tier]');

  elementsToToggle.forEach((element) => {
    const tierValues = element.getAttribute('data-tier').split(' ');

    const result = tierValues.reduce(
      (accumulator, currentValue) =>
        accumulator +
        document.querySelector(`[data-toggle="${currentValue}"]`).checked,
      0
    );

    result
      ? element.classList.remove('hidden')
      : element.classList.add('hidden');
  });
}

toggleButtons.forEach((button) => {
  button.addEventListener('click', toggleElements);
});

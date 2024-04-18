const clickableElements = document.querySelectorAll('[data-copy]');

const handleItemClick = async (item) => {
  try {
    // Copy text to clipboard
    await navigator.clipboard.writeText(item.textContent.trim());

    // Toggle class to indicate success
    item.classList.toggle('text-green-500');

    // Display a message near the item
    const message = document.createElement('div');
    message.classList.add(
      'absolute',
      'rounded',
      'p-2',
      'bg-gray-800',
      'text-green-500'
    );

    message.textContent = 'Text copied!';
    item.insertAdjacentElement('afterend', message);

    // Remove the message after a short delay
    setTimeout(() => {
      message.remove();
    }, 1000); // Adjust the delay as needed
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

// Membuka atau menutup ringkasan pada setiap kartu materi.
document.querySelectorAll('.text-button').forEach((button) => {
  button.addEventListener('click', () => {
    const detail = document.getElementById(button.dataset.target);
    const isOpening = detail.hidden;
    detail.hidden = !isOpening;
    button.setAttribute('aria-expanded', String(isOpening));
    button.innerHTML = isOpening
      ? 'Tutup ringkasan <span>↑</span>'
      : 'Baca ringkasan <span>→</span>';
  });
});

// Menghitung checklist dan memperbarui indikator progres belajar.
const checkboxes = document.querySelectorAll('#learning-list input[type="checkbox"]');
const progressText = document.getElementById('progress-text');
const progressBar = document.getElementById('progress-bar');

function updateProgress() {
  const completed = document.querySelectorAll('#learning-list input[type="checkbox"]:checked').length;
  const total = checkboxes.length;
  progressText.textContent = `${completed} dari ${total}`;
  progressBar.style.width = `${(completed / total) * 100}%`;
}

checkboxes.forEach((checkbox) => checkbox.addEventListener('change', updateProgress));
updateProgress();

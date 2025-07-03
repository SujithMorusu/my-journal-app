document.addEventListener("DOMContentLoaded", function () {
  loadEntries();

  document.getElementById("save-button").addEventListener("click", function () {
    const entry = document.getElementById("journal-entry").value;

    if (entry.trim() === "") return;

    let entries = JSON.parse(localStorage.getItem("entries")) || [];
    entries.push(entry);
    localStorage.setItem("entries", JSON.stringify(entries));

    document.getElementById("journal-entry").value = "";
    loadEntries();
  });
});

function loadEntries() {
  const list = document.getElementById("entry-list");
  list.innerHTML = "";

  const entries = JSON.parse(localStorage.getItem("entries")) || [];

  entries.forEach(function (entry) {
    const li = document.createElement("li");
    li.textContent = entry;
    list.appendChild(li);
  });
}

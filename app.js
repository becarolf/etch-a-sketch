const container = document.getElementById("container");

for (let row = 0; row < 16; row++) {
  const row = document.createElement("div");
  row.classList.add("row");
  container.appendChild(row);

  for (let cel = 0; cel < 16; cel++) {
    const cel = document.createElement("div");
    
    cel.addEventListener("mouseover", function (e) {
      console.log();
      e.target.style.background = "pink";
    });

      cel.classList.add("cel");
      row.appendChild(cel);
  }
}


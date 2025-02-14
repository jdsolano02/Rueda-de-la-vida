// app.js

document
  .getElementById("generateReport")
  .addEventListener("click", function () {
    // Obtener valores de los inputs y validarlos
    const salud = parseInt(document.getElementById("salud").value);
    const trabajo = parseInt(document.getElementById("trabajo").value);
    const relacion = parseInt(document.getElementById("relacion").value);
    const familia = parseInt(document.getElementById("familia").value);
    const finanzas = parseInt(document.getElementById("finanzas").value);
    const emocional = parseInt(document.getElementById("emocional").value);
    const diversion = parseInt(document.getElementById("diversion").value);
    const contribucion = parseInt(
      document.getElementById("contribucion").value
    );

    // Validar si las puntuaciones están entre 1 y 10
    if (
      [
        salud,
        trabajo,
        relacion,
        familia,
        finanzas,
        emocional,
        diversion,
        contribucion,
      ].some((val) => isNaN(val) || val < 0 || val > 10)
    ) {
      alert("Por favor, puntúa todas las áreas con valores entre 0 y 10.");
      return;
    }

    // Datos de las áreas
    const data = [
      salud,
      trabajo,
      relacion,
      familia,
      finanzas,
      emocional,
      diversion,
      contribucion,
    ];

    const labels = [
      "Salud Física",
      "Trabajo",
      "Relación Sentimental",
      "Familia y Amigos",
      "Situación Financiera",
      "Estado Emocional",
      "Diversión y Ocio",
      "Contribución",
    ];

    // Mostrar la sección de visualización
    document.getElementById("graphSection").classList.remove("hidden");

    // Crear gráfico de radar
    const ctx = document.getElementById("radarChart").getContext("2d");
    const radarChart = new Chart(ctx, {
      type: "radar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Progreso Actual",
            data: data,
            backgroundColor: "rgba(106, 90, 205, 0.2)", // Fondo semitransparente
            borderColor: "rgba(106, 90, 205, 1)", // Borde del gráfico
            borderWidth: 1.5,
            fill: true,
          },
        ],
      },
      options: {
        scale: {
          r: {
            min: 0, // Rango mínimo 0
            max: 10, // Rango máximo 10
            ticks: {
              stepSize: 1,
              font: {
                size: 14, // Ajustar tamaño de fuente
              },
            },
          },
          angleLines: {
            display: true,
            lineWidth: 1,
          },
          grid: {
            circular: true,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      },
    });

    // Mostrar la sección de visualización de 12 meses
    document.getElementById("visualizationSection").classList.remove("hidden");

    // Generar los cuadros de texto para cada área
    const areas = [
      { name: "Salud Física", current: salud },
      { name: "Trabajo", current: trabajo },
      { name: "Relación Sentimental", current: relacion },
      { name: "Familia y Amigos", current: familia },
      { name: "Situación Financiera", current: finanzas },
      { name: "Estado Emocional", current: emocional },
      { name: "Diversión y Ocio", current: diversion },
      { name: "Contribución", current: contribucion },
    ];

    const areasText = document.getElementById("areasText");
    areasText.innerHTML = ""; // Limpiar el contenido previo

    areas.forEach((area) => {
      const div = document.createElement("div");
      div.classList.add("mb-6");

      // Crear un título para cada área
      const h3 = document.createElement("h3");
      h3.classList.add("text-xl", "font-semibold", "mb-2");
      h3.innerText = area.name;
      div.appendChild(h3);

      // Crear un cuadro de texto editable para cada área
      const textArea = document.createElement("textarea");
      textArea.classList.add(
        "w-full",
        "p-4",
        "border",
        "rounded-lg",
        "resize-none"
      );
      textArea.rows = 4;
      textArea.placeholder = `Visualiza cómo puedes llegar a un "10" en ${area.name} en los próximos 12 meses.`;

      div.appendChild(textArea);
      areasText.appendChild(div);
    });

    // Mostrar la sección de visualización de 3 meses
    document.getElementById("visualizationSection3").classList.remove("hidden");

    // Generar los cuadros de texto para cada área para los 3 meses
    const areasText3 = document.getElementById("areasText3");

    areasText3.innerHTML = ""; // Limpiar el contenido previo

    areas.forEach((area) => {
      const div = document.createElement("div");
      div.classList.add("mb-6");

      // Crear un título para cada área
      const h3 = document.createElement("h3");
      h3.classList.add("text-xl", "font-semibold", "mb-2");
      h3.innerText = area.name;
      div.appendChild(h3);

      // Crear un cuadro de texto editable para cada área
      const textArea = document.createElement("textarea");
      textArea.classList.add(
        "w-full",
        "p-4",
        "border",
        "rounded-lg",
        "resize-none"
      );
      textArea.rows = 4;
      textArea.placeholder = `Visualiza cómo puedes llegar a un "10" en ${area.name} en los próximos 3 meses.`;

      div.appendChild(textArea);
      areasText3.appendChild(div);
    });

    // Mostrar boton
    document.getElementById("printButton").classList.remove("hidden");

    // Función para imprimir o guardar como PDF

    document
      .getElementById("printButton")
      .addEventListener("click", function () {
        const canvas = document.getElementById("radarChart");

        // Store original chart size
        const originalWidth = canvas.style.width;
        const originalHeight = canvas.style.height;

        // Resize chart for printing
        canvas.style.width = "650px"; // Adjust width to fit page
        canvas.style.height = "650px"; // Adjust height to keep aspect ratio

        // Wait a bit for resizing to apply, then print
        setTimeout(() => {
          window.print();

          // Restore original size after printing
          canvas.style.width = originalWidth;
          canvas.style.height = originalHeight;
        }, 500);
      });
  });

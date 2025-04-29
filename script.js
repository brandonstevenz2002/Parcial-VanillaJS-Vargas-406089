document.addEventListener("DOMContentLoaded", function () {
    // Manejo de la descarga del CV como PDF
    const downloadCV = document.getElementById("downloadBtn");

    if (downloadCV) {
        downloadCV.addEventListener("click", function () {
            const element = document.querySelector(".card"); // Selecciona la tarjeta principal
            element.classList.add("export-pdf"); // Clase para ajustar la vista antes de exportar

            const options = {
                margin: 0.5,
                filename: "mi_cv.pdf",
                image: { type: "jpeg", quality: 0.98 },
                html2canvas: { scale: 2, scrollY: 0 }, // Ajustes para scroll
                jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
            };

            html2pdf().set(options).from(element).save(); // Genera y descarga el PDF
            element.classList.remove("export-pdf"); // Remueve la clase después de exportar
        });
    }

    // Manejo del formulario de comentarios
    const commentForm = document.getElementById("commentForm");

    if (commentForm) {
        commentForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Previene el comportamiento por defecto del formulario

            // Captura de datos del formulario
            const name = document.getElementById("name").value.trim();
            const comment = document.getElementById("comment").value.trim();

            // Validación para evitar campos vacíos
            if (!name || !comment) {
                alert("Por favor, completa todos los campos.");
                return;
            }

            // Parámetros para enviar correo con EmailJS
            const templateParams = {
                nombre: name,       // Este parámetro debe coincidir con los definidos en tu plantilla de EmailJS
                mensaje: comment,
            };

            emailjs
                .send("service_h0k05ja", "template_wc1fkwb", templateParams, "lZy4zgSBlBRp6RVzQ") // Llave pública proporcionada
                .then(function () {
                    alert("¡Comentario enviado con éxito!");
                    commentForm.reset(); // Limpia el formulario después del envío
                })
                .catch(function (error) {
                    alert("Hubo un error al enviar el comentario. Inténtalo de nuevo.");
                    console.error("Error:", error); // Imprime el error en la consola para depuración
                });
        });
    }
});



  
  
  
  





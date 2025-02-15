const translations = {
    es: {
        title: "Aprende Español con Tu Profesora",
        inicio: "Inicio",
        servicios: "Clases",
        biografia: "Sobre Mí",
        contacto: "Contacto",
        mejora: "Aprende Español de Forma Personalizada",
        descripcion: "Descubre un método efectivo y adaptado a tu nivel para mejorar tu español. Ya seas principiante o avanzado, te ayudaré a desarrollar habilidades lingüísticas con clases dinámicas y personalizadas.",
        consulta: "Consultas",
        nombre: "Nombre:",
        email: "Email:",
        mensaje: "Mensaje:",
        enviar: "Enviar",
        derechos: "© 2025 Aprende Español",
        correo: "Contacto:",
        clase_individual: "Clases individuales",
        clase_individual_desc: "Adaptadas a tus necesidades y ritmo de aprendizaje.",
        clase_grupal: "Clases en grupo",
        clase_grupal_desc: "Aprende español en un ambiente social y participativo.",
        conversacion: "Clases de conversación",
        conversacion_desc: "Mejora tu fluidez con diálogos reales y prácticos."
    },
    en: {
        title: "Learn Spanish with Your Teacher",
        inicio: "Home",
        servicios: "Lessons",
        biografia: "About Me",
        contacto: "Contact",
        mejora: "Learn Spanish in a Personalized Way",
        descripcion: "Discover an effective and tailored method to improve your Spanish. Whether you are a beginner or advanced, I will help you develop linguistic skills with dynamic and personalized lessons.",
        consulta: "Inquiries",
        nombre: "Name:",
        email: "Email:",
        mensaje: "Message:",
        enviar: "Send",
        derechos: "© 2025 Learn Spanish",
        correo: "Contact:",
        clase_individual: "One-on-One Lessons",
        clase_individual_desc: "Tailored to your needs and learning pace.",
        clase_grupal: "Group Lessons",
        clase_grupal_desc: "Learn Spanish in a social and participatory environment.",
        conversacion: "Conversation Classes",
        conversacion_desc: "Improve your fluency with real-life, practical dialogues."
    },
    de: {
        title: "Lerne Spanisch mit deiner Lehrerin",
        inicio: "Startseite",
        servicios: "Unterricht",
        biografia: "Über mich",
        contacto: "Kontakt",
        mejora: "Lerne Spanisch auf eine personalisierte Weise",
        descripcion: "Entdecke eine effektive und maßgeschneiderte Methode, um dein Spanisch zu verbessern. Egal, ob du Anfänger oder Fortgeschrittener bist, ich helfe dir, sprachliche Fähigkeiten mit dynamischem und personalisiertem Unterricht zu entwickeln.",
        consulta: "Anfragen",
        nombre: "Name:",
        email: "E-Mail:",
        mensaje: "Nachricht:",
        enviar: "Senden",
        derechos: "© 2025 Lerne Spanisch",
        correo: "Kontakt:",
        clase_individual: "Einzelunterricht",
        clase_individual_desc: "Maßgeschneidert auf deine Bedürfnisse und Lerntempo.",
        clase_grupal: "Gruppenunterricht",
        clase_grupal_desc: "Lerne Spanisch in einer sozialen und aktiven Umgebung.",
        conversacion: "Konversationskurse",
        conversacion_desc: "Verbessere deine Flüssigkeit mit realen, praktischen Dialogen."
    }
};



function loadLanguage(lang) {
    if (!translations[lang]) lang = "es";  // Si el idioma no existe, por defecto español
    document.querySelectorAll("[data-translate]").forEach(element => {
        const key = element.getAttribute("data-translate");
        if (translations[lang][key]) {
            element.textContent = translations[lang][key]; // Aplica la traducción
        }
    });
    document.head.querySelector("title").textContent = translations[lang].title;
}

document.addEventListener("DOMContentLoaded", function() {
    const languageSelector = document.getElementById("language-selector");
    const savedLanguage = localStorage.getItem("preferredLanguage") || "es";  // Recupera el idioma guardado o por defecto español
    languageSelector.value = savedLanguage;
    loadLanguage(savedLanguage);  // Carga el idioma guardado al iniciar la página

    languageSelector.addEventListener("change", function() {
        const selectedLang = this.value;
        loadLanguage(selectedLang);  // Cambia el idioma cuando el selector cambie
        localStorage.setItem("preferredLanguage", selectedLang);  // Guarda el idioma preferido en localStorage
    });
});

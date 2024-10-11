// Page web insta.js

document.addEventListener("DOMContentLoaded", function () {
    const languageSelect = document.getElementById("language");

    // تعريف الترجمات
    const translations = {
        en: {
            headerTitle: "Techno Revolution",
            navAbout: "About",
            navGallery: "Gallery",
            navContact: "Contact",
            navLanguage: "Language:",
            aboutTitle: "About Us",
            aboutText: "Dive into the world of technology, where innovation meets creativity! Join us as we explore the latest advancements, trends, and tools that are shaping our future and enhancing our everyday lives.",
            galleryTitle: "Gallery",
            robot: "Robot",
            aiTechnology: "AI Technology",
            tablet: "Tablet",
            latestTech: "Latest development of technology",
            contactTitle: "Contact Us",
            contactText: "If you have any questions, feel free to reach out!",
            nameLabel: "Name:",
            emailLabel: "Email:",
            submitButton: "Submit",
            footerText: "© 2024 Techno Revolution. All rights reserved."
        },
        ar: {
            headerTitle: "ثورة التكنولوجيا",
            navAbout: "حول",
            navGallery: "المعرض",
            navContact: "اتصل بنا",
            navLanguage: "اللغة:",
            aboutTitle: "من نحن",
            aboutText: "اغمر نفسك في عالم التكنولوجيا، حيث يلتقي الابتكار بالإبداع! انضم إلينا بينما نستكشف أحدث التطورات والاتجاهات والأدوات التي تشكل مستقبلنا وتعزز حياتنا اليومية.",
            galleryTitle: "المعرض",
            robot: "روبوت",
            aiTechnology: "تكنولوجيا الذكاء الاصطناعي",
            tablet: "جهاز لوحي",
            latestTech: "أحدث تطورات التكنولوجيا",
            contactTitle: "اتصل بنا",
            contactText: "إذا كان لديك أي أسئلة، لا تتردد في التواصل معنا!",
            nameLabel: "الاسم:",
            emailLabel: "البريد الإلكتروني:",
            submitButton: "إرسال",
            footerText: "© 2024 ثورة التكنولوجيا. جميع الحقوق محفوظة."
        },
        // يمكنك إضافة المزيد من الترجمات هنا...
    };

    // تغيير النصوص بناءً على اللغة المختارة
    languageSelect.addEventListener("change", function () {
        const selectedLanguage = this.value;

        // تحديث النصوص في الصفحة
        document.querySelector("header h1").textContent = translations[selectedLanguage].headerTitle;
        document.querySelector("#about h2").textContent = translations[selectedLanguage].aboutTitle;
        document.querySelector("#about p").textContent = translations[selectedLanguage].aboutText;
        document.querySelector("#gallery h2").textContent = translations[selectedLanguage].galleryTitle;
        document.querySelector("#contact h3").textContent = translations[selectedLanguage].contactTitle;
        document.querySelector("#contact p").textContent = translations[selectedLanguage].contactText;
        document.querySelector("#contact input[type='submit']").value = translations[selectedLanguage].submitButton;

        // تحديث النصوص في المعرض
        const galleryItems = document.querySelectorAll(".photo p");
        galleryItems[0].textContent = translations[selectedLanguage].robot;
        galleryItems[1].textContent = translations[selectedLanguage].aiTechnology;
        galleryItems[2].textContent = translations[selectedLanguage].tablet;
        galleryItems[3].textContent = translations[selectedLanguage].latestTech;

        // تحديث النصوص في قائمة التنقل
        const navItems = document.querySelectorAll("nav ul li");
        navItems[0].querySelector("a").textContent = translations[selectedLanguage].navAbout;
        navItems[1].querySelector("a").textContent = translations[selectedLanguage].navGallery;
        navItems[2].querySelector("a").textContent = translations[selectedLanguage].navContact;
        navItems[3].querySelector("label").textContent = translations[selectedLanguage].navLanguage;
    });
});

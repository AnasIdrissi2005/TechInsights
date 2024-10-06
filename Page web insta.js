document.addEventListener("DOMContentLoaded", function () {
    const languageSelect = document.getElementById("language");

    // تعريف الترجمات
    const translations = {
        en: {
            welcome: "Dive into the world of technology, where innovation meets creativity! Join us as we explore the latest advancements, trends, and tools that are shaping our future and enhancing our everyday lives.",
            title: "Techno Revolution",
            aboutTitle: "About Us",
            aboutText: "Welcome to our website where we showcase the latest innovations in technology from around the world!",
            galleryTitle: "Gallery",
            contactTitle: "Contact Us",
            contactText: "If you have any questions, feel free to reach out!",
            submit: "Submit",
            language: "Language:",
            robot: "Robot",
            aiTechnology: "AI Technology",
            tablet: "Tablet",
            latestTech: "Latest development of technology",
            nameLabel: "Name:",
            emailLabel: "Email:"
        },
        ar: {
            welcome: "اغمر نفسك في عالم التكنولوجيا، حيث يلتقي الابتكار بالإبداع! انضم إلينا بينما نستكشف أحدث التطورات والاتجاهات والأدوات التي تشكل مستقبلنا وتعزز حياتنا اليومية.",
            title: "ثورة التكنولوجيا",
            aboutTitle: "من نحن",
            aboutText: "مرحبًا بكم في موقعنا حيث نستعرض أحدث الابتكارات في التكنولوجيا من جميع أنحاء العالم!",
            galleryTitle: "المعرض",
            contactTitle: "تواصل معنا",
            contactText: "إذا كانت لديك أي أسئلة، فلا تتردد في التواصل!",
            submit: "إرسال",
            language: "اللغة:",
            robot: "روبوت",
            aiTechnology: "تكنولوجيا الذكاء الاصطناعي",
            tablet: "لوحة",
            latestTech: "آخر تطور للتكنولوجيا",
            nameLabel: "الاسم:",
            emailLabel: "البريد الإلكتروني:"
        },
        fr: {
            welcome: "Plongez dans le monde de la technologie, où l'innovation rencontre la créativité ! Rejoignez-nous pour explorer les dernières avancées, tendances et outils qui façonnent notre avenir et améliorent notre vie quotidienne.",
            title: "Révolution Technologique",
            aboutTitle: "À propos de nous",
            aboutText: "Bienvenue sur notre site où nous présentons les dernières innovations technologiques du monde entier!",
            galleryTitle: "Galerie",
            contactTitle: "Contactez-nous",
            contactText: "Si vous avez des questions, n'hésitez pas à nous contacter!",
            submit: "Soumettre",
            language: "Langue:",
            robot: "Robot",
            aiTechnology: "Technologie IA",
            tablet: "Tablette",
            latestTech: "Dernière technologie",
            nameLabel: "Nom:",
            emailLabel: "Email:"
        },
        de: {
            welcome: "Tauchen Sie ein in die Welt der Technologie, wo Innovation auf Kreativität trifft! Begleiten Sie uns, während wir die neuesten Fortschritte, Trends und Werkzeuge erkunden, die unsere Zukunft gestalten und unser tägliches Leben verbessern.",
            title: "Technologische Revolution",
            aboutTitle: "Über uns",
            aboutText: "Willkommen auf unserer Website, auf der wir die neuesten Innovationen der Technologie aus aller Welt präsentieren!",
            galleryTitle: "Galerie",
            contactTitle: "Kontaktieren Sie uns",
            contactText: "Wenn Sie Fragen haben, zögern Sie nicht, uns zu kontaktieren!",
            submit: "Einreichen",
            language: "Sprache:",
            robot: "Roboter",
            aiTechnology: "KI-Technologie",
            tablet: "Tablet",
            latestTech: "Neueste Technologie",
            nameLabel: "Name:",
            emailLabel: "Email:"
        },
        ja: {
            welcome: "革新が創造性に出会うテクノロジーの世界に飛び込もう！私たちと一緒に、私たちの未来を形作り、日常生活を向上させる最新の進歩、トレンド、ツールを探求しましょう。",
            title: "テクノロジー革命",
            aboutTitle: "私たちについて",
            aboutText: "私たちのウェブサイトへようこそ。ここでは、世界中の最新の技術革新を紹介します！",
            galleryTitle: "ギャラリー",
            contactTitle: "お問い合わせ",
            contactText: "質問がある場合は、お気軽にお問い合わせください！",
            submit: "送信",
            language: "言語:",
            robot: "ロボット",
            aiTechnology: "AI技術",
            tablet: "タブレット",
            latestTech: "最新技術",
            nameLabel: "名前:",
            emailLabel: "メール:"
        }
    };

    // وظيفة لتحديث الشعار بناءً على اللغة المختارة
    function updateWelcomeText(language) {
        const welcomeElement = document.querySelector('[data-key="aboutText"]');
        welcomeElement.innerText = translations[language].welcome;
    }

    languageSelect.addEventListener("change", function () {
        const selectedLanguage = this.value;

        // تغيير النصوص بناءً على اللغة المحددة
        document.querySelector("header h1").textContent = translations[selectedLanguage].title;
        document.querySelector("#about h2").textContent = translations[selectedLanguage].aboutTitle;
        document.querySelector("#about p").textContent = translations[selectedLanguage].aboutText;
        document.querySelector("#gallery h2").textContent = translations[selectedLanguage].galleryTitle;
        document.querySelector("#contact h2").textContent = translations[selectedLanguage].contactTitle;
        document.querySelector("#contact p").textContent = translations[selectedLanguage].contactText;
        document.querySelector("#contact input[type='submit']").value = translations[selectedLanguage].submit;

        // تحديث النصوص في قسم المعرض
        const galleryItems = document.querySelectorAll(".photo p");
        galleryItems[0].textContent = translations[selectedLanguage].robot;
        galleryItems[1].textContent = translations[selectedLanguage].aiTechnology;
        galleryItems[2].textContent = translations[selectedLanguage].tablet;
        galleryItems[3].textContent = translations[selectedLanguage].latestTech;

        // تحديث النصوص في قائمة التنقل
        const navItems = document.querySelectorAll("nav ul li");
        navItems[0].querySelector("a").textContent = translations[selectedLanguage].aboutTitle;
        navItems[1].querySelector("a").textContent = translations[selectedLanguage].galleryTitle;
        navItems[2].querySelector("a").textContent = translations[selectedLanguage].contactTitle;
        navItems[3].querySelector("label").textContent = translations[selectedLanguage].language;

        // تحديث حقول النموذج
        document.querySelector("label[for='name']").textContent = translations[selectedLanguage].nameLabel;
        document.querySelector("label[for='email']").textContent = translations[selectedLanguage].emailLabel;

        // تحديث شعار الصفحة
        updateWelcomeText(selectedLanguage);
    });
});

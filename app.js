/* ══════════════════════════════════════════════════════════
   PARTICLE CONSTELLATION — Canvas animation
   ══════════════════════════════════════════════════════════ */
(function () {
  var canvas = document.getElementById("particle-canvas");
  if (!canvas) return;
  var ctx = canvas.getContext("2d");
  var particles = [];
  var w, h;

  function getParticleCount() {
    return window.innerWidth < 640 ? 30 : window.innerWidth < 1024 ? 45 : 55;
  }
  var CONNECT_DIST = 130;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function createParticles() {
    particles = [];
    var count = getParticleCount();
    for (var i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.8 + 0.4,
        phase: Math.random() * Math.PI * 2,
        speed: 0.008 + Math.random() * 0.015
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.phase += p.speed;
      if (p.x < -10) p.x = w + 10;
      if (p.x > w + 10) p.x = -10;
      if (p.y < -10) p.y = h + 10;
      if (p.y > h + 10) p.y = -10;
      var alpha = 0.3 + 0.35 * Math.sin(p.phase);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0, 245, 212, " + alpha + ")";
      ctx.fill();
    }
    for (var i = 0; i < particles.length; i++) {
      for (var j = i + 1; j < particles.length; j++) {
        var dx = particles[i].x - particles[j].x;
        var dy = particles[i].y - particles[j].y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECT_DIST) {
          var lineAlpha = (1 - dist / CONNECT_DIST) * 0.12;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = "rgba(0, 245, 212, " + lineAlpha + ")";
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();
  window.addEventListener("resize", function () { resize(); createParticles(); });
})();

/* ══════════════════════════════════════════════════════════
   i18n — FR / EN translation system
   ══════════════════════════════════════════════════════════ */
var currentLang = "fr";

var I18N = {
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.projects": "Projets",
    "nav.skills": "Compétences",
    "nav.experience": "Expérience",
    "nav.formation": "Formation",
    "hero.greeting": "Bonjour, je suis",
    "hero.desc": "Ingénieur en informatique diplômé, orienté Data Engineering et Data Analysis. Je développe des pipelines de données, des tableaux de bord et des solutions analytiques pour transformer les données en informations exploitables et faciliter la prise de décision dans différents secteurs d'activité.",
    "hero.btn_projects": "Projets",
    "stats.projects": "Projets",
    "stats.languages": "Langues",
    "section.about": "À propos",
    "section.formation": "Formation & Certifications",
    "section.projects": "Projets",
    "section.skills": "Compétences",
    "about.desc": "Ingénieur en informatique diplômé, orienté Data Engineering et Data Analysis. Je développe des pipelines de données, des tableaux de bord et des solutions analytiques pour transformer les données en informations exploitables et faciliter la prise de décision.",
    "about.location": "Localisation",
    "about.origin": "Originaire du Tchad",
    "about.relocation": "Disponible pour relocation",
    "about.langs": "Langues",
    "about.lang_fr": "Francais -- Courant",
    "about.lang_en": "Anglais -- Professionnel",
    "about.lang_ar": "Arabe tchadien",
    "about.interests": "Domaines d'intérêt",
    "about.approach": "Approche",
    "about.approach_val": "Concevoir des solutions fiables, exploiter les données et produire des analyses utiles aux décisions métier.",
    "formation.master_title": "Master en informatique système",
    "formation.master_date": "Diplôme obtenu · 2026",
    "formation.licence_title": "Licence en mathématiques et informatique",
    "formation.licence_org": "Université de Dschang, Cameroun",
    "cert.dataviz": "Visualisation de données et storytelling analytique",
    "cert.dataaws": "Analyse de données et bases de données dans le cloud AWS",
    "cert.devops": "CI/CD, infrastructure as code et gestion de projets sur AWS",
    "cert.digfin": "Spécialisation — Compétition digitale, FinTech et stratégie d'innovation",
    "cert.fintech": "Spécialisation — Paiements, blockchain, crowdfunding et IA dans la finance",
    "cert.ccna_sw": "Configuration de switches, routeurs et réseaux sans fil",
    "cert.ccna_net": "Fondamentaux des réseaux, modèle OSI et protocoles TCP/IP",
    "cert.crunch": "2ème place — Hackathon d'innovation (Équipe Smart-View)",
    "cert.uiux": "Design d'interfaces et expérience utilisateur avec Figma",
    "cert.see_more": "Voir plus (6)",
    "cert.see_less": "Voir moins",
    "cert.view_label": "Voir",
    "section.experience": "Expérience",
    "exp.lbl_company": "Entreprise",
    "exp.lbl_org": "Organisation",
    "exp.lbl_platform": "Plateforme",
    "exp.lbl_location": "Lieu",
    "exp.lbl_domain": "Domaine",
    "exp.lbl_period": "Période",
    "exp.lbl_position": "Poste",
    "exp.lbl_project": "Projet principal",
    "exp.lbl_activity": "Activité",
    "exp.lbl_positioning": "Positionnement",
    "exp.lbl_missions": "Missions et responsabilités",
    "exp.lbl_skills": "Compétences",
    "exp.lbl_results": "Résultats",
    "exp.unipod_title": "Stagiaire académique en entrepreneuriat",
    "exp.unipod_position": "Stagiaire académique — Entrepreneuriat",
    "exp.unipod_period": "Septembre 2025 – Août 2026",
    "exp.kimbo_title": "Stagiaire en développement web",
    "exp.kimbo_position": "Stagiaire en développement web",
    "exp.kimbo_loc": "Dschang, Cameroun",
    "exp.kimbo_period": "Janvier – Juillet 2024",
    "exp.kimbo_m1": "Développement de modules fonctionnels pour le projet Observatoire de Recherche (Research Observatory) avec Laravel et Angular.",
    "exp.kimbo_m2": "Conception et implémentation de fonctionnalités front-end et back-end pour améliorer l'expérience utilisateur et la fiabilité de l'application.",
    "exp.kimbo_m3": "Modélisation logicielle avec UML pour représenter et structurer les fonctionnalités du système.",
    "exp.kimbo_m4": "Gestion de versions avec Git pour le suivi des modifications et le travail collaboratif.",
    "exp.kimbo_m5": "Collaboration en équipe et participation à la livraison des fonctionnalités.",
    "exp.fi_title": "Stagiaire en design UI/UX",
    "exp.fi_domain": "Design UI/UX",
    "exp.fi_position": "Stagiaire en design UI/UX",
    "exp.fi_period": "Janvier – Février 2026",
    "exp.fi_m1": "Conception d'interfaces web pour des projets pratiques, notamment une clinique et une application de réservation de séances de fitness.",
    "exp.fi_m2": "Élaboration de personas et de parcours utilisateurs pour comprendre les besoins des utilisateurs.",
    "exp.fi_m3": "Création de wireframes et prototypes pour structurer les pages, les fonctionnalités et la navigation.",
    "exp.fi_m4": "Participation à la conception d'un tableau de bord CRM destiné à une agence digitale.",
    "exp.fi_m5": "Mise en pratique des principes de conception centrée sur l'utilisateur et des technologies web abordées pendant le programme.",
    "exp.unipod_domain": "Entrepreneuriat et innovation numérique",
    "exp.unipod_m1": "Contribution au projet LINK, une plateforme destinée à favoriser l'accès à l'emploi, l'entrepreneuriat et la digitalisation des PME au Togo.",
    "exp.unipod_m2": "Travail sur les différents pôles de la plateforme, notamment Talenta-Link, Visio-Link et Digi-Link.",
    "exp.unipod_m3": "Participation à la conception d'une architecture microservices pour organiser les fonctionnalités et les services de la plateforme.",
    "exp.unipod_m4": "Contribution à la réflexion sur le modèle économique et la viabilité de la solution.",
    "exp.unipod_m5": "Mise en pratique de technologies web, de conteneurisation, de bases de données et de mécanismes d'authentification.",
    "exp.upwork_title": "Traducteur, relecteur & assistant virtuel freelance",
    "exp.upwork_positioning": "Rédacteur & traducteur (EN-FR) | Relecture | Assistance virtuelle",
    "exp.upwork_country": "Tchad",
    "exp.upwork_m1": "Tests fonctionnels d'une solution liée à la régulation de l'accès numérique.",
    "exp.upwork_m2": "Tests d'applications mobiles, notamment une solution d'identification NFC sur Android.",
    "exp.upwork_m3": "Traduction anglais-français et adaptation de contenus pour une communication claire et naturelle.",
    "exp.upwork_m4": "Relecture et correction linguistique pour améliorer la qualité et la précision des textes.",
    "exp.upwork_m5": "Assistance virtuelle, saisie de données et gestion documentaire.",
    "exp.upwork_earnings": "Revenus totaux",
    "exp.upwork_contracts": "Contrats",
    "exp.upwork_badge": "Distinction",
    "projects.subtitle": "Projets couvrant Data Analysis, Data Engineering et UI/UX Design",
    "filter.all": "Tous",
    "filter.engineering": "Data Engineering",
    "projects.show_all": "Voir tous les projets",
    "skills.languages": "Langages",
    "skills.data": "Data & BI",
    "skills.networks": "Systèmes & Réseaux",
    "skills.tools": "Outils",
    "contact.subtitle": "Ouvert aux opportunités en Data Engineering, Data Analysis et IT.",
    "contact.phone": "Téléphone",
    "footer": "&copy; 2026 Steven Barde. Construit avec passion pour la data.",
    "modal.problem": "Problème",
    "modal.solution": "Solution",
    "modal.metrics": "Métriques clés",
    "modal.tech": "Technologies",
    "modal.github": "Voir sur GitHub",
    "modal.results": "Voir les résultats",
    "modal.demo": "Tester la démo",
    "formation.master_org": "UTBM · Partenariat avec l'EPL",
    "exp.unipod_tags": "<span>Entrepreneuriat</span><span>Innovation numérique</span><span>Business Model</span><span>React</span><span>NestJS</span><span>Docker</span><span>MongoDB</span><span>Kafka</span><span>Keycloak</span><span>Microservices</span>",
    "exp.upwork_tags": "<span>Tests fonctionnels</span><span>Tests d'applications mobiles</span><span>Traduction EN-FR</span><span>Relecture</span><span>Rédaction</span><span>Assistance virtuelle</span><span>Saisie de données</span><span>Rigueur</span>"
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.formation": "Education",
    "hero.greeting": "Hi, I'm",
    "hero.desc": "Computer Science Engineer with a focus on Data Engineering and Data Analysis. I build data pipelines, dashboards and analytical solutions to turn data into actionable insights and support decision-making across various sectors.",
    "hero.btn_projects": "Projects",
    "stats.projects": "Projects",
    "stats.languages": "Languages",
    "section.about": "About Me",
    "section.formation": "Education & Certifications",
    "section.projects": "Projects",
    "section.skills": "Skills",
    "about.desc": "Computer Science Engineer with a focus on Data Engineering and Data Analysis. I build data pipelines, dashboards and analytical solutions to turn data into actionable insights and support decision-making.",
    "about.location": "Location",
    "about.origin": "Originally from Chad",
    "about.relocation": "Available for relocation",
    "about.langs": "Languages",
    "about.lang_fr": "French -- Fluent",
    "about.lang_en": "English -- Professional",
    "about.lang_ar": "Chadian Arabic",
    "about.interests": "Areas of Interest",
    "about.approach": "Approach",
    "about.approach_val": "Design reliable solutions, leverage data and produce analyses that support business decisions.",
    "formation.master_title": "Master's in Computer Science & Systems",
    "formation.master_date": "Graduated · 2026",
    "formation.licence_title": "Bachelor's in Mathematics & Computer Science",
    "formation.licence_org": "University of Dschang, Cameroon",
    "cert.dataviz": "Data visualization and analytical storytelling",
    "cert.dataaws": "Data analytics and databases in the AWS cloud",
    "cert.devops": "CI/CD, infrastructure as code and project management on AWS",
    "cert.digfin": "Specialization — Digital competition, FinTech and innovation strategy",
    "cert.fintech": "Specialization — Payments, blockchain, crowdfunding and AI in finance",
    "cert.ccna_sw": "Switch, router, and wireless network configuration",
    "cert.ccna_net": "Networking fundamentals, OSI model and TCP/IP protocols",
    "cert.crunch": "2nd place — Innovation hackathon (Team Smart-View)",
    "cert.uiux": "Interface design and user experience with Figma",
    "cert.see_more": "See more (6)",
    "cert.see_less": "See less",
    "cert.view_label": "View",
    "section.experience": "Experience",
    "exp.lbl_company": "Company",
    "exp.lbl_org": "Organization",
    "exp.lbl_platform": "Platform",
    "exp.lbl_location": "Location",
    "exp.lbl_domain": "Field",
    "exp.lbl_period": "Period",
    "exp.lbl_position": "Position",
    "exp.lbl_project": "Main Project",
    "exp.lbl_activity": "Activity",
    "exp.lbl_positioning": "Positioning",
    "exp.lbl_missions": "Missions & Responsibilities",
    "exp.lbl_skills": "Skills",
    "exp.lbl_results": "Results",
    "exp.unipod_title": "Academic Intern in Entrepreneurship",
    "exp.unipod_position": "Academic Intern — Entrepreneurship",
    "exp.unipod_period": "September 2025 – August 2026",
    "exp.kimbo_title": "Web Development Intern",
    "exp.kimbo_position": "Web Development Intern",
    "exp.kimbo_loc": "Dschang, Cameroon",
    "exp.kimbo_period": "January – July 2024",
    "exp.kimbo_m1": "Development of functional modules for the Research Observatory project using Laravel and Angular.",
    "exp.kimbo_m2": "Front-end and back-end development to improve user experience and application reliability.",
    "exp.kimbo_m3": "Software modeling with UML to represent and structure system features.",
    "exp.kimbo_m4": "Version control with Git for code tracking and collaborative work.",
    "exp.kimbo_m5": "Team collaboration and participation in feature delivery.",
    "exp.fi_title": "UI/UX Design Intern",
    "exp.fi_domain": "UI/UX Design",
    "exp.fi_position": "UI/UX Design Intern",
    "exp.fi_period": "January – February 2026",
    "exp.fi_m1": "Designed web interfaces for practical projects, including a clinic and a fitness booking application.",
    "exp.fi_m2": "Developed personas and user journeys to understand user needs.",
    "exp.fi_m3": "Created wireframes and prototypes to structure pages, features and navigation.",
    "exp.fi_m4": "Contributed to the design of a CRM dashboard for a digital agency.",
    "exp.fi_m5": "Applied user-centered design principles and web technologies covered during the program.",
    "exp.unipod_domain": "Entrepreneurship and digital innovation",
    "exp.unipod_m1": "Contributed to the LINK project, a platform promoting employment access, entrepreneurship and SME digitalization in Togo.",
    "exp.unipod_m2": "Worked on the platform's modules, including Talenta-Link, Visio-Link and Digi-Link.",
    "exp.unipod_m3": "Participated in designing a microservices architecture to organize the platform's features and services.",
    "exp.unipod_m4": "Contributed to the business model and solution viability analysis.",
    "exp.unipod_m5": "Applied web technologies, containerization, databases and authentication mechanisms.",
    "exp.upwork_title": "Freelance Translator, Proofreader & Virtual Assistant",
    "exp.upwork_positioning": "Copywriter & Translator (EN-FR) | Proofreading | Virtual Assistant",
    "exp.upwork_country": "Chad",
    "exp.upwork_m1": "Functional testing of a solution related to digital access regulation.",
    "exp.upwork_m2": "Mobile app testing, including an NFC identification solution on Android.",
    "exp.upwork_m3": "English-French translation and content adaptation for clear, natural communication.",
    "exp.upwork_m4": "Proofreading and linguistic revision to improve text quality and accuracy.",
    "exp.upwork_m5": "Virtual assistance, data entry and document management.",
    "exp.upwork_earnings": "Total Earnings",
    "exp.upwork_contracts": "Contracts",
    "exp.upwork_badge": "Badge",
    "projects.subtitle": "Projects spanning Data Analysis, Data Engineering and UI/UX Design",
    "filter.all": "All",
    "filter.engineering": "Data Engineering",
    "projects.show_all": "See all projects",
    "skills.languages": "Languages",
    "skills.data": "Data & BI",
    "skills.networks": "Systems & Networks",
    "skills.tools": "Tools",
    "contact.subtitle": "Open to opportunities in Data Engineering, Data Analysis and IT.",
    "contact.phone": "Phone",
    "footer": "&copy; 2026 Steven Barde. Built with passion for data.",
    "modal.problem": "Problem",
    "modal.solution": "Solution",
    "modal.metrics": "Key Metrics",
    "modal.tech": "Tech Stack",
    "modal.github": "View on GitHub",
    "modal.results": "View results",
    "modal.demo": "Try live demo",
    "formation.master_org": "UTBM · Partnership with EPL",
    "exp.unipod_tags": "<span>Entrepreneurship</span><span>Digital Innovation</span><span>Business Model</span><span>React</span><span>NestJS</span><span>Docker</span><span>MongoDB</span><span>Kafka</span><span>Keycloak</span><span>Microservices</span>",
    "exp.upwork_tags": "<span>Functional Testing</span><span>Mobile App Testing</span><span>English-French Translation</span><span>Proofreading</span><span>Copywriting</span><span>Virtual Assistance</span><span>Data Entry</span><span>Attention to Detail</span>"
  }
};

var PROJECT_I18N = {
  fr: {
    "data-cleaning-chad-health": {
      title: "Nettoyage de données — Indicateurs de santé du Tchad",
      desc: "Nettoyage et préparation de 10 indicateurs de santé du Tchad (2000-2023) extraits de l'API Banque Mondiale. Traitement des valeurs manquantes, outliers IQR, et validation croisée.",
      problem: "Les données de santé publique du Tchad sur la Banque Mondiale contiennent 24,2% de valeurs manquantes, des formats incohérents et des outliers. Impossible d'analyser les tendances sans nettoyage rigoureux.",
      solution: "Pipeline de nettoyage complet : extraction API, interpolation linéaire pour séries temporelles, détection d'outliers par méthode IQR, validation de cohérence (mortalité vs espérance de vie).",
      metrics: [{ value: "240", label: "Lignes" }, { value: "10", label: "Indicateurs" }, { value: "63.8%", label: "Missing réduits" }, { value: "24 ans", label: "Couverture" }],
      results: [
        { title: "Mortalité infantile en baisse", text: "La mortalité infantile au Tchad est passée de 181 pour 1000 en 2000 à 100 pour 1000 en 2023, soit une réduction de 45% en 24 ans grâce aux programmes de vaccination et d'accès aux soins." },
        { title: "Espérance de vie en hausse", text: "L'espérance de vie a progressé de 48 ans en 2000 à 55 ans en 2023. Cette amélioration reflète les progrès en santé maternelle et la lutte contre les maladies infectieuses." },
        { title: "Vaccination rougeole instable", text: "Le taux de vaccination contre la rougeole fluctue entre 16% et 64%, révélant une couverture vaccinale très irrégulière liée aux crises sécuritaires et aux difficultés logistiques." },
        { title: "Mortalité maternelle en recul", text: "La mortalité maternelle a chuté de 1 290 pour 100 000 en 2008 à 780 en 2023. La baisse s'accélère après 2015, coïncidant avec les investissements dans les centres de santé ruraux." },
        { title: "63,8% de valeurs manquantes traitées", text: "Sur les 240 lignes du dataset, 63,8% des cellules manquantes ont été imputées par interpolation linéaire adaptée aux séries temporelles, préservant les tendances réelles." }
      ]
    },
    "hr-analytics-python": {
      title: "Analyse RH — Prédiction d'attrition",
      desc: "Analyse exploratoire des facteurs d'attrition RH avec Python et R. Visualisations avancées, analyse de corrélation, et segmentation par département et satisfaction.",
      problem: "Un dataset RH de 1 470 employés avec 35 variables. Quels facteurs influencent le plus le départ volontaire des employés ?",
      solution: "EDA complète : distributions, corrélations, visualisations croisées (satisfaction × overtime × attrition). Analyse en Python (seaborn) et R (ggplot2) pour comparer les approches.",
      metrics: [{ value: "1,470", label: "Employés" }, { value: "35", label: "Variables" }, { value: "2", label: "Langages" }, { value: "15+", label: "Visualisations" }],
      results: [
        { title: "Âge moyen : 36,9 ans", text: "La distribution des âges suit une loi quasi-normale centrée sur 36,9 ans (médiane 36). La majorité des employés ont entre 28 et 45 ans, avec peu de juniors (<22) ou seniors (>55)." },
        { title: "Salaires : distribution asymétrique", text: "Le salaire mensuel moyen est de $6 503 mais la médiane n'est que de $4 919, indiquant une forte asymétrie à droite. Une minorité de hauts salaires tire la moyenne vers le haut." },
        { title: "Overtime = facteur clé d'attrition", text: "Les employés faisant des heures supplémentaires ont un taux d'attrition 3x plus élevé. C'est le facteur le plus discriminant identifié dans l'analyse croisée." },
        { title: "Satisfaction basse = départ", text: "Les employés avec un score de satisfaction environnementale de 1 (sur 4) quittent l'entreprise 2,5x plus souvent que ceux avec un score de 4." },
        { title: "15+ visualisations produites", text: "Histogrammes, boxplots, heatmaps de corrélation, et graphiques croisés réalisés en parallèle avec Python (seaborn/matplotlib) et R (ggplot2) pour comparer les deux approches." }
      ]
    },
    "sql-rapports-ventes": {
      title: "Rapports de ventes SQL — Base Chinook",
      desc: "Analyse des ventes d'un magasin de musique numérique (Chinook) avec SQL. Requêtes multi-tables, KPIs, segmentation pays/genre/artiste, et dashboard matplotlib.",
      problem: "Un magasin de musique numérique veut comprendre quels pays, genres musicaux et artistes génèrent le plus de revenus, et évaluer la performance des agents de vente.",
      solution: "7 sections de requêtes SQL structurées : exploration, ventes globales, analyse par pays, genres musicaux, top artistes/albums, analyse clients (RFM simplifié), et vue synthèse.",
      metrics: [{ value: "$2 329", label: "CA" }, { value: "412", label: "Factures" }, { value: "24", label: "Pays" }, { value: "7", label: "Sections SQL" }],
      results: [
        { title: "USA domine ($523)", text: "Les USA génèrent 22,5% du CA total ($523,06) avec 13 clients et 91 factures. Le top 5 pays (USA, Canada, France, Brazil, Germany) représente 59% du CA." },
        { title: "Rock = 36% des ventes", text: "Le genre Rock écrase la concurrence avec 835 titres vendus ($826,65). Les 4 premiers genres (Rock, Latin, Metal, Alt & Punk) concentrent 79% des ventes." },
        { title: "Iron Maiden #1 ($139)", text: "Iron Maiden est l'artiste le plus rentable ($138,60, 140 titres vendus), suivi de U2 ($105,93) et Metallica ($90,09)." },
        { title: "Panier moyen : $5,65", text: "Le panier moyen est faible ($5,65), typique du digital. Tous les top clients ont exactement 7 achats avec un panier entre $6 et $7." },
        { title: "3 agents, performance homogène", text: "Jane Peacock ($833, 21 clients), Margaret Park ($775, 20 clients) et Steve Johnson ($720, 18 clients). Écart de seulement 15% entre le meilleur et le moins bon." }
      ]
    },
    "sales-performance-python": {
      title: "Analyse des performances commerciales — Python",
      desc: "Analyse exploratoire des ventes Superstore (9 994 commandes, 2014-2017) avec Python. KPIs, impact des remises, corrélations Pearson, et identification des sous-catégories déficitaires.",
      problem: "Un magasin retail (Superstore) veut comprendre quels produits, régions et segments sont les plus rentables, et identifier les sous-catégories déficitaires et l'impact des remises sur la rentabilité.",
      solution: "EDA complète avec pandas : KPI commerciaux, 6 visualisations (barplots, line charts, scatter, heatmap), analyse des remises par palier, corrélations Pearson (scipy), et analyse croisée Région × Catégorie.",
      metrics: [{ value: "9 994", label: "Commandes" }, { value: "$2,3M", label: "CA" }, { value: "12,5%", label: "Marge" }, { value: "6", label: "Visualisations" }],
      results: [
        { title: "CA : $2 297 201", text: "Le chiffre d'affaires total sur 2014-2017 atteint $2,3M avec un profit de $286 397 (marge 12,5%). Technology est la catégorie la plus rentable (marge 15,6%)." },
        { title: "Remises > 20% = pertes", text: "Les remises supérieures à 20% génèrent systématiquement des pertes. Corrélation Discount ↔ Margin_Pct : r = -0,86 (très forte). Les remises > 30% détruisent en moyenne $160 par commande." },
        { title: "Tables : -$17 725 de pertes", text: "Trois sous-catégories sont déficitaires : Tables (-$17 725), Bookcases (-$3 473) et Supplies (-$1 189). Pertes totales : -$22 387 malgré un CA significatif." },
        { title: "West domine ($108K profit)", text: "La région West génère $108K de profit, portée par Office Supplies et Technology. Central sous-performe avec un profit négatif en Furniture (-$2 871)." },
        { title: "6 visualisations produites", text: "Barplots, line charts double-axe, scatter plots, heatmaps et matrice de corrélation réalisés avec matplotlib et seaborn pour une analyse visuelle complète." }
      ]
    },
    "sales-dashboard-excel": {
      title: "Tableau de bord des ventes — Excel",
      desc: "Dashboard interactif Excel avec tableaux croisés dynamiques, KPIs de vente, et slicers pour filtrage par région, catégorie et période.",
      problem: "Données de vente brutes nécessitant une synthèse visuelle pour identifier les tendances, les produits performants et les régions sous-performantes.",
      solution: "Dashboard Excel complet avec tableaux croisés dynamiques, graphiques dynamiques, slicers interconnectés, et KPIs calculés (CA, marge, croissance YoY).",
      metrics: [{ value: "Excel", label: "Outil" }, { value: "4", label: "KPIs" }, { value: "3", label: "Slicers" }, { value: "6", label: "Graphiques" }],
      results: [
        { title: "CA total : $2 297 201", text: "Le chiffre d'affaires total sur la période 2014-2017 atteint $2,3M répartis sur 5 009 commandes et 793 clients, avec un panier moyen de $458,61." },
        { title: "Marge globale : 12,47%", text: "Le profit total de $286 397 représente une marge de 12,47%. Certaines sous-catégories (Tables, Bookcases) affichent des marges négatives dues aux remises excessives." },
        { title: "Région West en tête", text: "La région West domine avec $252 613 de ventes, suivie par East ($208 291). La région South sous-performe avec $117 299, soit 2x moins que West." },
        { title: "Croissance continue 2014-2017", text: "Les ventes et profits montrent une tendance haussière constante sur 4 ans, avec une accélération notable entre 2016 et 2017." },
        { title: "3 slicers interconnectés", text: "Les filtres Région, Catégorie et Année sont connectés à tous les visuels du dashboard, permettant une exploration interactive instantanée des données." }
      ]
    },
    "wine-quality-acp": {
      title: "Analyse du Profil des Vins — ACP",
      desc: "Analyse en Composantes Principales (ACP) sur 1 599 vins rouges (UCI). Réduction de 11 variables chimiques en 3 axes interprétables. Projections 2D/3D, biplot et loadings avec scikit-learn.",
      problem: "Un producteur de vin rouge veut comprendre quels facteurs chimiques influencent la qualité. Avec 11 variables mesurées sur 1 599 échantillons, l'analyse visuelle directe est impossible.",
      solution: "ACP complète avec scikit-learn : standardisation, extraction des composantes principales, projections 2D/3D colorées par qualité, biplot (cercle des corrélations) et analyse des loadings.",
      metrics: [{ value: "1 599", label: "Vins" }, { value: "11", label: "Variables" }, { value: "3", label: "Composantes" }, { value: "60%", label: "Variance" }],
      results: [
        { title: "PC1 = 28,2% de variance", text: "La première composante capture 28,2% de la variance totale. Elle est dominée par les acides, la densité et l'alcool, représentant le profil chimique global du vin." },
        { title: "3 axes = 60% d'information", text: "Les 3 premières composantes capturent 59,8% de la variance. Le scree plot montre un coude net après PC3. 7 composantes atteignent 95% (seuil Kaiser)." },
        { title: "Alcool = marqueur de qualité", text: "Les vins de haute qualité (7-8) se distinguent par un alcool élevé et une acidité volatile faible. L'ACP confirme ces deux variables comme meilleurs prédicteurs." },
        { title: "PC3 = défauts potentiels", text: "La troisième composante (14,1%) est dominée par les chlorides et l'acidité volatile, marqueurs de défauts organoleptiques dans les vins de basse qualité (3-4)." },
        { title: "Réduction de 73% des features", text: "11 variables réduites à 3 composantes interprétables sans perte majeure d'information. Base solide pour un modèle prédictif ou un clustering K-Means." }
      ]
    },
    "dashboard-powerbi": {
      title: "Dashboard Power BI — Global Superstore",
      desc: "Dashboard interactif Power BI sur les ventes mondiales Global Superstore (25K commandes, 7 marchés). KPIs, évolution temporelle, analyse par catégorie et carte géographique avec filtres interactifs.",
      problem: "Une entreprise de distribution mondiale veut suivre ses performances commerciales sur 7 marchés et 3 segments. Besoin d'un tableau de bord interactif pour piloter $12,64M de ventes.",
      solution: "Dashboard Power BI avec 4 KPIs, line chart (évolution 2011-2014), bar chart (catégories), carte géographique (pays) et slicers cross-filtering (Segment, Market, Category).",
      metrics: [{ value: "$12,64M", label: "Ventes" }, { value: "$1,47M", label: "Profit" }, { value: "11,61%", label: "Marge" }, { value: "25K", label: "Commandes" }],
      results: [
        { title: "CA : $12,64M", text: "Le chiffre d'affaires total sur 2011-2014 atteint $12,64M avec un profit de $1,47M, soit une marge de 11,61% sur plus de 25 000 commandes dans 7 marchés internationaux." },
        { title: "Croissance x2 en 4 ans", text: "Les ventes sont passées de ~$2M en 2011 à ~$4,5M en 2014, avec une accélération notable entre 2013 et 2014. Tendance haussière constante sur toute la période." },
        { title: "Technology en tête", text: "Technology domine les ventes (~$4,7M), suivie par Furniture (~$4,1M) et Office Supplies (~$3,8M). Les trois catégories ont des volumes comparables." },
        { title: "7 marchés couverts", text: "Distribution mondiale avec forte concentration en Amérique du Nord, Europe et APAC. L'Afrique et le LATAM représentent des marchés émergents à développer." },
        { title: "3 filtres interactifs", text: "Les slicers Segment (Consumer, Corporate, Home Office), Market (7 régions) et Category (3 catégories) permettent une exploration dynamique avec cross-filtering." }
      ]
    },
    "sql-adventureworks": {
      title: "SQL Avancé — Performances AdventureWorks",
      desc: "Analyse des performances commerciales AdventureWorks via 15 requêtes SQL avancées sur base SQLite. Window Functions (RANK, NTILE), vues SQL, segmentation clients et dashboard de synthèse.",
      problem: "Une entreprise manufacturière veut analyser ses performances sur 3 000 commandes, 500 clients et 9 régions. Besoin de requêtes SQL avancées pour extraire des insights sur les ventes et la rentabilité.",
      solution: "15 requêtes SQL avancées (jointures, agrégations, window functions, CASE WHEN, sous-requêtes) + 3 vues SQL pour rapports automatisés + dashboard de synthèse avec 6 graphiques et 4 KPIs.",
      metrics: [{ value: "15", label: "Requêtes" }, { value: "9", label: "Tables" }, { value: "3", label: "Vues SQL" }, { value: "497", label: "Clients" }],
      results: [
        { title: "140 240 $ de revenus", text: "Revenu total sur 2 796 commandes avec un panier moyen de 17,53 $. 497 clients actifs répartis dans 9 régions et 2 segments (Individual 64%, Store 36%)." },
        { title: "15 requêtes SQL avancées", text: "Jointures complexes, agrégations multi-niveaux, Window Functions (RANK, NTILE, SUM OVER), CASE WHEN, sous-requêtes et 3 vues SQL pour l'automatisation des rapports." },
        { title: "Components en tête", text: "Components domine les ventes (41 259 $), suivi par Clothing (35 408 $), Accessories (33 539 $) et Bikes (30 034 $). Handlebars et Bottles en tête des sous-catégories." },
        { title: "Retours à auditer", text: "Taux de retour élevés sur Mountain-200 Silver (62%) et HL Handlebar (62%). Indicateur de problèmes de qualité nécessitant une analyse approfondie." },
        { title: "Central mène en 2024", text: "La région Central en tête (5 769 $), suivie par Northeast (5 459 $). Distribution relativement équilibrée entre les 9 régions avec France et Northwest en retrait." }
      ]
    },
    "customer-segmentation": {
      title: "Segmentation Clients par Clustering",
      desc: "Segmentation de 200 clients par K-Means (K=5), CAH et DBSCAN. Identification de 5 profils d'achat distincts avec PCA pour visualisation. Silhouette Score de 0.398.",
      problem: "Un centre commercial veut segmenter ses 200 clients selon leur comportement d'achat (revenu annuel, score de dépense). Besoin d'identifier des profils distincts pour adapter les stratégies marketing.",
      solution: "Clustering non supervisé avec 3 algorithmes (K-Means, CAH Ward, DBSCAN), standardisation, méthode du coude + silhouette, PCA 2D pour comparaison visuelle des résultats.",
      metrics: [{ value: "200", label: "Clients" }, { value: "5", label: "Segments" }, { value: "0.398", label: "Silhouette" }, { value: "3", label: "Algorithmes" }],
      results: [
        { title: "5 segments identifiés", text: "K-Means (K=5) identifie 5 profils d'achat distincts : Clients Prudents (20%), Dépensiers Modestes (19%), Riches Économes (14%), Clients Premium (28.5%) et Profil Standard (18.5%)." },
        { title: "Silhouette = 0.398", text: "K-Means obtient le meilleur score de silhouette (0.3979) contre 0.3584 pour la CAH. DBSCAN identifie 8 clusters avec 51 outliers (25.5%)." },
        { title: "PCA : 76% de variance", text: "Les 2 premières composantes principales capturent environ 76% de la variance. La projection 2D permet une visualisation claire de la séparation entre segments." },
        { title: "Clients Premium = cible prioritaire", text: "Le segment Clients Premium (28.5%) combine revenu élevé et score de dépense élevé. Cible prioritaire pour les campagnes de fidélisation et le cross-selling." },
        { title: "3 algorithmes comparés", text: "K-Means offre les meilleurs résultats quantitatifs. La CAH confirme la structure via le dendrogramme. DBSCAN détecte les comportements atypiques (51 outliers)." }
      ]
    },
    "house-price-regression": {
      title: "Prédiction des Prix Immobiliers — Régression Linéaire",
      desc: "Modélisation des prix immobiliers (Boston Housing, 506 obs.) par régression linéaire multiple, Ridge et Lasso. R² = 0.843, RMSE = 3.18, validation croisée 10-fold.",
      problem: "Un acteur immobilier veut estimer le prix médian des maisons à partir de 13 caractéristiques (taux de criminalité, nombre de pièces, distance aux centres d'emploi). Besoin d'un modèle prédictif fiable.",
      solution: "Régression linéaire simple puis multiple, régularisation Ridge et Lasso, analyse OLS avec statsmodels, validation croisée 10-fold et importance des variables par permutation.",
      metrics: [{ value: "506", label: "Observations" }, { value: "0.843", label: "R²" }, { value: "3.18", label: "RMSE" }, { value: "13", label: "Features" }],
      results: [
        { title: "R² = 0.843", text: "La régression multiple explique 84.3% de la variance des prix. Amélioration majeure vs régression simple sur RM seul (R² = 0.050). RMSE de 3.18k$ sur le jeu de test." },
        { title: "LSTAT = facteur clé", text: "Le pourcentage de population à bas revenus (LSTAT) est le prédicteur le plus important, suivi par DIS (distance centres d'emploi) et RAD (accès autoroutes)." },
        { title: "OLS : R² = 0.879", text: "Le modèle OLS (statsmodels) atteint R² = 0.879 avec 11 variables significatives (p < 0.05). F-statistic = 108.1, confirmant la significativité globale du modèle." },
        { title: "Validation croisée stable", text: "CV 10-fold : R² moyen de 0.878 pour la régression linéaire, 0.878 pour Ridge et 0.871 pour Lasso. Modèle robuste et stable entre les folds." },
        { title: "Ridge vs Lasso", text: "Ridge (R² = 0.842) et Lasso (R² = 0.836) montrent des performances proches. La régularisation n'apporte pas de gain significatif, suggérant peu de multicolinéarité problématique." }
      ]
    },
    "credit-default-logistic": {
      title: "Prédiction des Défauts de Paiement — Régression Logistique",
      desc: "Classification binaire sur 30 000 clients bancaires (taux de défaut 3.7%). Régression logistique avec class_weight='balanced', optimisation du seuil, AUC-ROC = 0.719.",
      problem: "Une banque veut prédire les défauts de paiement parmi 30 000 clients de cartes de crédit. Données fortement déséquilibrées (96.3% non-défaut vs 3.7% défaut).",
      solution: "Régression logistique avec pondération des classes, optimisation du seuil de décision (F1 max), analyse des odds ratios, validation croisée stratifiée 5-fold et matrice de confusion.",
      metrics: [{ value: "30 000", label: "Clients" }, { value: "0.719", label: "AUC-ROC" }, { value: "0.83", label: "Seuil optimal" }, { value: "3.7%", label: "Taux défaut" }],
      results: [
        { title: "AUC-ROC = 0.719", text: "Le modèle atteint un AUC-ROC de 0.7194, indiquant une capacité discriminante correcte entre défauts et non-défauts malgré le fort déséquilibre des classes." },
        { title: "Seuil optimal = 0.83", text: "L'optimisation du seuil de décision identifie 0.83 comme seuil maximisant le F1-score (0.2879), améliorant significativement le compromis précision/rappel." },
        { title: "PAY_0 = premier prédicteur", text: "L'historique de paiement du mois précédent (PAY_0) est le facteur le plus déterminant du défaut, suivi par BILL_AMT1 (montant facturé) et LIMIT_BAL (plafond crédit)." },
        { title: "Recall = 58.5%", text: "Avec le seuil par défaut (0.5), le modèle détecte 58.5% des vrais défauts (recall) au prix d'une précision de 9.1%. Le seuil optimisé améliore ce compromis." },
        { title: "CV stratifiée stable", text: "Validation croisée 5-fold : AUC moyen de 0.717 (std = 0.013), F1 moyen de 0.152, accuracy moyenne de 0.766. Résultats stables entre les folds." }
      ]
    },
    "sales-forecasting-timeseries": {
      title: "Prévision des Ventes — Séries Temporelles",
      desc: "Prévision des ventes hebdomadaires (208 semaines) avec ARIMA, SARIMA, Holt-Winters et modèle Prophet-like. Meilleur modèle : Holt-Winters (RMSE = 1 443).",
      problem: "Un magasin veut prévoir ses ventes sur 6 mois à partir de 4 ans d'historique hebdomadaire (2019-2022). Saisonnalité annuelle et impact COVID à modéliser.",
      solution: "Décomposition saisonnière, tests de stationnarité (ADF), analyse ACF/PACF, puis 4 modèles : ARIMA(1,1,1), SARIMA(1,1,1)(1,1,0,52), Holt-Winters et Prophet-like (tendance + Fourier).",
      metrics: [{ value: "208", label: "Semaines" }, { value: "1 443", label: "RMSE" }, { value: "4", label: "Modèles" }, { value: "52", label: "Période" }],
      results: [
        { title: "Holt-Winters : meilleur RMSE", text: "Holt-Winters (additif, période 52) obtient le meilleur RMSE de 1 443, devant ARIMA (1 470), SARIMA (1 723) et Prophet-like (2 072)." },
        { title: "Saisonnalité 52 semaines", text: "La décomposition additive révèle une saisonnalité annuelle claire avec pics en été (juillet) et fin d'année (décembre). Période confirmée à 52 semaines." },
        { title: "Impact COVID détecté", text: "Chute de ~3 500 unités au Q1-Q2 2020 (mars-juin). Le modèle capture le choc exogène et la reprise progressive au second semestre 2020." },
        { title: "ARIMA(1,1,1) : MAPE 23.9%", text: "ARIMA simple obtient un MAPE de 23.87%, compétitif malgré l'absence de composante saisonnière explicite. La différenciation (d=1) rend la série stationnaire (ADF confirmé)." },
        { title: "Tendance croissante +8/sem", text: "Tendance haussière de +8 unités/semaine avec accélération quadratique. Ventes moyennes de 5 791 unités, variant de 1 151 à 9 543 unités." }
      ]
    },
    "shelfflow-library": {
      title: "ShelfFlow — Gestion de Bibliothèque",
      desc: "Application Python/Streamlit de gestion de bibliothèque personnelle. CRUD complet, persistance JSON atomique, interface bilingue FR/EN, 14 tests pytest.",
      problem: "Un développeur a besoin d'un système fiable pour gérer une collection de livres techniques avec opérations CRUD, validation robuste et persistance sûre des données.",
      solution: "Architecture Python modulaire (classes Book, Library) avec écriture atomique, interface Streamlit bilingue, recherche/tri/filtrage, et suite de tests unitaires + robustesse.",
      metrics: [{ value: "14", label: "Tests" }, { value: "CRUD", label: "Opérations" }, { value: "2", label: "Langues" }, { value: "Atomique", label: "Persistance" }],
      results: [
        { title: "CRUD complet + validation", text: "Ajout, lecture, mise à jour et suppression de livres avec validation des champs obligatoires et détection de doublons case-insensitive." },
        { title: "Écriture atomique", text: "Sauvegarde via tempfile + os.fsync + os.replace garantissant l'intégrité des données même en cas de crash pendant l'écriture." },
        { title: "14 tests (pytest)", text: "8 tests unitaires CRUD + 6 tests de robustesse couvrant JSON corrompu, doublons, champs vides, mises à jour conflictuelles et fichiers manquants." },
        { title: "Interface bilingue Streamlit", text: "Interface web moderne avec KPIs, tableau interactif, recherche, tri multi-critères, graphiques et support complet français/anglais." },
        { title: "Architecture modulaire", text: "Séparation claire en modules : Book (modèle), Library (CRUD + persistance), main (CLI), app.py (Streamlit). Code maintenable et extensible." }
      ]
    },
    "sql-library-database": {
      title: "LibraryDB — Base de Données Bibliothèque",
      desc: "Système de gestion de bibliothèque relationnelle avec SQLite. Schema normalisé (5 tables), requêtes analytiques avancées, vues SQL et interface Streamlit interactive bilingue.",
      problem: "Une bibliothèque universitaire a besoin d'un système pour gérer son catalogue, suivre les emprunts et identifier les retards. Des analyses sur les habitudes de lecture et l'activité mensuelle sont nécessaires.",
      solution: "Schema relationnel normalisé (3NF) avec 5 tables, 5 index d'optimisation, 8 requêtes analytiques avancées, 4 vues SQL et une application Streamlit bilingue avec dashboard, catalogue, suivi des emprunts et console SQL.",
      metrics: [{ value: "5", label: "Tables" }, { value: "8", label: "Requêtes" }, { value: "4", label: "Vues SQL" }, { value: "5", label: "Index" }],
      results: [
        { title: "Schema normalisé 3NF", text: "5 tables (authors, categories, books, borrowers, loans) avec clés étrangères, contraintes d'intégrité et index sur les colonnes de jointure et de filtre." },
        { title: "8 requêtes analytiques", text: "Jointures multi-tables, agrégations GROUP BY, sous-requêtes, fonctions de date (julianday), CASE WHEN, GROUP_CONCAT et calculs de pourcentage." },
        { title: "4 vues SQL", text: "v_catalog (catalogue avec disponibilité), v_active_loans (emprunts actifs), v_author_stats (statistiques auteurs), v_dashboard (KPIs agrégés)." },
        { title: "Console SQL interactive", text: "Les utilisateurs peuvent écrire et exécuter leurs propres requêtes SQL sur la base en lecture seule, avec affichage des résultats en tableau." },
        { title: "Détection des retards", text: "Calcul automatique des jours de retard via julianday, mise en évidence visuelle des emprunts en retard et suivi en temps réel des échéances." }
      ]
    },
    "future-ux-03": {
      title: "Dashboard CRM — Design UI",
      desc: "Design d'interface pour un dashboard CRM : gestion des contacts, pipeline de ventes, et métriques de performance. Maquettes haute fidélité sur Figma.",
      problem: "Besoin d'une interface CRM intuitive qui présente les données clés (contacts, opportunités, pipeline) sans surcharger l'utilisateur.",
      solution: "Design system complet avec composants réutilisables, palette de couleurs accessible, et layouts responsive. Navigation par onglets, cards pour les métriques, et table interactive pour les contacts.",
      metrics: [{ value: "Figma", label: "Outil" }, { value: "8+", label: "Écrans" }, { value: "UI/UX", label: "Discipline" }, { value: "Desktop", label: "Format" }]
    },
    "future-ux-02": {
      title: "Application de réservation mobile — Design UI",
      desc: "Design mobile-first d'une application de prise de rendez-vous. Flux utilisateur complet : recherche, sélection de créneau, confirmation et notifications.",
      problem: "Les utilisateurs ont besoin d'un processus de réservation simple et rapide sur mobile, avec confirmation instantanée et rappels.",
      solution: "App mobile avec flux en 3 étapes : recherche du prestataire, sélection du créneau (calendrier), confirmation + paiement. Design épuré avec micro-interactions.",
      metrics: [{ value: "Mobile", label: "Plateforme" }, { value: "6+", label: "Écrans" }, { value: "3", label: "Étapes" }, { value: "UI/UX", label: "Discipline" }]
    },
    "future-ux-01": {
      title: "Refonte de site vitrine",
      desc: "Redesign complet d'un site vitrine pour un service local. Approche mobile-first, optimisation SEO, et intégration de formulaire de contact.",
      problem: "Site existant non responsive, temps de chargement lent, et taux de conversion bas sur le formulaire de contact.",
      solution: "Redesign mobile-first avec structure SEO optimisée, formulaire simplifié (3 champs), et call-to-action visible. Palette de couleurs modernisée et typographie lisible.",
      metrics: [{ value: "Web", label: "Plateforme" }, { value: "5+", label: "Pages" }, { value: "Responsive", label: "Layout" }, { value: "UI/UX", label: "Discipline" }]
    }
  },
  en: {
    "data-cleaning-chad-health": {
      title: "Data Cleaning — Chad Health Indicators",
      desc: "Cleaning and preparation of 10 health indicators for Chad (2000-2023) from the World Bank API. Missing value treatment, IQR outlier detection, and cross-validation.",
      problem: "Chad's public health data on the World Bank contains 24.2% missing values, inconsistent formats and outliers. Impossible to analyze trends without rigorous cleaning.",
      solution: "Complete cleaning pipeline: API extraction, linear interpolation for time series, IQR outlier detection, consistency validation (mortality vs life expectancy).",
      metrics: [{ value: "240", label: "Rows" }, { value: "10", label: "Indicators" }, { value: "63.8%", label: "Missing reduced" }, { value: "24 yrs", label: "Coverage" }],
      results: [
        { title: "Infant mortality declining", text: "Chad's infant mortality dropped from 181 per 1,000 in 2000 to 100 per 1,000 in 2023 — a 45% reduction over 24 years thanks to vaccination programs and improved healthcare access." },
        { title: "Life expectancy rising", text: "Life expectancy increased from 48 years in 2000 to 55 years in 2023. This improvement reflects progress in maternal health and the fight against infectious diseases." },
        { title: "Measles vaccination unstable", text: "The measles vaccination rate fluctuates between 16% and 64%, revealing very irregular coverage linked to security crises and logistical challenges." },
        { title: "Maternal mortality declining", text: "Maternal mortality fell from 1,290 per 100,000 in 2008 to 780 in 2023. The decline accelerated after 2015, coinciding with investments in rural health centers." },
        { title: "63.8% missing values treated", text: "Out of 240 rows in the dataset, 63.8% of missing cells were imputed using linear interpolation adapted for time series, preserving actual trends." }
      ]
    },
    "hr-analytics-python": {
      title: "HR Analytics — Attrition Prediction",
      desc: "Exploratory analysis of HR attrition factors with Python and R. Advanced visualizations, correlation analysis, and segmentation by department and satisfaction.",
      problem: "An HR dataset of 1,470 employees with 35 variables. Which factors most influence voluntary employee departure?",
      solution: "Complete EDA: distributions, correlations, cross-visualizations (satisfaction × overtime × attrition). Analysis in Python (seaborn) and R (ggplot2) to compare approaches.",
      metrics: [{ value: "1,470", label: "Employees" }, { value: "35", label: "Variables" }, { value: "2", label: "Languages" }, { value: "15+", label: "Visualizations" }],
      results: [
        { title: "Average age: 36.9 years", text: "The age distribution follows a near-normal curve centered on 36.9 years (median 36). Most employees are between 28 and 45, with few juniors (<22) or seniors (>55)." },
        { title: "Salaries: skewed distribution", text: "Average monthly salary is $6,503 but the median is only $4,919, indicating strong right skew. A minority of high earners pulls the average upward." },
        { title: "Overtime = key attrition factor", text: "Employees working overtime have a 3x higher attrition rate. This is the most discriminating factor identified in the cross-analysis." },
        { title: "Low satisfaction = departure", text: "Employees with an environment satisfaction score of 1 (out of 4) leave 2.5x more often than those with a score of 4." },
        { title: "15+ visualizations produced", text: "Histograms, boxplots, correlation heatmaps, and cross-charts produced in parallel with Python (seaborn/matplotlib) and R (ggplot2) to compare both approaches." }
      ]
    },
    "sql-rapports-ventes": {
      title: "SQL Sales Reports — Chinook Database",
      desc: "Sales analysis of a digital music store (Chinook) with SQL. Multi-table queries, KPIs, country/genre/artist segmentation, and matplotlib dashboard.",
      problem: "A digital music store wants to understand which countries, music genres and artists generate the most revenue, and evaluate sales agent performance.",
      solution: "7 structured SQL query sections: exploration, global sales, country analysis, music genres, top artists/albums, customer analysis (simplified RFM), and summary view.",
      metrics: [{ value: "$2,329", label: "Revenue" }, { value: "412", label: "Invoices" }, { value: "24", label: "Countries" }, { value: "7", label: "SQL Sections" }],
      results: [
        { title: "USA dominates ($523)", text: "The USA generates 22.5% of total revenue ($523.06) with 13 customers and 91 invoices. The top 5 countries (USA, Canada, France, Brazil, Germany) account for 59% of revenue." },
        { title: "Rock = 36% of sales", text: "Rock crushes the competition with 835 tracks sold ($826.65). The top 4 genres (Rock, Latin, Metal, Alt & Punk) concentrate 79% of sales." },
        { title: "Iron Maiden #1 ($139)", text: "Iron Maiden is the most profitable artist ($138.60, 140 tracks sold), followed by U2 ($105.93) and Metallica ($90.09)." },
        { title: "Average basket: $5.65", text: "The average basket is low ($5.65), typical of digital. All top customers have exactly 7 purchases with baskets between $6 and $7." },
        { title: "3 agents, even performance", text: "Jane Peacock ($833, 21 customers), Margaret Park ($775, 20 customers) and Steve Johnson ($720, 18 customers). Only 15% gap between best and worst." }
      ]
    },
    "sales-performance-python": {
      title: "Sales Performance Analysis — Python",
      desc: "Exploratory analysis of Superstore sales (9,994 orders, 2014-2017) with Python. KPIs, discount impact, Pearson correlations, and loss-making sub-category identification.",
      problem: "A retail store (Superstore) wants to understand which products, regions and segments are most profitable, and identify loss-making sub-categories and the impact of discounts on profitability.",
      solution: "Complete EDA with pandas: business KPIs, 6 visualizations (bar plots, line charts, scatter, heatmap), discount analysis by tier, Pearson correlations (scipy), and Region × Category cross-analysis.",
      metrics: [{ value: "9,994", label: "Orders" }, { value: "$2.3M", label: "Revenue" }, { value: "12.5%", label: "Margin" }, { value: "6", label: "Visualizations" }],
      results: [
        { title: "Revenue: $2,297,201", text: "Total revenue over 2014-2017 reached $2.3M with $286,397 profit (12.5% margin). Technology is the most profitable category (15.6% margin)." },
        { title: "Discounts > 20% = losses", text: "Discounts above 20% systematically generate losses. Discount ↔ Margin_Pct correlation: r = -0.86 (very strong). Discounts > 30% destroy an average of $160 per order." },
        { title: "Tables: -$17,725 in losses", text: "Three sub-categories are unprofitable: Tables (-$17,725), Bookcases (-$3,473) and Supplies (-$1,189). Total losses: -$22,387 despite significant revenue." },
        { title: "West leads ($108K profit)", text: "The West region generates $108K in profit, driven by Office Supplies and Technology. Central underperforms with negative Furniture profit (-$2,871)." },
        { title: "6 visualizations produced", text: "Bar plots, dual-axis line charts, scatter plots, heatmaps and correlation matrix created with matplotlib and seaborn for complete visual analysis." }
      ]
    },
    "sales-dashboard-excel": {
      title: "Sales Dashboard — Excel",
      desc: "Interactive Excel dashboard with pivot tables, sales KPIs, and slicers for filtering by region, category and time period.",
      problem: "Raw sales data requiring visual synthesis to identify trends, top-performing products and underperforming regions.",
      solution: "Complete Excel dashboard with pivot tables, dynamic charts, interconnected slicers, and calculated KPIs (revenue, margin, YoY growth).",
      metrics: [{ value: "Excel", label: "Tool" }, { value: "4", label: "KPIs" }, { value: "3", label: "Slicers" }, { value: "6", label: "Charts" }],
      results: [
        { title: "Total revenue: $2,297,201", text: "Total revenue over 2014-2017 reached $2.3M across 5,009 orders and 793 customers, with an average basket of $458.61." },
        { title: "Overall margin: 12.47%", text: "Total profit of $286,397 represents a 12.47% margin. Some sub-categories (Tables, Bookcases) show negative margins due to excessive discounts." },
        { title: "West region leads", text: "The West region dominates with $252,613 in sales, followed by East ($208,291). The South underperforms at $117,299 — 2x less than West." },
        { title: "Continuous growth 2014-2017", text: "Sales and profits show a steady upward trend over 4 years, with a notable acceleration between 2016 and 2017." },
        { title: "3 interconnected slicers", text: "Region, Category and Year filters are connected to all dashboard visuals, enabling instant interactive data exploration." }
      ]
    },
    "wine-quality-acp": {
      title: "Wine Profile Analysis — PCA",
      desc: "Principal Component Analysis (PCA) on 1,599 red wines (UCI). Reducing 11 chemical variables to 3 interpretable axes. 2D/3D projections, biplot and loadings with scikit-learn.",
      problem: "A red wine producer wants to understand which chemical factors influence quality. With 11 variables measured on 1,599 samples, direct visual analysis is impossible.",
      solution: "Complete PCA with scikit-learn: standardization, principal component extraction, 2D/3D projections colored by quality, biplot (correlation circle) and loadings analysis.",
      metrics: [{ value: "1,599", label: "Wines" }, { value: "11", label: "Variables" }, { value: "3", label: "Components" }, { value: "60%", label: "Variance" }],
      results: [
        { title: "PC1 = 28.2% variance", text: "The first component captures 28.2% of total variance. It is dominated by acids, density and alcohol, representing the wine's overall chemical profile." },
        { title: "3 axes = 60% information", text: "The first 3 components capture 59.8% of variance. The scree plot shows a clear elbow after PC3. 7 components reach 95% (Kaiser threshold)." },
        { title: "Alcohol = quality marker", text: "High-quality wines (7-8) stand out with high alcohol and low volatile acidity. PCA confirms these two variables as the best predictors." },
        { title: "PC3 = potential defects", text: "The third component (14.1%) is dominated by chlorides and volatile acidity, markers of organoleptic defects in low-quality wines (3-4)." },
        { title: "73% feature reduction", text: "11 variables reduced to 3 interpretable components without major information loss. Solid foundation for a predictive model or K-Means clustering." }
      ]
    },
    "dashboard-powerbi": {
      title: "Power BI Dashboard — Global Superstore",
      desc: "Interactive Power BI dashboard on Global Superstore worldwide sales (25K orders, 7 markets). KPIs, time trends, category analysis and geographic map with interactive filters.",
      problem: "A global distribution company wants to track commercial performance across 7 markets and 3 segments. Needs an interactive dashboard to monitor $12.64M in sales.",
      solution: "Power BI dashboard with 4 KPIs, line chart (2011-2014 trend), bar chart (categories), geographic map (countries) and cross-filtering slicers (Segment, Market, Category).",
      metrics: [{ value: "$12.64M", label: "Sales" }, { value: "$1.47M", label: "Profit" }, { value: "11.61%", label: "Margin" }, { value: "25K", label: "Orders" }],
      results: [
        { title: "Revenue: $12.64M", text: "Total revenue over 2011-2014 reached $12.64M with $1.47M profit, an 11.61% margin across 25,000+ orders in 7 international markets." },
        { title: "2x growth in 4 years", text: "Sales grew from ~$2M in 2011 to ~$4.5M in 2014, with a notable acceleration between 2013 and 2014. Steady upward trend throughout the period." },
        { title: "Technology leads", text: "Technology dominates sales (~$4.7M), followed by Furniture (~$4.1M) and Office Supplies (~$3.8M). All three categories have comparable volumes." },
        { title: "7 markets covered", text: "Worldwide distribution with strong concentration in North America, Europe and APAC. Africa and LATAM represent emerging markets to develop." },
        { title: "3 interactive filters", text: "Segment (Consumer, Corporate, Home Office), Market (7 regions) and Category (3 categories) slicers enable dynamic exploration with cross-filtering." }
      ]
    },
    "sql-adventureworks": {
      title: "Advanced SQL — AdventureWorks Performance",
      desc: "AdventureWorks commercial performance analysis using 15 advanced SQL queries on SQLite. Window Functions (RANK, NTILE), SQL views, customer segmentation and summary dashboard.",
      problem: "A manufacturing company needs to analyze performance across 3,000 orders, 500 customers and 9 regions. Requires advanced SQL queries to extract insights on sales and profitability.",
      solution: "15 advanced SQL queries (joins, aggregations, window functions, CASE WHEN, subqueries) + 3 SQL views for automated reporting + summary dashboard with 6 charts and 4 KPIs.",
      metrics: [{ value: "15", label: "Queries" }, { value: "9", label: "Tables" }, { value: "3", label: "SQL Views" }, { value: "497", label: "Customers" }],
      results: [
        { title: "$140,240 in revenue", text: "Total revenue across 2,796 orders with an average basket of $17.53. 497 active customers across 9 regions and 2 segments (Individual 64%, Store 36%)." },
        { title: "15 advanced SQL queries", text: "Complex joins, multi-level aggregations, Window Functions (RANK, NTILE, SUM OVER), CASE WHEN, subqueries and 3 SQL views for report automation." },
        { title: "Components leads", text: "Components dominates sales ($41,259), followed by Clothing ($35,408), Accessories ($33,539) and Bikes ($30,034). Handlebars and Bottles top the subcategories." },
        { title: "Returns to audit", text: "High return rates on Mountain-200 Silver (62%) and HL Handlebar (62%). Quality indicator requiring in-depth analysis." },
        { title: "Central leads in 2024", text: "Central region tops sales ($5,769), followed by Northeast ($5,459). Relatively balanced distribution across 9 regions with France and Northwest lagging." }
      ]
    },
    "customer-segmentation": {
      title: "Customer Segmentation by Clustering",
      desc: "Segmentation of 200 customers using K-Means (K=5), Hierarchical Clustering and DBSCAN. Identification of 5 distinct purchase profiles with PCA visualization. Silhouette Score of 0.398.",
      problem: "A shopping mall wants to segment its 200 customers based on purchasing behavior (annual income, spending score). Need to identify distinct profiles for targeted marketing strategies.",
      solution: "Unsupervised clustering with 3 algorithms (K-Means, Agglomerative Ward, DBSCAN), standardization, elbow method + silhouette analysis, PCA 2D for visual comparison of results.",
      metrics: [{ value: "200", label: "Customers" }, { value: "5", label: "Segments" }, { value: "0.398", label: "Silhouette" }, { value: "3", label: "Algorithms" }],
      results: [
        { title: "5 segments identified", text: "K-Means (K=5) identifies 5 distinct purchase profiles: Cautious Customers (20%), Modest Spenders (19%), Wealthy Savers (14%), Premium Customers (28.5%) and Standard Profile (18.5%)." },
        { title: "Silhouette = 0.398", text: "K-Means achieves the best silhouette score (0.3979) vs 0.3584 for hierarchical clustering. DBSCAN identifies 8 clusters with 51 outliers (25.5%)." },
        { title: "PCA: 76% variance", text: "The first 2 principal components capture approximately 76% of variance. The 2D projection provides clear visualization of segment separation." },
        { title: "Premium Customers = priority target", text: "The Premium Customers segment (28.5%) combines high income and high spending score. Priority target for loyalty campaigns and cross-selling." },
        { title: "3 algorithms compared", text: "K-Means delivers the best quantitative results. Hierarchical clustering confirms the structure via dendrogram. DBSCAN detects atypical behaviors (51 outliers)." }
      ]
    },
    "house-price-regression": {
      title: "House Price Prediction — Linear Regression",
      desc: "House price modeling (Boston Housing, 506 obs.) using multiple linear regression, Ridge and Lasso. R² = 0.843, RMSE = 3.18, 10-fold cross-validation.",
      problem: "A real estate stakeholder wants to estimate median house prices from 13 features (crime rate, number of rooms, distance to employment centers). Need for a reliable predictive model.",
      solution: "Simple then multiple linear regression, Ridge and Lasso regularization, OLS analysis with statsmodels, 10-fold cross-validation and permutation feature importance.",
      metrics: [{ value: "506", label: "Observations" }, { value: "0.843", label: "R²" }, { value: "3.18", label: "RMSE" }, { value: "13", label: "Features" }],
      results: [
        { title: "R² = 0.843", text: "Multiple regression explains 84.3% of price variance. Major improvement vs simple regression on RM only (R² = 0.050). RMSE of $3.18k on the test set." },
        { title: "LSTAT = key factor", text: "The percentage of lower-status population (LSTAT) is the most important predictor, followed by DIS (distance to employment centers) and RAD (highway access)." },
        { title: "OLS: R² = 0.879", text: "The OLS model (statsmodels) reaches R² = 0.879 with 11 significant variables (p < 0.05). F-statistic = 108.1, confirming overall model significance." },
        { title: "Stable cross-validation", text: "10-fold CV: mean R² of 0.878 for linear regression, 0.878 for Ridge and 0.871 for Lasso. Robust and stable model across folds." },
        { title: "Ridge vs Lasso", text: "Ridge (R² = 0.842) and Lasso (R² = 0.836) show similar performance. Regularization brings no significant gain, suggesting low problematic multicollinearity." }
      ]
    },
    "credit-default-logistic": {
      title: "Credit Default Prediction — Logistic Regression",
      desc: "Binary classification on 30,000 bank clients (3.7% default rate). Logistic regression with class_weight='balanced', threshold optimization, AUC-ROC = 0.719.",
      problem: "A bank wants to predict payment defaults among 30,000 credit card clients. Highly imbalanced data (96.3% non-default vs 3.7% default).",
      solution: "Logistic regression with class weighting, decision threshold optimization (max F1), odds ratio analysis, stratified 5-fold cross-validation and confusion matrix.",
      metrics: [{ value: "30,000", label: "Clients" }, { value: "0.719", label: "AUC-ROC" }, { value: "0.83", label: "Optimal threshold" }, { value: "3.7%", label: "Default rate" }],
      results: [
        { title: "AUC-ROC = 0.719", text: "The model achieves an AUC-ROC of 0.7194, indicating adequate discriminative ability between defaults and non-defaults despite the severe class imbalance." },
        { title: "Optimal threshold = 0.83", text: "Threshold optimization identifies 0.83 as the threshold maximizing F1-score (0.2879), significantly improving the precision/recall trade-off." },
        { title: "PAY_0 = top predictor", text: "Previous month payment status (PAY_0) is the strongest default predictor, followed by BILL_AMT1 (billed amount) and LIMIT_BAL (credit limit)." },
        { title: "Recall = 58.5%", text: "With default threshold (0.5), the model detects 58.5% of true defaults (recall) at the cost of 9.1% precision. The optimized threshold improves this trade-off." },
        { title: "Stable stratified CV", text: "5-fold cross-validation: mean AUC of 0.717 (std = 0.013), mean F1 of 0.152, mean accuracy of 0.766. Stable results across folds." }
      ]
    },
    "sales-forecasting-timeseries": {
      title: "Sales Forecasting — Time Series",
      desc: "Weekly sales forecasting (208 weeks) with ARIMA, SARIMA, Holt-Winters and Prophet-like model. Best model: Holt-Winters (RMSE = 1,443).",
      problem: "A store wants to forecast sales over 6 months using 4 years of weekly history (2019-2022). Annual seasonality and COVID impact to model.",
      solution: "Seasonal decomposition, stationarity tests (ADF), ACF/PACF analysis, then 4 models: ARIMA(1,1,1), SARIMA(1,1,1)(1,1,0,52), Holt-Winters and Prophet-like (trend + Fourier).",
      metrics: [{ value: "208", label: "Weeks" }, { value: "1,443", label: "RMSE" }, { value: "4", label: "Models" }, { value: "52", label: "Period" }],
      results: [
        { title: "Holt-Winters: best RMSE", text: "Holt-Winters (additive, period 52) achieves the best RMSE of 1,443, ahead of ARIMA (1,470), SARIMA (1,723) and Prophet-like (2,072)." },
        { title: "52-week seasonality", text: "Additive decomposition reveals clear annual seasonality with peaks in summer (July) and year-end (December). Period confirmed at 52 weeks." },
        { title: "COVID impact detected", text: "~3,500 unit drop in Q1-Q2 2020 (March-June). The model captures the exogenous shock and the gradual recovery in H2 2020." },
        { title: "ARIMA(1,1,1): MAPE 23.9%", text: "Simple ARIMA achieves a MAPE of 23.87%, competitive despite lacking an explicit seasonal component. Differencing (d=1) renders the series stationary (ADF confirmed)." },
        { title: "Growing trend +8/week", text: "Upward trend of +8 units/week with quadratic acceleration. Average sales of 5,791 units, ranging from 1,151 to 9,543 units." }
      ]
    },
    "shelfflow-library": {
      title: "ShelfFlow — Library Management",
      desc: "Python/Streamlit personal library management app. Full CRUD, atomic JSON persistence, bilingual EN/FR interface, 14 pytest tests.",
      problem: "A developer needs a reliable system to manage a technical book collection with CRUD operations, robust validation and safe data persistence.",
      solution: "Modular Python architecture (Book, Library classes) with atomic writes, bilingual Streamlit interface, search/sort/filter, and unit + robustness test suite.",
      metrics: [{ value: "14", label: "Tests" }, { value: "CRUD", label: "Operations" }, { value: "2", label: "Languages" }, { value: "Atomic", label: "Persistence" }],
      results: [
        { title: "Full CRUD + validation", text: "Add, read, update and delete books with required field validation and case-insensitive duplicate detection." },
        { title: "Atomic writes", text: "Saving via tempfile + os.fsync + os.replace guarantees data integrity even if a crash occurs during writing." },
        { title: "14 tests (pytest)", text: "8 CRUD unit tests + 6 robustness tests covering corrupted JSON, duplicates, empty fields, conflicting updates and missing files." },
        { title: "Bilingual Streamlit UI", text: "Modern web interface with KPIs, interactive table, search, multi-criteria sorting, charts and full English/French support." },
        { title: "Modular architecture", text: "Clear module separation: Book (model), Library (CRUD + persistence), main (CLI), app.py (Streamlit). Maintainable and extensible code." }
      ]
    },
    "sql-library-database": {
      title: "LibraryDB — Library Database",
      desc: "Relational library management system with SQLite. Normalized schema (5 tables), advanced analytical queries, SQL views and interactive bilingual Streamlit interface.",
      problem: "A university library needs a system to manage its catalog, track loans and identify overdue books. Analytics on reading habits and monthly activity are required.",
      solution: "Normalized relational schema (3NF) with 5 tables, 5 optimization indexes, 8 advanced analytical queries, 4 SQL views and a bilingual Streamlit app with dashboard, catalog, loan tracking and SQL console.",
      metrics: [{ value: "5", label: "Tables" }, { value: "8", label: "Queries" }, { value: "4", label: "SQL Views" }, { value: "5", label: "Indexes" }],
      results: [
        { title: "Normalized 3NF schema", text: "5 tables (authors, categories, books, borrowers, loans) with foreign keys, integrity constraints and indexes on join and filter columns." },
        { title: "8 analytical queries", text: "Multi-table joins, GROUP BY aggregations, subqueries, date functions (julianday), CASE WHEN, GROUP_CONCAT and percentage calculations." },
        { title: "4 SQL views", text: "v_catalog (catalog with availability), v_active_loans (active loans), v_author_stats (author statistics), v_dashboard (aggregated KPIs)." },
        { title: "Interactive SQL console", text: "Users can write and execute their own SQL queries on the read-only database, with results displayed in a table." },
        { title: "Overdue detection", text: "Automatic overdue day calculation via julianday, visual highlighting of overdue loans and real-time deadline tracking." }
      ]
    },
    "future-ux-03": {
      title: "CRM Dashboard — UI Design",
      desc: "Interface design for a CRM dashboard: contact management, sales pipeline, and performance metrics. High-fidelity mockups on Figma.",
      problem: "Need for an intuitive CRM interface that presents key data (contacts, opportunities, pipeline) without overwhelming the user.",
      solution: "Complete design system with reusable components, accessible color palette, and responsive layouts. Tab navigation, metric cards, and interactive contact table.",
      metrics: [{ value: "Figma", label: "Tool" }, { value: "8+", label: "Screens" }, { value: "UI/UX", label: "Discipline" }, { value: "Desktop", label: "Format" }]
    },
    "future-ux-02": {
      title: "Mobile Booking App — UI Design",
      desc: "Mobile-first design for an appointment booking app. Complete user flow: search, slot selection, confirmation and notifications.",
      problem: "Users need a simple and fast mobile booking process with instant confirmation and reminders.",
      solution: "Mobile app with 3-step flow: provider search, slot selection (calendar), confirmation + payment. Clean design with micro-interactions.",
      metrics: [{ value: "Mobile", label: "Platform" }, { value: "6+", label: "Screens" }, { value: "3", label: "Steps" }, { value: "UI/UX", label: "Discipline" }]
    },
    "future-ux-01": {
      title: "Business Website Redesign",
      desc: "Complete redesign of a business website for a local service. Mobile-first approach, SEO optimization, and contact form integration.",
      problem: "Existing site not responsive, slow loading time, and low conversion rate on the contact form.",
      solution: "Mobile-first redesign with optimized SEO structure, simplified form (3 fields), and visible call-to-action. Modernized color palette and readable typography.",
      metrics: [{ value: "Web", label: "Platform" }, { value: "5+", label: "Pages" }, { value: "Responsive", label: "Layout" }, { value: "UI/UX", label: "Discipline" }]
    }
  }
};

function setLang(lang) {
  currentLang = lang;
  var dict = I18N[lang];
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var key = el.dataset.i18n;
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });
  document.getElementById("lang-toggle").innerHTML = (lang === "fr" ? "EN" : "FR") + ' <i class="fas fa-globe"></i>';
  document.documentElement.lang = lang;

  typedEl = document.querySelector(".typed-text");
  if (typedEl) {
    charIndex = 0;
    deleting = false;
  }

  if (modalOverlay) {
    modalOverlay.querySelector(".modal-section:nth-child(1) h3").textContent = dict["modal.problem"];
    modalOverlay.querySelector(".modal-section:nth-child(2) h3").textContent = dict["modal.solution"];
    modalOverlay.querySelector(".modal-section:nth-child(3) h3").textContent = dict["modal.metrics"];
    modalOverlay.querySelector(".modal-section:nth-child(4) h3").textContent = dict["modal.tech"];
    document.getElementById("modal-github").innerHTML = '<i class="fab fa-github"></i> ' + dict["modal.github"];
    var rb = document.getElementById("modal-results-btn");
    if (rb && rb.style.display !== "none") rb.innerHTML = '<i class="fas fa-chart-line"></i> ' + dict["modal.results"];
  }

  renderProjects(document.querySelector(".filter-btn.active").dataset.filter);

  try { localStorage.setItem("portfolio-lang", lang); } catch (e) {}
}

document.getElementById("lang-toggle").addEventListener("click", function () {
  setLang(currentLang === "fr" ? "en" : "fr");
});

/* ══════════════════════════════════════════════════════════
   PROJECTS — only real, completed work
   ══════════════════════════════════════════════════════════ */
var PROJECTS = [
  {
    id: "hr-analytics-python",
    category: "data",
    icon: "fas fa-users-cog",
    image: "img-hr-analytics.webp",
    tags: ["Python", "R", "seaborn", "ggplot2"],
    tech: ["Python 3.x", "pandas", "seaborn", "R", "ggplot2", "dplyr"],
    github: "https://github.com/barde44/portfolio-data-analyst",
    resultsFile: "results/results-hr.html"
  },
  {
    id: "sql-rapports-ventes",
    category: "data",
    icon: "fas fa-database",
    image: "img-sql-ventes.webp",
    tags: ["SQL", "SQLite", "matplotlib", "Chinook"],
    tech: ["SQL", "SQLite", "JOIN", "GROUP BY", "HAVING", "matplotlib"],
    github: "https://github.com/barde44/portfolio-data-analyst",
    resultsFile: "results/results-sql-ventes.html"
  },
  {
    id: "sales-performance-python",
    category: "data",
    icon: "fas fa-chart-line",
    image: "img-sales-performance.webp",
    tags: ["Python", "pandas", "seaborn", "scipy"],
    tech: ["Python 3.x", "pandas", "matplotlib", "seaborn", "scipy"],
    github: "https://github.com/barde44/portfolio-data-analyst",
    resultsFile: "results/results-sales-python.html"
  },
  {
    id: "data-cleaning-chad-health",
    category: "data",
    icon: "fas fa-heartbeat",
    image: "img-chad-health.png",
    tags: ["Python", "pandas", "World Bank API", "Jupyter"],
    tech: ["Python 3.x", "pandas", "numpy", "matplotlib", "seaborn", "requests"],
    github: "https://github.com/barde44/portfolio-data-analyst",
    resultsFile: "results/results-chad.html"
  },
  {
    id: "sales-dashboard-excel",
    category: "data",
    icon: "fas fa-file-excel",
    image: "img-sales-dashboard.png",
    tags: ["Excel", "Pivot Tables", "Dashboard", "KPIs"],
    tech: ["Excel", "Pivot Tables", "Conditional Formatting", "Slicers", "Charts"],
    github: "https://github.com/barde44/portfolio-data-analyst",
    resultsFile: "results/results-sales.html"
  },
  {
    id: "wine-quality-acp",
    category: "data",
    icon: "fas fa-wine-glass-alt",
    image: "img-wine-acp.webp",
    tags: ["Python", "scikit-learn", "ACP/PCA", "matplotlib"],
    tech: ["Python 3.x", "pandas", "numpy", "scikit-learn", "matplotlib", "seaborn"],
    github: "https://github.com/barde44/portfolio-data-analyst",
    resultsFile: "results/results-wine-acp.html"
  },
  {
    id: "dashboard-powerbi",
    category: "data",
    icon: "fas fa-chart-bar",
    image: "img-powerbi-dashboard.png",
    tags: ["Power BI", "DAX", "Power Query", "Dashboard"],
    tech: ["Power BI Desktop", "DAX", "Power Query", "Data Modeling"],
    github: "https://github.com/barde44/portfolio-data-analyst",
    resultsFile: "results/results-powerbi.html"
  },
  {
    id: "sql-adventureworks",
    category: "data",
    icon: "fas fa-database",
    image: "img-sql-adventureworks.webp",
    tags: ["SQL", "SQLite", "Window Functions", "Vues SQL"],
    tech: ["SQL", "SQLite", "Window Functions", "RANK", "NTILE", "Vues SQL", "Python"],
    github: "https://github.com/barde44/portfolio-data-analyst",
    resultsFile: "results/results-sql-adventureworks.html"
  },
  {
    id: "customer-segmentation",
    category: "data",
    icon: "fas fa-users",
    image: "img-customer-segmentation.png",
    tags: ["Python", "scikit-learn", "K-Means", "PCA"],
    tech: ["Python 3.x", "pandas", "scikit-learn", "matplotlib", "seaborn", "scipy"],
    github: "https://github.com/barde44/portfolio-data-analyst",
    resultsFile: "results/results-customer-segmentation.html"
  },
  {
    id: "house-price-regression",
    category: "data",
    icon: "fas fa-home",
    image: "img-house-price-regression.png",
    tags: ["Python", "scikit-learn", "Regression", "statsmodels"],
    tech: ["Python 3.x", "pandas", "scikit-learn", "statsmodels", "matplotlib", "seaborn"],
    github: "https://github.com/barde44/portfolio-data-analyst",
    resultsFile: "results/results-house-price.html"
  },
  {
    id: "credit-default-logistic",
    category: "data",
    icon: "fas fa-credit-card",
    image: "img-credit-default-logistic.png",
    tags: ["Python", "scikit-learn", "Logistic Regression", "AUC-ROC"],
    tech: ["Python 3.x", "pandas", "scikit-learn", "matplotlib", "seaborn", "imbalanced-learn"],
    github: "https://github.com/barde44/portfolio-data-analyst",
    resultsFile: "results/results-credit-default.html"
  },
  {
    id: "sales-forecasting-timeseries",
    category: "data",
    icon: "fas fa-chart-area",
    image: "img-sales-forecasting-timeseries.png",
    tags: ["Python", "statsmodels", "ARIMA", "Time Series"],
    tech: ["Python 3.x", "pandas", "statsmodels", "scikit-learn", "matplotlib"],
    github: "https://github.com/barde44/portfolio-data-analyst",
    resultsFile: "results/results-sales-forecasting.html"
  },
  {
    id: "shelfflow-library",
    category: "engineering",
    icon: "fas fa-book",
    image: "img-shelfflow-library.webp",
    tags: ["Python", "Streamlit", "pytest", "CRUD"],
    tech: ["Python 3.x", "Streamlit", "pandas", "pytest", "JSON"],
    github: "https://github.com/barde44/portfolio-data-engineer",
    resultsFile: "results/results-shelfflow-library.html",
    demoUrl: "https://shelfflow-library.streamlit.app"
  },
  {
    id: "sql-library-database",
    category: "engineering",
    icon: "fas fa-database",
    image: "img-sql-library.png",
    tags: ["SQL", "SQLite", "Streamlit", "Python"],
    tech: ["SQLite", "SQL", "Python 3.x", "Streamlit", "pandas"],
    github: "https://github.com/barde44/portfolio-data-engineer",
    resultsFile: "results/results-sql-library.html",
    demoUrl: "https://librarydb-barde.streamlit.app"
  },
  {
    id: "future-ux-03",
    category: "design",
    icon: "fas fa-th-large",
    image: "img-crm-dashboard.webp",
    tags: ["Figma", "UI/UX", "Dashboard", "CRM"],
    tech: ["Figma", "UI Design", "Design System", "Prototyping"],
    github: "https://github.com/barde44/FUTURE_UX_03",
    resultsFile: "results/results-ux-03.html"
  },
  {
    id: "future-ux-02",
    category: "design",
    icon: "fas fa-mobile-alt",
    image: "img-mobile-booking.jpg",
    tags: ["Figma", "Mobile", "UI/UX", "Prototyping"],
    tech: ["Figma", "Mobile Design", "Prototyping", "User Flows"],
    github: "https://github.com/barde44/FUTURE_UX_02",
    resultsFile: "results/results-ux-02.html"
  },
  {
    id: "future-ux-01",
    category: "design",
    icon: "fas fa-paint-brush",
    image: "img-website-redesign.webp",
    tags: ["Figma", "Web Design", "Responsive", "SEO"],
    tech: ["Figma", "Web Design", "Responsive Design", "SEO", "Prototyping"],
    github: "https://github.com/barde44/FUTURE_UX_01",
    resultsFile: "results/results-ux-01.html"
  }
];

function getProjectText(p) {
  var t = PROJECT_I18N[currentLang][p.id];
  return { title: t.title, desc: t.desc, problem: t.problem, solution: t.solution, metrics: t.metrics, results: t.results || [] };
}

/* ── Render project cards ── */
var PROJECTS_PREVIEW_COUNT = 3;
window._projectsExpanded = false;

function renderProjects(filter, showAll) {
  window._projectsExpanded = !!(filter === "all" && showAll);
  var grid = document.getElementById("projects-grid");
  grid.innerHTML = "";
  var catLabel = { data: "Data & Analytics", engineering: "Data Engineering", design: "UI/UX Design" };
  var filtered = filter === "all" ? PROJECTS : PROJECTS.filter(function (p) { return p.category === filter; });
  var limited = (filter === "all" && !showAll && filtered.length > PROJECTS_PREVIEW_COUNT) ? filtered.slice(0, PROJECTS_PREVIEW_COUNT) : filtered;
  limited.forEach(function (p, i) {
    var t = getProjectText(p);
    var card = document.createElement("div");
    card.className = "project-card fade-in";
    card.dataset.id = p.id;
    card.style.transitionDelay = (i * 0.08) + "s";
    var headerContent = p.image
      ? '<img src="' + p.image + '" alt="" class="project-card-img">'
      : '<div class="project-card-bg"></div><i class="' + p.icon + ' project-card-icon"></i>';
    card.innerHTML =
      '<div class="project-card-header">' + headerContent + '</div>' +
      '<div class="project-card-body">' +
        '<div class="project-card-category">' + (catLabel[p.category] || p.category) + '</div>' +
        '<h3 class="project-card-title">' + t.title + '</h3>' +
        '<p class="project-card-desc">' + t.desc + '</p>' +
        '<div class="project-card-tags">' + p.tags.slice(0, 4).map(function (tag) { return "<span>" + tag + "</span>"; }).join("") + '</div>' +
      '</div>' +
      '<i class="fas fa-arrow-up-right-from-square project-card-arrow"></i>';
    card.addEventListener("click", function () { openModal(p); });
    grid.appendChild(card);
  });
  var oldBtn = document.getElementById("show-all-projects");
  if (oldBtn) oldBtn.remove();
  if (filter === "all" && !showAll && filtered.length > PROJECTS_PREVIEW_COUNT) {
    var btn = document.createElement("button");
    btn.id = "show-all-projects";
    btn.className = "btn btn-primary show-all-btn";
    var dict = I18N[currentLang];
    btn.innerHTML = '<i class="fas fa-th-large"></i> ' + (dict["projects.show_all"] || "Voir tous les projets");
    btn.addEventListener("click", function () { renderProjects("all", true); });
    grid.parentNode.insertBefore(btn, grid.nextSibling);
  }
  setTimeout(function () {
    document.querySelectorAll(".project-card.fade-in").forEach(function (el) { el.classList.add("visible"); });
  }, 100);
}

/* ── Modal ── */
var modalOverlay = null;

function createModal() {
  var dict = I18N[currentLang];
  modalOverlay = document.createElement("div");
  modalOverlay.className = "modal-overlay";
  modalOverlay.id = "project-modal";
  modalOverlay.innerHTML =
    '<div class="modal">' +
      '<button class="modal-close" id="modal-close"><i class="fas fa-times"></i></button>' +
      '<div class="modal-header">' +
        '<span class="modal-badge" id="modal-badge"></span>' +
        '<h2 id="modal-title"></h2>' +
        '<p id="modal-subtitle"></p>' +
      '</div>' +
      '<div class="modal-body">' +
        '<div class="modal-section"><h3>' + dict["modal.problem"] + '</h3><p id="modal-problem"></p></div>' +
        '<div class="modal-section"><h3>' + dict["modal.solution"] + '</h3><p id="modal-solution"></p></div>' +
        '<div class="modal-section"><h3>' + dict["modal.metrics"] + '</h3><div class="modal-metrics" id="modal-metrics"></div></div>' +
        '<div class="modal-section"><h3>' + dict["modal.tech"] + '</h3><div class="tech-tags" id="modal-tech"></div></div>' +
        '<div class="modal-actions"><a href="#" class="btn btn-primary" id="modal-github" target="_blank"><i class="fab fa-github"></i> ' + dict["modal.github"] + '</a><button class="btn btn-secondary" id="modal-results-btn" style="display:none"><i class="fas fa-chart-line"></i> ' + dict["modal.results"] + '</button><a href="#" class="btn btn-secondary" id="modal-demo-btn" target="_blank" style="display:none"><i class="fas fa-play-circle"></i> ' + dict["modal.demo"] + '</a></div>' +
      '</div>' +
    '</div>';
  document.body.appendChild(modalOverlay);
  document.getElementById("modal-close").addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", function (e) {
    if (e.target === modalOverlay) closeModal();
  });
}

function openModal(p) {
  if (!modalOverlay) createModal();
  var t = getProjectText(p);
  var badgeLabels = { data: "Data & Analytics", engineering: "Data Engineering", design: "UI/UX Design" };
  document.getElementById("modal-badge").textContent = badgeLabels[p.category] || p.category;
  document.getElementById("modal-title").textContent = t.title;
  document.getElementById("modal-subtitle").textContent = t.desc;
  document.getElementById("modal-problem").textContent = t.problem;
  document.getElementById("modal-solution").textContent = t.solution;
  document.getElementById("modal-github").href = p.github;

  document.getElementById("modal-metrics").innerHTML = t.metrics.map(function (m) {
    return '<div class="metric-card"><div class="value">' + m.value + '</div><div class="label">' + m.label + '</div></div>';
  }).join("");

  document.getElementById("modal-tech").innerHTML = p.tech.map(function (tag) { return "<span>" + tag + "</span>"; }).join("");

  var dict = I18N[currentLang];
  modalOverlay.querySelector(".modal-section:nth-child(1) h3").textContent = dict["modal.problem"];
  modalOverlay.querySelector(".modal-section:nth-child(2) h3").textContent = dict["modal.solution"];
  modalOverlay.querySelector(".modal-section:nth-child(3) h3").textContent = dict["modal.metrics"];
  modalOverlay.querySelector(".modal-section:nth-child(4) h3").textContent = dict["modal.tech"];
  document.getElementById("modal-github").innerHTML = '<i class="fab fa-github"></i> ' + dict["modal.github"];

  var resultsBtn = document.getElementById("modal-results-btn");
  if (p.resultsFile) {
    resultsBtn.style.display = "";
    resultsBtn.innerHTML = '<i class="fas fa-chart-line"></i> ' + dict["modal.results"];
    resultsBtn.onclick = function () { openResultsPopup(p.resultsFile); };
  } else {
    resultsBtn.style.display = "none";
  }

  var demoBtn = document.getElementById("modal-demo-btn");
  if (p.demoUrl) {
    demoBtn.style.display = "";
    demoBtn.href = p.demoUrl;
    demoBtn.innerHTML = '<i class="fas fa-play-circle"></i> ' + dict["modal.demo"];
  } else {
    demoBtn.style.display = "none";
  }

  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

/* ── Results Popup ── */
var resultsOverlay = null;

function openResultsPopup(fileUrl) {
  if (resultsOverlay) resultsOverlay.remove();
  resultsOverlay = document.createElement("div");
  resultsOverlay.className = "results-overlay active";
  resultsOverlay.innerHTML =
    '<div class="results-popup">' +
      '<button class="modal-close" id="results-close"><i class="fas fa-times"></i></button>' +
      '<div class="results-body"><div class="results-loading"><i class="fas fa-spinner fa-spin"></i></div></div>' +
    '</div>';
  document.body.appendChild(resultsOverlay);
  document.getElementById("results-close").addEventListener("click", closeResultsPopup);
  resultsOverlay.addEventListener("click", function (e) {
    if (e.target === resultsOverlay) closeResultsPopup();
  });
  var url = currentLang === "en" ? fileUrl.replace(".html", "-en.html") : fileUrl;
  fetch(url + "?v=47")
    .then(function (r) {
      if (!r.ok) throw new Error(r.status);
      return r.text();
    })
    .then(function (html) {
      resultsOverlay.querySelector(".results-body").innerHTML = html;
    })
    .catch(function () {
      resultsOverlay.querySelector(".results-body").innerHTML =
        '<p style="color:#ff6b6b;text-align:center;padding:40px">Impossible de charger les résultats.<br>Veuillez utiliser le serveur local (localhost:8080).</p>';
    });
}

function closeResultsPopup() {
  if (resultsOverlay) {
    resultsOverlay.classList.remove("active");
    setTimeout(function () { if (resultsOverlay) { resultsOverlay.remove(); resultsOverlay = null; } }, 300);
  }
}

function closeModal() {
  if (resultsOverlay) { closeResultsPopup(); return; }
  if (modalOverlay) modalOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (resultsOverlay) { closeResultsPopup(); return; }
    closeModal();
  }
});

/* ── Filters ── */
document.querySelectorAll(".filter-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    document.querySelectorAll(".filter-btn").forEach(function (b) { b.classList.remove("active"); });
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  });
});

var projectsSection = document.getElementById("projects");
if (projectsSection) {
  window.addEventListener("scroll", function () {
    if (!window._projectsExpanded) return;
    var rect = projectsSection.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) {
      var activeBtn = document.querySelector(".filter-btn.active");
      if (activeBtn && activeBtn.dataset.filter === "all") {
        renderProjects("all");
      }
    }
  });
}

/* ── Typed text ── */
var roles = ["Data Engineer.", "Data Analyst.", "Business Analyst.", "Software Engineer."];
var roleIndex = 0, charIndex = 0, deleting = false;
var typedEl = document.querySelector(".typed-text");

function typeEffect() {
  var current = roles[roleIndex];
  if (!typedEl) { typedEl = document.querySelector(".typed-text"); }
  if (!typedEl) return;
  if (!deleting) {
    typedEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      setTimeout(function () { deleting = true; typeEffect(); }, 2000);
      return;
    }
  } else {
    typedEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(typeEffect, deleting ? 40 : 80);
}
typeEffect();

/* ── Counter animation ── */
function animateCounters() {
  document.querySelectorAll(".stat-num").forEach(function (el) {
    var target = parseInt(el.dataset.target);
    var current = 0;
    var step = Math.ceil(target / 40);
    var timer = setInterval(function () {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = current;
    }, 30);
  });
}

/* ── Skill bar animation ── */
function animateSkills() {
  document.querySelectorAll(".fill").forEach(function (el) {
    el.style.width = el.dataset.width + "%";
  });
}

/* ── Scroll observer ── */
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      if (entry.target.closest && entry.target.closest("#home")) animateCounters();
      if (entry.target.closest && entry.target.closest("#skills")) animateSkills();
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".fade-in, .hero-stats, .skill-bars").forEach(function (el) {
  observer.observe(el);
});

/* ── Navbar scroll ── */
var nav = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

/* ── Active nav link ── */
var sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", function () {
  var scrollY = window.scrollY + 100;
  sections.forEach(function (sec) {
    var top = sec.offsetTop;
    var height = sec.offsetHeight;
    var id = sec.getAttribute("id");
    var link = document.querySelector('.nav-links a[href="#' + id + '"]');
    if (link) {
      if (scrollY >= top && scrollY < top + height) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  });
});

/* ── Certs toggle ── */
document.getElementById("btn-certs-more").addEventListener("click", function () {
  var extra = document.getElementById("certs-extra");
  var open = extra.classList.toggle("open");
  this.classList.toggle("open", open);
  var dict = I18N[currentLang];
  this.querySelector("[data-i18n]").textContent = open ? dict["cert.see_less"] : dict["cert.see_more"];
});

/* ── Cert viewer modal ── */
var certModal = null;

function createCertModal() {
  certModal = document.createElement("div");
  certModal.className = "cert-modal-overlay";
  certModal.innerHTML =
    '<div class="cert-modal">' +
      '<div class="cert-modal-header">' +
        '<h3 id="cert-modal-title"></h3>' +
        '<button class="cert-modal-close" id="cert-modal-close"><i class="fas fa-times"></i></button>' +
      '</div>' +
      '<div class="cert-modal-body">' +
        '<iframe id="cert-modal-iframe" src=""></iframe>' +
      '</div>' +
    '</div>';
  document.body.appendChild(certModal);
  document.getElementById("cert-modal-close").addEventListener("click", closeCertModal);
  certModal.addEventListener("click", function (e) {
    if (e.target === certModal) closeCertModal();
  });
}

function openCertModal(pdfPath, title) {
  if (!certModal) createCertModal();
  document.getElementById("cert-modal-title").textContent = title;
  document.getElementById("cert-modal-iframe").src = pdfPath + "#toolbar=0&navpanes=0";
  certModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCertModal() {
  if (certModal) {
    certModal.classList.remove("active");
    document.getElementById("cert-modal-iframe").src = "";
  }
  document.body.style.overflow = "";
}

document.querySelectorAll(".cert-view-btn").forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    var card = this.closest(".cert-card");
    openCertModal(card.dataset.cert, card.dataset.certTitle);
  });
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && certModal && certModal.classList.contains("active")) {
    closeCertModal();
  }
});

/* ── Mobile nav toggle ── */
document.querySelector(".nav-toggle").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(function (a) {
  a.addEventListener("click", function () {
    document.querySelector(".nav-links").classList.remove("open");
  });
});

/* ── Init ── */
var savedLang = null;
try { savedLang = localStorage.getItem("portfolio-lang"); } catch (e) {}
if (savedLang === "en") {
  setLang("en");
} else {
  renderProjects("all");
}
setTimeout(animateCounters, 800);

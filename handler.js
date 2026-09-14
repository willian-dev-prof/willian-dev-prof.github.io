const textos = {
  pt: {
    nav_home: "Início",
    nav_skills: "Skills",
    nav_experience: "Experiência",
    nav_contact: "Contato",
    hero_eyebrow: "TECH LEAD CLOUD & ARQUITETO DE SOLUÇÕES AWS",
    description: `Líder Técnico de Cloud e Arquiteto de Soluções em Nuvem especializado em AWS, com paixão por construir sistemas altamente escaláveis e de fácil manutenção. Mais de 9 anos de experiência em soluções em nuvem, incluindo colaboração com equipes internacionais para entregar soluções robustas.`,
    cta_experience: "Ver experiência",
    cta_connect: "Conectar",
    stat_years: "anos de experiência em nuvem",
    stat_devices: "dispositivos IoT conectados simultaneamente",
    stat_trucks: "veículos em produção usando a solução",
    stat_perf: "de ganho de performance em sistema crítico",
    skills_eyebrow: "STACK TÉCNICA",
    skills_title: "Habilidades Técnicas",
    cat_languages: "Linguagens",
    cat_cloud: "Cloud & Infraestrutura (AWS)",
    cat_data: "Dados",
    cat_architecture: "Arquitetura & Padrões",
    exp_eyebrow: "TRAJETÓRIA",
    connect: "Vamos nos conectar?",
    footer_text: "Aberto a novas oportunidades e parcerias em projetos de nuvem, arquitetura de sistemas e engenharia de dados.",
    experience: [
      {
        title: "FleetArc Cloud Solution — Stoneridge",
        period: "jul/2024 — atual",
        points: [
          "Construção da infraestrutura AWS para comunicação com milhares de equipamentos, com destaque para EUA e Europa.",
          "Funcionalidades de requisição de vídeos, captura de posicionamento e coleta de dados gerais dos dispositivos, com armazenamento seguro e pós-processamento eficiente.",
          "Mais de 3.500 caminhões já utilizam os serviços, com expansão prevista via parcerias que integrarão o produto Mirror Eyes direto na fábrica."
        ],
        tags: ["AWS IoT", "Lambda", "EC2", "Aurora RDS", "DynamoDB", "S3", "CloudFront", "Route 53", "CloudFormation"]
      },
      {
        title: "Fleet Cloud — V3",
        period: "out/2022 — jul/2024",
        points: [
          "Solução de inteligência artificial para monitorar o uso responsável de veículos e prevenir acidentes por álcool ou drogas.",
          "Estruturação do zero de um ambiente cloud com comunicação simultânea com mais de 65.000 dispositivos via IoT.",
          "Pipelines de processamento de dados com AWS S3, Lambda e EC2 para imagens e vídeos.",
          "Reconhecimento facial para monitoramento de condutores e configuração remota de dispositivos via IoT."
        ],
        tags: ["AWS IoT", "Lambda", "EC2", "S3", "Reconhecimento facial"]
      },
      {
        title: "RCMS — Samsung",
        period: "jun/2021 — out/2022",
        points: [
          "Otimização de performance de sistema de gestão para fábricas de componentes de celulares e computadores da Samsung.",
          "Redução de 300% no tempo de processamento de peças utilizando o padrão CQRS em C#.",
          "Elevação da qualidade de código e da eficiência das requisições ao banco de dados."
        ],
        tags: ["C#", "CQRS", "SQL"]
      },
      {
        title: "ERP — Sulwork",
        period: "jun/2021 — set/2023",
        points: [
          "Fundação de empresa durante a pandemia para conectar hospitais ao SUS (Sistema Único de Saúde).",
          "Modernização de servidores, software e hardware de diversos hospitais.",
          "Liderança da migração de sistemas Flex e Oracle Forms para Java 11 e HTML5."
        ],
        tags: ["Java 11", "HTML5", "Oracle"]
      },
      {
        title: "ERP — MV",
        period: "set/2017 — jun/2021",
        points: [
          "Construção e manutenção de ERP de grande porte, premiado diversas vezes como o melhor prontuário eletrônico da América Latina.",
          "Liderança da migração tecnológica do sistema legado do Hospital Moinhos de Vento, modernizando cinco produtos (Java 6 / Flex → Java 8 / HTML5).",
          "Gestão de mais de 1.200 tickets de suporte e melhoria em dois anos de projeto, incluindo períodos alocado diretamente no cliente.",
          "Participação na integração entre a MV e o SUS no início da pandemia, contribuindo com processos críticos de saúde pública."
        ],
        tags: ["Java 8", "Java 6", "Flex", "HTML5"]
      }
    ]
  },
  en: {
    nav_home: "Home",
    nav_skills: "Skills",
    nav_experience: "Experience",
    nav_contact: "Contact",
    hero_eyebrow: "TECH LEAD CLOUD & AWS SOLUTIONS ARCHITECT",
    description: `Tech Lead Cloud and Cloud Solution Architect specializing in AWS, with a passion for building highly scalable and maintainable systems. Over 9 years of experience in cloud solutions, including collaboration with international teams to deliver robust solutions.`,
    cta_experience: "View experience",
    cta_connect: "Connect",
    stat_years: "years of cloud experience",
    stat_devices: "IoT devices connected simultaneously",
    stat_trucks: "vehicles in production using the solution",
    stat_perf: "performance gain on a critical system",
    skills_eyebrow: "TECH STACK",
    skills_title: "Technical Skills",
    cat_languages: "Languages",
    cat_cloud: "Cloud & Infrastructure (AWS)",
    cat_data: "Data",
    cat_architecture: "Architecture & Patterns",
    exp_eyebrow: "CAREER PATH",
    connect: "Let's connect?",
    footer_text: "Open to new opportunities and partnerships in cloud projects, systems architecture, and data engineering.",
    experience: [
      {
        title: "FleetArc Cloud Solution — Stoneridge",
        period: "Jul/2024 — present",
        points: [
          "Building AWS infrastructure enabling communication with thousands of devices, particularly in the USA and Europe.",
          "Video request, positioning capture, and general device data collection features, ensuring secure storage and efficient post-processing.",
          "Over 3,500 trucks already using the services, with expansion planned through partnerships integrating the Mirror Eyes product directly into the factory."
        ],
        tags: ["AWS IoT", "Lambda", "EC2", "Aurora RDS", "DynamoDB", "S3", "CloudFront", "Route 53", "CloudFormation"]
      },
      {
        title: "Fleet Cloud — V3",
        period: "Oct/2022 — Jul/2024",
        points: [
          "AI solution to help monitor responsible vehicle use and prevent accidents caused by alcohol or drug consumption.",
          "Structured a cloud environment from scratch capable of communicating with over 65,000 devices simultaneously via IoT.",
          "Built data processing pipelines using AWS S3, Lambda, and EC2 for image and video processing.",
          "Key features: facial recognition for driver monitoring and remote device configuration via IoT."
        ],
        tags: ["AWS IoT", "Lambda", "EC2", "S3", "Facial recognition"]
      },
      {
        title: "RCMS — Samsung",
        period: "Jun/2021 — Oct/2022",
        points: [
          "Optimized performance of a management system for mobile phone and computer component factories at Samsung.",
          "Led improvements reducing part processing time by 300%, using the CQRS pattern in C#.",
          "Improved code quality and database query efficiency."
        ],
        tags: ["C#", "CQRS", "SQL"]
      },
      {
        title: "ERP — Sulwork",
        period: "Jun/2021 — Sep/2023",
        points: [
          "Founded a company during the pandemic to connect hospitals to SUS (Brazil's Unified Health System).",
          "Modernized servers, software, and hardware across several hospitals.",
          "Led the migration of Flex and Oracle Forms systems to Java 11 and HTML5."
        ],
        tags: ["Java 11", "HTML5", "Oracle"]
      },
      {
        title: "ERP — MV",
        period: "Sep/2017 — Jun/2021",
        points: [
          "Built and maintained a large-scale ERP system, awarded multiple times as the best electronic health record system in Latin America.",
          "Led the technology migration of Hospital Moinhos de Vento's legacy system, modernizing five products (Java 6 / Flex → Java 8 / HTML5).",
          "Managed over 1,200 support and improvement tickets over two years, including periods working directly on-site with the client.",
          "Took part in the MV–SUS integration during the early pandemic, contributing to critical public health processes."
        ],
        tags: ["Java 8", "Java 6", "Flex", "HTML5"]
      }
    ]
  },
  es: {
    nav_home: "Inicio",
    nav_skills: "Skills",
    nav_experience: "Experiencia",
    nav_contact: "Contacto",
    hero_eyebrow: "TECH LEAD CLOUD & ARQUITECTO DE SOLUCIONES AWS",
    description: `Tech Lead de Cloud y Arquitecto de Soluciones en la Nube especializado en AWS, con pasión por construir sistemas altamente escalables y de fácil mantenimiento. Más de 9 años de experiencia en soluciones en la nube, incluyendo colaboración con equipos internacionales para ofrecer soluciones robustas.`,
    cta_experience: "Ver experiencia",
    cta_connect: "Conectar",
    stat_years: "años de experiencia en la nube",
    stat_devices: "dispositivos IoT conectados simultáneamente",
    stat_trucks: "vehículos en producción usando la solución",
    stat_perf: "de mejora de rendimiento en sistema crítico",
    skills_eyebrow: "STACK TÉCNICA",
    skills_title: "Habilidades Técnicas",
    cat_languages: "Lenguajes",
    cat_cloud: "Cloud & Infraestructura (AWS)",
    cat_data: "Datos",
    cat_architecture: "Arquitectura & Patrones",
    exp_eyebrow: "TRAYECTORIA",
    connect: "¿Vamos a conectarnos?",
    footer_text: "Abierto a nuevas oportunidades y colaboraciones en proyectos de nube, arquitectura de sistemas e ingeniería de datos.",
    experience: [
      {
        title: "FleetArc Cloud Solution — Stoneridge",
        period: "jul/2024 — presente",
        points: [
          "Construcción de infraestructura AWS para la comunicación con miles de dispositivos, particularmente en EE. UU. y Europa.",
          "Funcionalidades de solicitud de videos, captura de posicionamiento y recopilación de datos generales, garantizando almacenamiento seguro y postprocesamiento eficiente.",
          "Más de 3.500 camiones ya utilizan los servicios, con expansión prevista mediante alianzas que integrarán el producto Mirror Eyes directamente en la fábrica."
        ],
        tags: ["AWS IoT", "Lambda", "EC2", "Aurora RDS", "DynamoDB", "S3", "CloudFront", "Route 53", "CloudFormation"]
      },
      {
        title: "Fleet Cloud — V3",
        period: "oct/2022 — jul/2024",
        points: [
          "Solución de inteligencia artificial para monitorear el uso responsable de vehículos y prevenir accidentes por alcohol o drogas.",
          "Estructuración desde cero de un entorno cloud capaz de comunicarse con más de 65.000 dispositivos simultáneamente vía IoT.",
          "Pipelines de procesamiento de datos con AWS S3, Lambda y EC2 para imágenes y videos.",
          "Reconocimiento facial para monitoreo de conductores y configuración remota de dispositivos vía IoT."
        ],
        tags: ["AWS IoT", "Lambda", "EC2", "S3", "Reconocimiento facial"]
      },
      {
        title: "RCMS — Samsung",
        period: "jun/2021 — oct/2022",
        points: [
          "Optimización del rendimiento de un sistema de gestión para fábricas de componentes de celulares y computadoras de Samsung.",
          "Reducción del 300% en el tiempo de procesamiento de piezas utilizando el patrón CQRS en C#.",
          "Mejora de la calidad del código y de la eficiencia de las consultas a la base de datos."
        ],
        tags: ["C#", "CQRS", "SQL"]
      },
      {
        title: "ERP — Sulwork",
        period: "jun/2021 — sep/2023",
        points: [
          "Fundación de una empresa durante la pandemia para conectar hospitales al SUS (Sistema Único de Salud de Brasil).",
          "Modernización de servidores, software y hardware en varios hospitales.",
          "Liderazgo de la migración de sistemas Flex y Oracle Forms a Java 11 y HTML5."
        ],
        tags: ["Java 11", "HTML5", "Oracle"]
      },
      {
        title: "ERP — MV",
        period: "sep/2017 — jun/2021",
        points: [
          "Construcción y mantenimiento de un ERP de gran escala, premiado varias veces como el mejor sistema de registro electrónico de salud de América Latina.",
          "Liderazgo de la migración tecnológica del sistema legado del Hospital Moinhos de Vento, modernizando cinco productos (Java 6 / Flex → Java 8 / HTML5).",
          "Gestión de más de 1.200 tickets de soporte y mejora durante dos años de proyecto, incluidos períodos asignado directamente al cliente.",
          "Participación en la integración entre MV y el SUS al inicio de la pandemia, contribuyendo a procesos críticos de salud pública."
        ],
        tags: ["Java 8", "Java 6", "Flex", "HTML5"]
      }
    ]
  }
};

function renderTimeline(idioma) {
  const timeline = document.getElementById("timeline");
  if (!timeline) return;

  timeline.innerHTML = textos[idioma].experience.map(item => `
    <div class="timeline-item">
      <div class="timeline-card">
        <div class="timeline-head">
          <span class="timeline-title">${item.title}</span>
          <span class="timeline-period">${item.period}</span>
        </div>
        <ul class="timeline-points">
          ${item.points.map(p => `<li>${p}</li>`).join("")}
        </ul>
        <div class="timeline-tags">
          ${item.tags.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
      </div>
    </div>
  `).join("");
}

function UpdateLanguage(idioma) {
  if (!textos[idioma]) idioma = "en";

  document.documentElement.lang = idioma;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (textos[idioma][key] !== undefined) {
      el.textContent = textos[idioma][key];
    }
  });

  renderTimeline(idioma);

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === idioma);
  });

  localStorage.setItem("lang", idioma);
}

function getInitialLang() {
  const saved = localStorage.getItem("lang");
  if (saved && textos[saved]) return saved;

  const userLang = (navigator.language || navigator.userLanguage || "en").toLowerCase();
  if (userLang.startsWith("pt")) return "pt";
  if (userLang.startsWith("es")) return "es";
  return "en";
}

document.addEventListener("DOMContentLoaded", () => {
  UpdateLanguage(getInitialLang());

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => UpdateLanguage(btn.dataset.lang));
  });

  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen);
    });
    navLinks.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const sections = document.querySelectorAll("main section, footer#contact");
  const navAnchors = document.querySelectorAll(".nav-link");
  if (sections.length && navAnchors.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navAnchors.forEach(a => {
            a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`);
          });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });

    sections.forEach(section => observer.observe(section));
  }
});

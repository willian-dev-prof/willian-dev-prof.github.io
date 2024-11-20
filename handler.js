function showDiv(dvNumber) {
    var presentation = document.getElementById('presentation');
    var projects = document.getElementById('projects');

    var item1 = document.getElementById('menu-item-1');
    var item2 = document.getElementById('menu-item-2');

    var v3 = document.getElementById('v3');
    var samsung = document.getElementById('samsung');
    var mv = document.getElementById('mv');
    var sulwork = document.getElementById('sulwork');
    var stoneridge = document.getElementById('stoneridge');
    
    if (dvNumber == 1) {
        presentation.style.display = 'block';
        projects.style.display = 'none';
        
        item1.style.display = 'block';
        item2.style.display = 'none';
    }
    
    if (dvNumber == 2) {
        presentation.style.display = 'none';
        projects.style.display = 'block';

        item1.style.display = 'none';
        item2.style.display = 'block';

        v3.style.display = 'block';
        samsung.style.display = 'block';
        mv.style.display = 'block';
        sulwork.style.display = 'block';
        stoneridge.style.display = 'block';
    }
}

const textos = {
    pt: {
        home: "Início",
        project: "Projetos",
        about: "Sobre",
        description: "Arquiteto de Software apaixonado por construir experiências digitais impactantes.",
        skill: "Habilidades Técnicas",
        connect: "Vamos nos Conectar?",
        ds_stoneridge: `Atualmente, estou trabalhando em um novo projeto voltado para a construção da infraestrutura na AWS, possibilitando a comunicação com milhares de equipamentos, 
                        com destaque para os EUA e Europa.<br>
                        As funcionalidades iniciais incluem a requisição de vídeos, captura de posicionamento e coleta de dados gerais dos dispositivos,
                        garantindo armazenamento seguro e pós-processamento eficiente na AWS.<br>
                        Estamos utilizando tecnologias como AWS IoT, Lambda, EC2, Aurora RDS, DynamoDB, S3, CloudFront, Route 53 e CloudFormation. Até o momento, mais de 3.500 caminhões 
                        já utilizam nossos serviços, e em breve estaremos expandindo nossa atuação por meio de parcerias com novos clientes, que terão nosso produto, o Mirror Eyes, 
                        já integrado diretamente na fábrica com nosso serviço em nuvem.<br>
                        O projeto está em constante evolução, adicionando novas funcionalidades e serviços para melhorar ainda mais a experiência dos usuários e a eficiência do produto.<br>
                        -<br>
                        Periodo : 01/07/2024 a presente `,
        erp_mv: `Atuei na construção e manutenção de um sistema ERP de grande porte, premiado diversas vezes como o melhor prontuário eletrônico da América Latina.
                <br>
                Fui líder da equipe de migração tecnológica do sistema legado do Hospital Moinhos de Vento, sendo responsável pela modernização de cinco produtos, substituindo tecnologias obsoletas como Java 6 e Flex por Java 8 e HTML5.
                <br>
                Gerenciei mais de 1.200 tickets de suporte e melhoria ao longo de dois anos de projeto, incluindo períodos de trabalho alocado diretamente no cliente, garantindo alta qualidade e satisfação.
                <br>
                Reconhecido com diversos prêmios por excelência em desenvolvimento, atendimento ao cliente e consultoria.
                <br>
                Participei do processo de integração entre a MV e o SUS durante o inicio da pandemia, contribuindo para a melhoria de processos críticos que impactaram positivamente a saúde pública e salvaram vidas.
                <br>
                -                
                <br>Periodo : 01/09/2017 a 01/06/2021`,
        rcms_samsung: `Fui Desafiado a otimizar a performance de um sistema de gestão para fábricas de componentes de celulares e computadores, utilizado por uma das maiores empresas do setor de tecnologia, a Samsung.
                       <br>
                       Conduzi melhorias significativas, reduzindo o tempo de processamento de peças em 300%, além de implementar soluções que elevaram a qualidade do código e a eficiência das requisições ao banco de dados para isso
                       utilizei o padrão de projeto CQRS como base para o desenvolvimento, empregando a linguagem C#, o que resultou em um sistema mais escalável e robusto.
                       <br>
                       Essa experiência certamente ampliou meus conhecimentos em novas tecnologias, inteligência artificial (IA) e boas práticas de desenvolvimento, contribuindo para a excelência e inovação no projeto.
                       <br>
                       -                
                       <br>Periodo : 01/06/2021 a 01/10/2022`,
        v3_cloud: `Contribuí para a implementação de uma solução inovadora de inteligência artificial voltada para auxiliar condutores, monitorar o uso responsável de veículos e prevenir acidentes causados pelo consumo de álcool ou drogas.
                       Estruturei do zero um ambiente em nuvem capaz de se comunicar com mais de 65 mil dispositivos simultaneamente, utilizando IoT como meio de comunicação principal.
                       <br>
                       Desenvolvi pipelines para o processamento de dados, empregando AWS S3 para armazenamento e AWS Lambda junto com EC2 para o processamento de imagens e vídeos.
                       <br>
                       Principais funcionalidades implementadas: reconhecimento facial para monitoramento de condutores e configuração remota de dispositivos via IoT.
                       <br>
                       O projeto teve impacto significativo na prevenção de acidentes e na promoção da segurança no trânsito, contribuindo para a inovação no setor de transporte e tecnologia.
                       <br>
                       -                
                       <br>Periodo : 01/10/2022 a 01/07/2024`,
        erp_sulwork: `Eu fundei uma empresa durante a pandemia para oferecer suporte a hospitais, criando novos serviços que os conectassem ao SUS (Sistema Único de Saúde).
                Resolvi diversos desafios relacionados a servidores, atualizando e modernizando tanto o software quanto o hardware de vários hospitais. Além disso, 
                liderei a migração de sistemas do Flex e Oracle Forms para tecnologias modernas como Java 11 e HTML5, melhorando significativamente a 
                qualidade do código, o desempenho do sistema e a experiência do usuário.
                <br>
                -                
                <br>Periodo : 01/06/2021 a 13/09/2023`
    },
    en: {
        home: "Home",
        project: "Projects",
        about: "About",
        description: "Software Architect passionate about building impactful digital experiences.",
        skill: "Technical Skill",
        connect: "Let's connect?",
        ds_stoneridge: `Currently, I am working on a new project focused on building infrastructure on AWS, enabling communication with thousands of devices, 
                     particularly in the USA and Europe. The initial features include video requests, positioning capture, and collection of general device data, 
                     ensuring secure storage and efficient post-processing on AWS.<br>
                     We are using technologies such as AWS IoT, Lambda, EC2, Aurora RDS, DynamoDB, S3, CloudFront, Route 53, and CloudFormation.<br>
                     So far, over 3,500 trucks are already using our services, and we will soon be expanding our reach through partnerships with new clients, 
                     who will have our product, Mirror Eyes, integrated directly into the factory with our cloud service.<br>
                     The project is continuously evolving, adding new features and services to further improve the user experience and product efficiency.<br>
                     -<br>
                     Period: 07/01/2024 to present`,
        erp_mv: `I worked on the construction and maintenance of a large-scale ERP system, which has been awarded multiple times as the best electronic health record system in Latin America.
                <br> I was the leader of the technological migration team for the legacy system of Hospital Moinhos de Vento, responsible for modernizing five products, replacing obsolete technologies such as Java 6 and Flex with Java 8 and HTML5.
                <br> I managed over 1,200 support and improvement tickets over two years of the project, including periods of direct work allocated to the client, ensuring high quality and satisfaction.
                <br> Recognized with several awards for excellence in development, customer service, and consulting.
                <br> I participated in the integration process between MV and SUS during the early stages of the pandemic, contributing to the improvement of critical processes that positively impacted public health and saved lives.
                <br>-
                <br> Period: 09/01/2017 to 06/01/2021`,
        rcms_samsung: `I was challenged to optimize the performance of a management system for factories producing mobile phone and computer components, used by one of the largest 
                        companies in the technology sector, Samsung.
                        <br> I led significant improvements, reducing the processing time of parts by 300%, in addition to implementing solutions that enhanced 
                        code quality and database query efficiency. To achieve this, I used the CQRS design pattern as the foundation for development, employing 
                        C# language, resulting in a more scalable and robust system.
                        <br> This experience certainly broadened my knowledge of new technologies, artificial intelligence (AI), and best development practices, contributing to excellence and innovation in the project.
                        <br>
                        -
                        <br> Period: 06/01/2021 to 10/01/2022`,
        v3_cloud: `I contributed to the implementation of an innovative artificial intelligence solution aimed at assisting drivers, monitoring the responsible use of vehicles, and preventing accidents caused by alcohol or drug consumption.
                    I structured from scratch a cloud environment capable of communicating with over 65,000 devices simultaneously, using IoT as the main communication method.
                    <br> I developed pipelines for data processing, employing AWS S3 for storage and AWS Lambda together with EC2 for image and video processing.
                    <br> Key features implemented: facial recognition for driver monitoring and remote configuration of devices via IoT.
                    <br> The project had a significant impact on accident prevention and promoting road safety, contributing to innovation in the transportation and technology sectors.
                    <br>
                    -
                    <br> Period: 10/01/2022 to 07/01/2024`,
        erp_sulwork: `I founded a company during the pandemic to offer support to hospitals by creating new services that connected them to the SUS (Unified Health System).
                        I solved several challenges related to servers, updating and modernizing both the software and hardware of various hospitals. Additionally,
                        I led the migration of systems from Flex and Oracle Forms to modern technologies like Java 11 and HTML5, significantly improving the code quality, system performance, and user experience.
                        <br>
                        -
                        <br> Period: 06/01/2021 to 09/13/2023`
    },
    es: {
        home: "Inicio",
        project: "Proyectos",
        about: "Quién soy",
        description: "Arquitecto de Software apasionado por crear experiencias digitales impactantes.",
        skill: "Habilidad Técnica",
        connect: "¿Vamos a conectarnos?",
        ds_stoneridge: `Actualmente, estoy trabajando en un nuevo proyecto centrado en construir infraestructura en AWS, habilitando la comunicación con miles de 
                        dispositivos, particularmente en USA y Europa.<br> 
                        Las características iniciales incluyen solicitudes de videos, captura de posicionamiento y 
                        recopilación de datos generales de los dispositivos, garantizando un almacenamiento seguro y un postprocesamiento eficiente en AWS.
                        Estamos utilizando tecnologías como AWS IoT, Lambda, EC2, Aurora RDS, DynamoDB, S3, CloudFront, Route 53 y CloudFormation.<br>
                        Hasta ahora, más de 3,500 camiones ya están utilizando nuestros servicios, y pronto estaremos expandiendo nuestro alcance mediante 
                        asociaciones con nuevos clientes, quienes tendrán nuestro producto, Mirror Eyes, integrado directamente en la fábrica con nuestro servicio 
                        en la nube.<br>
                        El proyecto está en constante evolución, añadiendo nuevas características y servicios para mejorar aún más la experiencia del usuario y la 
                        eficiencia del producto.<br>
                        -<br>
                        Período: 01/07/2024 hasta el presente`,
        erp_mv: `Trabajé en la construcción y mantenimiento de un sistema ERP de gran escala, que ha sido galardonado en varias ocasiones como el mejor sistema de registro electrónico de salud en América Latina.
                <br> Fui líder del equipo de migración tecnológica del sistema legado del Hospital Moinhos de Vento, siendo responsable de la modernización de cinco productos, sustituyendo tecnologías obsoletas como Java 6 y Flex por Java 8 y HTML5.
                <br> Gestioné más de 1.200 tickets de soporte y mejora durante dos años del proyecto, incluidos períodos de trabajo directamente asignado al cliente, garantizando alta calidad y satisfacción.
                <br> Reconocido con varios premios por excelencia en desarrollo, atención al cliente y consultoría.
                <br> Participé en el proceso de integración entre MV y el SUS durante las primeras etapas de la pandemia, contribuyendo a la mejora de procesos críticos que impactaron positivamente la salud pública y salvaron vidas.
                <br>-
                <br> Período: 01/09/2017 a 01/06/2021`,
        rcms_samsung: `Fui desafiado a optimizar el rendimiento de un sistema de gestión para fábricas de componentes de teléfonos móviles y computadoras, utilizado por una de 
                        las empresas más grandes del sector tecnológico, Samsung.
                        <br> Lideré mejoras significativas, reduciendo el tiempo de procesamiento de piezas en un 300%, además de implementar soluciones que elevaron la calidad 
                        del código y la eficiencia de las consultas a la base de datos. Para ello, utilicé el patrón de diseño CQRS como base para el desarrollo, empleando el 
                        lenguaje C#, lo que resultó en un sistema más escalable y robusto.
                        <br> Esta experiencia sin duda amplió mis conocimientos en nuevas tecnologías, inteligencia artificial (IA) y buenas prácticas de desarrollo, 
                        contribuyendo a la excelencia e innovación en el proyecto.
                        <br>
                        -
                        <br> Período: 01/06/2021 a 01/10/2022`,
        v3_cloud: `Contribuí a la implementación de una solución innovadora de inteligencia artificial orientada a ayudar a los conductores, monitorear el uso responsable de los vehículos y prevenir accidentes causados por el consumo de alcohol o drogas.
                    Estructuré desde cero un entorno en la nube capaz de comunicarse con más de 65,000 dispositivos simultáneamente, utilizando IoT como medio de comunicación principal.
                    <br> Desarrollé pipelines para el procesamiento de datos, utilizando AWS S3 para el almacenamiento y AWS Lambda junto con EC2 para el procesamiento de imágenes y videos.
                    <br> Principales funcionalidades implementadas: reconocimiento facial para monitoreo de conductores y configuración remota de dispositivos a través de IoT.
                    <br> El proyecto tuvo un impacto significativo en la prevención de accidentes y en la promoción de la seguridad vial, contribuyendo a la innovación en los sectores de transporte y tecnología.
                    <br>
                    -
                    <br> Período: 01/10/2022 a 01/07/2024`,
        erp_sulwork: `Fundé una empresa durante la pandemia para ofrecer soporte a hospitales, creando nuevos servicios que los conectaran al SUS (Sistema Único de Salud).
                        Resolvía diversos desafíos relacionados con servidores, actualizando y modernizando tanto el software como el hardware de varios hospitales. Además,
                        lideré la migración de sistemas de Flex y Oracle Forms a tecnologías modernas como Java 11 y HTML5, mejorando significativamente la calidad del código, el rendimiento del sistema y la experiencia del usuario.
                        <br>
                        -
                        <br> Período: 01/06/2021 a 13/09/2023`
        
    }
};

function UpdateLanguage(idioma) {
    document.getElementById("home").textContent = textos[idioma].home;
    document.getElementById("project").textContent = textos[idioma].project;
    document.getElementById("description").textContent = textos[idioma].description;
    document.getElementById("skill").textContent = textos[idioma].skill;
    document.getElementById("connect").textContent = textos[idioma].connect;
    document.getElementById("ds_stoneridge").innerHTML = textos[idioma].ds_stoneridge;
    document.getElementById("erp_mv").innerHTML = textos[idioma].erp_mv;
    document.getElementById("rcms_samsung").innerHTML = textos[idioma].rcms_samsung;
    document.getElementById("v3_cloud").innerHTML = textos[idioma].v3_cloud;
    document.getElementById("erp_sulwork").innerHTML = textos[idioma].erp_sulwork;
}

document.getElementById("select-idioma").addEventListener("change", function () {
    const idiomaSelecionado = this.value;
    UpdateLanguage(idiomaSelecionado); 
});
/**
 * WG COSMETÓLOGA ESTETICISTA - Base de Datos y Configuración
 */

const SANDOVAL_DATA = {
  brand: {
    name: "WG COSMETÓLOGA ESTETICISTA",
    shortName: "WG Cosmetóloga Esteticista",
    tagline: "Estética Facial, Corporal, Epilación & Despigmentación",
    slogan: "Bienestar ❤️ Calidad ❤️ Confianza",
    logo: "assets/images/logo.png",
    whatsappNumber: "573153462414",
    whatsappDisplay: "+57 315 346 2414",
    instagram: "wg_cosmetologa",
    instagramUrl: "https://instagram.com",
    tiktok: "wg_cosmetologa",
    tiktokUrl: "https://tiktok.com",
    email: "contacto@wgcosmetologa.com",
    address: "Estudio Privado de Estética & Cosmetología",
    city: "Atención Exclusiva con Cita Previa",
    hours: "Lunes a Sábado: 8:00 AM - 7:00 PM"
  },

  services: [
    /* ==========================================================================
       CATEGORÍA: FACIAL
       ========================================================================== */
    {
      id: "limpieza-facial-profunda",
      title: "Limpieza Facial Profunda",
      subtitle: "Renovación Célular & Extracción",
      category: "facial",
      badge: "Más Solicitado ⭐",
      shortDesc: "Desintoxicación cutánea completa con vapor de ozono, extracción de impurezas, alta frecuencia y mascarilla nutritiva.",
      longDesc: "Tratamiento indispensable para mantener una piel sana, luminosa y libre de impurezas. Incluye diagnóstico cutáneo, vaporización con ozono para abrir poros, extracción indolora de puntos negros y miliums, alta frecuencia bactericida, velo o mascarilla hidroplástica según tu tipo de piel y fototerapia LED.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop",
      duration: "1.5 Horas",
      retention: "Recomendado 1 vez al mes",
      painLevel: "Indoloro / Molestia mínima en extracción",
      highlights: [
        "Vapor de ozono y peeling ultrasónico",
        "Extracción minuciosa de comedones e impurezas",
        "Desinfección con Alta Frecuencia",
        "Mascarilla personalizada e hidratación final",
        "Protección solar de amplio espectro"
      ],
      idealFor: "Todo tipo de piel que busque eliminar puntos negros, exceso de grasa, restos de contaminación y recuperar el brillo natural.",
      preCare: ["Asistir con el rostro limpio de maquillaje si es posible.", "Evitar bronceados intensos 48h antes."],
      postCare: ["Usar protector solar cada 3-4 horas.", "No maquillarse durante las siguientes 12 horas."],
      whatsappMsg: "Hola WG Cosmetóloga Esteticista ✨ Me gustaría agendar una *Limpieza Facial Profunda*. ¿Qué disponibilidad tienen?"
    },
    {
      id: "limpieza-facial-basica",
      title: "Limpieza Facial Básica",
      subtitle: "Higiene Cutánea & Frescura",
      category: "facial",
      badge: "Express ✨",
      shortDesc: "Higienización rápida, exfoliación suave, hidratación y sellado protector para tonificar la piel en poco tiempo.",
      longDesc: "Diseñada para pieles que necesitan un refrescamiento rápido o como mantenimiento entre sesiones profundas. Elimina células muertas y devuelve la suavidad en solo 45 minutos.",
      image: "https://images.unsplash.com/photo-1512290900673-7002b55f0535?q=80&w=1000&auto=format&fit=crop",
      duration: "45 Minutos",
      retention: "Ideal cada 15 a 20 días",
      painLevel: "Completamente Indoloro",
      highlights: [
        "Limpieza y desmaquillado con dermolimpiador",
        "Exfoliación enzimática suave",
        "Tonificación e hidratación profunda",
        "Masaje facial relajante con serum reparador"
      ],
      idealFor: "Personas con poco tiempo que desean un mantenimiento facial continuo y un acabado fresco previo a un evento.",
      preCare: ["Sin preparación previa especial."],
      postCare: ["Aplicar protector solar habitualmente."],
      whatsappMsg: "Hola WG Cosmetóloga Esteticista ✨ Deseo información para una *Limpieza Facial Básica*. ¿Horarios disponibles?"
    },
    {
      id: "porcelanizacion-facial",
      title: "Porcelanización Facial",
      subtitle: "Efecto Piel de Porcelana & Luminosidad",
      category: "facial",
      badge: "Tendencia Glow 💎",
      shortDesc: "Tratamiento despigmentante y pulidor que unifica el tono facial, reduce poros y otorga una textura sedosa e iluminada.",
      longDesc: "Combina microdermoabrasión o micro-pulido con activos iluminadores y cócteles de vitaminas que afinan la textura del rostro, desvanecen manchas superficiales y aportan ese anhelado efecto 'piel de porcelana'.",
      image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1000&auto=format&fit=crop",
      duration: "1.5 Horas",
      retention: "Efecto duradero (Sesiones periódicas)",
      painLevel: "Muy Relajante e Indoloro",
      highlights: [
        "Microdermoabrasión con punta de diamante",
        "Aclaramiento de tono e iluminación inmediata",
        "Mascarilla de porcelana y velo de colágeno",
        "Nutrición con vitamina C y ácido hialurónico"
      ],
      idealFor: "Rostros opacos, pieles ásperas, con tono desigual o fotosensible que desean lucir radiantes.",
      preCare: ["Evitar bronceado y retinol 3 días antes."],
      postCare: ["Protección solar estricta SPF 50+."],
      whatsappMsg: "Hola WG Cosmetóloga Esteticista 💎 Quiero agendar una cita de *Porcelanización Facial*. ¿Me dan detalles?"
    },
    {
      id: "rejuvenecimiento-facial",
      title: "Rejuvenecimiento Facial",
      subtitle: "Radiofrecuencia & Efecto Lifting",
      category: "facial",
      badge: "Anti-Age Premium 🌸",
      shortDesc: "Estimulación intensiva de colágeno y elastina mediante aparatología de vanguardia para atenuar líneas de expresión y flacidez.",
      longDesc: "Tratamiento no invasivo que reafirma los tejidos faciales, perfila el óvalo de la cara y reduce la profundidad de las arrugas activando la producción natural de colágeno.",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop",
      duration: "1.5 Horas",
      retention: "Efecto progresivo acumulativo",
      painLevel: "Agradable sensación de calor",
      highlights: [
        "Radiofrecuencia facial y aparatología reafirmante",
        "Masaje liofilizado reafirmante y drenaje facial",
        "Concentrado de Ácido Hialurónico y Péptidos",
        "Mascarilla de colágeno tensor"
      ],
      idealFor: "Pieles maduras o con primeros signos de envejecimiento, pérdida de firmeza y elasticidad.",
      preCare: ["Hidratar bien la piel tomando suficiente agua."],
      postCare: ["Usar crema hidratante y protector solar."],
      whatsappMsg: "Hola WG Cosmetóloga 🌸 Me gustaría recibir información sobre el *Rejuvenecimiento Facial*. ¿Disponibilidad de citas?"
    },
    {
      id: "tratamiento-melasmas",
      title: "Tratamiento de Melasmas",
      subtitle: "Control de Manchas e Hiperpigmentación",
      category: "facial",
      badge: "Especializado 🎯",
      shortDesc: "Protocolo médico-estético diseñado para atenuar y controlar las manchas provocadas por el sol, hormonas o embarazo.",
      longDesc: "Un tratamiento enfocado en inhibir la sobreproducción de melasmas con ácidos despigmentantes de baja irritación, activos antioxidantes y fototerapia que inhiben la tirosinasa.",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop",
      duration: "1.5 Horas",
      retention: "Protocolo de varias sesiones",
      painLevel: "Leve cosquilleo",
      highlights: [
        "Despigmentación focalizada de manchas y paño",
        "Ácidos biocompatibles (Kójico, Tranexámico, Mandélico)",
        "Bloqueo de síntesis de melasma y fotoprotección",
        "Plan de cuidado domiciliario personalizado"
      ],
      idealFor: "Personas con melasmas, paño del embarazo o manchas solares persistentes en el rostro.",
      preCare: ["No haber usado exfoliantes químicos 1 semana antes."],
      postCare: ["Evitar exposición directa al sol y aplicar bloqueador cada 3 horas."],
      whatsappMsg: "Hola WG Cosmetóloga 🎯 Deseo consultar por el *Tratamiento de Melasmas*. ¿Cómo puedo agendar valoración?"
    },
    {
      id: "hidratacion-profunda",
      title: "Hidratación Profunda",
      subtitle: "Nutrición con Ácido Hialurónico",
      category: "facial",
      badge: "Nutrición Total 💧",
      shortDesc: "Restauración de la barrera cutánea con cóctel hialurónico, electroporación e infusión de sueros nutritivos.",
      longDesc: "Devuelve el equilibrio hídrico a las pieles deshidratadas o castigadas por el clima. Penetra en capas profundas otorgando jugosidad, flexibilidad y máxima suavidad.",
      image: "https://images.unsplash.com/photo-1597225244660-1cd128c64284?q=80&w=1000&auto=format&fit=crop",
      duration: "1 Hora",
      retention: "Efecto inmediato y duradero",
      painLevel: "Totalmente Indoloro y Relajante",
      highlights: [
        "Infusión con Ácido Hialurónico de peso molecular variado",
        "Electroporación (mesoterapia sin agujas)",
        "Mascarilla gelificada super-hidratante",
        "Sellado con sérum de vitaminas liposomadas"
      ],
      idealFor: "Pieles secas, tirantes, opacas o deshidratadas por aire acondicionado y cambios de clima.",
      preCare: ["Llegar con rostro limpio."],
      postCare: ["Beber agua y mantener rutina de hidratación."],
      whatsappMsg: "Hola WG Cosmetóloga 💧 Me interesa agendar una *Hidratación Profunda Facial*. ¿Qué fechas tienen disponibles?"
    },
    {
      id: "microneedling",
      title: "Microneedling con Principios Activos",
      subtitle: "Dermapen & Bio-estimulación",
      category: "facial",
      badge: "Alta Eficacia 🔬",
      shortDesc: "Micro-punciones controladas que inducen colágeno y penetran ampollas concentradas de principios activos puros.",
      longDesc: "Utiliza un dispositivo Dermapen con microagujas estériles para abrir microcanales en la piel, permitiendo que principios activos puros (vitaminas, ácido hialurónico, péptidos o factores de crecimiento) penetren hasta un 90% más eficientemente.",
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1000&auto=format&fit=crop",
      duration: "1.5 Horas",
      retention: "Resultados visibles desde la 1a sesión",
      painLevel: "Mínimo (Con anestesia tópica confort)",
      highlights: [
        "Aparato Dermapen profesional con agujas estériles descartables",
        "Cóctel de activos biocompatibles puros",
        "Regeneración celular e inducción de colágeno",
        "Reducción de poros dilatados y líneas finas"
      ],
      idealFor: "Pieles con poros abiertos, textura irregular, marcas leves y pérdida de tono.",
      preCare: ["Evitar aspirinas y alcohol 24h antes."],
      postCare: ["No mojar con agua de grifo 12h, usar crema regeneradora y bloqueador solar."],
      whatsappMsg: "Hola WG Cosmetóloga 🔬 Quisiera información sobre *Microneedling con Principios Activos*. ¿Me brindan detalles?"
    },
    {
      id: "dermaplaning",
      title: "Dermaplaning Facial",
      subtitle: "Exfoliación con Bisturí Médico & Peeling",
      category: "facial",
      badge: "Piel de Seda 🍃",
      shortDesc: "Exfoliación física de precisión que retira células muertas y el vello facial fino (pelusilla) para un acabado ultrasuave.",
      longDesc: "Procedimiento de exfoliación física realizado con un bisturí quirúrgico especial que elimina suavemente la capa córnea muerta y la vellosidad vello facial. El resultado es una piel de seda donde el maquillaje luce impecable.",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1000&auto=format&fit=crop",
      duration: "1 Hora",
      retention: "3 a 4 Semanas",
      painLevel: "Indoloro y muy suave",
      highlights: [
        "Retiro de vello facial y células muertas superficiales",
        "Absorción inmediata de productos cosméticos",
        "Textura ideal para maquillaje perfecto sin poros visibles",
        "Mascarilla descongestiva final"
      ],
      idealFor: "Quienes buscan eliminar la pelusilla facial y lograr una superficie cutánea ultra lisa e iluminada.",
      preCare: ["Sin acné activo ni brotes inflamatorios."],
      postCare: ["Protector solar obligatorio SPF 50+."],
      whatsappMsg: "Hola WG Cosmetóloga 🍃 Quiero agendar un servicio de *Dermaplaning Facial*. ¿Tienen agenda disponible?"
    },
    {
      id: "bb-lips",
      title: "BB Lips",
      subtitle: "Micropigmentación Suave & Color Natural",
      category: "facial",
      badge: "Labios Radiantes 💋",
      shortDesc: "Tratamiento de coloración sutil e hidratación para labios con pigmentos bio-absorbibles y efecto gloss duradero.",
      longDesc: "El tratamiento BB Lips hidrata profundamente mientras aporta un toque de color natural y fresco a tus labios sin la intensidad de una pigmentación permanente. Aporta brillo y apariencia jugosa constante.",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1000&auto=format&fit=crop",
      duration: "1 hora",
      retention: "Efecto acumulativo por semanas",
      painLevel: "Mínimo e Indoloro",
      highlights: [
        "Tono rosáceo / rojo natural personalizable",
        "Nutrición con ácido hialurónico e insumos orgánicos",
        "Sin dolor ni inflamación prolongada",
        "Ideal para labios pálidos"
      ],
      idealFor: "Labios secos o pálidos que desean verse con color natural sin maquillaje diario.",
      preCare: ["Exfoliar e hidratar días antes."],
      postCare: ["Usar bálsamo labial hidratante."],
      whatsappMsg: "Hola WG Cosmetóloga 💋 Me interesa el tratamiento de *BB Lips*. ¿Podrían agendarme o darme información?"
    },
    {
      id: "tratamiento-cicatrices-acne",
      title: "Tratamiento Cicatrices de Acné",
      subtitle: "Regeneración Dermocutánea",
      category: "facial",
      badge: "Renovación 🛡️",
      shortDesc: "Técnica intensiva para atenuar marcas del acné, secuelas en picahielo y relieve irregular en las mejillas.",
      longDesc: "Combina microagujamiento localizado, peeling químico renovador y factores de crecimiento epidérmico para alisar la textura del rostro castigado por el acné pasado.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
      duration: "1.5 Horas",
      retention: "Resultados permanentes y acumulativos",
      painLevel: "Moderado (Con anestesia en crema)",
      highlights: [
        "Atenuación de marcas en relieve y hoyuelos de acné",
        "Estimulación de nuevo colágeno en dermis profunda",
        "Exfoliación química renovadora",
        "Acompañamiento personalizado"
      ],
      idealFor: "Personas con cicatrices o secuelas de acné severo o moderado en mejillas y frente.",
      preCare: ["Sin acné inflamatorio en fase activa."],
      postCare: ["Seguir protocolo estricto de regenerante y fotoprotector."],
      whatsappMsg: "Hola WG Cosmetóloga 🛡️ Deseo consultar sobre el *Tratamiento para Cicatrices de Acné*. ¿Cómo agendo una valoración?"
    },
    {
      id: "neutralizacion-sebasea",
      title: "Neutralización de Glándula Sebácea",
      subtitle: "Control de Brillo & Piel Grasa",
      category: "facial",
      badge: "Piel Mate ✨",
      shortDesc: "Equilibrio seborregulador especializado para frenar el exceso de grasa, acné recurrente y poros obstruidos.",
      longDesc: "Tratamiento regulador del pH y la producción de sebo. Utiliza activos astringentes, zinc, ácido salicílico y fototerapia azul para normalizar las glándulas sebáceas hiperactivas.",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1000&auto=format&fit=crop",
      duration: "1.5 Horas",
      retention: "Control prolongado de grasa",
      painLevel: "Totalmente Indoloro",
      highlights: [
        "Regulación de glándulas sebáceas hiperactivas",
        "Astringencia y limpieza de poros sebáceos",
        "Luz LED Azul antibacteriana",
        "Efecto mate y limpio sin resecar"
      ],
      idealFor: "Pieles extremadamente grasas, con tendencia al acné, brillos constantes y poros dilatados.",
      preCare: ["Evitar lavar el rostro con jabones agresivos el día de la cita."],
      postCare: ["Usar geles hidratantes oil-free recomendados."],
      whatsappMsg: "Hola WG Cosmetóloga ✨ Quiero información para la *Neutralización de Glándula Sebácea*. ¿Horarios disponibles?"
    },
    {
      id: "peeling-quimico",
      title: "Peeling Químico",
      subtitle: "Renovación Celular por Ácidos",
      category: "facial",
      badge: "Renovación Profunda 🧪",
      shortDesc: "Aplicación de hidroxiácidos que exfolian capas dañadas, renovando la piel y unificando su aspecto.",
      longDesc: "Tratamiento dermatológico-estético que remueve células muertas superficiales mediante soluciones ácidas (Glicólico, Salicílico, Láctico o Mandélico). Revela una piel más joven, suave y libre de imperfecciones.",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop",
      duration: "1 Hora",
      retention: "Renovación en 7-10 días",
      painLevel: "Sensación de cosquilleo o leve ardor pasajero",
      highlights: [
        "Renovación epidérmica rápida",
        "Disminución de manchas, líneas finas y textura rugosa",
        "Soluciones ácidas de máxima seguridad cosmetológica",
        "Mascarilla neutralizante y calmante"
      ],
      idealFor: "Pieles con fotosensibilidad, textura irregular, pequeñas arrugas o secuelas pigmentarias.",
      preCare: ["No rasurar ni depilar el rostro 48h antes."],
      postCare: ["No retirar la piel descamada y usar fotoprotección total."],
      whatsappMsg: "Hola WG Cosmetóloga 🧪 Me interesa solicitar cita para un *Peeling Químico*. ¿Qué fechas disponen?"
    },

    /* ==========================================================================
       CATEGORÍA: CORPORAL
       ========================================================================== */
    {
      id: "spa-relajante",
      title: "Spa Relajante Corporal",
      subtitle: "Masaje Antiestrés & Aromaterapia",
      category: "corporal",
      badge: "Desconexión Total 🌿",
      shortDesc: "Masaje corporal completo de pies a cabeza con aceites esenciales, aromaterapia y piedras calientes para renovar tu energía.",
      longDesc: "Sumérgete en una experiencia de paz física y mental. Combinamos maniobras envolventes, aromaterapia relajante y musicoterapia en una atmósfera privada para aliviar tensiones musculares y reducir el estrés acumulado.",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop",
      duration: "1 Hora a 1.5 Horas",
      retention: "Relajación inmediata",
      painLevel: "Placentero e indoloro",
      highlights: [
        "Masaje integral de espalda, cuello, extremidades y pies",
        "Aceites esenciales aromáticos y calientes",
        "Ambiente privado con aromaterapia y luz tenue",
        "Drenaje muscular descompresivo"
      ],
      idealFor: "Personas con insomnio, estrés laboral, agotamiento muscular o que buscan un día de auto-cuidado.",
      preCare: ["Acudir con ropa cómoda y sin alimentos pesados recientes."],
      postCare: ["Mantenerse bien hidratado tras la sesión."],
      whatsappMsg: "Hola WG Cosmetóloga 🌿 Deseo agendar una sesión de *Spa Relajante Corporal*. ¿Qué horarios tienen libres?"
    },
    {
      id: "masaje-descontracturante",
      title: "Masaje Descontracturante y Terapéutico",
      subtitle: "Alivio Muscular Profundo",
      category: "corporal",
      badge: "Alivio Dolor 💆‍♀️",
      shortDesc: "Maniobras de presión profunda orientadas a deshacer nudos musculares en espalda, hombros y zona lumbar.",
      longDesc: "Masaje enfocado en liberar nudos musculares (contracturas) causados por malas posturas, sobrecarga física o tensión acumulada en la zona cervical, dorsal y lumbar.",
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1000&auto=format&fit=crop",
      duration: "1 Hora",
      retention: "Sensación de ligereza duradera",
      painLevel: "Presión firme / molestia liberadora",
      highlights: [
        "Localización y liberación de puntos gatillo",
        "Estiramientos musculares y masoterapia focalizada",
        "Termoterapia con toallas calientes",
        "Mejora inmediata de movilidad"
      ],
      idealFor: "Personas con dolores de espalda, cuello tenso, sobrecarga por gimnasio o trabajo de oficina.",
      preCare: ["Informar si hay lesiones previas o hernias."],
      postCare: ["Tomar agua y descansar la zona tratada."],
      whatsappMsg: "Hola WG Cosmetóloga 💆‍♀️ Necesito agendar un *Masaje Descontracturante y Terapéutico*. ¿Cuándo tienen cita disponible?"
    },
    {
      id: "masaje-reductor-manual",
      title: "Masaje Reductor Manual",
      subtitle: "Moldeo de Silueta & Drenaje",
      category: "corporal",
      badge: "Moldeo Corporal 🔥",
      shortDesc: "Técnica manual rápida y enérgica que ayuda a disolver adiposidad localizada y moldear cintura y abdomen.",
      longDesc: "Técnica de masaje vigoroso y amasamiento que activa la circulación sanguínea, moviliza la grasa localizada en abdomen, flancos y piernas, favoreciendo su eliminación por vía linfática.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop",
      duration: "50 Minutos",
      retention: "Paquetes de 5 o 10 sesiones recomendados",
      painLevel: "Presión enérgica constante",
      highlights: [
        "Maniobras firmes de amasamiento y fricción",
        "Geles criogénicos o reafirmantes térmicos",
        "Drenaje linfático de toxinas",
        "Reducción de medidas en zonas críticas"
      ],
      idealFor: "Quienes buscan afinar cintura, reducir grasa localizada en abdomen o piernas y mejorar la firmeza.",
      preCare: ["Asistir en ayunas de 1 hora previa."],
      postCare: ["Beber bastante agua y combinar con actividad física."],
      whatsappMsg: "Hola WG Cosmetóloga 🔥 Me interesa información de *Masaje Reductor Manual* y paquetes. ¿Me ayudan?"
    },
    {
      id: "masaje-maderoterapia",
      title: "Masaje Reductor con Maderoterapia",
      subtitle: "Copas, Rodillos & Escultor de Madera",
      category: "corporal",
      badge: "Top Escultural 🪵",
      shortDesc: "Uso de elementos anatómicos de madera natural para drenar, romper celulitis y moldear la figura de forma efectiva.",
      longDesc: "La Maderoterapia es una técnica natural que utiliza instrumentos de madera diseñados anatómicamente (tabla moldeadora, copa sueca, rodillos estriados) para reafirmar y tonificar, combatir la celulitis y modelar el contorno corporal.",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop",
      duration: "1 Hora",
      retention: "Resultados visibles rápidamente",
      painLevel: "Intenso pero tolerable",
      highlights: [
        "Uso de utensilios anatómicos de madera fina",
        "Ruptura de depósitos grasos y celulitis",
        "Elevación de glúteos y moldeo de cintura",
        "Reafirmación de tejidos laxos"
      ],
      idealFor: "Reducción de celulitis, levantamiento de glúteos y definición marcada de contornos.",
      preCare: ["Hidratar bien el cuerpo."],
      postCare: ["Usar faja moldeadora si se recomienda y tomar agua."],
      whatsappMsg: "Hola WG Cosmetóloga 🪵 Quiero agendar mi sesión de *Masaje Reductor con Maderoterapia*. ¿Qué horarios tienen?"
    },
    {
      id: "masaje-anticelulitico",
      title: "Masaje Anticelulítico",
      subtitle: "Eliminación de Piel de Naranja",
      category: "corporal",
      badge: "Piel Lisa ✨",
      shortDesc: "Tratamiento enfocado en romper los nódulos celulíticos en muslos, glúteos y caderas mejorando la circulación.",
      longDesc: "Masaje específico enfocado en activar el drenaje linfático e hiperemia en zonas afectadas por la piel de naranja. Suaviza hoyuelos en piernas y glúteos.",
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1000&auto=format&fit=crop",
      duration: "50 Minutos",
      retention: "Efecto acumulativo con sesiones continuas",
      painLevel: "Presión media a firme",
      highlights: [
        "Drenaje Venolinfático y rotura de nódulos grasos",
        "Crema reductora concentrada",
        "Mejora notable del aspecto de la piel",
        "Activación microcirculatoria"
      ],
      idealFor: "Tratar la celulitis edematosa o fibrosa en piernas, caderas y glúteos.",
      preCare: ["Ingerir abundante agua el día anterior."],
      postCare: ["Realizar caminata activa post-sesión para quemar grasa liberada."],
      whatsappMsg: "Hola WG Cosmetóloga ✨ Quisiera consultar sobre el *Masaje Anticelulítico*. ¿Me brindan precios y turnos?"
    },
    {
      id: "tonificacion-senos-gluteos",
      title: "Tonificación de Senos y Glúteos",
      subtitle: "Reafirmación & Push-Up",
      category: "corporal",
      badge: "Efecto Push-Up 🍑",
      shortDesc: "Estimulación electromuscular y mascarillas tensoras para reafirmar y levantar el tejido de senos y glúteos.",
      longDesc: "Tratamiento reafirmante y moldeador que combina gimnasia pasiva, maniobras de levantamiento y mascarillas frías de colágeno/elastina para recuperar la firmeza y tonicidad muscular en glúteos o busto.",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop",
      duration: "1 Hora",
      retention: "Reafirmación progresiva",
      painLevel: "Sensación de contracción muscular sin dolor",
      highlights: [
        "Electroestimulación muscular profunda",
        "Técnicas de vacuterapia / copa de levantamiento",
        "Cremas con tensor vegetal y ácido hialurónico",
        "Aspecto más firme y elevado"
      ],
      idealFor: "Flacidez muscular post-embarazo, pérdida rápida de peso o tono en busto y glúteos.",
      preCare: ["No aplicar cremas corporales pesadas antes de asistir."],
      postCare: ["Evitar duchas extremadamente calientes el mismo día."],
      whatsappMsg: "Hola WG Cosmetóloga 🍑 Deseo agendar cita para *Tonificación de Senos y Glúteos*. ¿Qué fechas tienen libre?"
    },
    {
      id: "yesoterapia-lipolitica",
      title: "Yesoterapia Lipolítica",
      subtitle: "Vendaje Reductor & Oclusivo",
      category: "corporal",
      badge: "Reducción Intensiva ⏳",
      shortDesc: "Vendajes impregnados en extractos naturales reductores que comprimen y moldean abdomen y cintura.",
      longDesc: "Tratamiento oclusivo en el cual se aplican vendas cargadas con centella asiática, cafeína y minerales lipolíticos. La faja de yeso compacta el tejido graso y reduce centímetros en pocas horas.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop",
      duration: "1 Hora (Aplicación + Tiempo de acción)",
      retention: "Reducción rápida de medidas",
      painLevel: "Comprensión firme / Indoloro",
      highlights: [
        "Aplicación de concentrado lipolítico potentes",
        "Vendaje oclusivo anatómico de yeso estético",
        "Efecto reductor y tensor inmediato",
        "Ideal antes de eventos importantes"
      ],
      idealFor: "Quienes desean bajar centímetros de abdomen o cintura de forma rápida antes de un evento.",
      preCare: ["Acudir con ropa cómoda y suelta."],
      postCare: ["Mantener el vendaje durante las horas indicadas."],
      whatsappMsg: "Hola WG Cosmetóloga ⏳ Me interesa la *Yesoterapia Lipolítica*. ¿Me indican costos y disponibilidad?"
    },

    /* ==========================================================================
       CATEGORÍA: EPILACIÓN EN CERA & VAGISPA
       ========================================================================== */
    {
      id: "cejas-diseno-henna",
      title: "Cejas con Diseño y Henna",
      subtitle: "Visagismo & Pigmentación Orgánica",
      category: "epilacion",
      badge: "Mirada Perfecta 🌿",
      shortDesc: "Depilación con cera/pinza según visagismo facial y sombreado temporal con henna natural biocompatible.",
      longDesc: "Diseño personalizado adaptado a tus facciones. Limpiamos y depilamos la ceja dando la curva perfecta y aplicamos Henna vegetal que tiñe la piel y el pelo creando un efecto de sombreado elegante por días.",
      image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1000&auto=format&fit=crop",
      duration: "45 Minutos",
      retention: "8 a 15 Días según tipo de piel",
      painLevel: "Mínimo",
      highlights: [
        "Diseño con calibrador pie de rey (visagismo)",
        "Epilación suave con cera elástica o pinza",
        "Henna orgánica en tonos castaños / cafés naturales",
        "Acabado sombreado sin necesidad de maquillaje diario"
      ],
      idealFor: "Cejas con huequitos o quienes quieren probar cómo se verían con un diseño sombreado.",
      preCare: ["Evitar exfoliación en cejas 2 días antes."],
      postCare: ["No mojar la zona con agua caliente las primeras 12 horas."],
      whatsappMsg: "Hola WG Cosmetóloga 🌿 Quiero agendar cita para *Cejas con Diseño y Henna*. ¿Qué turnos tienen?"
    },
    {
      id: "epilacion-cera-zonas",
      title: "Epilación en Cera Corporal & Facial",
      subtitle: "Cejas, Bozo, Nariz, Axilas, Brazos, Piernas, Bikini, Peritoneal",
      category: "epilacion",
      badge: "Piel Suave 🌸",
      shortDesc: "Depilación profesional con cera de baja temperatura en todas las zonas corporales y faciales.",
      longDesc: "Retiro de vello de raíz utilizando cera elástica enriquecida con caléndula o manzanilla, que cuida tu piel sensible y minimiza la irritación. Disponible en todas las zonas:",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop",
      duration: "15 a 60 Minutos (según zonas)",
      retention: "3 a 4 Semanas de piel suave",
      painLevel: "Molestia rápida y tolerable",
      highlights: [
        "Cera elástica tibia de aloe vera o manzanilla",
        "Zonas: Cejas, Bozo, Nariz, Axilas, Brazos, Piernas Completas, Bikini, Zona Peritoneal",
        "Retiro de vello de raíz desde el folículo",
        "Loción post-depilatoria hidratante y retardadora de vello"
      ],
      idealFor: "Higiene y suavidad prolongada en cualquier zona del cuerpo.",
      preCare: ["El vello debe tener un largo mínimo de 3 a 5 mm."],
      postCare: ["Evitar sol directo, piscina y desodorantes con alcohol en axilas por 24h."],
      whatsappMsg: "Hola WG Cosmetóloga 🌸 Quiero agendar *Epilación en Cera*. Zonas de mi interés: (indicar zonas). ¿Disponibilidad?"
    },
    {
      id: "vagispa",
      title: "Vagispa Especializado",
      subtitle: "Tratamiento Íntimo Regenerador & Calmant",
      category: "epilacion",
      badge: "Cuidado Íntimo 💕",
      shortDesc: "Spa y tratamiento calmante, desinflamatorio e hidratante para la zona íntima femenina post-epilación.",
      longDesc: "Un tratamiento delicado de higiene, vaporización tibia, exfoliación suave, mascarilla descongestiva e hidratación para la zona íntima femenina. Previene encarnación de vellos, foliculitis y aclara gradualmente la zona.",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop",
      duration: "45 Minutos",
      retention: "Sensación de bienestar continuo",
      painLevel: "Totalmente Indoloro y Confortable",
      highlights: [
        "Exfoliación e higienización íntima con productos hipoalergénicos",
        "Vapor ozonizado y descongestión",
        "Mascarilla hidroplástica calmante de caléndula / aloe",
        "Prevención de vellos encarnados y foliculitis"
      ],
      idealFor: "Mujeres que sufren de irritación o granitos en la zona íntima tras la depilación.",
      preCare: ["Realizarse idealmente junto o posterior a la epilación en cera de bikini."],
      postCare: ["Usar ropa interior suelta de algodón."],
      whatsappMsg: "Hola WG Cosmetóloga 💕 Deseo consultar detalles y agendar una sesión de *Vagispa*. ¿Me informan?"
    },

    /* ==========================================================================
       CATEGORÍA: DESPIGMENTACIÓN
       ========================================================================== */
    {
      id: "despigmentacion-zonas",
      title: "Despigmentación Zonas Íntimas & Corporales",
      subtitle: "Axilas, Entre Piernas y Rodillas",
      category: "despigmentacion",
      badge: "Tono Unificado ✨",
      shortDesc: "Aclaramiento progresivo de manchas oscuras en axilas, entre piernas y rodillas mediante exfoliación y peelings despigmentantes.",
      longDesc: "Protocolo despigmentante especializado para zonas sensibles o propensas al roce. Elimina manchas hiperpigmentadas en axilas, entrepiernas y rodillas por fricción, rasurado o cambios hormonales.",
      image: "https://images.unsplash.com/photo-1597225244660-1cd128c64284?q=80&w=1000&auto=format&fit=crop",
      duration: "45 a 60 Minutos por sesión",
      retention: "Protocolo de varias sesiones según el grado de mancha",
      painLevel: "Indoloro / Leve cosquilleo de ácidos suavizados",
      highlights: [
        "Tratamiento para: Axilas, Entre Piernas y Rodillas",
        "Peeling químico aclarador de alta tolerancia en pieles sensibles",
        "Disminución progresiva del tono oscuro",
        "Regeneración y suavidad extrema en la piel tratada"
      ],
      idealFor: "Personas acomplejadas por el oscurecimiento de axilas, entrepiernas o rodillas.",
      preCare: ["No rasurar la zona 48h antes del tratamiento."],
      postCare: ["Usar desodorante sin alcohol y evitar ropa apretada que genere fricción."],
      whatsappMsg: "Hola WG Cosmetóloga ✨ Quiero información sobre el tratamiento de *Despigmentación* (Axilas/Entre Piernas/Rodillas). ¿Disponibilidad?"
    }
  ],

  gallery: [
    {
      id: "g1",
      category: "facial",
      title: "Limpieza Facial Profunda & Ozono",
      tag: "Tratamiento Facial",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "g2",
      category: "facial",
      title: "Efecto Porcelanización Facial",
      tag: "Piel de Porcelana 💎",
      image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "g3",
      category: "corporal",
      title: "Maderoterapia & Moldeo Corporal",
      tag: "Tratamiento Corporal",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "g4",
      category: "epilacion",
      title: "Diseño de Cejas con Henna Orgánica",
      tag: "Diseño & Epilación",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "g5",
      category: "facial",
      title: "BB Lips & Hidratación Labial",
      tag: "Estética Facial 💋",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "g6",
      category: "despigmentacion",
      title: "Aclaramiento & Despigmentación de Axilas",
      tag: "Despigmentación",
      image: "https://images.unsplash.com/photo-1597225244660-1cd128c64284?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "g7",
      category: "corporal",
      title: "Masaje Descontracturante Espalda",
      tag: "Spa & Bienestar",
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "g8",
      category: "epilacion",
      title: "Sesión Vagispa & Cuidado Íntimo",
      tag: "Vagispa",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop"
    }
  ],

  testimonials: [
    {
      name: "Andrea C.",
      service: "Porcelanización & Limpieza Profunda",
      comment: "¡Excelente atención! Mi piel quedó sper suave e iluminada desde la primera sesión. Se nota el amor y profesionalismo de WG Cosmetóloga.",
      rating: 5,
      date: "Hace 1 semana"
    },
    {
      name: "Mariana L.",
      service: "Maderoterapia & Masaje Reductor",
      comment: "He reducido centímetros notables en abdomen y cintura. Los masajes y la maderoterapia son súper efectivos y el ambiente es súper relajante.",
      rating: 5,
      date: "Hace 2 semanas"
    },
    {
      name: "Paola G.",
      service: "Despigmentación de Axilas",
      comment: "Tenía las axilas muy oscuras por el rasurador. Con las sesiones de despigmentación el cambio ha sido del cielo a la tierra. Recomendadísima 100%.",
      rating: 5,
      date: "Hace 3 semanas"
    },
    {
      name: "Catalina V.",
      service: "Diseño de Cejas & Vagispa",
      comment: "El servicio de Vagispa es una maravilla para evitar granitos y la epilación de cejas con henna me dura un montón. Me encanta su cabina.",
      rating: 5,
      date: "Hace 1 mes"
    }
  ],

  faqs: [
    {
      question: "¿Cómo puedo agendar mi cita y consultar disponibilidad?",
      answer: "Puedes agendar fácilmente tocando cualquier botón de 'Agendar Cita' o el botón flotante de WhatsApp (+57 315 346 2414). Te responderemos rápido con la disponibilidad de agenda."
    },
    {
      question: "¿Qué tratamientos recomiendan si es mi primera vez?",
      answer: "Si es tu primera vez en estética facial, te recomendamos una Limpieza Facial Profunda o Porcelanización Facial para preparar y evaluar tu piel. Para corporal, un Spa Relajante o valoración de masajes según tu objetivo."
    },
    {
      question: "¿Cuántas sesiones de despigmentación o masajes reductores se necesitan?",
      answer: "Varía según cada persona, pero en masajes reductores y despigmentación se recomienda un protocolo inicial de 5 a 10 sesiones con frecuencia semanal para ver resultados notorios y duraderos."
    },
    {
      question: "¿El servicio de Vagispa o epilación causa irritación?",
      answer: "Utilizamos cera elástica de alta calidad formulada para pieles sensibles y productos post-depilatorios descongestivos en el Vagispa que previenen la inflamación y los vellos encarnados."
    }
  ]
};

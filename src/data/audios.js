// ============================================================================
// BASE DE DATOS OFICIAL: CURSO IDIOMA MATSIGENKA – NIVEL A1
// Centro de Idiomas - Facultad de Letras y Ciencias Humanas (UNMSM)
// Docente responsable: Ruth Mari Sebastian Leonidas
// ============================================================================

export const INFO_CURSO = {
  curso: "Idioma Matsigenka – Nivel A1",
  institucion: "Centro de Idiomas - FLCH (UNMSM)",
  docente: "Ruth Mari Sebastian Leonidas",
};

const DEMO_URL = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

export const LISTA_PPT = [
  // ==========================================
  // UNIDAD 1 • SUBNIVEL A1.1 (PPT 1 al 16)
  // ==========================================
  {
    id: "PPT 1", unidad: "Unidad 1", subnivel: "Subnivel A1.1", semana: "Semana 1", parte: "Primera parte",
    titulo: "Saludos básicos e interacción inicial",
    tema: "Comprender y utilizar saludos básicos según el momento del día, iniciar una interacción sencilla y responder a preguntas sobre el estado de ánimo mediante diálogos breves.",
    disponible: true,
    portada: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    audios: [
      { num: 1, diapositiva: "Escucha y repite", desc: "Saludo por la mañana.", duracion: "00:35", url: DEMO_URL },
      { num: 2, diapositiva: "Escucha y repite", desc: "Saludo por la tarde.", duracion: "00:35", url: DEMO_URL },
      { num: 3, diapositiva: "Escucha y diferencia", desc: "Buenas noches cuando está anocheciendo.", duracion: "00:40", url: DEMO_URL },
      { num: 4, diapositiva: "Escucha y diferencia", desc: "Buenas noches antes de dormir.", duracion: "00:40", url: DEMO_URL },
      { num: 5, diapositiva: "Saludo + pregunta", desc: "Saludo acompañado de la pregunta ¿Aiñompi?", duracion: "00:45", url: DEMO_URL },
      { num: 6, diapositiva: "Responder al saludo", desc: "Diálogo completo: saludo, respuesta y devolución de la pregunta.", duracion: "00:50", url: DEMO_URL },
      { num: 7, diapositiva: "Responder al saludo", desc: "Variantes para responder a la pregunta ¿Cómo estás?", duracion: "00:45", url: DEMO_URL },
      { num: 8, diapositiva: "Escucha el diálogo", desc: "Diálogo completo entre dos interlocutores.", duracion: "00:50", url: DEMO_URL },
      { num: 9, diapositiva: "Expresar negación", desc: "Diálogo afirmativo sobre el estado de ánimo.", duracion: "00:45", url: DEMO_URL },
      { num: 10, diapositiva: "Expresar negación", desc: "Diálogo negativo sobre el estado de ánimo.", duracion: "00:45", url: DEMO_URL },
    ]
  },
  {
    id: "PPT 2", unidad: "Unidad 1", subnivel: "Subnivel A1.1", semana: "Semana 1", parte: "Primera parte",
    titulo: "Fórmulas sociales en interacción contextual",
    tema: "Comprender y utilizar fórmulas sociales en diferentes contextos comunicativos, saludando según el momento del día y preguntando sobre el estado de ánimo.",
    disponible: true,
    portada: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    audios: [
      { num: 1, diapositiva: "Recordamos el diálogo base", desc: "Diálogo de repaso: saludo nocturno, pregunta Aiñompi?, respuesta positiva con nonasaantake, devolución con Impo viro? y respuesta final indicando tranquilidad.", duracion: "00:50", url: DEMO_URL },
      { num: 2, diapositiva: "Escucha y responde", desc: "Diálogo completo: saludo de buenas noches (para ir a dormir), intercambio de saludos con aikiro, pregunta y respuesta sobre el estado de ánimo utilizando nonake.", duracion: "00:45", url: DEMO_URL },
      { num: 3, diapositiva: "¿Qué emoción escuchas?", desc: "Diálogo con saludos matutinos donde se expresan los estados emocionales preocupado y triste, utilizando las formas nonake.", duracion: "00:45", url: DEMO_URL },
      { num: 4, diapositiva: "Escucha y completa", desc: "Diálogo con saludo por la tarde; el interlocutor expresa que está enfermo, devuelve la pregunta y recibe como respuesta que la otra persona está cansada.", duracion: "00:50", url: DEMO_URL },
      { num: 5, diapositiva: "Escucha y ordena", desc: "Diálogo en el que se expresa el estado emocional triste y posteriormente preocupada, manteniendo la estructura completa.", duracion: "00:45", url: DEMO_URL },
      { num: 6, diapositiva: "Escucha y elige respuesta", desc: "Diálogo con saludo nocturno (antes de dormir); el interlocutor expresa que está enferma y la otra persona responde indicando que está eufórica.", duracion: "00:45", url: DEMO_URL },
      { num: 7, diapositiva: "Escucha y escribe", desc: "Audio con cuatro expresiones independientes de estados emocionales: estoy enferma, estoy cansado, estoy preocupado y estoy eufórico.", duracion: "00:50", url: DEMO_URL },
    ]
  },
  {
    id: "PPT 3", unidad: "Unidad 1", subnivel: "Subnivel A1.1", semana: "Semana 1", parte: "Primera parte",
    titulo: "Presentación personal: identificación y pronombres básicos",
    tema: "Presentarse y preguntar el nombre de otras personas, reconociendo pronombres en singular y plural (inclusivo/exclusivo).",
    disponible: true,
    portada: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80",
    audios: [
      { num: 1, diapositiva: "Recordamos lo aprendido", desc: "Diálogo breve de saludo y estado de ánimo: saludo matutino, pregunta Aiñompi?, respuesta con aikiro, preocupación y respuesta indicando que está solo.", duracion: "00:40", url: DEMO_URL },
      { num: 2, diapositiva: "Recordamos lo aprendido", desc: "Diálogo extendido: además del saludo y estado, preguntan y responden ¿Tyara pipaita? ('¿Cómo te llamas?'), intercambian nombres y finalizan con Ah ya.", duracion: "00:40", url: DEMO_URL },
      { num: 3, diapositiva: "¿Cómo preguntamos y decimos el nombre?", desc: "Diálogo para preguntar y responder el nombre entre dos interlocutores, incluyendo la devolución de la pregunta.", duracion: "00:40", url: DEMO_URL },
      { num: 4, diapositiva: "Nuevos pronombres", desc: "Audio con los pronombres personales: él, ella, nosotros(as) exclusivo, nosotros(as) inclusivo, ustedes, ellos y ellas.", duracion: "00:40", url: DEMO_URL },
      { num: 5, diapositiva: "Discriminación auditiva", desc: "Pronombre él.", duracion: "00:40", url: DEMO_URL },
      { num: 6, diapositiva: "Discriminación auditiva", desc: "Pronombre ella.", duracion: "00:40", url: DEMO_URL },
      { num: 7, diapositiva: "Discriminación auditiva", desc: "Pronombre nosotros(as) exclusivo (naroegi).", duracion: "00:40", url: DEMO_URL },
      { num: 8, diapositiva: "Discriminación auditiva", desc: "Pronombre nosotros(as) inclusivo (aroegi).", duracion: "00:40", url: DEMO_URL },
      { num: 9, diapositiva: "Discriminación auditiva", desc: "Pronombre tú.", duracion: "00:40", url: DEMO_URL },
      { num: 10, diapositiva: "Discriminación auditiva", desc: "Contraste entre él y ellos.", duracion: "00:40", url: DEMO_URL },
      { num: 11, diapositiva: "Discriminación auditiva", desc: "Contraste entre ellos (iriroegi) y él (irirori).", duracion: "00:40", url: DEMO_URL },
      { num: 12, diapositiva: "Asociación sonido - significado", desc: "Pronombre naro (yo).", duracion: "00:40", url: DEMO_URL },
      { num: 13, diapositiva: "Asociación sonido - significado", desc: "Pronombre aroegi (nosotros inclusivo).", duracion: "00:40", url: DEMO_URL },
      { num: 14, diapositiva: "Asociación sonido - significado", desc: "Pronombre irirori (él).", duracion: "00:40", url: DEMO_URL },
      { num: 15, diapositiva: "Oposición singular - plural", desc: "Comparación entre naro (yo) y naroegi (nosotros exclusivo).", duracion: "00:40", url: DEMO_URL },
      { num: 16, diapositiva: "Oposición singular - plural", desc: "Comparación entre irirori (él) e iriroegi (ellos).", duracion: "00:40", url: DEMO_URL },
      { num: 17, diapositiva: "Oposición singular - plural", desc: "Comparación entre irorori (ella) e iroroegi (ellas).", duracion: "00:40", url: DEMO_URL },
      { num: 18, diapositiva: "Nosotros: ¿te incluyo o no?", desc: "Pronombre naroegi (nosotros exclusivo).", duracion: "00:40", url: DEMO_URL },
      { num: 19, diapositiva: "Nosotros: ¿te incluyo o no?", desc: "Pronombre aroegi (nosotros inclusivo).", duracion: "00:40", url: DEMO_URL },
      { num: 20, diapositiva: "Nosotros: ¿te incluyo o no?", desc: "Comparación entre naroegi y aroegi.", duracion: "00:40", url: DEMO_URL },
      { num: 21, diapositiva: "Nosotros: ¿te incluyo o no?", desc: "Comparación entre aroegi y naroegi (orden inverso).", duracion: "00:40", url: DEMO_URL },
      { num: 22, diapositiva: "Cuando somos varios, la palabra cambia", desc: "Comparación entre nopaita (me llamo) y nopaitaiga (nos llamamos).", duracion: "00:40", url: DEMO_URL },
      { num: 23, diapositiva: "Cuando somos varios, la palabra cambia", desc: "Comparación entre nopaitaiga (nos llamamos) y nopaita (me llamo).", duracion: "00:40", url: DEMO_URL },
      { num: 24, diapositiva: "Completa la estructura", desc: "Naro nopaita (yo me llamo).", duracion: "00:40", url: DEMO_URL },
      { num: 25, diapositiva: "Completa la estructura", desc: "Naro nopaitaiga (estructura incorrecta para análisis).", duracion: "00:40", url: DEMO_URL },
      { num: 26, diapositiva: "Completa la estructura", desc: "Contraste entre naro nopaita y naro nopaitaiga.", duracion: "00:40", url: DEMO_URL },
      { num: 27, diapositiva: "Completa la estructura", desc: "Contraste entre naroegi nopaitaiga y naro nopaitaiga.", duracion: "00:40", url: DEMO_URL },
      { num: 28, diapositiva: "Completa la estructura", desc: "Naroegi nopaitaiga (nosotros exclusivo).", duracion: "00:40", url: DEMO_URL },
      { num: 29, diapositiva: "Completa la estructura", desc: "Aroegi apaitaiga (nosotros inclusivo).", duracion: "00:40", url: DEMO_URL },
      { num: 30, diapositiva: "Completa la estructura", desc: "Contraste entre naroegi nopaitaiga y aroegi apaitaiga.", duracion: "00:40", url: DEMO_URL },
      { num: 31, diapositiva: "Completa la estructura", desc: "Contraste entre aroegi apaitaiga y naroegi nopaitaiga (orden inverso).", duracion: "00:40", url: DEMO_URL },
      { num: 32, diapositiva: "Mini diálogo integrado", desc: "Diálogo final que integra la presentación personal y el uso de los pronombres personales en singular y plural.", duracion: "00:40", url: DEMO_URL },
    ]
  },
  {
    id: "PPT 4", unidad: "Unidad 1", subnivel: "Subnivel A1.1", semana: "Semana 1", parte: "Primera parte",
    titulo: "Presentamos a él y a ella (nombre + estado)",
    tema: "Presentar e identificar a terceras personas utilizando su nombre y estado de ánimo.",
    disponible: true,
    portada: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
    audios: [
      { num: 1, diapositiva: "Activamos lo aprendido", desc: "Diálogo entre una docente y un estudiante (saludo tarde, Aiñompi?, eufórico).", duracion: "00:50", url: DEMO_URL },
      { num: 2, diapositiva: "Activamos lo aprendido", desc: "Continuación del diálogo: la docente pregunta ¿Tyara pipaita?; el estudiante responde Lucas y la docente Luzmila.", duracion: "00:45", url: DEMO_URL },
      { num: 3, diapositiva: "Activamos lo aprendido", desc: "Cierre del diálogo: preguntas cruzadas '¿Cómo me llamo?' y '¿Cómo me llamo yo?'.", duracion: "00:40", url: DEMO_URL },
      { num: 4, diapositiva: "Escuchamos y descubrimos", desc: "Presentación utilizando nombre y pronombres: Naro nopaita Rosa, Irirori ipaita Juan.", duracion: "00:50", url: DEMO_URL },
    ]
  },
  {
    id: "PPT 5", unidad: "Unidad 1", subnivel: "Subnivel A1.1", semana: "Semana 2", parte: "Primera parte",
    titulo: "Presentamos grupos y preguntamos cómo están",
    tema: "Pronombres en plural, verbo llamarse según la persona y sistema Aiño para preguntar por existencia.",
    disponible: true,
    portada: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80",
    audios: [
      { num: 1, diapositiva: "Recuperación activa", desc: "Presentación de cuatro personas utilizando distintos pronombres personales: yo (Rosa), tú (Carlos), él (Juan) y ella (María).", duracion: "00:45", url: DEMO_URL },
      { num: 2, diapositiva: "Escucha y analiza", desc: "Naroegi nopaitaiga Grupo 1: 'Nosotros (exclusivo) nos llamamos Grupo 1'.", duracion: "00:45", url: DEMO_URL },
      { num: 3, diapositiva: "Escucha y analiza", desc: "Aroegi apaitaiga Grupo 2: 'Nosotros (inclusivo) nos llamamos Grupo 2'.", duracion: "00:45", url: DEMO_URL },
      { num: 4, diapositiva: "Escucha y analiza", desc: "Viroegi pipaitaiga Grupo 3: 'Ustedes se llaman Grupo 3'.", duracion: "00:45", url: DEMO_URL },
      { num: 5, diapositiva: "Pronombres plurales + llamarse", desc: "Naroegi nopaitaiga Rosa, Ana: nosotros (exclusivo) nos llamamos Rosa y Ana.", duracion: "00:45", url: DEMO_URL },
      { num: 6, diapositiva: "Pronombres plurales + llamarse", desc: "Aroegi apaitaiga Rosa, Ana, Carmen: nosotros (inclusivo) nos llamamos Rosa, Ana y Carmen.", duracion: "00:45", url: DEMO_URL },
      { num: 7, diapositiva: "Pronombres plurales + llamarse", desc: "Viroegi pipaitaiga Carlos, Luis: ustedes se llaman Carlos y Luis.", duracion: "00:45", url: DEMO_URL },
      { num: 8, diapositiva: "Pronombres plurales + llamarse", desc: "Iriroegi ipaitaiga Juan, Pedro: ellos se llaman Juan y Pedro.", duracion: "00:45", url: DEMO_URL },
      { num: 9, diapositiva: "Pronombres plurales + llamarse", desc: "Iroroegi opaitaiga Marta, Julia: ellas se llaman Marta y Julia.", duracion: "00:45", url: DEMO_URL },
      { num: 10, diapositiva: "Cambiamos la persona", desc: "¿Aiñona naro?: '¿Sigo aquí?, ¿sigo existiendo o viviendo?'.", duracion: "00:45", url: DEMO_URL },
      { num: 11, diapositiva: "Cambiamos la persona", desc: "¿Aiñompi viro?: '¿Sigues aquí?, ¿sigues existiendo o viviendo?'.", duracion: "00:45", url: DEMO_URL },
      { num: 12, diapositiva: "Cambiamos la persona", desc: "¿Aiñoni irirori?: '¿Él sigue aquí?'.", duracion: "00:45", url: DEMO_URL },
      { num: 13, diapositiva: "Cambiamos la persona", desc: "¿Aiñoni irorori?: '¿Ella sigue aquí?'.", duracion: "00:45", url: DEMO_URL },
      { num: 14, diapositiva: "Preguntamos en plural", desc: "¿Aiñompi (viro)?: pregunta dirigida a la segunda persona singular, con o sin pronombre explícito.", duracion: "00:45", url: DEMO_URL },
      { num: 15, diapositiva: "Preguntamos en plural", desc: "¿Aiñoegini naroegi?: '¿Seguimos nosotros (exclusivo)?'.", duracion: "00:45", url: DEMO_URL },
      { num: 16, diapositiva: "Preguntamos en plural", desc: "¿Aiñoegini aroegi?: '¿Seguimos nosotros (inclusivo)?'.", duracion: "00:45", url: DEMO_URL },
      { num: 17, diapositiva: "Preguntamos en plural", desc: "¿Aiñompiegini (viroegi)?: '¿Siguen ustedes?'.", duracion: "00:45", url: DEMO_URL },
      { num: 18, diapositiva: "Preguntamos en plural", desc: "¿Aiñoegini iriroegi?: '¿Siguen ellos?'.", duracion: "00:45", url: DEMO_URL },
      { num: 19, diapositiva: "Preguntamos en plural", desc: "¿Aiñoegini iroroegi?: '¿Siguen ellas?'.", duracion: "00:45", url: DEMO_URL },
      { num: 20, diapositiva: "Escucha y reconoce el estado", desc: "Naro nonake noshinetakara: 'Estoy feliz'.", duracion: "00:45", url: DEMO_URL },
      { num: 21, diapositiva: "Escucha y reconoce el estado", desc: "Viro pinake pipochokitakera: 'Tú tienes sueño'.", duracion: "00:45", url: DEMO_URL },
      { num: 22, diapositiva: "Escucha y reconoce el estado", desc: "Irirori inake ikenkiakera: 'Él está pensando'.", duracion: "00:45", url: DEMO_URL },
      { num: 23, diapositiva: "Escucha y reconoce el estado", desc: "Irorori onake okiisakara: 'Ella está molesta'.", duracion: "00:45", url: DEMO_URL },
    ]
  },
  {
    id: "PPT 6", unidad: "Unidad 1", subnivel: "Subnivel A1.1", semana: "Semana 2", parte: "Primera parte",
    titulo: "Estados emocionales en plural",
    tema: "Expresar estados emocionales en singular y plural, identificando los cambios morfológicos del verbo estar.",
    disponible: true,
    portada: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=600&q=80",
    audios: [
      { num: 1, diapositiva: "Escucha y recuerda", desc: "Comparación entre naro nonake kameti ('yo estoy bien') y naro nonasaantake kameti ('yo estoy muy bien').", duracion: "00:40", url: DEMO_URL },
      { num: 2, diapositiva: "Escucha y recuerda", desc: "Expresiones viro pinake pishinetakara ('tú estás feliz') y viro pinake pishigoputakera ('tú estás cansado').", duracion: "00:40", url: DEMO_URL },
      { num: 3, diapositiva: "Escucha y recuerda", desc: "Expresiones irirori inake ikenkiakera ('él está pensando') e irirori inake ikenkisureakara ('él está triste').", duracion: "00:40", url: DEMO_URL },
      { num: 4, diapositiva: "Escucha y recuerda", desc: "Expresiones irorori onake ovankinatakara ('ella está preocupada') e irorori onake omantsigatakera ('ella está enferma').", duracion: "00:40", url: DEMO_URL },
      { num: 5, diapositiva: "Observamos cómo cambia la oración", desc: "Comparación entre naro nonake noshinetakara ('yo estoy feliz') y naroegi nonaigake noshineigakara ('nosotros estamos felices').", duracion: "00:40", url: DEMO_URL },
      { num: 6, diapositiva: "Observamos cómo cambia la oración", desc: "Comparación entre aro anake apuntakara (nosotros dos estamos solos) y aroegi anaigake apuntaigakara (nosotros estamos solos, más de dos).", duracion: "00:40", url: DEMO_URL },
      { num: 7, diapositiva: "Observamos cómo cambia la oración", desc: "Comparación entre viro pinake pipochokiitakera ('tú estás con sueño') y viroegi pinaigake pipichokiigakera ('ustedes están con sueño').", duracion: "00:40", url: DEMO_URL },
      { num: 8, diapositiva: "Observamos cómo cambia la oración", desc: "Comparación entre irirori inake ikenkiakera ('él está pensando') e iriroegi inaigake ikenkiaigakera ('ellos están pensando').", duracion: "00:40", url: DEMO_URL },
      { num: 9, diapositiva: "Observamos cómo cambia la oración", desc: "Comparación entre irorori onake okiisakara ('ella está molesta') e iroroegi onaigake okiisaigakara ('ellas están molestas').", duracion: "00:40", url: DEMO_URL },
      { num: 10, diapositiva: "Observamos cómo cambia la oración", desc: "Comparación entre naro nonake kameti y naroegi nonaigake kameti ('yo estoy bien' / 'nosotros estamos bien').", duracion: "00:40", url: DEMO_URL },
      { num: 11, diapositiva: "Observamos cómo cambia la oración", desc: "Comparación entre aro anake kameti (nosotros dos estamos bien) y aroegi anaigake kameti (nosotros, más de dos, estamos bien).", duracion: "00:40", url: DEMO_URL },
      { num: 12, diapositiva: "Observamos cómo cambia la oración", desc: "Comparación entre viro pinasaantake kameti ('tú estás muy bien') y viroegi pinasaantaigake kameti ('ustedes están muy bien').", duracion: "00:40", url: DEMO_URL },
      { num: 13, diapositiva: "Escuchamos nuevos estados emocionales", desc: "Naro nonake notiontakotakara: expresión utilizada para enseñar el estado 'estoy mareado'.", duracion: "00:40", url: DEMO_URL },
      { num: 14, diapositiva: "Escuchamos nuevos estados emocionales", desc: "Naro nonake noperatakara: expresión presentada con el significado didáctico 'estoy aburrido / no quiero hacer nada'.", duracion: "00:40", url: DEMO_URL },
      { num: 15, diapositiva: "Escuchamos nuevos estados emocionales", desc: "Naro nonake nokatsitakera: expresión presentada con el significado didáctico 'estoy con dolor'.", duracion: "00:40", url: DEMO_URL },
      { num: 16, diapositiva: "Escuchamos nuevos estados emocionales", desc: "Naro nonake notsipatantakara: expresión presentada con el significado didáctico 'estoy con alguien'.", duracion: "00:40", url: DEMO_URL },
    ]
  },
  {
    id: "PPT 7", unidad: "Unidad 1", subnivel: "Subnivel A1.1", semana: "Semana 2", parte: "Primera parte",
    titulo: "Interacciones sociales básicas: saludo, interacción, despedida y cortesía",
    tema: "Participar en interacciones sociales básicas utilizando saludos, preguntas sobre la presencia, respuestas, despedidas y cortesía.",
    disponible: true,
    portada: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    audios: [
      { num: 1, diapositiva: "Cuando una conversación termina", desc: "Conversación entre dos personas que incluye saludo, pregunta Aiñompi?, respuesta afirmativa, devolución, despedida con Noatavaeta y cierre con Nani.", duracion: "00:45", url: DEMO_URL },
      { num: 2, diapositiva: "Escucha nuevamente el diálogo", desc: "Conversación donde se emplea el sistema Aiño para preguntar si una persona sigue presente, seguida de despedida y cierre.", duracion: "00:45", url: DEMO_URL },
      { num: 3, diapositiva: "Escucha y repite", desc: "Expresión Noatavaeta, utilizada como fórmula básica de despedida.", duracion: "00:45", url: DEMO_URL },
      { num: 4, diapositiva: "Otra forma de despedirse", desc: "Expresión Naro noatae maika ('Yo me voy ahora').", duracion: "00:45", url: DEMO_URL },
      { num: 5, diapositiva: "Dos formas de despedirse", desc: "Noatavaeta.", duracion: "00:45", url: DEMO_URL },
      { num: 6, diapositiva: "Dos formas de despedirse", desc: "Naro noatae maika.", duracion: "00:45", url: DEMO_URL },
      { num: 7, diapositiva: "Escucha la conversación", desc: "Conversación completa que integra saludo nocturno, preguntas mediante Aiñompi, respuestas afirmativas, despedida y cierre.", duracion: "00:45", url: DEMO_URL },
      { num: 8, diapositiva: "Escucha otra vez", desc: "Conversación utilizando el sistema Aiño para preguntar por la presencia de terceras personas (él y ella) y responder afirmativamente.", duracion: "00:45", url: DEMO_URL },
      { num: 9, diapositiva: "Reconocer funciones comunicativas", desc: "Oga, kutagitetanai (Hola, buenos días).", duracion: "00:45", url: DEMO_URL },
      { num: 10, diapositiva: "Reconocer funciones comunicativas", desc: "¿Aiñompi?, expresión utilizada para preguntar por el estado o la presencia de una persona.", duracion: "00:45", url: DEMO_URL },
      { num: 11, diapositiva: "Reconocer funciones comunicativas", desc: "Noatavaeta.", duracion: "00:45", url: DEMO_URL },
      { num: 12, diapositiva: "Reconocer funciones comunicativas", desc: "Intagati, expresión de cortesía presentada con el valor funcional de 'gracias'.", duracion: "00:45", url: DEMO_URL },
      { num: 13, diapositiva: "Comprensión auditiva (sistema Aiño)", desc: "¿Aiñompi?", duracion: "00:45", url: DEMO_URL },
      { num: 14, diapositiva: "Comprensión auditiva (sistema Aiño)", desc: "¿Aiñoni irirori?", duracion: "00:45", url: DEMO_URL },
      { num: 15, diapositiva: "Comprensión auditiva (sistema Aiño)", desc: "¿Aiñoegini iriroegi?", duracion: "00:45", url: DEMO_URL },
      { num: 16, diapositiva: "Comprender respuestas al estado", desc: "Naro nonake kameti ('Yo estoy bien').", duracion: "00:45", url: DEMO_URL },
      { num: 17, diapositiva: "Comprender respuestas al estado", desc: "Irirori inake kameti ('Él está bien').", duracion: "00:45", url: DEMO_URL },
      { num: 18, diapositiva: "Comprender respuestas al estado", desc: "Viro tera pine kameti ('Tú no estás bien'), introduciendo la forma negativa tera.", duracion: "00:45", url: DEMO_URL },
      { num: 19, diapositiva: "Comprensión auditiva de despedidas", desc: "Noatavaeta.", duracion: "00:45", url: DEMO_URL },
      { num: 20, diapositiva: "Comprensión auditiva de despedidas", desc: "Naro noatae maika ('Yo me voy ahora').", duracion: "00:45", url: DEMO_URL },
      { num: 21, diapositiva: "Comprensión auditiva de despedidas", desc: "Jataana ('Me voy').", duracion: "00:45", url: DEMO_URL },
      { num: 22, diapositiva: "Expresiones básicas de cortesía", desc: "Expresiones Intagati, Nani y Pamerenkena.", duracion: "00:45", url: DEMO_URL },
      { num: 23, diapositiva: "Despedirse (singular y plural)", desc: "Comparación entre Noatavaeta y Noaigavaeta.", duracion: "00:45", url: DEMO_URL },
      { num: 24, diapositiva: "Despedirse cuando varios se van", desc: "Noaigavaeta, mostrando la forma plural de la despedida.", duracion: "00:45", url: DEMO_URL },
      { num: 25, diapositiva: "Comprensión de diálogo real", desc: "Conversación grupal con Aiñompiegini viroegi, respuestas sobre estados emocionales en plural, cortesía y despedida colectiva.", duracion: "00:45", url: DEMO_URL },
    ]
  },
  {
    id: "PPT 8", unidad: "Unidad 1", subnivel: "Subnivel A1.1", semana: "Semana 2", parte: "Primera parte",
    titulo: "Interacción social en matsigenka: saludar, conversar y despedirse",
    tema: "Desarrollar conversaciones básicas en matsigenka integrando saludos, presentaciones personales, preguntas y diferentes formas de despedida.",
    disponible: true,
    portada: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80",
    audios: [
      { num: 1, diapositiva: "Recordemos los saludos", desc: "Revisión de los cuatro saludos básicos: Oga, kutagitetanai; Oga, shavinitanai; Oga, chapinitanai y Oga, tsagitetanai.", duracion: "00:45", url: DEMO_URL },
      { num: 2, diapositiva: "Expresiones de cortesía", desc: "Expresiones Intagati, Nani y Pamerenkena.", duracion: "00:45", url: DEMO_URL },
      { num: 3, diapositiva: "Escucha y responde", desc: "Conversación que integra saludo, presentación personal, preguntas por el nombre, estado de terceras personas, agradecimiento y despedida.", duracion: "00:45", url: DEMO_URL },
      { num: 4, diapositiva: "Comprensión del diálogo", desc: "Diálogo donde se pregunta por el nombre de él y ella, se consulta el estado de un grupo, se usan formas negativas y cierre con despedida.", duracion: "00:45", url: DEMO_URL },
      { num: 5, diapositiva: "Ordena la conversación", desc: "Conversación completa para ordenar: integra saludos, presentación de grupos, nombres y estados en plural, agradecimiento y despedida.", duracion: "00:45", url: DEMO_URL },
      { num: 6, diapositiva: "Comprensión auditiva de despedidas", desc: "Noatavaeta.", duracion: "00:45", url: DEMO_URL },
      { num: 7, diapositiva: "Comprensión auditiva de despedidas", desc: "Naro noatae maika ('Yo me voy ahora').", duracion: "00:45", url: DEMO_URL },
      { num: 8, diapositiva: "¿Cuál despedida usamos?", desc: "Presentación de tres formas de despedirse: Noatavaeta, Naro noatae maika y Jataana.", duracion: "00:45", url: DEMO_URL },
      { num: 9, diapositiva: "¿Cuándo usamos Jataana?", desc: "Conversación donde se presenta a terceras personas, se pregunta por sus estados emocionales y la interacción concluye utilizando Jataana.", duracion: "00:45", url: DEMO_URL },
      { num: 10, diapositiva: "¿Cuándo usamos Jataana?", desc: "Conversación centrada en el sistema Aiño, que finaliza con la despedida Jataana.", duracion: "00:45", url: DEMO_URL },
      { num: 11, diapositiva: "Escucha las despedidas", desc: "Diálogo breve que finaliza utilizando la despedida Noatavaeta.", duracion: "00:45", url: DEMO_URL },
      { num: 12, diapositiva: "Escucha las despedidas", desc: "Diálogo entre grupos que concluye con la despedida plural Noaigavaeta.", duracion: "00:45", url: DEMO_URL },
    ]
  },

  // --- PPT 9 al 16 (Segunda Parte - Subnivel A1.1) ---
  ...Array.from({ length: 8 }, (_, i) => {
    const num = i + 9;
    return {
      id: `PPT ${num}`, unidad: "Unidad 1", subnivel: "Subnivel A1.1", semana: num <= 12 ? "Semana 3" : "Semana 4", parte: "Segunda parte",
      titulo: `Hablar de la familia y entorno en matsigenka`,
      tema: `Desarrollo temático correspondiente al módulo académico ${num} según el programa de estudios oficial.`,
      disponible: false, estado: "Próxima entrega de audios", portada: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=600&q=80", audios: []
    };
  }),

  // --- SUBNIVEL A1.2 (PPT 17 al 32) ---
  ...Array.from({ length: 16 }, (_, i) => {
    const num = i + 17;
    return {
      id: `PPT ${num}`, unidad: "Unidad 1", subnivel: "Subnivel A1.2", semana: num <= 24 ? "Semana 1-2" : "Semana 3-4", parte: num <= 24 ? "Primera parte" : "Segunda parte",
      titulo: `Descripción de personas, objetos y lugares`,
      tema: `Contenido oficial del Subnivel A1.2 correspondiente a la presentación ${num} (Descriptivos y posesivos).`,
      disponible: false, estado: "Próxima entrega de audios", portada: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80", audios: []
    };
  }),

  // --- SUBNIVEL A1.3 (PPT 33 al 48) ---
  ...Array.from({ length: 16 }, (_, i) => {
    const num = i + 33;
    return {
      id: `PPT ${num}`, unidad: "Unidad 2", subnivel: "Subnivel A1.3", semana: num <= 40 ? "Semana 1-2" : "Semana 3-4", parte: num <= 40 ? "Primera parte" : "Segunda parte",
      titulo: `Rutinas diarias y referencias temporales`,
      tema: `Contenido oficial del Subnivel A1.3 correspondiente a la presentación ${num} (Rutinas y tiempo).`,
      disponible: false, estado: "Próxima entrega de audios", portada: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80", audios: []
    };
  }),

  // --- SUBNIVEL A1.4 (PPT 49 al 64) ---
  ...Array.from({ length: 16 }, (_, i) => {
    const num = i + 49;
    return {
      id: `PPT ${num}`, unidad: "Unidad 2", subnivel: "Subnivel A1.4", semana: num <= 56 ? "Semana 1-2" : "Semana 3-4", parte: num <= 56 ? "Primera parte" : "Segunda parte",
      titulo: `Necesidades, gustos y diálogos cotidianos`,
      tema: `Contenido oficial del Subnivel A1.4 correspondiente a la presentación ${num} (Necesidades y diálogos).`,
      disponible: false, estado: "Próxima entrega de audios", portada: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80", audios: []
    };
  })
];
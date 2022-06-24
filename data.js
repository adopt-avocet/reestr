let arr = [];
let obj1 = {
    id: 1,
    orgType: "FSNSP",
    organization: "Федеральная служба по надзору в сфере природопользования",
    shortName: 'ПТК "Госконтроль"',
    fullName: 'ФГИС: Программно – технологический комплекс "Госконтроль"',
    functionDescription: 'ПТК «Госконтроль» предназначен для автоматизации процессов контрольно-надзорной, судебной деятельности, ведения административных расследований, нормирования негативного воздействия на окружающую среду, ведения учета и контроля негативного воздействия и администрирования доходов федерального бюджета в области ответственности Росприроднадзора, предоставления государственных и муниципальных услуг, оказываемых Росприроднадзором, получения и обработки отчетов от природопользователей, формирования консолидированной отчетности по направлениям деятельности и предоставление ее в государственные органы власти.',
    ownerType: "федеральный",
    exploitationLevel: "федеральный",
    productType: "Заказная разработка",
    vendorProduct: 'ООО "Большая тройка"',

}
let obj2 = {
    id: 2,
    orgType: "FSNSP",
    organization: "Федеральная служба по надзору в сфере природопользования",
    shortName: 'ПТО УОНВОС',
    fullName: 'Программно-техническое обеспечение учета объектов, оказывающих негативное воздействие на окружающую среду',
    functionDescription: 'Государственный учет объектов, оказывающих негативное воздействие на окружающую среду, осуществляется в целях получения достоверной информации об объектах, оказывающих негативное воздействие на окружающую среду, определения областей применения наилучших доступных технологий, применения программно-целевых методов планирования, а также в целях планирования осуществления государственного экологического надзора. (пункт 1 Статьи 69 Федерального закона от 10.01.2002 г. № 7-ФЗ "Об охране окружающей среды")',
    ownerType: "федеральный",
    exploitationLevel: "федеральный, региональный",
    productType: "Заказная разработка",
    vendorProduct: 'ООО "Большая тройка"',

}
let obj3 = {
    id: 3,
    orgType: "Rospatent",
    organization: "Роспатент (ФОИВ)",
    shortName: 'ГИС НИС',
    fullName: 'ГИС интеграции и уравления',
    functionDescription: 'ПТК «Госконтроль» предназначен для автоматизации процессов контрольно-надзорной, судебной деятельности, ведения административных расследований, нормирования негативного воздействия на окружающую среду, ведения учета и контроля негативного воздействия и администрирования доходов федерального бюджета в области ответственности Росприроднадзора, предоставления государственных и муниципальных услуг, оказываемых Росприроднадзором, получения и обработки отчетов от природопользователей, формирования консолидированной отчетности по направлениям деятельности и предоставление ее в государственные органы власти.',
    ownerType: "федеральный",
    exploitationLevel: "федеральный",
    productType: "Заказная разработка",
    vendorProduct: 'ООО "ИТБ"',

}
arr.push(obj1, obj2, obj3);

let surveyQuestionsList = [];

class QuestionGroup {
    arr = [];
    constructor(name){ 
        this.name = name; 
    }
    addQuestion(...str){ 
        this.arr.push(...str); 
    }
}
  
let s1 = new QuestionGroup("Описание ИС / Сервиса");
s1.addQuestion("Краткое наименование ИС/сервиса", "Описание ИС/сервиса",`Тех. cтек с указанием версий в разрезе:
- языки программирования
- базы данных
- шины данных
- сервера приложений (если используется)
- используемые сторонние программные продукты и фремворки (например, Camunda/WS02/ итп)
- базовые образы для контейнеров
- ОС на виртуальных машинах`, "Численность команды разработки (включая аналитиков/тестировщиков и т.п.)", "Численность команды сопровождения","Среднее количество бизнес-операций в день (включая нагрузку от пользователей и интегрированных систем)", "Среднее количество пользователей в день", "Частота релизов", "Сколько времени система находится в промышленном использовании", "Возможно ли переиспользование сервиса в других внешних решениях (да/нет)?", "Выполняется ли периодическое создание и сохранение архивных копий данных на защищенных носителях для обеспечения возможности восстановления состояния системы на определенный момент времени в прошлом");


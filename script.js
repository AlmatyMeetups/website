// script.js
document.addEventListener('DOMContentLoaded', function() {
    var currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
});

// script.js
document.addEventListener('DOMContentLoaded', function() {
    var currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;

    var content = {
        en: {
            header: "Almaty Meetups is a local community based in Almaty, Kazakhstan. Join us and let's meet!",
            activitiesHeader: "Activities",
            activities: "Almaty Meetups is a local community of foreigners and locals based in Almaty, Kazakhstan.",
            purpose: "Our purpose is to meet and connect with travelers, couch surfers, and people living in Almaty. We frequently organize gatherings and events to meet new people and make new friends.",
            find: "Find us on Instagram or Telegram, and let's meet!",
            findUsHeader: "Find Us"
        },
        ru: {
            header: "Almaty Meetups — это местное сообщество, базирующееся в Алматы, Казахстан. Присоединяйтесь к нам, давайте встретимся!",
            activitiesHeader: "Деятельность",
            activities: "Almaty Meetups — это местное сообщество иностранцев и местных жителей, базирующееся в Алматы, Казахстан.",
            purpose: "Наша цель — встречаться и налаживать связи с путешественниками, каучсёрферами и жителями Алматы. Мы часто организуем встречи и мероприятия, чтобы познакомиться с новыми людьми и обрести новых друзей.",
            find: "Найдите нас в Instagram или Telegram, и давайте встретимся!",
            findUsHeader: "Найдите нас"
        }
    };

    function switchLanguage(lang) {
        document.querySelector('#header').innerHTML = content[lang].header;
        document.querySelector('#activities-header').innerHTML = content[lang].activitiesHeader;
        document.querySelector('#left-column p:nth-of-type(1)').innerHTML = content[lang].activities;
        document.querySelector('#left-column p:nth-of-type(2)').innerHTML = content[lang].purpose;
        document.querySelector('#left-column p:nth-of-type(3)').innerHTML = content[lang].find;
        document.querySelector('#find-us-header').innerHTML = content[lang].findUsHeader;        
    }

    document.getElementById('switch-en').addEventListener('click', function(e) {
        e.preventDefault();
        switchLanguage('en');
    });

    document.getElementById('switch-ru').addEventListener('click', function(e) {
        e.preventDefault();
        switchLanguage('ru');
    });
});

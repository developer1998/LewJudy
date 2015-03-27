if (typeof ljcore !== 'object') {
    ljcore = {};
}

(function () {
    'use strict';
    // If the ljcore object is missing getBibleVerse method, give it one.
    if (typeof ljcore.getBibleVerse !== 'function') {
        ljcore.getBibleVerse = function (radius) {
            /// <summary>Randomly returns Holy Bible vers and the it's location.</summary>
            /// <param name="radius" type="Number">The radius of the circle.</param>
            /// <returns type="Object">bibleVerse.</returns>
            var bibleVerses = [];
            bibleVerses.push({
	            verse: "„Przyjdźcie do Mnie wszyscy, którzy utrudzeni i obciążeni jesteście, a Ja was pokrzepię. Weźcie moje jarzmo na siebie i uczcie się ode Mnie, bo jestem cichy i pokorny sercem, a znajdziecie ukojenie dla dusz waszych. Albowiem jarzmo moje jest słodkie, a moje brzemię lekkie.”",
	            location: "Mt 11, 28-30"
            });
            bibleVerses.push({
	            verse: "„Przypatrzcie się ptakom w powietrzu: nie sieją ani żną i nie zbierają do spichlerzy, a Ojciec wasz niebieski je żywi. Czyż wy nie jesteście ważniejsi niż one? Kto z was przy całej swej trosce może choćby jedną chwilę dołożyć do wieku swego życia?”",
	            location: "Mt 6, 26-27"
            });
            bibleVerses.push({
	            verse: "„Wszystkie troski wasze przerzućcie na Niego, gdyż Jemu zależy na was.”",
	            location: "1 P 5, 7"
            });
            bibleVerses.push({
	            verse: "„Bądźcie trzeźwi! Czuwajcie! Przeciwnik wasz, diabeł, jak lew ryczący krąży szukając kogo pożreć. Mocni w wierze przeciwstawcie się jemu! A Bóg wszelkiej łaski, Ten, który was powołał do wiecznej swojej chwały w Chrystusie, gdy trochę pocierpicie, sam was udoskonali, utwierdzi, umocni i ugruntuje.”",
	            location: "1 P 5, 8-10"
            });
            bibleVerses.push({
	            verse: "„W Bogu jest zbawienie moje i moja chwała,\nskała mojej mocy,\nw Bogu moja ucieczka.”",
	            location: "Ps 62, 8"
            });
            bibleVerses.push({
	            verse: "„W każdym czasie Jemu ufaj, narodzie!\nPrzed Nim serca wasze wylejcie:\nBóg jest dla nas ucieczką!”",
	            location: "Ps 62, 9"
            });
            bibleVerses.push({
	            verse: "„Zatrzymąjcie się, a we mnie uznajcie Boga,\nwzniosłego wśród narodów, wzniosłego na ziemi.\nPan Zastępów jest z nami,\nBóg Jakuba jest dla nas obroną.”",
	            location: "Ps 46, 11-12"
            });
            bibleVerses.push({
	            verse: "„Bóg jest dla nas ucieczką i mocą:\nłatwo znaleźć u Niego pomoc w trudnościach.\nPrzeto się nie boimy, choćby waliła się ziemia\ni góry zapadały w otchłań morza.”",
	            location: "Ps 46, 2-3"
            });
            bibleVerses.push({
	            verse: "„Ja go wybawię, bo przylgnął do Mnie;\nosłonię go, bo uznał moje imię.\nBędzie Mnie wzywał, a Ja go wysłucham\ni będę z nim w utrapieniu,\nwyzwolę go i sławą obdarzę.”",
	            location: "Ps 91, 14-15"
            });
            bibleVerses.push({
	            verse: "„Trzymajcie się mocno Słowa Życia, abym mógł być dumny w dniu Chrystusa, że nie na próżno biegłem i nie na próżno się trudziłem.”",
	            location: "Flp 2, 16"
            });
            bibleVerses.push({
	            verse: "„Wy zatem, bracia, powołani zostaliście do wolności. Tylko nie bierzcie tej wolności jako zachęty do hołdowania ciału, wręcz przeciwnie, miłością ożywieni służcie sobie wzajemnie! Bo całe Prawo wypełnia się w tym jednym nakazie: Będziesz miłował bliźniego swego jak siebie samego.”",
	            location: "Gal 5, 13-14"
            });
            bibleVerses.push({
	            verse: "„Oto, czego uczę: postępujcie według ducha, a nie spełnicie pożądania ciała. Owocem zaś ducha jest: miłość, radość, pokój, cierpliwość, uprzejmość, dobroć, wierność, łagodność, opanowanie.”",
	            location: "Gal 5, 16, 22-23"
            });
            bibleVerses.push({
	            verse: "„A ci, którzy należą do Chrystusa Jezusa, ukrzyżowali ciało swoje z jego namiętnościami i pożądaniami. Mając życie od Ducha, do Ducha się też stosujmy. Nie szukajmy próżnej chwały, jedni drugich drażniąc i wzajemnie sobie zazdroszcząc.”",
	            location: "Gal 5, 24-26"
            });
            bibleVerses.push({
	            verse: "„Jeżeli wyznajemy nasze grzechy, [Bóg] jako wierny i sprawiedliwy odpuści je nam i oczyści nas z wszelkiej nieprawości.”",
	            location: "1 J 1, 9"
            });
            bibleVerses.push({
	            verse: "„Dzieci moje, piszę wam to dlatego, żebyście nie grzeszyli. Jeśliby nawet ktoś zgrzeszył, mamy Rzecznika wobec Ojca – Jezusa Chrystusa sprawiedliwego.”",
	            location: "1 J 2, 1"
            });
            bibleVerses.push({
	            verse: "„Popatrzcie, jaką miłością obdarzył nas Ojciec: zostaliśmy nazwani dziećmi Bożymi: i rzeczywiście nimi jesteśmy.”",
	            location: "1 J 3, 1"
            });
            return bibleVerses[Math.floor(Math.random() * bibleVerses.length)];
        };
    }
})();
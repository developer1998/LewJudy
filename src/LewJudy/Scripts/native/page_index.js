(function ($) {
    $(document).ready(function () {
        var bibleVerse = ljcore.getBibleVerse();
        $("span[id$=bible_verse]").html(bibleVerse.verse);
        $("em[id$=bible_verse_location]").html(bibleVerse.location);
    });
})(jQuery);
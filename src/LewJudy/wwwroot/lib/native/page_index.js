!function(a) {
    a(document).ready(function() {
        var b = ljcore.getBibleVerse();
        a("span[id$=bible_verse]").html(b.verse), a("em[id$=bible_verse_location]").html(b.location);
    });
}(jQuery);
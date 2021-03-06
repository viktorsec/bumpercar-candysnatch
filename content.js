var substitutions = [
  'Bumpercar Candysnatch',
  'Bendypole Cabbagepatch',
  'Beautiful Plumberscrack',
  'Bumblebee Baggage',
  'Bendover Cumonback',
  'Benadryl Cucumberpot',
  'Wimbledon Tennismatch',
  'Clumpity Bandersnatch',
  'Benefish Cumberface',
  'Bembledump Melonpatch',
  'Buildabear Bumbleswatch',
  'Benny Cummerbund',
  'Bandicoot Cumbercrash',
  'Fiddledick Bandersnatch',
  'Beneful Thundercrunch',
  'Bundersnatch Cabbagewank',
  'Bendydick Cuminsnatch',
  'Bumperbadge Cabbagepatch',
  'Beedlebop Cootersnooch',
  'Bandersnatch Crumblebum',
  'Benderling Crumblewrench',
  'Viaduct Plumberthatch',
  'Camperdown Bramblepatch',
  'Benelux Bandersnatch',
  'Benedict Bumberwatch',
  'Humperdinck Cummerbund',
  'Derelict Slumbersnatch',
  'Benefit Viktorsec',
  'Sherlockholmes Doctorstrange',
  'Breadcrumbs Combatwrench',
  'Renaissance Dumberhatch',
  'Eggs Benedict Cucumber Patch',
  'Bombadil Thundercats',
  'Battleship Condornest',
  'Brendadirk Cramplescrunch',
  'Bartemis Lumberjack',
  'Bendystraw Combopack',
	'Bayonet Cul-de-sac',
	'Bedminton Shplishnsplash',
	'Bowlingball Cuckooclock',
	'Bodydump Crumblesnack',
];

var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/Benedict Cumberbatch|Cumberbatch/gi, substitutions[Math.floor(Math.random() * substitutions.length)]);

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}

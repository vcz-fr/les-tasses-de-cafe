---
layout: game

title: La fiscinière

game:
    genres:
        - Hasard

    support:
        where: Discord

    players: "2 et plus"
    time: "Variable"
    authors:
        - AirDur

    description: |
        Piochez au bon endroit et au bon moment pour marquer un maximum de points !

rp:
    - type: narrator
      text: "Dans la cuisine, un Yoshi manipule avec prudence. Mais son nez lui cache la vue"

    - type: speech
      actor: Chris
      text: "Zut, ma boule !"

    - type: speech
      actor: AirDur
      action: "ouvrant la porte de la cuisine"
      text: "Tu joues avec Docteur ?"

    - type: speech
      actor: Chris
      action: "surpris"
      text: "Oooh, AirDur, ça faisait longtemps, la santé, la famille ? T'as pas pris du muscle ? Ça te va bien - AH"
      
    - type: narrator
      text: "Chris tente de cacher quelque chose en se jetant dessus"  

    - type: speech
      actor: AirDur
      text: "Heu, oui... Je vais pas relever ta pique sur mon physique, j'ai effectivement pas pu faire d'exercice récemment puisque monsieur me fait faire le SAV chaque fois qu'un client enragé déboule."

    - type: speech
      actor: Holly
      action: "ouvrant la porte de la cuisine avec un scalpel après l'avoir anesthésiée"
      text: "Ah non, on a dit pas de Bing... Attendez, vous faites quoi avec la caisse à bouteilles et... Ce sont des pépites d'or ?"

    - type: speech
      actor: Chris
      action: "très surpris"
      text: "Oooooh, Holly, toujours dans mes pattes, ça va bien, quoi de huit - de neuf pardon ? Moi, absolument rien. Je ne mets absolument pas mes économies créées en faisant fondre nos fonds de caisse dans des bouteilles, tu serais pas un peu maboule ?"

    - type: speech
      actor: Holly
      action: "ayant les boules"
      text: "Comment ça, tes économies ? Tu sais que je suis obligé de mettre de mes fonds personnels tous les matins au cas-où l'inspection vient nous contrôler ?"

    - type: speech
      actor: AirDur
      text: "Ah ouais, donc la légende comme quoi les Yoshis ça fraude le FISC est fausse, en fait c'est pire. Bon, arrête tes bêtises et raboule"

    - type: speech
      actor: Ohko
      action: "brûle la porte"
      text: "Bon, je suis allée chercher le courrier, vous avez reçu trois lettres : un P, un Q et un R, un prospectus pour un bar à eau et une relance des impôts."

    - type: narrator
      text: "AirDur et Holly fixent le Pôtron"

    - type: speech
      actor: Chris
      action: "trop surpris"
      text: "Ooooooohko, en pleine forme à ce que je vois ! Ça va bien, la famille, les amis, la Suisse, tout ça ? Tu sais que les portes ça pousse pas sur les arbres ? Je t'enverrai un RIB. BON, faut que j'y aille, j'ai un ami qui m'invite à faire un Monopoly chez lui, salut salut..."

    - type: narrator
      text: "Chris pique le courrier à Ohko, lui donne des travers de porc caramélisés puis part en courant"

    - type: speech
      actor: Ohko
      text: "Vous pouvez m'expliquer ?"

    - type: speech
      actor: Holly
      text: "On vient de se rendre compte que finalement on a du budget."
      
    - type: speech
      actor: AirDur
      text: "Et apparemment le trésorier ordurieur s'est barré en nous laissant une barre. Champagne ?"
---

Afin de récupérer les pépites que Chris a planqué, vous possédez au début du jeu 2 {% include icon/tasse icon="TasseInconnu" %} chacun, que vous pouvez utiliser pour aller les piocher dans les bouteilles du bar.  
Tous les jours, vous avez le droit à une action gratuite, au choix : 
- Gagner un {% include icon/tasse icon="TasseInconnu" %} sans rien faire,
- Piocher dans la *bouteille d'eau filtrée*. C'est d'ailleurs le seul moyen d'accéder à cette bouteille.

Pour jouer, choisissez une bouteille (si vous avez assez de {% include icon/tasse icon="TasseInconnu" %}) et lancez un dé correspondant au nombre initial de pépites dans la bouteille pour en piocher une. Chaque pépite est numérotée.  
- Si vous piochez une pépite qui n'a **pas été piochée**, vous gagnez ce qui est écrit sur l'étiquette de la bouteille. 
- Si vous piochez une pépite dont le numéro a **déjà été pioché**, vous perdez ce qui est aussi écrit sur la bouteille. Son contenu est alors réinitialisé, comme si rien n'avait été pioché.
- Si vous piochez la dernière pépite d'une bouteille, le gain est doublé, sauf pour la *bouteille d'eau filtrée* où vous gagnez un {% include icon/tasse icon="TasseInconnu" %} en plus.

Une bouteille est aussi réinitialisée quand toutes les pépites ont été tirées.  
*Une fois le dé lancé, recopiez le texte ci-dessous en enlevant la pépite tirée ou en ajoutant toutes les pépites dans le cas d'une réinitialisation.*

Vous pouvez aussi, pour un {% include icon/tasse icon="TasseInconnu" %}, réinitialiser le contenu de la bouteille de votre choix. Vous devrez alors immédiatement piocher dedans en utilisant un second {% include icon/tasse icon="TasseInconnu" %}.

Lorsque quelqu'un atteint **30 points**, il aura de quoi faire chanter Chris pour qu'il paye enfin ses impôts et gagnera la partie !
*Attention, il chante mal !*

{% capture accordion_content %}
`BOUTEILLE D'EAU FILTRÉE (4) :  1  2  3  4
VIN RÔSE (10) :  1  2  3  4  5  6  7  8  9  10
POTION MENTALIQUE (5) :  1  2  3  4  5
OUISKISKI (4) :  1  2  3  4
VIN TANDAGE (8) :  1  2  3  4  5  6  7  8
DIABOLO-FRAISE (6) :  1  2  3  4  5  6`
{% endcapture %}
{% include block/accordion title="Message à recopier" content=accordion_content %}

{% capture accordion_content %}
{% include icon/tasse icon="TasseInconnu" %} **Bouteille d'eau filtrée** / Coût : gratuit / quatre pépites  
Gain : 2 {% include icon/tasse icon="TasseInconnu" %} // Pas de perte  
*Parce qu'on a tous des besoin naturels.*  

{% include icon/tasse icon="TasseInconnu" %} **Vin rôse** / Coût : un {% include icon/tasse icon="TasseInconnu" %} / dix pépites  
Gain : 1 point // Perte : 1 point  
*Sa couleur rappelle les champs de lavande ou les cheveux d'AirDur, son goût les champs de lavande avec un pointe de banane et une note de cannelle. Du raisin ?*  

{% include icon/tasse icon="TasseInconnu" %} **Potion mentallique**  / Coût : deux {% include icon/tasse icon="TasseInconnu" %} / cinq pépites  
Gain : la valeur de la pépite tirée // Perte : la valeur de la pépite tirée  
*Quiconque en boit agit, parle et vit tout ce qu'il pense en le montrant clairement à tout le monde, comme s'ils pouvaient lire en lui. Comme sur les réseaux sociaux.*  

{% include icon/tasse icon="TasseInconnu" %} **Ouiskiski** / Coût : deux {% include icon/tasse icon="TasseInconnu" %} / quatre pépites  
Gain : Le prochain gain de points est doublé // Perte : La prochaine perte de points est doublée  
*Ce breuvage, renforcé en dopamine, met en joie et fait sourire quiconque en porte à sa bouche.*  

{% include icon/tasse icon="TasseInconnu" %} **Vin tandage** Coût : trois {% include icon/tasse icon="TasseInconnu" %} / huit pépites  
Gain : 9 moins le nombre de pépites restantes dans cette bouteille // Perte : 9 moins le nombre de pépites restantes dans cette bouteille  
*Boire ce vin à l'extrait de chêne liège, c'est comme tirer à pile ou face. Soit il vous en bouche un coin, soit vous bouchez les toilettes.*  

{% include icon/tasse icon="TasseInconnu" %} **Diabolo-fraise** / Coût : quatre {% include icon/tasse icon="TasseInconnu" %} / six pépites  
Gain : 6 points pour une pépite de valeur paire, 4 sinon // Perte : vous ne pourrez pas faire d'action gratuite le lendemain.  
*Un Diabolo-Fraise, à base de Vodka pétillante et de liqueur de Fraise. Tonique !*
{% endcapture %}
{% include block/accordion title="Tasses spéciales" content=accordion_content %}

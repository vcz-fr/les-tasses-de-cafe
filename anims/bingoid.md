---
layout: game

title: Bingoïd

game:
    genres:
        - Hasard
        - Rapidité

    support:
        where: Discord

    players: "2 et plus"
    duration: "Cinq manches"
    authors:
        - Chris Antem

    description: |
        Le jeu de bingo interdit aux petits vieux ! Soyez vifs et rapides pour faire une ligne, sachant que tout le monde joue avec le même carton !

rp:
    - type: speech
      actor: Chris
      text: "Eeeeeeet... Le 24 ! C'est quel département ça ?"
      
    - type: speech
      actor: Braxer
      action: "dormant"
      text: "Zzzzz... J'suis une omelette... Aux gros lardons... Zzzzz..."

    - type: narrator
      text: "Chris lance la boule sur Braxer pour le réveiller"

    - type: speech
      actor: Braxer
      action: "se réveille, donc"
      text: "BINGO !"

    - type: speech
      actor: Chris
      text: "Non, pas bingo. C'est quel département le 24 ?"

    - type: speech
      actor: Braxer
      text: "Qu'est-ce que j'en sais, demande à Solstice."

    - type: speech
      actor: Solstice
      action: "des toilettes"
      text: "C'est la Dordogne !"

    - type: speech
      actor: Braxer
      text: "Voilà, c'est ça... Bon, vous tenez le coup dans la salle ?"

    - type: speech
      actor: Alphard
      action: "fatiguée"
      text: "Bah c'est le troisième numéro."

    - type: speech
      actor: Braxer
      text: "Hein, seulement ? Mais ça fait trois-quarts d'heure qu'on a commencé ! Chris, tu fais quoi ?"

    - type: speech
      actor: Chris
      action: "regardant fixement le boulier tourner"
      text: "Attends, faut bien que les boules se mélangent. C'est beau toutes ces couleurs, ces numérooooos..."

    - type: speech
      actor: Braxer
      text: "Mais, donne-moi ça !"

    - type: narrator
      text: "Braxer tire le boulier avec ses petites patounes"

    - type: speech
      actor: Braxer
      text: "Sérieux, si tu voulais aller à l'aquarium, y'a des restes de soupe au poisson dans la cuisine, rince-toi l'œil."

    - type: speech
      actor: Chris
      action: "la larme à l'œil"
      text: "Mais ça va faire mal les arêtes, tu veux me rendra aveugle ?"

    - type: speech
      actor: Braxer
      action: "piochant cinq boules qu'il pose sur le bar"
      text: "Allez les vieilles croûcroûtes, levez vos papattes et venez chercher ces bouboules ! Premier arrivé premier servi !"

    - type: narrator
      text: "Braxer lance un carton de bingo à Chris"

    - type: speech
      actor: Braxer
      text: "Ils vont prendre ton nez pour une boule, protège-toi avec ça. Moi je vais dans le placard."

    - type: speech
      actor: Chris
      text: "Attends, me protéger de quoi ?"

    - type: narrator
      text: "C'est alors qu'une horde de joueurs de bingo foncent en direction du bar, les yeux injectés de sang"
---

Cinq cartons de **16 numéros parmi 20** vous seront proposés les uns après les autres. Puis, régulièrement, des boules seront données par l'animateur de la partie. Les plus rapides à poster un message avec un lancer de **dé à 20 faces** pourront prendre les boules, selon leur ordre d'arrivée.  
- Si le numéro tiré n'a pas encore été coché, le joueur **coche ce numéro** en mettant son pseudo dessus et marque **trois points**.  
- Si le numéro a déjà été coché, le joueur marque tout de même **un point**.
- Si le numéro n'est pas sur le carton, le joueur gagne *du sel*.

🎊 Lorsqu'un bingo a lieu, ceux qui y ont coché au moins un numéro gagnent des points en plus : 
- Ligne horizontale ou verticale : **5** points
- Grande diagonale : **10** points
- Les quatre coins : **15** points

Si plusieurs bingos arrivent en même temps, ils sont tous comptés (vous pouvez donc marquer des points sur plusieurs bingos), puis on joue une nouvelle carte.

🥅 Au bout des cinq cartons, la personne avec le plus de points gagne la partie !

{% capture accordion_content %}
{% include icon/tasse icon="TasseInconnu" %} **Boule classique >** On ne peut plus classique, et c'est déjà pas mal.  
{% include icon/tasse icon="TasseInconnu" %} **Boule russe >** En plus de son dé, le joueur dit "*pair*" ou "*impair*". S'il a raison, il gagne deux points supplémentaires ! S'il a tort ou s'il oublie de parier, il ne gagne rien.  
{% include icon/tasse icon="TasseInconnu" %} **Boule effaçable >**  Si le joueur qui la prend ne coche pas de nouveau numéro ce tour, il peut relancer un nouveau dé.  
{% include icon/tasse icon="TasseInconnu" %} **Boule à facettes >** Si le bingo arrive à l'arrivée de cette boule, le joueur qui l'a prise gagne 5 points supplémentaires !  
{% include icon/tasse icon="TasseInconnu" %} **Boule de pétanque >** Si le joueur qui la prend ne coche pas de nouveau numéro, il peut voler un point au joueur de son choix !  
{% include icon/tasse icon="TasseInconnu" %} **Boule à la prune >** Le joueur qui prend la boule lance deux dés à 4 faces et gagne la différence entre les deux en points. S'il oublie les deux dés, il ne gagne rien.  
{% include icon/tasse icon="TasseInconnu" %} **Boule de pâte à modeler >** C'est l'animateur qui décide de son effet.  
{% include icon/tasse icon="TasseRetournee" %} **Cache-boule >** Il cache l'une des boules précédentes, mais laquelle... C'est un peu comme au bonneteau, sauf que vous gagnez à la fin.
{% endcapture %}
{% include block/accordion title="Boules disponibles" content=accordion_content %}

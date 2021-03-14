---
layout: game

title: "Montpartasse"

game:
    genre: "Collection"
    support:
        where: Discord

    players: "2 et plus"
    time: "Une semaine"
    authors:
        - ChrisAntem
        - Le Codex

    description: |
        📖 Votre but est de marquer un maximum de points en posant des tasses de couleur avant que celle-ci ne s'effondre dans de mystérieuses circonstances...

rp:
    - type: speech
      actor: Alphard
      text: "Ok c'est chaud. En plus j'ai mes plumes qui me chatouillent."

    - type: narrator
      text: "Alphard tente de poser la 14è tasse d'une pile sur la petite table. Silence, tension et parquet dans la salle."

    - type: speech
      actor: Holly
      text: "J'aime pas quand c'est trop calme."

    - type: speech
      actor: Chris
      text: "Tu préfères quand c'est plus ou moins calme ?"

    - type: speech
      actor: Holly
      text: "Non, j'aime quand c'est un peu plus moins calme ?"

    - type: speech
      actor: Chris
      text: "Genre, plus de moins calme que de calme, mais pas trop plus non plus ?"

    - type: speech
      actor: Le Codex
      text: "Vos gueules, elle se concentre là."

    - type: narrator
      text: "Le silence revient. Et il n'est pas content"

    - type: speech
      actor: AirDur
      text: "Eeeeeet la joueuse canardienne est en bien mauvaise posture ahlalalalala... Ses adversaires tentent de la déstabiliser mais elle tient le coup, elle le tient ! Va-t-elle réussir l'exploit à poser une Lgbtasse, synonyme de victoire dans ce championnat départemental de pile de tasses de Seine-et-MMH"

    - type: speech
      actor: Le Codex
      action: "bâillonnant AirDur"
      text: "Mais tu vas la laisser se concentrer oui ?"

    - type: narrator
      text: "Quelques minutes de silence plus tard, la pose est faite. Sans clou, ni vis"

    - type: speech
      actor: Chris
      text: "Ah mais non, le coup est pas valide, elle a dirigé l'anse à 225°, c'est un multiple de cinq du coup ça compte pas..."

    - type: speech
      actor: Holly
      text: "Ouais il a raison, allez on est plus que deux, les meilleurs."

    - type: speech
      actor: Le Codex
      text: "En fait vous supportez pas le silence."

    - type: speech
      actor: AirDur
      text: "MMMMH MMH MMMMMMMH MMMMH MMMMMMMH"

    - type: narrator
      text: "Elle veut faire un croquis de la pile pour ses carnets"

    - type: speech
      actor: Chris
      text: "Bon bah c'est à moi. Tu vas voir qu'avec mon nez je vais rien voir venir et tout va se ramasser... J'ai les boules d'avance."

    - type: narrator
      text: "Subitement, une boule de bowling fracasse violemment l'intégralité de la pile. Aucune survivante."

    - type: speech
      actor: Nilphesai
      text: "Désolé !"

    - type: speech
      actor: Le Codex
      text: "En fait tu supportes pas quand c'est calme."
---

Pour commencer à jouer, pinguez @Serveur, qui vous donnera une main avec **vingt** tasses au hasard par MP. À **midi** et à **minuit**, vous recevez dix tasses supplémentaires, dans la limite des vingt tasses.

🔋 Quand l'envie vous prend, jouez l'une de vos tasses en piguant @Serveur et en indiquant l'émoji de la tasse que vous souhaitez jouer (ou son numéro). Elle ira en haut de la pile. Pour rejouer, vous devrez attendre quelqu'un d'autre, ou que la pile s'effondre.
Il y a **cinq couleurs** de tasses : {% include icon/tasse icon="TasseInconnu" %}, {% include icon/tasse icon="TasseInconnu" %}, {% include icon/tasse icon="TasseInconnu" %}, {% include icon/tasse icon="TasseInconnu" %}, et {% include icon/tasse icon="TasseInconnu" %}, c'est-à-dire toutes les _tasses spéciales_, considérées d'une même couleur en plus d'avoir un effet.
À chaque remplissage de main, trois _tasses spéciales_ seront choisies au hasard. Ce sont les seules que vous pourrez piocher à ce moment-là.

🎳 Si lorsque vous posez votre tasse, il y a **une tasse de chaque couleur** présente dans la pile, ou si une couleur se trouve en **cinq exemplaires**, celle-ci s'effondre !
- Si la pile a une tasse de chaque couleur, chaque personne marquera alors **autant de points que de couleurs** de tasse qu'elle aura posé dans la pile, sauf vous.
- Si la pile a une couleur en 5 exemplaires, chaque personne marquera alors **autant de points que de tasses de cette couleur** qu'elle aura posé dans la pile, sauf vous.
- Vous, vous marquerez **un point par tasse** que vous aurez posée dans la pile, quelque soit sa couleur !

📅 Tous les **samedis à 21 heures**, on remet le classement à zéro. Le premier tiers du classement gagne deux {% include icon/tasse icon="TasseBlanche" %}, les suivants une. Pour lire le classement, écrivez @Br4nd-0n rank.


{% capture accordion_content %}
{% include icon/tasse icon="RainbowTasse" %} **Tasse-en-ciel >** Cette tasse remplace n'importe quelle couleur, en fonction des besoins.  
{% include icon/tasse icon="Tassbombe" %} **Tassbombe >** Les deux tasses se trouvant en dessous (quand vous la posez ou l'activez) explosent !  
{% include icon/tasse icon="TassePiquante" %} **Tasse piquante >** La tasse située en-dessous perd sa couleur, ça pique.  
{% include icon/tasse icon="TasseAimantee" %} **Tasse aimantée >** La personne qui a posé la tasse située en dessous pose immédiatement l'une des tasses de sa main au hasard.  
{% include icon/tasse icon="TasseRetournee" %} **Tasse inversée >** La pile est retournée.  
{% include icon/tasse icon="TasseFantome" %} **Tasse fantôme >** N'a pas de couleur quand vous la posez, mais compte double si vous finissez la pile.  
{% include icon/tasse icon="TassePeinture" %} **Tasse de peinture >** La tasse qui se trouve en-dessous change de couleur au hasard, parmi les quatre couleurs de base.  
{% include icon/tasse icon="GoldenTasse" %} **Réplique de la Goldentasse >** Vous piochez une tasse quand vous la posez.  
{% include icon/tasse icon="TasseFeu" %} **Tasse de feu >** Chauffe les tasses d'en-dessous jusqu'à tomber sur une {% include icon/tasse icon="TasseInconnu" %}, ce qui la ré-active.  
{% include icon/tasse icon="TasseRadiocommandee" %} **Tasse radiocommandée >** Vous remplacez toutes les tasses de votre main avec la même couleur que celle placée dessous, puis en piochez autant.  
{% include icon/tasse icon="TasseVolante" %} **Tasse volante >** Vous récupérez le contrôle de la tasse qui la supporte.  
{% include icon/tasse icon="TasseInconnu" %} **Tasse en iridium >** Devient l'une des autres tasses de la pile, au hasard.  
{% include icon/tasse icon="TasseInconnu" %} **Aléatasse >** Mélange l'ordre des tasses de la pile, on sait jamais...  
{% include icon/tasse icon="TasseInconnu" %} **Tassus >**  Assassine la tasse placée dessous lorsqu'une tasse de la même couleur est posée.  
{% include icon/tasse icon="TasseInconnu" %} **Tassepartout >** S'il y a 3 tasses ou plus de la même couleur que la tasse d'en-dessous, la pile s'effondre.
{% endcapture %}
{% include block/accordion title="Tasses spéciales" content=accordion_content %}
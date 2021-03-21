---
layout: game

title: Steeple chaise

game:
    genres:
        - Hasard

    support:
        where: Discord

    players: "2 et plus"
    time: "Une semaine"
    authors:
        - Chris Antem
        - Le Codex

    description: |
        Avancez le plus loin possible en estimant vos risques et en prenant garde aux endroits où vous vous assoirez...

rp:
    - type: speech
      actor: Holly
      text: "LÀ !"

    - type: narrator
      text: "Tout le monde se mit alors à courir en direction de cette lueur d'espoir. Malgré leur détermination, certains trébuchèrent en se faufilant entre les chaises, la mort dans l'âme, laissant seuls quelques survivants de cette traversée de la salle. Ou alors uniquement ceux qui avaient la moyenne en EPS. Lorsque tout à coup..."

    - type: speech
      actor: Alix Eisenhardt
      text: "Yes ! Je l'ai !"

    - type: speech
      actor: Nilphesai
      action: "essouflé"
      text: "C'est... Pas juste... T'as des longues... Jambes..."

    - type: speech
      actor: Holly
      text: "Par contre, ne fais plus de gestes brusques, Alix. Elle va te glisser des mains sinon. On va la dé..."

    - type: speech
      actor: Alix Eisenhardt
      text: "Dé ? T'as parlé de dé ? Je suis là !"

    - type: narrator
      text: "Alix se jette sur le sol, lâchant sa prise, qui s'enfuit aussitôt"

    - type: speech
      actor: Holly
      text: "Mais quel con mais quel con mais quel con mais quel con mais quel con"

    - type: narrator
      text: "La meute reprit alors sa chasse. Certains, trop transpirants, prirent une douche dans les l'une des baignoires disposées dans la salle. D'autres se cognèrent à des cactus, eux aussi disséminés çà et là"

    - type: speech
      actor: Holly
      text: "Mais c'est qui qui a foutu ce bordel ?"

    - type: speech
      actor: Solstice
      text: "J'ai."

    - type: speech
      actor: Nilphesai
      action: "tenant une pancarte sur laquelle il est écrit \"Mais comment t'as fait pour courir aussi vite ?\""
      text: "KOF KOF RAAAAGH KOF KOF BEUUUUUUH KOF KOF KOOOOF"

    - type: speech
      actor: Solstice
      text: "Bah j'ai pris le bus. C'est vachement bien desservi par ici."

    - type: speech
      actor: Holly
      text: "Hein, le bus ? En intérieur ?"

    - type: speech
      actor: Solstice
      text: "Bah oui, regarde."

    - type: narrator
      text: "Un bus fonce alors sur Solstice, qui l'envoie dans un canapé, et permet à la prise de se refaire la malle"

    - type: speech
      actor: Tsuby
      action: "chante"
      text: "Ouiiii, c'est toi Gigiiii, sous le six tonnes..."

    - type: speech
      actor: Holly
      text: "Tais-toi et cours !"

    - type: narrator
      text: "Pendant ce temps, sur le carrousel"

    - type: speech
      actor: Le Codex
      text: "N'empêche, c'est vache de les faire courir après la Goldentasse comme ça."

    - type: speech
      actor: Chris
      text: "Oui mais s'ils font pas d'exercice ils vont s'encroûter et pourront plus venir au bar."
      
    - type: speech
      actor: Le Codex
      text: "Genre tu tiens à eux en fait."

    - type: speech
      actor: Chris
      text: "Exactement. Et puis c'est marrant."
---

📖 Le but du jeu est de faire un maximum de 🔄 **tours complets** du bar (ou *plateau* selon si vous êtes RP ou non) en une semaine. Pour cela, utilisez la commande `;steeple` ou pinguez @Serveur :
- La première fois que vous l'utilisez, vous êtes placée à la toute fin de l'**ordre** de passage.
- Ensuite, une seule fois entre chaque lancer, vous pouvez utiliser la commande pour revenir au *tout début* de cet ordre, en position 1, donc. Pour savoir qui a encore le droit de changer sa position, regardez la section **Ordre** du message du bot. Si votre pseudo est *souligné*, vous pouvez.
- Attention, si vous l'utilisez alors que vous êtes déjà première, indiquez aussi le numéro de la position que vous souhaitez rejoindre (ex : `;steeple 3`).  

💬 *Autres commandes : `;steeple show` pour redescendre le message du bot, `;steeple rank` pour afficher le classement, `;steeple logs` pour avoir par MP des derniers lancers.*

🎲 À l'**heure pile**, Le bot lancera un dé d'autant de faces que de personnes dans l'ordre de passage. Le résultat indiquera le nombre de gens qui auront le droit d'avancer, mais toujours en commençant par la première position. Ils avanceront d'autant de chaises (ou *cases*) que le numéro de leur position.  
*Être en position 1 dans l'ordre vous assure donc d'avancer d'une chaise. Être en position 10 peut vous faire avancer de 10 chaises, mais seulement si le dé affiche au moins 10...*

🗺️ La section **Plateau** du message du bot vous montre le chemin à pratiquer pour faire le tour du bar (la première case est tout en haut à gauche puis faut lire, c'est pas compliqué). Au dessus de chaque chaise se trouvent les *pions* associés à chacun d'entre vous. Vous pouvez en changer à tout moment en **mettant une réaction** au message du bot. Seuls les émojis Discord et de ce serveur sont autorisés.

🗓️ Tous les **samedis à 21 heures**, on vous classe selon le nombre de tours effectués (en cas d'égalité, c'est votre 💺 **avancement** sur le plateau qui compte). Le premier tiers gagne deux {% include icon/tasse icon="TasseBlanche" %}, le reste une seule. Puis, on change la disposition du parcours et on recommence !

{% capture accordion_content %}
💺 La **chaise simple** est vraiment tout ce qu'il y a de plus simple. Posez vos fesses et profitez et profitez du spectacle des autres qui rebondissent comme des balles de flipper.  
🛒 Asseyez-vous dans un **caddie** pour avancer plus vite : la valeur de votre prochain déplacement sera doublé. Des anti-soldes quoi.  
🎠 Parce que la course c'est mieux à plusieurs, chevaucher un **carrousel** vous échangera avec la personne la plus proche de vous (au hasard si égalité). Devant ou derrière.  
🚏 En vous arrêtant à un **abribus**, vous ~~gagnez la partie~~ prenez le bus jusqu'à l'un des autres abribus choisi au hasard.  
🌵 Il est difficile de s'asseoir sur un **cactus**, c'est pas moi qui le dit. Vous passerez donc votre tour et resterez là où vous étiez.  
🛋️ Les **canapés** apportés par BSimo sont très confortables. Si bien que la prochaine fois que vous devrez avancer, vous préférerez profiter encore un peu de son moelleux.  
📦 Nos **cartons** de déménagement ont bien vécu. Vous asseoir seul dessus ne pose aucun problème. À plusieurs, chacun reculera de 2d6 cases.  
⛲ Ne jamais s'asseoir au bord d'une **fontaine**. Laurent viendra vous y pousser et lancera un dé à 6 faces et devrez reculer d'autant de places, le temps de sécher.  
🧨 Encore moins sur de la **dynamite**. Si vous ne vous déplacez pas au prochain lancer, elle explosera et vous fera reculer de 2d6 cases.  
🛁 Rien ne vaut une bonne douche. Asseyez-vous dans une **baignoire** pour annuler l'effet du prochain endroit où vous poserez vos fesses, si ce n'est pas une chaise.
{% endcapture %}
{% include block/accordion title="Liste des assises possibles" content=accordion_content %}

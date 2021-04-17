---
layout: game

title: Quadrille

game:
    genres:
        - Réflexion
        - Rapidité

    support:
        where: Discord

    players: "2 et plus"
    duration: "Courte (moins d'une semaine)"
    authors:
        - Chris Antem

    description: |
        Danser, c'est pas plus compliqué que de jouer au sudoku. Faut juste ne pas s'emmêler les chiffres.

rp:
    - type: narrator
      text: "Soirée \"Danse avec les loups\" au bar. Au programme, de la danse et du poisson"

    - type: speech
      actor: AirDur
      text: "Et des masques !"

    - type: narrator
      text: "Holly lance une tasse sur AirDur"

    - type: speech
      actor: Holly
      text: "Y'en a déjà assez comme ça dans la vie réelle depuis la pandémie, tu veux vraiment faire fuir tout le monde en fait..."

    - type: speech
      actor: AirDur
      text: "Roh ça va, tu crois qu'on l'a pas vu ton jeu de mots entre le loup et le bar ?"

    - type: speech
      actor: Holly
      action: "gêné"
      text: "BON la musique elle avance ?"

    - type: speech
      actor: Chris
      action: "aux platines"
      text: "Elle groove, même ! Un petit madison, ça va guincher !"
      
    - type: speech
      actor: AirDur
      text: "Ah, Madi sonne ? Je vais ouvrir !"

    - type: narrator
      text: "Holly lance une tasse sur AirDur"

    - type: speech
      actor: Chelours
      text: "Le madison tu dis ? Comment ça se danse, ça ?"

    - type: speech
      actor: Lokapi
      text: "Laisse faire les professionnels. Faut d'abord mettre les deux bras en avant, puis sur les épaules, puis la tête..."

    - type: speech
      actor: AirDur
      text: "Eeeeeeeeet, macaronis ! Ils sont prêts."

    - type: narrator
      text: "Holly lance une tasse sur AirDur"

    - type: speech
      actor: Alix
      text: "Non mais c'est pas comme ça. Faut d'abord faire tourner la roue. Selon la couleur et la partie du corps sur laquelle ça tombe..."

    - type: narrator
      text: "Holly lance une tasse sur AirDur"

    - type: speech
      actor: AirDur
      text: "Maiiis !"

    - type: speech
      actor: Holly
      text: "Range cet aspirateur."

    - type: speech
      actor: LeReveur
      action: "testant le tapis"
      text: "C'est jambe gauche ou jambe droite d'abord ?"

    - type: speech
      actor: Alphard
      action: "testant aussi"
      text: "Attends, tu vas trop vite, c'est pas bon."

    - type: speech
      actor: Solstice
      action: "rejoint la bande"
      text: "Pas facile de suivre, c'est quel pas là ?"

    - type: speech
      actor: LeReveur
      text: "Le troisième, je crois. Sur du rouge."

    - type: speech
      actor: Alphard
      text: "Non mais t'es déjà allé là, fais gaffe !"

    - type: speech
      actor: LeReveur
      text: "T'inquiète, je vais pas te casser trois pattes non plus."

    - type: speech
      actor: Solstice
      text: "Non mais t'embouches un coin làààAAAAA..."
      
    - type: narrator
      text: "Solstice tombe, embarquant tout le monde par pure générosité"
      
    - type: speech
      actor: Choupy
      action: "accoudée au bar"
      text: "Dire qu'ils pourraient demander à la championne départementale de Just Dance de Seine-et-Oise pour leur montrer. Tent pis..."
---

📔 Vous allez twister sur cette piste de danse :
🔴🔴🔵🔵  
🔴🔴🔵🔵  
⚪⚪⚫⚫  
⚪⚪⚫⚫  
Elle est composée de quatre lignes, quatre colonnes et quatre zones colorées.  
Au madison, il y a quatre pas à retenir, qu'on appellera 1️⃣, 2️⃣, 3️⃣ et 4️⃣. Pour commencer, vous en avez un de chaque. Sur la piste de danse, deux pas identiques **ne doivent pas** être sur la même *ligne*, la même *colonne* ou la même *zone*.  
🧠 *Vous pouvez vous réserver le droit d'ajouter une contrainte de temps en temps, histoire de rester dans le coup.*

Pour entrer dans la danse c'est simple :
- Recopiez la piste précédente et ajoutez-y l'un des pas qui vous restent, selon les contraintes de placement. Si par exemple vous avez posé votre 1️⃣, vous ne pourrez plus le jouer par la suite avant de le récupérer. Éditer la piste de danse rend le coup invalide.  
- Si le coup est bon, recopiez le classement, mettez-le à jour et postez-le. Les autres ne pourront jouer que lorsque vous aurez posté ce classement ou cinq minutes après votre coup, si vous l'oubliez. Vous pouvez l'éditer en cas d'erreur.  
🕛 *Vous ne pouvez pas poser plusieurs pas à la suite, et devez donc attendre que quelqu'un d'autre le fasse pour pouvoir rejouer. Si personne n'a joué durant les 12 dernières heures, vous pouvez vider la piste et rejouer.*

📟 Il y a deux façons de marquer des points à ce jeu :
- Si vous avez fini votre choré en **posant tous vos pas**, pas forcément sur la même piste. Vous marquez un point et vous récupérez à nouveau tous vos pas à placer.  
- Si vous posez un pas qui **bloque la piste de danse** (plus aucun pas ne peut respecter les contraintes), vous pouvez vous mettre un point, le suivant videra la piste.  
Si vous ne pouvez pas poser de pas mais qu'il est possible pour un autre joueur de le faire, le jeu n'est pas bloqué. Vous ne pouvez donc pas vider la grille, ni marquer de point.

🗓️ Le **samedi à 21 heures, fini de danser**, on stoppe le classement. Si vous avez au moins **huit points**, vous gagnez deux {% include icon/tasse icon="TasseBlanche" %}, sinon si vous en avez au moins **trois**, vous en recevez une. Les sets de pas ne sont pas remis à zéro en fin de semaine.

{% capture accordion_content %}
```
* * · ·
* * · ·
· · * *
· · * *
```
```
Joueur (score) : \[chiffres placés\]
Joueur (score) : \[chiffres placés\]
```
{% endcapture %}
{% include block/accordion title="Messages à recopier" content=accordion_content %}

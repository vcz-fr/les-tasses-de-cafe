---
layout: game

title: Dédalleux

game:
    genres:
        - Hasard

    support:
        where: Discord

    players: "2 et plus"
    duration: "Courte (moins d'une semaine)"
    authors:
        - Chris Antem
        - Le Codex

    description: |
        Braxer erre dans un labyrinthe. Faites tourner les murs pour qu'il récupère ce dont vous avez besoin !

rp:
    - type: speech
      actor: Braxer
      action: "parlant dans un appareil"
      text: "Cher journal, cela fait maintenant quatre jour que j'erre dans ce désert glacial à la recherche de nourriture... Ananas. Il y a pas âme qui vive, sous forme humaine ou animale et encore t'as vu j'ai séparé les humains et les animaux alors que techniquement c'est pareil... Ah, biment. Heureusement, ma coquille me protège de ce froid qui pique, perce, mord tel un Yoshi ecervelé qui sert à rien vu qu'il se pète une jambe au lieu de prendre ses responsabilités de Pôtron et faire la bouffe, s'pèce d'abruti fini..."

    - type: speech
      actor: Chris
      action: "répondant dans le talkie-walkie"
      text: "Ferme-la, l'homme-lette, si tu remplaçais pas les lattes du parquet par des pains de savon tu serais pas dans la chambre froide actuellement."

    - type: speech
      actor: Braxer
      text: "Excuse-moi d'organiser une partie de tasse-curling avec des tasses qui curlent pas. Tu aurais la Goldentasse qui glisse bien que ça serait pas arrivé... Oh, un taco, je savais pas qu'il en restait."

    - type: speech
      actor: Chris
      action: "gribouillant un morceau de papier"
      text: "Sans doute des restes de Belle brochette, je note. Sinon, t'aurais pas cherché à me piquer la Goldentasse y'a bien dix ans elle serait exposée dans une vitrine sans pouvoir s'échapper, alors bon."

    - type: speech
      actor: Le Codex
      action: "hurlant dans le fond"
      text: "IL ME FAUT DU BACON, NILPHESAI ESSAYE DE ME MORDRE"

    - type: speech
      actor: Nilphesai
      action: "hurlant avec le bras de Le Codex en bouche"
      text: "MON PARQUEEEEEEEEEEEEEEET"

    - type: speech
      actor: Braxer
      text: "Oui bah je fais ce que je peux, c'est un vrai labyrinthe de cartons ici ! Et puis si z'êtes pas contents, bah fallait pas qu'avec Chris on fasse des animations ensemble en 2009, comme ça..."

    - type: speech
      actor: Chris
      text: "T'as trouvé quelque chose ?"

    - type: speech
      actor: Braxer
      text: "Non. Laisse tomber."

    - type: narrator
      text: "Chris lâche son talkie-walkie"
---

📖 Il n'avait donc pas disparu, l'autre mollet. Et bien puisqu'il est là, autant le faire bosser un peu. *Non non, Chris ne souhaite pas se venger de ces dernières années.*
Pour participer, pinguez Serveur (ou utilisez la commande `;dédale` avec l'accent), qui vous enverra par MP un ingrédient à aller chercher. Enfin, vous, Braxer plutôt. En effet, il est dans la chambre froide, entre des cartons. Mais il est trop petit pour pouvoir les pousser tout seul, c'est donc à vous de le faire.

🧊 La chambre froide est en fait un **labyrinthe** composé de **piliers** (les cases avec un numéro dessus). Chaque pilier est relié à un **mur** de la même couleur. Il y a aussi des **ingrédients** posés un peu partout, et **Braxer** qui va se déplacer en direction d'une 🎯 **cible** choisie au hasard au début de chaque tour.
Chaque tour, justement, vous avez le droit de cliquer sur l'une des réactions au message du bot pour faire tourner les murs correspondants d'un quart de tour dans le sens indiqué sur le message du bot (🔁 ou 🔄). S'il y a un mur à la position d'arrivée, le mur choisi ne tourne pas.
🔸 Le chemin le plus court reliant Braxer et la cible sera alors recalculé (en cas d'égalité, il sera choisi au hasard).
🕰️ Toutes les heures, à **l'heure pile**, Braxer se déplace donc selon le chemin, récupérant au passage tous les ingrédients sur celui-ci. Une nouvelle cible sera alors posée au hasard. S'il récupère l'ingrédient que le bot vous a demandé, vous marquez autant de points que de gens qui en ont marqué ce tour et un nouvel ingrédient vous est envoyé par MP.

🗓️ Le **samedi à 21 heures**, le classement est figé. Le **premier tiers** de celui-ci gagne deux {% include icon/tasse icon="TasseBlanche" %}, tandis que les autres n'en prennent qu'une.

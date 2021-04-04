---
layout: game

title: Calcul bileux

game:
    genres:
        - Réflexion
        - Rapidité

    support:
        where: Discord

    players: "3 et plus"
    duration: "Une semaine"
    authors:
        - Chris Antem

    description: |
        Les chiffres sans les lettres... Calculez rapidement et récupérez tous les résultats disponibles sur le tableau.

rp:

    - type: narrator
      text: "Chris, dont le front est très plissé, si plissé qu'on pourrait presque faire s'écouler des rivières dans ses rides, est en train de s'arracher des cheveux qu'il n'a pas, puisque tous les yoshis sont chauves."

    - type: speech
      actor: Chris
      text: "Eh, vous voulez pas m'aider à faire les comptes et les budgets là ? Y'a des trucs que je comprends pas."

    - type: speech
      actor: Holly
      text: "Nan, je décharge un carton de Tassbombes. Et j'ai quelques autres trucs à décharger aussi."

    - type: speech
      actor: Chris
      text: "T'as trop mangé quoi."

    - type: speech
      actor: AirDur
      text: "Oui, si tu veux, mais sache qu'en tant que fine plume rédactrice de carnets, les maths, c'est pas ma spécialité."

    - type: narrator
      text: "Une heure passe, Holly n'a toujours pas fini de décharger sa commande. Chris, dont le front est très plissé, si plissé qu'on pourrait presque faire s'écouler des rivières dans ses rides, est en train d'arracher les cheveux roses de notre écrivain favori."

    - type: speech
      actor: Chris
      text: "Holly, tu peux venir voir là s'il te plait ? Y'a des trucs que je comprends vraiment pas."

    - type: speech
      actor: Holly
      text: "Oui attends, je pose ce carton d'élastiques multicolores."

    - type: speech
      actor: Chris
      text: "Bah justement, pour quoi t'as acheté ça ?"

    - type: speech
      actor: Holly
      text: "Parce qu'ils sont multicolores, quelle question."

    - type: speech
      actor: AirDur
      text: "Bah oui, t'avais pas compris ?"

    - type: speech
      actor: Chris
      text: "Soit, mais les claviers qui contiennent uniquement la lettre A, les anciennes poignées de porte d'un manoir italien, les kayaks percés, les bouteilles d'eau de 764 cL, les graines d'arbre sans graines, les feuilles de papier déjà utilisées, les bouts de fil électriques coupés et les surtout les chaises ?"

    - type: speech
      actor: Holly
      text: "Bah dans l'ordre, c'est pour écrire la lettre A, pour remplacer les poignées des portes qu'on a pas encore installées dans les toilettes, pour faire du kayak coulant, une nouvelle pratique sportive suédoise, l'eau pour mettre les kayaks dessus, pour ne pas avoir à planter les graines, pour pouvoir lire ce que les gens ont écrit dessus, les fils parce qu'ils étaient pas très chers, 2 pour 567,89€ et enfin, les chaises pour que les gens s'assoient."

    - type: speech
      actor: Chris
      text: "Ok, je vais aller changer le code de la carte bleue."
      
    - type: speech
      actor: AirDur
      text: "J'ai pas compris, pourquoi les chaises ?"
---

📖 Chris n'a pas pas la bosse des maths, il a un gros nez. Il va donc avoir besoin de vous pour tenir ses comptes. À chaque tour, quelqu'un prend le rôle du **Boulier**, qui fait tirer à Serveur **six dés à 10 faces**. Pour cela, écrivez *coup de chiffres* dans le tableau sous ces règles. Le but est d'être le premier ou la première à trouver un calcul utilisant les six nombres, des opérations élémentaires (*addition, soustraction, multiplication ou division*) et des parenthèses (*optionnel*) ayant pour résultat un nombre se trouvant sur le **tableau** (un exemple se trouve sous les règles). N'oubliez pas d'écrire le résultat avec le calcul pour que l'on puisse vérifier.  
⚠️ *Le Boulier ne peut pas participer au tour où il lance les dés, mais il arbitre en cas de litige. Avec des nombres c'est compliqué mais je sais que vous en êtes capables.*

🧮 Le gagnant devient le nouveau Boulier et **efface du tableau** le résultat qu'il a trouvé, qui ne pourra donc plus être utilisé par la suite. Il le place alors à côté de son pseudo, c'est ce qui lui permettra de gagner des {% include icon/tasse icon="TasseBlanche" dim="small" %}. Attention, vous ne pouvez pas marquer plusieurs fois un même résultat à côté de votre pseudo ! Si le tableau est **vide**, le Boulier en démarre un nouveau avec les résultats indiqués sous les règles.  
⚠️ *Prenez le temps de bien vérifier vos calculs avant de poster le tableau des scores, merci.*

⏩ Si au bout de **quatre heures** après les lancers, personne n'a trouvé de calcul satisfaisant, n'importe qui peut prendre la place de Boulier en relançant six nouveaux dés et en **réinitialisant le tableau**, comme s'il avait été vidé.
⏫ Si le **produit** des six nombres est plus petit que le plus petit des nombres présents dans le tableau, vous pouvez relancer immédiatement !

📅 Les **samedi à 21 heures**, on remet à zéro le classement : toutes les personnes qui ont trouvé au moins **dix résultats parmi ceux du tableau** repartent avec deux {% include icon/tasse icon="TasseBlanche" dim="small" %}, sinon il vous en faudra au moins **trois** pour en avoir une.

{% capture accordion_content %}
Les premiers nombres premiers : `2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97`  
Les nombres premiers suivants : `101 103 107 109 113 127 131 139 149 151 157 163 167 173 179 181 191 193 197 199`  
Le nombre Pi : `3 14 15 92 65 35 89 79 32 38 46 26 43 38 32 79 50 28 84 19 71 69 39 93 75`  
La suite de Fibonacci : `0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610`  
Les numéros du Loto les plus piochés : `41 13 22 1 16 29 38 15 23 33 26 35 43 40 49 7 9 27 17 4`
{% endcapture %}
{% include block/accordion title="Exemples de tableaux" content=accordion_content %}

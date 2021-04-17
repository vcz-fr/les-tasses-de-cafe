---
layout: game

title: Sous les cocotiers

game:
    genres:
        - Hasard
        - Rapidité

    support:
        where: Discord

    players: "2 et plus"
    duration: "Moyenne (entre une et deux semaines)"
    authors:
        - Chris Antem
        - Nilphesai

    description: |
        Abritez-vous au bon endroit pour somnoler tranquille. On a des boules de bowling pour les insomniaques.

rp:
    - type: speech
      actor: AirDur
      text: "Il fait chaud dans le bar. Même notre stock de tasse de feu commence à fondre."

    - type: speech
      actor: Chris
      text: "J'ai délégué la réparation de la climatisation mais ça ne semble pas porter ses fruits."

    - type: speech
      actor: Venus
      action: "suant au loin"
      text: "J'ai beau relire la notice, je comprends rien !"

    - type: speech
      actor: AirDur
      text: "Et pourquoi le toit du bar est ouvert ? Et depuis quand on a un toit ouvrable ?"

    - type: speech
      actor: Holly
      text: "Ça ? C'est une invention de ma part. Ça me permet de regarder les étoiles à 4h du matin. Il se trouve que maladroitement j'ai oublié de refermer le toit avant que le jour se lève. Ce sont des choses qui arrivent."

    - type: speech
      actor: AirDur
      text: "En attendant, j'aimerais gribouiller des trucs mais j'y vois rien à cause de toute cette lumière."

    - type: speech
      actor: Holly
      text: "Émoglyphe."

    - type: speech
      actor: AirDur
      text: "Pardon ?"

    - type: speech
      actor: Holly
      text: "Non mais vu que t'aimes pas la lumière comme une émo et que glyphe c'est la représentation genre d'une lettre..."

    - type: speech
      actor: Chris
      action: "revenant avec des cocotiers"
      text: "Tenez, de quoi vous réhydrater."

    - type: speech
      actor: Holly
      text: "C'est pas de l'eau, ce sont des arbres, Chris. Faut vraiment que tu arrêtes tes jeux de mots croisés. Même Arma trouverait pas la référence."

    - type: speech
      actor: Nilphesai
      text: "J'aime pas le lait de coco, il y a autre chose là dedans ?"

    - type: speech
      actor: AirDur
      text: "Mais c'est un cocotier que veux-tu qu..."

    - type: narrator
      text: "Nilphesai foudroie le cocotier, une boule de bowling tombe alors sur sa tête et l'assomme"

    - type: speech
      actor: Holly
      text: "Et c'est sur un coup de tête qu'il reçut un coup de tête avec son coup de chaleur ! Dommage pour le joueur français..."
      
    - type: speech
      actor: Chris
      text: "Ah mais c'est pour ça que c'était détaxé à 70%, désolé Nilph."
---

🌞 Suite au réchauffement climatique, à un trou dans le plafond et à un manque d’assistance technique, le bar vous propose d'éviter le soleil grâce à nos magnifiques feuilles de palmier !  
Prenez place sous l'une d'entre elles (*chacune ne peut accueillir qu'une seule personne*). Régulièrement, un Pikachu fera une danse de la pluie au-dessus de vous. C'est bien joli, mais n'ayant pas fait d'études en apachologie, il ne fera tomber que ce qui se trouve sous les feuilles :  
- 🥥 Si une noix de coco vous tombe dessus, vous pouvez la garder, il paraît que certaines personnes aiment ça, ou l'échanger contre quelques {% include icon/tasse icon="TasseBlanche" %}.  
- 🎳 Si c'est une boule de bowling, vous serez contraint à une petite bronzette à l’ombre. Ça ne rapporte rien, si ce n'est un mal de crâne et un trou dans le parquet.  
- 🍃 Si rien ne vous tombe dessus, vous marquez un point.  
La partie se termine lorsque quelqu'un arrivera à faire tomber la vraie pluie, avec de l’eau et tout !  
On fait alors le compte des points, ce qui vous permettra de gagner quelques tasses.

🌴 Chaque palmier comporte **une noix de coco** et **3 boules de bowling**, faites donc attention à votre choix.  
Concernant les noix de coco, en plus de vous faire marquer un point, vous aurez droit à un bonus de tasses selon la quantité de noix que vous aurez récupérées :  
- 1 à 3 noix : une {% include icon/tasse icon="TasseBlanche" %}  
- 4 à 6 noix : deux {% include icon/tasse icon="TasseBlanche" %}  
- Au moins 7 noix : trois {% include icon/tasse icon="TasseBlanche" %}

{% capture accordion_content %}
Il y en a trois, que nous appellerons A, B et C (de très jolis noms je trouve). Merci de marquer votre nom à côté de la feuille que vous avez choisi (qui ont de tout aussi jolis noms). Un emplacement par personne, et une personne par emplacement :  
```
A1 :        B1 :        C1 :
A2 :        B2 :        C2 :
A3 :        B3 :        C3 :
A4 :        B4 :        C4 :
A5 :        B5 :        C5 :
A6 :        B6 :        C6 :
A7 :        B7 :        C7 :
A8 :        B8 :        C8 :
```
{% endcapture %}
{% include block/accordion title="Les palmiers" content=accordion_content %}

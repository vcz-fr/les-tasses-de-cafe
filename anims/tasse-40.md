---
layout: game

title: Tasse 40

game:
    genres:
        - Estimation

    support:
        where: Discord

    players: "2 et plus"
    duration: "Longue (plus de deux semaines)"
    authors:
        - AirDur

    description: |
        Spéculez en équipe sur votre Délégation préférée pour faire le plein de cacahuètes !

rp:
    - type: speech
      actor: Chris
      text: "J'ai la flemme d'en faire un là. Au moment où j'écris ça j'ai dûr faire quoi, cinq pages et plein de corrections. Je suis vidé. Donc pour le moment il n'y aura pas de RP."
---

📊 Le but du jeu est d'être les plus gros Pictass du serveur. Vous serez par équipe de 2 et devrez spéculer sur la valeur de 2 actions : les actions {% include icon/tasse icon="TasseBleue" %} et les actions {% include icon/tasse icon="TasseOrange" %} grâce à la monnaie de l'animation, des 🥜. On avait pas les moyens pour des billets.  

Chaque équipe commence avec 50 🥜, que vous pouvez échanger n'importe quand **du lundi au samedi** contre des {% include icon/tasse icon="TasseBleue" %} ou des {% include icon/tasse icon="TasseOrange" %}, le prix variant chaque soir sauf les samedis et dimanches.
Tous les **dimanches**, on vous versera des dividendes (soit quelques :peanuts: pour chaque action que vous possédez) et le fruit de vos spéculations.  
Chaque semaine, vous pouvez participer à deux spéculations maximum à condition de les envoyer **par MP**.  
📈 *Tous les gains et toutes les pertes sont arrondies au supérieur.*

À la fermeture de l'animation, l'équipe gagnante est celle qui a le plus de 🥜. En cas d'égalité, on ira voir du côté de vos actions.

{% capture accordion_content %}
1️⃣ Vous pouvez vendre toutes les actions d'un même type ({% include icon/tasse icon="TasseBleue" %} ou {% include icon/tasse icon="TasseOrange" %}) que vous possédez pour 70% du prix actuel. Si vous êtes la personne qui a vendu le plus d'actions de ce type en fin de semaine, vous doublez le montant de la vente. Une seule fois par semaine.  
*Note : les ventes "inutiles" comme les achats/ventes le même jour sans variation ne comptent pas.*

2️⃣ Vous pouvez perdre la moitié de vos actions d'un même type. Si le type que vous avez choisi est minoritaire en nombre total d'actions perdues de la semaine, vous gagnez 250% de ce que vous avez perdu.

3️⃣ Vous pouvez parier un certain montant en 🥜 sur l'évolution du prix d'une action sur 3 jours (par exemple, si on est mardi, vous pouvez tenter de deviner si le prix du Jeudi sera supérieur, égal ou inférieur). Si vous avez bon, vous doublez votre mise.

4️⃣ Vous pouvez investir toutes vos 🥜 dans une des spéculations ci-dessus. Si celle-ci rapporte le plus de 🥜 par rapport aux 2 autres spéculations durant la semaine, vous doublez vos actions {% include icon/tasse icon="TasseBleue" %} et {% include icon/tasse icon="TasseOrange" %}.

5️⃣ *Débloqué à la dernière semaine.*

6️⃣ Vous pouvez parier un certain montant en 🥜 sur l'action qui donnera le plus de dividendes au total. Si vous avez bon, vous doublez votre mise.
{% endcapture %}
{% include block/accordion title="Les spéculations" content=accordion_content %}

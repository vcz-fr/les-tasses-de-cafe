---
title: Le début des zaricots !
author: Vincenzo
---

_\*Des bruits sourds résonnent dans les couloirs. Leur intensité grandit...\*_

_\*Soudainement, un personnage sur l'Estrade. Il trébuche et... se plante visage le premier au sol\*_

Aïe... Pourquoi est-ce que cette **fichue** planche dépassait du sol, là ?! Mais qu'est-ce qui lui a pris comme ça ?! Et
puis là lumière est trop forte et le micro est mal réglé ! Pff...

_\*Le curieux personnage regarde en direction des coulisses, d'où il vient\*_

Bon, on m'a dit de ne pas la faire trop longue alors voilà le deal : je suis ici pour vous présenter le blog. Tadaaa!
Vous savez, un blog c'est bien mais avec du contenu c'est mieux et comme les gens ont l'air chiches ici... Oui
j'insiste, faites réparer cette planche ! Tout ça pour dire que vous allez pouvoir mettre la main à la pâte. Et pour
bien commencer je vais devoir vous montrer ce que cette plateforme a dans le ventre.

Commençons par le commencement : un article possède un titre, une personne qui dirige sa rédaction et une date de
publication. La date fait partie du nom du fichier, qui suit le format `yyyy-mm-dd-nom-de-l-article.md`. Cet article
possède le nom de fichier `2021-06-01-le-debut-des-zaricots.md` par exemple. Les trois premiers segments représentent
l'année, le mois et le jour de publication, dans cet ordre. Vous aurez certainement remarqué que le nom de fichier finit
par `.md`, ce qui signifie que nous utilisons la syntaxe [Markdown](https://www.markdownguide.org/cheat-sheet/){:rel="nofollow"}.

Voilà donc de quoi vous rafraîchir si vous ne savez pas trop comment cette syntaxe fonctionne:


```md
_Ceci sera en italique_  
*Ceci sera en italique aussi*

__Ceci sera en gras__  
**Vous avez compris la musique**

~~Maintenant on passe aux choses sérieuses~~
```

_Ceci sera en italique_  
*Ceci sera en italique aussi*

__Ceci sera en gras__  
**Vous avez compris la musique**

~~Maintenant on passe aux choses sérieuses~~

```md
{% raw %}
[Ça crée des liens]({% post_url completement-tasses/2021-06-01-le-debut-des-zaricots %})  
[Dans cette page](#)  
[Vers une animation](/anims/montpartasse.html)  
[Vers un autre site](https://perdu.com){:rel="nofollow"}  
[Lien des yeux, lien du cœur][loin]{:rel="nofollow"}
{% endraw %}
```

[Ça crée des liens]({% post_url completement-tasses/2021-06-01-le-debut-des-zaricots %})  
[Dans cette page](#)  
[Vers une animation](/anims/montpartasse.html)  
[Vers un autre site](https://perdu.com){:rel="nofollow"}  
[Lien des yeux, lien du cœur][loin]{:rel="nofollow"}

```md
# Ce titre fait sérieux {#avec-un-lien-serieux-aussi-non}
## Ce titre fait un peu moins sérieux
### Ce titre ne fait plus sérieux
#### Sérieux, ça fait beaucoup de titres
##### Vous avez vraiment besoin d'autant de niveaux ?
###### Mais c'est plus petit que le texte là, vous plaisantez !
```

# Ce titre fait sérieux {#avec-un-lien-serieux-aussi-non}
## Ce titre fait un peu moins sérieux
### Ce titre ne fait plus sérieux
#### Sérieux, ça fait beaucoup de titres
##### Vous avez vraiment besoin d'autant de niveaux ?
###### Mais c'est plus petit que le texte là, vous plaisantez !

```md
Liste des choses à présenter :

1. Une liste ordonnée
1. Une liste ordonnée (bis)
3. Oulà, où est passé le 2 ?

- Une liste non ordonnée
- Ce texte n'a plus aucun sens

- [ ] Vas-y que je te rajoute des cases à cocher qu'on ne peut pas cocher
- [x] Et des cases déjà cochées tant qu'on y est parce que pourquoi pas ?
```

1. Une liste ordonnée
1. Une liste ordonnée (bis)
3. Oulà, où est passé le 2 ? Ah non, tout va bien !

- Une liste non ordonnée
- Ce texte n'a plus aucun sens

- [ ] Vas-y que je te rajoute des cases à cocher qu'on ne peut pas cocher
- [x] Et des cases déjà cochées tant qu'on y est parce que pourquoi pas ?

```md
> Je cite, cet article commence à devenir **un grand n'importe quoi**.
> Mais je m'en fiche, au moins il était amusant à écrire.
>
>> Tu n'es pas au bout de tes surprises.
>
> Quoi ? Qui a parlé, qui va là ?
```

> Je cite, cet article commence à devenir **un grand n'importe quoi**.
> Mais je m'en fiche, au moins il était amusant à écrire.
>
>> Tu n'es pas au bout de tes surprises.
>
> Quoi ? Qui a parlé, qui va là ?


```md
Bon, il nous faut un moment de tendresse, de bonheur et de pureté. Que diriez-vous d'un Yoshi bleu ?
Note : son chargement est optimisé

![Coucou Chris](/assets/img/avatars/chrisantem.webp){:loading="lazy" decoding="async"}
```

![Coucou Chris](/assets/img/avatars/chrisantem.webp){:loading="lazy" decoding="async"}

Si l'image ne s'affiche pas dans votre navigateur, c'est qu'il va falloir se mettre à la page ou bien que vous venez du
futur. Si la deuxième option est la bonne : bonjour être futuriste, est-ce qu'on mange toujours des choucroutes à votre
époque ?

```md
Choucroute
: Mets composé de chou coupé finement et transformé par lacto-fermentation dans une saumure, généralement
accompagné de garniture.
```

Choucroute
: Mets composé de chou coupé finement et transformé par lacto-fermentation dans une saumure, généralement
accompagné de garniture.

Saumure
: Solution aqueuse d'un sel, généralement de sel de cuisine, saturée ou de forte concentration.

Concentration
: Action qui consiste à tout ramener au centre.

Comme nous nous approchons de la fin de ce post[^1], il ne nous reste plus que quelques choses mineures à vous
montrer:

```md
| Ligne  | titre  |   du   |             tableau             |
|:-------|-------:|:------:|---------------------------------|
| Ligne  |  texte |   du   | tableau                         |
|        |        |        | Aligné à :                      |
| gauche |        |        |                                 |
|        | droite |        |                                 |
|        |        | centre |                                 |
|        |        |        | Je vous en pose des questions ? |
```

| Ligne  | titre  |   du   |             tableau             |
|:-------|-------:|:------:|---------------------------------|
| Ligne  |  texte |   du   | tableau                         |
|        |        |        | Aligné à :                      |
| gauche |        |        |                                 |
|        | droite |        |                                 |
|        |        | centre |                                 |
|        |        |        | Je vous en pose des questions ? |

\`\`\`js  
console.log("Courage, encore un effort");  
\`\`\`

```js
console.log("Courage, encore un effort");
```

```json
{
    "text": "Ceci est un objet JSON",
    "confusion-level": 9001,
    "what": [ false ]
}
```

Oh attendez, on me signale dans l'oreillette que ça ne serait pas fini ? Mais je n'ai plus de souffle moi, laissez-moi
respirer ! Et puis, c'est pas comme s'il y avait déjà de quoi faire avec tout ce qui se trouve dans ce message, hein!
Quoi ? Vous voulez que je vous montre comment ajouter des tasses et d'autres machins dans vos messages ? J'accepte
seulement si vous me laisserez tranquille après ?

Vous êtes d'accord ? Huh, je n'ai même pas eu à négocier, c'est cool.

Et bien [la suite, ce sera par ici]({% post_url completement-tasses/2021-06-02-le-debut-des-zaricots-la-suite %}) s'il
vous plaît.

_\*Le curieux personnage part dans la direction opposée à celle par laquelle il est venu. À moins que ce ne soit la même
? J'ai oublié\*_

_\*Il trébuche à nouveau sur une planche, peut-être celle de tout à l'heure. Cette fois, il se rattrape de justesse,
grogne et reprend sa marche\*_

[^1]: La fin, la fin... C'est vite dit, ça.
[loin]: https://perdu.com "Je serai là, toujours pour toi."
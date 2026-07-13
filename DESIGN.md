---
name: Storytelling — Format immersif photo-first
description: Un long-form éditorial où la photographie plein écran est le sujet et le texte défile devant elle.
colors:
  scene-gold: "oklch(0.82 0.16 82)"
  stage-black: "#000000"
  ink-white: "#FFFFFF"
  body-black: "#0A0A0A"
typography:
  display:
    fontFamily: "Poppins, sans-serif"
    fontSize: "clamp(3.25rem, 13vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Poppins, sans-serif"
    fontSize: "clamp(1.35rem, 3.6vw, 2.35rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.012em"
  title:
    fontFamily: "Poppins, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "normal"
  body:
    fontFamily: "Poppins, sans-serif"
    fontSize: "clamp(1rem, 1.4vw, 1.2rem)"
    fontWeight: 300
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "Poppins, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.2em"
spacing:
  gutter-mobile: "1.25rem"
  gutter-desktop: "7vw"
  section-y: "6rem"
  breath-short: "100svh"
  breath-normal: "150vh"
  breath-tall: "200vh"
components:
  story-name:
    textColor: "{colors.scene-gold}"
    typography: "{typography.display}"
  story-tagline:
    textColor: "{colors.ink-white}"
    typography: "{typography.headline}"
  story-body:
    textColor: "{colors.ink-white}"
    typography: "{typography.body}"
  story-label:
    textColor: "{colors.ink-white}"
    typography: "{typography.label}"
  story-rule:
    backgroundColor: "{colors.scene-gold}"
    height: "3px"
    width: "clamp(2.75rem, 7vw, 4.5rem)"
---

# Design System: Storytelling — Format immersif photo-first

## 1. Overview

**Creative North Star: "L'Affiche de Concert"**

La page est une affiche, pas un article illustré. La photographie occupe le plein écran, fixe, et le texte défile devant elle. L'ordre de lecture est inversé par rapport à la presse en ligne ordinaire : on voit d'abord l'image, on lit ensuite. Chaque décision visuelle découle de cette hiérarchie — si un élément de mise en page abîme la photographie, c'est l'élément qui cède, jamais la photographie.

La typographie est celle d'une affiche de festival : un nom qui claque en très grand, une ligne de sous-titre, un filet, une signature au pied. Le contraste d'échelle est brutal et assumé (rapport 2,5× entre le nom et son sous-titre). L'or de scène est la seule couleur du système ; il vient de la lumière des projecteurs et des costumes, pas d'une charte de marque. Tout le reste est blanc sur noir.

Le système rejette explicitement le vocabulaire du composant web : pas de carte, pas de cadre, pas d'ombre portée, pas de verre dépoli. Le texte est posé à même l'image, et sa lisibilité est obtenue par la lumière — un voile localisé sous le bloc de texte — et non par un contenant. Une interface qui pose un panneau translucide devant une photographie de concert avoue qu'elle n'a pas su composer avec elle.

**Key Characteristics:**
- La photographie est le sujet ; le texte est son invité.
- Une seule couleur d'accent, tirée de la lumière de scène.
- Aucun contenant : ni carte, ni cadre, ni ombre, ni verre.
- Le contraste d'échelle typographique porte la hiérarchie, pas la décoration.
- Le mouvement est une révélation, jamais un rebond.

## 2. Colors

Une palette de deux valeurs et un accent : le noir de salle, le blanc d'encre, et l'or des projecteurs. La couleur ne décore rien ; elle désigne.

### Primary
- **Or de Scène** (`oklch(0.82 0.16 82)`) : l'unique accent. Il vient de la lumière des projecteurs et des costumes à strass, pas d'une charte. Il porte le nom de l'artiste, les filets, et les repères de navigation. Il est la complémentaire des bleus et magentas de scène qui dominent les photographies : il tranche sur elles au lieu de s'y noyer. Jamais employé pour du texte courant.

### Neutral
- **Noir de Salle** (`#000000`) : le fond du conteneur d'images et de l'article. Ce qu'on voit quand aucune photographie ne s'affiche encore.
- **Noir de Page** (`#0A0A0A`) : le fond du document, hors format immersif.
- **Blanc d'Encre** (`#FFFFFF`) : tout le texte, sans exception hors accent. Les valeurs intermédiaires s'obtiennent par transparence (`rgba(255,255,255,0.8)` pour les labels), jamais par un gris nommé — un gris posé sur une photographie se salit ; une transparence de blanc prend la couleur de la lumière derrière elle.

### Named Rules

**La Règle de l'Accent Rare.** L'or de scène ne couvre jamais plus de 10 % d'un écran. Il désigne le nom, les filets et les repères. Un paragraphe en or, un titre de chapitre en or, un fond en or : interdits. Sa rareté est ce qui lui donne sa force.

**La Règle du Blanc Transparent.** Pour atténuer un texte, on baisse l'opacité du blanc — jamais on ne choisit un gris. Le gris sur une photographie de scène paraît sale et délavé ; le blanc transparent laisse monter la couleur de l'image.

**La Règle des Tokens Morts.** `--color-orlatti`, `--color-accent1`, `--color-trame` sont hérités d'une enquête antérieure et n'appartiennent pas à ce format. Ne jamais les réintroduire. Si une couleur manque, elle se tire de la photographie, pas de la dette.

## 3. Typography

**Display Font:** Poppins (avec `sans-serif` en repli)
**Body Font:** Poppins (même famille, graisses contrastées)

**Character:** Une seule famille géométrique, exploitée sur toute son amplitude de graisses — du 900 pour le nom au 300 pour le texte courant. La tension ne vient pas d'un couple de polices mais de l'écart entre ces graisses et ces échelles. Un second caractère affaiblirait l'affiche.

### Hierarchy
- **Display** (900, `clamp(3.25rem, 13vw, 6rem)`, interligne 0.9, approche −0.035em, capitales) : le nom de l'artiste, à l'ouverture. Une seule fois par format. C'est l'affiche.
- **Headline** (400, `clamp(1.35rem, 3.6vw, 2.35rem)`, interligne 1.2) : la ligne de sous-titre sous le nom. Elle doit être écrasée par le display — le rapport de 2,5× est le cœur de la hiérarchie.
- **Title** (700, `clamp(1.875rem, 4vw, 3rem)`, interligne 1.25) : les intertitres de chapitre.
- **Body** (300, `clamp(1rem, 1.4vw, 1.2rem)`, interligne 1.7) : le texte courant. Mesure plafonnée à 58–65ch. L'interligne est généreux : du texte clair sur fond sombre lit plus léger qu'il ne l'est et réclame de l'air.
- **Label** (500–600, 0.65–0.7rem, approche 0.2–0.28em, capitales) : signatures, dates, repères de navigation, numéros de chapitre.

### Named Rules

**La Règle de l'Écart.** Deux niveaux typographiques voisins ne se ressemblent jamais. Si l'on hésite entre deux tailles, c'est qu'elles sont trop proches : creuser l'écart, ou fusionner les niveaux.

**La Règle du Masque.** Le nom se dévoile derrière un masque (`overflow: hidden`) et non par un fondu. Attention : Poppins a un ascendant haut et l'interligne de 0.9 rend la boîte de ligne plus courte que le glyphe — le masque doit être ouvert en haut (`padding-top: 0.18em`, compensé par une marge négative), sans quoi il tranche le tréma du Ï.

## 4. Elevation

**Ce système est plat. Il n'a pas d'ombres, pas de cartes, pas de bordures, et pas de verre dépoli.** La profondeur ne vient pas d'un empilement de plans matériels mais de la lumière : un voile de noir posé sur la photographie, localisé exactement sous le texte qu'il sert, et une ombre portée sur le texte lui-même.

Le seul outil d'élévation est donc l'ombre de texte. Elle ne détache pas un conteneur du fond ; elle détache les lettres de la lumière.

### Shadow Vocabulary
- **Ombre de lecture** (`text-shadow: 0 1px 3px rgba(0,0,0,0.85), 0 4px 24px rgba(0,0,0,0.55)`) : posée sur tout texte nu reposant directement sur une photographie. La première ombre découpe le glyphe, la seconde crée un halo diffus qui l'assoit.

### Named Rules

**La Règle du Voile Localisé.** Un voile ne s'étale jamais sur toute la photographie. Il est ancré là où le texte se pose — un quart de cercle dans un angle, une base au pied — et il s'éteint avant le sujet de l'image. Une trame pleine achète la lisibilité au prix de la photographie : c'est un aveu d'échec de composition.

**La Règle du Voile qui Appartient au Fond.** Le voile vit dans le conteneur d'arrière-plan fixe, jamais dans le contenu qui défile. Posé dans le contenu, il se déplace avec lui, montre ses bords, et sa fin finit par entrer dans le champ au scroll. Posé sur le fond, il reste collé au viewport, n'a ni bord ni fin, et son opacité se fond au rythme du cross-fade des images — il s'efface avec la photographie qu'il servait.

**La Règle du Non-Cadre.** Aucun élément du format ne pose de contenant devant une photographie. Ni carte, ni panneau, ni bordure, ni `backdrop-filter`. Test d'audit en une phrase : si l'on peut détourer un rectangle autour d'un bloc de texte, le bloc est de trop.

## 5. Components

### Story Section
Le bloc élémentaire du format : un « moment » du récit, lié à une photographie de fond.
- **Structure :** une section haute (`100svh`, `150vh` ou `200vh` selon la respiration voulue), à l'intérieur de laquelle un bloc de texte se cale à gauche, au centre ou à droite.
- **Fond :** aucun. Le texte est nu, posé sur l'image, avec l'ombre de lecture.
- **Marges :** `1.25rem` en mobile, `7vw` en desktop ; `6rem` de padding vertical.
- **Lisibilité :** assurée par un voile localisé sur le fond (prop `veil`), aligné sur l'ancrage du bloc.
- **Hauteur = rythme.** La hauteur d'une section n'est pas dictée par son contenu mais par le silence qu'on veut avant le prochain mot.

### Le Fond Immersif
Le composant signature. Une pile d'images en `position: fixed` couvrant le viewport ; chaque section déclare la sienne.
- **Transition :** cross-fade d'opacité de 1400 ms lorsqu'une section traverse la bande centrale du viewport.
- **Mouvement :** Ken Burns très lent (échelle 1.03 → 1.11 sur 22 s), mis en pause quand l'image n'est pas active — l'image sortante reste ainsi figée à son niveau de zoom pendant le fondu, sans saut.
- **Cadrage :** chaque image porte son propre `object-position`, distinct en mobile et en desktop. Une photo 3:2 dans un viewport portrait subit un recadrage horizontal massif : le cadrage mobile doit être recentré sur le sujet, sinon il ne reste que du fond.

### Le Voile
- **Desktop :** un quart de cercle (`radial-gradient` elliptique) ancré dans l'angle où le texte se pose, éteint à 0 avant d'atteindre le sujet.
- **Mobile :** une base verticale, le texte y occupant toute la largeur — mais éteinte avant le visage.
- **Comportement :** son opacité suit la section active et se fond au rythme du cross-fade. Une section sans texte à protéger ne demande pas de voile.

### L'Affiche (hero)
- **Composition :** le nom en très grand, la ligne de sous-titre, un filet d'or, le chapô, une ligne de signature au pied. Le tout ancré en bas, dans l'angle laissé libre par la photographie.
- **Entrée :** révélation par masque pour le nom, montée échelonnée pour le reste (80 → 660 ms).

### Header
- Barre fixe de 64px, translucide (`bg-black/40` + flou), qui flotte au-dessus de la photographie. **Le padding que le body réserve sous lui doit être neutralisé dans ce format** : la photographie couvre déjà le plein écran, ce padding ne dégage rien et fait déborder le premier écran hors du viewport.

## 6. Do's and Don'ts

### Do:
- **Do** poser le texte nu sur la photographie, avec l'ombre de lecture.
- **Do** localiser chaque voile sous le texte qu'il sert, et le laisser s'éteindre avant le sujet de l'image.
- **Do** placer les voiles dans le conteneur de fond fixe, jamais dans le contenu qui défile.
- **Do** réserver l'or de scène au nom, aux filets et aux repères (≤ 10 % de l'écran).
- **Do** atténuer un texte par transparence du blanc, jamais par un gris.
- **Do** utiliser une courbe exponentielle sortante (`cubic-bezier(0.16, 1, 0.3, 1)`) pour toute animation.
- **Do** fournir une alternative `prefers-reduced-motion` à chaque animation, sans jamais masquer le contenu par défaut.
- **Do** creuser le contraste d'échelle typographique jusqu'à ce qu'il soit inconfortable, puis reculer d'un cran.

### Don't:
- **Don't** poser un panneau de verre dépoli (`backdrop-filter`) devant une photographie. Le verre était le pattern de ce format ; il a été supprimé pour de bonnes raisons et ne doit pas revenir.
- **Don't** encadrer un bloc de texte : ni carte, ni bordure, ni ombre portée sur un conteneur.
- **Don't** étaler un voile sur toute la photographie pour gagner en lisibilité. On perd l'image, qui est le sujet.
- **Don't** utiliser `animate-bounce` ni aucune courbe élastique. Les objets réels décélèrent.
- **Don't** peindre du texte avec un dégradé (`background-clip: text`).
- **Don't** poser un surtitre en capitales tracées au-dessus de chaque section. Le système de chapitres numérotés (« Chapitre 1 », « Chapitre 2 ») est une voix éditoriale délibérée ; le généraliser en grammaire de section le viderait de son sens.
- **Don't** réintroduire `--color-orlatti`, `--color-accent1` ou `--color-trame` : tokens morts d'une enquête antérieure.
- **Don't** laisser un texte déborder de son conteneur. Le nom en `clamp()` doit être testé à 390, 820 et 1440px.
</content>
</invoke>

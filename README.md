This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```


# Explication de `<Canvas>`, `camera` et `fov` dans `@react-three/fiber`

## 1. `<Canvas>` dans React-Three/Fiber

Le composant `<Canvas>` est le point d'entrée principal pour intégrer une scène 3D dans une application React avec Three.js via `@react-three/fiber`. Il représente le conteneur de la scène 3D et gère le rendu et l'interaction avec cette scène.

### Exemple simple :

```ts
<Canvas>
  {/* Ici on place nos objets 3D */}
</Canvas>
```

## 2. Propriété camera dans `<Canvas>`

La propriété camera dans `<Canvas>` permet de configurer la caméra de la scène 3D. La caméra détermine la perspective depuis laquelle la scène est vue.

Exemple de la propriété camera :

```ts
<Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
  {/* autres objets */}
</Canvas>
```

___
<b>position</b> : Ce tableau définit la position de la caméra dans l'espace 3D. Il prend trois valeurs [x, y, z] :

- x : Déplace la caméra sur l'axe horizontal (gauche/droite).
- y : Déplace la caméra sur l'axe vertical (haut/bas).
- z : Déplace la caméra en profondeur (avant/arrière).

Par exemple, position: [0, 0, 5] place la caméra à 5 unités sur l'axe z, ce qui signifie qu'elle est éloignée de l'origine (là où les objets 3D sont souvent placés).

fov (Field of View) : L'angle de vue de la caméra, en degrés. Cela contrôle combien de la scène est visible à partir de la position de la caméra.

Une valeur faible (par exemple fov: 25) donne une vue plus rapprochée, avec un effet de zoom.
Une valeur élevée (par exemple fov: 75) donne une vue plus large, comme si tu étais plus loin.
Le fov est un paramètre important pour ajuster la perspective de la caméra.

Exemple d'ajustement de la caméra :

```ts
<Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
  {/* autres objets */}
</Canvas>
```


## 3. Options supplémentaires de camera

Il existe d'autres options que tu peux utiliser pour personnaliser la caméra, comme :

near et far : Ces deux valeurs définissent les distances minimales et maximales à partir de la caméra à partir desquelles les objets sont visibles. Les objets plus proches que la valeur near ou plus éloignés que la valeur far ne seront pas rendus.

```ts
camera={{ position: [0, 0, 5], near: 0.1, far: 1000, fov: 50 }}
```

- <b>near</b> : La distance minimale (ex. near: 0.1).
- <b>far</b> : La distance maximale (ex. far: 1000).


## 4. L'option fov (Field of View)
Le fov ou <b>Champ de Vision</b> détermine l'angle de vue de la caméra, c'est-à-dire combien de la scène est visible à travers la caméra. C'est un paramètre essentiel pour contrôler la perspective.

Un petit fov (par exemple, 30-40) : Cela a un effet de zoom, où la scène semble plus rapprochée.

Un grand fov (par exemple, 75-90) : Cela a un effet de perspective large, où la scène semble plus ouverte, comme si on reculait pour voir plus d'éléments.
Exemple de changement de fov :

```ts
<Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
  {/* objets */}
</Canvas>
```

Un fov élevé est souvent utilisé pour simuler un objectif grand angle, tandis qu'un fov faible peut donner un effet de zoom rapproché.

## 5. Interaction avec la caméra (OrbitControls)
`<OrbitControls>` est un autre composant important de @react-three/drei qui permet à l'utilisateur d'interagir avec la scène en déplaçant la caméra via la souris (rotation, zoom, etc.). Par défaut, tu peux zoomer, faire pivoter et déplacer la caméra.

Exemple où le zoom est limité :
```ts
<OrbitControls minDistance={1} maxDistance={5} />
```

<b>minDistance</b> : Limite le zoom avant en définissant la distance minimale entre la caméra et l'objet.

<b>maxDistance</b> : Limite le zoom arrière en définissant la distance maximale.

Cela permet de rendre la scène plus interactive et de s'assurer que l'utilisateur ne peut pas trop zoomer ou trop s'éloigner.

Résumé des options importantes de camera :
position : Position de la caméra (ex. [0, 0, 5]).
fov : Champ de vision (ex. 50 ou 75).
near et far : Limites de visibilité de la caméra.
minDistance et maxDistance : Limiter les distances de zoom avec OrbitControls.
---
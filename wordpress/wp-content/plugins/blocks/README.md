# Plugin Ocade Blocks.
Le plugin Ocade Blocks permet de créer des blocks Gutenberg de façon simplifié (création semi-automatisée).

![Readme](./screenshot.png)

## Où trouver les blocks gutenberg de Wordpress ?
* `/packages/components`
* `/packages/editor/components`
* `/editor/ sera chargé dans wp.editor`
* `/components/ sera chargé par wp.components`

## Translate du plugins

### Procédure de traduction
1. Créer un dossier `languages` dans le dossier du plugin.
2. Télécharger le plugin `Loco Translate` et l'activer.
3. Dans `translate` dans plugins, créer une template si besoin, (fichier nom-plugin se créer). 
4. Ajouter une langue et choisir le repertoire de destination.
5. Traduire les termes + `SAVE` après `CHAQUE` traduction.
6. Traduction prise en compte directement.
7. Il faut absolument que ce code soit dans le fichier stlye.css ou fichier.php avec les commentaires du theme/plugins (ailleur ne fonctionne pas):
```
/** Traductions */
function ocade_blocks_load_textdomain() {
  load_plugin_textdomain('ocade-blocks', false, dirname(plugin_basename(__FILE__)) . '/languages/');
}
add_action('plugins_loaded',  function () { ocade_blocks_load_textdomain(); });
```
8. Procédure pour traduire:
  1. Aller dans loco translate (bas menu admin)
  2. Aller dans plugins
  3. Aller dans ocadeWoocommerce
  4. Templates
  5. Syncroniser (syncrinise les chaine dans le code + enregistrer.
  6. Aller dans la langue a traduire (retour une page en arrière).
  7. Cliquer sur syncroniser (utilisela template pour se syncroniser. Ne regarde pas du tout le code à ce niveau).
  8. Traduire un mot + enregistrer directement après chaque mot traduit.
  9. Et voila le site est traduit.

### Difficultés de traduction
Les fichiers Javascript (block gutenberg par exemple). Voici comment procéder:
1. Installer la lib permettant de renseigner des chaines a traduire:
```
npm install @wordpress/i18n --save
```
2. import { __, _x, _n, _nx } from '@wordpress/i18n'; puis encapsuler la chaine comme d'habitude __("string", "text-domain")
3. Avoir la command wp disponnible:
  1. wp --version
  2. curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
  3. chmod +x wp-cli.phar
  4. sudo mv wp-cli.phar /usr/local/bin/wp
4. Enrichire le fichier de traduction en lançant:
```
wp i18n make-pot . languages/ocade-blocks.pot --include="src/*.js,build/*.js"
```
5. Synchroniser la template dans Loco translate (extension/ocade-blocks)
6. Synchroniser + traduire
7. Et voila c'est traduit meme dans le BO.

## Récupération du block
Gutenberg affiche parfois le boutton `Récupération du block`. Les cas d'apparition possibles:
1. La partie `save` est différente de la partie récupéré dans la BDD.
2. Essayer les réglages un à un et essayer de sauvegarder. Si un d'entre pose problème on pourra le trouver.
3. Dans la partie PHP (block dynamique), un `echo, var_dump,...` est présent et empèche le save du block.
4. Des informations peuvent apparaitrent dans la console.

## Construire un block Ocade

### Fichier src/block/block.json
Le fichier `block.json` contient les paramètres du block. On retrouve entre autre:
* `name`: Nom du block
* `category`: Groupe auquel appartiendra le block dans la liste des blocks (+)
* `supports`: Certains régalges (html, align, ...)
* `attributes`: Les paramètres du blocks

### Fichier src/block/custom-icon.js
Fournir le svg de l'icon du block dans un [convertisseur SVG to JSX](https://www.w3toolhub.com/svg-to-jsx-converter.html)

### Fichier src/block/index.js
* `title`: Nom affiché du block
* `description`: Description du block 

### Fichier src/block/inspecteur.js
L'inspecteur à la colonne latérale droite dans l'editeur Gutenberg. C'est ici qu'on peut ajouter des possibilités de réglages, (On/Off, input,...).

### Fichier src/block/toolbar.js
La toolbar est une barre d'option situé dans la page, au niveau du block et permet d'ajouter des possibilités de réglages, (alignement du text, gras, italic...).

### Fichier src/block/edit-block.js
Rendu du block dans l'editeur.

### Fichier src/block/save.js
Rendu du block sur le site (front). Lorsqu'un block est `dynamique`, il faut au minimum `save les props` afin de les récupérer dans le PHP. Voici comment le faire:
```js
import { useBlockProps } from '@wordpress/block-editor';

export default function save() {  
  const blockProps = useBlockProps.save();
  return <div {...blockProps} ></div>
}
```

### Fichier src/block/editor.scss
Style uniquement appliqué dans le back-office.

### Fichier src/block/style.scss
Style uniquement appliqué dans le back-office `et` dans le front.

## Block dynamique
Pour créer un block dynamique on fait exactement la même procédure que pour un block simple. 
1. Créer le src/block
2. Ajoute le nom du block dans la section `ocade-blocks-dynamics` du fichier `includes/functions/RegisterBlocks.php`.
3. Ajout un fichier dans `includes/dynamic-blocks-render`. Le nom du fichier doit être le nom du block.
4. La fonction de render du block doit être `dynamicBlockRenderNomBlock` (nommage important !). On à toujours `dynamicBlockRender` puis en `CamelCase` le nom du block.

# Processus de Fusion Git 🔄

Pour fusionner une branche de développement (`devel`) dans la branche principale (`master`), suivez ces étapes :

1. 🔄 **Récupérer les dernières modifications du dépôt distant :**
   
   ```bash
   git fetch origin

    ```

🔀 Basculer sur la branche de développement :

 ```bash

git checkout devel

 ```

⬇️ Tirer les dernières modifications de la branche de développement :

 ```bash

git pull origin devel

 ```

🔀 Basculer sur la branche principale :

```bash

git checkout master

 ```

⬇️ Tirer les dernières modifications de la branche principale :

```bash

git pull origin master

 ```

🔄 Fusionner la branche devel dans master :

```bash

git merge devel

 ```

✅ Ajouter tous les changements pour le commit :

```bash

git add .

 ```
💬 Committer les changements avec un message :

  ```bash

git commit -m "Resolved merge conflicts between devel and master"
 ```
⬆️ Pousser les changements vers le dépôt distant sur master :

 ```bash

git push origin master
 ```
🗑️ Supprimer la branche devel localement :

```bash

  git branch -d devel
 
 ```

🗑️ Supprimer la branche devel du dépôt distant :

```bash

    git push origin --delete devel

 ```

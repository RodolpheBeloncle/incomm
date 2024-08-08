# Installation Locale de WordPress avec Docker

Ce guide vous aidera à configurer un environnement de développement local pour WordPress en utilisant Docker.

## Prérequis

Assurez-vous d'avoir les éléments suivants installés sur votre machine :

- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Étapes d'Installation

### 1. Cloner le Répertoire du Projet

Clonez ce dépôt sur votre machine locale.

```bash
git clone git@github.com:RodolpheBeloncle/incomm.git
cd incomm
docker-compose up -d

```

### 2. Aller dans la partie backoffice et acces a phpmyadmin

** Partie backoffice **
http://localhost/wp-admin

!!! avant d'importer la base de donnée selectionner la base de donnée
\*\* Partie myadmin base de donnée
http://localhost:8080/index.php?route=/database/structure&db=incomm

user:incomm
password:incomm

Le drop de la database est à la racine du repertoire du fichier

### Importer la Base de Données

1.Avant d'importer cliquer sur la bdd incomm -> selectionnez toutes les tables -> supprimez les.
2.Cliquez sur la base de données dans la collone de guauche pour la selectionner et importer la base de donnée.

### 3. Lancer le site

Ouvrir un navigateur : http://localhost
Ou directement dans docker.

---

# Conclusion

Détail des Plugins/Libraries Utilisés

ACF (Advanced Custom Fields) : pro

- Utilisation : Ce plugin est essentiel pour structurer les données de manière flexible et personnalisée. Il permet de créer des interfaces utilisateur simples pour les administrateurs afin de saisir et de gérer des informations supplémentaires.
  On aurrai pu faire sans la version pro, en utilisant le champ textarea ou wysiwig, determinier avec le client la separation avec un pipe par exemple, cela nous permet de pas payer le plugin.Mais on aurait perdu en experience utilisateur.

- Block gutenberg :
  Je m'en suis pas vraiment servi faute de temps mais peut accélérer vraiment l'intégration des pages couplé avec des compositions

- plugin kadence block pour la page d'accueil

- Pour pouvoir mettre la page recettes dans la page d'actualités :
  -> il faut faire le reglage dans le backoffice

- Page d'accueil utilisant un modèle de page , j'ai utilisé page builder editeur de gutenberg pour la page d'accueil.On auria pu utiliser le fichier font-page.php pour la page d'accueil et coder en php.


# Amélioration & Performence

Par manque de temps j'ai fait le style dans les composants templates, mais c'est pas une bonne pratique, il aurrait fallu charger un script de style au préalable d' un fichier main.css

Plugins de Sécurité : Pour assurer la sécurité du site, comme Wordfence ou Sucuri.

Plugins de Performance : Pour améliorer les performances du site, tels que W3 Total Cache ou WP Super Cache.

Conflits de Plugins : D'autres plugins pourraient entrer en conflit avec ACF, affectant la fonctionnalité ou la performance du site.

Performance : L'ajout de nombreux champs personnalisés peut potentiellement ralentir le site si les bonnes pratiques ne sont pas suivies.

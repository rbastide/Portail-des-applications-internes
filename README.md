# Portail des applications internes – Installation & Lancement

Ce document explique comment installer le projet, configurer le fichier `urls.json` et lancer l’application.

---

## Prérequis

- **Git** installé sur votre machine

---

## 📥 Cloner le dépôt

Commencez par cloner le repository GitHub :

```bash
git clone https://github.com/rbastide/Portail-des-applications-internes.git
```
Puis placez-vous dans le dossier du projet :

```bash
cd Portail-des-applications-internes
```

---

## Configuration du fichier urls.json
### Créer le fichier urls.json

- Le fichier urls.json doit être créer au même emplacement que le fichier urls-example.json
- Une astuce consiste à le copier, puis le coller, puis le renommer en urls.json

- Modifier les urls ainsi que leurs noms pour qu'elle correspondent à vos applications

--- 

## ▶️ Lancement de l'application

Une fois les étapes précédentes terminées : 

Ouvrez le fichier : 

```bash
intranet.html
```

## ✅ Application prête
L’application est maintenant lancée et prête à être utilisée 🚀

## Changer de structure

Pour changer de structure :

- Aller dans la barre de domaine en haut de votre navigateur et modifier le contenu après le "=" par une structure déjà existante (voir étape structure)

image a mettre

---

## Ajout d'applications, structures et catégories

### Ajout applications

Pour ajouter des applications il faut : 

- Rajouter un lien url accompagner de son nom dans le fichier urls.json
- Ajouter l'application dans le fichier applicationsMetadata.js, il doît être sous la forme :

    ```js
    nom_application: {
        id : "id_application",
        title : "Nom de l'application",
        icon : "url de l'image de l'application",
        url : "url de redirection vers le site",
        category : "Catégorie de l'application" // Aller à l'étape "Ajout d'une catégorie" pour vous renseignez dessus
    },

- Ajouter l'id de votre application dans le fichier config.js

    - Tout d'abord, ajouter l'id de votre application dans le tableau allTools :
        ```js
        const allTools = ["...","id de l'application","..."];
       ```

    - Ensuite, tout dépend de votre structure,
        - Si c'est un outil commun : ajouter le à la suite du tableau "commonTools"
        ```js
        const commonTools = ["duckduckgo","qwant","...","Id de l'application"];
        ```
        - Si c'est un outil utilisé par une strucutre : ajouter le au tableau applications du tableau structures
        ```js
        const structures = {
        "votre strucutre": {
            name: "Nom de la structure",
            applications: ["id de l'application"] + commonTools
        }
        }
        ```

---

### Ajout catégorie

Les catégories déjà présente sont : Favoris, Communes, Métiers

Pour ajouter une catégorie il faut : 

- Créer un espace pour qu'elle s'affiche dans le fichier intranet.html : 
```html
<div class="catégrorie de l'application">
            <div class="category-header">
                <button class="toggle-btn" onclick="toggleCategory(this)" aria-expanded="true">
                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </button>
                <p>Nom de la catégorie</p>
            </div>
            <div class="apps-container open" aria-placeholder="catégrorie de l'application-placeholder">

            </div>
        </div>
```

- Ajouter la classe de votre catégorie dans le fichier style.css, à la ligne 108, il y est censé avoir : 

image a mettre (screen css catégorie)

Renseignez votre classe

```css
.Nom de la catégorie
```

- Ajouter la catégorie dans la filter box dans le fichier intranet.html

```html
<button class="button-filter" onclick="displayCategory('Nom de la catégorie')">Nom de la catégorie</button>
```

- Ajouter votre nom de catégorie dans le tableau "categories" de la méthode "loadApplicationsByStructure" du fichier applicationDisplay.js
```js
  const categories = ['favoris', 'applicationCommunes','applicationMetier','Nom de la catégorie'];
```

- Pour finir, ajouter le nom de catégorie en plus d'un . au début du mot dans le tableau categories du fichier displayScript.js
```js
const categories = document.querySelectorAll('.favoris, .applicationMetier, .applicationCommunes','.Nom de la catégorie');
```
    - Répéter les mêmes méthodes pour les fonctions : displayCategory() et displayAll()

---

### Ajout Structure

Les structures déjà existantes :

- Nom : "url"
- Perimouv : "perimouv"
- Cias : "cias"
- Ml/Mde : "ml/mde"
- Silot : "silot"
- Oti : "oti"
- Communs : "common"
- Tous : "all"

Pour ajouter une structure : 

Aller dans le fichier :

```bash
config.js
```

- Dans le tableau : structures, ajouter votre structures sous le format : 

```js
"id_de_la_structure":{
        name:"Nom de la structure",
        applications : ["tableau","des","applications"]
    },
```

### Modifier la structure par défaut 

Si vous souhaitez modifier la structure par défaut : modifier le contenu de la variable constante "defaultStructure" : 
```js
const defaultStructure = "Nom de la structure à modifier";
``` 

# Explications 
Cette application est un support pour comprendre et utiliser les observables de 3 manières :
- from scratch avec new Observable() dans le fichier Button.ts, méthode createCustomObservable
- Depuis un événement avec la fonction fromEvent (fichier Button.ts, méthode generateObservableFromClick)
- Depuis un fetch (fichier Data.ts) pour créer 2 fois la liste des livres sans qu'il y ait de nouvelle requête fetch exécutée grâce à l'utilisation de shareReplay(1)
# Installer l'application : 
npm install
# lancer le serveur json-server : 
json-server --watch db.json
# Faire un build : 
npx webpack build
# Voir le résultat dans la console : 
node dist/bundle.js 
# Voir le résultat dans le navigateur
npm start

## AuthModule: Modulo Autorizzazione (Registrazione/Login)

Se inserisco in app-routing.module il mio AuthModule con le routes per register e login, non ho bisogno di inserire i path con i component nell'app.routes e avrò un caricamento dei componenti register e login all'avvio dell'applicazione.
Ovviamente non ho bisogno mai dell'AuthComponent ne tantomeno del router-outlet in AuthComponent. I componenti Register e Login hanno "vita" propria.
Ma in questo caso faccio un Lazy Loading, anche qui non ho bisogno di AuthComponent e devo togliere AuthModule nell'app-routing e inserire nelle app.routes il path con il module name.

## Registrazione lato Server

Avevo fatto un errore. La risposta che inviavo al client dal server quando registro l'utente, conteneva un oggetto JSON con description in caso di errore che controllavo io, altrimenti detail nel caso di risposta dal DB Mongo. Questo mi portava ad avere da client un problema, in quanto il JSON che ricevevo a volte aveva il detail e a volte il description!!! Normalizza sempre il JSON di risposta, per tutto!!!
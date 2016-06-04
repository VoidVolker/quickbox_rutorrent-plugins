﻿/*
 * PLUGIN AUTOTOOLS
 *
 * French language file.
 *
 * Author: Nicobubulle (nicobubulle@gmail.com)
 */

 var s_PluginFail			= "Le plug-in ne fonctionnera pas.";

 theUILang.autotools			= "Autotools";
 theUILang.autotoolsEnableLabel 	= "Activer la fonctionnalité 'AutoLabel'. Masque:";
 theUILang.autotoolsEnableMove		= "Activer la fonctionnalité 'AutoMove' si le label du torrent correspond au filtre";
 theUILang.autotoolsPathToFinished	= "Chemin vers le répertoire des torrents terminés";
 theUILang.autotoolsEnableWatch 	= "Activer la fonctionnalité 'AutoWatch'.";
 theUILang.autotoolsPathToWatch 	= "Chemin vers le répertoire à observer";
 theUILang.autotoolsWatchStart		= "Démarrer le téléchargement automatiquement.";
 theUILang.autotoolsNoPathToFinished	= "Plug-in 'Autotools': le chemin vers le répertoire des torrents terminés n'est pas défini. " + s_PluginFail;
 theUILang.autotoolsNoPathToWatch	= "Plug-in 'Autotools': le chemin vers le répertoire à observer n'est pas défini. " + s_PluginFail;
 theUILang.autotoolsFileOpType		= "Type d'opération";
 theUILang.autotoolsFileOpMove		= "Déplacer";
 theUILang.autotoolsFileOpHardLink 	= "Lien dur";
 theUILang.autotoolsFileOpCopy		= "Copier";
 theUILang.autotoolsFileOpSoftLink	= "Lien symbolique";
 theUILang.autotoolsAddLabel		= "Ajouter le label du torrent au chemin";
 theUILang.autotoolsAddName		= "Ajouter le nom du torrent au chemin";

thePlugins.get("autotools").langLoaded();

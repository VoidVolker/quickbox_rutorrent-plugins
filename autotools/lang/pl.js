﻿/*
 * PLUGIN AUTOTOOLS
 *
 * Polish language file.
 *
 * Author: Dare (piczok@gmail.com)
 */

 var s_PluginFail			= "Wtyczka nie będzie działać.";

 theUILang.autotools			= "Autotools";
 theUILang.autotoolsEnableLabel 	= "Włącz funkcję \"AutoEtykieta\", Template: ";
 theUILang.autotoolsEnableMove		= "Wlacz \"AutoMove\" jezeli funkcja torrentu pasuje do funkcji";
 theUILang.autotoolsPathToFinished	= "Ścieżka dla ukończonych pobierań";
 theUILang.autotoolsEnableWatch 	= "Włącz funkcję \"AutoWatch\" ";
 theUILang.autotoolsPathToWatch 	= "Ścieżka do bazowego katalogu obserwowanego";
 theUILang.autotoolsWatchStart		= "Uruchom pobieranie automatycznie";
 theUILang.autotoolsNoPathToFinished	= "Wtyczka Autotools: ścieżka dla ukończonych pobierań nie jest skonfigurowana. " + s_PluginFail;
 theUILang.autotoolsNoPathToWatch	= "Autotools plugin: ścieżka bazowa jest nieustawiona. " + s_PluginFail;
 theUILang.autotoolsFileOpType		= "Rodzaj operacji";
 theUILang.autotoolsFileOpMove		= "Przenieś";
 theUILang.autotoolsFileOpHardLink 	= "Hard link";
 theUILang.autotoolsFileOpCopy		= "Kopia";
 theUILang.autotoolsFileOpSoftLink	= "Soft link";
 theUILang.autotoolsAddLabel		= "Dodaj funkcje torrentu do sciezki";
 theUILang.autotoolsAddName		= "Dodaj nazwe torrentu do sciezki";

thePlugins.get("autotools").langLoaded();

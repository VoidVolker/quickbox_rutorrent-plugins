<?php

eval(getPluginConf('lookat'));

require_once( "lookat.php" );

$theSettings->registerPlugin($plugin["name"],$pInfo["perms"]);
$look = rLook::load();
$jResult.=('plugin.lookData='.$look->get().';');
$jResult.=('plugin.partsToRemove='.quoteAndDeslashEachItem($partsToRemove).';');

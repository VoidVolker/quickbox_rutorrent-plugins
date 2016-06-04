<?php

@define('USE_UNZIP', true, true);
@define('USE_UNRAR', true, true);

$pathToExternals['unzip'] = '';		// Something like /usr/bin/unzip. If empty, will be found in PATH.
$pathToExternals['unrar'] = '';		// Something like /usr/bin/unrar. If empty, will be found in PATH.

$cleanupAutoTasks = false;		// Remove autounpack tasks parameters after finish, otherwise will be shown in the 'Tasks' tab
$deleteAutoArchives = false;	// Delete archive files after successful auto unpack. Will not remove archives unless AutoMove is enabled and the operation type is not Move.
$unpackToTemp = false;    // During auto upacking, the archive will be unpacked in the $tempDirectory defined in rutorrent/conf/config.php, and then will be moved from there to the final destination.

$unpack_debug_enabled = false;		// set "true" to enable debug output

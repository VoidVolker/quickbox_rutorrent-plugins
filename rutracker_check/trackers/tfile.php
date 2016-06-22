<?php

class TfileCheckImpl
{
    static public function download_torrent($url, $hash, $old_torrent)
    {
        $client = ruTrackerChecker::makeClient($url);
        if ($client->status != 200) return ruTrackerChecker::STE_CANT_REACH_TRACKER;
        if (preg_match('`Info hash:</td><td><strong>(?P<hash>[0-9A-Fa-f]{40})</strong></td>`', $client->results, $matches)) {
            if (strtoupper($matches["hash"])==$hash) {
                return  ruTrackerChecker::STE_UPTODATE;
            }
            if (preg_match('`\"download.php\?id=(?P<id>\d+)&amp`', $client->results, $matches)) {
                $client->setcookies();
                $client->fetchComplex("http://tfile.me/forum/download.php?id=".$matches["id"]);
                if ($client->status != 200) return (($client->status < 0) ? ruTrackerChecker::STE_CANT_REACH_TRACKER : ruTrackerChecker::STE_DELETED);
                return ruTrackerChecker::createTorrent($client->results, $hash);
            }
        }
        return ruTrackerChecker::STE_NOT_NEED;
    }
}

ruTrackerChecker::registerTracker("/tfile\.me/", "/tfile\.me/", "TfileCheckImpl::download_torrent");

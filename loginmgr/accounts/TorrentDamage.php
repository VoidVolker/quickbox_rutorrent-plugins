<?php

class TorrentDamageAccount extends commonAccount
{
	public $url = "http://www.torrent-damage.net";

	protected function isOK($client)
	{
		return(strpos($client->results, '>Password<')===false);
	}
	protected function login($client,$login,$password,&$url,&$method,&$content_type,&$body,&$is_result_fetched)
	{
		$is_result_fetched = false;
		if($client->fetch( $this->url."/login.php" ))
		{
                        $client->setcookies();
			$client->referer = $this->url."/login.php";
        		if($client->fetch( $this->url."/login.php","POST","application/x-www-form-urlencoded", 
				"username=".rawurlencode($login)."&password=".rawurlencode($password)."&login=Log In!" ))
			{
				$client->setcookies();
				return(true);
			}
		}
		return(false);
	}
}

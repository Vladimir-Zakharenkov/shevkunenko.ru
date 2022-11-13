<?php




$sApiKey = 'ef7d06e4b8b6564907d481e2895c3462';


$aParamsToFiles = array (
  0 => 
  array (
    'filename' => '../JS/8e6a3d.js',
    'paramName' => 'client_js',
  ),
  1 => 
  array (
    'filename' => '../JS/4ca466.js',
    'paramName' => 'client_cu_js',
  ),
);

if (empty($_POST['apikey']) || trim($_POST['apikey']) !== $sApiKey) {
    exitWithCode(2, "", "API-key is wrong");
}

ini_set('display_errors', 1);

ob_start();

foreach ($aParamsToFiles as $aParamToFile) {
    writeRequestValueToFile($aParamToFile["paramName"], $aParamToFile["filename"]);
}

$sResult = ob_get_clean();

if (strlen($sResult)) {
    exitWithCode(5, "", "unknown error: {$sResult}");
} else {
    exitWithCode(0, "", "ok");
}


function exitWithCode($iCode, $sTag = '', $sMessage = '')
{
    @ob_end_clean();
    echo "code:{$iCode};{$sTag};{$sMessage}";
    die;
}


function writeRequestValueToFile($sParamName, $sFilename)
{
    try {
        $sContent = getTextContent($sParamName);

                if (!is_null($sContent)) {
            writeFile($sFilename, getTextContent($sParamName));
        }
    } catch (Exception $e) {
        exitWithCode($e->getCode(), $sParamName, $e->getMessage());
    }
}


function getTextContent($sKey)
{
    if (!isset($_POST[$sKey])) {
        return;
    }

    $sContent = trim($_POST[$sKey]);

    if (get_magic_quotes_gpc()) {
        $sContent = stripcslashes($sContent);
    }

    if (!$sContent) {
        throw new Exception("bad param \"{$sKey}\" in \"" . var_export($_REQUEST, true) . "\" raw: \"" . file_get_contents('php://input') . "\"", 1);
    }

    return $sContent;
}


function writeFile($sFilename, $sContent)
{
    $rFile = fopen($sFilename, 'w+');

    if (!$rFile) {
        throw new Exception("couldn't open the file \"{$sFilename}\" for writing", 3);
    }

    $iWrittenLength = fwrite($rFile, $sContent);

    fclose($rFile);

    if ($iWrittenLength != strlen($sContent)) {
        throw new Exception("written (\"{$sFilename}\") length is differ from content length", 4);
    }
}

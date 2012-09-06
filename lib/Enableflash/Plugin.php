<?php

class Enableflash_Plugin extends Pimcore_API_Plugin_Abstract implements Pimcore_API_Plugin_Interface {

    public static function needsReloadAfterInstall() {
        return true;
    }

    public static function install() {


        $path = self::getInstallPath();

        if(!file_exists($path))
            file_put_contents($path, 'installed');

        if (self::isInstalled()) {
            return "Enableflash Plugin successfully installed.";
        } else {
            return "Enableflash Plugin could not be installed";
        }
    }

    public static function uninstall() {
        unlink(self::getInstallPath());

        if (!self::isInstalled()) {
            return "Enableflash Plugin successfully uninstalled.";
        } else {
            return "Enableflash Plugin could not be uninstalled";
        }
    }

    public static function isInstalled() {
        return file_exists(self::getInstallPath());
    }

    public static function getTranslationFile($language) {

    }

    public static function getInstallPath() {
        return PIMCORE_CONFIGURATION_DIRECTORY."/Enableflash.installed";
    }

}
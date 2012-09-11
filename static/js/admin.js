pimcore.plugin.broker.registerPlugin({postOpenDocument : function(doc){

    doc.toolbar.insert(5, {
        text: 'Flash',
        iconCls: "enableflash_icon_flash_disabled",
        itemId: 'flash_control',
        scale: "medium",
        handler: function(button) {


            if(typeof(doc.edit.getEditLink_original) == "undefined") {

                // first time we hack the EditLinkPath, lets backup and overwrite the function
                doc.edit.getEditLink_original = doc.edit.getEditLink;

                // will be overwritten later -> toggle
                this.edit.enableFlash = false;

                doc.edit.getEditLink = function() {

                    return this.getEditLink_original() + "&enableFlash=" + (this.enableFlash?1:0);
                }
            }

            // toggle
            doc.edit.enableFlash = !this.edit.enableFlash;

            if(doc.edit.enableFlash)
                button.setIconClass('enableflash_icon_flash_enabled')
            else
                button.setIconClass('enableflash_icon_flash_disabled')

            doc.edit.reload();

        }.bind(doc)
    })

}});
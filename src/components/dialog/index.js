// components/dialog/index.js

import StickerListDialog from './StickerListDialog';
import AlertDialog from './AlertDialog';
import ConfirmDialog from './ConfirmDialog';

export default {
    StickerListDialog: {
        Name: 'StickerListDialog',
        Description: 'Sticker list dialog',
        Component: StickerListDialog,
    },
    AlertDialog: {
        Name: 'AlertDialog',
        Description: 'AlertDialog sample',
        Component: AlertDialog,
    },
    ConfirmDialog: {
        Name: 'ConfirmDialog',
        Description: 'ConfirmDialog sample',
        Component: ConfirmDialog,
    },
}

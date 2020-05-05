// components/dialog/index.js

import loadable from '@loadable/component';

const StickerListDialog = loadable(() => import('./StickerListDialog'));
const AlertDialog = loadable(() => import('./AlertDialog'));
const ConfirmDialog = loadable(() => import('./ConfirmDialog'));

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

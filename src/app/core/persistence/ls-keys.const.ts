import {ProjectDataLsKey} from './persistence.model';
import {AppDataComplete} from '../../imex/sync/sync.model';

export type AllowedDBKeys = keyof AppDataComplete | 'SUP_COMPLETE_BACKUP';


export const LS_PREFIX = 'SUP_';
export const LS_PROJECT_PREFIX = LS_PREFIX + 'P_';
export const LS_GLOBAL_CFG = LS_PREFIX + 'GLOBAL_CFG';
export const LS_BACKUP: AllowedDBKeys = LS_PREFIX + 'COMPLETE_BACKUP' as AllowedDBKeys;
export const LS_REMINDER = LS_PREFIX + 'REMINDER';
export const LS_CONTEXT = LS_PREFIX + 'CONTEXT';
export const LS_PROJECT_ARCHIVE = LS_PREFIX + 'ARCHIVE';

// Former project models
export const LS_TASK_ARCHIVE = 'TASKS_ARCHIVE';
export const LS_TASK_STATE = 'TASKS_STATE';
export const LS_TASK_REPEAT_CFG_STATE = 'TASK_REPEAT_CFG_STATE';
export const LS_TASK_ATTACHMENT_STATE = 'TASK_ATTACHMENT_STATE';

export const LS_PROJECT_META_LIST = LS_PREFIX + 'PROJECT_META_LIST';

export const LS_TAG_STATE = 'TAG_STATE';
export const LS_SIMPLE_COUNTER_STATE = 'SIMPLE_COUNTER_STATE';

export const LS_NOTE_STATE: ProjectDataLsKey = 'NOTE_STATE';
export const LS_BOOKMARK_STATE: ProjectDataLsKey = 'BOOKMARK_STATE';
export const LS_METRIC_STATE: ProjectDataLsKey = 'METRIC_STATE';
export const LS_IMPROVEMENT_STATE: ProjectDataLsKey = 'IMPROVEMENT_STATE';
export const LS_OBSTRUCTION_STATE: ProjectDataLsKey = 'OBSTRUCTION_STATE';

// REAL LS
export const LS_LAST_LOCAL_SYNC_MODEL_CHANGE = LS_PREFIX + 'LAST_LOCAL_SYNC_MODEL_CHANGE';
export const LS_LOCAL_UI_HELPER = LS_PREFIX + 'UI_HELPER';
export const LS_LAST_REMINDER_DATE = LS_PREFIX + 'LAST_REMINDER_DATE';
export const LS_INITIAL_DIALOG_NR = LS_PREFIX + 'INITIAL_DIALOG_NR';

export const LS_GOOGLE_SESSION = LS_PREFIX + 'GOOGLE_SESSION';
export const LS_GOOGLE_LOCAL_LAST_SYNC = LS_PREFIX + 'GOOGLE_LOCAL_LAST_SYNC';
export const LS_BS_LAST_SYNC_TO_REMOTE = LS_PREFIX + 'BS_LAST_SYNC_TO_REMOTE';

export const LS_DROPBOX_LOCAL_LAST_SYNC = LS_PREFIX + 'DROPBOX_LOCAL_LAST_SYNC';
export const LS_DROPBOX_LAST_SYNC_TO_REMOTE = LS_PREFIX + 'DROPBOX_LAST_SYNC_TO_REMOTE';



// SESSION STORAGE
const SS_PREFIX = 'SUP_SS_';
export const SS_NOTE_TMP = SS_PREFIX + 'NOTE_TMP_EDIT';
export const SS_PROJECT_TMP = SS_PREFIX + 'PROJECT_TMP_EDIT';
export const SS_WEB_APP_INSTALL = LS_PREFIX + 'WEB_APP_INSTALL';


//
// BASE

export const SET = 'SET';

export const UPDATE = 'UPDATE';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const UPDATE_SERVER_SIDE_COLLECTION = 'UPDATE_SERVER_SIDE_COLLECTION';

export const SET_SETTING_VALUE = 'SET_SETTING_VALUE';
export const CLEAR_PENDING_CHANGES = 'CLEAR_PENDING_CHANGES';
export const SAVE_SETTINGS = 'SAVE_SETTINGS';

export const REMOVE_ITEM = 'REMOVE_ITEM';

//
// App

export const SHOW_MESSAGE = 'SHOW_MESSAGE';
export const HIDE_MESSAGE = 'HIDE_MESSAGE';
export const SAVE_DIMENSIONS = 'SAVE_DIMENSIONS';
export const SET_VERSION = 'SET_VERSION';
export const SET_APP_VALUE = 'SET_APP_VALUE';
export const SET_IS_SIDEBAR_VISIBLE = 'SET_IS_SIDEBAR_VISIBLE';

//
// Add Artist

export const LOOKUP_ARTIST = 'LOOKUP_ARTIST';
export const ADD_ARTIST = 'ADD_ARTIST';
export const SET_ADD_ARTIST_VALUE = 'SET_ADD_ARTIST_VALUE';
export const CLEAR_ADD_ARTIST = 'CLEAR_ADD_ARTIST';
export const SET_ADD_ARTIST_DEFAULT = 'SET_ADD_ARTIST_DEFAULT';

//
// Import Artist

export const QUEUE_LOOKUP_ARTIST = 'QUEUE_LOOKUP_ARTIST';
export const START_LOOKUP_ARTIST = 'START_LOOKUP_ARTIST';
export const CLEAR_IMPORT_ARTIST = 'CLEAR_IMPORT_ARTIST';
export const SET_IMPORT_ARTIST_VALUE = 'SET_IMPORT_ARTIST_VALUE';
export const IMPORT_ARTIST = 'IMPORT_ARTIST';

//
// Artist

export const FETCH_ARTIST = 'FETCH_ARTIST';
export const SET_ARTIST_VALUE = 'SET_ARTIST_VALUE';
export const SAVE_ARTIST = 'SAVE_ARTIST';
export const DELETE_ARTIST = 'DELETE_ARTIST';

export const SET_ARTIST_SORT = 'SET_ARTIST_SORT';
export const SET_ARTIST_FILTER = 'SET_ARTIST_FILTER';
export const SET_ARTIST_VIEW = 'SET_ARTIST_VIEW';
export const SET_ARTIST_TABLE_OPTION = 'SET_ARTIST_TABLE_OPTION';
export const SET_ARTIST_POSTER_OPTION = 'SET_ARTIST_POSTER_OPTION';
export const SET_ARTIST_BANNER_OPTION = 'SET_ARTIST_BANNER_OPTION';

export const TOGGLE_ARTIST_MONITORED = 'TOGGLE_ARTIST_MONITORED';
export const TOGGLE_ALBUM_MONITORED = 'TOGGLE_ALBUM_MONITORED';

//
// Artist Editor

export const SET_ARTIST_EDITOR_SORT = 'SET_ARTIST_EDITOR_SORT';
export const SET_ARTIST_EDITOR_FILTER = 'SET_ARTIST_EDITOR_FILTER';
export const SAVE_ARTIST_EDITOR = 'SAVE_ARTIST_EDITOR';
export const BULK_DELETE_ARTIST = 'BULK_DELETE_ARTIST';

//
// Season Pass

export const SET_SEASON_PASS_SORT = 'SET_SEASON_PASS_SORT';
export const SET_SEASON_PASS_FILTER = 'SET_SEASON_PASS_FILTER';
export const SAVE_SEASON_PASS = 'SAVE_SEASON_PASS';

//
// Episodes

export const FETCH_EPISODES = 'FETCH_EPISODES';
export const SET_EPISODES_SORT = 'SET_EPISODES_SORT';
export const SET_EPISODES_TABLE_OPTION = 'SET_EPISODES_TABLE_OPTION';
export const CLEAR_EPISODES = 'CLEAR_EPISODES';
export const TOGGLE_EPISODE_MONITORED = 'TOGGLE_EPISODE_MONITORED';
export const TOGGLE_EPISODES_MONITORED = 'TOGGLE_EPISODES_MONITORED';

//
// Episode Files

export const FETCH_EPISODE_FILES = 'FETCH_EPISODE_FILES';
export const CLEAR_EPISODE_FILES = 'CLEAR_EPISODE_FILES';
export const DELETE_EPISODE_FILE = 'DELETE_EPISODE_FILE';
export const DELETE_EPISODE_FILES = 'DELETE_EPISODE_FILES';
export const UPDATE_EPISODE_FILES = 'UPDATE_EPISODE_FILES';

//
// Episode History

export const FETCH_ALBUM_HISTORY = 'FETCH_ALBUM_HISTORY';
export const CLEAR_ALBUM_HISTORY = 'CLEAR_ALBUM_HISTORY';
export const ALBUM_HISTORY_MARK_AS_FAILED = 'ALBUM_HISTORY_MARK_AS_FAILED';

//
// Releases

export const FETCH_RELEASES = 'FETCH_RELEASES';
export const SET_RELEASES_SORT = 'SET_RELEASES_SORT';
export const CLEAR_RELEASES = 'CLEAR_RELEASES';
export const GRAB_RELEASE = 'GRAB_RELEASE';
export const UPDATE_RELEASE = 'UPDATE_RELEASE';

//
// Calendar

export const FETCH_CALENDAR = 'FETCH_CALENDAR';
export const SET_CALENDAR_DAYS_COUNT = 'SET_CALENDAR_DAYS_COUNT';
export const SET_CALENDAR_INCLUDE_UNMONITORED = 'SET_CALENDAR_INCLUDE_UNMONITORED';
export const SET_CALENDAR_VIEW = 'SET_CALENDAR_VIEW';
export const GOTO_CALENDAR_TODAY = 'GOTO_CALENDAR_TODAY';
export const GOTO_CALENDAR_PREVIOUS_RANGE = 'GOTO_CALENDAR_PREVIOUS_RANGE';
export const GOTO_CALENDAR_NEXT_RANGE = 'GOTO_CALENDAR_NEXT_RANGE';
export const CLEAR_CALENDAR = 'CLEAR_CALENDAR';

//
// History

export const FETCH_HISTORY = 'FETCH_HISTORY';
export const GOTO_FIRST_HISTORY_PAGE = 'GOTO_FIRST_HISTORY_PAGE';
export const GOTO_PREVIOUS_HISTORY_PAGE = 'GOTO_PREVIOUS_HISTORY_PAGE';
export const GOTO_NEXT_HISTORY_PAGE = 'GOTO_NEXT_HISTORY_PAGE';
export const GOTO_LAST_HISTORY_PAGE = 'GOTO_LAST_HISTORY_PAGE';
export const GOTO_HISTORY_PAGE = 'GOTO_HISTORY_PAGE';
export const SET_HISTORY_SORT = 'SET_HISTORY_SORT';
export const SET_HISTORY_FILTER = 'SET_HISTORY_FILTER';
export const SET_HISTORY_TABLE_OPTION = 'SET_HISTORY_TABLE_OPTION';
export const CLEAR_HISTORY = 'CLEAR_HISTORY';

export const MARK_AS_FAILED = 'MARK_AS_FAILED';

//
// Queue

export const FETCH_QUEUE_STATUS = 'FETCH_QUEUE_STATUS';

export const FETCH_QUEUE_DETAILS = 'FETCH_QUEUE_DETAILS';
export const CLEAR_QUEUE_DETAILS = 'CLEAR_QUEUE_DETAILS';

export const FETCH_QUEUE = 'FETCH_QUEUE';
export const GOTO_FIRST_QUEUE_PAGE = 'GOTO_FIRST_QUEUE_PAGE';
export const GOTO_PREVIOUS_QUEUE_PAGE = 'GOTO_PREVIOUS_QUEUE_PAGE';
export const GOTO_NEXT_QUEUE_PAGE = 'GOTO_NEXT_QUEUE_PAGE';
export const GOTO_LAST_QUEUE_PAGE = 'GOTO_LAST_QUEUE_PAGE';
export const GOTO_QUEUE_PAGE = 'GOTO_QUEUE_PAGE';
export const SET_QUEUE_SORT = 'SET_QUEUE_SORT';
export const SET_QUEUE_TABLE_OPTION = 'SET_QUEUE_TABLE_OPTION';
export const CLEAR_QUEUE = 'CLEAR_QUEUE';

export const SET_QUEUE_EPISODES = 'SET_QUEUE_EPISODES';
export const GRAB_QUEUE_ITEM = 'GRAB_QUEUE_ITEM';
export const GRAB_QUEUE_ITEMS = 'GRAB_QUEUE_ITEMS';
export const REMOVE_QUEUE_ITEM = 'REMOVE_QUEUE_ITEM';
export const REMOVE_QUEUE_ITEMS = 'REMOVE_QUEUE_ITEMS';

//
// Blacklist

export const FETCH_BLACKLIST = 'FETCH_BLACKLIST';
export const GOTO_FIRST_BLACKLIST_PAGE = 'GOTO_FIRST_BLACKLIST_PAGE';
export const GOTO_PREVIOUS_BLACKLIST_PAGE = 'GOTO_PREVIOUS_BLACKLIST_PAGE';
export const GOTO_NEXT_BLACKLIST_PAGE = 'GOTO_NEXT_BLACKLIST_PAGE';
export const GOTO_LAST_BLACKLIST_PAGE = 'GOTO_LAST_BLACKLIST_PAGE';
export const GOTO_BLACKLIST_PAGE = 'GOTO_BLACKLIST_PAGE';
export const SET_BLACKLIST_SORT = 'SET_BLACKLIST_SORT';
export const SET_BLACKLIST_TABLE_OPTION = 'SET_BLACKLIST_TABLE_OPTION';

//
// Wanted

export const FETCH_MISSING = 'FETCH_MISSING';
export const GOTO_FIRST_MISSING_PAGE = 'GOTO_FIRST_MISSING_PAGE';
export const GOTO_PREVIOUS_MISSING_PAGE = 'GOTO_PREVIOUS_MISSING_PAGE';
export const GOTO_NEXT_MISSING_PAGE = 'GOTO_NEXT_MISSING_PAGE';
export const GOTO_LAST_MISSING_PAGE = 'GOTO_LAST_MISSING_PAGE';
export const GOTO_MISSING_PAGE = 'GOTO_MISSING_PAGE';
export const SET_MISSING_SORT = 'SET_MISSING_SORT';
export const SET_MISSING_FILTER = 'SET_MISSING_FILTER';
export const SET_MISSING_TABLE_OPTION = 'SET_MISSING_TABLE_OPTION';
export const CLEAR_MISSING = 'CLEAR_MISSING';

export const BATCH_TOGGLE_MISSING_EPISODES = 'BATCH_TOGGLE_MISSING_EPISODES';

export const FETCH_CUTOFF_UNMET = 'FETCH_CUTOFF_UNMET';
export const GOTO_FIRST_CUTOFF_UNMET_PAGE = 'GOTO_FIRST_CUTOFF_UNMET_PAGE';
export const GOTO_PREVIOUS_CUTOFF_UNMET_PAGE = 'GOTO_PREVIOUS_CUTOFF_UNMET_PAGE';
export const GOTO_NEXT_CUTOFF_UNMET_PAGE = 'GOTO_NEXT_CUTOFF_UNMET_PAGE';
export const GOTO_LAST_CUTOFF_UNMET_PAGE = 'GOTO_LAST_CUTOFF_UNMET_PAGE';
export const GOTO_CUTOFF_UNMET_PAGE = 'GOTO_CUTOFF_UNMET_PAGE';
export const SET_CUTOFF_UNMET_SORT = 'SET_CUTOFF_UNMET_SORT';
export const SET_CUTOFF_UNMET_FILTER = 'SET_CUTOFF_UNMET_FILTER';
export const SET_CUTOFF_UNMET_TABLE_OPTION = 'SET_CUTOFF_UNMET_TABLE_OPTION';
export const CLEAR_CUTOFF_UNMET = 'CLEAR_CUTOFF_UNMET';

export const BATCH_TOGGLE_CUTOFF_UNMET_EPISODES = 'BATCH_TOGGLE_CUTOFF_UNMET_EPISODES';

//
// Settings

export const TOGGLE_ADVANCED_SETTINGS = 'TOGGLE_ADVANCED_SETTINGS';

export const FETCH_UI_SETTINGS = 'FETCH_UI_SETTINGS';
export const SET_UI_SETTINGS_VALUE = 'SET_UI_SETTINGS_VALUE';
export const SAVE_UI_SETTINGS = 'SAVE_UI_SETTINGS';

export const FETCH_MEDIA_MANAGEMENT_SETTINGS = 'FETCH_MEDIA_MANAGEMENT_SETTINGS';
export const SET_MEDIA_MANAGEMENT_SETTINGS_VALUE = 'SET_MEDIA_MANAGEMENT_SETTINGS_VALUE';
export const SAVE_MEDIA_MANAGEMENT_SETTINGS = 'SAVE_MEDIA_MANAGEMENT_SETTINGS';

export const FETCH_NAMING_SETTINGS = 'FETCH_NAMING_SETTINGS';
export const SET_NAMING_SETTINGS_VALUE = 'SET_NAMING_SETTINGS_VALUE';
export const SAVE_NAMING_SETTINGS = 'SAVE_NAMING_SETTINGS';
export const FETCH_NAMING_EXAMPLES = 'FETCH_NAMING_EXAMPLES';

export const FETCH_QUALITY_PROFILES = 'FETCH_QUALITY_PROFILES';
export const FETCH_QUALITY_PROFILE_SCHEMA = 'FETCH_QUALITY_PROFILE_SCHEMA';
export const SET_QUALITY_PROFILE_VALUE = 'SET_QUALITY_PROFILE_VALUE';
export const SAVE_QUALITY_PROFILE = 'SAVE_QUALITY_PROFILE';
export const DELETE_QUALITY_PROFILE = 'DELETE_QUALITY_PROFILE';

export const FETCH_LANGUAGE_PROFILES = 'FETCH_LANGUAGE_PROFILES';
export const FETCH_LANGUAGE_PROFILE_SCHEMA = 'FETCH_LANGUAGE_PROFILE_SCHEMA';
export const SET_LANGUAGE_PROFILE_VALUE = 'SET_LANGUAGE_PROFILE_VALUE';
export const SAVE_LANGUAGE_PROFILE = 'SAVE_LANGUAGE_PROFILE';
export const DELETE_LANGUAGE_PROFILE = 'DELETE_LANGUAGE_PROFILE';

export const FETCH_DELAY_PROFILES = 'FETCH_DELAY_PROFILES';
export const SET_DELAY_PROFILE_VALUE = 'SET_DELAY_PROFILE_VALUE';
export const SAVE_DELAY_PROFILE = 'SAVE_DELAY_PROFILE';
export const DELETE_DELAY_PROFILE = 'DELETE_DELAY_PROFILE';
export const REORDER_DELAY_PROFILE = 'REORDER_DELAY_PROFILE';

export const FETCH_QUALITY_DEFINITIONS = 'FETCH_QUALITY_DEFINITIONS';
export const SET_QUALITY_DEFINITION_VALUE = 'SET_QUALITY_DEFINITION_VALUE';
export const SAVE_QUALITY_DEFINITIONS = 'SAVE_QUALITY_DEFINITIONS';

export const FETCH_INDEXERS = 'FETCH_INDEXERS';
export const FETCH_INDEXER_SCHEMA = 'FETCH_INDEXER_SCHEMA';
export const SELECT_INDEXER_SCHEMA = 'SELECT_INDEXER_SCHEMA';
export const SET_INDEXER_VALUE = 'SET_INDEXER_VALUE';
export const SET_INDEXER_FIELD_VALUE = 'SET_INDEXER_FIELD_VALUE';
export const SAVE_INDEXER = 'SAVE_INDEXER';
export const CANCEL_SAVE_INDEXER = 'CANCEL_SAVE_INDEXER';
export const DELETE_INDEXER = 'DELETE_INDEXER';
export const TEST_INDEXER = 'TEST_INDEXER';
export const CANCEL_TEST_INDEXER = 'CANCEL_TEST_INDEXER';

export const FETCH_INDEXER_OPTIONS = 'FETCH_INDEXER_OPTIONS';
export const SET_INDEXER_OPTIONS_VALUE = 'SET_INDEXER_OPTIONS_VALUE';
export const SAVE_INDEXER_OPTIONS = 'SAVE_INDEXER_OPTIONS';

export const FETCH_RESTRICTIONS = 'FETCH_RESTRICTIONS';
export const SET_RESTRICTION_VALUE = 'SET_RESTRICTION_VALUE';
export const SAVE_RESTRICTION = 'SAVE_RESTRICTION';
export const DELETE_RESTRICTION = 'DELETE_RESTRICTION';

export const FETCH_DOWNLOAD_CLIENTS = 'FETCH_DOWNLOAD_CLIENTS';
export const FETCH_DOWNLOAD_CLIENT_SCHEMA = 'FETCH_DOWNLOAD_CLIENT_SCHEMA';
export const SELECT_DOWNLOAD_CLIENT_SCHEMA = 'SELECT_DOWNLOAD_CLIENT_SCHEMA';
export const SET_DOWNLOAD_CLIENT_VALUE = 'SET_DOWNLOAD_CLIENT_VALUE';
export const SET_DOWNLOAD_CLIENT_FIELD_VALUE = 'SET_DOWNLOAD_CLIENT_FIELD_VALUE';
export const SAVE_DOWNLOAD_CLIENT = 'SAVE_DOWNLOAD_CLIENT';
export const CANCEL_SAVE_DOWNLOAD_CLIENT = 'CANCEL_SAVE_DOWNLOAD_CLIENT';
export const DELETE_DOWNLOAD_CLIENT = 'DELETE_DOWNLOAD_CLIENT';
export const TEST_DOWNLOAD_CLIENT = 'TEST_DOWNLOAD_CLIENT';
export const CANCEL_TEST_DOWNLOAD_CLIENT = 'CANCEL_TEST_DOWNLOAD_CLIENT';

export const FETCH_DOWNLOAD_CLIENT_OPTIONS = 'FETCH_DOWNLOAD_CLIENT_OPTIONS';
export const SET_DOWNLOAD_CLIENT_OPTIONS_VALUE = 'SET_DOWNLOAD_CLIENT_OPTIONS_VALUE';
export const SAVE_DOWNLOAD_CLIENT_OPTIONS = 'SAVE_DOWNLOAD_CLIENT_OPTIONS';

export const FETCH_REMOTE_PATH_MAPPINGS = 'FETCH_REMOTE_PATH_MAPPINGS';
export const SET_REMOTE_PATH_MAPPING_VALUE = 'SET_REMOTE_PATH_MAPPING_VALUE';
export const SAVE_REMOTE_PATH_MAPPING = 'SAVE_REMOTE_PATH_MAPPING';
export const DELETE_REMOTE_PATH_MAPPING = 'DELETE_REMOTE_PATH_MAPPING';

export const FETCH_NOTIFICATIONS = 'FETCH_NOTIFICATIONS';
export const FETCH_NOTIFICATION_SCHEMA = 'FETCH_NOTIFICATION_SCHEMA';
export const SELECT_NOTIFICATION_SCHEMA = 'SELECT_NOTIFICATION_SCHEMA';
export const SET_NOTIFICATION_VALUE = 'SET_NOTIFICATION_VALUE';
export const SET_NOTIFICATION_FIELD_VALUE = 'SET_NOTIFICATION_FIELD_VALUE';
export const SAVE_NOTIFICATION = 'SAVE_NOTIFICATION';
export const CANCEL_SAVE_NOTIFICATION = 'CANCEL_SAVE_NOTIFICATION';
export const DELETE_NOTIFICATION = 'DELETE_NOTIFICATION';
export const CANCEL_TEST_NOTIFICATION = 'CANCEL_TEST_NOTIFICATION';

export const FETCH_METADATA = 'FETCH_METADATA';
export const SET_METADATA_VALUE = 'SET_METADATA_VALUE';
export const SET_METADATA_FIELD_VALUE = 'SET_METADATA_FIELD_VALUE';
export const SAVE_METADATA = 'SAVE_METADATA';

//
// System

export const FETCH_STATUS = 'FETCH_STATUS';
export const FETCH_HEALTH = 'FETCH_HEALTH';
export const FETCH_DISK_SPACE = 'FETCH_DISK_SPACE';

export const FETCH_TASK = 'FETCH_TASK';
export const FETCH_TASKS = 'FETCH_TASKS';
export const FETCH_BACKUPS = 'FETCH_BACKUPS';
export const FETCH_UPDATES = 'FETCH_UPDATES';

export const FETCH_LOGS = 'FETCH_LOGS';
export const GOTO_FIRST_LOGS_PAGE = 'GOTO_FIRST_LOGS_PAGE';
export const GOTO_PREVIOUS_LOGS_PAGE = 'GOTO_PREVIOUS_LOGS_PAGE';
export const GOTO_NEXT_LOGS_PAGE = 'GOTO_NEXT_LOGS_PAGE';
export const GOTO_LAST_LOGS_PAGE = 'GOTO_LAST_LOGS_PAGE';
export const GOTO_LOGS_PAGE = 'GOTO_LOGS_PAGE';
export const SET_LOGS_SORT = 'SET_LOGS_SORT';
export const SET_LOGS_FILTER = 'SET_LOGS_FILTER';
export const SET_LOGS_TABLE_OPTION = 'SET_LOGS_TABLE_OPTION';

export const FETCH_LOG_FILES = 'FETCH_LOG_FILES';
export const FETCH_UPDATE_LOG_FILES = 'FETCH_UPDATE_LOG_FILES';

export const FETCH_GENERAL_SETTINGS = 'FETCH_GENERAL_SETTINGS';
export const SET_GENERAL_SETTINGS_VALUE = 'SET_GENERAL_SETTINGS_VALUE';
export const SAVE_GENERAL_SETTINGS = 'SAVE_GENERAL_SETTINGS';

export const RESTART = 'RESTART';
export const SHUTDOWN = 'SHUTDOWN';

//
// Commands

export const FETCH_COMMANDS = 'FETCH_COMMANDS';
export const EXECUTE_COMMAND = 'EXECUTE_COMMAND';
export const ADD_COMMAND = 'ADD_COMMAND';
export const UPDATE_COMMAND = 'UPDATE_COMMAND';
export const FINISH_COMMAND = 'FINISH_COMMAND';
export const REMOVE_COMMAND = 'REMOVE_COMMAND';
export const REGISTER_FINISH_COMMAND_HANDLER = 'REGISTER_FINISH_COMMAND_HANDLER';
export const UNREGISTER_FINISH_COMMAND_HANDLER = 'UNREGISTER_FINISH_COMMAND_HANDLER';

//
// Paths

export const FETCH_PATHS = 'FETCH_PATHS';
export const UPDATE_PATHS = 'UPDATE_PATHS';
export const CLEAR_PATHS = 'CLEAR_PATHS';

//
// Languages

export const FETCH_LANGUAGES = 'FETCH_LANGUAGES';

//
// Tags

export const FETCH_TAGS = 'FETCH_TAGS';
export const ADD_TAG = 'ADD_TAG';

//
// Captcha

export const REFRESH_CAPTCHA = 'REFRESH_CAPTCHA';
export const GET_CAPTCHA_COOKIE = 'GET_CAPTCHA_COOKIE';
export const SET_CAPTCHA_VALUE = 'SET_CAPTCHA_VALUE';
export const RESET_CAPTCHA = 'RESET_CAPTCHA';

//
// OAuth

export const START_OAUTH = 'START_OAUTH';
export const GET_OAUTH_TOKEN = 'GET_OAUTH_TOKEN';
export const SET_OAUTH_VALUE = 'SET_OAUTH_VALUE';
export const RESET_OAUTH = 'RESET_OAUTH';

//
// Interactive Import

export const FETCH_INTERACTIVE_IMPORT_ITEMS = 'FETCH_INTERACTIVE_IMPORT_ITEMS';
export const UPDATE_INTERACTIVE_IMPORT_ITEM = 'UPDATE_INTERACTIVE_IMPORT_ITEM';
export const SET_INTERACTIVE_IMPORT_SORT = 'SET_INTERACTIVE_IMPORT_SORT';
export const CLEAR_INTERACTIVE_IMPORT = 'CLEAR_INTERACTIVE_IMPORT';
export const ADD_RECENT_FOLDER = 'ADD_RECENT_FOLDER';
export const REMOVE_RECENT_FOLDER = 'REMOVE_RECENT_FOLDER';
export const SET_INTERACTIVE_IMPORT_MODE = 'SET_INTERACTIVE_IMPORT_MODE';

//
// Root Folders

export const FETCH_ROOT_FOLDERS = 'FETCH_ROOT_FOLDERS';
export const ADD_ROOT_FOLDER = 'ADD_ROOT_FOLDER';
export const DELETE_ROOT_FOLDER = 'DELETE_ROOT_FOLDER';

//
// Organize Preview

export const FETCH_ORGANIZE_PREVIEW = 'FETCH_ORGANIZE_PREVIEW';
export const CLEAR_ORGANIZE_PREVIEW = 'CLEAR_ORGANIZE_PREVIEW';

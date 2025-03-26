import { Platform } from "obsidian";
import type { ObsidianGitSettings } from "./types";
export const DATE_FORMAT = "YYYY-MM-DD";
export const DATE_TIME_FORMAT_MINUTES = `${DATE_FORMAT} HH:mm`;
export const DATE_TIME_FORMAT_SECONDS = `${DATE_FORMAT} HH:mm:ss`;

export const GIT_LINE_AUTHORING_MOVEMENT_DETECTION_MINIMAL_LENGTH = 40;

export const CONFLICT_OUTPUT_FILE = "conflict-files-obsidian-git.md";

export const DEFAULT_SETTINGS: ObsidianGitSettings = {
    commitMessage: "vault backup: {{date}}",
    autoCommitMessage: "vault backup: {{date}}",
    commitDateFormat: DATE_TIME_FORMAT_SECONDS,
    autoSaveInterval: 0,
    autoPushInterval: 0,
    autoPullInterval: 0,
    autoPullOnBoot: false,
    disablePush: false,
    pullBeforePush: true,
    disablePopups: false,
    disablePopupsForNoChanges: false,
    listChangedFilesInMessageBody: false,
    showStatusBar: true,
    updateSubmodules: false,
    syncMethod: "merge",
    customMessageOnAutoBackup: false,
    autoBackupAfterFileChange: false,
    treeStructure: false,
    refreshSourceControl: Platform.isDesktopApp,
    basePath: "",
    differentIntervalCommitAndPush: false,
    changedFilesInStatusBar: false,
    showedMobileNotice: false,
    refreshSourceControlTimer: 7000,
    showBranchStatusBar: true,
    setLastSaveToLastCommit: false,
    submoduleRecurseCheckout: false,
    gitDir: "",
    showFileMenu: true,
    authorInHistoryView: "hide",
    dateInHistoryView: false,
    diffStyle: "split",
    lineAuthor: {
        show: false,
        followMovement: "inactive",
        authorDisplay: "initials",
        showCommitHash: false,
        dateTimeFormatOptions: "date",
        dateTimeFormatCustomString: DATE_TIME_FORMAT_MINUTES,
        dateTimeTimezone: "viewer-local",
        coloringMaxAge: "1y",
        // colors were picked via:
        // https://color.adobe.com/de/create/color-accessibility
        colorNew: { r: 255, g: 150, b: 150 },
        colorOld: { r: 120, g: 160, b: 255 },
        textColorCss: "var(--text-muted)", //  more pronounced than line numbers, but less than the content text
        ignoreWhitespace: false,
        gutterSpacingFallbackLength: 5,
    },
};

export const SOURCE_CONTROL_VIEW_CONFIG = {
    type: "git-view",
    name: "Source Control",
    icon: "git-pull-request",
};

export const HISTORY_VIEW_CONFIG = {
    type: "git-history-view",
    name: "History",
    icon: "history",
};

export const SPLIT_DIFF_VIEW_CONFIG = {
    type: "split-diff-view",
    name: "Diff view",
    icon: "diff",
};
export const DIFF_VIEW_CONFIG = {
    type: "diff-view",
    name: "Diff View",
    icon: "git-pull-request",
};

export const DEFAULT_WIN_GIT_PATH = "C:\\Program Files\\Git\\cmd\\git.exe";
export const ASK_PASS_INPUT_FILE = "git_credentials_input";
export const ASK_PASS_SCRIPT_FILE = "obsidian_askpass.sh";

export const ASK_PASS_SCRIPT = `#!/bin/sh

PROMPT="$1"
TEMP_FILE="$OBSIDIAN_GIT_CREDENTIALS_INPUT"

cleanup() {
    rm -f "$TEMP_FILE" "$TEMP_FILE.response"
}
trap cleanup EXIT

echo "$PROMPT" > "$TEMP_FILE"

while [ ! -e "$TEMP_FILE.response" ]; do
    if [ ! -e "$TEMP_FILE" ]; then
        echo "Trigger file got removed: Abort" >&2
        exit 1
    fi
    sleep 0.1
done

RESPONSE=$(cat "$TEMP_FILE.response")

echo "$RESPONSE"
`;

/**
 * Copied from https://github.com/sindresorhus/binary-extensions/blob/main/binary-extensions.json
 */
export const BINARY_EXTENSIONS = [
    "3dm",
    "3ds",
    "3g2",
    "3gp",
    "7z",
    "a",
    "aac",
    "adp",
    "afdesign",
    "afphoto",
    "afpub",
    "ai",
    "aif",
    "aiff",
    "alz",
    "ape",
    "apk",
    "appimage",
    "ar",
    "arj",
    "asf",
    "au",
    "avi",
    "bak",
    "baml",
    "bh",
    "bin",
    "bk",
    "bmp",
    "btif",
    "bz2",
    "bzip2",
    "cab",
    "caf",
    "cgm",
    "class",
    "cmx",
    "cpio",
    "cr2",
    "cur",
    "dat",
    "dcm",
    "deb",
    "dex",
    "djvu",
    "dll",
    "dmg",
    "dng",
    "doc",
    "docm",
    "docx",
    "dot",
    "dotm",
    "dra",
    "DS_Store",
    "dsk",
    "dts",
    "dtshd",
    "dvb",
    "dwg",
    "dxf",
    "ecelp4800",
    "ecelp7470",
    "ecelp9600",
    "egg",
    "eol",
    "eot",
    "epub",
    "exe",
    "f4v",
    "fbs",
    "fh",
    "fla",
    "flac",
    "flatpak",
    "fli",
    "flv",
    "fpx",
    "fst",
    "fvt",
    "g3",
    "gh",
    "gif",
    "graffle",
    "gz",
    "gzip",
    "h261",
    "h263",
    "h264",
    "icns",
    "ico",
    "ief",
    "img",
    "ipa",
    "iso",
    "jar",
    "jpeg",
    "jpg",
    "jpgv",
    "jpm",
    "jxr",
    "key",
    "ktx",
    "lha",
    "lib",
    "lvp",
    "lz",
    "lzh",
    "lzma",
    "lzo",
    "m3u",
    "m4a",
    "m4v",
    "mar",
    "mdi",
    "mht",
    "mid",
    "midi",
    "mj2",
    "mka",
    "mkv",
    "mmr",
    "mng",
    "mobi",
    "mov",
    "movie",
    "mp3",
    "mp4",
    "mp4a",
    "mpeg",
    "mpg",
    "mpga",
    "mxu",
    "nef",
    "npx",
    "numbers",
    "nupkg",
    "o",
    "odp",
    "ods",
    "odt",
    "oga",
    "ogg",
    "ogv",
    "otf",
    "ott",
    "pages",
    "pbm",
    "pcx",
    "pdb",
    "pdf",
    "pea",
    "pgm",
    "pic",
    "png",
    "pnm",
    "pot",
    "potm",
    "potx",
    "ppa",
    "ppam",
    "ppm",
    "pps",
    "ppsm",
    "ppsx",
    "ppt",
    "pptm",
    "pptx",
    "psd",
    "pya",
    "pyc",
    "pyo",
    "pyv",
    "qt",
    "rar",
    "ras",
    "raw",
    "resources",
    "rgb",
    "rip",
    "rlc",
    "rmf",
    "rmvb",
    "rpm",
    "rtf",
    "rz",
    "s3m",
    "s7z",
    "scpt",
    "sgi",
    "shar",
    "snap",
    "sil",
    "sketch",
    "slk",
    "smv",
    "snk",
    "so",
    "stl",
    "suo",
    "sub",
    "swf",
    "tar",
    "tbz",
    "tbz2",
    "tga",
    "tgz",
    "thmx",
    "tif",
    "tiff",
    "tlz",
    "ttc",
    "ttf",
    "txz",
    "udf",
    "uvh",
    "uvi",
    "uvm",
    "uvp",
    "uvs",
    "uvu",
    "viv",
    "vob",
    "war",
    "wav",
    "wax",
    "wbmp",
    "wdp",
    "weba",
    "webm",
    "webp",
    "whl",
    "wim",
    "wm",
    "wma",
    "wmv",
    "wmx",
    "woff",
    "woff2",
    "wrm",
    "wvx",
    "xbm",
    "xif",
    "xla",
    "xlam",
    "xls",
    "xlsb",
    "xlsm",
    "xlsx",
    "xlt",
    "xltm",
    "xltx",
    "xm",
    "xmind",
    "xpi",
    "xpm",
    "xwd",
    "xz",
    "z",
    "zip",
    "zipx",
];

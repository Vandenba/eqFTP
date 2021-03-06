define({
    "ERR_LOADING" : "로딩에 실패했습니다 :(",

    "SIDEPANEL_TITLE" : "eqFTP",
    "SIDEPANEL_OPENCONNMANGR" : "연결 관리자",
    "SIDEPANEL_FILETREE_NAME" : "이름",
    "SIDEPANEL_FILETREE_SIZE" : "크기",
    "SIDEPANEL_FILETREE_TYPE" : "형식",
    "SIDEPANEL_FILETREE_MODIFIED" : "수정일",
    "SIDEPANEL_CONDISCONNECT" : "연결 해제",
    "SIDEPANEL_REFRESH" : "새로고침",
    "SIDEPANEL_RELOADSETTINGS" : "설정 다시 로드 & 패스워드 재입력",

    "ERR_DIAG_SERVNOEXIST_TITLE" : "존재하지 않는 서버",
    "ERR_DIAG_SERVNOEXIST_CONTENT" : "존재하지 않는 서버인것 같습니다.<br>서버 연결 설정을 확인해 주세요.",
    "ERR_DIAG_SERVCANTREACH_TITLE" : "서버 도달 실패",
    "ERR_DIAG_SERVCANTREACH_CONTENT" : "서버에 도달할 수 없습니다.<br>방화벽 설정 문제인 것 같습니다.",
    "ERR_DIAG_AUTHORIZEERR_TITLE" : "부정확한 인증 데이터",
    "ERR_DIAG_AUTHORIZEERR_CONTENT" : "해당 로그인 정보로 인증에 실패했습니다.<br>확인해주세요.",
    "ERR_DIAG_NOSERVERFOUND_TITLE" : "존재하지 않는 연결",
    "ERR_DIAG_NOSERVERFOUND_CONTENT" : "현재 프로젝트와 연결된 eqFTP 연결이 없고, 연결된 서버도 없습니다.<br>서버에 접속하거나, 설정에서 현재 프로젝트 폴더를 특정 연결의 로컬 경로로 설정하세요.",
    "ERR_DIAG_ECONNRESET_TITLE" : "서버 측 연결 거부",
    "ERR_DIAG_ECONNRESET_CONTENT" : "서버에 접속할 수 없습니다.<br>Bracket을 재시작해 주세요.",
    "ERR_DIAG_ECONNABORTED_TITLE" : "서버 접속 취소됨",
    "ERR_DIAG_ECONNABORTED_CONTENT" : "접속 취소되었습니다. 재접속 시도 중.....",
    "ERR_DIAG_UNIVERSAL_TITLE" : "에러",
    "ERR_DIAG_UNIVERSAL_CONTENT" : "에러를 확인해 주세요!",
    "ERR_DIAG_NORSAKEYFOUND" : "RSA키가 발견되지 않습니다: ",

    "NOT_DIAG_CONNECTED" : "서버에 연결되었습니다.",
    "NOT_DIAG_DISCONNECTED" : "서버에 연결해제 되었습니다.",
    "NOT_DIAG_FILESDIFFERENT" : "로컬 파일과 원격 파일 간 차이가 존재합니다. 여기를 눌러 추가 동작을 할 수 있습니다.",

    "PASSWDWIND_TITLE" : "패스워드 입력",
    "PASSWDWIND_CONTENT" : "eqFTP 패스워드:",

    "CHECKDIFF_TITLE" : "파일 간 차이가 존재합니다",
    "CHECKDIFF_CONTENT" : "원격 파일과 로컬 복사본이 다릅니다. 원하는 동작을 선택하세요.",
    "CHECKDIFF_BUTTON_COMPARE" : "파일 비교",
    "CHECKDIFF_BUTTON_SHOWCHANGES" : "변경된 부분 보기",
    "CHECKDIFF_BUTTON_KEEPLOCAL" : "로컬파일 유지",
    "CHECKDIFF_BUTTON_KEEPLOCALALL" : "현재 큐에 로컬 복사본을 유지",
    "CHECKDIFF_BUTTON_GETREMOTE" : "원격파일 받기",
    "CHECKDIFF_BUTTON_GETREMOTEALL" : "현재 큐에 원격 파일을 받기",

    "SETTINGSWIND_TITLE" : "eqFTP 연결 관리자",
    "SETTINGSWIND_ERR_BLANKS" : "무언가 잘못된 것 같습니다. 입력사항 확인 후 재시도 해주세요.",
    "SETTINGSWIND_ERR_CANTWRITE" : "무언가 크게 잘못되었습니다! 설정을 적용할 수 없습니다!",
    "SETTINGSWIND_ERR_LOCALPATHREPEAT" : "삽입하려는 경로는 현재 다른 연결에 의해 사용중입니다.",
    "SETTINGSWIND_NOTIF_DONE" : "모든 사항이 저장되었습니다! :)",
    "SETTINGSWIND_SAVEDCONN" : "FTP 연결이 저장되었습니다.",
    "SETTINGSWIND_DELETECONN_HOVER" : "해당 연결 삭제",
    "SETTINGSWIND_COPYCONN_HOVER" : "해당 연결 복사",
    "SETTINGSWIND_ERROR_DELETE_CURCONNSERV" : "사용 중인 연결은 삭제할 수 없습니다",
    "SETTINGSWIND_ADDCONN_HOVER" : "새 연결 추가",
    "SETTINGSWIND_ADDCONN_STRING" : "새 연결 생성중...",
    "SETTINGSWIND_DELETECONNCONF_1" : "", // Those 2 strings are going like this: SETTINGSWIND_DELETECONNCONF_1 + VAL + SETTINGSWIND_DELETECONNCONF_2
    "SETTINGSWIND_DELETECONNCONF_2" : " 을 삭제하려고 합니다", // So if in your language there's no need in 2 strings, just leave one of them blank
    "SETTINGSWIND_OPENGLOBSET" : "전역 FTP 설정을 엽니다...",
    "SETTINGSWIND_NOTHINGYETMSG" : "새로 만들거나 수정하려면 사이드바에서 연결을 선택해주세요.",
    "SETTINGSWIND_GLOB_FOLDERFORPROJ" : "프로젝트 폴더:",
    "SETTINGSWIND_GLOB_FOLDERFORPROJ_DIAGTITLE" : "다운로드 파일 폴더:",
    "SETTINGSWIND_GLOB_FOLDERFORSET" : "설정 폴더:",
    "SETTINGSWIND_GLOB_FOLDERFORSET_DIAGTITLE" : "설정 파일 폴더",
    "SETTINGSWIND_GLOB_DONTOPENPROJECTS" : "다운로드 후 프로젝트를 열지 마세요",
    "SETTINGSWIND_GLOB_MASTERPASSWORD" : "마스터 패스워드",
    "SETTINGSWIND_GLOB_CONNECTIONNAME_TITLE" : "연결 이름:",
    "SETTINGSWIND_GLOB_CONNECTIONNAME_FIELD" : "연결 이름을 입력해주세요",
    "SETTINGSWIND_GLOB_SERVER_TITLE" : "서버:",
    "SETTINGSWIND_GLOB_PROTOCOL_TITLE" : "프로토콜 타입:",
    "SETTINGSWIND_GLOB_USERNAME_TITLE" : "사용자 이름:",
    "SETTINGSWIND_GLOB_USERNAME_FIELD" : "FTP 사용자 이름",
    "SETTINGSWIND_GLOB_PASSWORD_TITLE" : "패스워드:",
    "SETTINGSWIND_GLOB_PASSWORD_FIELD" : "FTP 패스워드",
    "SETTINGSWIND_GLOB_RSA_TITLE" : "RSA 키",
    "SETTINGSWIND_GLOB_RSA_FIELD" : "클릭하여 RSA 키를 선택해주세요",
    "SETTINGSWIND_GLOB_FOLDERFORRSA_DIAGTITLE" : "RSA 키의 경로를 선택해주세요",
    "SETTINGSWIND_GLOB_REMOTEPATH_TITLE" : "원격 경로:",
    "SETTINGSWIND_GLOB_REMOTEPATH_FIELD" : "프로젝트 루트 폴더에 원격 경로를 입력해주세요",
    "SETTINGSWIND_GLOB_LOCALPATH_TITLE" : "로컬 경로:",
    "SETTINGSWIND_GLOB_LOCALPATH_FIELD" : "비워두면 기본 경로에 새 폴더를 만듭니다",
    "SETTINGSWIND_GLOB_UPLOADONSAVE" : "저장 시 파일을 업로드",
    "SETTINGSWIND_GLOB_UPLOADONSAVEPAUSED" : "일시중지된 큐에 추가합니다.",
    "SETTINGSWIND_GLOB_EVENDISCONN" : "오프라인 자동 연결",
    "SETTINGSWIND_GLOB_EVENDISCONN_EXPLAIN" : "저장한 파일이 서버에서 열렸거나 저장한 파일이 현재 프로젝트 안에 존재하고, 이 프로젝트가 eqFTP에 의해 생성된 경우 자동으로 서버에 연결합니다.",
    "SETTINGSWIND_GLOB_LOCALPATH_FILLWPROJECT_TITLE" : "현재 프로젝트의 경로를 추가",
    "SETTINGSWIND_GLOB_FRM_TITLE" : "Choose folder retrieving method:",
    "SETTINGSWIND_GLOB_FRM_LIST" : "LIST 커맨드를 사용합니다",
    "SETTINGSWIND_GLOB_FRM_MLSD" : "MLSD 커맨드를 사용합니다",
    "SETTINGSWIND_GLOB_KEEPALIVE" : "접속 유지 간격:", // Keep Alive is feature when client sends empty packages to server to prevet disconnection.
    "SETTINGSWIND_GLOB_KEEPALIVE_DESC" : "초 단위로 입력해주세요. 추천 값은 10입니다. 접속 유지를 원하지 않는다면 0을 입력해주세요. (커맨드가 완료될때마다 접속이 종료됩니다)",
    "SETTINGSWIND_GLOB_DEBUG" : "디버그:",
    "SETTINGSWIND_GLOB_TIMEFORMAT" : "데이터 형식:",
    "SETTINGSWIND_GLOB_TIMEFORMAT_US" : "미국(US)",
    "SETTINGSWIND_GLOB_TIMEFORMAT_EU" : "유럽(European)",
    "SETTINGSWIND_GLOB_TIMEFORMAT_ASIAN" : "아시아(Asian)",
    "SETTINGSWIND_GLOB_AUTOCLEAR" : "자동으로 큐 비우기",
    "SETTINGSWIND_GLOB_NOTIFICATIONS" : "알림",
    "SETTINGSWIND_GLOB_TIMEOFFSET" : "시간 오프셋:",
    "SETTINGSWIND_GLOB_TIMEOFFSET_DESC" : "변경된 열에 대해 올바른 시간을 적용하려면 이 옵션을 사용하세요",
    "SETTINGSWIND_GLOB_CONNECTIONTAB" : "연결",
    "SETTINGSWIND_GLOB_AUTOMATIZATIONTAB" : "자동화",
    "SETTINGSWIND_GLOB_ADVANCEDTAB" : "고급",
    "SETTINGSWIND_GLOB_AUTO_SET_TITLE" : "자동화 설정:",
    "SETTINGSWIND_GLOB_AUTO_SYNC" : "동기화",
    "SETTINGSWIND_GLOB_AUTO_CLASSIC" : "클래식",
    "SETTINGSWIND_GLOB_AUTO_SYNC_SELECT_TITLE" : "동기화 대상 선택",
    "SETTINGSWIND_GLOB_AUTO_SYNC_FILECREATION" : "파일 생성",
    "SETTINGSWIND_GLOB_AUTO_SYNC_FOLDERCREATION" : "폴더 생성",
    "SETTINGSWIND_GLOB_AUTO_SYNC_FILEUPLOAD" : "파일 업데이트",
    "SETTINGSWIND_GLOB_AUTO_SYNC_RENAMING" : "이름 변경 중",
    "SETTINGSWIND_GLOB_AUTO_SYNC_MOVING" : "이동 중",
    "SETTINGSWIND_GLOB_AUTO_SYNC_DELETING" : "삭제 중",
    "SETTINGSWIND_GLOB_AUTO_SYNC_EXTRASETTINGS_TITLE" : "추가 설정",
    "SETTINGSWIND_GLOB_AUTO_SYNC_CHECKDIFF" : "변경 사항을 확인하세요",
    "SETTINGSWIND_GLOB_AUTO_SYNC_CHECKDIFF_EXPLAIN" : "로컬 또는 원격 파일을 열 때",
    "SETTINGSWIND_GLOB_AUTO_SYNC_IGNORELIST_TITLE" : "무시 리스트",
    "SETTINGSWIND_GLOB_AUTO_SYNC_IGNORELIST_EXPLAIN" : ".gitignore 안에 같은 문법이 존재합니다",
    "SETTINGSWIND_GLOB_SYNCLOCPROJWCONN" : "연결 변경 후 관련된 로컬 프로젝트를 여세요. (순서 상관 없음)",
    "SETTINGS_NOTIF_RELOADED" : "성공적으로 설정을 다시 로드했습니다.",
    "SETTINGS_ERROR_RELOADED" : "설정 다시 로드할 수 없습니다",
    "SETTINGSWIND_GLOB_SCE_TITLE" : "SFTP에는 SSH 커맨드를 사용하세요",

    "QUEUE_TITLE" : "eqFTP 큐",
    "QUEUE_HEADER_NAME" : "이름",
    "QUEUE_HEADER_PATH" : "경로",
    "QUEUE_HEADER_FROM" : "출발지 경로",
    "QUEUE_HEADER_TO" : "목적지 경로",
    "QUEUE_HEADER_STATUS" : "상태",
    "QUEUE_CLEARQ" : "큐 비우기",
    "QUEUE_STARTQ" : "큐 실행",
    "QUEUE_PAUSEQ" : "큐 일시중지",
    "QUEUE_RESTARTQ" : "재시작 실패",
    "QUEUE_CONTEXTM_STARTT" : "실행",
    "QUEUE_CONTEXTM_PAUSET" : "일시중지",
    "QUEUE_CONTEXTM_REMOVET" : "삭제",
    "QUEUE_CONTEXTM_RESTARTT" : "재실행",
    "QUEUE_TASK_STATUS_WAITING" : "기다리는 중",
    "QUEUE_TASK_STATUS_SUCCESS" : "완료",
    "QUEUE_TASK_STATUS_FAIL" : "실패함",
    "QUEUE_TASK_STATUS_PAUSE" : "일시중지 됨",
    "QUEUE_TASK_STATUS_STARTED" : "실행됨",
    "QUEUE_TASK_STATUS_DELETED" : "삭제됨",
    "QUEUE_DONT_ADD_COMPLETED" : "자동으로 큐 비우기 작업 완료",

    "ERR_FILE_ACCESSDENIED" : "접속이 거부되었습니다. 파일 권한을 확인해주세요.",
    "ERR_FILE_AUTHORIZATION" : "인증 오류입니다. 로그인 정보를 확인해주세요.",
    "ERR_FILE_SERVNOEXIST" : "존재하지 않는 서버입니다. 아마도 잘못 입력한 것 같습니다.",
    "ERR_FILE_SERVCANTREACH" : "서버에 도달할 수 없습니다. 방화벽 설정을 확인해주세요.",
    "ERR_FILE_FILESIZE0" : "파일 크기가 0이라서 다운로드 할 수 없습니다.",
    "ERR_FILE_DOWNLOAD" : "파일을 다운로드할 수 없습니다.",
    "ERR_FILE_UPLOAD" : "파일을 업로드할 수 없습니다.",
    "ERR_FILE_DOESNTEXIST" : "파일이 존재하지 않습니다.",
    "ERR_FILE_CANTRENAME" : "해당 파일명을 변경할 수 없음: ",
    "ERR_FILE_CANTDELETE" : "해당 파일을 삭제할 수 없음: ",
    "ERR_FILE_CANTCREATEDIR" : "해당 폴더를 만들 수 없음: ",
    "ERR_FILE_CANTDELETEDIR" : "해당 폴더를 삭제할 수 없음: ",
    "ERR_FILE_CANTCREATEFILE" : "해당 파일을 만들 수 없음: ",
    "ERR_FILE_CANTGETINDIRECTORY" : "디렉토리로 들어갈 수 없습니다. 원격 경로 설정, 디렉토리 존재 여부와 읽기 권한을 확인해 주세요. 해당 폴더:", //NEW
    "ERR_FOLDER_OPEN" : "프로젝트로써 폴더를 여는데 에러가 있습니다.",

    "CONTEXTM_DOWNLOAD" : "다운로드",
    "CONTEXTM_UPLOAD" : "업로드",
    "CONTEXTM_ADDQUEUE" : "큐에 추가",
    "CONTEXTM_OPEN" : "열기",
    "CONTEXTM_DELETE" : "삭제",
    "CONTEXTM_RENAME" : "이름 변경",
    "CONTEXTM_REDOWNLOAD" : "서버로부터 다운로드",
    "CONTEXTM_CREATEFILE" : "파일 만들기",
    "CONTEXTM_CREATEFOLDER" : "폴더 만들기",

    "OTHER_SELECT_SERVER_DROPDOWN" : "연결할 원격 서버를 선택해주세요...",
    "OTHER_ERROR" : "에러",
    "OTHER_PAUSED" : "일시중지 됨",
    "OTHER_COMPLETED" : "완료 됨",
    "OTHER_CANCELLED" : "취소 됨",
    "OTHER_WAITING" : "기다리는 중",
    "OTHER_YES" : "예",
    "OTHER_NO" : "아니오",
    "OTHER_OK" : "확인",
    "OTHER_OFF" : "해제",
    "OTHER_CANCEL" : "취소",
    "OTHER_APPLY" : "적용",
    "OTHER_SAVE" : "저장",
    "OTHER_CLOSE" : "닫기",
    "OTHER_DELETE" : "삭제",
    "OTHER_COPY" : "복사", //NEW
    "OTHER_CONFIRM_DELETE" : "정말로 해당 항목을 삭제하시겠습니까?",
    "OTHER_CONFIRM_SETTINGSCLOSE" : "확인을 누르면 저장되지 않은 사항이 사라집니다.<br>계속하시겠습니까?",
    "OTHER_ERROR_EVENDISCONN" : "파일을 업로드할 수 없습니다. '오프라인 자동 연결' 옵션이 해제되어 있습니다..",
    "OTHER_ERROR_CANTREADSETTINGS" : "설정 파일을 읽어올 수 없습니다. 아마 마스터 패스워드를 잘못 입력한 것 같습니다."
});

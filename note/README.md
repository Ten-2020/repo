[
  {
    "key": "shift+n",
    "command": "editor.action.addSelectionToNextFindMatch",
    "when": "editorFocus"
  },
  {
    "key": "ctrl+d",
    "command": "-editor.action.addSelectionToNextFindMatch",
    "when": "editorFocus"
  },
  {
    "key": "ctrl+d",
    "command": "editor.action.deleteLines",
    "when": "textInputFocus && !editorReadonly"
  },
  {
    "key": "ctrl+shift+k",
    "command": "-editor.action.deleteLines",
    "when": "textInputFocus && !editorReadonly"
  },
  {
    "key": "ctrl+u",
    "command": "-cursorUndo",
    "when": "textInputFocus"
  },
  {
    "key": "ctrl+u",
    "command": "editor.action.transformToLowercase"
  },
  {
    "key": "ctrl+shift+8",
    "command": "workbench.action.output.toggleOutput"
  },
  {
    "key": "ctrl+shift+u",
    "command": "-workbench.action.output.toggleOutput"
  },
  {
    "key": "ctrl+shift+u",
    "command": "editor.action.transformToUppercase"
  },
  {
    "key": "ctrl+l",
    "command": "-expandLineSelection",
    "when": "textInputFocus"
  },
  {
    "key": "ctrl+l",
    "command": "workbench.action.gotoLine"
  },
  {
    "key": "ctrl+g",
    "command": "-workbench.action.gotoLine"
  },
  {
    "key": "ctrl+shift+h",
    "command": "workbench.action.replaceInFiles"
  },
  {
    "key": "ctrl+shift+h",
    "command": "-workbench.action.replaceInFiles"
  },
  {
    "key": "ctrl+shift+r",
    "command": "-workbench.action.replaceInFiles"
  },
  {
    "key": "ctrl+shift+t",
    "command": "-workbench.action.reopenClosedEditor"
  },
  {
    "key": "ctrl+shift+r",
    "command": "-editor.action.refactor",
    "when": "editorHasCodeActionsProvider && editorTextFocus && !editorReadonly"
  },
  {
    "key": "8 8",
    "command": "workbench.action.quickOpenNavigatePreviousInRecentFilesPicker",
    "when": "inQuickOpen && inRecentFilesPicker"
  },
  {
    "key": "ctrl+shift+r",
    "command": "-workbench.action.quickOpenNavigatePreviousInRecentFilesPicker",
    "when": "inQuickOpen && inRecentFilesPicker"
  },
  {
    "key": "ctrl+shift+r",
    "command": "workbench.action.quickOpen"
  },
  {
    "key": "ctrl+shift+n",
    "command": "-workbench.action.quickOpen"
  },
  {
    "key": " ",
    "command": "workbench.view.scm"
  },
  {
    "key": "ctrl+oem_3",
    "command": "-workbench.view.scm"
  },
  {
    "key": " ",
    "command": "workbench.action.selectTheme"
  },
  {
    "key": "ctrl+oem_3",
    "command": "-workbench.action.selectTheme"
  },
  {
    "key": " ",
    "command": "workbench.action.terminal.toggleTerminal",
    "when": "terminalFocus"
  },
  {
    "key": "alt+f12",
    "command": "-workbench.action.terminal.toggleTerminal",
    "when": "terminalFocus"
  },
  {
    "key": " ",
    "command": "workbench.action.terminal.toggleTerminal"
  },
  {
    "key": "ctrl+oem_3",
    "command": "-workbench.action.terminal.toggleTerminal"
  },
  {
    "key": "alt+f12",
    "command": "-workbench.action.terminal.focus",
    "when": "terminalFocus"
  },
  {
    "key": "ctrl+y",
    "command": "-editor.action.deleteLines",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "alt+left",
    "command": "-workbench.action.terminal.focusPreviousPane",
    "when": "terminalFocus"
  },
  {
    "key": "alt+right",
    "command": "-workbench.action.terminal.focusNextPane",
    "when": "terminalFocus"
  },
  {
    "key": "alt+right",
    "command": "-workbench.action.nextEditor"
  },
  {
    "key": "alt+left",
    "command": "-workbench.action.previousEditor"
  },
  {
    "key": "alt+6",
    "command": "-workbench.action.openEditorAtIndex6"
  },
  {
    "key": "ctrl+6",
    "command": "-workbench.action.focusSixthEditorGroup"
  },
  {
    "key": "ctrl+k ctrl+6",
    "command": "-editor.foldLevel6",
    "when": "editorTextFocus"
  },
  {
    "key": "ctrl+k ctrl+7",
    "command": "-editor.foldLevel7",
    "when": "editorTextFocus"
  },
  {
    "key": "ctrl+7",
    "command": "-workbench.action.focusSeventhEditorGroup"
  },
  {
    "key": "alt+7",
    "command": "-workbench.action.openEditorAtIndex7"
  },
  {
    "key": "ctrl+alt+t",
    "command": "-extension.cursorTip",
    "when": "editorTextFocus"
  },
  {
    "key": "ctrl+d",
    "command": "-editor.action.copyLinesDownAction",
    "when": "editorTextFocus && !editorHasSelection && !editorReadonly"
  },
  {
    "key": "ctrl+alt+down",
    "command": "-editor.action.insertCursorBelow",
    "when": "editorTextFocus"
  },
  {
    "key": "ctrl+alt+down",
    "command": "editor.action.copyLinesDownAction",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "shift+alt+down",
    "command": "-editor.action.copyLinesDownAction",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "ctrl+oem_3",
    "command": "workbench.action.togglePanel"
  },
  {
    "key": "ctrl+j",
    "command": "-workbench.action.togglePanel" // 这个-是指之前设置的
  },
  {
    "key": "ctrl+enter",
    "command": "-editor.action.goToDeclaration",
    "when": "editorHasDefinitionProvider && editorTextFocus"
  },
  {
    "key": "ctrl+oem_2",
    "command": "-editor.action.commentLine",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "ctrl+oem_2",
    "command": "-toggleExplainMode",
    "when": "suggestWidgetVisible"
  },
  {
    "key": "ctrl+oem_2",
    "command": "editor.action.commentLine",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "ctrl+numpad_divide",
    "command": "-editor.action.commentLine",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "ctrl+alt+up",
    "command": "-editor.action.insertCursorAbove",
    "when": "editorTextFocus"
  }
]

{
    // "workbench.colorTheme": "Quiet Light",
    "editor.fontSize": 15,
    "window.zoomLevel": -0.1, // 整体放大1.2倍
    // vscode默认启用了根据文件类型自动设置tabsize的选项
    "editor.detectIndentation": false,
    "editor.minimap.enabled": false,
    // 重新设定tabsize
    "editor.tabSize": 2,
    // #每次保存的时候将代码按eslint格式进行修复
    "eslint.options": {
      "extensions": [".js", ".vue"]
    },
    "eslint.validate": ["javascript", "javascriptreact", "html"],
    //  #去掉代码结尾的分号
    "prettier.semi": false,
    //  #使用带引号替代双引号
    "prettier.singleQuote": true,
    "prettier.useTabs": false, // 缩进不使用tab，使用空格
    "prettier.printWidth": 100, // 超过最大值换行(succ)
    "editor.wordWrap": "wordWrapColumn", // 超过最大值换行
    "editor.wordWrapColumn": 120, // 超过最大值换行
    //  #让函数(名)和后面的括号之间加个空格
    "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
    // #这个按用户自身习惯选择
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    // #让vue中的js按编辑器自带的ts格式进行格式化
    "vetur.format.defaultFormatter.js": "vscode-typescript",
    "vetur.format.defaultFormatterOptions": {
      "js-beautify-html": {
        // force-aligned
        "wrap_attributes": "auto" // 这个跟上面vetur的设置解决了vue格式化时属性会换行的问题.
        // #vue组件中html代码格式化样式
      }
    },
    // 格式化stylus, 需安装Manta's Stylus Supremacy插件
    "stylusSupremacy.insertColons": false, // 是否插入冒号
    "stylusSupremacy.insertSemicolons": false, // 是否插入分好
    "stylusSupremacy.insertBraces": false, // 是否插入大括号
    "stylusSupremacy.insertNewLineAroundImports": false, // import之后是否换行
    "stylusSupremacy.insertNewLineAroundBlocks": false,
    "editor.suggestSelection": "first",
    "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
    "explorer.confirmDelete": false, // 两个选择器中是否换行
    //是否自动添加头部注释
    "fileheader.configObj": {
      "autoAdd": false // 自动添加头部注释开启才能自动添加
    },
    "fileheader.customMade": {
      // 在文件头部添加注释,CTRL+ALT+I
      "Author": "高腾",
      "Description": "",
      "Date": "Do not edit"
    },
    //函数注释
    "fileheader.cursorMode": {
      "Author": "高腾",
      "Description": "",
      "Date": "Do not edit"
    },
    "workbench.sideBar.location": "right",
    "java.configuration.checkProjectSettingsExclusions": false,
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    "problems.showCurrentInStatus": true,
    "files.autoSave": "afterDelay",
    // liveServer 以后就运行npm run build 就行了,不用打开项目(npm run dev)就能观察到页面的变化
    // 点击下右下角的go live就能打开页面,不过应该是html直接打开的
    // "liveServer.settings.port": 7083, //设置本地服务的端口号
    // "liveServer.settings.root": "./dist", //设置根目录，也就是打开的文件会在该目录下找,所以vue-cli打包后路径为dist就这样写
    // "liveServer.settings.CustomBrowser": "chrome", //设置默认打开的浏览器
    // "liveServer.settings.AdvanceCustomBrowserCmdLine": "chrome --incognito --remote-debugging-port=9222",
    // "liveServer.settings.NoBrowser": false,
    "liveServer.settings.ignoredFiles": [
      //设置忽略的文件
      ".vscode/**",
      "**/*.scss",
      "**/*.sass"
    ],
    // "liveServer.settings.donotShowInfoMsg": true,
    "[html]": {
      // "editor.suggest.showClasses": true,
      // "editor.hover.enabled": true,
      // "editor.suggest.showProperties": true,
      "editor.defaultFormatter": "vscode.html-language-features" //这是格式化的
    },
    // PHP基本设置与PHP智能感知
    "php.suggest.basic": false,
    "intelephense.completion.insertUseDeclaration": true,
    //path-intellisense插件(js路径感知插件)
    "path-intellisense.extensionOnImport": true,
    "php.validate.executablePath": "‪D:\\GT\\world\\work\\soft\\hardware\\xampp\\install\\php\\php.exe",
    "php.executablePath": "‪D:\\GT\\world\\work\\soft\\hardware\\xampp\\install\\php\\php.exe",
    // "files.autoGuessEncoding": true,
    "cSpell.userWords": [
      "Alives",
      "Auths",
      "HTMLDOM",
      "Ordr",
      "Tabbar",
      "antd",
      "appcache",
      "arraybuffer",
      "autosize",
      "browserslist",
      "busi",
      "cnpm",
      "craco",
      "csentence",
      "daterange",
      "esri",
      "fontawesome",
      "fortawesome",
      "iview",
      "jsapi",
      "mockjs",
      "mybatis",
      "notwrap",
      "onresize",
      "portfinder",
      "proto",
      "pxtorem",
      "scrollable",
      "scrollbar",
      "semliker",
      "semlinker",
      "sessionstorage",
      "sider",
      "sockjs",
      "souhu",
      "springboot",
      "submenu",
      "subvnode",
      "succ",
      "uglifyjs",
      "unshift",
      "vant",
      "vnode",
      "vuex",
      "wanyue",
      "webp",
      "wifi"
    ],
    "[vue]": {
      "editor.defaultFormatter": "octref.vetur"
    },
    "eslint.format.enable": true,
    "explorer.confirmDragAndDrop": false,
    "editor.columnSelection": false,
    "breadcrumbs.enabled": false,
    "files.associations": {
      "*.js": "javascript",
      "*.json": "jsonc"
    },
    // (jsconfig.json就能支持在.js文件中的@路径跳转)
    // 之前因为上面已经把vue文件当作html文件来编辑,所以只支持vue的vue-helper是不起作用的,所以下面第一个要加上html
    "vue-peek.supportedLanguages": [
      // 在用src来引用之前都是可以跳转的,现在用这个来实现@代替src也能实现跳转
      "vue",
      "html"
    ],
    // 上面已经实现引入vue能转到定义,但是引入js不支持,所以加上了.js
    "vue-peek.targetFileExtensions": [".vue", ".js"],
    "[javascript]": {
      "editor.defaultFormatter": "vscode.typescript-language-features"
    },
    //双击选择连字符(下面)
    "editor.wordSeparators": "`~!@#$%^&*()=+[{]}\\|;:'\",.<>/?",
    "sync.gist": "dcd4e188619b22fedd347699f96f0969",
    "sync.forceUpload": false,
    "cSpell.enableFiletypes": ["!html"],
    // 折叠代码块策略(下面)注:之前折叠代码时,最后的括号也折叠进去了.
    "editor.foldingStrategy": "indentation",
    "workbench.editor.enablePreview": false,
    "vetur.validation.template": false,
    "[jsonc]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "javascript.updateImportsOnFileMove.enabled": "always", // 这个解决了Col/input闭合报红的问题
    // "workbench.iconTheme": "material-icon-theme", // 这个会在文件前面加个标志,不建议使用
    // "workbench.colorTheme": "Winter is Coming (Dark Blue - No Italics)",
    // "workbench.colorTheme": "Default Light+", // 这个与下面三个是一起的
    "workbench.colorCustomizations": { // 这个与上面是一起的
      // 颜色设置
      // "editor.background": "#C7EDCC",
      // "sideBar.background": "#FAF9DE",
      // "terminal.background": "#EAEAEF"
    },
  
    "files.defaultLanguage": "${activeEditorLanguage}",
    "workbench.list.smoothScrolling": true,
    "editor.snippetSuggestions": "bottom", // 代码片段提示放在下面,要不是有打印提示,我就禁用了
    "editor.cursorBlinking": "solid",
    "editor.cursorSmoothCaretAnimation": true,
    "editor.cursorStyle": "line",
    "editor.renameOnType": false,
    "workbench.startupEditor": "newUntitledFile",
    "terminal.integrated.mouseWheelScrollSensitivity": 5,
    "liveServer.settings.donotShowInfoMsg": true,
    "javascript.implicitProjectConfig.experimentalDecorators": true,
    "[typescript]": {
      "editor.defaultFormatter": "vscode.typescript-language-features"
    },
    "search.followSymlinks": false,
    "git.enabled": false,
    "git.autorefresh": false,
    "[javascriptreact]": {
      "editor.defaultFormatter": "vscode.typescript-language-features"
    },
    "[css]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[json]": {
      "editor.defaultFormatter": "vscode.json-language-features"
    },
    "typescript.disableAutomaticTypeAcquisition": true,
    "editor.multiCursorModifier": "ctrlCmd"
  }
  
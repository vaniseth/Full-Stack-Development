# GLOBAL FEATURE VS CORE MODULE VS THIRD-PARTY MODULE

**GLOBAL FEATURES**: They are keywords like const or fucntion but also some global objects like process.

**CORE NODE.JS MODULES:** Example would be the file system module (FS), the path module (path), or the http module (http).

**THIRD PARTY MODULES:** They are installed via npm install command. You can add any kind of feature to your application via this way.


* Global features are always availabe you do not need to import them into the files where you want to use them.
* Core node.js modules don't need to be installed but you need to import them when you want to use the features exposed by them. Example:

```
const fs = require('fs')
```

you can now use the fs object exported by the fs module.

* Third part modules need to be installed and imported. Example: In terminal we write

```
npm install --save express 
```

In code file we write

```
const express = require('express')
```

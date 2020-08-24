#### With this small project we will make some configuration of the TS Compiler

> Create a tsconfig file with following command:
```
tsc --init
tsc -w
npm start -> combines building .ts files with ts compiler && watching .js file with nodemon. See package.json file
```

`We made some changes to tsconfig.json file:`

* outDir -> ./build
* rootDir -> ./src

> Peek definition in VS Code: (Alt + F12)
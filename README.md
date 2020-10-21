## TypeScript Overview

- [Meta-Programming](https://stackoverflow.com/a/2566561/9138425) Features like Decoators

## JS Types vs TS Types

The key difference is: JavaScript uses "dynamic types" (resolved at runtime), TypeScript uses "static types" (set during development).

### Tuple

Added by TypeScript: Fixed-length array

### enum {NEW, OLD}

Added by TypeScript: Automatically enumerated global constant identifiers

## TypeScript Options

### lib

with `--lib` or `"lib": ["<>"]` you can specify a list of built-in API declaration groups that you can chose to include in your project. For instance, if you expect your runtime to have support for Map, Set and Promise (e.g. most evergreen browsers today), just include `--lib es2015.collection,es2015.promise`. Similarly you can exclude declarations you do not want to include in your project, e.g. DOM if you are working on a node project using --lib es5,es6.

### rootDir

Only compile this directory

### outDir

change output destination

### noEmitOnError 

Turn it `true` if you want not generate js file having any bug/error
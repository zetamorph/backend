# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 0.13.0 (2019-03-08)


### Bug Fixes

* add @types/cls-hooked d59b79f
* add src to include 0995b02
* allow other containers to be imported b122935
* apply the unique constraint int the migrations f6515ee
* better stream handling 2ac55a3
* correct filename 36a5770
* create a git ignore since this is not included in the npm package 1fd04fd
* create new session if none is active a424181
* disable empty strings for username and email 96f6508
* don't assume a default scope 4ca0215
* dont write the context on context.data 🤦 e93045b
* enlargen the field of the token f8acac7
* give the uniqe constraints names so a user can match them 8ca6def
* inherit file entity from base entity cdebdb4
* linting and build issues 3dd96ff
* linting issues 5aea811
* linting issues 1593a2e
* linting issues 1c6b680
* make password nullable 3b9a2ba
* make the sortorder optional aa89fa1
* migrate the external links from rawgit to jsdelivr 3edeea5
* move the request-context to extra package 0a4ee9e
* only add a service if it is not known 0d3f42e
* override type for password 0eb041c
* release query runner after finishing its work 86df0ff
* remove file-spec to include all files in the package b6e3a61
* remove reference to the owner 606ba65
* remove the entity anotation to hide it from the db 2c00041
* remove unnecessary async declaration 3e5ee1c
* **user:** exclude the password from transformation 171f7ee
* repair migrations 6a768bc
* repair the currentUserChecker a4bac01
* repair the entry point d11c1b5
* replace string-type by varchar to be cross db 55c4872
* the password is not required 1befff3
* typo fe6e371
* update lockfile fdd18fb
* use a postgresql compatible type 1b4ed46
* use a postgresql compatible type e7431ef
* use constant dcf4879
* use correct variable fa5154a
* **current user:** don't throw exceptions on failure 86001b1
* use cross platform default values 70567cd
* use cross platform timestamp type 599ea1b
* use cross platform varchar 9e2e85f
* use local import 7dd57e3
* use postgresql data types 4c0644e
* use unix timestamp for migrations ef41523
* **linting:** fix linter errors 60bbec3
* **packages:** add ts-jest as a dev dependency 5f57985
* **provider:** disable login for disabled users 7a53c0b


### Features

* add `Ownable`-mixin 542f152
* add a getter for the raw file 34ca79f
* add a method for deleting media 5312f71
* add a method to get a file from the store 1b29a89
* add a payload attribute to the tokenentity 5fd7bd9
* add a sortorder d0a2b85
* add a user controller to the template 8a986c7
* add more validation 0f4e474
* add password hashing capabilities 63e176a
* add some integration tests 68a9f88
* add support for middlewares b6c7a50
* allow createdBy and updatedBy to be not enforceable d9e2949
* allow the password to be `NULL` a96c529
* allow to pass mimetype when attaching new media ed8f1a5
* allow transaction reuse 4528877
* create a configurable tempDir 084bb9c
* enable cors 4bd3ec3
* initial commit 9909bac
* initial commit 86cac27
* initial migrations 21fe612
* integrate cls-hooked for RequestContext a98fca8
* integrate ownable content 4a61d7f
* make the user class abstract to hide it from the schema 4a1d64a
* newest developments 48ce40b
* refactor user entities into a module f2307ad
* remove dependency from the core backend c8d74d1
* replace mmmagic with file-type cff65b2
* **tests:** add initial tests and test setup 3b8e4a2
* **tokens:** add a check for the token scopes 2a81994
* **user:** add `hasRole` method to user entity a8981be


### Reverts

* dont make the user abstract 46e5792
# Changelog

## [3.0.0](https://github.com/husseinxali/AIOS/compare/v2.0.1...v3.0.0) (2025-06-20)


### ⚠ BREAKING CHANGES

* stuff
* start

### Features

* add 'onlyOnDiscover' catalog modifier ([4024c01](https://github.com/husseinxali/AIOS/commit/4024c01b0a55cdd18023cf4d9328f38d3b5c29d0))
* add 'personal' sort criteria to allow prioritising personal/your media results ([0ecedda](https://github.com/husseinxali/AIOS/commit/0eceddab77cbda7a51621f6799e939a87daee949))
* add alert and socials options to schema, implement SocialIcon component, and update TemplateOption to render new option types ([a0a3c82](https://github.com/husseinxali/AIOS/commit/a0a3c8231ae77cd379eb39ba68ef437b15b0a4e5))
* add alert option to DebridioTmdbPreset and TmdbCollectionsPreset for language selector clarification ([093f90a](https://github.com/husseinxali/AIOS/commit/093f90a3eeafb540aaf28638557ad75a8f1e44d9))
* add aliased configuration support ([5df60d7](https://github.com/husseinxali/AIOS/commit/5df60d7085a0b5f938c8f135c93c29286aed566b))
* add anime catalogs ([5968685](https://github.com/husseinxali/AIOS/commit/59686852d3b7c2e3f0f8e204bcf8b765aadb29f7))
* add anime specific sorting and add help box to sort menu ([77ee7b4](https://github.com/husseinxali/AIOS/commit/77ee7b48c465d67e2e105d1c134d88cd96b27093))
* add api key field and handle encrypted values correctly. ([6a5759d](https://github.com/husseinxali/AIOS/commit/6a5759d60e27ec83101a3f1b02284ad8242faea9))
* add asthetic startup logs ([fdbd282](https://github.com/husseinxali/AIOS/commit/fdbd2821101bd8de0f9ffc4030a6b4938c43ec70))
* add audio channel filter and fix unknown filtering not working in some cases ([df546d3](https://github.com/husseinxali/AIOS/commit/df546d3a0c9ca39e772a64980a6aa582a4e9c81a))
* add built-in torrentio format ([6fa1b2b](https://github.com/husseinxali/AIOS/commit/6fa1b2b0c0cb45e9344163989009238d528d330b))
* add configurable URL modifications for Stremthru Store and Torz ([3ce9dd0](https://github.com/husseinxali/AIOS/commit/3ce9dd0ff5e5b7e9298bef87b3c5abe12c96afc9))
* add custom formatter ([67023d3](https://github.com/husseinxali/AIOS/commit/67023d3766527b461255a0aa6e25ce87ed72f77b)), closes [#10](https://github.com/husseinxali/AIOS/issues/10)
* add delete icon to preferred list, only load valid values, fix password requirement check for new logins, fix spellings and add types ([d845c0c](https://github.com/husseinxali/AIOS/commit/d845c0ce8bfb040c800355e97ea552758ad3c719))
* add doctor who universe ([048c612](https://github.com/husseinxali/AIOS/commit/048c612896723acffe908459c381dd1ee6f63784))
* add donation modal button at top of about menu ([0170267](https://github.com/husseinxali/AIOS/commit/01702671d59d7b924f4693e30b4f8fb1efaeaa15))
* add external download streams option ([952a050](https://github.com/husseinxali/AIOS/commit/952a05057cfbd9446f19ea4e7c71e26ae8acee89)), closes [#191](https://github.com/husseinxali/AIOS/issues/191)
* add folder size, add smart detect deduplicator, parse folder size for mediafusion, improve size parsing ([52fb3bb](https://github.com/husseinxali/AIOS/commit/52fb3bb41c9b59433e00695c61fd643724c1bff4))
* add folderName property, show in gdrive and torrentio formats. deprecate stream.name, add stream.filename and stream.folderName ([feca66d](https://github.com/husseinxali/AIOS/commit/feca66d9d5e6194a83602f031f72e9517c73fc09)), closes [#147](https://github.com/husseinxali/AIOS/issues/147)
* add health check to dockerfile ([8c68051](https://github.com/husseinxali/AIOS/commit/8c680511edb2c5936bebdab5931bd32a968bcc9e))
* add infohash extractor in base stream parser ([4b1f45d](https://github.com/husseinxali/AIOS/commit/4b1f45da3a8c3eff9b9a2d675332267cbedf6722))
* add keepOpenOnSelect prop to Combobox for customizable popover behavior and set it to true by default ([f32a1a1](https://github.com/husseinxali/AIOS/commit/f32a1a1002937023cb50a9b5d230950f9981aaba))
* add link to wiki in groups and link to predefined formatter definitions ([7f4405e](https://github.com/husseinxali/AIOS/commit/7f4405e3574cdd230cc2112125163408738d2685))
* add more addons and fix stuff ([51f6bd6](https://github.com/husseinxali/AIOS/commit/51f6bd606c1d4db184b7e9c497f8e63aaf3c03cc))
* add nuviostreams and anime kitsu ([34ed384](https://github.com/husseinxali/AIOS/commit/34ed3846da218065ad89f840e739ec541109158a))
* add opensubtitles v3 ([b4f6927](https://github.com/husseinxali/AIOS/commit/b4f69273a4de6572dafcd5b121910048da3cb3aa))
* add P2P option and enhance service handling in StremthruTorzPreset ([6390995](https://github.com/husseinxali/AIOS/commit/6390995eebbd96ab524c3980b103500ecc8300ad))
* add predefined format definitions for torbox, gdrive, and light gdrive ([e3294eb](https://github.com/husseinxali/AIOS/commit/e3294eb7e9403e457d622e848bbf81534e92c9e6))
* add public ip option and load forced/default value to proxy menu ([3c2c59e](https://github.com/husseinxali/AIOS/commit/3c2c59e676144dba70ba9c3675f3767eab4991ea))
* add regex functions to condition parser ([731c1d0](https://github.com/husseinxali/AIOS/commit/731c1d002cb2fa2bce79f7b20df27f4e6e726e2b))
* Add regex-based stream sorting with API key protection ([#156](https://github.com/husseinxali/AIOS/issues/156)) ([d4db3af](https://github.com/husseinxali/AIOS/commit/d4db3aff2bdb3b582d96301f1942f50e1664c5eb))
* add release group extraction to filename parsing and update types ([f35dcea](https://github.com/husseinxali/AIOS/commit/f35dceae9bdbe4f69321b4a3d3e9b4e86574aa7e))
* add season/episode matching ([4cd6522](https://github.com/husseinxali/AIOS/commit/4cd6522417bb15eb37d23a39b6556ff8aa41838e))
* add seeders filters ([653b306](https://github.com/husseinxali/AIOS/commit/653b30632154c31c1036b76bc84e013253539a47))
* add sensible built-in limits and configurable limits, remove unused variables from Env ([37259d9](https://github.com/husseinxali/AIOS/commit/37259d90f133e57571a896929aa9c023027fad6e))
* add shuffle persistence setting and improve shuffling ([e6286bc](https://github.com/husseinxali/AIOS/commit/e6286bcf9bdbf509722e68879803485cc7926c62))
* add size filters, allowing resolution specific limit ([fcec2b9](https://github.com/husseinxali/AIOS/commit/fcec2b9ed850a852c4254306421c91b82c8a6c54))
* add social options to various presets ([ea02be9](https://github.com/husseinxali/AIOS/commit/ea02be99a714e03687b603848f4157e1150aa817))
* add source addon name to catalog and improve ui/ux ([878cd7c](https://github.com/husseinxali/AIOS/commit/878cd7c71fd648072dc9ec2c8de53428eb79a93c))
* add stream passthrough option, orion, jackettio, dmm cast, marvel, peerflix, ([0383671](https://github.com/husseinxali/AIOS/commit/038367126eb4e9fa327101163a12b4ef6dc9b7e6))
* add stream type exclusions for cached and uncached results ([18e034f](https://github.com/husseinxali/AIOS/commit/18e034f7bfb092c053405244a6f972aff44cf1d1))
* add StreamFusion ([8b34be3](https://github.com/husseinxali/AIOS/commit/8b34be3845a86bddf0b95d9aab43607cf9223a92))
* add streaming catalogs ([4ce36f1](https://github.com/husseinxali/AIOS/commit/4ce36f1ba0a8b3149cb9823b7499d625e0e285dd))
* add Stremio Addons site configuration settings to manifest and settings for ownership verification ([26e53f5](https://github.com/husseinxali/AIOS/commit/26e53f5cca3ed222886d5be27e3b09e978f424ac))
* add stremthru as proxy provider ([#160](https://github.com/husseinxali/AIOS/issues/160)) ([17b30c2](https://github.com/husseinxali/AIOS/commit/17b30c2c667c0ed3b87f56a9cd920f9588905ae1))
* add StremThru Store support ([8651f2b](https://github.com/husseinxali/AIOS/commit/8651f2bbc4cbe6f2e3e3ee73a383f120412cf403)), closes [#123](https://github.com/husseinxali/AIOS/issues/123)
* add strict title matching ([c4991c6](https://github.com/husseinxali/AIOS/commit/c4991c678db0333587e57a632e68f26a650ea24a))
* add support for converting ISO 639_2 to languages and prevent languages being detected as indexer in Easynews++ ([938323f](https://github.com/husseinxali/AIOS/commit/938323f1dd5a4a333275c506afa1c85a8c9af361))
* add support for includes modifier for array ([90432ae](https://github.com/husseinxali/AIOS/commit/90432ae9c8b93b7bc1ba4a7a677f7a576b946cd7))
* add tools variable to allow new lines and removing lines ([4efbc1b](https://github.com/husseinxali/AIOS/commit/4efbc1bc516711c6058a3f96b75c82f40a34626f))
* add user agent header for addon requests and allow wrappers to specify additional headers ([657abae](https://github.com/husseinxali/AIOS/commit/657abaef4cc7572331ae89fcb174c8be8437e264))
* add webstreamr, improve parsing of nuviostream results, validate tmdb access token, always check for languages ([dc50c6c](https://github.com/husseinxali/AIOS/commit/dc50c6c70b94df7cc0124bbc8b2f96df01011b38))
* adjust addons menu ([6d0a088](https://github.com/husseinxali/AIOS/commit/6d0a088c395aacb7123a66c12d01df1547733f37))
* adjust default user data ([dea5950](https://github.com/husseinxali/AIOS/commit/dea595055a1cb5ce07f26b64faa209bbaa71dd7a))
* adjust handling of meta requests by trying multiple supported addons until one succeeds ([9fab116](https://github.com/husseinxali/AIOS/commit/9fab1162c004fa7c5f4b73b522527ec0ed142b8a))
* adjustments and proxy menu ([0c5479c](https://github.com/husseinxali/AIOS/commit/0c5479c12997dc755b34897a4ed1814c2140dacb))
* allow disabling pruning and disable it by default ([85c0ec1](https://github.com/husseinxali/AIOS/commit/85c0ec1b5436af1115f97149f87b41aba41fe3ff))
* allow editing catalog type ([d99a29f](https://github.com/husseinxali/AIOS/commit/d99a29fd6e97b010d41047d61522ce49a7084ade))
* allow forcing public proxy urls, make password requirements less strict and use server logger type for server.ts, add /configure redirect ([6640a42](https://github.com/husseinxali/AIOS/commit/6640a42df8331a9831cfd0f33ff29e358e4cd0d5))
* allow passing flags through ([bec91a8](https://github.com/husseinxali/AIOS/commit/bec91a8a5835b340003381d99ebd5b02596dca4b))
* allow specifying providers in torrentio ([8e5f4b5](https://github.com/husseinxali/AIOS/commit/8e5f4b520cbcf472598a955039dc33bdda676bd5))
* allow specifying user agents per addon through environment variables ([829f872](https://github.com/husseinxali/AIOS/commit/829f872929db87eff9eb3aabd9896fc4d3732f50))
* apply sort regexes to folder names ([795ffef](https://github.com/husseinxali/AIOS/commit/795ffefbdd94a9841dba588d131470fe2de5b186))
* cache RPDB API Key validation ([63622e0](https://github.com/husseinxali/AIOS/commit/63622e0a07c64b45a228a1f3f653449744ec96e4))
* changes ([e8c61a9](https://github.com/husseinxali/AIOS/commit/e8c61a986066e1bdd06f00c5e3a4ff215ae5f968))
* changes ([13a20a7](https://github.com/husseinxali/AIOS/commit/13a20a7b610da0f41b40ccaf454a31805b445e9e))
* changes ([f14ac82](https://github.com/husseinxali/AIOS/commit/f14ac825cf41b4016322cf0d19e2395f2be08be3))
* clean up env vars and add rate limit to catalog api ([20fc37c](https://github.com/husseinxali/AIOS/commit/20fc37cc123bacf729c57ae0718d6e85d02d4bb9))
* **conditions:** add support for multiple groupings, and add type constant ([2a525b2](https://github.com/husseinxali/AIOS/commit/2a525b292ef98a8e5a6697f967474714d0ceec23))
* enable encrypted proxied urls by default ([ace955b](https://github.com/husseinxali/AIOS/commit/ace955b6e48f17fe5bb0988b1978284364ed2ec8))
* enhance language detection in MediaFusionStreamParser to parse languages from stream descriptions ([50db0e2](https://github.com/husseinxali/AIOS/commit/50db0e2714f5f040660f47efa3012b41ae8da55d))
* Enhance Regex-based Stream Sorting with Multiple Pattern Support ([#157](https://github.com/husseinxali/AIOS/issues/157)) ([5c7546f](https://github.com/husseinxali/AIOS/commit/5c7546f0ae9f780035064b107f79684da98f322e))
* enhance stream parsing to prefer folder titles when available ([4001fae](https://github.com/husseinxali/AIOS/commit/4001faede127a5712c3112ea334726bd18717c7d))
* enhance strict title matching with configuration options for request types and addons ([3378851](https://github.com/husseinxali/AIOS/commit/3378851ff8048216529a9d1a6715d3b9d1439d39))
* enhance title matching by adding year matching option and updating metadata handling ([62752ef](https://github.com/husseinxali/AIOS/commit/62752ef98c75741e59e70a08ce811b1e032dc8a9))
* expand cache system and add rate limiting to all routes, attempt to block recursive requests ([c9356db](https://github.com/husseinxali/AIOS/commit/c9356db83ab311261c001702ea5a31193a4b0432))
* extract folder size for stremthru torz ([e775562](https://github.com/husseinxali/AIOS/commit/e775562e3c736fb4d652a161a7e29f3fcd28be1f))
* filter out invalid items in wrapper repsponses, rather than failing whole request. add message parsing for torbox ([da7dc3a](https://github.com/husseinxali/AIOS/commit/da7dc3a935d29ec66c9c7509313268c16c3e4f1a))
* fix condition parsing for unknown values and separate cached into cached and uncached function for simplicity ([3d26421](https://github.com/husseinxali/AIOS/commit/3d26421b6878cf21edd6c648f5b61f125bf6cb4d))
* **formatters:** add language emoji property to stream ([76b0cee](https://github.com/husseinxali/AIOS/commit/76b0cee607ce124e3341c8927b24143ced463757))
* **formatters:** add support for 'isfalse' modifier ([a2a9837](https://github.com/husseinxali/AIOS/commit/a2a98375e24db9eb81a8410efe59ac290b590874))
* **formatters:** include release group for gdrive format only ([d50e5d5](https://github.com/husseinxali/AIOS/commit/d50e5d5d2b57000a0ba0ea032dc45cd3daac86fb))
* **frontend:** add customization options for addon name and logo in AboutMenu ([47cc8f6](https://github.com/husseinxali/AIOS/commit/47cc8f6dd6287d214ba34b0413fee784adbc52a7))
* **frontend:** add descriptions to addons and catalog cards ([98c5b71](https://github.com/husseinxali/AIOS/commit/98c5b71f1e364dc2eb9d97448c2cf5d2bf42b12a))
* **frontend:** add folder name to preview ([f0a918e](https://github.com/husseinxali/AIOS/commit/f0a918e761d183d6e3015b5d1ac4a3d137aac3c1))
* **frontend:** add shuffle indicator to catalog item ([edd1e4f](https://github.com/husseinxali/AIOS/commit/edd1e4f8093a9cbb24278f4470d05ff6732acd15))
* **frontend:** add title and description to FormatterPreview component ([92bd35e](https://github.com/husseinxali/AIOS/commit/92bd35e9e9eb146a35a1b25d0e927ab696df1daf))
* **frontend:** add tooltip for full service name in service tags for addon card ([5b8ec4d](https://github.com/husseinxali/AIOS/commit/5b8ec4d9e75822d3ec39e55d5ae503d5f7c5a51f))
* **frontend:** add valid formatter snippets and add valid descriptions for proxy services ([12b3f42](https://github.com/husseinxali/AIOS/commit/12b3f423c0fd1706b9014996978e737d246fcac1))
* **frontend:** enhance FormatterPreview with improved styling and additional input controls ([88d8eb0](https://github.com/husseinxali/AIOS/commit/88d8eb083da69bfc1208b2d080020449540661de))
* **frontend:** enhance hover and focus styles for input elements in FormatterPreview ([ec5ae94](https://github.com/husseinxali/AIOS/commit/ec5ae94703ca8d77e77adbd316f05c10ac79aacb))
* **frontend:** enhance nightly version display with clickable commit link ([84d53cb](https://github.com/husseinxali/AIOS/commit/84d53cbdcf835d797312245dc9377da71b0b54d7))
* **frontend:** hide menu control button text on smaller screens ([2361e5c](https://github.com/husseinxali/AIOS/commit/2361e5c373253db928027c2da0ca0eaa54f35579))
* **frontend:** improve addons menu, preserve existing catalog settings ([2c5c642](https://github.com/husseinxali/AIOS/commit/2c5c642b022601e3a41ed74934bd29538eec9d71))
* **frontend:** improve services page ([384bdc3](https://github.com/husseinxali/AIOS/commit/384bdc3a52d67bc85b33f2338b0076d7bd165fc1))
* **frontend:** make catalog card title consistent with other cards ([5197331](https://github.com/husseinxali/AIOS/commit/5197331a79093065f8de326f76bfb2add9c0050a))
* **frontend:** services page, parse markdown, toast when duplicate addon ([3bc2538](https://github.com/husseinxali/AIOS/commit/3bc25387f521792d5a2455a600d459176767497e))
* **frontend:** update addon item layout for improved readability ([589e639](https://github.com/husseinxali/AIOS/commit/589e639870fe9618dcee6e7e221750b1d8a9e17c))
* **frontend:** update regex sort pattern description for naming regex capability ([8469e4f](https://github.com/husseinxali/AIOS/commit/8469e4ffcb92696a21210f7daa06172516b67606))
* **frontend:** use NumberInput component ([77edb07](https://github.com/husseinxali/AIOS/commit/77edb07831ac6c4daf628e044fd369534fb58fcc))
* **frontend:** use queue and default regex matched to undefined ([2c97ec0](https://github.com/husseinxali/AIOS/commit/2c97ec04cde252ffdeafac25ecbe5c02148b4385))
* identify casted streams from DMM cast as library streams and include full message ([6fd5f5b](https://github.com/husseinxali/AIOS/commit/6fd5f5b9c03e46667255c9949b3c98b176724ebd))
* implement advanced stream filtering with excluded conditions ([302b4cb](https://github.com/husseinxali/AIOS/commit/302b4cb5c99fe00f21b5b775ef2187f4088717a9)), closes [#57](https://github.com/husseinxali/AIOS/issues/57)
* implement cache statistics logging and configurable interval ([8594ca0](https://github.com/husseinxali/AIOS/commit/8594ca0374be534cb89dbbee427805202cc08ce6))
* implement config validation and addon error handling ([f7b14cd](https://github.com/husseinxali/AIOS/commit/f7b14cd1dbe54d714fe41881ff9993107746b895))
* implement detailed statistics tracking and reporting for stream deduplication process ([89eac41](https://github.com/husseinxali/AIOS/commit/89eac415a422189d80a3c3c66cde26762bd7f437))
* implement disjoint set union (DSU) for stream deduplication, ensuring multiple detection methods are handled correctly ([b0cc718](https://github.com/husseinxali/AIOS/commit/b0cc718a094f22b4c0cec870e5b06e2ec9e1e7e9))
* implement import functionality via modal for JSON files and URLs in TextInputs component ([32b5a5b](https://github.com/husseinxali/AIOS/commit/32b5a5b7bdfc9b2b27e15eddf060555e6b9c0596))
* implement MAX_ADDONS and fix error returning ([ae74926](https://github.com/husseinxali/AIOS/commit/ae74926ce2e04710771a7166e946f87166985188))
* implement pre-caching of the next episode ([980682c](https://github.com/husseinxali/AIOS/commit/980682cd28e40f84caf1c8f1072fd79ec49ac62b))
* implement regex-based stream filtering with API key protection ([#155](https://github.com/husseinxali/AIOS/issues/155)) ([b7e512b](https://github.com/husseinxali/AIOS/commit/b7e512b3d9ad11c212a87472e1e6c3dea2fc7f82))
* implement timeout constraints in preset options using MAX_TIMEOUT and MIN_TIMEOUT ([e415a70](https://github.com/husseinxali/AIOS/commit/e415a70485fdd33bf5d9b1379d3ede633ea60475))
* implement user pruning functionality with configurable intervals and maximum inactivity days ([0bf6fcb](https://github.com/husseinxali/AIOS/commit/0bf6fcbe9c484c4df6582d76d3bd8fd10567f34b))
* improve cache stats logging ([d47eee0](https://github.com/husseinxali/AIOS/commit/d47eee002112f6330d1b74920199bface0105eed))
* improve config handling, define all skip reasons, add env vars to disable addons/hosts/services, ([a301002](https://github.com/husseinxali/AIOS/commit/a301002ba49fce87e40a28a650e411e5078f769b))
* improve error logs for stremthru/mediaflow ([09220be](https://github.com/husseinxali/AIOS/commit/09220be8e805dce8072a53aada815375de4fbbb7))
* improve formatting of zod errors when using unions ([9c2a970](https://github.com/husseinxali/AIOS/commit/9c2a970c7d612c9432db70a011663f3f241072ca))
* improve French language regex to include common indicators ([163352a](https://github.com/husseinxali/AIOS/commit/163352a1909faf4e4b45b56222ba08afa023fd7e))
* improve handling of unsupport meta id and type ([3779ea0](https://github.com/husseinxali/AIOS/commit/3779ea09d392ffb3f14b7efcba989ec7cc44bf89))
* improve preset/parser system and add mediafusion, comet, stremthru torz, torbox, debridio, en, en+, en+ ([b70a763](https://github.com/husseinxali/AIOS/commit/b70a763e8b6dc9cfbaf865c8526dd078e1965cb8))
* improve regex sorting performance, allow naming regexes with name&lt;::&gt;prefix, and give name in custom formatter with stream.regexMatch ([cb71ae9](https://github.com/husseinxali/AIOS/commit/cb71ae91c967fff1f4a5daf7f60cebf404a803a6))
* include preset id in formatter ([6053855](https://github.com/husseinxali/AIOS/commit/6053855f9a3dc5b32bcd8296161ef8ac6df18df8))
* **jackettio:** add configurable forced hostname, port, and protocol for stream URLs ([96339c8](https://github.com/husseinxali/AIOS/commit/96339c81acad0291f2968a9b7d70150a5ce03a6d)), closes [#144](https://github.com/husseinxali/AIOS/issues/144)
* make `BASE_URL` required and disable self scraping by default ([d572c04](https://github.com/husseinxali/AIOS/commit/d572c047e9da4d3cf5be645fd2125b3781b80898))
* make caching more configurable and add to sample .env ([1e65fd9](https://github.com/husseinxali/AIOS/commit/1e65fd9e7dddfe3a0bb9bcf07d77d03fbadf846a))
* match years for series too, but don't filter out episode results without a year ([8394f09](https://github.com/husseinxali/AIOS/commit/8394f0969da665b31074c8e6b9fc15bf9e731b2a))
* move 'custom' preset to the beginning ([0b85ff3](https://github.com/husseinxali/AIOS/commit/0b85ff35e7eba5f62579e117621b212122fd8eca))
* only add foldername if different and parse info from both folder and filename ([6eed23f](https://github.com/husseinxali/AIOS/commit/6eed23f445d017ae6d18e9874978a8874350d006))
* **parser:** add support for additional video quality resolutions (144p, 180p, 240p, 360p, 576p) in regex parser ([59d86ff](https://github.com/husseinxali/AIOS/commit/59d86ffcbfe4d576c49903cdeb8adf197b811963))
* pass `baseUrl` in Easynews++ config and add optional `EASYNEWS_PLUS_PLUS_PUBLIC_URL`. ([b41e210](https://github.com/husseinxali/AIOS/commit/b41e210c04777b349629dc98f28982bfb2e54886))
* prefer results with higher seeders when deduping ([aed775c](https://github.com/husseinxali/AIOS/commit/aed775c6d5a2b983dc04adbd15b7409a8b11a3a0))
* proxy fixes and log adjustments ([091394b](https://github.com/husseinxali/AIOS/commit/091394b837565f59815bb968dea13fdc356b6160))
* remove caching for sort regex (improves performance), adjust variable names in custom formatter ([ab765d7](https://github.com/husseinxali/AIOS/commit/ab765d708fa1c77745d521c6120820d65283f0fe))
* remove duplicated info from download streams ([4901745](https://github.com/husseinxali/AIOS/commit/49017450b9958eabc5a04a098401f2a2561a8e26))
* remove useMultipleInstances and debridDownloader options for simplicity and force multiple instances. ([8c0622e](https://github.com/husseinxali/AIOS/commit/8c0622ea984082dc8c8f678c12d8c962967a70c1))
* rename API Key to Addon Password and update related help text in save-install component ([b63813c](https://github.com/husseinxali/AIOS/commit/b63813c29db53b5a3fbf83c6c042ee10fdda739d))
* rename cache to cached in condition parser ([db68a5c](https://github.com/husseinxali/AIOS/commit/db68a5c0266a5aa05068c4bcbc0c0f0532cd6097))
* replace custom HTML div with SettingsCard component for consistent styling ([8611523](https://github.com/husseinxali/AIOS/commit/86115230bfd5958374294896adc59c83f28d3fee))
* revert 89eac415a422189d80a3c3c66cde26762bd7f437 ([34b57c9](https://github.com/husseinxali/AIOS/commit/34b57c9883901722736cb5d52e0911f6434ddfe3))
* service cred env vars, better validation, handling of encrypted values ([61e21cd](https://github.com/husseinxali/AIOS/commit/61e21cd803981899b4e445c5058fb546db79096d))
* start ([3517218](https://github.com/husseinxali/AIOS/commit/35172188081b688011031439ec26b11e428dd02d))
* stremthru improvements ([#172](https://github.com/husseinxali/AIOS/issues/172)) ([72b5ab6](https://github.com/husseinxali/AIOS/commit/72b5ab648e511220d7ff8b4bf453db94bb952b30))
* stuff ([0c9c86c](https://github.com/husseinxali/AIOS/commit/0c9c86c218c5754e62ff94c0d26d398f32da92a1))
* Support regex patterns via environment variables to prevent HTTP 431 errors ([#162](https://github.com/husseinxali/AIOS/issues/162)) ([95e7c89](https://github.com/husseinxali/AIOS/commit/95e7c898a59d928a4e6dfa26f562b7597243540c))
* switch to different arrow icons and use built-in hideTextOnSmallScreen prop ([8d307a0](https://github.com/husseinxali/AIOS/commit/8d307a0c2f755b16074e1a7262204e635853ddfd))
* ui improvements ([7e031e5](https://github.com/husseinxali/AIOS/commit/7e031e51b12cd1fa09e1ed70b90467e8a6bd956e))
* ui improvements, check for anime type using kitsu id, loosen schema definitions ([9668a15](https://github.com/husseinxali/AIOS/commit/9668a152fd116ed9fa9657e935b3b0ed711ce06d))
* ui improvments ([39b1e84](https://github.com/husseinxali/AIOS/commit/39b1e84d87ea4422ebbdab2495d242aeee231562))
* update About component with new guide URLs and enhance Getting Started section ([5232e38](https://github.com/husseinxali/AIOS/commit/5232e3847b4aeb812c44ad0e153b95189ceda607))
* update static file serving rate limiting and refactor file path handling ([010b63c](https://github.com/husseinxali/AIOS/commit/010b63c8725bfb3968c6678b2615675b393fb449))
* update TMDB access token input to password type with placeholder ([2378869](https://github.com/husseinxali/AIOS/commit/23788695e2cedad3a1491c78f17f7e900aa77aeb))
* use `API_KEY` as fallback for `ADDON_PASSWORD` to maintain backwards compatability ([5424490](https://github.com/husseinxali/AIOS/commit/5424490a284aa74e98071a36f3848706f81f5033))
* use button for log in/out ([62911ad](https://github.com/husseinxali/AIOS/commit/62911adfacde25c9f9e7b3551c277c4a7a6340db))
* use envalid, improve cache implementation, refactor regex caching ([9dd8336](https://github.com/husseinxali/AIOS/commit/9dd8336edc00b208ff99cf918df2f4f83927b486))
* use shorter function names in condition parser ([3bd2751](https://github.com/husseinxali/AIOS/commit/3bd27519fdfa8cbf9435a48b49f3aeb2992aae42))
* use sliders for seeder ranges and fix some options not being multi-option ([915187a](https://github.com/husseinxali/AIOS/commit/915187a6120dff969dcfe9d4bf9e473673f8ebf0))
* validate regexes on config validation ([dd0f45c](https://github.com/husseinxali/AIOS/commit/dd0f45c731938c37575fb376a981d3c0d2c7a45a))


### Bug Fixes

* (mediafusion) increase max streams per resolution limit to 500 ([322b4f3](https://github.com/husseinxali/AIOS/commit/322b4f375ebbd1047f3e457cf48d75ac9b610d15))
* account for base64 compressed format in custom config generator ([1a57ec4](https://github.com/husseinxali/AIOS/commit/1a57ec45d864d6f37703071ef254c7302c04cf74))
* adapt queries for PostgreSQL and SQLite ([e2834d5](https://github.com/husseinxali/AIOS/commit/e2834d571c709cc9ca3db541da6c1374fb201490))
* adapt query for SQLite dialect in DB class ([a7bb898](https://github.com/husseinxali/AIOS/commit/a7bb8983de03d5f1fb044636133c6f01aaeebf1f))
* add 'isfalse' to check_false string check ([7da921a](https://github.com/husseinxali/AIOS/commit/7da921a4006dc76a13edbeaa646de4ae17c016b3))
* add audio channel to skipReasons ([ef1763c](https://github.com/husseinxali/AIOS/commit/ef1763cbe60fe5c279138a152e1a8d677f30f0ce))
* add back library marker to LightGDriveFormatter ([871f54e](https://github.com/husseinxali/AIOS/commit/871f54e896a4315f197e6a15b779d4b2a957e8a4))
* add back logo.png to v1 path for backwards compatability ([ce5a5b9](https://github.com/husseinxali/AIOS/commit/ce5a5b99059cd2902d60c9e865503d995ed46df9))
* add back y flag ([0e0a18b](https://github.com/husseinxali/AIOS/commit/0e0a18b9c1f7e65f84af762aab785aa7a79e1222))
* add block scope for array modifier handling in BaseFormatter ([02a2885](https://github.com/husseinxali/AIOS/commit/02a2885d33dfbe355203d4f561408eb82355d939))
* add description for stremthru torz ([6e7c142](https://github.com/husseinxali/AIOS/commit/6e7c14224e5fe90d56dbda7f6ac91d5b87091444))
* add enableCollectionFromMovie option to TMDB Collections ([71d9fe0](https://github.com/husseinxali/AIOS/commit/71d9fe093cad1566172206d0a87662358bd446a6)), closes [#194](https://github.com/husseinxali/AIOS/issues/194)
* add extras to cache key for catalog shuffling ([1cdfc6e](https://github.com/husseinxali/AIOS/commit/1cdfc6e0e3a44f983ac43f1c210257c63c0a78a9))
* add France option to DebridioTvPreset language selection ([bd19d01](https://github.com/husseinxali/AIOS/commit/bd19d01b5434070384ac69278fbc8e21a65bafe9))
* add missing audio tags to constant ([fda5ffe](https://github.com/husseinxali/AIOS/commit/fda5ffe2062f1e6953380c4904c174b81b3b07ef))
* add missing braces in parseConnectionURI function for sqlite and postgres cases ([807b681](https://github.com/husseinxali/AIOS/commit/807b6810ea2b29900408a96e15f934d49b4407d9))
* add stream as supported resource for TMDB Collections ([d2ef215](https://github.com/husseinxali/AIOS/commit/d2ef2154fda902900751c47527ff52390506bd54))
* add timeout to fetch requests in TMDBMetadata class to prevent hanging requests ([1a0d57a](https://github.com/husseinxali/AIOS/commit/1a0d57af43efd68d41a623e2a81b23cb217011da))
* add validation for encrypted data format in decryptString function ([843b535](https://github.com/husseinxali/AIOS/commit/843b535d7ca47c362e254669d0a3f149abe9ffc2))
* add verbose logging for resources and fix addon catalog support ([4daa644](https://github.com/husseinxali/AIOS/commit/4daa6441eede8aa630108c21f8760fa7c19a3745))
* adjust cache stat logging behaviour ([d921070](https://github.com/husseinxali/AIOS/commit/d921070192a4e07e3702b521a7b3819f42da3529))
* adjust default rate limit values ([aa98e7b](https://github.com/husseinxali/AIOS/commit/aa98e7b491a1f7ab9360af8d69490c39bbfd8268))
* adjust grid layout in AddonFilterPopover ([632fbf9](https://github.com/husseinxali/AIOS/commit/632fbf9206dcf5d9532557ca69df42683b5f7ffd))
* adjust grouping in season presence check logic ([d89e796](https://github.com/husseinxali/AIOS/commit/d89e796cb07e534691401e307d28fc89f4176dad))
* adjust idPrefixes handling to improve compatibility in most cases ([7fa8ba7](https://github.com/husseinxali/AIOS/commit/7fa8ba71fbb682d077fb5c8ccfbadfb0050bea80))
* adjust option name to keep backwards compatability with older configs ([eb651b5](https://github.com/husseinxali/AIOS/commit/eb651b517db2bf8b91e3c60488f5336049a6bb69))
* adjust spacing in predefined formatters and add p2p marker to torbox format ([d8f5d1a](https://github.com/husseinxali/AIOS/commit/d8f5d1a2d152d2930c0cb03c533748f81f742869))
* allow any characters for a 32 character secret key ([2c8c7b5](https://github.com/husseinxali/AIOS/commit/2c8c7b5dd60c67ed652d8e4aed3f0cffc1b56c8e))
* allow empty strings for formatter definitions ([dba54f5](https://github.com/husseinxali/AIOS/commit/dba54f5c426e8b0391d3f2b2979b473574968036))
* allow newlines when parsing for service data ([67fab12](https://github.com/husseinxali/AIOS/commit/67fab12909e84da71ea1b622d41e8c440aab4b87))
* allow null for released in MetaVideoSchema ([ca8d744](https://github.com/husseinxali/AIOS/commit/ca8d74448ac2479c948a1cc8509cee8a76db0042))
* allow null value for description in MetaPreview ([0f16575](https://github.com/husseinxali/AIOS/commit/0f165752db011c5d525c59bb915edda43afea718))
* allow null value in MetaVideoSchema ([73b4d0b](https://github.com/husseinxali/AIOS/commit/73b4d0b99fc587f7f82515553d92bf7c69647157))
* always apply seeder ranges, defaulting seeders to 0 ([0f5dd76](https://github.com/husseinxali/AIOS/commit/0f5dd764d9577944c587a75423db5256942b583b))
* apply negativity to all addon and encode sorting ([411ae7c](https://github.com/husseinxali/AIOS/commit/411ae7cee234ec8fefe08bf3d844d4711dc37645))
* assign filename when found ([dc01a20](https://github.com/husseinxali/AIOS/commit/dc01a20205ec49a5a604920587f919f3379b4f21))
* assign unique IDs to each stream to allow consistent comparison ([673ecb2](https://github.com/husseinxali/AIOS/commit/673ecb2133d3dc5435db7be23cf116b2a6ad34c3))
* await precomputation of sort regexes ([56994ef](https://github.com/husseinxali/AIOS/commit/56994ef9e83248d49e890af99181943c7715d9bb))
* call await on all compileRegex calls ([8e87004](https://github.com/husseinxali/AIOS/commit/8e87004a07a8b5612356f5d346b4b1140a866b64))
* carry out regex check for new users too ([1555199](https://github.com/husseinxali/AIOS/commit/155519951bd5422da9d9fc112e1eca89c4d1fb51))
* **cf-worker:** remove unused Cache instantiation ([c5e71ce](https://github.com/husseinxali/AIOS/commit/c5e71ce78efbb8cb2eafd721da00d4b6639481d8))
* **cf-worker:** use utf-8 encoding when extracting ([22395d0](https://github.com/husseinxali/AIOS/commit/22395d09492ef181cef6dc1b2d3bc8b9aff29fcb))
* change all debrid service name to AllDebrid ([a89cdca](https://github.com/husseinxali/AIOS/commit/a89cdca583e50c3bf66432bbb721797954323ba6)), closes [#208](https://github.com/husseinxali/AIOS/issues/208)
* change image class from object-cover to object-contain in AddonCard component ([734bd88](https://github.com/husseinxali/AIOS/commit/734bd88d34ba84267934862117a846c8c246e96e))
* check if title matching is enabled before attempting to fetch titles ([fd03112](https://github.com/husseinxali/AIOS/commit/fd03112288bdf00504a6e614993a50170bd7fb43))
* coerce runtime to string type in MetaSchema for improved validation ([cc6eea7](https://github.com/husseinxali/AIOS/commit/cc6eea7e52cc7604806f04459439c7256e1b5aee))
* coerce year field to string type in ParsedFileSchema for consistent data handling ([10bef68](https://github.com/husseinxali/AIOS/commit/10bef68c3625b855a473406dbd9bc4e852fe3cb2))
* **comet:** don't make service required for comet ([826edae](https://github.com/husseinxali/AIOS/commit/826edae8030627bb94591a07c6343ee64e0108f9))
* **constants:** add back Dual Audio, Dubbed, and Multi ([7c10930](https://github.com/husseinxali/AIOS/commit/7c109304ffdf035532514284c021171e91c0fe93))
* convert live types to http for webstreamr ([64977ca](https://github.com/husseinxali/AIOS/commit/64977caeffe2cb6b95714916c14bfa006502c386))
* **core:** actually apply exclude uncached/cached filters ([413a29d](https://github.com/husseinxali/AIOS/commit/413a29d2d85b50b62042c26f9bed665c7822d11d))
* correct function name for Easynews Plus Plus stream retrieval ([3fcb0b0](https://github.com/husseinxali/AIOS/commit/3fcb0b044ba68e0ce67b9249a37c395122156d8a))
* correct handling of year matching and improved normalisation ([bd53adc](https://github.com/husseinxali/AIOS/commit/bd53adc8f7538243caf121c9b3583cd257dc9181))
* correct library marker usage in LightGDriveFormatter ([2470ae9](https://github.com/husseinxali/AIOS/commit/2470ae94ec2f52f869e3c2edf904500095502b27))
* correct spelling of 'committed' in UserRepository class ([551335b](https://github.com/husseinxali/AIOS/commit/551335bcbaef570a6c6b81d023c1985f6fd19cd2))
* correctly add field to both test arrays ([5d85c18](https://github.com/husseinxali/AIOS/commit/5d85c18691c2d594c67791a7011328b072f74ae4))
* correctly determine valid filenames within a description to minimise multi-line parse strings ([f7f6331](https://github.com/husseinxali/AIOS/commit/f7f6331746eeaef95fd5312cc200d4154843685b))
* correctly force a comet hostname/port/protocol when the value is defined and accept empty strings for the value ([f7626fd](https://github.com/husseinxali/AIOS/commit/f7626fde9e60229f8285ae412fd0ce634608473b))
* correctly handle negate flag ([a65ef19](https://github.com/husseinxali/AIOS/commit/a65ef19f555d34103cd68e8c021707a61e54cdde))
* correctly handle overriden URLs for mediafusion ([46e7e67](https://github.com/husseinxali/AIOS/commit/46e7e6748e461ec77575efb5ebec4dc7ee50eba7))
* correctly handle overriding URL for mediafusion ([9bf3838](https://github.com/husseinxali/AIOS/commit/9bf3838732542c5cac1ef189cd5afefc13fe0204))
* correctly handle required filters and remove HDR+DV as a tag after filtering/sorting ([113c150](https://github.com/husseinxali/AIOS/commit/113c150e143b65eeea5dc2e5e1d74df6c096b8be))
* correctly handle undefined parsed file ([8b85a53](https://github.com/husseinxali/AIOS/commit/8b85a5332d2b33fb6d79139fb6e771d6446b7957))
* correctly handle usenet results during deduping ([153366b](https://github.com/husseinxali/AIOS/commit/153366b41a6b8a08cff8a4cd29ab10dfc1c7d3ac))
* correctly import/export FeatureControl ([654b1bc](https://github.com/husseinxali/AIOS/commit/654b1bc0585d3403836159ac2efde495f4cd44d4))
* correctly load existing custom formats ([66b4a0c](https://github.com/husseinxali/AIOS/commit/66b4a0cc16453ade6ad84004c28e1f13b9b5fff4))
* **custom:** replace 'stremio://' with 'https://' in manifest URL ([0a4a761](https://github.com/husseinxali/AIOS/commit/0a4a76187d78e924222512f1ca971292463270b7))
* **custom:** update manifest URL option to use 'manifestUrl' ([6370ac7](https://github.com/husseinxali/AIOS/commit/6370ac7d00a75bd626cad67fa448dcaaa9b0a6ba))
* decode data before attempting validation ([bdf9a91](https://github.com/husseinxali/AIOS/commit/bdf9a9198f06e550e0fb3681936e6bfacf483731))
* decrypt values for catalog fetching ([6cf8436](https://github.com/husseinxali/AIOS/commit/6cf843666f97dedc247e52cf6946842d66c50229))
* default seeders to 0 for included seeder range ([b0aea2d](https://github.com/husseinxali/AIOS/commit/b0aea2ddec56da2428f515615251712313138cec))
* default seeders to 0 in condition parser too ([53123a3](https://github.com/husseinxali/AIOS/commit/53123a314c45d39c9d482e5105f47de712fcc7fc))
* default value to mediaflow if neither forced or proxy is defined and remove fallback from select value ([61781b7](https://github.com/husseinxali/AIOS/commit/61781b7e0650713777c7475416e1fc8b837c13fa))
* default version to 0.0.0 when not defined ([f031f1a](https://github.com/husseinxali/AIOS/commit/f031f1a50eabad7d122021ce9b6556694c49af76))
* don't fail on invalid external api keys when skip errors is true ([c2db243](https://github.com/husseinxali/AIOS/commit/c2db243b5798032b75843faf7254969d63ff14b6))
* don't log entire error ([6664905](https://github.com/husseinxali/AIOS/commit/6664905a1f04737f24e926c5ef39895c2319500e))
* don't make base_url required ([3d7b0da](https://github.com/husseinxali/AIOS/commit/3d7b0da93fb1add0c6f1d4523411fc0e9512a2b9))
* don't make name required in MetaPreview schema ([062247a](https://github.com/husseinxali/AIOS/commit/062247a89a38d3fad1129a8965a92b6245d5e08e))
* don't pass idPrefixes in manifest response ([35ceb87](https://github.com/husseinxali/AIOS/commit/35ceb87ff325960fc035db735ac8009ab636e09d))
* don't validate user data on retrieval within UserRepository ([17873bb](https://github.com/husseinxali/AIOS/commit/17873bb476d280e6f533cd7cabf8bb8e3e91d518))
* enable passthrough on all stremio response schemas ([377d215](https://github.com/husseinxali/AIOS/commit/377d215c0f5801ff93ec1b0065d0c64ce1fd8217))
* encrypt forced proxy URL and credentials before assignment ([e741de3](https://github.com/husseinxali/AIOS/commit/e741de378775baecd00ee9a8838f3f9fc6ca2bb1))
* enhance Japanese language regex to include 'jpn' as an abbreviation ([7a02f12](https://github.com/husseinxali/AIOS/commit/7a02f12818f64971971bc49b3ec80de594c4a1fe))
* ensure debridDownloader defaults to an empty string when no serviceIds are present in StreamFusionPreset ([886a8cb](https://github.com/husseinxali/AIOS/commit/886a8cb98190fb0e6b4b3d2358103485c9cc6f47))
* ensure early return on error handling in catalog route ([6cc20e1](https://github.com/husseinxali/AIOS/commit/6cc20e124dfe751051f61a700eb4765e8083310e))
* ensure folder and filename are only added when defined in torrentio format ([f6e4539](https://github.com/husseinxali/AIOS/commit/f6e45399728770b4a08cef37bfaf73098a9ebd06))
* ensure foldername is extracted correctly for mediafusion results ([8de35c2](https://github.com/husseinxali/AIOS/commit/8de35c2da69a8be29c578c45deeb992e17041ad4))
* ensure instances is defined ([7e00e32](https://github.com/husseinxali/AIOS/commit/7e00e32bbe93a5610d4f94bc3d78a78e48d32c6b))
* ensure tests are only added when filename or indexer is defined and log sort regexes ([6ebaca9](https://github.com/husseinxali/AIOS/commit/6ebaca9e323a8b10b7e8b5dfe4f96b97dfd43e0b))
* ensure tmdb access token, rpdb api key, and password options are filtered out when exclude credentials is on ([299a6d5](https://github.com/husseinxali/AIOS/commit/299a6d578cef763528095cb80b2337c44d1994e0))
* ensure transaction rollback only occurs if not committed in deleteUser method ([67b188e](https://github.com/husseinxali/AIOS/commit/67b188e7d76b6d0a424f5b86360c2b8a20ddc3b9))
* ensure uniqueness of preset instanceIds and disallow dots in instanceId ([3a9be38](https://github.com/husseinxali/AIOS/commit/3a9be38c77bb7a1b4b991c46902241a6e265b327))
* exit auto prune when max days is less than 0 ([ee1ddc0](https://github.com/husseinxali/AIOS/commit/ee1ddc07389d01b382f19fa46e434ca93f41d3e8))
* experiment with removing user agent for torbox requests ([edf84fb](https://github.com/husseinxali/AIOS/commit/edf84fbc299b569c48b59a3454638a2fefd50886))
* explicitly check for unknown in version and default to 0.0.0 for manifest response ([8664e00](https://github.com/husseinxali/AIOS/commit/8664e004e2553ffb675131488a4c4eab70ede7b3)), closes [#198](https://github.com/husseinxali/AIOS/issues/198)
* export formatZodError ([af90131](https://github.com/husseinxali/AIOS/commit/af90131787616a091373e69bf6f8de67e06f1e78))
* extract age from easynews++ results ([c43cd4e](https://github.com/husseinxali/AIOS/commit/c43cd4e574ecb1c803c961179ff24878f3a77b4d)), closes [#145](https://github.com/husseinxali/AIOS/issues/145)
* fallback to undefined when both default and forced value are undefined for proxy id ([efb57bf](https://github.com/husseinxali/AIOS/commit/efb57bfc3e1a2819712e54c03aee78f967427837))
* filter out null tests ([25c0639](https://github.com/husseinxali/AIOS/commit/25c0639f989e9b9d49df997caa9af4521aa9cdcb))
* filter out undefined when looking for filenames ([a69e65f](https://github.com/husseinxali/AIOS/commit/a69e65f8cf6dac944aa114b5d0279cdb79768284))
* **formatters:** add addon to debug data ([cc53798](https://github.com/husseinxali/AIOS/commit/cc5379806764e8556685da96dcc1c77359141d58))
* **formatters:** add message to light gdrive and remove unecessary spacing ([5cb1b0a](https://github.com/husseinxali/AIOS/commit/5cb1b0a21ed6b29dccf1a56e59434c28da39d1be))
* **formatters:** correctly export and import customFormat ([e2f3ff6](https://github.com/husseinxali/AIOS/commit/e2f3ff638da046d8bcb3e3623988f952d443ce6a))
* **formatters:** handle undefined values for personal and cached properties in convertStreamToParseValue ([f63cab4](https://github.com/husseinxali/AIOS/commit/f63cab4ac80679b5402e2680ae813956cd2bf89a))
* **formatters:** provide infoHash and message in stream obj ([006154d](https://github.com/husseinxali/AIOS/commit/006154de690e1051311b54f47f14c1d6e4a370f6))
* **formatters:** remove empty lines from parsed string output ([fa58982](https://github.com/husseinxali/AIOS/commit/fa5898286d4b34ec20aef09f10ded47794562aa9))
* **frontend:** correct placeholder texts in custom formatter ([7adf352](https://github.com/husseinxali/AIOS/commit/7adf35213cbe0cb3c8cc6dacc1cc6aafbb6ed247))
* **frontend:** encode password when loading config ([e8971df](https://github.com/husseinxali/AIOS/commit/e8971df66d8ed79dec7d93bbc790c3de13f54a01))
* **frontend:** filter out proxy credentials and url in export when exclude credentials is true ([3c31939](https://github.com/husseinxali/AIOS/commit/3c319391b86e6efa530aab5b8cd04ad9341867d1))
* **frontend:** fix switch animation for formatter preview ([0d511d3](https://github.com/husseinxali/AIOS/commit/0d511d32de4756f661e2dcdd04cf0ffee116faff))
* **frontend:** load existing custom formatters ([8cbe54b](https://github.com/husseinxali/AIOS/commit/8cbe54bdad728e253c67349fae0bee9ac1c47c5b))
* **frontend:** load existing overriden type in newType ([caeb282](https://github.com/husseinxali/AIOS/commit/caeb282438edfa8c731b32775840cc5f71c3ec36))
* **frontend:** move personal below cached by default ([3c14d5c](https://github.com/husseinxali/AIOS/commit/3c14d5cf65826da0a0c0bf1bf87bbd631c457cfe))
* **frontend:** pass seeder info through to formatter ([2ec06a6](https://github.com/husseinxali/AIOS/commit/2ec06a6f9905c7e1f9c32cc0a5ef56e96872933b))
* **frontend:** set default presetInstanceId to 'custom' to pass length check ([ec7a19a](https://github.com/husseinxali/AIOS/commit/ec7a19a92d2ffc2b06046ab0176f02a4f5b2014e))
* **frontend:** try and make dnd better on touchscreen devices ([6aa1130](https://github.com/husseinxali/AIOS/commit/6aa11301a5dc06eb8674cfb6a834bf181a41eeee))
* **frontend:** update description to reference available variables and link to wiki ([bd4ae5a](https://github.com/husseinxali/AIOS/commit/bd4ae5afeda191895e29247992ff6cb1185c4f57))
* **frontend:** update filter options to use textValue to correctly show addon name when selected ([6a87480](https://github.com/husseinxali/AIOS/commit/6a874806b893dbd6382082563f2c45c274e2650b))
* **frontend:** use Buffer.from for utf-8 encoding when loading existing configurations ([abed8df](https://github.com/husseinxali/AIOS/commit/abed8df4c9a06c97a6254ea787054659845e3266))
* give more descriptive errors when no service is provded ([c0b6fd3](https://github.com/husseinxali/AIOS/commit/c0b6fd3e7dac933b7fd0f10d999a48850c70244e))
* handle case when there is no arrow in mediafusion stream results ([88b7cb0](https://github.com/husseinxali/AIOS/commit/88b7cb014812ed9b3acbc3266907928c9732725f))
* handle cases when description and title fields are both undefined ([07885d3](https://github.com/husseinxali/AIOS/commit/07885d3054083077b669032a9e45586141da533d))
* handle empty addon name in stream results and update description for addon name field ([5612140](https://github.com/husseinxali/AIOS/commit/5612140ffee8b8e8804d36efdfd22e6f110b32ef))
* handle new named sort regex format in config validation ([d78132d](https://github.com/husseinxali/AIOS/commit/d78132dea3ae9104d6f39d6dfbd0ca9836d8e689))
* handle pikpak credentials for mediafusion ([eee444f](https://github.com/husseinxali/AIOS/commit/eee444f376136ed04257187c4bb1ddc05f05a3f5))
* handle stremthru config encryption/decryption and load from existing configs ([bf5742b](https://github.com/husseinxali/AIOS/commit/bf5742b2b7498f7e29eb852a16ed30422b01a70b))
* handle when drag ends outside drag context ([7a8655d](https://github.com/husseinxali/AIOS/commit/7a8655dd4326821f2445b1055a819a87a2c3270b))
* handle when item doesn't exist in preferred list ([d728bb6](https://github.com/husseinxali/AIOS/commit/d728bb67bdd872b2d812e3fa0ce1e5352860dff4))
* ignore language flags in Torrentio streams if Multi Subs is present ([6d08d7c](https://github.com/husseinxali/AIOS/commit/6d08d7c0336366c185ad43a89657cbe94dc30278))
* ignore recursion checks for certain requests ([d266026](https://github.com/husseinxali/AIOS/commit/d26602631e030f59ef0f0098633b7f4909db87bc))
* improve error handling in TMDBMetadata by including response status and status text ([2f37187](https://github.com/husseinxali/AIOS/commit/2f371876c151a9b4b0b7db3a4cf1fa14868d4db6))
* improve filename sanitization in StreamParser by using Emoji_Presentation to keep numbers and removing identifiers ([714fedb](https://github.com/husseinxali/AIOS/commit/714fedb2c318a115836faa939c5f888c7785b34c))
* improve regex pattern handling and add case-insensitive matching ([#164](https://github.com/husseinxali/AIOS/issues/164)) ([56b43a5](https://github.com/husseinxali/AIOS/commit/56b43a51b13a218044ff6c562c9a33bbab520ff0))
* include addon name in error messages for invalid manifest URLs ([abf99c1](https://github.com/husseinxali/AIOS/commit/abf99c1768f3cf86d6f58ec256705ae235f9d8f9))
* include folderName in exclude and required tests logic ([4ad04c8](https://github.com/husseinxali/AIOS/commit/4ad04c8ce05b7186cd4938cca57602fe245b8729))
* include overrideType in catalog modification check ([db473f3](https://github.com/husseinxali/AIOS/commit/db473f3a32788bb34ed9cede11a24be45979d040))
* increase recursion threshold limit and window for improved request handling ([cc2acde](https://github.com/husseinxali/AIOS/commit/cc2acdeb7ab7dcfdaadc767450065dc8df520f57))
* log errors in more cases, correctly handle partial proxy configuration, correctly handle undefined value in tryDecrypt, only decrypt when defined ([56734f0](https://github.com/husseinxali/AIOS/commit/56734f0956b38998ea802d23e312e0dda2379c88))
* make adjustments to how internal addon IDs are determined and fix some things ([a6515de](https://github.com/husseinxali/AIOS/commit/a6515de2718138cefdad5c4c53617a745ff044c5))
* make behaviorHints optional in manifest schema ([313c6bc](https://github.com/husseinxali/AIOS/commit/313c6bc14e119d62c65bd2cea61eca23af4f4463))
* make keyword pattern case insensitive ([795adb3](https://github.com/husseinxali/AIOS/commit/795adb3e2521a766c92889cc0701e1a8b0d68d96))
* make object validation less strict for parsed streams ([e39e690](https://github.com/husseinxali/AIOS/commit/e39e6900b452b565c6f4c6ed7de151eceb54d38d))
* make types optional in ManifestSchema ([5281756](https://github.com/husseinxali/AIOS/commit/5281756c78e362d3c48cc4469c07c17df9350d9c))
* make types required and provide array based on resources object array ([01cf37f](https://github.com/husseinxali/AIOS/commit/01cf37f8340a9fd130ecb19c93dc7a9863eab012))
* manually override type to http for watchtower and nuviostreams ([1fb00a4](https://github.com/husseinxali/AIOS/commit/1fb00a4317605ee9a5d0da73a4b363bf08b9bf6f))
* **mediaflow:** add api_password query param when getting public IP ([00e305f](https://github.com/husseinxali/AIOS/commit/00e305f4f31d9c78741fb0d8d2585b8478d732ea))
* **mediaflow:** include api_password in public IP endpoint URL only ([279ff00](https://github.com/husseinxali/AIOS/commit/279ff003be87febed59ac6f8edb3f0d0d439659a))
* **mediafusion:** correctly return encoded user data, and fix parsing ([c6a6350](https://github.com/husseinxali/AIOS/commit/c6a63502b6049fd403816114547be42e5f44b305))
* normalize version check ([#206](https://github.com/husseinxali/AIOS/issues/206)) ([05cc116](https://github.com/husseinxali/AIOS/commit/05cc116fafc9ba6d0f40b7e10938e2505085ea10))
* only add addons that support the type only when idPrefixes is undefined ([d7355cb](https://github.com/husseinxali/AIOS/commit/d7355cb5983202d08c5d6f863cf5f2f742a6ad97))
* only add to idPrefixes if not null ([6fb5f7b](https://github.com/husseinxali/AIOS/commit/6fb5f7b841872b0261023766c2472c7f5201be95))
* only allow p2p on its own addon in StremThruTorzPreset ([510c086](https://github.com/husseinxali/AIOS/commit/510c086ab0dfbedd089e06ec063837f9e465695f))
* only carry out missing title check after checking addons and request types ([eff8d50](https://github.com/husseinxali/AIOS/commit/eff8d50006d3814af7a4140b0ad9f599eea6bddc))
* only exclude a file with excludedLanguages if all its languages are excluded ([2dfb718](https://github.com/husseinxali/AIOS/commit/2dfb718fa1bca8ae188c5ff55b2f7b1bf7fbbb10))
* only filter out resources using specified resources when length greater than 0 ([cd78ead](https://github.com/husseinxali/AIOS/commit/cd78ead297b8641d4f45ca224d5455ec649ee429))
* only use the movie/series specific cached/uncached sort criteria if defined ([049f65b](https://github.com/husseinxali/AIOS/commit/049f65b18069a0b8c8b8ae7d34e5981cfa34244e))
* overlapping snippets modal ([#202](https://github.com/husseinxali/AIOS/issues/202)) ([195da69](https://github.com/husseinxali/AIOS/commit/195da69f19ca8e15acd000420c1187fd4116de1f))
* override stream parser for torz to remove indexer ([f0a448b](https://github.com/husseinxali/AIOS/commit/f0a448b489585e22af6bcfffbc3ff0a383e35085))
* **parser:** handle when bluray and remux are not next to each other ([47b1956](https://github.com/husseinxali/AIOS/commit/47b195609e27b25adf04fe7b8aca0b64c72ef1bf))
* **parser:** match against stream.description and apply fallback logic to stream.title ([a1d2fc9](https://github.com/husseinxali/AIOS/commit/a1d2fc9981c967254dcb91d1779310c2fd1f8fba))
* **parser:** safely access parsedFile properties to handle potential undefined values ([e995f97](https://github.com/husseinxali/AIOS/commit/e995f97e2f43063f7e69b179237279d5aaba51e8))
* pass user provided TMDB access token to TMDBMetadata ([d2f4dc1](https://github.com/husseinxali/AIOS/commit/d2f4dc1b8dbe17c17e80ac4698398af5a3757cc9))
* potentially fix regex sorting ([9771c7b](https://github.com/husseinxali/AIOS/commit/9771c7be7f8e19c25cebac4439c42a7ae6766459))
* potentially fix sorting ([887d285](https://github.com/husseinxali/AIOS/commit/887d2850f23e883734f2b56d4545e546c07a5694))
* prefix addon instance ID to ensure uniquenes of stream id ([009d7d1](https://github.com/husseinxali/AIOS/commit/009d7d1cf40a1e4041690d5c217b34003f7d51a2))
* prevent fetching from aiostreams instance of the same user ([963a3f7](https://github.com/husseinxali/AIOS/commit/963a3f7064abf0387d0ce49ffb7773659ea88577))
* prevent mutating options object in OrionPreset ([f8b08b3](https://github.com/husseinxali/AIOS/commit/f8b08b3093e49e50acd52aed439ed3e5c7a0674b))
* prevent pushing errors for general type support to avoid blocking requests to other addons ([b390534](https://github.com/husseinxali/AIOS/commit/b390534dae906235836c3fc4a43b3db27dee8324))
* prevent title from being parsed for info ([f8b2e2d](https://github.com/husseinxali/AIOS/commit/f8b2e2d66ce07ae4342db974ed6f169c0474d1d2))
* reduce timeout duration for resetting values in AddonModal to ensure new modals properly keep their initial values ([9213d78](https://github.com/husseinxali/AIOS/commit/9213d781d176101f8e7826cc187e44188cf346c4))
* refine year matching logic in title filtering for movies ([21f1d3e](https://github.com/husseinxali/AIOS/commit/21f1d3e0210c84936d2c06b238ede488715d0165))
* regenerate lock file after adding wrangler ([f7d28ec](https://github.com/husseinxali/AIOS/commit/f7d28ec0f9abed0a8d9a7da95f8296d283783ddf))
* remove check of non-existent url option in OpenSubtitlesPreset ([dbd5dd6](https://github.com/husseinxali/AIOS/commit/dbd5dd6bd73abf26ad4c408c17af653dae6ed949))
* remove debug logging in getServiceCredentialDefault ([27932a5](https://github.com/husseinxali/AIOS/commit/27932a54ff683faa01052e5cec1cf450ec5d8603))
* remove emojis from filename ([b8bbb17](https://github.com/husseinxali/AIOS/commit/b8bbb178a8c66eaad6fc5b1637492b1358f12645))
* remove empty headers to allow unsetting user agent ([4c9f566](https://github.com/husseinxali/AIOS/commit/4c9f566787d605a5319c57462e96cf72026229db))
* remove idPrefixes from top level manifest ([908b4ff](https://github.com/husseinxali/AIOS/commit/908b4ffa399439ab3f9428357b30a6ae7bc0f29d))
* remove keyword skip reasons ([fdb4849](https://github.com/husseinxali/AIOS/commit/fdb484947a2f8200a1d4a8029a83b802b97ada11))
* remove log pollution ([5b72292](https://github.com/husseinxali/AIOS/commit/5b7229299e0f0dfd80a57ed4367a554574b8a9d8))
* remove max connections limit from PostgreSQL pool configuration ([bff13dc](https://github.com/husseinxali/AIOS/commit/bff13dc22c59bb358926867bceefceca1c36574d))
* remove outdated decoding of credentials causing issues with some credentials ([609931e](https://github.com/husseinxali/AIOS/commit/609931e5318c8b6d782cc04cf6a6691269bba287))
* remove unecessary formatBytes function and display actual max size ([5c9406f](https://github.com/husseinxali/AIOS/commit/5c9406f88e13e538e3683b82c8045899498ec185))
* remove unnecessary UUID assignment in UserRepository class ([c8224bc](https://github.com/husseinxali/AIOS/commit/c8224bc21e496686971e99176d48eb1c859d675e))
* remove unused method handler for unsupported HTTP methods ([7405d27](https://github.com/husseinxali/AIOS/commit/7405d272ab79321d8b1e97ee4bcd1a2b2f8c12a5))
* remove unused regex environment variables from status route ([2fd0522](https://github.com/husseinxali/AIOS/commit/2fd05220a480bd70fca5d383d7477be6e7eb5fb2))
* remove unused regex fields from StatusResponseSchema ([dfef789](https://github.com/husseinxali/AIOS/commit/dfef7895b2ad0c2c0b879ad0ce7e1d4410431eeb))
* rename excludeCached to excludeUncached for clarity ([e9610a3](https://github.com/husseinxali/AIOS/commit/e9610a3af9b48f6f64b0a6f9ff33c72feaf265a6))
* rename web_dl to webdl in stremthru store ([3fb57c5](https://github.com/husseinxali/AIOS/commit/3fb57c5d04e23585e71a5e9f0643735f675671c7))
* replace crypto random UUID generation with a simple counter for unique ID assignment in StreamParser ([11b2204](https://github.com/husseinxali/AIOS/commit/11b220443c67c22de475ab22d32ced033e083740))
* replace hardcoded SUPPORTED_RESOURCES with supportedResources in NuvioStreamsPreset ([4eeeb59](https://github.com/husseinxali/AIOS/commit/4eeeb59186668ad1b2d7975e21ea7b90b501bfa7))
* replace incorrect hardcoded SUPPORTED_RESOURCES with supportedResources in DebridioPreset ([ed73f5d](https://github.com/husseinxali/AIOS/commit/ed73f5de6c66ef408f513f54cafee8d2a22e6965))
* restore TMDBMetadata import in main.ts and enable metadata export in index.ts ([2cd7d4d](https://github.com/husseinxali/AIOS/commit/2cd7d4dfd1ada052dad8b21f79a2ffd24eafc178))
* return original URL when no modifications are made in CometStreamParser ([cbfb4b7](https://github.com/husseinxali/AIOS/commit/cbfb4b7838f5a91a401ce7f4d5b5c1a566b222ee))
* return url when no modifications are needed in JackettioStreamParser ([4791f36](https://github.com/husseinxali/AIOS/commit/4791f360da880758ab5d227d2ada8f27ad2f9c64))
* **rpdbCatalogs:** correct spelling of 'movies' to 'movie' ([9e1960a](https://github.com/husseinxali/AIOS/commit/9e1960a6ddd19e6ad705cab30539d6f2c2107321))
* **rpdb:** improve id parsing logic and include type for tmdb ([18621ca](https://github.com/husseinxali/AIOS/commit/18621ca646bb3765963849fd10e25866b253759d))
* safely access catalogs options and default to false for streamfusion ([9c48fad](https://github.com/husseinxali/AIOS/commit/9c48fad6a620e30730b9da9a8074daf016e24105))
* safely handle errors in custom formats and fallback to gdrive format ([b583325](https://github.com/husseinxali/AIOS/commit/b583325162ce51919dba0b09999d5419582503de))
* save preferred values when adjusting from select menu ([2b329fe](https://github.com/husseinxali/AIOS/commit/2b329fe6feabdcefcb4c4603a772ec8cf8791a0b))
* set default sizeK value to 1024 in StreamParser and remove overridden method in TorrentioParser ([a09dcea](https://github.com/husseinxali/AIOS/commit/a09dcead9bc6107b25dd8829c66d0b49d1dc49e8))
* set public IP to undefined when empty ([32f90fb](https://github.com/husseinxali/AIOS/commit/32f90fb0f3e5a067ba8f3486bfeb366387b28f01))
* simplify and improve validation checks ([dde5af0](https://github.com/husseinxali/AIOS/commit/dde5af02d9dab1634a2c7cd9e9346b4707011848))
* simplify duration formatting in getTimeTakenSincePoint function ([f1afe5f](https://github.com/husseinxali/AIOS/commit/f1afe5f5a26024b6fbc860abbba902da201996d7))
* strict title matching for easynews++ is not passed through ([#170](https://github.com/husseinxali/AIOS/issues/170)) ([a438b2e](https://github.com/husseinxali/AIOS/commit/a438b2e0c9e605e112b37b7d5f4001f64bbf6689))
* truncate addon name and update modal value states to handle changes in props ([14f56d1](https://github.com/husseinxali/AIOS/commit/14f56d12479580033123bbbd312b5bc4ff67f4df))
* try explicitly setting idPrefixes to an empty array ([c16060f](https://github.com/husseinxali/AIOS/commit/c16060f7a5ffa5b5142fe5a0753046748f682f0a))
* try removing types ([10c4e2d](https://github.com/husseinxali/AIOS/commit/10c4e2d51f7a0ba05d6214da1c848b66ec9237ca))
* try setting idPrefixes to null ([a5f32df](https://github.com/husseinxali/AIOS/commit/a5f32df451c7ba73438322c217ffa431e9a84125))
* update addon name formatting in AIOStreamsStreamParser to prefix aiostreams addon name ([eefa184](https://github.com/husseinxali/AIOS/commit/eefa184b7c0e8e3a2f7779360da94254858f6e6f))
* update AIOStream schema export and enhance AIOStreamsStreamParser with validation ([edc310f](https://github.com/husseinxali/AIOS/commit/edc310fe5f213b4e03976aeb815fd51c81be7976))
* update Bengali regex to not match ben the men ([90980c7](https://github.com/husseinxali/AIOS/commit/90980c76363abdec3d1f53ad2b27eb4181bd8131))
* update cached sorting to prefer all streams that are not explicitly marked as uncached ([b16f36d](https://github.com/husseinxali/AIOS/commit/b16f36d4ea80d4a842281814239aaa23430c5c65))
* update default apply mode for cached and uncached filters from 'and' to 'or' ([3fe5027](https://github.com/husseinxali/AIOS/commit/3fe50274dcfdfaea68103f6477cbc30563327f65))
* update default value for ADDON_PASSWORD and SECRET_KEY ([65a4c91](https://github.com/husseinxali/AIOS/commit/65a4c9177cc8da04990c82fbde939fa4c5452637))
* update descriptions for filtering options in menu component to clarify behavior ([67bb204](https://github.com/husseinxali/AIOS/commit/67bb204362951ef3998c690ba1c0055c1a4cc12b))
* update Dockerfile to use default port fallback for healthcheck and expose ([0ffca95](https://github.com/husseinxali/AIOS/commit/0ffca9560460a640b763c2a4cabdd3c4a420b6ca))
* update duration state to use milliseconds and adjust input handling ([3d43673](https://github.com/husseinxali/AIOS/commit/3d43673a66f695a1a7547d95a1ef36cd45d27864))
* update error handling in OrionStreamParser to throw an error instead of returning an error stream for partial success ([bb30b4a](https://github.com/husseinxali/AIOS/commit/bb30b4a19a66c6eb8c3b408e64eea33d927bd8ea))
* update error message for missing addons to suggest reinstallation ([78a0d7f](https://github.com/husseinxali/AIOS/commit/78a0d7f788aaa4ea10e2e69ccbd5d79c72bb17d1))
* update formatter preview ([f3d84bc](https://github.com/husseinxali/AIOS/commit/f3d84bc9778a345e837a698c68c2e28ea71752a4))
* update GDriveFormatter to use 'inLibrary' instead of 'personal' ([f6ef47f](https://github.com/husseinxali/AIOS/commit/f6ef47f3a8f7c781a084ffb3d5ba26615edf77fa))
* update handling of default/forced values ([c60ef6f](https://github.com/husseinxali/AIOS/commit/c60ef6fde9c0de6abc98f2cb2de2a7e981719f3e))
* update help text to include selected proxy name rather than mediaflow only ([af24d67](https://github.com/husseinxali/AIOS/commit/af24d674d1c265f9fe9a37f4528548b25790638e))
* update IP validation logic in getRequestingIp method ([8048ae8](https://github.com/husseinxali/AIOS/commit/8048ae8f7cfa980c98b771622447a4fbe146d47f))
* update MediaFlowProxy to conditionally include api_password in proxy URL for /proxy/ip endpoint ([d0faecc](https://github.com/husseinxali/AIOS/commit/d0faecc563cd7d2c9ed52310ce658b13ee3fc076))
* update MediaFusion logo URL ([3648f94](https://github.com/husseinxali/AIOS/commit/3648f94d0acdebfde842818335f473fb4564d0e7))
* update NameableRegex schema to allow empty name and remove useless regex check ([96d355f](https://github.com/husseinxali/AIOS/commit/96d355ffdabeb4a308b0f99a9f9a198b8a7d8733))
* update Peerflix logo URL ([ab1c216](https://github.com/husseinxali/AIOS/commit/ab1c21695e596d8fb482f299d31bf44f51ba78fa))
* update seeder condition in TorrentioFormatter to allow zero seeders ([c890671](https://github.com/husseinxali/AIOS/commit/c890671a444f6d82e48d9fdce1308913779d7123))
* update service links ([fea2675](https://github.com/husseinxali/AIOS/commit/fea26752ac521415bf8f23ae022d4ecad7b7e731))
* update size filter constraints to allow zero values ([4a8e9c3](https://github.com/husseinxali/AIOS/commit/4a8e9c3f7d2d463c0e800e542ef63ad0dab813b7))
* update social link from Buy Me a Coffee to Ko-fi in DcUniversePreset ([671567c](https://github.com/husseinxali/AIOS/commit/671567cb433a4912e472d02cf975a1f8037ff223))
* update table schema ([f3b4088](https://github.com/husseinxali/AIOS/commit/f3b4088397a7a09bfc0199bcbf769262a0cb1f75))
* update user data merging logic in configuration import ([5ebb539](https://github.com/husseinxali/AIOS/commit/5ebb539a3e2e5d623a3682dfeeb626781bb2dde0))
* update user data reset logic ([9bd9810](https://github.com/husseinxali/AIOS/commit/9bd9810a7a11132c814024e5182229135e23b42f))
* use correct import path for custom format ([5eb3908](https://github.com/husseinxali/AIOS/commit/5eb3908c18b02f25eb44ec508ce41eb3dddf7869))
* use correct input change handlers ([6f3013c](https://github.com/husseinxali/AIOS/commit/6f3013cdc2883ef9214538bb9cafba475f692604))
* use logger and only log when removeIndexes is greater than 0 ([0f4d6b7](https://github.com/husseinxali/AIOS/commit/0f4d6b769d2764ab5ed3962cf762c0988bf2a211))
* use nullish coalescing for seeder info in formatter to allow values of 0 ([3e5d581](https://github.com/husseinxali/AIOS/commit/3e5d581cb0861bfd09a26dbb4bfc318abb579d9a))
* use password type where necessary ([0a12d33](https://github.com/husseinxali/AIOS/commit/0a12d335c34b8181c9ac849bed623ea77b43a84c))
* use structuredClone for config decryption to ensure immutability ([a67603d](https://github.com/husseinxali/AIOS/commit/a67603d669439465756809b3e1ee9c2637a7bcc5))
* wrap handling for join case in block ([85a7775](https://github.com/husseinxali/AIOS/commit/85a777544593b9a76d7cb8930db8e0321e6511fa))
* wrap switch cases in blocks ([16b208b](https://github.com/husseinxali/AIOS/commit/16b208b05b2450771834954cd54a193af79fdc2d))
* **wrapper:** allow empty arrays as valid input in wrapper class ([c64a4f4](https://github.com/husseinxali/AIOS/commit/c64a4f43ceb1b1eb85658a919ce3759df81556a9))
* **wrapper:** enhance error logging for manifest and resource parsing by using formatZodError ([ffc974e](https://github.com/husseinxali/AIOS/commit/ffc974ede622e970fc5f7396d4f1d1658726228a))
* **wrappers/mediafusion:** update getConfigString to correctly output urlsafe string ([4b57349](https://github.com/husseinxali/AIOS/commit/4b57349d7b63da27c04f6aab4390bf1ca12ab1b3))
* **wrappers:** don't set CF-Connecting-IP header ([ea43674](https://github.com/husseinxali/AIOS/commit/ea43674da3c0bf938f73231b3c0edd28fcf0d512)), closes [#139](https://github.com/husseinxali/AIOS/issues/139)


### Performance Improvements

* directly call isMatch for improved performance in pre computation ([da51329](https://github.com/husseinxali/AIOS/commit/da513290906b7465e0c02b3663951971b66ec2fb))
* don't bypass cache and use source instead of toString ([b4e671d](https://github.com/husseinxali/AIOS/commit/b4e671d83fc01d75629e30c9a7593318fb1f986d))
* Implement caching for regex-based sorting to improve performance ([#165](https://github.com/husseinxali/AIOS/issues/165)) ([d4020b0](https://github.com/husseinxali/AIOS/commit/d4020b05a806a99fa07775b64d365e94efe56930))

## [2.0.1](https://github.com/Viren070/AIOStreams/compare/v2.0.0...v2.0.1) (2025-06-19)


### Bug Fixes

* add audio channel to skipReasons ([ef1763c](https://github.com/Viren070/AIOStreams/commit/ef1763cbe60fe5c279138a152e1a8d677f30f0ce))
* correctly handle overriding URL for mediafusion ([9bf3838](https://github.com/Viren070/AIOStreams/commit/9bf3838732542c5cac1ef189cd5afefc13fe0204))
* ensure instances is defined ([7e00e32](https://github.com/Viren070/AIOStreams/commit/7e00e32bbe93a5610d4f94bc3d78a78e48d32c6b))

## [2.0.0](https://github.com/Viren070/AIOStreams/compare/v1.22.0...v2.0.0) (2025-06-18)

### 🚀 The Big Upgrades in v2 🚀

- **Beyond Just Streams:** AIOStreams v2 now supports more than just stream addons! You can integrate **any supported Stremio addon type**, including **Catalog addons, Subtitle addons, and even Addon Catalog addons** into your single AIOStreams setup. Now it truly can do _everything_!
- **100% Addon Compatibility:** That's right! AIOStreams v2 is designed to work with **100% of existing Stremio addons** that adhere to the Stremio addon SDK.
- **Sleek New UI**: The entire interface has been redesigned for a more modern, intuitive, and frankly, beautiful configuration experience.

_This new configuration page was only possible thanks to [Seanime](https://seanime.rahim.app), a beautiful application for anime_

---

### ✨ Feature Deep Dive - Get Ready for Control! ✨

This rewrite has paved the way for a TON of new features and enhancements. Here’s a rundown:

**🛠️ Configuration Heaven & Built-in Marketplace:**

- The configuration page now features a **built-in marketplace for addons**. This makes it super easy to discover and add new addons, displaying their supported resources (streams, catalogs, subtitles, etc.), Debrid services they integrate with, and stream types (torrent, http, usenet, live etc.).
- You can now **quickly enable or disable individual addons** within your AIOStreams setup without fully removing them. This is particularly useful because tools like StremThru Sidekick wouldn't be able to detect or manage the individual addons _inside_ your AIOStreams bundle, but with AIOStreams' own UI, you have that fine-grained control.
- Remember, the marketplace is just there for convenience. You can still add any addon you want using the 'Custom' addon at the top of the marketplace and use an addons manifest URL to add it to AIOStreams.

**📚 Supercharged Catalog Management:**

- **Total Catalog Control:** Reorder your catalogs exactly how you want them, **regardless of which addon they originate from!** Mix and match to your heart's content.
- **Granular Management:** Enable/disable specific catalogs, apply **shuffling** to individual catalogs - and control how long a shuffle lasts, **rename catalogs** for a personalized touch, and you can even **disable certain catalogs from appearing on your Stremio home page**, having them only show up in the Discover section for a cleaner look!
- **Universal RPDB Posters:** Ever wanted those sleek posters with ratings on _any_ catalog? Now you can! Apply **RPDB posters (with ratings) to any addon that uses a supported ID type (like IMDB or TMDB ID), even if the original addon doesn't support RPDB itself.** Yes, this means you could add RPDB posters to Cinemeta if you wanted!
- **Why not just use other tools like StremThru Sidekick or the Addon Manager for catalogs?**
  - **Broader Compatibility:** Both StremThru Sidekick and Addon Manager are primarily limited to managing addons _for Stremio itself_. AIOStreams’ catalog features can be utilized by _any application_ that supports Stremio addons, not just Stremio.
  - **True Internal Reordering:** Neither of those tools supports reordering catalogs _within an addon itself_. Since AIOStreams presents all its combined catalogs as coming from _one addon_, those tools wouldn't be able to reorder the catalogs _inside_ your AIOStreams setup. AIOStreams gives you that crucial internal control.
  - **Safety:** AIOStreams does **not** make use of the Stremio API for its core functionality. This means it operates independently and **cannot break your Stremio account** or interfere with its settings.

**🌐 Expanded Addon Ecosystem:**

- The built-in marketplace comes packed with **many more addons than before**.
- Some notable new stream addons include: **StremThru Torz, Nuvio Streams, Debridio Watchtower, StreamFusion**, and even built-in support for **wrapping AIOStreams within AIOStreams** (AIOception!).

**💎 Revolutionary Grouping Feature:**

- This is a big one! I've implemented a **new grouping feature** that allows you to group your addons and apply highly customizable conditions.
- Streams from addons in Group 1 are always fetched. Then, you can set conditions for subsequent groups. For example, for Group 2, you could set a condition like `count(previousStreams) < 5`. This means addons in Group 2 will only be queried if the total number of streams found by Group 1 is less than 5. This means you can tell AIOStreams, for instance, to only tap into your backup/slower addon group if your main, preferred addons don't find enough streams first – super efficient!
- This allows for incredibly optimized and tailored stream fetching. (For more advanced setups and details, I highly recommend checking out the **[Wiki](https://github.com/Viren070/AIOStreams/wiki/Groups)**).

**🔎 Next-Level Filtering System:**

- The filtering system has been completely revamped. Previously, you could mainly exclude or prefer. Now, for _every_ filter criteria, you can set **four different filter types**:
  - **Include:** If matched, this item won't be excluded by other exclude/required filters for _any other exclude/required filter_.
  - **Required:** Exclude the stream if this criteria is _not_ detected.
  - **Exclude:** Exclude the stream if this criteria _is_ detected.
  - **Preferred:** This is used for ranking when you use that filter as a sort criteria.
- **New Filters Added:**
  - **Conditions Filter:** This incredibly flexible filter uses the same powerful condition parser as the "Groups" feature. You can now enter **multiple filter conditions**, and any stream that matches _any_ of the conditions you define will be filtered out. This allows for an almost infinite number of ways to combine and exclude streams with surgical precision! For example, a condition like `addon(type(streams, 'debrid'), 'TorBox')` would exclude all Debrid-type streams _only_ from the "TorBox" addon, leaving its Usenet streams untouched.
  - **Matching:** This powerful filter helps ensure you get the right content. It includes:
    - **Title Matching:** Filter out results that don't match the requested title. You can choose between an "exact match" mode or a "contains" mode for flexibility. **You can optionally also match the year too.**
    - **Season/Episode Matching:** Specifically for series, this mode filters out results with incorrect season or episode numbers, ensuring accuracy. This can be granularly applied to only specific addons or request types.
  - **Audio Channels:** This was previously part of the Audio Tag filter but is now its own dedicated filter for more precise control (e.g., filter for 5.1, 7.1).
  - **Seeders:** Define include/required/exclude ranges for seeders. Finally, you can set a **minimum seeder count** and automatically exclude results below that threshold!
- **Adjusted & Enhanced Filters:**
  - **Cache:** Get fine-grained control over cached/uncached content. You can now exclude uncached/cached content from specific Debrid services or addons, and even for specific stream types. For example, you could filter out all uncached _torrents_ but still allow uncached _Usenet_ results.
  - **Clean Results (now "Deduplicator"):** This is now far more customizable! You can modify what attributes are used to identify duplicates (e.g., infohash, filename) and how duplicates are removed for each stream type. For instance, for cached results, you might want one result from each of your Debrid services, while for uncached results, you might only want the single best result from your highest priority service.
  - **Size:** You can now set **individual file size ranges for each resolution** (e.g., 1-2GB for 720p, 3-5GB for 1080p, etc.).

**📺 Smarter Sorting & Display:**

- Define **different sorting priorities for cached vs. uncached media**, and also **different sorting for movies vs. series.**
- **New "Light GDrive" Formatter:** For those who prefer a cleaner look but still need key information from the filename, this formatter only shows the title, year, and season/episode info (e.g., "Movie Title (2023) S01E01"), making sure you don't potentially choose an incorrect result while still keeping the text to a minimal level.
  - And of course, you can always join our Discord server to discover custom display formats shared by the community and easily use them with AIOStreams' custom formatter feature!

**✨ Quality of Life Enhancements:**

- **Import/Export Configurations:** You can now easily **export your entire AIOStreams configuration into a file.** This file can then be imported into any AIOStreams instance at any time – perfect for backups or migrating to a new setup.
  - **Shareable Templates:** There's an "Exclude Credentials" option when exporting, making it easy to share template configurations with others!
  - **⚠️ Important Warning:** While the "Exclude Credentials" feature removes sensitive information you enter _directly_ into AIOStreams (like API keys), it **does not** modify or exclude URLs you provide for "Custom" addons or when you override an addon's default URL. These URLs can potentially contain sensitive tokens or identifiers, so please review them carefully before sharing a configuration file.
- **External Downloads:** For added convenience, AIOStreams v2 now adds an "External Download" link below each stream result. Clicking this will open the direct download link for that stream in your browser, making it easy to grab a copy of the content if needed.
- **Hide Errors:** Optionally hide error messages, and you can even specify this for particular resources (e.g., hide errors only for stream fetching, but show them for catalog fetching).
- **Precache Next Episode:** When you're watching a series, AIOStreams can automatically request results for the _next_ episode in the background. If it finds that all available results are uncached, it can **ping the first uncached result for your preferred Debrid service to start downloading it.** The goal? By the time you finish your current episode, the next one might already be cached and ready to stream instantly!

**A Note on Options:** AIOStreams v2 offers a vast array of configuration options, especially within the filtering system. While this provides incredible power and flexibility for advanced users, please remember that **most users won't need to dive deep into every setting.** The default configurations are designed to be sensible and provide a great experience out-of-the-box! For a detailed explanation of every option and how to fine-tune your setup, the **[AIOStreams v2 Configuration Guide](https://guides.viren070.me/stremio/addons/aiostreams)** has been fully updated and is your best resource.

---

### 💾 Under The Hood: The New Database Foundation 💾

- **Database-Driven:** AIOStreams is now database-based! This means your configurations are stored securely. When you create a configuration, it's assigned a **unique UUID** that you'll use to access it in Stremio.
- **Password Protected:** You'll protect your configurations with a **password**. Without it, no one else can access your configuration.
- **Seamless Updates (Mostly!):** A huge benefit of being database-driven is that for most setting changes, there’s **no longer a need to reinstall the addon in Stremio!** Just update your configuration, and the changes apply automatically.
  - **Note:** The only exception is if you make changes to your catalogs that affect their order or which addons provide them (e.g., reordering addons in the list, adding/removing catalog-providing addons). In this specific case, a reinstall of the AIOStreams addon in Stremio is needed for Stremio to pick up the new catalog structure.

---

### ⚠️ Important Notes & Caveats for v2 ⚠️

- **Migration Requires Reconfiguration:** Due to the extensive changes and the new database system, existing AIOStreams users will need to **reconfigure their setups for v2.** Think of it as a fresh start with a much more powerful system! The **[v1 to v2 Migration Guide](https://github.com/Viren070/AIOStreams/wiki/Migrate-to-V2)** on the Wiki can help. For a deep dive into all the new settings, refer to the comprehensive **[AIOStreams v2 Configuration Guide](https://guides.viren070.me/stremio/addons/aiostreams)**. **If you use custom formatters, you should also check the migration guide for minor syntax adjustments.**
- **Torrentio support (on public instance)?** Torrentio, the most popular addon, was disabled for most of v1's history due to the way it works (multiple requests appear to come from one IP, which is problematic for public instances). Torrentio remains **disabled on the public instance**, and this will not change. Self-hosted instances will have Torrentio enabled by default. The developer of Torrentio has personally stated that he does not want ElfHosted's public instances scraping Torrentio.
- **Cloudflare Worker Support Dropped:** Maintaining compatibility with Cloudflare Workers alongside the new database requirements and feature set became infeasible. It was essentially like writing and maintaining two different versions of the addon. As such, direct Cloudflare Worker support has been dropped.
- **Free Hosting Challenges:** AIOStreams v2 now **requires a database** for storing configurations. Many free hosting services do not provide persistent database storage (or have very limited free tiers), which can lead to your configurations being wiped when the instance restarts.
  - For example, **Hugging Face Spaces** requires a paid tier for persistent storage.
  - **Koyeb's** free tier does not offer persistent file storage for the SQLite database, however, Koyeb _does_ provide a free PostgreSQL database instance which AIOStreams v2 can use, offering a viable free hosting path if configured correctly.
    I recommend looking for hosting solutions that offer persistent storage or a compatible free database tier if you plan to self-host on a free platform.

---

### 🔧 Self-Hosting AIOStreams & Self-Hosting Guides 🔧

For those of you who like to have full control over your setup, **AIOStreams v2 is, of course, _still_ self-hostable!**

If you're migrating your instance from v1 to v2, read the [Migration](https://github.com/Viren070/AIOStreams/wiki/Migrate-to-V2) page on the Wiki to ensure nothing unexpected happens.

A few months back, I started out knowing very little about self-hosting (I was using Hugging Face to host my personal AIOStreams instance back then) and I've since decided to dive into self-hosting.

As a result, I've put together a **set of comprehensive self-hosting guides** that I'm excited to share with the community. My goal with these guides is to take you **from scratch to hosting all sorts of addons and applications**, including AIOStreams, without spending a dime or needing any hardware other than a laptop/computer. (Some of you may even be able to set this all up just using your phone/tablet)

The guides cover:

- Securing a **free Oracle Cloud VPS** (yes, free!).
- Installing **Docker** and getting comfortable with its basics.
- Utilizing my **highly flexible and detailed template compose project.** This Docker Compose setup is designed to be a launchpad for your self-hosting adventures and includes configurations for **countless apps, with AIOStreams v2 ready to go!**

If you've ever been curious about self-hosting but didn't know where to start, I believe these guides can help you get up and running with a powerful, remote, and secure setup.

- **https://guides.viren070.me/selfhosting**

---

### 💬 Join the AIOStreams Community on Discord! 💬

AIOStreams v2 wouldn't be where it is today without the feedback, bug reports, and ideas from our community. A Massive **THANK YOU** to everyone on Discord who took part in testing, shared suggestions, and patiently helped polish every feature. Your involvement genuinely shaped this release!

To celebrate the launch, I'm running a **1-year Real-Debrid giveaway (with 2 winners)** exclusively in the Discord server! Just join the server for your chance to win.

Outside of the giveaway, you can also join our server for:

- Questions about and support for AIOStreams
- Receive help with self hosting
- Discover setups shared by the community like formats, regexes, group filters, condition filters etc. (and possibly even share your own!)
- Staying updated on the latest AIOStreams developments

Join our server using the link below:

- **https://discord.viren070.me**

---

### ❤️ Support AIOStreams Development ❤️

AIOStreams is a passion project that I develop solo in my free time. Countless hours have gone into this v2 rewrite, and I'm committed to making it the best it can be.

If you find AIOStreams useful and want to support its continued development, please consider donating. Any amount is hugely appreciated and helps me dedicate more time to new features, bug fixes, and support.

- **[Sponsor me on GitHub](https://github.com/sponsors/Viren070)**
- **[Buy me a coffee on Ko-fi](https://ko-fi.com/viren070)**

---

### 🚀 Get Started with AIOStreams v2! 🚀

I'm incredibly excited for you all to try out AIOStreams v2! I believe it's a massive step forward. Please give it a go, explore the new features, and share your feedback.

Here’s how you can jump in:

**1. Try the Public Instance (Easiest Way!)**

- **ElfHosted (Official Public Instance):** Generously hosted and maintained.
  - **Link:** **https://aiostreams.elfhosted.com/**

**2. Self-Host AIOStreams v2**

- **For New Self-Hosters:** If you know what you're doing - follow the [Deployment Wiki](https://github.com/Viren070/AIOStreams/wiki/Deployment). Otherwise, check out my comprehensive **[Self-Hosting Guides](https://guides.viren070.me/selfhosting)** to get started from scratch.
- **Migrating from v1?** If you're currently self-hosting v1, ensure your setup supports persistent storage and then follow the **[v1 to v2 Migration Guide](https://github.com/Viren070/AIOStreams/wiki/Migrate-to-V2)**.

**3. Managed Private Instance via ElfHosted (Support AIOStreams Development!)**

- Want AIOStreams without the self-hosting hassle? ElfHosted offers private, managed instances.
- ✨ **Support My Work:** If you sign up using my referral link, **33% of your subscription fee directly supports AIOStreams development!**
  - **Get your ElfHosted AIOStreams Instance:** **https://store.elfhosted.com/product/aiostreams/elf/viren070**

This release marks a new chapter for AIOStreams, and I can't wait to see how you all use it to enhance your Stremio experience.

Cheers,

Viren.

See the commit breakdown below:

### Features

- add 'onlyOnDiscover' catalog modifier ([4024c01](https://github.com/Viren070/AIOStreams/commit/4024c01b0a55cdd18023cf4d9328f38d3b5c29d0))
- add alert and socials options to schema, implement SocialIcon component, and update TemplateOption to render new option types ([a0a3c82](https://github.com/Viren070/AIOStreams/commit/a0a3c8231ae77cd379eb39ba68ef437b15b0a4e5))
- add alert option to DebridioTmdbPreset and TmdbCollectionsPreset for language selector clarification ([093f90a](https://github.com/Viren070/AIOStreams/commit/093f90a3eeafb540aaf28638557ad75a8f1e44d9))
- add aliased configuration support ([5df60d7](https://github.com/Viren070/AIOStreams/commit/5df60d7085a0b5f938c8f135c93c29286aed566b))
- add anime catalogs ([5968685](https://github.com/Viren070/AIOStreams/commit/59686852d3b7c2e3f0f8e204bcf8b765aadb29f7))
- add anime specific sorting and add help box to sort menu ([77ee7b4](https://github.com/Viren070/AIOStreams/commit/77ee7b48c465d67e2e105d1c134d88cd96b27093))
- add api key field and handle encrypted values correctly. ([6a5759d](https://github.com/Viren070/AIOStreams/commit/6a5759d60e27ec83101a3f1b02284ad8242faea9))
- add asthetic startup logs ([fdbd282](https://github.com/Viren070/AIOStreams/commit/fdbd2821101bd8de0f9ffc4030a6b4938c43ec70))
- add audio channel filter and fix unknown filtering not working in some cases ([df546d3](https://github.com/Viren070/AIOStreams/commit/df546d3a0c9ca39e772a64980a6aa582a4e9c81a))
- add built-in torrentio format ([6fa1b2b](https://github.com/Viren070/AIOStreams/commit/6fa1b2b0c0cb45e9344163989009238d528d330b))
- add configurable URL modifications for Stremthru Store and Torz ([3ce9dd0](https://github.com/Viren070/AIOStreams/commit/3ce9dd0ff5e5b7e9298bef87b3c5abe12c96afc9))
- add delete icon to preferred list, only load valid values, fix password requirement check for new logins, fix spellings and add types ([d845c0c](https://github.com/Viren070/AIOStreams/commit/d845c0ce8bfb040c800355e97ea552758ad3c719))
- add doctor who universe ([048c612](https://github.com/Viren070/AIOStreams/commit/048c612896723acffe908459c381dd1ee6f63784))
- add donation modal button at top of about menu ([0170267](https://github.com/Viren070/AIOStreams/commit/01702671d59d7b924f4693e30b4f8fb1efaeaa15))
- add external download streams option ([952a050](https://github.com/Viren070/AIOStreams/commit/952a05057cfbd9446f19ea4e7c71e26ae8acee89)), closes [#191](https://github.com/Viren070/AIOStreams/issues/191)
- add folder size, add smart detect deduplicator, parse folder size for mediafusion, improve size parsing ([52fb3bb](https://github.com/Viren070/AIOStreams/commit/52fb3bb41c9b59433e00695c61fd643724c1bff4))
- add health check to dockerfile ([8c68051](https://github.com/Viren070/AIOStreams/commit/8c680511edb2c5936bebdab5931bd32a968bcc9e))
- add infohash extractor in base stream parser ([4b1f45d](https://github.com/Viren070/AIOStreams/commit/4b1f45da3a8c3eff9b9a2d675332267cbedf6722))
- add keepOpenOnSelect prop to Combobox for customizable popover behavior and set it to true by default ([f32a1a1](https://github.com/Viren070/AIOStreams/commit/f32a1a1002937023cb50a9b5d230950f9981aaba))
- add link to wiki in groups and link to predefined formatter definitions ([7f4405e](https://github.com/Viren070/AIOStreams/commit/7f4405e3574cdd230cc2112125163408738d2685))
- add more addons and fix stuff ([51f6bd6](https://github.com/Viren070/AIOStreams/commit/51f6bd606c1d4db184b7e9c497f8e63aaf3c03cc))
- add nuviostreams and anime kitsu ([34ed384](https://github.com/Viren070/AIOStreams/commit/34ed3846da218065ad89f840e739ec541109158a))
- add opensubtitles v3 ([b4f6927](https://github.com/Viren070/AIOStreams/commit/b4f69273a4de6572dafcd5b121910048da3cb3aa))
- add P2P option and enhance service handling in StremthruTorzPreset ([6390995](https://github.com/Viren070/AIOStreams/commit/6390995eebbd96ab524c3980b103500ecc8300ad))
- add predefined format definitions for torbox, gdrive, and light gdrive ([e3294eb](https://github.com/Viren070/AIOStreams/commit/e3294eb7e9403e457d622e848bbf81534e92c9e6))
- add public ip option and load forced/default value to proxy menu ([3c2c59e](https://github.com/Viren070/AIOStreams/commit/3c2c59e676144dba70ba9c3675f3767eab4991ea))
- add regex functions to condition parser ([731c1d0](https://github.com/Viren070/AIOStreams/commit/731c1d002cb2fa2bce79f7b20df27f4e6e726e2b))
- add season/episode matching ([4cd6522](https://github.com/Viren070/AIOStreams/commit/4cd6522417bb15eb37d23a39b6556ff8aa41838e))
- add seeders filters ([653b306](https://github.com/Viren070/AIOStreams/commit/653b30632154c31c1036b76bc84e013253539a47))
- add sensible built-in limits and configurable limits, remove unused variables from Env ([37259d9](https://github.com/Viren070/AIOStreams/commit/37259d90f133e57571a896929aa9c023027fad6e))
- add shuffle persistence setting and improve shuffling ([e6286bc](https://github.com/Viren070/AIOStreams/commit/e6286bcf9bdbf509722e68879803485cc7926c62))
- add size filters, allowing resolution specific limit ([fcec2b9](https://github.com/Viren070/AIOStreams/commit/fcec2b9ed850a852c4254306421c91b82c8a6c54))
- add social options to various presets ([ea02be9](https://github.com/Viren070/AIOStreams/commit/ea02be99a714e03687b603848f4157e1150aa817))
- add source addon name to catalog and improve ui/ux ([878cd7c](https://github.com/Viren070/AIOStreams/commit/878cd7c71fd648072dc9ec2c8de53428eb79a93c))
- add stream passthrough option, orion, jackettio, dmm cast, marvel, peerflix, ([0383671](https://github.com/Viren070/AIOStreams/commit/038367126eb4e9fa327101163a12b4ef6dc9b7e6))
- add stream type exclusions for cached and uncached results ([18e034f](https://github.com/Viren070/AIOStreams/commit/18e034f7bfb092c053405244a6f972aff44cf1d1))
- add StreamFusion ([8b34be3](https://github.com/Viren070/AIOStreams/commit/8b34be3845a86bddf0b95d9aab43607cf9223a92))
- add streaming catalogs ([4ce36f1](https://github.com/Viren070/AIOStreams/commit/4ce36f1ba0a8b3149cb9823b7499d625e0e285dd))
- add strict title matching ([c4991c6](https://github.com/Viren070/AIOStreams/commit/c4991c678db0333587e57a632e68f26a650ea24a))
- add support for converting ISO 639_2 to languages and prevent languages being detected as indexer in Easynews++ ([938323f](https://github.com/Viren070/AIOStreams/commit/938323f1dd5a4a333275c506afa1c85a8c9af361))
- add support for includes modifier for array ([90432ae](https://github.com/Viren070/AIOStreams/commit/90432ae9c8b93b7bc1ba4a7a677f7a576b946cd7))
- add webstreamr, improve parsing of nuviostream results, validate tmdb access token, always check for languages ([dc50c6c](https://github.com/Viren070/AIOStreams/commit/dc50c6c70b94df7cc0124bbc8b2f96df01011b38))
- adjust addons menu ([6d0a088](https://github.com/Viren070/AIOStreams/commit/6d0a088c395aacb7123a66c12d01df1547733f37))
- adjust default user data ([dea5950](https://github.com/Viren070/AIOStreams/commit/dea595055a1cb5ce07f26b64faa209bbaa71dd7a))
- adjust handling of meta requests by trying multiple supported addons until one succeeds ([9fab116](https://github.com/Viren070/AIOStreams/commit/9fab1162c004fa7c5f4b73b522527ec0ed142b8a))
- adjustments and proxy menu ([0c5479c](https://github.com/Viren070/AIOStreams/commit/0c5479c12997dc755b34897a4ed1814c2140dacb))
- allow editing catalog type ([d99a29f](https://github.com/Viren070/AIOStreams/commit/d99a29fd6e97b010d41047d61522ce49a7084ade))
- allow passing flags through ([bec91a8](https://github.com/Viren070/AIOStreams/commit/bec91a8a5835b340003381d99ebd5b02596dca4b))
- cache RPDB API Key validation ([63622e0](https://github.com/Viren070/AIOStreams/commit/63622e0a07c64b45a228a1f3f653449744ec96e4))
- changes ([e8c61a9](https://github.com/Viren070/AIOStreams/commit/e8c61a986066e1bdd06f00c5e3a4ff215ae5f968))
- changes ([13a20a7](https://github.com/Viren070/AIOStreams/commit/13a20a7b610da0f41b40ccaf454a31805b445e9e))
- clean up env vars and add rate limit to catalog api ([20fc37c](https://github.com/Viren070/AIOStreams/commit/20fc37cc123bacf729c57ae0718d6e85d02d4bb9))
- **conditions:** add support for multiple groupings, and add type constant ([2a525b2](https://github.com/Viren070/AIOStreams/commit/2a525b292ef98a8e5a6697f967474714d0ceec23))
- enhance language detection in MediaFusionStreamParser to parse languages from stream descriptions ([50db0e2](https://github.com/Viren070/AIOStreams/commit/50db0e2714f5f040660f47efa3012b41ae8da55d))
- enhance stream parsing to prefer folder titles when available ([4001fae](https://github.com/Viren070/AIOStreams/commit/4001faede127a5712c3112ea334726bd18717c7d))
- enhance strict title matching with configuration options for request types and addons ([3378851](https://github.com/Viren070/AIOStreams/commit/3378851ff8048216529a9d1a6715d3b9d1439d39))
- enhance title matching by adding year matching option and updating metadata handling ([62752ef](https://github.com/Viren070/AIOStreams/commit/62752ef98c75741e59e70a08ce811b1e032dc8a9))
- expand cache system and add rate limiting to all routes, attempt to block recursive requests ([c9356db](https://github.com/Viren070/AIOStreams/commit/c9356db83ab311261c001702ea5a31193a4b0432))
- filter out invalid items in wrapper repsponses, rather than failing whole request. add message parsing for torbox ([da7dc3a](https://github.com/Viren070/AIOStreams/commit/da7dc3a935d29ec66c9c7509313268c16c3e4f1a))
- fix condition parsing for unknown values and separate cached into cached and uncached function for simplicity ([3d26421](https://github.com/Viren070/AIOStreams/commit/3d26421b6878cf21edd6c648f5b61f125bf6cb4d))
- **frontend:** add customization options for addon name and logo in AboutMenu ([47cc8f6](https://github.com/Viren070/AIOStreams/commit/47cc8f6dd6287d214ba34b0413fee784adbc52a7))
- **frontend:** add descriptions to addons and catalog cards ([98c5b71](https://github.com/Viren070/AIOStreams/commit/98c5b71f1e364dc2eb9d97448c2cf5d2bf42b12a))
- **frontend:** add shuffle indicator to catalog item ([edd1e4f](https://github.com/Viren070/AIOStreams/commit/edd1e4f8093a9cbb24278f4470d05ff6732acd15))
- **frontend:** add tooltip for full service name in service tags for addon card ([5b8ec4d](https://github.com/Viren070/AIOStreams/commit/5b8ec4d9e75822d3ec39e55d5ae503d5f7c5a51f))
- **frontend:** add valid formatter snippets and add valid descriptions for proxy services ([12b3f42](https://github.com/Viren070/AIOStreams/commit/12b3f423c0fd1706b9014996978e737d246fcac1))
- **frontend:** enhance nightly version display with clickable commit link ([84d53cb](https://github.com/Viren070/AIOStreams/commit/84d53cbdcf835d797312245dc9377da71b0b54d7))
- **frontend:** hide menu control button text on smaller screens ([2361e5c](https://github.com/Viren070/AIOStreams/commit/2361e5c373253db928027c2da0ca0eaa54f35579))
- **frontend:** improve addons menu, preserve existing catalog settings ([2c5c642](https://github.com/Viren070/AIOStreams/commit/2c5c642b022601e3a41ed74934bd29538eec9d71))
- **frontend:** improve services page ([384bdc3](https://github.com/Viren070/AIOStreams/commit/384bdc3a52d67bc85b33f2338b0076d7bd165fc1))
- **frontend:** make catalog card title consistent with other cards ([5197331](https://github.com/Viren070/AIOStreams/commit/5197331a79093065f8de326f76bfb2add9c0050a))
- **frontend:** services page, parse markdown, toast when duplicate addon ([3bc2538](https://github.com/Viren070/AIOStreams/commit/3bc25387f521792d5a2455a600d459176767497e))
- **frontend:** update addon item layout for improved readability ([589e639](https://github.com/Viren070/AIOStreams/commit/589e639870fe9618dcee6e7e221750b1d8a9e17c))
- **frontend:** use NumberInput component ([77edb07](https://github.com/Viren070/AIOStreams/commit/77edb07831ac6c4daf628e044fd369534fb58fcc))
- **frontend:** use queue and default regex matched to undefined ([2c97ec0](https://github.com/Viren070/AIOStreams/commit/2c97ec04cde252ffdeafac25ecbe5c02148b4385))
- identify casted streams from DMM cast as library streams and include full message ([6fd5f5b](https://github.com/Viren070/AIOStreams/commit/6fd5f5b9c03e46667255c9949b3c98b176724ebd))
- implement advanced stream filtering with excluded conditions ([302b4cb](https://github.com/Viren070/AIOStreams/commit/302b4cb5c99fe00f21b5b775ef2187f4088717a9)), closes [#57](https://github.com/Viren070/AIOStreams/issues/57)
- implement cache statistics logging and configurable interval ([8594ca0](https://github.com/Viren070/AIOStreams/commit/8594ca0374be534cb89dbbee427805202cc08ce6))
- implement config validation and addon error handling ([f7b14cd](https://github.com/Viren070/AIOStreams/commit/f7b14cd1dbe54d714fe41881ff9993107746b895))
- implement detailed statistics tracking and reporting for stream deduplication process ([89eac41](https://github.com/Viren070/AIOStreams/commit/89eac415a422189d80a3c3c66cde26762bd7f437))
- implement disjoint set union (DSU) for stream deduplication, ensuring multiple detection methods are handled correctly ([b0cc718](https://github.com/Viren070/AIOStreams/commit/b0cc718a094f22b4c0cec870e5b06e2ec9e1e7e9))
- implement import functionality via modal for JSON files and URLs in TextInputs component ([32b5a5b](https://github.com/Viren070/AIOStreams/commit/32b5a5b7bdfc9b2b27e15eddf060555e6b9c0596))
- implement MAX_ADDONS and fix error returning ([ae74926](https://github.com/Viren070/AIOStreams/commit/ae74926ce2e04710771a7166e946f87166985188))
- implement pre-caching of the next episode ([980682c](https://github.com/Viren070/AIOStreams/commit/980682cd28e40f84caf1c8f1072fd79ec49ac62b))
- implement timeout constraints in preset options using MAX_TIMEOUT and MIN_TIMEOUT ([e415a70](https://github.com/Viren070/AIOStreams/commit/e415a70485fdd33bf5d9b1379d3ede633ea60475))
- implement user pruning functionality with configurable intervals and maximum inactivity days ([0bf6fcb](https://github.com/Viren070/AIOStreams/commit/0bf6fcbe9c484c4df6582d76d3bd8fd10567f34b))
- improve config handling, define all skip reasons, add env vars to disable addons/hosts/services, ([a301002](https://github.com/Viren070/AIOStreams/commit/a301002ba49fce87e40a28a650e411e5078f769b))
- improve formatting of zod errors when using unions ([9c2a970](https://github.com/Viren070/AIOStreams/commit/9c2a970c7d612c9432db70a011663f3f241072ca))
- improve French language regex to include common indicators ([163352a](https://github.com/Viren070/AIOStreams/commit/163352a1909faf4e4b45b56222ba08afa023fd7e))
- improve handling of unsupport meta id and type ([3779ea0](https://github.com/Viren070/AIOStreams/commit/3779ea09d392ffb3f14b7efcba989ec7cc44bf89))
- improve preset/parser system and add mediafusion, comet, stremthru torz, torbox, debridio, en, en+, en+ ([b70a763](https://github.com/Viren070/AIOStreams/commit/b70a763e8b6dc9cfbaf865c8526dd078e1965cb8))
- include preset id in formatter ([6053855](https://github.com/Viren070/AIOStreams/commit/6053855f9a3dc5b32bcd8296161ef8ac6df18df8))
- make `BASE_URL` required and disable self scraping by default ([d572c04](https://github.com/Viren070/AIOStreams/commit/d572c047e9da4d3cf5be645fd2125b3781b80898))
- make caching more configurable and add to sample .env ([1e65fd9](https://github.com/Viren070/AIOStreams/commit/1e65fd9e7dddfe3a0bb9bcf07d77d03fbadf846a))
- match years for series too, but don't filter out episode results without a year ([8394f09](https://github.com/Viren070/AIOStreams/commit/8394f0969da665b31074c8e6b9fc15bf9e731b2a))
- move 'custom' preset to the beginning ([0b85ff3](https://github.com/Viren070/AIOStreams/commit/0b85ff35e7eba5f62579e117621b212122fd8eca))
- **parser:** add support for additional video quality resolutions (144p, 180p, 240p, 360p, 576p) in regex parser ([59d86ff](https://github.com/Viren070/AIOStreams/commit/59d86ffcbfe4d576c49903cdeb8adf197b811963))
- prefer results with higher seeders when deduping ([aed775c](https://github.com/Viren070/AIOStreams/commit/aed775c6d5a2b983dc04adbd15b7409a8b11a3a0))
- proxy fixes and log adjustments ([091394b](https://github.com/Viren070/AIOStreams/commit/091394b837565f59815bb968dea13fdc356b6160))
- remove duplicated info from download streams ([4901745](https://github.com/Viren070/AIOStreams/commit/49017450b9958eabc5a04a098401f2a2561a8e26))
- remove useMultipleInstances and debridDownloader options for simplicity and force multiple instances. ([8c0622e](https://github.com/Viren070/AIOStreams/commit/8c0622ea984082dc8c8f678c12d8c962967a70c1))
- rename API Key to Addon Password and update related help text in save-install component ([b63813c](https://github.com/Viren070/AIOStreams/commit/b63813c29db53b5a3fbf83c6c042ee10fdda739d))
- rename cache to cached in condition parser ([db68a5c](https://github.com/Viren070/AIOStreams/commit/db68a5c0266a5aa05068c4bcbc0c0f0532cd6097))
- replace custom HTML div with SettingsCard component for consistent styling ([8611523](https://github.com/Viren070/AIOStreams/commit/86115230bfd5958374294896adc59c83f28d3fee))
- revert 89eac415a422189d80a3c3c66cde26762bd7f437 ([34b57c9](https://github.com/Viren070/AIOStreams/commit/34b57c9883901722736cb5d52e0911f6434ddfe3))
- service cred env vars, better validation, handling of encrypted values ([61e21cd](https://github.com/Viren070/AIOStreams/commit/61e21cd803981899b4e445c5058fb546db79096d))
- start ([3517218](https://github.com/Viren070/AIOStreams/commit/35172188081b688011031439ec26b11e428dd02d))
- stuff ([0c9c86c](https://github.com/Viren070/AIOStreams/commit/0c9c86c218c5754e62ff94c0d26d398f32da92a1))
- switch to different arrow icons and use built-in hideTextOnSmallScreen prop ([8d307a0](https://github.com/Viren070/AIOStreams/commit/8d307a0c2f755b16074e1a7262204e635853ddfd))
- ui improvements ([7e031e5](https://github.com/Viren070/AIOStreams/commit/7e031e51b12cd1fa09e1ed70b90467e8a6bd956e))
- ui improvements, check for anime type using kitsu id, loosen schema definitions ([9668a15](https://github.com/Viren070/AIOStreams/commit/9668a152fd116ed9fa9657e935b3b0ed711ce06d))
- ui improvments ([39b1e84](https://github.com/Viren070/AIOStreams/commit/39b1e84d87ea4422ebbdab2495d242aeee231562))
- update About component with new guide URLs and enhance Getting Started section ([5232e38](https://github.com/Viren070/AIOStreams/commit/5232e3847b4aeb812c44ad0e153b95189ceda607))
- update static file serving rate limiting and refactor file path handling ([010b63c](https://github.com/Viren070/AIOStreams/commit/010b63c8725bfb3968c6678b2615675b393fb449))
- update TMDB access token input to password type with placeholder ([2378869](https://github.com/Viren070/AIOStreams/commit/23788695e2cedad3a1491c78f17f7e900aa77aeb))
- use `API_KEY` as fallback for `ADDON_PASSWORD` to maintain backwards compatability ([5424490](https://github.com/Viren070/AIOStreams/commit/5424490a284aa74e98071a36f3848706f81f5033))
- use button for log in/out ([62911ad](https://github.com/Viren070/AIOStreams/commit/62911adfacde25c9f9e7b3551c277c4a7a6340db))
- use shorter function names in condition parser ([3bd2751](https://github.com/Viren070/AIOStreams/commit/3bd27519fdfa8cbf9435a48b49f3aeb2992aae42))
- use sliders for seeder ranges and fix some options not being multi-option ([915187a](https://github.com/Viren070/AIOStreams/commit/915187a6120dff969dcfe9d4bf9e473673f8ebf0))
- validate regexes on config validation ([dd0f45c](https://github.com/Viren070/AIOStreams/commit/dd0f45c731938c37575fb376a981d3c0d2c7a45a))

### Bug Fixes

- (mediafusion) increase max streams per resolution limit to 500 ([322b4f3](https://github.com/Viren070/AIOStreams/commit/322b4f375ebbd1047f3e457cf48d75ac9b610d15))
- adapt queries for PostgreSQL and SQLite ([e2834d5](https://github.com/Viren070/AIOStreams/commit/e2834d571c709cc9ca3db541da6c1374fb201490))
- adapt query for SQLite dialect in DB class ([a7bb898](https://github.com/Viren070/AIOStreams/commit/a7bb8983de03d5f1fb044636133c6f01aaeebf1f))
- add back library marker to LightGDriveFormatter ([871f54e](https://github.com/Viren070/AIOStreams/commit/871f54e896a4315f197e6a15b779d4b2a957e8a4))
- add back logo.png to v1 path for backwards compatability ([ce5a5b9](https://github.com/Viren070/AIOStreams/commit/ce5a5b99059cd2902d60c9e865503d995ed46df9))
- add back y flag ([0e0a18b](https://github.com/Viren070/AIOStreams/commit/0e0a18b9c1f7e65f84af762aab785aa7a79e1222))
- add block scope for array modifier handling in BaseFormatter ([02a2885](https://github.com/Viren070/AIOStreams/commit/02a2885d33dfbe355203d4f561408eb82355d939))
- add description for stremthru torz ([6e7c142](https://github.com/Viren070/AIOStreams/commit/6e7c14224e5fe90d56dbda7f6ac91d5b87091444))
- add extras to cache key for catalog shuffling ([1cdfc6e](https://github.com/Viren070/AIOStreams/commit/1cdfc6e0e3a44f983ac43f1c210257c63c0a78a9))
- add France option to DebridioTvPreset language selection ([bd19d01](https://github.com/Viren070/AIOStreams/commit/bd19d01b5434070384ac69278fbc8e21a65bafe9))
- add missing audio tags to constant ([fda5ffe](https://github.com/Viren070/AIOStreams/commit/fda5ffe2062f1e6953380c4904c174b81b3b07ef))
- add missing braces in parseConnectionURI function for sqlite and postgres cases ([807b681](https://github.com/Viren070/AIOStreams/commit/807b6810ea2b29900408a96e15f934d49b4407d9))
- add timeout to fetch requests in TMDBMetadata class to prevent hanging requests ([1a0d57a](https://github.com/Viren070/AIOStreams/commit/1a0d57af43efd68d41a623e2a81b23cb217011da))
- add validation for encrypted data format in decryptString function ([843b535](https://github.com/Viren070/AIOStreams/commit/843b535d7ca47c362e254669d0a3f149abe9ffc2))
- add verbose logging for resources and fix addon catalog support ([4daa644](https://github.com/Viren070/AIOStreams/commit/4daa6441eede8aa630108c21f8760fa7c19a3745))
- adjust cache stat logging behaviour ([d921070](https://github.com/Viren070/AIOStreams/commit/d921070192a4e07e3702b521a7b3819f42da3529))
- adjust default rate limit values ([aa98e7b](https://github.com/Viren070/AIOStreams/commit/aa98e7b491a1f7ab9360af8d69490c39bbfd8268))
- adjust grid layout in AddonFilterPopover ([632fbf9](https://github.com/Viren070/AIOStreams/commit/632fbf9206dcf5d9532557ca69df42683b5f7ffd))
- adjust grouping in season presence check logic ([d89e796](https://github.com/Viren070/AIOStreams/commit/d89e796cb07e534691401e307d28fc89f4176dad))
- adjust option name to keep backwards compatability with older configs ([eb651b5](https://github.com/Viren070/AIOStreams/commit/eb651b517db2bf8b91e3c60488f5336049a6bb69))
- adjust spacing in predefined formatters and add p2p marker to torbox format ([d8f5d1a](https://github.com/Viren070/AIOStreams/commit/d8f5d1a2d152d2930c0cb03c533748f81f742869))
- allow empty strings for formatter definitions ([dba54f5](https://github.com/Viren070/AIOStreams/commit/dba54f5c426e8b0391d3f2b2979b473574968036))
- allow null for released in MetaVideoSchema ([ca8d744](https://github.com/Viren070/AIOStreams/commit/ca8d74448ac2479c948a1cc8509cee8a76db0042))
- allow null value for description in MetaPreview ([0f16575](https://github.com/Viren070/AIOStreams/commit/0f165752db011c5d525c59bb915edda43afea718))
- allow null value in MetaVideoSchema ([73b4d0b](https://github.com/Viren070/AIOStreams/commit/73b4d0b99fc587f7f82515553d92bf7c69647157))
- always apply seeder ranges, defaulting seeders to 0 ([0f5dd76](https://github.com/Viren070/AIOStreams/commit/0f5dd764d9577944c587a75423db5256942b583b))
- apply negativity to all addon and encode sorting ([411ae7c](https://github.com/Viren070/AIOStreams/commit/411ae7cee234ec8fefe08bf3d844d4711dc37645))
- assign unique IDs to each stream to allow consistent comparison ([673ecb2](https://github.com/Viren070/AIOStreams/commit/673ecb2133d3dc5435db7be23cf116b2a6ad34c3))
- await precomputation of sort regexes ([56994ef](https://github.com/Viren070/AIOStreams/commit/56994ef9e83248d49e890af99181943c7715d9bb))
- call await on all compileRegex calls ([8e87004](https://github.com/Viren070/AIOStreams/commit/8e87004a07a8b5612356f5d346b4b1140a866b64))
- carry out regex check for new users too ([1555199](https://github.com/Viren070/AIOStreams/commit/155519951bd5422da9d9fc112e1eca89c4d1fb51))
- change image class from object-cover to object-contain in AddonCard component ([734bd88](https://github.com/Viren070/AIOStreams/commit/734bd88d34ba84267934862117a846c8c246e96e))
- check if title matching is enabled before attempting to fetch titles ([fd03112](https://github.com/Viren070/AIOStreams/commit/fd03112288bdf00504a6e614993a50170bd7fb43))
- coerce runtime to string type in MetaSchema for improved validation ([cc6eea7](https://github.com/Viren070/AIOStreams/commit/cc6eea7e52cc7604806f04459439c7256e1b5aee))
- coerce year field to string type in ParsedFileSchema for consistent data handling ([10bef68](https://github.com/Viren070/AIOStreams/commit/10bef68c3625b855a473406dbd9bc4e852fe3cb2))
- **comet:** don't make service required for comet ([826edae](https://github.com/Viren070/AIOStreams/commit/826edae8030627bb94591a07c6343ee64e0108f9))
- **constants:** add back Dual Audio, Dubbed, and Multi ([7c10930](https://github.com/Viren070/AIOStreams/commit/7c109304ffdf035532514284c021171e91c0fe93))
- **core:** actually apply exclude uncached/cached filters ([413a29d](https://github.com/Viren070/AIOStreams/commit/413a29d2d85b50b62042c26f9bed665c7822d11d))
- correct handling of year matching and improved normalisation ([bd53adc](https://github.com/Viren070/AIOStreams/commit/bd53adc8f7538243caf121c9b3583cd257dc9181))
- correct library marker usage in LightGDriveFormatter ([2470ae9](https://github.com/Viren070/AIOStreams/commit/2470ae94ec2f52f869e3c2edf904500095502b27))
- correct spelling of 'committed' in UserRepository class ([551335b](https://github.com/Viren070/AIOStreams/commit/551335bcbaef570a6c6b81d023c1985f6fd19cd2))
- correctly handle negate flag ([a65ef19](https://github.com/Viren070/AIOStreams/commit/a65ef19f555d34103cd68e8c021707a61e54cdde))
- correctly handle overriden URLs for mediafusion ([46e7e67](https://github.com/Viren070/AIOStreams/commit/46e7e6748e461ec77575efb5ebec4dc7ee50eba7))
- correctly handle required filters and remove HDR+DV as a tag after filtering/sorting ([113c150](https://github.com/Viren070/AIOStreams/commit/113c150e143b65eeea5dc2e5e1d74df6c096b8be))
- correctly handle undefined parsed file ([8b85a53](https://github.com/Viren070/AIOStreams/commit/8b85a5332d2b33fb6d79139fb6e771d6446b7957))
- correctly handle usenet results during deduping ([153366b](https://github.com/Viren070/AIOStreams/commit/153366b41a6b8a08cff8a4cd29ab10dfc1c7d3ac))
- correctly import/export FeatureControl ([654b1bc](https://github.com/Viren070/AIOStreams/commit/654b1bc0585d3403836159ac2efde495f4cd44d4))
- **custom:** replace 'stremio://' with 'https://' in manifest URL ([0a4a761](https://github.com/Viren070/AIOStreams/commit/0a4a76187d78e924222512f1ca971292463270b7))
- **custom:** update manifest URL option to use 'manifestUrl' ([6370ac7](https://github.com/Viren070/AIOStreams/commit/6370ac7d00a75bd626cad67fa448dcaaa9b0a6ba))
- decode data before attempting validation ([bdf9a91](https://github.com/Viren070/AIOStreams/commit/bdf9a9198f06e550e0fb3681936e6bfacf483731))
- decrypt values for catalog fetching ([6cf8436](https://github.com/Viren070/AIOStreams/commit/6cf843666f97dedc247e52cf6946842d66c50229))
- default seeders to 0 for included seeder range ([b0aea2d](https://github.com/Viren070/AIOStreams/commit/b0aea2ddec56da2428f515615251712313138cec))
- default seeders to 0 in condition parser too ([53123a3](https://github.com/Viren070/AIOStreams/commit/53123a314c45d39c9d482e5105f47de712fcc7fc))
- default value to mediaflow if neither forced or proxy is defined and remove fallback from select value ([61781b7](https://github.com/Viren070/AIOStreams/commit/61781b7e0650713777c7475416e1fc8b837c13fa))
- default version to 0.0.0 when not defined ([f031f1a](https://github.com/Viren070/AIOStreams/commit/f031f1a50eabad7d122021ce9b6556694c49af76))
- don't fail on invalid external api keys when skip errors is true ([c2db243](https://github.com/Viren070/AIOStreams/commit/c2db243b5798032b75843faf7254969d63ff14b6))
- don't make base_url required ([3d7b0da](https://github.com/Viren070/AIOStreams/commit/3d7b0da93fb1add0c6f1d4523411fc0e9512a2b9))
- don't make name required in MetaPreview schema ([062247a](https://github.com/Viren070/AIOStreams/commit/062247a89a38d3fad1129a8965a92b6245d5e08e))
- don't pass idPrefixes in manifest response ([35ceb87](https://github.com/Viren070/AIOStreams/commit/35ceb87ff325960fc035db735ac8009ab636e09d))
- don't validate user data on retrieval within UserRepository ([17873bb](https://github.com/Viren070/AIOStreams/commit/17873bb476d280e6f533cd7cabf8bb8e3e91d518))
- enable passthrough on all stremio response schemas ([377d215](https://github.com/Viren070/AIOStreams/commit/377d215c0f5801ff93ec1b0065d0c64ce1fd8217))
- encrypt forced proxy URL and credentials before assignment ([e741de3](https://github.com/Viren070/AIOStreams/commit/e741de378775baecd00ee9a8838f3f9fc6ca2bb1))
- enhance Japanese language regex to include 'jpn' as an abbreviation ([7a02f12](https://github.com/Viren070/AIOStreams/commit/7a02f12818f64971971bc49b3ec80de594c4a1fe))
- ensure debridDownloader defaults to an empty string when no serviceIds are present in StreamFusionPreset ([886a8cb](https://github.com/Viren070/AIOStreams/commit/886a8cb98190fb0e6b4b3d2358103485c9cc6f47))
- ensure early return on error handling in catalog route ([6cc20e1](https://github.com/Viren070/AIOStreams/commit/6cc20e124dfe751051f61a700eb4765e8083310e))
- ensure tmdb access token, rpdb api key, and password options are filtered out when exclude credentials is on ([299a6d5](https://github.com/Viren070/AIOStreams/commit/299a6d578cef763528095cb80b2337c44d1994e0))
- ensure transaction rollback only occurs if not committed in deleteUser method ([67b188e](https://github.com/Viren070/AIOStreams/commit/67b188e7d76b6d0a424f5b86360c2b8a20ddc3b9))
- ensure uniqueness of preset instanceIds and disallow dots in instanceId ([3a9be38](https://github.com/Viren070/AIOStreams/commit/3a9be38c77bb7a1b4b991c46902241a6e265b327))
- export formatZodError ([af90131](https://github.com/Viren070/AIOStreams/commit/af90131787616a091373e69bf6f8de67e06f1e78))
- fallback to undefined when both default and forced value are undefined for proxy id ([efb57bf](https://github.com/Viren070/AIOStreams/commit/efb57bfc3e1a2819712e54c03aee78f967427837))
- **formatters:** add message to light gdrive and remove unecessary spacing ([5cb1b0a](https://github.com/Viren070/AIOStreams/commit/5cb1b0a21ed6b29dccf1a56e59434c28da39d1be))
- **frontend:** encode password when loading config ([e8971df](https://github.com/Viren070/AIOStreams/commit/e8971df66d8ed79dec7d93bbc790c3de13f54a01))
- **frontend:** load existing overriden type in newType ([caeb282](https://github.com/Viren070/AIOStreams/commit/caeb282438edfa8c731b32775840cc5f71c3ec36))
- **frontend:** pass seeder info through to formatter ([2ec06a6](https://github.com/Viren070/AIOStreams/commit/2ec06a6f9905c7e1f9c32cc0a5ef56e96872933b))
- **frontend:** set default presetInstanceId to 'custom' to pass length check ([ec7a19a](https://github.com/Viren070/AIOStreams/commit/ec7a19a92d2ffc2b06046ab0176f02a4f5b2014e))
- **frontend:** try and make dnd better on touchscreen devices ([6aa1130](https://github.com/Viren070/AIOStreams/commit/6aa11301a5dc06eb8674cfb6a834bf181a41eeee))
- **frontend:** update filter options to use textValue to correctly show addon name when selected ([6a87480](https://github.com/Viren070/AIOStreams/commit/6a874806b893dbd6382082563f2c45c274e2650b))
- give more descriptive errors when no service is provded ([c0b6fd3](https://github.com/Viren070/AIOStreams/commit/c0b6fd3e7dac933b7fd0f10d999a48850c70244e))
- handle when drag ends outside drag context ([7a8655d](https://github.com/Viren070/AIOStreams/commit/7a8655dd4326821f2445b1055a819a87a2c3270b))
- handle when item doesn't exist in preferred list ([d728bb6](https://github.com/Viren070/AIOStreams/commit/d728bb67bdd872b2d812e3fa0ce1e5352860dff4))
- ignore language flags in Torrentio streams if Multi Subs is present ([6d08d7c](https://github.com/Viren070/AIOStreams/commit/6d08d7c0336366c185ad43a89657cbe94dc30278))
- ignore recursion checks for certain requests ([d266026](https://github.com/Viren070/AIOStreams/commit/d26602631e030f59ef0f0098633b7f4909db87bc))
- improve error handling in TMDBMetadata by including response status and status text ([2f37187](https://github.com/Viren070/AIOStreams/commit/2f371876c151a9b4b0b7db3a4cf1fa14868d4db6))
- improve filename sanitization in StreamParser by using Emoji_Presentation to keep numbers and removing identifiers ([714fedb](https://github.com/Viren070/AIOStreams/commit/714fedb2c318a115836faa939c5f888c7785b34c))
- include overrideType in catalog modification check ([db473f3](https://github.com/Viren070/AIOStreams/commit/db473f3a32788bb34ed9cede11a24be45979d040))
- increase recursion threshold limit and window for improved request handling ([cc2acde](https://github.com/Viren070/AIOStreams/commit/cc2acdeb7ab7dcfdaadc767450065dc8df520f57))
- log errors in more cases, correctly handle partial proxy configuration, correctly handle undefined value in tryDecrypt, only decrypt when defined ([56734f0](https://github.com/Viren070/AIOStreams/commit/56734f0956b38998ea802d23e312e0dda2379c88))
- make adjustments to how internal addon IDs are determined and fix some things ([a6515de](https://github.com/Viren070/AIOStreams/commit/a6515de2718138cefdad5c4c53617a745ff044c5))
- make behaviorHints optional in manifest schema ([313c6bc](https://github.com/Viren070/AIOStreams/commit/313c6bc14e119d62c65bd2cea61eca23af4f4463))
- make keyword pattern case insensitive ([795adb3](https://github.com/Viren070/AIOStreams/commit/795adb3e2521a766c92889cc0701e1a8b0d68d96))
- make object validation less strict for parsed streams ([e39e690](https://github.com/Viren070/AIOStreams/commit/e39e6900b452b565c6f4c6ed7de151eceb54d38d))
- **mediaflow:** add api_password query param when getting public IP ([00e305f](https://github.com/Viren070/AIOStreams/commit/00e305f4f31d9c78741fb0d8d2585b8478d732ea))
- **mediaflow:** include api_password in public IP endpoint URL only ([279ff00](https://github.com/Viren070/AIOStreams/commit/279ff003be87febed59ac6f8edb3f0d0d439659a))
- **mediafusion:** correctly return encoded user data, and fix parsing ([c6a6350](https://github.com/Viren070/AIOStreams/commit/c6a63502b6049fd403816114547be42e5f44b305))
- only add addons that support the type only when idPrefixes is undefined ([d7355cb](https://github.com/Viren070/AIOStreams/commit/d7355cb5983202d08c5d6f863cf5f2f742a6ad97))
- only allow p2p on its own addon in StremThruTorzPreset ([510c086](https://github.com/Viren070/AIOStreams/commit/510c086ab0dfbedd089e06ec063837f9e465695f))
- only carry out missing title check after checking addons and request types ([eff8d50](https://github.com/Viren070/AIOStreams/commit/eff8d50006d3814af7a4140b0ad9f599eea6bddc))
- only exclude a file with excludedLanguages if all its languages are excluded ([2dfb718](https://github.com/Viren070/AIOStreams/commit/2dfb718fa1bca8ae188c5ff55b2f7b1bf7fbbb10))
- only filter out resources using specified resources when length greater than 0 ([cd78ead](https://github.com/Viren070/AIOStreams/commit/cd78ead297b8641d4f45ca224d5455ec649ee429))
- only use the movie/series specific cached/uncached sort criteria if defined ([049f65b](https://github.com/Viren070/AIOStreams/commit/049f65b18069a0b8c8b8ae7d34e5981cfa34244e))
- override stream parser for torz to remove indexer ([f0a448b](https://github.com/Viren070/AIOStreams/commit/f0a448b489585e22af6bcfffbc3ff0a383e35085))
- **parser:** match against stream.description and apply fallback logic to stream.title ([a1d2fc9](https://github.com/Viren070/AIOStreams/commit/a1d2fc9981c967254dcb91d1779310c2fd1f8fba))
- **parser:** safely access parsedFile properties to handle potential undefined values ([e995f97](https://github.com/Viren070/AIOStreams/commit/e995f97e2f43063f7e69b179237279d5aaba51e8))
- pass user provided TMDB access token to TMDBMetadata ([d2f4dc1](https://github.com/Viren070/AIOStreams/commit/d2f4dc1b8dbe17c17e80ac4698398af5a3757cc9))
- potentially fix regex sorting ([9771c7b](https://github.com/Viren070/AIOStreams/commit/9771c7be7f8e19c25cebac4439c42a7ae6766459))
- potentially fix sorting ([887d285](https://github.com/Viren070/AIOStreams/commit/887d2850f23e883734f2b56d4545e546c07a5694))
- prefix addon instance ID to ensure uniquenes of stream id ([009d7d1](https://github.com/Viren070/AIOStreams/commit/009d7d1cf40a1e4041690d5c217b34003f7d51a2))
- prevent fetching from aiostreams instance of the same user ([963a3f7](https://github.com/Viren070/AIOStreams/commit/963a3f7064abf0387d0ce49ffb7773659ea88577))
- prevent mutating options object in OrionPreset ([f8b08b3](https://github.com/Viren070/AIOStreams/commit/f8b08b3093e49e50acd52aed439ed3e5c7a0674b))
- prevent pushing errors for general type support to avoid blocking requests to other addons ([b390534](https://github.com/Viren070/AIOStreams/commit/b390534dae906235836c3fc4a43b3db27dee8324))
- reduce timeout duration for resetting values in AddonModal to ensure new modals properly keep their initial values ([9213d78](https://github.com/Viren070/AIOStreams/commit/9213d781d176101f8e7826cc187e44188cf346c4))
- refine year matching logic in title filtering for movies ([21f1d3e](https://github.com/Viren070/AIOStreams/commit/21f1d3e0210c84936d2c06b238ede488715d0165))
- remove check of non-existent url option in OpenSubtitlesPreset ([dbd5dd6](https://github.com/Viren070/AIOStreams/commit/dbd5dd6bd73abf26ad4c408c17af653dae6ed949))
- remove debug logging in getServiceCredentialDefault ([27932a5](https://github.com/Viren070/AIOStreams/commit/27932a54ff683faa01052e5cec1cf450ec5d8603))
- remove emojis from filename ([b8bbb17](https://github.com/Viren070/AIOStreams/commit/b8bbb178a8c66eaad6fc5b1637492b1358f12645))
- remove log pollution ([5b72292](https://github.com/Viren070/AIOStreams/commit/5b7229299e0f0dfd80a57ed4367a554574b8a9d8))
- remove max connections limit from PostgreSQL pool configuration ([bff13dc](https://github.com/Viren070/AIOStreams/commit/bff13dc22c59bb358926867bceefceca1c36574d))
- remove unecessary formatBytes function and display actual max size ([5c9406f](https://github.com/Viren070/AIOStreams/commit/5c9406f88e13e538e3683b82c8045899498ec185))
- remove unnecessary UUID assignment in UserRepository class ([c8224bc](https://github.com/Viren070/AIOStreams/commit/c8224bc21e496686971e99176d48eb1c859d675e))
- remove unused regex environment variables from status route ([2fd0522](https://github.com/Viren070/AIOStreams/commit/2fd05220a480bd70fca5d383d7477be6e7eb5fb2))
- remove unused regex fields from StatusResponseSchema ([dfef789](https://github.com/Viren070/AIOStreams/commit/dfef7895b2ad0c2c0b879ad0ce7e1d4410431eeb))
- replace crypto random UUID generation with a simple counter for unique ID assignment in StreamParser ([11b2204](https://github.com/Viren070/AIOStreams/commit/11b220443c67c22de475ab22d32ced033e083740))
- replace hardcoded SUPPORTED_RESOURCES with supportedResources in NuvioStreamsPreset ([4eeeb59](https://github.com/Viren070/AIOStreams/commit/4eeeb59186668ad1b2d7975e21ea7b90b501bfa7))
- replace incorrect hardcoded SUPPORTED_RESOURCES with supportedResources in DebridioPreset ([ed73f5d](https://github.com/Viren070/AIOStreams/commit/ed73f5de6c66ef408f513f54cafee8d2a22e6965))
- restore TMDBMetadata import in main.ts and enable metadata export in index.ts ([2cd7d4d](https://github.com/Viren070/AIOStreams/commit/2cd7d4dfd1ada052dad8b21f79a2ffd24eafc178))
- return original URL when no modifications are made in CometStreamParser ([cbfb4b7](https://github.com/Viren070/AIOStreams/commit/cbfb4b7838f5a91a401ce7f4d5b5c1a566b222ee))
- return url when no modifications are needed in JackettioStreamParser ([4791f36](https://github.com/Viren070/AIOStreams/commit/4791f360da880758ab5d227d2ada8f27ad2f9c64))
- **rpdbCatalogs:** correct spelling of 'movies' to 'movie' ([9e1960a](https://github.com/Viren070/AIOStreams/commit/9e1960a6ddd19e6ad705cab30539d6f2c2107321))
- **rpdb:** improve id parsing logic and include type for tmdb ([18621ca](https://github.com/Viren070/AIOStreams/commit/18621ca646bb3765963849fd10e25866b253759d))
- safely access catalogs options and default to false for streamfusion ([9c48fad](https://github.com/Viren070/AIOStreams/commit/9c48fad6a620e30730b9da9a8074daf016e24105))
- save preferred values when adjusting from select menu ([2b329fe](https://github.com/Viren070/AIOStreams/commit/2b329fe6feabdcefcb4c4603a772ec8cf8791a0b))
- set default sizeK value to 1024 in StreamParser and remove overridden method in TorrentioParser ([a09dcea](https://github.com/Viren070/AIOStreams/commit/a09dcead9bc6107b25dd8829c66d0b49d1dc49e8))
- set public IP to undefined when empty ([32f90fb](https://github.com/Viren070/AIOStreams/commit/32f90fb0f3e5a067ba8f3486bfeb366387b28f01))
- simplify and improve validation checks ([dde5af0](https://github.com/Viren070/AIOStreams/commit/dde5af02d9dab1634a2c7cd9e9346b4707011848))
- simplify duration formatting in getTimeTakenSincePoint function ([f1afe5f](https://github.com/Viren070/AIOStreams/commit/f1afe5f5a26024b6fbc860abbba902da201996d7))
- truncate addon name and update modal value states to handle changes in props ([14f56d1](https://github.com/Viren070/AIOStreams/commit/14f56d12479580033123bbbd312b5bc4ff67f4df))
- update addon name formatting in AIOStreamsStreamParser to prefix aiostreams addon name ([eefa184](https://github.com/Viren070/AIOStreams/commit/eefa184b7c0e8e3a2f7779360da94254858f6e6f))
- update AIOStream schema export and enhance AIOStreamsStreamParser with validation ([edc310f](https://github.com/Viren070/AIOStreams/commit/edc310fe5f213b4e03976aeb815fd51c81be7976))
- update Bengali regex to not match ben the men ([90980c7](https://github.com/Viren070/AIOStreams/commit/90980c76363abdec3d1f53ad2b27eb4181bd8131))
- update cached sorting to prefer all streams that are not explicitly marked as uncached ([b16f36d](https://github.com/Viren070/AIOStreams/commit/b16f36d4ea80d4a842281814239aaa23430c5c65))
- update default apply mode for cached and uncached filters from 'and' to 'or' ([3fe5027](https://github.com/Viren070/AIOStreams/commit/3fe50274dcfdfaea68103f6477cbc30563327f65))
- update default value for ADDON_PASSWORD and SECRET_KEY ([65a4c91](https://github.com/Viren070/AIOStreams/commit/65a4c9177cc8da04990c82fbde939fa4c5452637))
- update Dockerfile to use default port fallback for healthcheck and expose ([0ffca95](https://github.com/Viren070/AIOStreams/commit/0ffca9560460a640b763c2a4cabdd3c4a420b6ca))
- update duration state to use milliseconds and adjust input handling ([3d43673](https://github.com/Viren070/AIOStreams/commit/3d43673a66f695a1a7547d95a1ef36cd45d27864))
- update error handling in OrionStreamParser to throw an error instead of returning an error stream for partial success ([bb30b4a](https://github.com/Viren070/AIOStreams/commit/bb30b4a19a66c6eb8c3b408e64eea33d927bd8ea))
- update error message for missing addons to suggest reinstallation ([78a0d7f](https://github.com/Viren070/AIOStreams/commit/78a0d7f788aaa4ea10e2e69ccbd5d79c72bb17d1))
- update formatter preview ([f3d84bc](https://github.com/Viren070/AIOStreams/commit/f3d84bc9778a345e837a698c68c2e28ea71752a4))
- update GDriveFormatter to use 'inLibrary' instead of 'personal' ([f6ef47f](https://github.com/Viren070/AIOStreams/commit/f6ef47f3a8f7c781a084ffb3d5ba26615edf77fa))
- update handling of default/forced values ([c60ef6f](https://github.com/Viren070/AIOStreams/commit/c60ef6fde9c0de6abc98f2cb2de2a7e981719f3e))
- update help text to include selected proxy name rather than mediaflow only ([af24d67](https://github.com/Viren070/AIOStreams/commit/af24d674d1c265f9fe9a37f4528548b25790638e))
- update MediaFlowProxy to conditionally include api_password in proxy URL for /proxy/ip endpoint ([d0faecc](https://github.com/Viren070/AIOStreams/commit/d0faecc563cd7d2c9ed52310ce658b13ee3fc076))
- update MediaFusion logo URL ([3648f94](https://github.com/Viren070/AIOStreams/commit/3648f94d0acdebfde842818335f473fb4564d0e7))
- update NameableRegex schema to allow empty name and remove useless regex check ([96d355f](https://github.com/Viren070/AIOStreams/commit/96d355ffdabeb4a308b0f99a9f9a198b8a7d8733))
- update Peerflix logo URL ([ab1c216](https://github.com/Viren070/AIOStreams/commit/ab1c21695e596d8fb482f299d31bf44f51ba78fa))
- update seeder condition in TorrentioFormatter to allow zero seeders ([c890671](https://github.com/Viren070/AIOStreams/commit/c890671a444f6d82e48d9fdce1308913779d7123))
- update service links ([fea2675](https://github.com/Viren070/AIOStreams/commit/fea26752ac521415bf8f23ae022d4ecad7b7e731))
- update size filter constraints to allow zero values ([4a8e9c3](https://github.com/Viren070/AIOStreams/commit/4a8e9c3f7d2d463c0e800e542ef63ad0dab813b7))
- update social link from Buy Me a Coffee to Ko-fi in DcUniversePreset ([671567c](https://github.com/Viren070/AIOStreams/commit/671567cb433a4912e472d02cf975a1f8037ff223))
- update table schema ([f3b4088](https://github.com/Viren070/AIOStreams/commit/f3b4088397a7a09bfc0199bcbf769262a0cb1f75))
- update user data merging logic in configuration import ([5ebb539](https://github.com/Viren070/AIOStreams/commit/5ebb539a3e2e5d623a3682dfeeb626781bb2dde0))
- update user data reset logic ([9bd9810](https://github.com/Viren070/AIOStreams/commit/9bd9810a7a11132c814024e5182229135e23b42f))
- use correct input change handlers ([6f3013c](https://github.com/Viren070/AIOStreams/commit/6f3013cdc2883ef9214538bb9cafba475f692604))
- use nullish coalescing for seeder info in formatter to allow values of 0 ([3e5d581](https://github.com/Viren070/AIOStreams/commit/3e5d581cb0861bfd09a26dbb4bfc318abb579d9a))
- use structuredClone for config decryption to ensure immutability ([a67603d](https://github.com/Viren070/AIOStreams/commit/a67603d669439465756809b3e1ee9c2637a7bcc5))
- wrap handling for join case in block ([85a7775](https://github.com/Viren070/AIOStreams/commit/85a777544593b9a76d7cb8930db8e0321e6511fa))
- wrap switch cases in blocks ([16b208b](https://github.com/Viren070/AIOStreams/commit/16b208b05b2450771834954cd54a193af79fdc2d))
- **wrapper:** allow empty arrays as valid input in wrapper class ([c64a4f4](https://github.com/Viren070/AIOStreams/commit/c64a4f43ceb1b1eb85658a919ce3759df81556a9))
- **wrapper:** enhance error logging for manifest and resource parsing by using formatZodError ([ffc974e](https://github.com/Viren070/AIOStreams/commit/ffc974ede622e970fc5f7396d4f1d1658726228a))

## [1.22.0](https://github.com/Viren070/AIOStreams/compare/v1.21.1...v1.22.0) (2025-05-22)

### Features

- pass `baseUrl` in Easynews++ config and add optional `EASYNEWS_PLUS_PLUS_PUBLIC_URL`. ([b41e210](https://github.com/Viren070/AIOStreams/commit/b41e210c04777b349629dc98f28982bfb2e54886))
- stremthru improvements ([#172](https://github.com/Viren070/AIOStreams/issues/172)) ([72b5ab6](https://github.com/Viren070/AIOStreams/commit/72b5ab648e511220d7ff8b4bf453db94bb952b30))

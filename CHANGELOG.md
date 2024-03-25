# Changelog

# [3.1.3](https://github.com/konstaui/konsta/compare/v3.1.2...v3.1.3) (2024-03-25)

### Bug Fixes

- **vue:** useContext ([5206ae0](https://github.com/konstaui/konsta/commit/5206ae0532a230ae7a2150981da964a80f9ff91b))
- **vue:** useContext util ([cc543a3](https://github.com/konstaui/konsta/commit/cc543a398c9cd315698f68c1586abf2847d4c12e)), closes [#196](https://github.com/konstaui/konsta/issues/196)

### Features

- [export konsta-react types KonstaProviderProps] ([#183](https://github.com/konstaui/konsta/issues/183)) ([9e79848](https://github.com/konstaui/konsta/commit/9e79848dae7976188c4e339912d30c80e3655b7f))

# [3.1.2](https://github.com/konstaui/konsta/compare/v3.1.1...v3.1.2) (2023-11-09)

### Features

- add `types` to package exports

# [3.1.1](https://github.com/konstaui/konsta/compare/v3.1.0...v3.1.1) (2023-10-20)

### Features

- **message:** add onClick handler ([4df47e3](https://github.com/konstaui/konsta/commit/4df47e3de71c97f16b395d07ab30ae972284f3a7)), closes [#177](https://github.com/konstaui/konsta/issues/177)
- **messages:** add `messageReceived` to colors ([6b51367](https://github.com/konstaui/konsta/commit/6b5136790a0c18c9a0e6aa633745646c02b1491d)), closes [#176](https://github.com/konstaui/konsta/issues/176)

# [3.1.0](https://github.com/konstaui/konsta/compare/v3.0.1...v3.1.0) (2023-09-20)

### Bug Fixes

- **react:** camel case `tabIndex` in Link component ([#170](https://github.com/konstaui/konsta/issues/170)) ([f16b164](https://github.com/konstaui/konsta/commit/f16b1649c518ee9b9b10fd4f859815de9ed2e98c))
- **react:** camel case `tabIndex` in react components ([#175](https://github.com/konstaui/konsta/issues/175)) ([85a29e9](https://github.com/konstaui/konsta/commit/85a29e9f91208ad9367e29230cbabd947cc23b19))

### Features

- Data Table Components ([#173](https://github.com/konstaui/konsta/issues/173)) ([643973d](https://github.com/konstaui/konsta/commit/643973d63409809b0b0bb31d5b0eb2ac905d14e3))

# [3.0.1](https://github.com/konstaui/konsta/compare/v3.0.0...v3.0.1) (2023-08-24)

### Bug Fixes

- **package:** fix wrong config paths in package ([d935fbb](https://github.com/konstaui/konsta/commit/d935fbb4fd629b28d484172afa0e2fe5dd647f5f))

# [3.0.0](https://github.com/konstaui/konsta/compare/v2.0.0...v3.0.0) (2023-08-23)

### Bug Fixes

- **types:** omit props in HTMLElement extension ([#162](https://github.com/konstaui/konsta/issues/162)) ([ce2576d](https://github.com/konstaui/konsta/commit/ce2576d939ad86f0b77c57ad17b8df035ba537a3)), closes [#159](https://github.com/konstaui/konsta/issues/159)

### Features

- add aria role attributes ([#161](https://github.com/konstaui/konsta/issues/161)) ([59216a6](https://github.com/konstaui/konsta/commit/59216a6f4daa5b438eab0a477e2853f5195dc117)), closes [#155](https://github.com/konstaui/konsta/issues/155)
- add Notification component ([#154](https://github.com/konstaui/konsta/issues/154)) ([9724f7c](https://github.com/konstaui/konsta/commit/9724f7cfaa069424f8b0abf7094e7ffb7a1345f5))
- Contacts component ([#153](https://github.com/konstaui/konsta/issues/153)) ([de8e0b2](https://github.com/konstaui/konsta/commit/de8e0b22de66dbf04b42e7dc878891dea5469638))
- Messages Component ([#152](https://github.com/konstaui/konsta/issues/152)) ([3e7ae5b](https://github.com/konstaui/konsta/commit/3e7ae5b060905bd8c295978cb2dc034552424a05))
- Searchbar component ([#150](https://github.com/konstaui/konsta/issues/150)) ([5fedde6](https://github.com/konstaui/konsta/commit/5fedde6fd9d32f059ec34c0799a262172b2968ef))

# [2.0.0](https://github.com/konstaui/konsta/compare/v1.0.2...v2.0.0) (2023-04-21)

### Breaking

- now it requires Tailwind CSS 3.3+

### Bug Fixes

- RadioClasses material icon ([#128](https://github.com/konstaui/konsta/issues/128)) ([b92714f](https://github.com/konstaui/konsta/commit/b92714fa138103c663248fdcb1643d25493fc4e6))
- **react:** added React.PropsWithChildren ([#132](https://github.com/konstaui/konsta/issues/132)) ([72ffa4e](https://github.com/konstaui/konsta/commit/72ffa4e6ed5fb9ea1205c8aec050fb53f2eecaa8))
- **svelte:** checks for null or undefined where printing a text ([8c6ff6f](https://github.com/konstaui/konsta/commit/8c6ff6f11c4f036821bc9afd990f41038f360fca)), closes [#126](https://github.com/konstaui/konsta/issues/126)
- **svelte:** fix default font size in breadcrumbs ([03935c5](https://github.com/konstaui/konsta/commit/03935c5ace9f1d1bd2a67a8087f7df8b6e56231e))
- **svelte:** link should have touch ripple disabled by default ([2b8822c](https://github.com/konstaui/konsta/commit/2b8822c20eb06ebe8787c292e5d96669be4f4167)), closes [#112](https://github.com/konstaui/konsta/issues/112)
- **svelte:** TabbarLink label ([#129](https://github.com/konstaui/konsta/issues/129)) ([18d76bf](https://github.com/konstaui/konsta/commit/18d76bf6c2c827838b75a543c2bf916979e084b4))
- **svelte:** use `<a>` if button has `href` ([5c6defd](https://github.com/konstaui/konsta/commit/5c6defd1fd5df27f5390a1c3b6665d1caf123a4c)), closes [#141](https://github.com/konstaui/konsta/issues/141)

### Features

- **breadcrumbs:** breadcrumbs-item now has overflow-hidden ([5c30bb7](https://github.com/konstaui/konsta/commit/5c30bb7b892caafcec700103f1c17f1d4a0bc1fd))
- **link:** add `linkProps` property ([328bd1e](https://github.com/konstaui/konsta/commit/328bd1e1ca5778cde6df7680a9d23590c6497afe))
- RTL support with logical properties ([#133](https://github.com/konstaui/konsta/issues/133)) ([870258a](https://github.com/konstaui/konsta/commit/870258aee643198013a10fb181b3714e74ea0f81))
- **svelte:** add `component` prop support to FAB component ([#83](https://github.com/konstaui/konsta/issues/83)) ([9841840](https://github.com/konstaui/konsta/commit/9841840aa6c0181da23bcff37db755324952551e))
- **tabbarlink:** add `linkProps` property ([e026847](https://github.com/konstaui/konsta/commit/e026847eb6ad983a67444b031a74277b46d9de42)), closes [#123](https://github.com/konstaui/konsta/issues/123)

# [1.0.2](https://github.com/konstaui/konsta/compare/v1.0.1...v1.0.2) (2022-09-16)

- **block:** new `padding` prop

# [1.0.1](https://github.com/konstaui/konsta/compare/v1.0.0...v1.0.1) (2022-09-13)

- fix config folder

# [1.0.0](https://github.com/konstaui/konsta/compare/v0.11.1...v1.0.0) (2022-09-13)

- All new Material You design
- New [Dialog](https://konstaui.com/react/dialog) component
- New way of handling [color schemes](https://konstaui.com/react/colors)
- Lots of minor changes, new features, improvements and fixes across all components (see beta changelogs below)

# [1.0.0-beta.5](https://github.com/konstaui/konsta/compare/v1.0.0-beta.4...v1.0.0-beta.5) (2022-09-08)

### Features

- **actions:** rename prop `hairlines` to `dividers` ([29b3bdd](https://github.com/konstaui/konsta/commit/29b3bdda858cd9e0c8b6372c4efa39bb66fa2265))
- **navbar:** animate navbar for large and medium size ([30adb31](https://github.com/konstaui/konsta/commit/30adb316a611cf0ba0c4cb15f864673ea20a8f6c))
- **navbar:** rename prop `hairlines` to `outline` ([b18b1ea](https://github.com/konstaui/konsta/commit/b18b1ea89f1908e4100547ac187a11c1d515a26d))
- **segmented:** simplify `strong` logic and remove `activeButtonIndex` and `childButtonsLength` props ([9bc4ef8](https://github.com/konstaui/konsta/commit/9bc4ef812da9c71c79524dd8b9e3f8890ba44b3c))
- **toolbar:** rename prop `hairlines` to `outline` ([9862c93](https://github.com/konstaui/konsta/commit/9862c93878f77f2a9b30a22f63fb072e38d57dd1))

# [1.0.0-beta.3](https://github.com/konstaui/konsta/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2022-09-06)

### Bug Fixes

- **config:** fix material font extraction ([792ace3](https://github.com/konstaui/konsta/commit/792ace387dd115403e75178e7a9440d5dded2c5d))

### Features

- **list:** update media list styles in m3 theme ([d9a03a9](https://github.com/konstaui/konsta/commit/d9a03a9b5d3136bc1fc23a3b43f4f1142ab6b5bc))

# [1.0.0-beta.2](https://github.com/konstaui/konsta/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2022-09-01)

### Features

- **card:** add `contentWrap` and `contentWrapPadding` props ([5571a78](https://github.com/konstaui/konsta/commit/5571a78b6647a7a1993e3121088b7fa3178e01c7))

# [1.0.0-beta.1](https://github.com/konstaui/konsta/compare/v0.11.1...1.0.0-beta.1) (2022-09-01)

### Bug Fixes

- **svelte:** fix doubled ripple waves ([d8dd17a](https://github.com/konstaui/konsta/commit/d8dd17a153b1826a5937c66d318f0704524797ad))
- **touch-ripple:** remove ripple wave on `contextmenu` ([9aad8d5](https://github.com/konstaui/konsta/commit/9aad8d5f21cc8baed61e08decea4e479ec213462))

### Features

- **actions:** m3 styles ([c47b7e4](https://github.com/konstaui/konsta/commit/c47b7e410df11066f0a7bff24d49f9455ff33ec7))
- **actions:** m3 styles ([96c4385](https://github.com/konstaui/konsta/commit/96c438554ce5fff0b0ba039fc9fd2768bfd53657))
- **block-header/footer:** support `inset` layout ([3108ce5](https://github.com/konstaui/konsta/commit/3108ce54bc9a7f7438a75fd0d967c8cd05dd5b31))
- **block-title:** m3 styles and colors ([58008db](https://github.com/konstaui/konsta/commit/58008dbc4cbf18bb002faaded1d8c0a445bd9912))
- **block-title:** new `medium` and `large` props for new sizes ([bc6b470](https://github.com/konstaui/konsta/commit/bc6b4702f95dec26cded7a66f69ae0f9715df675))
- **block-title:** tweak styles to match material 3 ([63b6b7a](https://github.com/konstaui/konsta/commit/63b6b7a5a81940a9c8f4e7cec76e354df0e158e1))
- BlockFooter and BlockHeader colors ([50ecc77](https://github.com/konstaui/konsta/commit/50ecc77940ebfe6463b52305a50206d83c990185))
- **block:** new outline, strong, inset styles ([1bebcd5](https://github.com/konstaui/konsta/commit/1bebcd53fd68598cbccd328ed5c9a0b11f459c5a))
- **block:** tweak styles to match material 3 ([48c05d9](https://github.com/konstaui/konsta/commit/48c05d9c8c716babd1addb55e87a2c08fd46d1cc))
- **breadcrumbs:** m3 styles ([8f38d19](https://github.com/konstaui/konsta/commit/8f38d19c1ab942ab72f2f42cbb2bf41b26a51237))
- **button:** add new "tonal" type and tweak styles to material 3 ([1d5aff7](https://github.com/konstaui/konsta/commit/1d5aff7b6dadb26d6de63f0360c1f91c3cc91f7c))
- **button:** m3 styles ([0886b5a](https://github.com/konstaui/konsta/commit/0886b5a9ab22228355b4f19faf2852360a239789))
- **buttons:** m3 appearance tweaks ([929ec8e](https://github.com/konstaui/konsta/commit/929ec8e5b15bee97d62e1d2d70b4549ca3248f39))
- **card:** more m3 styles ([6587619](https://github.com/konstaui/konsta/commit/6587619c4af51ecbf24f2b2cfdd75e992b0c0a30))
- **cards:** m3 styles ([84a8f20](https://github.com/konstaui/konsta/commit/84a8f20a43fcdbdc9a84905e8e1cf3f9d78a4ba0))
- **card:** tweak card border radius to match material 3 ([9dd39a2](https://github.com/konstaui/konsta/commit/9dd39a2dc99bac2c2aa485138109263ca668652f))
- **checkbox:** add touch ripple to Checkbox ([66c0d9f](https://github.com/konstaui/konsta/commit/66c0d9fe90f441c0cec4a18e4c8ba14f10b7c5ae))
- **checkbox:** m3 styles ([ca982d2](https://github.com/konstaui/konsta/commit/ca982d2909aef8dc804e25598623e5770c041206))
- **chips:** m3 appearance ([8e5d6f6](https://github.com/konstaui/konsta/commit/8e5d6f6c4a25c3e4d065b5f13fb6f84fd6e6f725))
- **chips:** m3 styles ([33cc2bc](https://github.com/konstaui/konsta/commit/33cc2bcd9cb66136bfecdd23460c1b7566f3682e))
- **fab:** m3 appearance ([f5f1fb4](https://github.com/konstaui/konsta/commit/f5f1fb481786a298ac2ac81a390729d42ae82510))
- **fab:** m3 styles ([3c069a3](https://github.com/konstaui/konsta/commit/3c069a3feeab977aff0e596d15d03d50ee6c3f2f))
- **link:** m3 colors ([dab006b](https://github.com/konstaui/konsta/commit/dab006b224d78cebe7dfaa77fcc91126058b37e9))
- **list-button:** tweak list button font weight ([ac02418](https://github.com/konstaui/konsta/commit/ac02418760f3d876650bd382df3b66bf6d6ef7ae))
- **list-input:** m3 styles + new outline inputs ([9664580](https://github.com/konstaui/konsta/commit/9664580a8d46a8b06f1f6c48cc4f65becd34272c))
- **list:** control List items dividers with new `dividers` prop on List ([adae44a](https://github.com/konstaui/konsta/commit/adae44a0e56671fa5518133542f78e5a1119f76a))
- **list:** new outline & strong styles ([e386600](https://github.com/konstaui/konsta/commit/e386600205d67c1b861fe23ebb5df2d0d8efb6dc))
- **list:** tweak for m3 styles ([8c1b1c1](https://github.com/konstaui/konsta/commit/8c1b1c1e8c598bdee6859e28bb52e1d3ea0f6ce0))
- md3 colors ([756a448](https://github.com/konstaui/konsta/commit/756a44835203dead8d5f95665f57b4f6e44b039c))
- **menu-list:** m3 styles ([bf946b0](https://github.com/konstaui/konsta/commit/bf946b00338cce5df43adf4c026d7ff59538e35b))
- more device pixel ratios for hairlines ([196c05b](https://github.com/konstaui/konsta/commit/196c05b909189ad7ad9d4c8faac02e7b5eb8ba2d)), closes [#70](https://github.com/konstaui/konsta/issues/70)
- **navbar:** increase size and remove shadow to match material 3 ([d9e7f42](https://github.com/konstaui/konsta/commit/d9e7f4255cd5a84ec63687414205be499cdbe325))
- **navbar:** m3 styles and colors ([dd0204a](https://github.com/konstaui/konsta/commit/dd0204a809a1baf4912120b2742e22285a326612))
- **navbar:** new `medium`, `large` & `transparent` appearances ([9ad6c2f](https://github.com/konstaui/konsta/commit/9ad6c2f4e86431e2330e4f5fc38908d1db408abb))
- **navbar:** split title for ios and material colors ([c264ac3](https://github.com/konstaui/konsta/commit/c264ac389525bf9024b1772679308b8c08b53533))
- **navbar:** tweak navbar styles in material theme ([0a216b9](https://github.com/konstaui/konsta/commit/0a216b959386d0e2b362c01e3ee708ba8749411d))
- **navbar:** tweak subnavbar height ([8a6ec79](https://github.com/konstaui/konsta/commit/8a6ec79e4402a53f4f8f9ffd0ab5f3ce0da6cabe))
- new colors system ([41e8393](https://github.com/konstaui/konsta/commit/41e83935e1d3e7c590dafb783e1918e6308c3686))
- new Dialog component ([1519aa6](https://github.com/konstaui/konsta/commit/1519aa64bd0f5470e7e90828b686ac6bc0204d02))
- no-scrollbar tailwind plugin ([aed4e16](https://github.com/konstaui/konsta/commit/aed4e16dca9d86120b7c1333ca4fc074eb88d79b))
- **page:** add page colors prop ([1fbd280](https://github.com/konstaui/konsta/commit/1fbd2800df19f4105125c62b51b0f2402908e304))
- **page:** m3 styles ([b6ed24e](https://github.com/konstaui/konsta/commit/b6ed24e65e97c3db4ba61c2840797b87b5171f98))
- **panel:** add "floating" panel + tweak styles for material 3 ([0511aba](https://github.com/konstaui/konsta/commit/0511aba9dc2a1a20e315c1dc1b187c7f882ff4ab))
- **panel:** rounded panel in m3 ([f8f05d9](https://github.com/konstaui/konsta/commit/f8f05d95c463257dc38f5faa15fa486d2600159c))
- **popover:** angle is now enabled by default ([cf80085](https://github.com/konstaui/konsta/commit/cf800857e79caf22d793607ae137a351f54c3366))
- **popover:** m3 tweaks ([1165339](https://github.com/konstaui/konsta/commit/1165339e67fe6bd9a0e7269a9cf995b77861ac20))
- **popover:** option to force show/hide popover arrow/angle ([d09f2ac](https://github.com/konstaui/konsta/commit/d09f2ac226208e134c566ad78faafcc534877e4c))
- **preloader:** m3 styles ([12842d8](https://github.com/konstaui/konsta/commit/12842d882c57c246bb9ae18aca550c7c6fd8cb7c))
- **progressbar:** m3 styles ([05a210c](https://github.com/konstaui/konsta/commit/05a210c6bc7675de8230fc2211f3dd0b50db33fe))
- **radio:** add touch ripple to Radio ([047a2ee](https://github.com/konstaui/konsta/commit/047a2ee5d6d16f5cabf8c483a9bddb7d887cca27))
- **radio:** m3 styles ([ab06b62](https://github.com/konstaui/konsta/commit/ab06b6279e92f7c9c087cc6c08e7b0b5245e4673))
- **range:** m3 styles ([69b6f11](https://github.com/konstaui/konsta/commit/69b6f11dc04d6cfd161aa782bf871bf6a6fb446a))
- remove list 'active:' modifiers in m3 theme ([80f4c85](https://github.com/konstaui/konsta/commit/80f4c85f34af83625d2fb38e28eda3322b683836))
- **stepper:** m3 styles and colors ([afcf880](https://github.com/konstaui/konsta/commit/afcf880dc9bdd91a625e5caefa6b1efdafb9a58c))
- **toast:** m3 styles ([ddb99a1](https://github.com/konstaui/konsta/commit/ddb99a1785aca4194d2ead224b5864c8db56d15c))
- **toggle:** add touch ripple to Toggle ([6651214](https://github.com/konstaui/konsta/commit/6651214d8e09f39a3375b6d227318dccc9897aa6))
- **toggle:** m3 styles ([7fb8806](https://github.com/konstaui/konsta/commit/7fb88064cf003756e70513ab26146d2fd65a9776))
- **toggle:** support custom element on Toggle svelte component ([c51e776](https://github.com/konstaui/konsta/commit/c51e776f1a7f779879cc1132e8ded2a3ea1ca43d))
- **toggle:** update styles to material 3 ([187942b](https://github.com/konstaui/konsta/commit/187942b8524dd7de194a20515331e2c93b21c93b))
- **toolbar:** increase size and remove shadow to match material 3 ([3cf2586](https://github.com/konstaui/konsta/commit/3cf2586e046eccc257d1363dab2b8ec188d766f2))
- **toolbar:** m3 color ([cdd6cdb](https://github.com/konstaui/konsta/commit/cdd6cdb51cab3e8a073177799f55386cde2bed9c))
- **toolbar:** reworked material Toolbar and Tabbar to match m3 styles ([3022a45](https://github.com/konstaui/konsta/commit/3022a45837156b6c82c20ffe57acae49784083c3))
- tweak Sheet, Actions, Panel appearance and easing in m3 theme ([92dc0f1](https://github.com/konstaui/konsta/commit/92dc0f1a5cc146ca3ad40a36fc77da85e837462c))
- tweak Toast to match m3 design ([f39f544](https://github.com/konstaui/konsta/commit/f39f5446bbdb3d9879ba3fe984e80d9a79dc1d92))

# [0.11.1](https://github.com/konstaui/konsta/compare/v0.11.0...v0.11.1) (2022-08-05)

### Bug Fixes

- **svelte-types:** add html props from the native element each component inherits from. ([#66](https://github.com/konstaui/konsta/issues/66)) ([aa1193e](https://github.com/konstaui/konsta/commit/aa1193e9d333aff0c491120f62d7b11d72f8567c))

# [0.11.0](https://github.com/konstaui/konsta/compare/v0.10.4-v0.11.0) (2022-06-21)

### Features

- **vue:** don't compile Vue components and keep `.vue` files in package ([61f3d97](https://github.com/konstaui/konsta/commit/61f3d97119c20f594bed7244b9de0bf9b785c832))

# [0.10.4](https://github.com/konstaui/konsta/compare/v0.10.3...v0.10.4) (2022-06-08)

### Bug Fixes

- fixed wrong config paths

# [0.10.3](https://github.com/konstaui/konsta/compare/v0.10.2...v0.10.3) (2022-06-07)

### Bug Fixes

- **svelte:** fix ListInput onClear handler ([bd6c427](https://github.com/konstaui/konsta/commit/bd6c4278a19cc02ce1e281bb79329ee9b599002f)), closes [#52](https://github.com/konstaui/konsta/issues/52)
- **vue:** segmented strong highlighting ([#51](https://github.com/konstaui/konsta/issues/51)) ([570049f](https://github.com/konstaui/konsta/commit/570049f0d89c916abf9e8f27a2042725e168e6f8))

# [0.10.2](https://github.com/konstaui/konsta/compare/v0.10.1...v0.10.2) (2022-05-17)

### Features

- **button:** add disabled state ([a6330f1](https://github.com/konstaui/konsta/commit/a6330f11f1ed315e89da0db83c741a62f5021576))

# [0.10.1](https://github.com/konstaui/konsta/compare/v0.10.0...v0.10.1) (2022-05-16)

### Bug Fixes

- **svelte:** fix ListInput children error ([2b91a6c](https://github.com/konstaui/konsta/commit/2b91a6cf668e13d375d56ed7ff5f9f5f7df25bfe)), closes [#48](https://github.com/konstaui/konsta/issues/48)

# [0.10.0](https://github.com/konstaui/konsta/compare/v0.9.0...v0.10.0) (2022-04-28)

### Features

- **react:** Action Sheet components ([c1907ad](https://github.com/konstaui/konsta/commit/c1907add779b24cda14e5469d7c02c5d432991ff))
- **svelte:** Action Sheet components ([cf29c54](https://github.com/konstaui/konsta/commit/cf29c54e98e5fb63f43f85b219f6a4fdce9e0a46))
- **vue:** Action Sheet components ([9b1890b](https://github.com/konstaui/konsta/commit/9b1890beb8f9fc8936b64b3932659ce380b7f0a1))

# [0.9.0](https://github.com/konstaui/konsta/compare/v0.8.3...v0.9.0) (2022-04-28)

### Bug Fixes

- **ListItem:** use dark class on demand ([409ef5d](https://github.com/konstaui/konsta/commit/409ef5d653c424179f1c6ed003b538430a2aab35))
- **popover:** consider el.el case when calc Popover position ([a3cebb6](https://github.com/konstaui/konsta/commit/a3cebb6cdb4aa07276bcd522a0061253ae8bf618))

### Features

- **react:** Breadcrumbs components ([58a62c4](https://github.com/konstaui/konsta/commit/58a62c41e093604cfc60baa0be5fbd543358fd75))
- **svelte:** Breadcrumbs components ([098a8ec](https://github.com/konstaui/konsta/commit/098a8ec7f43203109efbc95aa18ede2da8a09da2))
- **types:** types for Breadcrumbs components ([86cd6b8](https://github.com/konstaui/konsta/commit/86cd6b8e684df742d8bd75aa4e3f581836240c2a))
- **vue:** Breadcrumbs components ([802aec1](https://github.com/konstaui/konsta/commit/802aec1574d672f746d40b4f5369d7c6718ecc2a))

# [0.8.3](https://github.com/konstaui/konsta/compare/v0.8.3...v0.8.3) (2022-04-27)

### Bug Fixes

- **svelte:** add `onClick` props types ([b237927](https://github.com/konstaui/konsta/commit/b237927cb29d2949337144b67248cde7eab8daad))

### Features

- allow to replace default fonts for iOS and Material themes ([b2f2244](https://github.com/konstaui/konsta/commit/b2f224446dbd8fb867cc0f83b26195b8a84ef144)), closes [#35](https://github.com/konstaui/konsta/issues/35)

# [0.8.2](https://github.com/konstaui/konsta/compare/v0.8.1...v0.8.2) (2022-04-20)

### Bug Fixes

- fix shared utils imports in "module" envs ([30793b0](https://github.com/konstaui/konsta/commit/30793b0b4dbc81b91b532f273436128a64abd655)), closes [#44](https://github.com/konstaui/konsta/issues/44)

# [0.8.1](https://github.com/konstaui/konsta/compare/v0.8.0...v0.8.1) (2022-04-17)

### Bug Fixes

- fix sveltekit imports ([9940518](https://github.com/konstaui/konsta/commit/9940518348b0d60c223005314dbe13806c56760f)), closes [#43](https://github.com/konstaui/konsta/issues/43)

# [0.8.0](https://github.com/konstaui/konsta/compare/v0.7.3...v0.8.0) (2022-04-15)

### Features

- Konsta Svelte components 🎉

# [0.7.3](https://github.com/konstaui/konsta/compare/v0.7.2...v0.7.3) (2022-04-12)

### Features

- move common components classes to shared resources

# [0.7.2](https://github.com/konstaui/konsta/compare/v0.7.1...v0.7.2) (2022-04-12)

### Bug Fixes

- **preloader:** fix iOS preloader animation in Safari ([8135ac7](https://github.com/konstaui/konsta/commit/8135ac7c44df2e6565e7b4bc52953ecec4aaa35d))

# [0.7.1](https://github.com/konstaui/konsta/compare/v0.7.0...v0.7.1) (2022-01-24)

### Bug Fixes

- segmented-button getting red ([#30](https://github.com/konstaui/konsta/issues/30)) ([#31](https://github.com/konstaui/konsta/issues/31)) ([2f9ef20](https://github.com/konstaui/konsta/commit/2f9ef207e929cf6c1d53a42bcffb9efc853a53ef))

# [0.7.0](https://github.com/tailwind-mobile/tailwind-mobile/compare/v0.6.0...v0.7.0) (2021-12-13)

- Konsta UI

# [0.6.0](https://github.com/tailwind-mobile/tailwind-mobile/compare/v0.5.1...v0.6.0) (2021-12-13)

### Features

- support tailwindcss 3 ([#28](https://github.com/tailwind-mobile/tailwind-mobile/issues/28)) ([888a087](https://github.com/tailwind-mobile/tailwind-mobile/commit/888a087f40272be8efeef5508deaa9b7afbc9b8a))

# [0.5.1](https://github.com/tailwind-mobile/tailwind-mobile/compare/v0.5.0...v0.5.1) (2021-11-29)

### Bug Fixes

- added `component` and `media` props types ([#17](https://github.com/tailwind-mobile/tailwind-mobile/issues/17)) ([42c0bf8](https://github.com/tailwind-mobile/tailwind-mobile/commit/42c0bf85d16ab2f8aa1d8c6d99087496e98d4d4d))

# [0.5.0](https://github.com/tailwind-mobile/tailwind-mobile/compare/v0.4.6-v0.5.0) (2021-10-18)

### Bug Fixes

- fix Icon and TabbarLink types ([2d91f6d](https://github.com/tailwind-mobile/tailwind-mobile/commit/2d91f6dd4dcf4921d433f1b75b4534b021f63b48))

### Features

- Tailwind Mobile Vue.js components
- set /react and /vue packages as `type: module` ([6d2578a](https://github.com/tailwind-mobile/tailwind-mobile/commit/6d2578af038a04227798810c982877aecb3e49c3))
- add Range `input` event handler` ([a6cdb4d](https://github.com/tailwind-mobile/tailwind-mobile/commit/a6cdb4d3722b7a9cc749855b8a0f23cd80c5c2bc))
- add Stepper `input` event handler ([99ad13c](https://github.com/tailwind-mobile/tailwind-mobile/commit/99ad13cbda8e64f6a4138436ad6b0c81efaca282))

# [0.5.0-beta.9](https://github.com/tailwind-mobile/tailwind-mobile/compare/v0.5.0-beta.8...0.5.0-beta.9) (2021-10-15)

### Bug Fixes

- export twmProvider in Vue types ([aab5588](https://github.com/tailwind-mobile/tailwind-mobile/commit/aab5588e1a9d26515f33e4f37b37f893f4b5ddb3))

# [0.5.0-beta.8](https://github.com/tailwind-mobile/tailwind-mobile/compare/v0.5.0-beta.7...v0.5.0-beta.8) (2021-10-14)

### Bug Fixes

- add package.json to exports ([d1dad2d](https://github.com/tailwind-mobile/tailwind-mobile/commit/d1dad2d8752acaeba069f3e250ed14cf507df752))

# [0.5.0-beta.7](https://github.com/tailwind-mobile/tailwind-mobile/compare/v0.5.0-beta.6...v0.5.0-beta.7) (2021-10-14)

### Bug Fixes

- fix Icon and TabbarLink types ([2d91f6d](https://github.com/tailwind-mobile/tailwind-mobile/commit/2d91f6dd4dcf4921d433f1b75b4534b021f63b48))

# [0.5.0-beta.6](https://github.com/tailwind-mobile/tailwind-mobile/compare/v0.5.0-beta.5...v0.5.0-beta.6) (2021-10-14)

### Features

- **vue:** export all components without `twm` prefix ([a8e8350](https://github.com/tailwind-mobile/tailwind-mobile/commit/a8e835041545a7b4473e9bbbd18187dd9c21f760))

# [0.5.0-beta.4](https://github.com/tailwind-mobile/tailwind-mobile/compare/v0.5.0-beta.3...v0.5.0-beta.4) (2021-10-12)

### Features

- set /react and /vue packages as `type: module` ([6d2578a](https://github.com/tailwind-mobile/tailwind-mobile/commit/6d2578af038a04227798810c982877aecb3e49c3))

# [0.5.0-beta.3](https://github.com/tailwind-mobile/tailwind-mobile/compare/v0.5.0-beta.1...v0.5.0-beta.2) (2021-10-12)

### Bug Fixes

- **vue:** add missing TailwindMobuileProvider `render` method

# [0.5.0-beta.2](https://github.com/tailwind-mobile/tailwind-mobile/compare/v0.5.0-beta.1...v0.5.0-beta.2) (2021-10-12)

### Bug Fixes

- **vue:** add missing TailwindMobuileProvider ([4607e68](https://github.com/tailwind-mobile/tailwind-mobile/commit/4607e6876be19c69d2ab167a3da3a16f3b06c3ef))

# [0.5.0-beta.1](https://github.com/tailwind-mobile/tailwind-mobile/compare/v0.4.6...v0.5.0-beta.1) (2021-10-12)

### Features

- Vue components
- add Range `input` event handler` ([a6cdb4d](https://github.com/tailwind-mobile/tailwind-mobile/commit/a6cdb4d3722b7a9cc749855b8a0f23cd80c5c2bc))
- add Stepper `input` event handler ([99ad13c](https://github.com/tailwind-mobile/tailwind-mobile/commit/99ad13cbda8e64f6a4138436ad6b0c81efaca282))

# [0.4.6](https://github.com/tailwind-mobile/tailwind-mobile/compare/v0.4.5...v0.4.6) (2021-09-13)

### Bug Fixes

- **list-input:** fix overflow with floating label ([56f1af7](https://github.com/tailwind-mobile/tailwind-mobile/commit/56f1af708882d5b1fc558458275b82e204b212ff)), closes [#10](https://github.com/tailwind-mobile/tailwind-mobile/issues/10)

# [0.4.5](https://github.com/tailwind-mobile/tailwind-mobile/compare/v0.4.4...v0.4.5) (2021-09-09)

### Bug Fixes

- **input:** fix missing `type` attribute ([239babd](https://github.com/tailwind-mobile/tailwind-mobile/commit/239babda918809c8c93c636f7b4fd4dd8181eb7e)), closes [#9](https://github.com/tailwind-mobile/tailwind-mobile/issues/9)

# [0.4.4](https://github.com/tailwind-mobile/tailwind-mobile/compare/v0.4.3...v0.4.4) (2021-09-06)

### Features

- parent framework theme detection ([75f5acf](https://github.com/tailwind-mobile/tailwind-mobile/commit/75f5acf474eea10a106338202bc8f421ef98486b))

# [0.4.3](https://github.com/tailwind-mobile/tailwind-mobile/compare/v0.4.2...v0.4.3) (2021-09-06)

### Features

- **config:** support 'ios' and 'md' classes ([2deeb3d](https://github.com/tailwind-mobile/tailwind-mobile/commit/2deeb3d6429abd1a883ad4d6c060d3ffc631d17c))

# [0.4.2](https://github.com/tailwind-mobile/tailwind-mobile/compare/v0.4.1...v0.4.2) (2021-09-06)

### Bug Fixes

- **config:** fix dark mode extension ([2a89557](https://github.com/tailwind-mobile/tailwind-mobile/commit/2a895579f94de61206cfb369f231c1398f579150))

# [0.4.1](https://github.com/tailwind-mobile/tailwind-mobile/compare/v0.4.0...v0.4.1) (2021-09-06)

### Bug Fixes

- **provider:** fix touchRipple defaults ([7989b4a](https://github.com/tailwind-mobile/tailwind-mobile/commit/7989b4ab8e95181f2d491b48d26b738ef66ebc16))

# [0.4.0](https://github.com/tailwind-mobile/tailwind-mobile/compare/v0.3.8...v0.4.0) (2021-09-06)

### Bug Fixes

- **navbar:** fix missing safe areas in material theme ([553c868](https://github.com/tailwind-mobile/tailwind-mobile/commit/553c868260587e15ef3279fc5acdee1541fd1c16))
- **toolbar:** fix toolbar height in material theme ([7c11178](https://github.com/tailwind-mobile/tailwind-mobile/commit/7c11178c55669fe24c053d64be75e556e158d830))

### Features

- **config:** purge can be an object ([8d98111](https://github.com/tailwind-mobile/tailwind-mobile/commit/8d98111778603c52acadc046e72067d84a752e86))
- **list-item:** auto strong title in menu list ([5153047](https://github.com/tailwind-mobile/tailwind-mobile/commit/5153047cfe6905740439b3b722c8deb0215479a1))
- **list-item:** item title font sizes ([615d950](https://github.com/tailwind-mobile/tailwind-mobile/commit/615d9502a215cedc35f6f15311142c786456f95f))
- **navbar:** theme-specific font sizes ([659d4cf](https://github.com/tailwind-mobile/tailwind-mobile/commit/659d4cf9003b68391d2722defae9c08eafc2fe3f))
- **panel:** new Side Panel component ([b9ca8ba](https://github.com/tailwind-mobile/tailwind-mobile/commit/b9ca8ba17f46a6d09bb7130845237ba6ee3d6bed))

## [0.3.8](https://github.com/tailwind-mobile/tailwind-mobile/compare/v0.3.7...v0.3.8) (2021-09-03)

## [0.3.7](https://github.com/tailwind-mobile/tailwind-mobile/compare/v0.3.6...v0.3.7) (2021-09-02)

### Features

- support `darkMode: 'media'` ([d0d960e](https://github.com/tailwind-mobile/tailwind-mobile/commit/d0d960e8e5ba13aadcf9b9e6012181b62490c6dc))

## [0.3.6](https://github.com/tailwind-mobile/tailwind-mobile/compare/v0.3.5...v0.3.6) (2021-09-02)

## [0.3.5](https://github.com/tailwind-mobile/tailwind-mobile/compare/v0.3.4...v0.3.5) (2021-09-02)

## [0.3.4](https://github.com/tailwind-mobile/tailwind-mobile/compare/v0.3.3...v0.3.4) (2021-09-02)

### Features

- **types:** export Props ([c2ae854](https://github.com/tailwind-mobile/tailwind-mobile/commit/c2ae85420f0607275bf4185506493df1d9efb779))

## [0.3.3](https://github.com/tailwind-mobile/tailwind-mobile/compare/v0.3.2...v0.3.3) (2021-09-01)

### Features

- **popover:** add translucent and angleClassName props ([a097703](https://github.com/tailwind-mobile/tailwind-mobile/commit/a097703b7df4a41b20e4cf0c006dbdb39b7ae7bc))
- add select-none to components ([ec936eb](https://github.com/tailwind-mobile/tailwind-mobile/commit/ec936ebbe86be7ca4882aae01c57c0922061fe11))

## [0.3.2](https://github.com/tailwind-mobile/tailwind-mobile/compare/v0.3.1...v0.3.2) (2021-09-01)

### Features

- escape safe side values ([25b4c07](https://github.com/tailwind-mobile/tailwind-mobile/commit/25b4c0720cd156657b88bbc7e1f13a58c2ab9155))
- remove variant modifier ([e090ed9](https://github.com/tailwind-mobile/tailwind-mobile/commit/e090ed9eed3b99352fd65651665bbf0463d27709))

## [0.3.1](https://github.com/tailwind-mobile/tailwind-mobile/compare/v0.3.0...v0.3.1) (2021-09-01)

### Features

- **package:** add release date ([5d04e33](https://github.com/tailwind-mobile/tailwind-mobile/commit/5d04e3382c764db40f9b39f34fcef0d8c04576b8))

# [0.3.0](https://github.com/tailwind-mobile/tailwind-mobile/compare/v0.2.5...v0.3.0) (2021-08-31)

### Features

- **app:** add `safeAreas` prop ([f4c9c94](https://github.com/tailwind-mobile/tailwind-mobile/commit/f4c9c940cca3b34b4546365cdc4c9e6e1800a56d))
- **demo:** update FAB position demo ([c60f7ab](https://github.com/tailwind-mobile/tailwind-mobile/commit/c60f7ab63bf216e09ef2fa27f1bdcffc8f093ffd))
- **demo:** update Popup demo ([f566134](https://github.com/tailwind-mobile/tailwind-mobile/commit/f5661345eb87b664c0b2e40495234386081ce634))
- **demo:** update Sheet demo ([5638a62](https://github.com/tailwind-mobile/tailwind-mobile/commit/5638a6278781cd224bf6e9bdd01c77abf789c58d))
- **list:** rest safe areas on inset list ([22b8d87](https://github.com/tailwind-mobile/tailwind-mobile/commit/22b8d87d64d855fc791e19c7e32a94146bd7478c))
- **popover:** consider safe areas during positioning ([8375b14](https://github.com/tailwind-mobile/tailwind-mobile/commit/8375b14a39ec2720a2cb8ebae5b0ecddb9edd61c))
- **popup:** reset safe areas ([a8f9011](https://github.com/tailwind-mobile/tailwind-mobile/commit/a8f90118dc3dfbd682d0ac6f60d5a5f4d2c2d350))
- **segmented:** animated strong segmented ([ecf6f71](https://github.com/tailwind-mobile/tailwind-mobile/commit/ecf6f71e3130d5766b95f2ffd03b52b511bf2417))

## [0.2.5](https://github.com/tailwind-mobile/tailwind-mobile/compare/v0.2.0...v0.2.5) (2021-08-27)

### Features

- begin safe areas ([2a57bae](https://github.com/tailwind-mobile/tailwind-mobile/commit/2a57bae675387b78d3577b05f7914ea40471b1ad))
- tweak base styles ([585027d](https://github.com/tailwind-mobile/tailwind-mobile/commit/585027de7cc63644429b54c826ac2a8c77440ec8))

# [0.2.0](https://github.com/tailwind-mobile/tailwind-mobile/compare/v0.1.1...v0.2.0) (2021-08-27)

### Features

- allow to enable/disable touch ripple ([0529a6b](https://github.com/tailwind-mobile/tailwind-mobile/commit/0529a6b058542a7c9cdfa0ad481bc79c4d891ef3))
- docs ([b058c59](https://github.com/tailwind-mobile/tailwind-mobile/commit/b058c59b52c6d672754ae25a45a1db67dc95a74b))

## [0.1.1](https://github.com/tailwind-mobile/tailwind-mobile/compare/v0.1.0...v0.1.1) (2021-08-27)

### Bug Fixes

- fix .d.ts imports ([88c6759](https://github.com/tailwind-mobile/tailwind-mobile/commit/88c67593464ccfabf5c54772036a8825c6fddc8d))

# [0.1.0](https://github.com/tailwind-mobile/tailwind-mobile/compare/v0.0.4...v0.1.0) (2021-08-27)

### Features

- add React typescript definitions ([49ef335](https://github.com/tailwind-mobile/tailwind-mobile/commit/49ef33529148713152b2391b23768c6139bdf02d))
- **progressbar:** tweak iOS styles ([6552ef6](https://github.com/tailwind-mobile/tailwind-mobile/commit/6552ef65939c4633cc8c52fc6277d2d37754c9cd))
- option to exclude dark: variants ([b09331c](https://github.com/tailwind-mobile/tailwind-mobile/commit/b09331cb8208bdf55bae8bce6bf3ef0c4cd08bd4))
- react refs ([e77a6e7](https://github.com/tailwind-mobile/tailwind-mobile/commit/e77a6e74a2f577ee643098f9cb01cdc539f188bc))
- **app:** new App component ([de882b5](https://github.com/tailwind-mobile/tailwind-mobile/commit/de882b5d8944fd285b8ae832f61a8d9a8685c6e2))
- **checkbox:** black icon in dark theme ([cd7c7e3](https://github.com/tailwind-mobile/tailwind-mobile/commit/cd7c7e3b8485dc5495f330ef0a14834f9a809962))
- **checkbox:** update iOS icon ([8407bb5](https://github.com/tailwind-mobile/tailwind-mobile/commit/8407bb5f5bb1a0355da5647401d368e0edf788b3))
- **popover:** tweak styles ([79c323e](https://github.com/tailwind-mobile/tailwind-mobile/commit/79c323e89a2e41129143ab2317537bd8ae37a20b))
- **radio:** update iOS icon ([67b6189](https://github.com/tailwind-mobile/tailwind-mobile/commit/67b61897aa4fcabafe9b7a76e4d488058af47dc6))
- **range:** update iOS styles ([1cda8b8](https://github.com/tailwind-mobile/tailwind-mobile/commit/1cda8b856f9aee14d20021ed6b2358d38ecffd24))
- **sheet:** new Sheet modal component ([15af2f7](https://github.com/tailwind-mobile/tailwind-mobile/commit/15af2f78b3ef4401ee2dec5438b8a6095747bd0a))
- add `touch` plugin ([ce8e8ce](https://github.com/tailwind-mobile/tailwind-mobile/commit/ce8e8ce06debae21be8597c8448f7c0bf5a4a4e7))

## [0.0.4](https://github.com/tailwind-mobile/tailwind-mobile/compare/v0.0.3...v0.0.4) (2021-08-26)

### Features

- remove dark mode and variants plugin in favor of JIT mode ([0663e96](https://github.com/tailwind-mobile/tailwind-mobile/commit/0663e96004e3536df4d0fa3e1988a9c52bc315d1))

## [0.0.3](https://github.com/tailwind-mobile/tailwind-mobile/compare/v0.0.2...v0.0.3) (2021-08-26)

### Features

- **config:** add self to purge ([cec552b](https://github.com/tailwind-mobile/tailwind-mobile/commit/cec552b8bd8de9f230064bf3b069c402972f56f1))
- **Navbar:** title text color ([cb4ff65](https://github.com/tailwind-mobile/tailwind-mobile/commit/cb4ff65a62b3d0531c8934c33cc4658b2061258f))
- add `hairlines` prop to where it is used ([21c5822](https://github.com/tailwind-mobile/tailwind-mobile/commit/21c58223f2e6c9bbcc948f4938208825432593b2))

## [0.0.2](https://github.com/tailwind-mobile/tailwind-mobile/compare/v0.0.1...v0.0.2) (2021-08-26)

### Features

- **config:** add 1em font sizes and 15,18 insets ([f0e0a1d](https://github.com/tailwind-mobile/tailwind-mobile/commit/f0e0a1df015d157468a2848cc9ff7be5af1f726b))
- **config:** extend spacing and scale values ([319b799](https://github.com/tailwind-mobile/tailwind-mobile/commit/319b799dc6727c438ede7b053153d061f31081a9))
- **hairlines:** extend hairlines with colors and durations ([59d4707](https://github.com/tailwind-mobile/tailwind-mobile/commit/59d47071ef510b6283538a27d23f6881f78fd047))
- **List,Block:** add hairlines prop ([f6ac793](https://github.com/tailwind-mobile/tailwind-mobile/commit/f6ac793b610daca593d1c50d8298f8ffc245ea05))
- **ListButton:** remove hailrine prop ([c4706b0](https://github.com/tailwind-mobile/tailwind-mobile/commit/c4706b0c0f88eae70398cfbf0af39ee62754b4ba))
- **ListInput:** new ListInput component ([0c45191](https://github.com/tailwind-mobile/tailwind-mobile/commit/0c45191300e26dc5b21713a009f262f2a8bf8b5b))
- add first/last-child variants ([d148e55](https://github.com/tailwind-mobile/tailwind-mobile/commit/d148e5507478c14738cf18e72b829377a8e3244a))
- icons use `currentcolor` for fill ([befa7b5](https://github.com/tailwind-mobile/tailwind-mobile/commit/befa7b56d738a478ae8b0f42ee57c6a73ab6d317))
- new FAB component ([fa144ba](https://github.com/tailwind-mobile/tailwind-mobile/commit/fa144bad3fc24c3525516ae384ba9e0286c5ba24))
- new ListGroup component ([a58e639](https://github.com/tailwind-mobile/tailwind-mobile/commit/a58e639c55d3becbd31db18ca0a740675ba7f5da))
- use last-child variants to disable list hairlines ([227f923](https://github.com/tailwind-mobile/tailwind-mobile/commit/227f9231b0a2b869536971f435f156b2856ba206))

## [0.0.1](https://github.com/tailwind-mobile/tailwind-mobile/compare/53b0e6f97b38287a9ddf12accba7bc08428f2b79...v0.0.1) (2021-02-16)

### Features

- add themeClasses util ([53b0e6f](https://github.com/tailwind-mobile/tailwind-mobile/commit/53b0e6f97b38287a9ddf12accba7bc08428f2b79))
- Checkbox component ([4f23379](https://github.com/tailwind-mobile/tailwind-mobile/commit/4f2337910fcca3902164674a340ff72ef5b9c00b))
- Radio component ([464a669](https://github.com/tailwind-mobile/tailwind-mobile/commit/464a6695bef9c0c05e776dd7d26e139839a5fea8))

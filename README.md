# ccs-annotator-client

This repo basically just imports ccs-annotator-client, but tweaks it and builds it so that it can be used in the ccsAnnotator R package.

```bash
git clone https://github.com/ccs-amsterdam/ccs-annotator-client-r
cd CCS_annotator
npm install
```

Build and bundle

```bash
npm run build
```

Then copy the build folder into ccsAnnotator/inst/ccs-annotator-client/

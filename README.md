## spfx-loading-indicator

Sample SharePoint Framework (SPFx) webpart that demonstrates taking advantage of the Loading Indicator. More details can be found here: https://thechriskent.com/2017/05/22/taking-advantage-of-the-loading-indicator-in-the-sharepoint-framework/

### Building the code

```bash
git clone the repo
npm i
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### To Run

gulp serve

# app

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

I didn't feel the problem required an API so the app has been conceptualised as a 3 pane workflow: 
* an input textarea into which CSV input can be copied / typed, 
* an output div for displaying the results of the calculations for each input, and,
* an error div for displaying invalid data. 

To use: rpPaste in a blob of CSV pay information into the input section (left pane) and the calculation results will be displayed in the right pane (or errors down in the bottom pane).

## Setup

Be sure to `npm install` and `bower install` after checking out the code.

## Build & development

Run `grunt build` for building and `grunt serve` for preview. Navigate to http://{your host}:9000 to view the app after running `grunt serve`.

To build the deployable instance using buildcontrol:
```
> grunt build
> grunt buildcontrol:pages
```

This will build a deployable version and push it to github pages.

## Testing

Running `grunt test` will run the unit tests with karma.

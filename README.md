Max DeCurtins  
Harvard University
## Clef: A MIR Application
Clef is a web-based music information retrieval (MIR) application framework designed to provide a common interface for diverse algorithms performing searches of symbolic music data. Clef is an **experimental** framework and will likely change significantly.

Current Version: 1.0.0
## About this Repository
This repository is for the **web application** portion of the Clef system.

The current version of the web application uses the browser-based music notation editor available from [Flat.io](https://flat.io/developers). It is perfectly possible to use other embeddable music notation editors, provided that the content of any sheet music document can be obtained by calling an API method of the editor that returns MusicXML data. Note that the Flat.io app ID associated with any embedded music editor(s) must have 'edit' permissions, or else your music document will be read-only.

The web application is intended to be used with the Clef Core API, which provides information about available MIR algorithms and datasets, and which also provides the query route for submitting MIR queries. 

This project was bootstrapped using [create-react-app](https://github.com/facebook/create-react-app).

#### Source Guide
`src/actions` contains Redux action creators.

`src/components` contains React components for use with Clef.

`src/reducers` contains Redux state reducers. 

`src/utils` contains utility classes.


> Initially the project is run with followong command:

```
parcel index.html
```

Running that command we intall typescript under the hood.
Parcel is detecting that we need TS and installs it.

> What we are using here:

* AXIOS - for http calls for `save()` and `fetch()` events
* JSON Server - store information

> Start JSON Server form the root dir where is db.json file.
Both services [Parcel && JSON Server] must work simultaneously.

```
command: json-server -w db.json
```

> Subsequently we are running the project with npm command:
```
npm run start:parcel
npm run start:db
```
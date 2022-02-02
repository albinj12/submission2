# submission2

### run frontend

```
npm install
```

```
npm run serve
```

### run emitter service

```
npm install
```

```
npm run start
```

### run listener service

```
npm install
```

```
npm run start
```

## Implemented functionalities
- emitter service
  - Create random data from data.json
  - Create hash of the data
  - Encrypt data
  - Emit data to listener service
- listener service
  - Decrypt data
  - Verify hash
  - Save to db
  - Emit data to frontend
  
## Functionality not implemented
- save as one document per minute

# Webhook Test

A simple webhook test for listening to events. Bundled with a SQLite3 DB, a lightweight database

## Instructions for setup

Dependencies: NodeJS, NPM, Express, Pug & Nodemon

- Install dependencies with ```npm install``` command
- Run ```npm run start```
- Bse URL is ```http://localhost:3000```
- Visit ```/track``` for viewing updates on HTML
- Post request with mock object to test at ```/event```
- It contains auto trimmer for DB records older than 7 days

## URL Endpoints
- ```/event```
- ```/tack```

## Mock Data
1. 
```
{
  "action": "create",
  "entity_type": "component",
  "time": "2021-12-20T10:59:55Z",
  "payload": {
    "id": "25589645-cd89-44bb-8954-6b4ee87aa57f",
    "name": "image name",
    "file_type": "jpeg"
  }
}
```
2. 
```
{
    "action": "update",
    "entity_type": "task",
    "time": "2021-12-21T08:51:22Z",
    "id": "25589645-cd89-44bb-8954-6b4ee87aa57f",
    "modified_fields": ["assignee"],
    "payload": {
        "name": "task name",
        "assignee_id": "5428abf6-0f4c-4448-b619-fc9f4327619b"
    }
}
```

---
author: Anand Venkataraman
date: 09Feb2022
---
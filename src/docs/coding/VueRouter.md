# Vue Router Coding Standards

## 1. Overview

Each entry **MUST** define the route's path, name and component keys.

Related route components **SHOULD** be grouped in the same async chunk.

```javascript
const UserDetails = () =>
  import(/* webpackChunkName: "group-user" */ './UserDetails.vue');
const UserDashboard = () =>
  import(/* webpackChunkName: "group-user" */ './UserDashboard.vue');
const UserProfileEdit = () =>
  import(/* webpackChunkName: "group-user" */ './UserProfileEdit.vue');
```

## 2. CRUD

The path **MUST** be in kebab-case.

The path **SHOULD** be in the plural form.

The name **SHOULD** be in PascalCase.

### 2.1. Display a listing of the resource

Path: /users  
Name: UsersIndex

### 2.2. Show the form for creating a new resource

Path: /users/create  
Name: UsersCreate

### 2.3. Display the specified resource

Path: /users/:id  
Name: UsersShow

### 2.4. Show the form for editing the specified resource

Path: /users/:id/edit  
Name: UsersEdit

## 3. Links

Links **MUST** use object notation and reference the route's name.

```html
<RouterLink :to="{ name: 'About' }">About</RouterLink>
```

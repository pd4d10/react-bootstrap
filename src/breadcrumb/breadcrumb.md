Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.

### Example

```js
<>
  <Breadcrumb>
    <BreadcrumbItem active>Home</BreadcrumbItem>
  </Breadcrumb>
  <Breadcrumb>
    <BreadcrumbItem>
      <a href="javascript:">Home</a>
    </BreadcrumbItem>
    <BreadcrumbItem active>Library</BreadcrumbItem>
  </Breadcrumb>
  <Breadcrumb>
    <BreadcrumbItem>
      <a href="javascript:">Home</a>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <a href="javascript:">Library</a>
    </BreadcrumbItem>
    <BreadcrumbItem active>Data</BreadcrumbItem>
  </Breadcrumb>
</>
```

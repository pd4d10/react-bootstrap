### Example

```js
<Navbar
  color="light"
  bsStyle={{ bg: 'light' }}
  brand={<NavbarBrand>Navbar</NavbarBrand>}
  right={
    <Form inline>
      <Input type="search" placeholder="Search" bsStyle={{ mr: 2 }} />
      <Button
        theme="success"
        outline
        onClick={e => {
          e.preventDefault()
        }}
      >
        Search
      </Button>
    </Form>
  }
>
  <NavAnchor href="javascript:" active>
    Home
  </NavAnchor>
  <NavAnchor href="javascript:">Link</NavAnchor>
  <NavAnchor href="javascript:" disabled>
    Disabled
  </NavAnchor>
</Navbar>
```

### Theme

```js
<Navbar
  color="dark"
  bsStyle={{ bg: 'dark' }}
  brand={<NavbarBrand>Navbar</NavbarBrand>}
  right={
    <Form inline>
      <Input type="search" placeholder="Search" bsStyle={{ mr: 2 }} />
      <Button
        theme="success"
        outline
        onClick={e => {
          e.preventDefault()
        }}
      >
        Search
      </Button>
    </Form>
  }
>
  <NavAnchor href="javascript:" active>
    Home
  </NavAnchor>
  <NavAnchor href="javascript:">Link</NavAnchor>
  <NavAnchor href="javascript:" disabled>
    Disabled
  </NavAnchor>
</Navbar>
```

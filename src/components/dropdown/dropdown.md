### Examples

```js
<>
  <Dropdown
    theme="primary"
    text="Dropdown"
    popup={
      <>
        <DropdownItem href="javascript:">Action</DropdownItem>
        <DropdownItem href="javascript:">Another action</DropdownItem>
        <DropdownItem href="javascript:">Something else here</DropdownItem>
        <DropdownDivider />
        <DropdownItem href="javascript:">Separated link</DropdownItem>
      </>
    }
  />
</>
```

## Theme

```js
<>
  <Dropdown
    theme="warning"
    text="Dropdown"
    popup={
      <>
        <DropdownItem href="javascript:">Action</DropdownItem>
        <DropdownItem href="javascript:">Another action</DropdownItem>
        <DropdownItem href="javascript:">Something else here</DropdownItem>
        <DropdownDivider />
        <DropdownItem href="javascript:">Separated link</DropdownItem>
      </>
    }
  />
</>
```

## Size

```js
<>
  <Dropdown
    size="lg"
    text="Large button"
    popup={
      <>
        <DropdownItem>
          <a href="#">Action</a>
        </DropdownItem>
        <DropdownItem>
          <a href="#">Another action</a>
        </DropdownItem>
        <DropdownItem>
          <a href="#">Something else here</a>
        </DropdownItem>
        <DropdownDivider />
        <DropdownItem>
          <a href="#">Separated link</a>
        </DropdownItem>
      </>
    }
  />{' '}
  <Dropdown
    size="lg"
    text="Large split button"
    popup={
      <>
        <DropdownItem>
          <a href="#">Action</a>
        </DropdownItem>
        <DropdownItem>
          <a href="#">Another action</a>
        </DropdownItem>
        <DropdownItem>
          <a href="#">Something else here</a>
        </DropdownItem>
        <DropdownDivider />
        <DropdownItem>
          <a href="#">Separated link</a>
        </DropdownItem>
      </>
    }
  />
</>
```

## Direction

```js
<>
  <Dropdown
    direction="up"
    text="Dropup"
    popup={
      <>
        <DropdownItem>
          <a href="#">Action</a>
        </DropdownItem>
        <DropdownItem>
          <a href="#">Another action</a>
        </DropdownItem>
        <DropdownItem>
          <a href="#">Something else here</a>
        </DropdownItem>
        <DropdownDivider />
        <DropdownItem>
          <a href="#">Separated link</a>
        </DropdownItem>
      </>
    }
  />
  <Dropdown
    direction="left"
    text="Dropup"
    popup={
      <>
        <DropdownItem>
          <a href="#">Action</a>
        </DropdownItem>
        <DropdownItem>
          <a href="#">Another action</a>
        </DropdownItem>
        <DropdownItem>
          <a href="#">Something else here</a>
        </DropdownItem>
        <DropdownDivider />
        <DropdownItem>
          <a href="#">Separated link</a>
        </DropdownItem>
      </>
    }
  />
  <Dropdown
    direction="right"
    text="Dropup"
    popup={
      <>
        <DropdownItem>
          <a href="#">Action</a>
        </DropdownItem>
        <DropdownItem>
          <a href="#">Another action</a>
        </DropdownItem>
        <DropdownItem>
          <a href="#">Something else here</a>
        </DropdownItem>
        <DropdownDivider />
        <DropdownItem>
          <a href="#">Separated link</a>
        </DropdownItem>
      </>
    }
  />
</>
```

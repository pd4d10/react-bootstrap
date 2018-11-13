### Examples

```js
<>
  <Dropdown
    text="Dropdown"
    overlay={
      <DropdownMenu>
        <DropdownItem href="javascript:">Action</DropdownItem>
        <DropdownItem href="javascript:">Another action</DropdownItem>
        <DropdownItem href="javascript:">Something else here</DropdownItem>
        <DropdownDivider />
        <DropdownItem href="javascript:">Separated link</DropdownItem>
      </DropdownMenu>
    }
    style={{ height: 200 }}
  />
</>
```

## Theme

```js
<>
  <Dropdown
    theme="warning"
    text="Dropdown"
    overlay={
      <DropdownMenu>
        <DropdownItem href="javascript:">Action</DropdownItem>
        <DropdownItem href="javascript:">Another action</DropdownItem>
        <DropdownItem href="javascript:">Something else here</DropdownItem>
        <DropdownDivider />
        <DropdownItem href="javascript:">Separated link</DropdownItem>
      </DropdownMenu>
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
    overlay={
      <DropdownMenu>
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
      </DropdownMenu>
    }
  />{' '}
  <Dropdown
    size="lg"
    text="Large split button"
    overlay={
      <DropdownMenu>
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
      </DropdownMenu>
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
    overlay={
      <DropdownMenu>
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
      </DropdownMenu>
    }
  />
  <Dropdown
    direction="left"
    text="Dropup"
    overlay={
      <DropdownMenu>
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
      </DropdownMenu>
    }
  />
  <Dropdown
    direction="right"
    text="Dropup"
    overlay={
      <DropdownMenu>
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
      </DropdownMenu>
    }
  />
</>
```
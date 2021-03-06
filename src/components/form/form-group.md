## Themes

Specify `theme` to use predefined styles.

```js
<>
  <form onSubmit={e => { e.preventDefault() }}>
    <FormGroup>
      <Label htmlFor="exampleInputEmail1">Email address</Label>
      <Input type="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </FormGroup>
    <FormGroup>
      <Label htmlFor="exampleInputPassword1">Password</Label>
      <Input type="password" id="exampleInputPassword1" placeholder="Password" />
    </FormGroup>
    <FormGroup check>
      <Input type="checkbox" id="exampleCheck1" />
      <Label htmlFor="exampleCheck1">Check me out</Label>
    </FormGroup>
    <Button type="submit" theme="primary">Submit</Button>
  </form>
</>
```

### Size

```js
<>
  <Input size="lg" placeholder="Large input" />
  <Input placeholder="Default input" />
  <Input size="sm" placeholder="Small input" />
</>
```

### Range inputs

```js
<>
  <form>
    <FormGroup>
      <Label htmlFor="formControlRange">Example Range input</Label>
      <Input type="range" id="formControlRange" />
    </FormGroup>
  </form>
</>
```

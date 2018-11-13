### Example

```js
<>
  <Jumbotron>
    <View component="h1" bsStyle={{ display: 4 }}>
      Hello, world!
    </View>
    <View component="p" bsStyle={{ lead: true }}>
      This is a simple hero unit, a simple jumbotron-style component for calling
      extra attention to featured content or information.
    </View>
    <View component="hr" bsStyle={{ my: 4 }} />
    <p>
      It uses utility classes for typography and spacing to space content out
      within the larger container.
    </p>
    <Button theme="primary" size="lg">
      Learn more
    </Button>
  </Jumbotron>
</>
```

### Fluid

```js
<>
  <Jumbotron fluid>
    <Container>
      <View component="h1" bsStyle={{ display: 4 }}>
        Fluid jumbotron
      </View>
      <View component="p" bsStyle={{ lead: true }}>
        This is a modified jumbotron that occupies the entire horizontal space
        of its parent.
      </View>
    </Container>
  </Jumbotron>
</>
```

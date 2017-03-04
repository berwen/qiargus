# nbjs

This repo is mainly for jupyter notebook.

## Environment
* python 3.5+

## Dependencies
* ipython

## Interface

### nbjs.init()
*Put the code below to the first cell of notebook to initialize nbjs.*

```python
import nbjs
nbjs.init()
```

### nbjs.render(type, data)
```python
nbjs.render('word_cloud', {'data': 'hello|world', 'width': 900, 'height': 600})
```

## Support diagrams

### word cloud
* type: word_cloud
* data: string seperated by '|'
```
sample:
'hello|world|hello|nbjs'
```

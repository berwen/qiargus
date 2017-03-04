# nbjs

This repo is mainly for jupyter notebook.

## Interface

### nbjs.render(type, data)
    nbjs.render('word_cloud', {'data': 'hello|world', 'width': 900, 'height': 600})


## Support diagrams

### word cloud
* type: word_cloud
* data: string seperated by '|'
    
    sample:
    'hello|world|hello|nbjs'
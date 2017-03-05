
def validate_data(graph_type, data):
    if graph_type == 'pie_chart':
        assert type(data) == str
    elif graph_type == 'word_cloud':
        assert type(data) == str


def preprocess_data(graph_type, data):
    if graph_type == 'pie_chart':
        assert type(data) == str
        return {'data': data} 

    elif graph_type == 'word_cloud':
        assert type(data) == str or type(data) == dict
        if type(data) == dict:
            assert 'data' in data
            
        if type(data) == str:
            return {'data': data}    
        else:
            return data
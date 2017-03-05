
def validate_data(graph_type, data):
    if graph_type == 'pie_chart':
        assert type(data) == str
    elif graph_type == 'word_cloud':
        assert type(data) == str


def preprocess_data(graph_type, data):
    if graph_type == 'chartjs_pie_chart':
        assert type(data) == dict
        
        return {'data': data} 

    elif graph_type == 'word_cloud':
        assert type(data) == str or type(data) == dict
        if type(data) == dict:
            assert 'data' in data
            
        if type(data) == str:
            return {'data': data}    
        else:
            return data
    else:
        return data

def get_init_html(graph_type):
    if graph_type.startswith('nvd3'):
        return '<svg></svg>'

    else:
        return ''

GRAPH_TYPE_WITH_CSS_BINDING = ['nvd3_discrete_bar_chart']

def get_default_css_binding(graph_type):
    if graph_type in GRAPH_TYPE_WITH_CSS_BINDING:
        return True
    else:
        return None

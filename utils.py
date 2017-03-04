
def validate_data(graph_type, data):
    if graph_type == 'pie_chart':
        assert type(data) == str
    elif graph_type == 'word_cloud':
        assert type(data) == str
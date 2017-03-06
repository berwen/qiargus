import json
import inspect, os

def this_dir():
    this_file = inspect.getfile(inspect.currentframe())
    return os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))


# data param injected to js is a json like {'data': ... }
def preprocess_data(graph_type, options):
    if 'data' not in options:
        options['data'] = {}

    data = options['data']

    if graph_type == 'chartjs_pie_chart' or graph_type == 'chartjs_doughnut_chart':
        assert type(data) == dict
        options['data'] = {
            'data': data
        }

    elif graph_type == 'nvd3_discrete_bar_chart':
        assert type(data) == dict
        values = []
        for label in data:
            values.append({
                'label': label,
                'value': data[label]
            })

        key = options['key'] if 'key' in options else 'no key'

        options['data'] = {
            'values': values,
            'key': key 
        }

    elif graph_type == 'word_cloud':
        assert type(data) == str or type(data) == dict
        if type(data) == dict:
            assert 'data' in data

        options['data'] = {
            'data': data
        }

    elif graph_type == 'echarts_china_map':
        assert type(data) == dict

        mapped_data = {}
        for label in data:
            list_data = []
            for city_name in data[label]:
                new_city_name = city_name
                if city_name.endswith('市'):
                    new_city_name = city_name[:-1]

                list_data.append({
                    'name': new_city_name,
                    'value': float(data[label][city_name])
                })
            mapped_data[label] = list_data

        options['data'] = {
            'data': mapped_data,
            'title': options.get('title')
        }

    else:
        return data

    options['data'] = json.dumps(options['data'])

    return options

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

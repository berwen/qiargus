import random
import json
import inspect, os
from string import Template


def this_dir():
    this_file = inspect.getfile(inspect.currentframe())
    return os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))


def set_styles(css_file_names, scoped=False):
    if type(css_file_names) == str:
        style = open(this_dir() + '/css/' + css_file_names + '.css','r').read()
    else:
        style = ''
        for css_file_name in css_file_names:
            style += open(this_dir() + '/css/' + css_file_name + '.css','r').read()

    if not scoped:
        return "<style>" + style + "</style>"
    else:
        return "<style scoped>" + style + "</style>"

def get_d3_js():
    js = open(this_dir() + '/lib/d3/d3.min.js', 'r').read()

    return '<script>' + js + '</script>'

def get_d3_cloud_js():
    js = open(this_dir() + '/lib/d3-cloud/d3.layout.cloud.js', 'r').read()

    return '<script>' + js + '</script>'

def load_js_dependecies():
    scripts = ''
    JS_text = '''
        requirejs.config({
            paths: { 
                'd3': ['//cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3'],
                'jquery': ['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min'],
                'Chart': ['//cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart']
            },
        });

        require(['jquery', 'd3', 'd3-cloud', 'Chart'], function(data) {
            console.log("All js deps loaded.");    
            return {};
        });
    '''
    scripts += '<script>' + JS_text + '</script>'
    # 'd3-cloud': ['//cdn.rawgit.com/jasondavies/d3-cloud/master/build/d3.layout.cloud'],
    scripts += get_d3_cloud_js()

    return scripts

def get_common_js():
    return get_d3_js() + get_d3_cloud_js() + get_chart_js()
 

def draw_graph(type, data_dict):

    JS_text = Template('''

                <div id='maindiv${divnum}'></div>

                <script>
                    $main_text
                </script>

                ''')

    divnum = int(random.uniform(0,9999999999))
    data_dict['divnum'] = divnum
    main_text_template = Template( open(this_dir() + '/js/' + type + '.js','r').read() )
    main_text = main_text_template.safe_substitute(data_dict)

    return JS_text.safe_substitute({'divnum': divnum, 'main_text': main_text})

def render(graph_type, data_dict, css_file_names=None):
    if css_file_names is None:
        css_file_names = [graph_type]

    JS_text = Template('''
        <div>
            $style

            <div id='maindiv${divnum}'></div>

            <script>
                $main_text
            </script>
        </div>
    ''')

    divnum = int(random.uniform(0,9999999999))
    data_dict['divnum'] = divnum
    if 'data' in data_dict:
        data_dict['data'] = json.dumps(data_dict['data'])
    main_text_template = Template( open(this_dir() + '/js/' + graph_type + '.js','r').read() )
    main_text = main_text_template.safe_substitute(data_dict)

    style = set_styles(css_file_names, scoped=True)

    return JS_text.safe_substitute({'divnum': divnum, 'main_text': main_text, 'style': style})




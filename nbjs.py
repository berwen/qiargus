import random
import json
import inspect, os
import utils

from string import Template

from IPython.core import display

def init():
    result = display.HTML(load_js_dependecies())
    return result

def render_graph(graph_type, dict_data, css_file_names=None):
    if 'data' not in dict_data:
        dict_data['data'] = {}

    utils.validate_data(graph_type, dict_data['data'])
    dict_data['data'] = json.dumps(dict_data['data'])
    result = display.HTML(_render_graph(graph_type, dict_data, css_file_names=None))
    return result

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

# def get_d3_js():
#     js = open(this_dir() + '/lib/d3/d3.min.js', 'r').read()

#     return '<script>' + js + '</script>'

# def get_d3_cloud_js():
#     js = open(this_dir() + '/lib/d3-cloud/d3.layout.cloud.js', 'r').read()

#     return '<script>' + js + '</script>'

def load_js_dependecies():
    scripts = ''
    JS_text = '''
        requirejs.config({
            paths: { 
                'jquery': ['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min'],
                'd3': ['//cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3'],
                'd3-cloud': ['//cdn.rawgit.com/jasondavies/d3-cloud/f00a5113/build/d3.layout.cloud'],
                'Chart': ['//cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart']
            },
            shim: {
                'd3-cloud': {
                    deps: ['d3'],
                    exports: 'd3Cloud'
                }
　　　　　　  }
        });

        require(['jquery', 'd3', 'Chart'], function(data) {
            console.log("Basic dependencies loaded.");    
            return {};
        });

        require(['d3-cloud'], function(d3Cloud) {
            d3.layout.cloud = d3Cloud;
            console.log("d3-cloud loaded.");    
            return {}
        });
    '''
    scripts += '<script>' + JS_text + '</script>'
    # 'd3-cloud': ['//cdn.rawgit.com/jasondavies/d3-cloud/master/build/d3.layout.cloud'],
    # scripts += get_d3_cloud_js()

    return scripts

def _render_graph(graph_type, dict_data, css_file_names=None):
    if css_file_names is None:
        css_file_names = [graph_type]

    JS_text = Template('''
        <div>
            $style

            <div id='maindiv${divnum}'></div>

            <script>
                !function() {
                    $main_text
                }();
            </script>
        </div>
    ''')

    divnum = int(random.uniform(0,9999999999))
    dict_data['divnum'] = divnum

    main_text_template = Template( open(this_dir() + '/js/' + graph_type + '.js','r').read() )
    main_text = main_text_template.safe_substitute(dict_data)

    style = set_styles(css_file_names, scoped=True)

    return JS_text.safe_substitute({'divnum': divnum, 'main_text': main_text, 'style': style})



